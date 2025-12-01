import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { TheJourney } from './components/TheJourney';
import { AboutZoom } from './components/AboutZoom';
import { Bonuses } from './components/Bonuses';
import { TargetAudience } from './components/TargetAudience';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const WHATSAPP_LINK = "https://chat.whatsapp.com/HqjcH2GgzL9Hqy666R0HDc";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-mystic-950 text-white font-sans selection:bg-accent-500 selection:text-white">
      
      {/* Hero Section */}
      <Hero />

      {/* Main Content Stack */}
      <main className="relative z-10 bg-mystic-950">
        <TheJourney />
        <AboutZoom />
        <TargetAudience />
        <Bonuses />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile/Desktop CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-mystic-900/90 backdrop-blur-md border-t border-mystic-700 z-50 flex justify-center items-center shadow-[0_-5px_20px_rgba(0,0,0,0.5)] md:hidden">
         <Button 
            text="אני רוצה להצטרף למפגש הראשון במתנה" 
            href={WHATSAPP_LINK}
            fullWidth
            className="text-sm py-3"
          />
      </div>

       {/* Floating CTA for Desktop */}
       <div className={`fixed bottom-8 left-8 z-40 hidden md:block transition-all duration-500 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
         <Button 
            text="הצטרפות למפגש מתנה" 
            href={WHATSAPP_LINK}
            className="shadow-2xl shadow-accent-500/20"
          />
      </div>

      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-24 right-4 md:bottom-8 md:right-8 bg-mystic-700 p-3 rounded-full shadow-lg hover:bg-mystic-600 transition-all z-40 ${showScrollTop ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'}`}
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>

    </div>
  );
};

export default App;