import ContactPageIntro from "@/components/contactpage/ContactPageIntro/ContactPageIntro";
import ContactSection from "@/components/shared/ContactSection/ContactSection";
import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";
import Footer from "@/components/shared/Footer/Footer";

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
