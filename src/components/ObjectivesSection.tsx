import { Target, TrendingUp, Expand, ThumbsUp, Users, Award, Package, Globe } from 'lucide-react';

const objectives = [
  { icon: Award, text: 'تقديم خدمات عالية الجودة' },
  { icon: TrendingUp, text: 'التطوير المستمر' },
  { icon: Expand, text: 'النمو والتوسع' },
  { icon: ThumbsUp, text: 'تحقيق رضا العملاء' },
  { icon: Users, text: 'المساهمة في تطوير الكفاءات الوطنية في قطاع النفط والغاز' },
  { icon: Target, text: 'الحفاظ على ميزة تنافسية من خلال تقديم أفضل الأسعار والجودة' },
  { icon: Package, text: 'تطوير وتنويع خدماتنا ومنتجاتنا' },
  { icon: Globe, text: 'توسيع قاعدة عملائنا' },
];

const ObjectivesSection = () => {
  return (
    <section id="objectives" className="py-24 bg-background relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0 geometric-overlay opacity-15" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            الأهداف
          </h2>
          <p className="text-lg text-accent mb-6 font-medium">Objectives</p>
          <div className="section-divider" />
        </div>
        
        {/* Objectives Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {objectives.map((objective, index) => (
            <div
              key={index}
              className="group flex items-center gap-4 p-6 bg-card hover-lift border border-border/50 corner-cut transition-all duration-300 hover:border-accent/30"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <objective.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-foreground font-medium leading-relaxed">{objective.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ObjectivesSection;
