import React from 'react';
import { Section } from './Section';
import { Activity, Radio, Heart, BrainCircuit, Waves, Users, Zap, Lightbulb } from 'lucide-react';

export const TheJourney: React.FC = () => {
  const cards = [
    {
      step: "01",
      icon: <Waves className="w-8 h-8 text-accent-400" />,
      title: "גלי מוח איטיים",
      text: "בכל מפגש את תכנסי למצב תודעתי עמוק של גלי מוח איטיים, המאפשרים גישה לתדרים גבוהים יותר."
    },
    {
      step: "02",
      icon: <Users className="w-8 h-8 text-accent-400" />,
      title: "תרגול עם שותפה",
      text: "תקבלי מסרים, תעבירי מסרים ותלמדי לזהות אנרגיות בזמן אמת דרך עבודה מעשית בזוגות."
    },
    {
      step: "03",
      icon: <Lightbulb className="w-8 h-8 text-accent-400" />,
      title: "ידיעה פנימית",
      text: "תגלי איך האינטואיציה והידיעה הפנימית הופכות להיות ברורות, יציבות ופשוטות ליישום."
    },
    {
      step: "04",
      icon: <Zap className="w-8 h-8 text-accent-400" />,
      title: "להרגיש שזה אמיתי",
      text: "אין צורך 'להאמין' - ברגע שזה קורה, את פשוט מרגישה את האמת בגוף ובנשמה."
    }
  ];

  return (
    <Section className="bg-mystic-900 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500 rounded-full blur-[128px]"></div>
      </div>

      <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white">איך זה עובד?</h2>
        <p className="text-xl md:text-2xl text-mystic-100 leading-relaxed">
          המסע כולל <span className="font-bold text-accent-400">9 מפגשים</span>. בכל מפגש מתקיים תרגול מעשי. שוב ושוב.
          <br className="mb-4"/>
          ההתקדמות במרחב מתרחשת דרך ניסיון חי.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {cards.map((card, index) => (
          <div key={index} className="relative group">
            {/* Connecting Line for Desktop */}
            {index < cards.length - 1 && (
              <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-l from-transparent via-mystic-700 to-transparent -translate-x-1/2 -z-10 opacity-30"></div>
            )}
            
            <div className="glass-panel p-8 rounded-2xl h-full hover:bg-mystic-800 transition-all duration-300 transform hover:-translate-y-2 border-t border-mystic-700/50">
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 rounded-full bg-mystic-800 w-fit group-hover:bg-mystic-700 transition-colors border border-mystic-700 shadow-lg shadow-black/20">
                  {card.icon}
                </div>
                <span className="text-4xl font-black text-mystic-800 group-hover:text-mystic-700 transition-colors select-none">
                  {card.step}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors">{card.title}</h3>
              <p className="text-mystic-200 leading-relaxed text-sm">
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};