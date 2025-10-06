import AboutUs from "@/components/homepage/AboutUs/AboutUs";
// import Announcement from "@/components/homepage/Announcement/Announcement";
import Areas from "@/components/homepage/Areas/Areas";
import Fleet from "@/components/homepage/Fleet/Fleet";
import Hero from "@/components/homepage/Hero/Hero";
import Process from "@/components/homepage/Process/Process";
import ReviewSection from "@/components/homepage/ReviewSection/ReviewSection";
import ServiceAreas from "@/components/homepage/ServiceAreas/ServiceAreas";
import Services from "@/components/homepage/Services/Services";
// import BlogSection from "@/components/shared/BlogSection/BlogSection";
import ContactSection from "@/components/shared/ContactSection/ContactSection";
import Faq from "@/components/shared/Faq/Faq";
import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";
import Footer from "@/components/shared/Footer/Footer";

export default function Home() {
  // const users = await prisma.user.findMany();
  // console.log(users.length);

  return (
    <main>
      <Hero />
      {/* <Announcement /> */}
      <AboutUs />
      <Services />
      <Process />
      <Areas />
      <ServiceAreas />
      <Fleet />
      <ReviewSection />
      <Faq />
      {/* <BlogSection /> */}
      <FinalCTA />
      <ContactSection />
      <Footer />
    </main>
  );
}
