import Logo from './Logo';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Top Accent Line */}
      <div className="h-1 gold-gradient" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Logo size="lg" />
          </div>
          
          {/* Company Name */}
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
            رمال زلالف الذهبية للخدمات النفطية
          </h3>
          <p className="text-muted-foreground mb-8" dir="ltr">
            Zallaf Golden Sands Company – Oil Services Limited
          </p>
          
          {/* Divider */}
          <div className="section-divider mb-8" />
          
          {/* Closing Text */}
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-12 max-w-2xl mx-auto">
            اختياركم لنا هو بداية رحلة ناجحة في قطاع النفط والغاز في ليبيا...
          </p>
          
          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="#"
              className="w-12 h-12 bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5 text-accent" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-accent" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-accent" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-accent/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-accent" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} رمال زلالف الذهبية للخدمات النفطية. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
