import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InstitutionalSection from "@/components/InstitutionalSection";
import DoctorsSection from "@/components/DoctorsSection";
import AboutSection from "@/components/AboutSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import SpecialtiesSection from "@/components/SpecialtiesSection";
import ResultsSection from "@/components/ResultsSection";
import LaserSection from "@/components/LaserSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <InstitutionalSection />
      <DoctorsSection />
      <AboutSection />
      <TreatmentsSection />
      <SpecialtiesSection />
      <ResultsSection />
      <LaserSection />
      <GallerySection />
      <TestimonialsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
