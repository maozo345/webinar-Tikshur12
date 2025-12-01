import React from 'react';
import { Sparkles } from 'lucide-react';

interface RevealedMessageProps {
  title?: string;
  subtitle?: string;
  lines?: string[];
  highlight?: boolean;
  align?: 'center' | 'right';
  className?: string;
  children?: React.ReactNode;
}

export const RevealedMessage: React.FC<RevealedMessageProps> = ({ 
  title, 
  subtitle, 
  lines, 
  highlight = false, 
  align = 'center',
  className = '',
  children 
}) => {
  return (
    <div className={`relative ${className} ${align === 'center' ? 'text-center' : 'text-right'}`}>
      
      {highlight && (
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-accent-400 text-sm font-medium tracking-wider mb-4 animate-fade-in-up">
          <Sparkles size={16} />
          <span>{highlight === true ? 'מסר מיוחד' : highlight}</span>
          <Sparkles size={16} />
        </div>
      )}

      {(title || subtitle) && (
        <h2 className="text-3xl md:text-5xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-mystic-300 leading-tight mb-6 drop-shadow-2xl">
          {title}
          {subtitle && (
            <>
              <br />
              <span className="text-accent-400">{subtitle}</span>
            </>
          )}
        </h2>
      )}

      {lines && (
        <div className={`space-y-4 text-xl md:text-2xl text-mystic-100 font-light leading-relaxed max-w-4xl mx-auto`}>
          {lines.map((line, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: line.replace(/\n/g, '<br/>') }} />
          ))}
        </div>
      )}

      {children}
    </div>
  );
};
