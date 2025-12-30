import { Eye } from 'lucide-react';

const VisionSection = () => {
  return (
    <section id="vision" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-accent/10" />
      <div className="absolute bottom-0 left-0 w-24 h-24 border-l-4 border-b-4 border-accent/10" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 mb-8 corner-cut">
            <Eye className="w-10 h-10 text-accent" />
          </div>
          
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            الرؤية
          </h2>
          <p className="text-lg text-accent mb-8 font-medium">Vision</p>
          
          {/* Divider */}
          <div className="section-divider mb-10" />
          
          {/* Content */}
          <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-medium">
            أن نصبح الشركة الرائدة في توفير حلول النفط والغاز المتكاملة والموثوقة في ليبيا، وأن نساهم بفاعلية في نمو وتطور هذا القطاع الحيوي.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
