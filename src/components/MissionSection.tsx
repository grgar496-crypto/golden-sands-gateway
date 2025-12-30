import { Target, CheckCircle } from 'lucide-react';

const missionPoints = [
  'توفير معدات وأجهزة متخصصة عالية الجودة من أشهر المصنعين العالميين.',
  'توفير قطع غيار أصلية مضمونة بأسعار تنافسية.',
  'تقديم خدمات تأجير معدات ثقيلة ومعدات حفر حديثة ومتكاملة.',
  'توفير خدمات تموين وتجهيز للحقول بأعلى معايير الجودة والسلامة.',
  'بناء علاقات شراكة استراتيجية طويلة الأمد مع عملائنا.',
  'الالتزام بأعلى معايير السلامة والأمان في جميع عملياتنا.',
  'الاستثمار في تطوير كوادرنا البشرية وتزويدهم بأحدث التقنيات والمهارات.',
];

const MissionSection = () => {
  return (
    <section id="mission" className="py-24 bg-background relative overflow-hidden">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 geometric-overlay opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 mb-8 corner-cut">
              <Target className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
              الرسالة
            </h2>
            <p className="text-lg text-accent mb-8 font-medium">Mission</p>
            <div className="section-divider mb-10" />
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed font-medium max-w-3xl mx-auto">
              نلتزم بتقديم خدمات ومنتجات استثنائية في مجال النفط والغاز من خلال:
            </p>
          </div>
          
          {/* Mission Points Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {missionPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-card hover-lift corner-cut border border-border/50 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-10 h-10 bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <CheckCircle className="w-5 h-5 text-accent" />
                </div>
                <p className="text-foreground/90 text-lg leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
