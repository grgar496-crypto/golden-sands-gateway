import { Button } from './ui/button';
import equipmentImg from '@/assets/equipment-service.jpg';
import rentalImg from '@/assets/rental-service.jpg';
import supplyImg from '@/assets/supply-service.jpg';

const coreServices = [
  {
    image: equipmentImg,
    title: 'توريد المعدات والأجهزة المتخصصة وقطع الغيار',
    description: 'نوفر أحدث المعدات والأجهزة المتخصصة من كبرى الشركات المصنعة العالمية، بالإضافة إلى قطع غيار أصلية مضمونة.',
  },
  {
    image: rentalImg,
    title: 'تأجير المعدات الثقيلة ومعدات الحفر',
    description: 'نقدم خدمات تأجير متكاملة للمعدات الثقيلة ومعدات الحفر الحديثة لتلبية احتياجات مشاريعكم.',
  },
  {
    image: supplyImg,
    title: 'خدمات التموين والتجهيز للحقول',
    description: 'نوفر خدمات تموين وتجهيز شاملة للحقول النفطية بأعلى معايير الجودة والسلامة.',
  },
];

const CoreServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            خدماتنا الأساسية
          </h2>
          <p className="text-lg text-accent mb-6 font-medium">Core Services</p>
          <div className="section-divider" />
        </div>
        
        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {coreServices.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-background hover-lift corner-cut-lg border border-border/50 transition-all duration-500 hover:border-accent/30"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-4 leading-relaxed">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <Button variant="outline" className="border-accent/50 hover:bg-accent/10">
                  المزيد
                </Button>
              </div>
              
              {/* Accent Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 gold-gradient transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesSection;
