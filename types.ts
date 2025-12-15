
export interface NavItem {
  label: string;
  url: string;
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
}

export interface TestimonialItem {
  text: string;
  author: string;
  location: string;
  rating: number;
  category: 'weight' | 'smoking' | 'anxiety' | 'general';
}

export interface ContactOption {
  title: string;
  description: string;
  ctaText: string;
  ctaUrl: string;
  icon: 'phone' | 'map' | 'video';
}
