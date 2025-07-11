/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import TripDetailsStep from "@/components/Reservations/TripDetailsStep/TripDetailsStep";
import ReservationsPageIntro from "@/components/reservationspage/ReservationsPageIntro/ReservationsPageIntro";
// import BlogSection from "@/components/shared/BlogSection/BlogSection";
import ContactSection from "@/components/shared/ContactSection/ContactSection";
import Faq from "@/components/shared/Faq/Faq";
import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";
import Footer from "@/components/shared/Footer/Footer";
import { useState } from "react";

export default function ReservationsPage() {
      const [quote, setQuote] = useState<{
        distanceM: number;
        durationS: number;
        directions: google.maps.DirectionsResult;
      } | null>(null);
    
      // when TripDetailsStep calls onComplete, we'll get the quote here
      const handleTripDetailsComplete = (q: {
        distanceM: number;
        durationS: number;
        directions: google.maps.DirectionsResult;
      }) => {
        console.log("got quote:", q);
        setQuote(q);
        // TODO: advance to vehicle-selection step
      };
  return (
    <main>
      <ReservationsPageIntro />
      <TripDetailsStep onComplete={handleTripDetailsComplete} />
      <Faq />
      {/* <BlogSection /> */}
      <FinalCTA />
      <ContactSection />
      <Footer />
    </main>
  );
}
