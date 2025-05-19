import AboutAndHistory from "@/components/aboutpage/AboutAndHistory/AboutAndHistory";
import AboutPageIntro from "@/components/aboutpage/AboutPageIntro/AboutPageIntro";
import MissionAndValues from "@/components/aboutpage/MissionAndValues/MissionAndValues";
import SafetyAndCompliance from "@/components/aboutpage/SafetyAndCompliance/SafetyAndCompliance";
import Fleet from "@/components/homepage/Fleet/Fleet";
import BlogSection from "@/components/shared/BlogSection/BlogSection";
import ContactSection from "@/components/shared/ContactSection/ContactSection";
import Faq from "@/components/shared/Faq/Faq";
import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";
import Footer from "@/components/shared/Footer/Footer";

export default function AboutPage() {
  return (
    <main>
      <AboutPageIntro />
      <AboutAndHistory />
      <MissionAndValues />
      <SafetyAndCompliance />
      <Fleet />
      <Faq />
      <BlogSection />
      <FinalCTA />
      <ContactSection />
      <Footer />
    </main>
  );
}
