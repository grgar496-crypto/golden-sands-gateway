import { Mail, Globe, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0 geometric-overlay opacity-15" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            تواصل معنا
          </h2>
          <p className="text-lg text-accent mb-6 font-medium">Contact Us</p>
          <div className="section-divider" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-6 p-6 bg-card corner-cut border border-border/50">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/10 flex items-center justify-center">
                <Mail className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">البريد الإلكتروني</h3>
                <a href="mailto:info.gszalaf.ly" className="text-muted-foreground hover:text-accent transition-colors" dir="ltr">
                  info.gszalaf.ly
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-6 p-6 bg-card corner-cut border border-border/50">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/10 flex items-center justify-center">
                <Globe className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">الموقع الإلكتروني</h3>
                <a href="https://www.gszalaf.ly" className="text-muted-foreground hover:text-accent transition-colors" dir="ltr">
                  www.gszalaf.ly
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-6 p-6 bg-card corner-cut border border-border/50">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/10 flex items-center justify-center">
                <Phone className="w-7 h-7 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">اتصل بنا</h3>
                <a href="tel:00218930447739" className="text-muted-foreground hover:text-accent transition-colors" dir="ltr">
                  00218930447739
                </a>
              </div>
            </div>
            
            <Button variant="accent" size="lg" className="w-full text-lg py-6">
              أرسل رسالة
            </Button>
          </div>
          
          {/* Map Placeholder */}
          <div className="relative h-full min-h-[400px] bg-card corner-cut-lg border border-border/50 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-accent/50 mx-auto mb-4" />
                <p className="text-muted-foreground text-lg">ليبيا</p>
                <p className="text-muted-foreground">Libya</p>
              </div>
            </div>
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `
                linear-gradient(hsla(45, 96%, 50%, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, hsla(45, 96%, 50%, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
