import HeroSection from "@/components/landing/HeroSection";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import TechnicalSection from "@/components/landing/TechnicalSection";
import ProcessSteps from "@/components/landing/ProcessSteps";
import ROISection from "@/components/landing/ROISection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesGrid />
      <TechnicalSection />
      <ProcessSteps />
      <ROISection />
      <Footer />
    </main>
  );
};

export default Index;
