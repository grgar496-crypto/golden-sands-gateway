import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import VisionSection from '@/components/VisionSection';
import MissionSection from '@/components/MissionSection';
import ValuesSection from '@/components/ValuesSection';
import ObjectivesSection from '@/components/ObjectivesSection';
import CoreServicesSection from '@/components/CoreServicesSection';
import DetailedServicesSection from '@/components/DetailedServicesSection';
import FocusSection from '@/components/FocusSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <VisionSection />
        <MissionSection />
        <ValuesSection />
        <ObjectivesSection />
        <CoreServicesSection />
        <DetailedServicesSection />
        <FocusSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
