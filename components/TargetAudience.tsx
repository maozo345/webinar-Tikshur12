import React from 'react';
import { Section } from './Section';
import { CheckCircle2, Heart, Sparkles } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const audience = [
    "למי שרוצה לקחת את האינטואיציה שמגיעה לה פה ושם ולהפוך אותה לתקשור מודע",
    "למי שמטפלת ורוצה להרחיב את סל הכלים שלה ולשפר את יכולת הטיפול שלה",
    "למי שרוצה להיות מתקשרת ולקבל אנשים לתקשורים אישים",
    "למי ששואלת שאלות פנימיות ומחפשת בהירות",
    "למי שמרגישה עומק ולא יודעת איך לגשת אליו",
    "למי שמרגישה שהלב שלה מדבר והיא רוצה ללמוד להקשיב לו"
  ];

  return (
    <Section className="bg-mystic-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-mystic-950 to-mystic-900 z-0"></div>

      <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
        <div className="md:w-1/2 order-2 md:order-1">
           <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8">
            למי המסע הזה מתאים?
          </h2>
          <div className="space-y-4">
            {audience.map((item, index) => (
              <div key={index} className="flex items-start gap-4 group p-3 hover:bg-mystic-900/50 rounded-lg transition-colors">
                <CheckCircle2 className="w-6 h-6 text-accent-500 mt-1 shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(14,165,233,0.3)] rounded-full" />
                <p className="text-lg text-mystic-100 w-full group-hover:text-white transition-colors">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
           {/* Abstract Inner Light Visualization */}
           <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
              {/* Pulsing Aura Layers */}
              <div className="absolute w-full h-full bg-accent-600/5 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute w-[80%] h-[80%] border border-accent-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute w-[60%] h-[60%] border border-accent-500/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Concentric Ripples */}
              <div className="absolute w-full h-full rounded-full border border-mystic-700/30 scale-50 opacity-0 animate-[ping_4s_ease-out_infinite]"></div>
              <div className="absolute w-full h-full rounded-full border border-accent-500/30 scale-50 opacity-0 animate-[ping_4s_ease-out_infinite_1s]"></div>

              {/* Core */}
              <div className="relative z-10 w-40 h-40 bg-gradient-to-b from-mystic-800 to-mystic-950 rounded-full border border-accent-500/50 shadow-[0_0_50px_rgba(14,165,233,0.4)] flex items-center justify-center group">
                 <Heart className="w-16 h-16 text-accent-400 group-hover:scale-110 transition-transform duration-500 fill-accent-500/20" />
                 <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-white animate-bounce" style={{ animationDelay: '0.5s' }} />
                 <Sparkles className="absolute -bottom-2 -left-2 w-6 h-6 text-accent-300 animate-bounce" style={{ animationDelay: '1s' }} />
              </div>
           </div>
        </div>
      </div>
    </Section>
  );
};