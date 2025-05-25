"use server";

import { prisma } from "@/lib/prisma";
import type { BookingStatus } from "@prisma/client";

interface QuoteInput {
  draftId: string | null;
  serviceId: number;
  scheduledAt: Date;
  passengers: number;
  luggage: number;
  pickup: { lng: number; lat: number };
  dropoff: { lng: number; lat: number };
}

export async function getQuote(input: QuoteInput) {
  // 1) call Mapbox Directions
  const coords = `${input.pickup.lng},${input.pickup.lat};${input.dropoff.lng},${input.dropoff.lat}`;
  const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${coords}?overview=false&access_token=${process.env.MAPBOX_SECRET_TOKEN}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Mapbox failed");
  const json = await res.json();
  const route = json.routes[0];
  const distanceM = Math.round(route.distance);
  const durationS = Math.round(route.duration);
  const priceCents = Math.round((distanceM / 1609.34) * 200); // e.g. $2/mile

  // 2) persist two Location rows
  const [pickupLoc, dropoffLoc] = await Promise.all([
    prisma.location.create({
      data: {
        // you might also fill street/city/etc from your autofill result
        label: "Pickup",
        street: "",
        city: "",
        state: "",
        zip: "",
        lat: input.pickup.lat,
        lng: input.pickup.lng,
      },
    }),
    prisma.location.create({
      data: {
        label: "Drop-off",
        street: "",
        city: "",
        state: "",
        zip: "",
        lat: input.dropoff.lat,
        lng: input.dropoff.lng,
      },
    }),
  ]);

  // 3) create or update the Booking
  let booking = null;
  if (input.draftId) {
    booking = await prisma.booking.update({
      where: { id: input.draftId },
      data: {
        serviceId: input.serviceId,
        pickupId: pickupLoc.id,
        dropoffId: dropoffLoc.id,
        scheduledAt: input.scheduledAt,
        passengers: input.passengers,
        luggage: input.luggage,
        distanceM,
        durationS,
        priceCents,
      },
    });
  } else {
    booking = await prisma.booking.create({
      data: {
        // you’ll need to set `userId` here too, e.g. from the session
        userId: "‹CURRENT_USER_ID›",
        serviceId: input.serviceId,
        pickupId: pickupLoc.id,
        dropoffId: dropoffLoc.id,
        scheduledAt: input.scheduledAt,
        passengers: input.passengers,
        luggage: input.luggage,
        distanceM,
        durationS,
        priceCents,
        status: "PENDING" as BookingStatus,
      },
    });
  }

  return {
    draftId: booking.id,
    distanceM: booking.distanceM,
    durationS: booking.durationS,
    priceCents: booking.priceCents,
  };
}
