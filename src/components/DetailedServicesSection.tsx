import { Settings, Wrench, Truck, Hammer, UtensilsCrossed, MessageCircle, GraduationCap, Package } from 'lucide-react';

const detailedServices = [
  {
    icon: Settings,
    title: 'المعدات والأجهزة',
    description: 'نوفر مجموعة شاملة من المعدات والأجهزة المتخصصة في مجال النفط والغاز من أشهر المصنعين العالميين، مع ضمان الجودة والأداء العالي.',
  },
  {
    icon: Wrench,
    title: 'قطع الغيار',
    description: 'نقدم قطع غيار أصلية ومضمونة لجميع أنواع المعدات النفطية بأسعار تنافسية وضمان الجودة.',
  },
  {
    icon: Truck,
    title: 'تأجير المعدات الثقيلة',
    description: 'خدمات تأجير متكاملة للمعدات الثقيلة تشمل الحفارات والرافعات والشاحنات وجميع المعدات اللازمة لمشاريع النفط والغاز.',
  },
  {
    icon: Hammer,
    title: 'خدمات الصيانة',
    description: 'نقدم خدمات صيانة متخصصة ودورية للمعدات والأجهزة النفطية لضمان استمرارية العمل وتقليل فترات التوقف.',
  },
  {
    icon: UtensilsCrossed,
    title: 'التموين والتجهيز',
    description: 'خدمات تموين وتجهيز شاملة للحقول النفطية تشمل المواد الغذائية والإمدادات اللوجستية بأعلى معايير الجودة.',
  },
  {
    icon: MessageCircle,
    title: 'الاستشارات الفنية',
    description: 'نوفر استشارات فنية متخصصة في مجال النفط والغاز من خبراء ذوي كفاءة عالية لدعم مشاريعكم.',
  },
  {
    icon: GraduationCap,
    title: 'البرامج التدريبية',
    description: 'نقدم برامج تدريبية متخصصة لتطوير الكوادر البشرية وتزويدها بأحدث المهارات والتقنيات في قطاع النفط والغاز.',
  },
  {
    icon: Package,
    title: 'الخدمات اللوجستية',
    description: 'نوفر خدمات لوجستية متكاملة تشمل النقل والتخزين وإدارة سلسلة التوريد لضمان وصول المعدات والمواد في الوقت المحدد.',
  },
];

const DetailedServicesSection = () => {
  return (
    <section id="detailed-services" className="py-24 bg-background relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0 geometric-overlay opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            خدماتنا التفصيلية
          </h2>
          <p className="text-lg text-accent mb-6 font-medium">Detailed Services</p>
          <div className="section-divider" />
        </div>
        
        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {detailedServices.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-card hover-lift corner-cut border border-border/50 transition-all duration-300 hover:border-accent/30"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
              
              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServicesSection;
