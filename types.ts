import React from 'react';

export interface FeatureItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface BonusItem {
  text: string;
}

export interface AudienceItem {
  text: string;
}

export interface SectionProps {
  className?: string;
  children: React.ReactNode;
}