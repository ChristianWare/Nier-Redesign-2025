import AboutUs from "@/components/homepage/AboutUs/AboutUs";
import Areas from "@/components/homepage/Areas/Areas";
import Fleet from "@/components/homepage/Fleet/Fleet";
import Hero from "@/components/homepage/Hero/Hero";
import Process from "@/components/homepage/Process/Process";
import ReviewSection from "@/components/homepage/ReviewSection/ReviewSection";
import ServiceAreas from "@/components/homepage/ServiceAreas/ServiceAreas";
import Services from "@/components/homepage/Services/Services";
import BlogSection from "@/components/shared/BlogSection/BlogSection";
// import Destinations from "@/components/homepage/Destinations/Destinations";
// import AdditionalInfo from "@/components/shared/AdditionalInfo/AdditionalInfo";
import Faq from "@/components/shared/Faq/Faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Services />
      <Process />
      <Areas />
      <ServiceAreas />
      <Fleet />
      <ReviewSection />
      <Faq />
      <BlogSection />
      {/* <AdditionalInfo /> */}
      {/* <Destinations /> */}
    </main>
  );
}
