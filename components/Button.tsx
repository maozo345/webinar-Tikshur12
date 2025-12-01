import React from 'react';
import { MessageCircle } from 'lucide-react';

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
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-lg font-bold transition-all duration-300 rounded-full transform hover:scale-105 shadow-lg group";
  
  const variants = {
    primary: "bg-gradient-to-r from-accent-400 to-accent-600 text-white hover:shadow-accent-500/30 hover:from-accent-300 hover:to-accent-500",
    secondary: "bg-mystic-600 text-white hover:bg-mystic-500 hover:shadow-mystic-500/30",
    outline: "border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-white"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  const content = (
    <>
      <span className="ml-2">{text}</span>
      <MessageCircle className="w-6 h-6 animate-pulse" />
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={combinedClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  );
};