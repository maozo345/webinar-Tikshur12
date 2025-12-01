import React from 'react';
import { Button } from './Button';
import { Sparkles, Star } from 'lucide-react';

export const Hero: React.FC = () => {
  const WHATSAPP_LINK = "https://chat.whatsapp.com/HqjcH2GgzL9Hqy666R0HDc";

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-30 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-mystic-900 via-mystic-900/80 to-mystic-900"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center flex flex-col items-center gap-8 pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-accent-400 text-sm font-medium tracking-wider mb-4 animate-fade-in-up">
          <Sparkles size={16} />
          <span>מרחבי התקשור הדיגיטליים</span>
          <Sparkles size={16} />
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-mystic-300 leading-tight mb-2 drop-shadow-2xl">
          תקשור היא לא יכולת על טבעית
          <br />
          <span className="text-accent-400">היא מיומנות</span>
        </h1>

        <p className="text-xl md:text-2xl text-mystic-100 max-w-3xl leading-relaxed font-light">
          הצטרפי למסע של 9 מפגשים מעשיים.
          <br />
          לגלות איך ידיעה פנימית הופכת להיות ברורה, יציבה ופשוטה.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button 
            text="אני רוצה להצטרף למפגש הראשון במתנה" 
            href={WHATSAPP_LINK}
            className="w-full sm:w-auto shadow-accent-500/20"
          />
        </div>

        <div className="mt-12 flex items-center gap-8 text-mystic-300 opacity-80">
          <div className="flex flex-col items-center">
            <Star className="w-6 h-6 mb-2 text-accent-500" />
            <span className="text-sm">תרגול מעשי</span>
          </div>
          <div className="h-8 w-px bg-mystic-700"></div>
          <div className="flex flex-col items-center">
            <Star className="w-6 h-6 mb-2 text-accent-500" />
            <span className="text-sm">9 מפגשים</span>
          </div>
          <div className="h-8 w-px bg-mystic-700"></div>
          <div className="flex flex-col items-center">
            <Star className="w-6 h-6 mb-2 text-accent-500" />
            <span className="text-sm">ליווי צמוד</span>
          </div>
        </div>
      </div>
    </div>
  );
};