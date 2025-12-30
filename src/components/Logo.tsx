import { Flame, Settings } from 'lucide-react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const Logo = ({ className = '', size = 'md', showText = true }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative ${sizeClasses[size]}`}>
        {/* Gear background */}
        <Settings className="absolute inset-0 w-full h-full text-accent opacity-80" strokeWidth={1.5} />
        {/* Flame overlay */}
        <Flame className="absolute inset-0 w-full h-full text-accent scale-50" strokeWidth={2} />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold text-foreground leading-tight ${textSizes[size]}`}>
            رمال زلالف الذهبية
          </span>
          <span className={`text-accent text-xs leading-tight`}>
            للخدمات النفطية
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
