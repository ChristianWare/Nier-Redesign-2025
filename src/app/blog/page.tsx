import BlogPageIntro from "@/components/blogpage/BlogPageIntro/BlogPageIntro";
// import BlogSection from "@/components/shared/BlogSection/BlogSection";
import ContactSection from "@/components/shared/ContactSection/ContactSection";
import Faq from "@/components/shared/Faq/Faq";
import FinalCTA from "@/components/shared/FinalCTA/FinalCTA";
import Footer from "@/components/shared/Footer/Footer";

export default function BlogPage() {
  return (
    <main>
      <BlogPageIntro />
      {/* <BlogSection /> */}
      <Faq />
      <FinalCTA />
      <ContactSection />
      <Footer />
    </main>
  );
}
