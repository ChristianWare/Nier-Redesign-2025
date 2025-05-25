/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState, startTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// import { AddressAutofill } from "@mapbox/search-js-react";
import { getQuote } from "@/app/(actions)/quote";
import dynamic from "next/dynamic";

const AddressAutofill = dynamic(
  () =>
    import("@mapbox/search-js-react").then(
      (m) => m.AddressAutofill as unknown as React.ComponentType<any>
    ),
  { ssr: false }
);


// zod schema ↓
const FormSchema = z.object({
  serviceId: z.coerce.number(),
  date: z.string(),
  time: z.string(),
  passengers: z.coerce.number().min(1).max(8),
  luggage: z.coerce.number().min(0).max(8),
  pickup: z.object({ lng: z.number(), lat: z.number() }),
  dropoff: z.object({ lng: z.number(), lat: z.number() }),
});

type FormValues = z.infer<typeof FormSchema>;

export default function TripDetailsStep({
  draftId,
  onComplete,
}: {
  draftId: string | null;
  onComplete: (id: string) => void;
}) {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const [quote, setQuote] = useState<Awaited<
    ReturnType<typeof getQuote>
  > | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = (data: FormValues) => {
    setLoading(true);
    const payload = {
      draftId,
      serviceId: data.serviceId,
      scheduledAt: new Date(`${data.date}T${data.time}`),
      passengers: data.passengers,
      luggage: data.luggage,
      pickup: data.pickup,
      dropoff: data.dropoff,
    };

    startTransition(async () => {
      const res = await getQuote(payload);
      setQuote(res);
      setLoading(false);
      onComplete(res.draftId);
    });
  };

  const pickup = watch("pickup");
  const dropoff = watch("dropoff");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
      {/* ── Pickup ───────────────────────────────────────────── */}
      <AddressAutofill
        accessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN!}
        onRetrieve={(e: any) => {
          const [lng, lat] = e.features[0].geometry.coordinates;
          setValue("pickup", { lng, lat });
        }}
      >
        <input
          placeholder='Pickup address'
          className='input'
          autoComplete='shipping address-line1'
        />
      </AddressAutofill>

      {/* ── Drop-off ─────────────────────────────────────────── */}
      <AddressAutofill
        accessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN!}
        onRetrieve={(e: any) => {
          const [lng, lat] = e.features[0].geometry.coordinates;
          setValue("dropoff", { lng, lat });
        }}
      >
        <input
          placeholder='Drop-off address'
          className='input'
          autoComplete='shipping address-line1'
        />
      </AddressAutofill>

      {/* ── Other fields ─────────────────────────────────────── */}
      <input type='date' {...register("date")} className='input' />
      <input type='time' {...register("time")} className='input' />
      <input
        type='number'
        {...register("passengers", { valueAsNumber: true })}
        placeholder='Passengers'
        className='input'
      />
      <input
        type='number'
        {...register("luggage", { valueAsNumber: true })}
        placeholder='Luggage'
        className='input'
      />

      <button type='submit' className='btn' disabled={loading}>
        {loading ? "Calculating…" : "Next"}
      </button>

      {/* ── Quote summary ────────────────────────────────────── */}
      {quote && (
        <div className='mt-6 p-4 rounded border'>
          <p>Distance: {(quote.distanceM / 1609.34).toFixed(1)} miles</p>
          <p>ETA: {(quote.durationS / 60).toFixed(0)} mins</p>
          <p className='font-bold'>
            Fare: ${(quote.priceCents / 100).toFixed(2)}
          </p>
        </div>
      )}

      {/* ── Map preview ──────────────────────────────────────── */}
      {pickup && dropoff && (
        <Map
          initialViewState={{
            longitude: pickup.lng,
            latitude: pickup.lat,
            zoom: 11,
          }}
          style={{ width: "100%", height: 300 }}
          mapStyle='mapbox://styles/mapbox/streets-v12'
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        />
      )}
    </form>
  );
}
