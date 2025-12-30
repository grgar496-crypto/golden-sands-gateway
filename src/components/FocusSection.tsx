import { Star, Zap, Shield, Handshake } from 'lucide-react';

const focusPoints = [
  {
    icon: Star,
    title: 'تقديم خدمات ذات جودة عالية بأسعار تنافسية',
  },
  {
    icon: Zap,
    title: 'الاستجابة السريعة لفهم متطلبات العملاء',
  },
  {
    icon: Shield,
    title: 'الالتزام بأعلى معايير السلامة والجودة',
  },
  {
    icon: Handshake,
    title: 'بناء علاقات شراكة طويلة الأمد',
  },
];

const FocusSection = () => {
  return (
    <section id="focus" className="py-24 bg-card relative overflow-hidden">
      {/* Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            التركيز على
          </h2>
          <p className="text-lg text-accent mb-6 font-medium">Our Focus</p>
          <div className="section-divider" />
        </div>
        
        {/* Focus Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {focusPoints.map((point, index) => (
            <div
              key={index}
              className="group text-center p-8 bg-background hover-lift corner-cut-lg border border-border/50 transition-all duration-300 hover:border-accent/30"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors corner-cut animate-pulse-glow">
                <point.icon className="w-10 h-10 text-accent" />
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-foreground leading-relaxed">{point.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusSection;
