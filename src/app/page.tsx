import AboutUs from "@/components/homepage/AboutUs/AboutUs";
import Areas from "@/components/homepage/Areas/Areas";
import Hero from "@/components/homepage/Hero/Hero";
import ServicesSection from "@/components/homepage/Hero/ServicesSection/ServicesSection";
import ServiceAreas from "@/components/homepage/ServiceAreas/ServiceAreas";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Areas />
      <ServicesSection />
      <ServiceAreas />
      <Hero />
    </main>
  );
}
