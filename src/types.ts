export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  highlight: string;
  content: string;
  result: string;
}

export interface Bonus {
  id: string;
  title: string;
  subtitle: string;
  priceValue: string;
  description: string;
  category: string;
  accent: string;
}

export interface ProblemItem {
  id: string;
  title: string;
  description: string;
}

export interface SecurityLabel {
  id: string;
  text: string;
}

export enum ExitStage {
  ALTO_AHI = 'ALTO_AHI',
  MAPACHE_GANO = 'MAPACHE_GANO'
}
