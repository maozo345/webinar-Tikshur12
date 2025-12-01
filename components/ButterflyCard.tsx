import React from 'react';
import { CardItem } from '../types';

interface ButterflyCardProps {
  item: CardItem;
  variant?: 'step' | 'bonus';
  index?: number;
}

export const ButterflyCard: React.FC<ButterflyCardProps> = ({ item, variant = 'step', index = 0 }) => {
  if (variant === 'step') {
    return (
      <div className="relative group h-full">
        <div className="glass-panel p-8 rounded-2xl h-full hover:bg-mystic-800 transition-all duration-500 transform hover:-translate-y-2 border-t border-mystic-700/50 flex flex-col relative overflow-hidden">
          
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-500/0 to-accent-500/0 group-hover:from-accent-500/10 group-hover:to-transparent transition-all duration-500"></div>

          <div className="flex justify-between items-start mb-6 relative z-10">
            <div className="p-4 rounded-full bg-mystic-800 w-fit group-hover:bg-mystic-700 transition-colors border border-mystic-700 shadow-lg shadow-black/20 group-hover:scale-110 duration-300">
              <div className="text-accent-400 group-hover:text-accent-300 transition-colors w-8 h-8">
                {item.icon}
              </div>
            </div>
            {item.step && (
              <span className="text-4xl font-black text-mystic-800 group-hover:text-mystic-700 transition-colors select-none">
                {item.step}
              </span>
            )}
          </div>
          
          {item.title && (
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors relative z-10">
              {item.title}
            </h3>
          )}
          
          <p className="text-mystic-200 leading-relaxed text-sm relative z-10">
            {item.text}
          </p>
        </div>
      </div>
    );
  }

  // Bonus Variant
  return (
    <div className="flex items-start gap-4 bg-mystic-800/60 backdrop-blur-sm p-6 rounded-xl border border-mystic-700/50 hover:border-accent-500/50 hover:bg-mystic-800/80 transition-all duration-300 group hover:translate-x-1 h-full">
      <div className="p-3 bg-gradient-to-br from-mystic-800 to-mystic-900 rounded-lg text-accent-400 shrink-0 group-hover:text-white group-hover:from-accent-500 group-hover:to-accent-600 transition-all duration-300 shadow-lg border border-mystic-700 group-hover:border-accent-400 group-hover:rotate-6">
        <div className="w-6 h-6">{item.icon}</div>
      </div>
      <div className="flex-1">
        <p className="text-lg font-medium text-white leading-tight group-hover:text-mystic-50 transition-colors">
          {item.text}
        </p>
      </div>
    </div>
  );
};
