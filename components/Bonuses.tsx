import React from 'react';
import { Section } from './Section';
import { 
  Eye, 
  Video, 
  Scroll, 
  MessageCircle, 
  Infinity, 
  Users, 
  Moon,
  Sparkles,
  Film,
  Gem,
  Feather,
  Sun,
  BookOpen,
  Zap
} from 'lucide-react';

export const Bonuses: React.FC = () => {
  const bonuses = [
    {
      icon: <Sun className="w-6 h-6" />,
      text: "קורס דיגיטלי מוקלט - 12 הדרכים - קורס תקשור"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      text: "קורס דיגיטלי - קריאה בקלפים"
    },
    {
      icon: <Film className="w-6 h-6" />,
      text: "הקלטות של מאחורי הקלעים של קריאה בקלפים"
    },
    {
      icon: <Video className="w-6 h-6" />,
      text: "הקלטות של כל שיעור"
    },
    {
      icon: <Feather className="w-6 h-6" />,
      text: "קורס של הכשרת התקשור - תוכן שמתעדכן"
    },
    {
      icon: <Gem className="w-6 h-6" />,
      text: "פידבאק ומשוב עם כלים אישי בלייב לגבי היכולת תקשור שלך"
    },
    {
      icon: <Infinity className="w-6 h-6" />,
      text: "בכל מפגש את מקבלת תקשור ונותנת תקשור"
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: "ליווי בקבוצת וואצפ קבוצתית לאורך כל המסע"
    }
  ];

  return (
    <Section className="bg-mystic-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-nebula bg-cover bg-fixed opacity-10"></div>
      <div className="absolute -right-20 top-20 w-64 h-64 bg-accent-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -left-20 bottom-20 w-64 h-64 bg-mystic-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent-400 font-bold tracking-widest uppercase mb-2 block animate-pulse">המסלול המלא</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white drop-shadow-lg">
            בונוסים למסלול המלא של הכשרת תקשור
          </h2>
          <p className="mt-4 text-mystic-200 text-lg">מעטפת שלמה לתמיכה בהתפתחות הרוחנית שלך</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {bonuses.map((bonus, index) => (
            <div key={index} className="flex items-start gap-4 bg-mystic-800/60 backdrop-blur-sm p-6 rounded-xl border border-mystic-700/50 hover:border-accent-500/50 hover:bg-mystic-800/80 transition-all duration-300 group hover:translate-x-1">
              <div className="p-3 bg-gradient-to-br from-mystic-800 to-mystic-900 rounded-lg text-accent-400 shrink-0 group-hover:text-white group-hover:from-accent-500 group-hover:to-accent-600 transition-all duration-300 shadow-lg border border-mystic-700 group-hover:border-accent-400">
                {bonus.icon}
              </div>
              <div className="flex-1">
                <p className="text-lg font-medium text-white leading-tight group-hover:text-mystic-50 transition-colors">{bonus.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-accent-500/10 via-mystic-800/50 to-mystic-900/80 p-8 md:p-12 rounded-3xl border border-accent-500/30 text-center max-w-4xl mx-auto backdrop-blur-md shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-50"></div>
          
          <div className="inline-block p-4 bg-accent-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-500">
             <Sparkles className="w-10 h-10 text-accent-400" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-accent-400 mb-4">עיקר ההכשרה היא פרקטיקה ותרגול</h3>
          <p className="text-xl text-white leading-relaxed opacity-90">
            מפגש כל שבוע שבו אנחנו מתרגלים אחד על שני לפי מה התרגילים שאני מביאה.
            <br className="hidden md:block" />
            יחד עם הפרקטיקה אני מעבירה ידע וחידודים מותאמים לרמת הקבוצה.
          </p>
        </div>
      </div>
    </Section>
  );
};