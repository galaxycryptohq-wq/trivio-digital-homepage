import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PlatformsSection from "@/components/PlatformsSection";
import PackagesSection from "@/components/PackagesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Trivio Digital | Data-Driven Digital Marketing Agency</title>
        <meta
          name="description"
          content="Scale your brand with Trivio Digital. We offer social media growth, paid advertising, lead generation, and data-driven marketing strategies that deliver measurable results."
        />
        <meta name="keywords" content="digital marketing agency, social media marketing, paid advertising, lead generation, brand growth" />
        <link rel="canonical" href="https://triviodigital.com" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <PlatformsSection />
        <PackagesSection />
        <HowItWorksSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
