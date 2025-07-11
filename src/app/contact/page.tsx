import ContactPageIntro from "@/components/contactpage/ContactPageIntro/ContactPageIntro";
import ContactSection from "@/components/shared/ContactSection/ContactSection";
import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";
import Footer from "@/components/shared/Footer/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main>
      <ContactPageIntro />
      <ContactSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
