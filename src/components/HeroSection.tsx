import { Button } from './ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      
      {/* Geometric Overlay */}
      <div className="absolute inset-0 geometric-overlay opacity-30" />
      
      {/* Angular Decorative Elements */}
      <div className="absolute top-20 right-0 w-64 h-64 border-r-4 border-t-4 border-accent/20 transform rotate-12" />
      <div className="absolute bottom-20 left-0 w-48 h-48 border-l-4 border-b-4 border-accent/20 transform -rotate-12" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          {/* Company Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="text-foreground">رمال زلالف الذهبية</span>
            <br />
            <span className="text-accent">للخدمات النفطية</span>
          </h1>
          
          {/* English Name */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 font-medium tracking-wide">
            Zallaf Golden Sands Company – Oil Services Limited
          </p>
          
          {/* Divider */}
          <div className="section-divider mb-8" />
          
          {/* Slogan */}
          <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 mb-12 font-semibold">
            شريككم نحو نجاح مشاريع النفط والغاز في ليبيا
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="text-lg px-10 py-6">
              تواصل معنا
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-10 py-6 border-2 border-accent/50 hover:bg-accent/10">
              خدماتنا
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-accent/50 flex justify-center pt-2">
          <div className="w-1 h-3 bg-accent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
