import ServicePageIntro from "@/components/servicespage/ServicePageIntro/ServicePageIntro";
import ContactSection from "@/components/shared/ContactSection/ContactSection";
import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";
import Footer from "@/components/shared/Footer/Footer";

export default function ServicesPage() {
  return (
    <main>
      <ServicePageIntro />
      <FinalCTA />
      <ContactSection />
      <Footer />
    </main>
  );
}
