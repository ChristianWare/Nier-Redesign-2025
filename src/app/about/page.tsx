import AboutPageIntro from "@/components/aboutpage/AboutPageIntro/AboutPageIntro";
import BlogSection from "@/components/shared/BlogSection/BlogSection";
import ContactSection from "@/components/shared/ContactSection/ContactSection";
import Faq from "@/components/shared/Faq/Faq";
import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";
import Footer from "@/components/shared/Footer/Footer";

export default function AboutPage() {
  return (
    <main>
      <AboutPageIntro />
      <Faq />
      <BlogSection />
      <FinalCTA />
      <ContactSection />
      <Footer />
    </main>
  );
}
