import React from 'react';
import { MessageCircle, Sparkles, ArrowLeft } from 'lucide-react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  text, 
  onClick, 
  href, 
  className = '', 
  variant = 'primary',
  fullWidth = false 
}) => {
  // Base layout styles
  const baseStyles = "group relative inline-flex items-center justify-center px-8 py-4 text-lg md:text-xl font-bold transition-all duration-300 rounded-full overflow-hidden isolate";
  
  // Size/Width styles
  const widthClass = fullWidth ? "w-full" : "w-auto";

  // Visual Variants
  const variants = {
    primary: `
      text-white 
      bg-gradient-to-r from-accent-500 via-blue-600 to-accent-500 
      bg-[length:200%_auto] 
      hover:bg-[100%_0] 
      shadow-[0_0_20px_rgba(14,165,233,0.3)] 
      hover:shadow-[0_0_35px_rgba(14,165,233,0.6)] 
      border border-white/10
    `,
    secondary: "bg-mystic-700 text-white hover:bg-mystic-600 shadow-lg hover:shadow-mystic-500/20 border border-white/5",
    outline: "border-2 border-accent-500 text-accent-400 hover:bg-accent-500 hover:text-white shadow-[0_0_15px_rgba(14,165,233,0.1)]"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  // Inner content structure
  const content = (
    <>
      {/* Shimmer effect overlay */}
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0 pointer-events-none"></div>
      )}

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-3">
        {/* Left Icon (Sparkle) */}
        {variant === 'primary' && (
          <Sparkles className="w-5 h-5 text-accent-200 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
        )}
        
        <span className="tracking-wide drop-shadow-md">{text}</span>
        
        {/* Right Icon (WhatsApp) */}
        <div className="relative">
          <MessageCircle className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
          <div className="absolute inset-0 bg-white/50 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-full"></div>
        </div>
      </span>
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${combinedClasses} hover:-translate-y-1`}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${combinedClasses} hover:-translate-y-1`}>
      {content}
    </button>
  );
};