import { NavItem, ServiceItem, TestimonialItem, ContactOption } from './types';

export const SITE_INFO = {
  title: "Derry Hypnosis",
  tagline: "Transform Your Life Through the Power of Your Mind",
  phone: "(028) 7134 9045",
  email: "hello@derryhypnosis.co.uk",
  location: "Derry/Londonderry, Northern Ireland",
  owner: "Tracey McGill"
};

export const SERVICE_IMAGES: Record<string, string> = {
  'weight-loss': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop',
  'quit-smoking': 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee1?q=80&w=1200&auto=format&fit=crop',
  'anxiety-stress': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
  'personal-development': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop'
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Services", url: "/services" },
  { label: "Success Stories", url: "/testimonials" },
  { label: "Contact", url: "/contact" }
];

export const SERVICES: ServiceItem[] = [
  {
    slug: "weight-loss",
    title: "Weight Loss Hypnotherapy",
    description: "Break free from emotional eating and develop a healthy relationship with food.",
    longDescription: "Struggling with weight loss is often less about what you eat and more about why you eat. Our Weight Loss Hypnotherapy programme is designed to address the subconscious patterns that drive emotional eating, cravings, and self-sabotage. By reprogramming your mind to view food as fuel rather than a comfort mechanism, you can achieve sustainable weight loss without the struggle of willpower-based dieting. We help you build a positive body image and a natural desire for healthy, nourishing choices.",
    benefits: [
      "Identify and release emotional triggers for overeating",
      "Eliminate cravings for sugar and processed foods",
      "Install a 'Virtual Gastric Band' effect for portion control",
      "Boost motivation to exercise and stay active",
      "Develop a deep sense of self-worth and body confidence"
    ],
    price: "From £120 per session",
    icon: "flower",
    category: "weight"
  },
  {
    slug: "quit-smoking",
    title: "Quit Smoking",
    description: "Become smoke-free for life with our proven method.",
    longDescription: "Quitting smoking is one of the best things you can do for your health, yet the psychological habit often feels impossible to break. Our Quit Smoking Hypnotherapy session targets the subconscious addiction, severing the mental link between smoking and stress relief or socialising. You will walk away a non-smoker, not an 'ex-smoker' struggling with deprivation. We focus on removing the desire to smoke so you don't need to rely on willpower.",
    benefits: [
      "Single-session breakthrough options available",
      "Address both physical and psychological habit loops",
      "Remove withdrawal symptoms and cravings",
      "Reframe your identity as a healthy non-smoker",
      "Save thousands of pounds and reclaim your health"
    ],
    price: "From £120 per session",
    icon: "wind",
    category: "smoking"
  },
  {
    slug: "anxiety-stress",
    title: "Anxiety & Stress Relief",
    description: "Find calm and confidence in any situation.",
    longDescription: "Anxiety and stress can be debilitating, affecting your sleep, relationships, and career. Our specialised hypnotherapy for anxiety helps you regain control by calming the nervous system and reframing the automatic 'fight or flight' response. We teach your subconscious mind to remain calm and collected in situations that previously triggered panic. Whether it's social anxiety, general stress, or specific phobias, you can learn to live with a profound sense of inner peace.",
    benefits: [
      "Stop panic attacks in their tracks",
      "Overcome social anxiety and fear of public speaking",
      "Develop powerful relaxation and coping strategies",
      "Quiet the 'inner critic' and negative self-talk",
      "Build resilience against daily stressors"
    ],
    price: "From £120 per session",
    icon: "waves",
    category: "anxiety"
  },
  {
    slug: "personal-development",
    title: "Personal Development",
    description: "Unlock your full potential and achieve your goals.",
    longDescription: "Do you feel like something is holding you back from your true potential? Often, limiting beliefs formed in childhood dictate our adult success. Our Personal Development Hypnotherapy helps you identify and rewrite these scripts. Whether you want to advance your career, improve your sports performance, or simply feel more confident in your own skin, we provide the mental tools to help you thrive.",
    benefits: [
      "Identify and crush limiting beliefs",
      "Boost self-esteem and unshakeable confidence",
      "Enhance focus, concentration, and memory",
      "Improve sleep quality and energy levels",
      "Align your subconscious mind with your conscious goals"
    ],
    price: "From £120 per session",
    icon: "sun",
    category: "general"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    text: "I lost 3 stone and kept it off for over 2 years. The sessions helped me understand why I was eating emotionally and gave me the tools to change.",
    author: "Sarah M.",
    location: "Derry",
    rating: 5,
    category: "weight"
  },
  {
    text: "After years of smoking, I quit after just one session. It's been 8 months and I have no desire to smoke. I feel free.",
    author: "Mark T.",
    location: "Letterkenny",
    rating: 5,
    category: "smoking"
  },
  {
    text: "My anxiety was controlling my life. Now I feel calm and confidence in situations that used to terrify me. Highly recommended.",
    author: "Emma K.",
    location: "Strabane",
    rating: 5,
    category: "anxiety"
  },
  {
    text: "I went for help with public speaking. I used to freeze up, but now I actually enjoy presenting. Transformational.",
    author: "John D.",
    location: "Omagh",
    rating: 5,
    category: "general"
  }
];

export const CONTACT_OPTIONS: ContactOption[] = [
  {
    title: "Free 15-Min Call",
    description: "Discuss your goals and learn about hypnotherapy.",
    ctaText: "Call Now",
    ctaUrl: "tel:02871349045",
    icon: "phone"
  },
  {
    title: "In-Person Session",
    description: "Face-to-face session at Derry/Londonderry clinic.",
    ctaText: "Book Appointment",
    ctaUrl: "/contact",
    icon: "map"
  },
  {
    title: "Online Session",
    description: "Convenient video call from your home.",
    ctaText: "Book Online",
    ctaUrl: "/contact",
    icon: "video"
  }
];