import { Metadata } from "next";
import { services } from "@/data";
import ServiceSlugPageIntro from "./components/ServiceSlugPageIntro/ServiceSlugPageIntro";
import ReviewSection from "@/components/homepage/ReviewSection/ReviewSection";
import Faq from "@/components/shared/Faq/Faq";
import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";
import ContactSection from "@/components/shared/ContactSection/ContactSection";
import Footer from "@/components/shared/Footer/Footer";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const project = services.find((p) => p.slug === params.slug);
  return {
    title: project ? project.title : "Service Not Found",
  };
}

export default function ServiceDetailsPage({ params }: PageProps) {
  const project = services.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <main>
        <h1>Service not found</h1>
      </main>
    );
  }

  return (
    <main>
      <ServiceSlugPageIntro />
      <ReviewSection />
      <Faq />
      <FinalCTA />
      <ContactSection />
      <Footer />
    </main>
  );
}
