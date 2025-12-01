import React from 'react';
import { Section } from './Section';
import { Video, Globe, Users, Sparkles, Wifi } from 'lucide-react';

export const AboutZoom: React.FC = () => {
  return (
    <Section className="bg-gradient-to-r from-mystic-900 to-mystic-800 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 w-full">
          {/* Abstract Digital Portal Visualization */}
          <div className="relative aspect-video w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-700">
            {/* Glow effects */}
            <div className="absolute inset-0 bg-accent-600/20 blur-3xl rounded-full animate-pulse-slow"></div>
            
            {/* Main Container */}
            <div className="relative h-full w-full bg-gradient-to-br from-mystic-900 via-mystic-800 to-accent-900/40 rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center group">
              
              {/* Grid Background */}
              <div className="absolute inset-0 opacity-20" 
                   style={{ 
                     backgroundImage: 'linear-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)', 
                     backgroundSize: '40px 40px' 
                   }}>
              </div>

              {/* Central Glowing Elements */}
              <div className="absolute w-64 h-64 bg-accent-500/10 rounded-full blur-2xl group-hover:bg-accent-500/20 transition-all duration-500"></div>
              <div className="absolute w-48 h-48 border border-accent-400/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute w-32 h-32 border border-accent-400/50 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

              {/* Floating Icons */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="bg-mystic-950/80 p-6 rounded-2xl border border-accent-500/50 shadow-[0_0_30px_rgba(14,165,233,0.3)] backdrop-blur-sm">
                  <Video className="w-12 h-12 text-accent-400" />
                </div>
                <div className="flex gap-4">
                   <div className="p-3 bg-mystic-900/60 rounded-full border border-white/10 backdrop-blur-sm animate-bounce">
                     <Users className="w-5 h-5 text-white/80" />
                   </div>
                   <div className="p-3 bg-mystic-900/60 rounded-full border border-white/10 backdrop-blur-sm animate-bounce" style={{ animationDelay: '0.2s' }}>
                     <Wifi className="w-5 h-5 text-white/80" />
                   </div>
                   <div className="p-3 bg-mystic-900/60 rounded-full border border-white/10 backdrop-blur-sm animate-bounce" style={{ animationDelay: '0.4s' }}>
                     <Globe className="w-5 h-5 text-white/80" />
                   </div>
                </div>
              </div>

              {/* Decorative Corner Lights */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent-500/40 to-transparent blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-accent-500/40 to-transparent blur-xl"></div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 space-y-8 text-center lg:text-right">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
            מרחבי התקשור הדיגיטליים
            <span className="block text-2xl md:text-3xl text-accent-400 mt-2 font-light">(ZOOM)</span>
          </h2>
          
          <div className="space-y-6 text-lg text-mystic-100 leading-relaxed">
            <p className="text-xl font-light">
              הקשבה אמיתית היא מיומנות. שפה של הנשמה.
              וכשמתחילים לדבר אותה החיים מקבלים בהירות, משמעות, וקסם יומיומי.
            </p>
            
            <p>
              מתוך המקום הזה נפתחו מרחבי התקשור הדיגיטליים.
              זהו מרחב שנבנה כדי לאפשר לך להתקדם <span className="text-white font-bold">בלי קשר לאיפה את נמצאת בעולם</span>.
            </p>
            
            <ul className="space-y-4 mt-6 inline-block text-right">
              <li className="flex items-center gap-4">
                <Users className="text-accent-400 w-6 h-6 flex-shrink-0" />
                <span>עם קבוצה תומכת, עם הדרכה עדינה</span>
              </li>
              <li className="flex items-center gap-4">
                <Video className="text-accent-400 w-6 h-6 flex-shrink-0" />
                <span>עם תרגול שמייצר שינוי אמיתי. בכל מפגש יש תרגול מעשי. פנים אל פנים בזום</span>
              </li>
              <li className="flex items-center gap-4">
                <Sparkles className="text-accent-400 w-6 h-6 flex-shrink-0" />
                <span>רוב המשתתפות מתחילות לתקשר כבר במפגש הראשון או השני</span>
              </li>
            </ul>

            <div className="bg-mystic-800/50 p-6 rounded-xl border-r-4 border-accent-500 mt-6 mx-auto lg:mx-0 max-w-xl">
              <p className="italic text-mystic-200">
                "כי כל מה שהיה צריך זה מרחב שמאפשר ומישהו שיזכיר להן."
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};