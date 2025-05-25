/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// src/components/TripDetailsStep.tsx
"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  LoadScript,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

const FormSchema = z.object({
  pickupAddress: z.string(),
  dropoffAddress: z.string(),
  date: z.string(),
  time: z.string(),
  passengers: z.coerce.number().min(1).max(8),
  luggage: z.coerce.number().min(0).max(8),
});

type FormValues = z.infer<typeof FormSchema>;

interface Quote {
  distanceM: number;
  durationS: number;
  directions: google.maps.DirectionsResult;
}

export default function TripDetailsStep({
  onComplete,
}: {
  onComplete: (quote: Quote) => void;
}) {
  const { register, handleSubmit, setValue } = useForm<FormValues>();

  const pickupRef = useRef<google.maps.places.Autocomplete | null>(null);
  const dropoffRef = useRef<google.maps.places.Autocomplete | null>(null);

  const [pickupLoc, setPickupLoc] = useState<google.maps.LatLngLiteral>();
  const [dropoffLoc, setDropoffLoc] = useState<google.maps.LatLngLiteral>();
  const [directions, setDirections] = useState<google.maps.DirectionsResult>();
  const [distance, setDistance] = useState<string>();
  const [duration, setDuration] = useState<string>();

  const onPickupLoad = (auto: google.maps.places.Autocomplete) => {
    pickupRef.current = auto;
  };
  const onDropoffLoad = (auto: google.maps.places.Autocomplete) => {
    dropoffRef.current = auto;
  };

  const onPickupChanged = () => {
    const place = pickupRef.current?.getPlace();
    if (!place?.geometry?.location) return;
    const loc = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
    setPickupLoc(loc);
    setValue("pickupAddress", place.formatted_address || "");
  };

  const onDropoffChanged = () => {
    const place = dropoffRef.current?.getPlace();
    if (!place?.geometry?.location) return;
    const loc = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };
    setDropoffLoc(loc);
    setValue("dropoffAddress", place.formatted_address || "");
  };

  const onSubmit = () => {
    if (!pickupLoc || !dropoffLoc) return;

    new google.maps.DirectionsService().route(
      {
        origin: pickupLoc,
        destination: dropoffLoc,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          const leg = result.routes[0].legs[0];
          setDirections(result);
          setDistance(leg.distance?.text);
          setDuration(leg.duration?.text);
          onComplete({
            distanceM: leg.distance?.value ?? 0,
            durationS: leg.duration?.value ?? 0,
            directions: result,
          });
        }
      }
    );
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!}
      libraries={["places"] as any[]}
    >
      <div className='space-y-6'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <Autocomplete onLoad={onPickupLoad} onPlaceChanged={onPickupChanged}>
            <input
              placeholder='Pickup address'
              className='input'
              autoComplete='off'
              {...register("pickupAddress")}
            />
          </Autocomplete>

          <Autocomplete
            onLoad={onDropoffLoad}
            onPlaceChanged={onDropoffChanged}
          >
            <input
              placeholder='Drop-off address'
              className='input'
              autoComplete='off'
              {...register("dropoffAddress")}
            />
          </Autocomplete>

          <input type='date' {...register("date")} className='input' />
          <input type='time' {...register("time")} className='input' />
          <input
            type='number'
            placeholder='Passengers'
            className='input'
            {...register("passengers", { valueAsNumber: true })}
          />
          <input
            type='number'
            placeholder='Luggage'
            className='input'
            {...register("luggage", { valueAsNumber: true })}
          />

          <button type='submit' className='btn'>
            Calculate
          </button>
        </form>

        {distance && <p>Distance: {distance}</p>}
        {duration && <p>ETA: {duration}</p>}

        {pickupLoc && dropoffLoc && (
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "300px" }}
            center={pickupLoc}
            zoom={10}
          >
            <Marker position={pickupLoc} />
            <Marker position={dropoffLoc} />
            {directions && <DirectionsRenderer directions={directions} />}
          </GoogleMap>
        )}
      </div>
    </LoadScript>
  );
}
