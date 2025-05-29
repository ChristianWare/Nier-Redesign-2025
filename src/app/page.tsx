'use client'

/* eslint-disable @typescript-eslint/no-unused-vars */
import AboutUs from "@/components/homepage/AboutUs/AboutUs";
import Areas from "@/components/homepage/Areas/Areas";
import Fleet from "@/components/homepage/Fleet/Fleet";
import Hero from "@/components/homepage/Hero/Hero";
import Process from "@/components/homepage/Process/Process";
import ReviewSection from "@/components/homepage/ReviewSection/ReviewSection";
import ServiceAreas from "@/components/homepage/ServiceAreas/ServiceAreas";
import Services from "@/components/homepage/Services/Services";
import TripDetailsStep from "@/components/Reservations/TripDetailsStep/TripDetailsStep";
import BlogSection from "@/components/shared/BlogSection/BlogSection";
import ContactSection from "@/components/shared/ContactSection/ContactSection";
import Faq from "@/components/shared/Faq/Faq";
import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";
import Footer from "@/components/shared/Footer/Footer";
import { useState } from "react";

export default function Home() {

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
      <Hero />
      {/* step-1 wizard */}
      {/* <TripDetailsStep onComplete={handleTripDetailsComplete} /> */}
      {/* you could now render step-2 if quote != null */}
      {/* e.g. quote && <VehicleStep quote={quote} onComplete={…} /> */}{" "}
      <AboutUs />
      <Services />
      <Process />
      <Areas />
      <ServiceAreas />
      <Fleet />
      <ReviewSection />
      <Faq />
      <BlogSection />
      <FinalCTA />
      <ContactSection />
      <Footer />
    </main>
  );
}
