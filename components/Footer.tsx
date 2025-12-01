import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 text-center text-mystic-400 text-sm border-t border-mystic-800">
      <div className="container mx-auto px-4">
        <p>© כל הזכויות שמורות - מסע התקשור</p>
        <p className="mt-2 text-xs opacity-50">נבנה באהבה</p>
      </div>
    </footer>
  );
};