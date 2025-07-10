import Faq from "@/components/shared/Faq/Faq";
import ServiceSlugPageIntro from "./components/ServiceSlugPageIntro/ServiceSlugPageIntro";
import BlogSection from "@/components/shared/BlogSection/BlogSection";
import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";
import Footer from "@/components/shared/Footer/Footer";
import ContactSection from "@/components/shared/ContactSection/ContactSection";

export default function ServiceDetailsPage() {
  return (
    <main>
      <ServiceSlugPageIntro />
      <Faq />
      <BlogSection />
      <FinalCTA />
      <ContactSection />
      <Footer />
    </main>
  );
}
