// import TripDetailsStep from "@/components/Reservations/TripDetailsStep/TripDetailsStep";
import ReservationsPageIntro from "@/components/reservationspage/ReservationsPageIntro/ReservationsPageIntro";
// import BlogSection from "@/components/shared/BlogSection/BlogSection";
import ContactSection from "@/components/shared/ContactSection/ContactSection";
import Faq from "@/components/shared/Faq/Faq";
import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";
import Footer from "@/components/shared/Footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservations",
};

export default function ReservationsPage() {
  return (
    <main>
      <ReservationsPageIntro />
      {/* <TripDetailsStep onComplete={handleTripDetailsComplete} /> */}
      <Faq />
      {/* <BlogSection /> */}
      <FinalCTA />
      <ContactSection />
      <Footer />
    </main>
  );
}
