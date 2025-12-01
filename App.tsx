import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle, Star, Video, Globe, Users, Wifi, Sparkles, Heart, CheckCircle2 } from 'lucide-react';
import { ButterflyCard } from './components/ButterflyCard';
import { RevealedMessage } from './components/RevealedMessage';
import { CONTENT, WHATSAPP_LINK } from './constants';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const CtaButton = ({ fullWidth = false, className = '' }) => (
    <a 
      href={WHATSAPP_LINK}
      target="_blank" 
      rel="noopener noreferrer" 
      className={`inline-flex items-center justify-center px-8 py-4 text-lg font-bold transition-all duration-300 rounded-full transform hover:scale-105 shadow-lg group bg-gradient-to-r from-accent-400 to-accent-600 text-white hover:shadow-accent-500/30 hover:from-accent-300 hover:to-accent-500 ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <span className="ml-2">{CONTENT.hero.cta}</span>
      <MessageCircle className="w-6 h-6 animate-pulse" />
    </a>
  );

  return (
    <div className="min-h-screen bg-mystic-950 text-white font-sans selection:bg-accent-500 selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-30 animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-mystic-900 via-mystic-900/80 to-mystic-900"></div>
        </div>

        <div className="container mx-auto px-4 z-10 flex flex-col items-center gap-8 pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-accent-400 text-sm font-medium tracking-wider mb-4 animate-fade-in-up">
            <Sparkles size={16} />
            <span>{CONTENT.hero.badge}</span>
            <Sparkles size={16} />
          </div>

          <RevealedMessage 
            title={CONTENT.hero.title}
            subtitle={CONTENT.hero.subtitle}
            lines={[CONTENT.hero.description]}
            className="mb-8"
          />

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <CtaButton className="shadow-accent-500/20" />
          </div>

          <div className="mt-12 flex items-center gap-8 text-mystic-300 opacity-80">
            {CONTENT.hero.features.map((f, i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center">
                  <Star className="w-6 h-6 mb-2 text-accent-500" />
                  <span className="text-sm">{f.text}</span>
                </div>
                {i < CONTENT.hero.features.length - 1 && <div className="h-8 w-px bg-mystic-700"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <main className="relative z-10 bg-mystic-950">
        
        {/* --- THE JOURNEY SECTION --- */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-mystic-900">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
             <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500 rounded-full blur-[128px]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <RevealedMessage 
              title={CONTENT.journey.title}
              lines={CONTENT.journey.description}
              className="mb-16"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CONTENT.journey.items?.map((item, index) => (
                <div key={item.id} className="relative group">
                  {index < (CONTENT.journey.items?.length || 0) - 1 && (
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-gradient-to-l from-transparent via-mystic-700 to-transparent -translate-x-1/2 -z-10 opacity-30"></div>
                  )}
                  <ButterflyCard item={item} variant="step" index={index} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- ABOUT ZOOM SECTION --- */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-r from-mystic-900 to-mystic-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 w-full">
                {/* Abstract Portal Visual */}
                <div className="relative aspect-video w-full max-w-lg mx-auto transform hover:scale-105 transition-transform duration-700">
                  <div className="absolute inset-0 bg-accent-600/20 blur-3xl rounded-full animate-pulse-slow"></div>
                  <div className="relative h-full w-full bg-gradient-to-br from-mystic-900 via-mystic-800 to-accent-900/40 rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center group">
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
                    <div className="absolute w-64 h-64 bg-accent-500/10 rounded-full blur-2xl group-hover:bg-accent-500/20 transition-all duration-500"></div>
                    <div className="absolute w-48 h-48 border border-accent-400/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                    <div className="relative z-10 flex flex-col items-center gap-4">
                      <div className="bg-mystic-950/80 p-6 rounded-2xl border border-accent-500/50 shadow-[0_0_30px_rgba(14,165,233,0.3)] backdrop-blur-sm">
                        <Video className="w-12 h-12 text-accent-400" />
                      </div>
                      <div className="flex gap-4">
                         <div className="p-3 bg-mystic-900/60 rounded-full border border-white/10 backdrop-blur-sm animate-bounce"><Users className="w-5 h-5 text-white/80" /></div>
                         <div className="p-3 bg-mystic-900/60 rounded-full border border-white/10 backdrop-blur-sm animate-bounce" style={{ animationDelay: '0.2s' }}><Wifi className="w-5 h-5 text-white/80" /></div>
                         <div className="p-3 bg-mystic-900/60 rounded-full border border-white/10 backdrop-blur-sm animate-bounce" style={{ animationDelay: '0.4s' }}><Globe className="w-5 h-5 text-white/80" /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 space-y-8 text-center lg:text-right">
                <RevealedMessage 
                  title={CONTENT.zoom.title}
                  subtitle={CONTENT.zoom.subtitle}
                  lines={CONTENT.zoom.content}
                  align="right"
                >
                  <ul className="space-y-4 mt-6 inline-block text-right">
                    {CONTENT.zoom.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <CheckCircle2 className="text-accent-400 w-6 h-6 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-mystic-800/50 p-6 rounded-xl border-r-4 border-accent-500 mt-6 mx-auto lg:mx-0 max-w-xl">
                    <p className="italic text-mystic-200">"{CONTENT.zoom.quote}"</p>
                  </div>
                </RevealedMessage>
              </div>
            </div>
          </div>
        </section>

        {/* --- AUDIENCE SECTION --- */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-mystic-950">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 order-2 md:order-1">
                 <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8">{CONTENT.audience.title}</h2>
                 <div className="space-y-4">
                  {CONTENT.audience.items.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 group p-3 hover:bg-mystic-900/50 rounded-lg transition-colors">
                      <CheckCircle2 className="w-6 h-6 text-accent-500 mt-1 shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(14,165,233,0.3)] rounded-full" />
                      <p className="text-lg text-mystic-100 w-full group-hover:text-white transition-colors">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2 flex justify-center">
                 <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                    <div className="absolute w-full h-full bg-accent-600/5 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute w-[80%] h-[80%] border border-accent-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                    <div className="relative z-10 w-40 h-40 bg-gradient-to-b from-mystic-800 to-mystic-950 rounded-full border border-accent-500/50 shadow-[0_0_50px_rgba(14,165,233,0.4)] flex items-center justify-center group">
                       <Heart className="w-16 h-16 text-accent-400 group-hover:scale-110 transition-transform duration-500 fill-accent-500/20" />
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- BONUSES SECTION --- */}
        <section className="py-16 md:py-24 relative overflow-hidden bg-mystic-900">
           <div className="absolute inset-0 bg-nebula bg-cover bg-fixed opacity-10"></div>
           <div className="container mx-auto px-4 relative z-10">
             <div className="text-center mb-16">
               <span className="text-accent-400 font-bold tracking-widest uppercase mb-2 block animate-pulse">המסלול המלא</span>
               <h2 className="text-3xl md:text-5xl font-heading font-bold text-white drop-shadow-lg">
                 {CONTENT.bonuses.title}<br/>{CONTENT.bonuses.subtitle}
               </h2>
               <p className="mt-4 text-mystic-200 text-lg">{CONTENT.bonuses.description}</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
               {CONTENT.bonuses.items?.map((item, index) => (
                 <ButterflyCard key={item.id} item={item} variant="bonus" index={index} />
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
               </p>
             </div>
           </div>
        </section>

      </main>

      <footer className="bg-black py-12 text-center text-mystic-400 text-sm border-t border-mystic-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-6 mb-8">
            {CONTENT.footer.social?.map((s, i) => (
              <a key={i} href={s.link} aria-label={s.label} className="hover:text-accent-400 transition-colors transform hover:scale-110 p-2 rounded-full hover:bg-mystic-900/50">
                {s.icon}
              </a>
            ))}
          </div>
          
          <div className="flex justify-center flex-wrap gap-8 mb-8 text-mystic-300">
             {CONTENT.footer.legal?.map((l, i) => (
               <a key={i} href={l.link} className="hover:text-white transition-colors hover:underline decoration-mystic-700 underline-offset-4">{l.text}</a>
             ))}
          </div>

          <p>{CONTENT.footer.rights}</p>
          <div className="mt-4 text-xs opacity-60 flex items-center justify-center gap-2 group cursor-default hover:opacity-100 transition-opacity">
            <span>{CONTENT.footer.madeWith}</span>
            <Heart className="w-3 h-3 text-red-500 fill-red-500/20 animate-pulse group-hover:fill-red-500 transition-all duration-300" />
          </div>
        </div>
      </footer>

      {/* Sticky Mobile/Desktop CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-mystic-900/90 backdrop-blur-md border-t border-mystic-700 z-50 flex justify-center items-center shadow-[0_-5px_20px_rgba(0,0,0,0.5)] md:hidden">
         <CtaButton fullWidth className="text-sm py-3" />
      </div>

       <div className={`fixed bottom-8 left-8 z-40 hidden md:block transition-all duration-500 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
         <CtaButton className="shadow-2xl shadow-accent-500/20" />
      </div>

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