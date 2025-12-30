import { Heart, Shield, Award, Users, Star } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'النزاهة',
    description: 'نؤمن بأهمية الشفافية والأمانة في جميع تعاملاتنا.',
  },
  {
    icon: Award,
    title: 'الجودة',
    description: 'نلتزم بتقديم أفضل ما لدينا في جميع الأوقات ونتطلع إلى التميز في كل ما نقوم به.',
  },
  {
    icon: Star,
    title: 'التميز',
    description: 'نسعى دائمًا لتقديم أفضل الخدمات والمنتجات بأعلى معايير الجودة.',
  },
  {
    icon: Heart,
    title: 'المسؤولية',
    description: 'نلتزم بمسؤوليتنا تجاه عملائنا ومجتمعنا وبيئتنا.',
  },
  {
    icon: Users,
    title: 'العمل الجماعي',
    description: 'نعمل بروح الفريق الواحد لتحقيق أهدافنا المشتركة.',
  },
];

const ValuesSection = () => {
  return (
    <section id="values" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-40 h-40 border-r-4 border-t-4 border-accent/10 transform rotate-45" />
      <div className="absolute bottom-20 left-0 w-32 h-32 border-l-4 border-b-4 border-accent/10 transform -rotate-45" />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            القيم
          </h2>
          <p className="text-lg text-accent mb-6 font-medium">Values</p>
          <div className="section-divider" />
        </div>
        
        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-8 bg-background hover-lift corner-cut-lg border border-border/50 text-center transition-all duration-300 hover:border-accent/30"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 mb-6 group-hover:bg-accent/20 transition-colors corner-cut">
                <value.icon className="w-8 h-8 text-accent" />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
              
              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
