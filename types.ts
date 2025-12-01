import React from 'react';

export interface SectionProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

export interface CardItem {
  id: string;
  step?: string;
  title?: string;
  text: string;
  icon?: React.ReactNode;
}

export interface SectionData {
  title: string;
  subtitle?: string;
  description?: string[];
  items?: CardItem[];
}

export interface AppContent {
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    features: { icon: string; text: string }[];
  };
  journey: SectionData;
  zoom: {
    title: string;
    subtitle: string;
    content: string[];
    bullets: string[];
    quote: string;
  };
  audience: {
    title: string;
    items: string[];
  };
  bonuses: SectionData;
  footer: {
    rights: string;
    madeWith: string;
  };
}