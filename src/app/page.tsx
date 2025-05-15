import AboutUs from "@/components/homepage/AboutUs/AboutUs";
import Areas from "@/components/homepage/Areas/Areas";
import Hero from "@/components/homepage/Hero/Hero";
import ServicesSection from "@/components/homepage/Hero/ServicesSection/ServicesSection";
import Process from "@/components/homepage/Process/Process";
// import Reviews from "@/components/homepage/Reviews/Reviews";
import ServiceAreas from "@/components/homepage/ServiceAreas/ServiceAreas";
import Services from "@/components/homepage/Services/Services";
import Faq from "@/components/shared/Faq/Faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      {/* <Reviews /> */}
      <Services />
      <Process />
      <Areas />
      <ServiceAreas />
      <ServicesSection />
      <Faq />
    </main>
  );
}
