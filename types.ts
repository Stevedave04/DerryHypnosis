
export interface NavItem {
  label: string;
  url: string;
  children?: { label: string; url: string; }[];
}

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  price: string;
  icon: 'flower' | 'wind' | 'waves' | 'sun';
  category: 'weight' | 'smoking' | 'anxiety' | 'general';
  stakes?: string;
}

export interface TestimonialItem {
  text: string;
  author: string;
  location: string;
  rating: number;
  category: 'weight' | 'smoking' | 'anxiety' | 'general';
  source?: 'facebook';
}

export interface ContactOption {
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  externalUrl?: string;
  icon: 'phone' | 'map' | 'video' | 'calendar';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface DownloadProduct {
  id: string;
  payhipCode: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  type: 'audio' | 'ebook';
  duration?: string;
  category: 'weight' | 'anxiety' | 'smoking' | 'sleep' | 'confidence' | 'general';
  coverImage: string;
  benefits: string[];
  available: boolean;
}
