
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
  'weight-loss': 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
  'quit-smoking': 'https://images.unsplash.com/photo-1626078299034-92d55981267b?q=80&w=1200&auto=format&fit=crop',
  'anxiety-stress': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
  'personal-development': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
  'sleep-insomnia': 'https://images.unsplash.com/photo-1541480601022-2308c0f02487?q=80&w=1200&auto=format&fit=crop',
  'phobia-release': 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200&auto=format&fit=crop',
  'sports-performance': 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
  'ibs-management': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop',
  'public-speaking': 'https://images.unsplash.com/photo-1475721027187-4024733923f9?q=80&w=1200&auto=format&fit=crop'
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
    longDescription: "Struggling with weight loss is often less about what you eat and more about why you eat. Our Weight Loss Hypnotherapy programme is designed to address the subconscious patterns that drive emotional eating, cravings, and self-sabotage.\n\nBy reprogramming your mind to view food as fuel rather than a comfort mechanism, you can achieve sustainable weight loss without the struggle of willpower-based dieting. We help you build a positive body image and a natural desire for healthy, nourishing choices.",
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
    description: "Become smoke-free for life with our proven single-session method.",
    longDescription: "Quitting smoking is one of the best things you can do for your health, yet the psychological habit often feels impossible to break.\n\nOur Quit Smoking Hypnotherapy session targets the subconscious addiction, severing the mental link between smoking and stress relief or socialising. You will walk away a non-smoker, not an 'ex-smoker' struggling with deprivation. We focus on removing the desire to smoke so you don't need to rely on willpower.",
    benefits: [
      "Single-session breakthrough options available",
      "Address both physical and psychological habit loops",
      "Remove withdrawal symptoms and cravings",
      "Reframe your identity as a healthy non-smoker",
      "Save thousands of pounds and reclaim your health"
    ],
    price: "From £150 per session",
    icon: "wind",
    category: "smoking"
  },
  {
    slug: "anxiety-stress",
    title: "Anxiety & Stress Relief",
    description: "Find calm and confidence in any situation with nervous system regulation.",
    longDescription: "Anxiety and stress can be debilitating, affecting your sleep, relationships, and career.\n\nOur specialised hypnotherapy for anxiety helps you regain control by calming the nervous system and reframing the automatic 'fight or flight' response. We teach your subconscious mind to remain calm and collected in situations that previously triggered panic. Whether it's social anxiety, general stress, or specific phobias, you can learn to live with a profound sense of inner peace.",
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
    slug: "sleep-insomnia",
    title: "Deep Sleep & Insomnia",
    description: "Retrain your mind to fall asleep naturally and wake up feeling refreshed.",
    longDescription: "Chronic sleep issues are often caused by an overactive mind that refuses to 'switch off' at night.\n\nOur sleep therapy helps you create a subconscious bridge to rest. We use deep relaxation techniques to clear the mental clutter of the day and install new, healthy sleep patterns. No more tossing and turning or relying on sleep aids—just natural, restorative rest.",
    benefits: [
      "Fall asleep faster and more consistently",
      "Eliminate middle-of-the-night wakefulness",
      "Reduce 'racing thoughts' at bedtime",
      "Improve overall energy and mood",
      "Reset your internal circadian rhythm"
    ],
    price: "From £120 per session",
    icon: "waves",
    category: "general"
  },
  {
    slug: "phobia-release",
    title: "Phobia & Fear Release",
    description: "Quickly eliminate irrational fears of flying, spiders, heights, and more.",
    longDescription: "Phobias are essentially a 'glitch' in your brain's survival mechanism. Your subconscious is over-protecting you from something that isn't actually a threat.\n\nUsing the Fast Phobia Cure and advanced hypnotherapy, we can literally 're-wire' the way your brain processes that specific trigger. Most phobias can be resolved in just 1-3 sessions, giving you back the freedom to travel, explore, and live without limits.",
    benefits: [
      "Rapid resolution of specific phobias",
      "Release the physical symptoms of fear (pacing, sweating)",
      "Gain confidence in previously avoided situations",
      "Permanent shift in perception",
      "Simple, painless, and effective"
    ],
    price: "From £120 per session",
    icon: "sun",
    category: "general"
  },
  {
    slug: "ibs-management",
    title: "IBS Management",
    description: "Manage irritable bowel syndrome symptoms through clinical gut-directed hypnotherapy.",
    longDescription: "Gut-directed hypnotherapy is a scientifically proven treatment for Irritable Bowel Syndrome (IBS). The gut and the brain are deeply connected through the vagus nerve.\n\nBy teaching you how to relax the smooth muscles of the digestive system and modulating the sensitivity of the gut, we can significantly reduce pain, bloating, and irregular bowel habits. This programme is designed to complement medical advice and provide long-term relief.",
    benefits: [
      "Significant reduction in abdominal pain and bloating",
      "Normalise digestive patterns and regularity",
      "Reduce stress-related gut flare-ups",
      "Improve quality of life and social confidence",
      "Clinically proven long-term effectiveness"
    ],
    price: "From £120 per session",
    icon: "flower",
    category: "general"
  },
  {
    slug: "public-speaking",
    title: "Public Speaking Confidence",
    description: "Speak with authority, clarity, and ease in any professional or social setting.",
    longDescription: "Fear of public speaking is one of the most common anxieties, but it can be a major barrier to career progression.\n\nOur sessions help you dismantle the fear of judgment and the physiological 'freeze' response. We install a new subconscious script of confidence and presence, allowing you to access your best thoughts and communicate them with impact. Whether it's a board meeting, a wedding speech, or a presentation, you will learn to enjoy the stage.",
    benefits: [
      "Eliminate 'shaky voice' and physical nerves",
      "Improve mental recall and verbal fluency",
      "Project natural authority and warmth",
      "Master high-performance breathing for speaking",
      "Build unshakeable confidence in your message"
    ],
    price: "From £120 per session",
    icon: "sun",
    category: "general"
  },
  {
    slug: "sports-performance",
    title: "Sports Performance",
    description: "Master the 'Inner Game' to achieve peak performance and mental toughness.",
    longDescription: "At the elite level, sport is 90% mental. If your mind isn't as trained as your body, you aren't reaching your potential.\n\nWe work with athletes in Derry to help them enter 'The Flow State' on command. Whether it's overcoming a performance plateau, managing pre-game nerves, or improving focus and visualization, hypnotherapy provides the mental edge that translates into real results on the field or court.",
    benefits: [
      "Enter the 'Zone' or 'Flow State' consistently",
      "Master visualization and mental rehearsal",
      "Overcome 'Choking' and performance anxiety",
      "Increase focus and concentration",
      "Build unshakeable mental toughness"
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
    text: "After 20 years of smoking, I quit after just one session. It's been 8 months and I have no desire to smoke. I feel like a different person.",
    author: "Mark T.",
    location: "Letterkenny",
    rating: 5,
    category: "smoking"
  },
  {
    text: "My anxiety was controlling my life. Now I feel calm and confidence in situations that used to terrify me. Tracey's sessions were life-changing.",
    author: "Emma K.",
    location: "Strabane",
    rating: 5,
    category: "anxiety"
  },
  {
    text: "The IBS management sessions were the only thing that worked after years of trying diets. My symptoms have reduced by about 80%.",
    author: "David G.",
    location: "Derry",
    rating: 5,
    category: "general"
  },
  {
    text: "I used to be terrified of spiders. After two sessions, I can now calmly remove them from my house. I never thought it was possible.",
    author: "Gareth P.",
    location: "Derry",
    rating: 5,
    category: "general"
  },
  {
    text: "Tracey helped me find the confidence to go for a promotion I’ve wanted for years. I start my new role next month!",
    author: "Ciara L.",
    location: "Coleraine",
    rating: 5,
    category: "general"
  },
  {
    text: "The sleep sessions have been a miracle. For the first time in a decade, I am waking up before my alarm feeling actually rested.",
    author: "Peter R.",
    location: "Derry",
    rating: 5,
    category: "general"
  },
  {
    text: "As a professional golfer, the mental edge I gained from hypnotherapy was noticeable within weeks. My focus is unshakeable.",
    author: "Sean B.",
    location: "Buncrana",
    rating: 5,
    category: "general"
  }
];

export const CONTACT_OPTIONS: ContactOption[] = [
  {
    title: "Free 15-Min Call",
    description: "Discuss your goals and learn how hypnotherapy works.",
    ctaText: "Call Now",
    ctaUrl: "tel:02871349045",
    icon: "phone"
  },
  {
    title: "In-Person Session",
    description: "Face-to-face session at our clinical rooms in Derry.",
    ctaText: "Book Appointment",
    ctaUrl: "/contact",
    icon: "map"
  },
  {
    title: "Online Session",
    description: "Convenient video call from the comfort of your home.",
    ctaText: "Book Online",
    ctaUrl: "/contact",
    icon: "video"
  }
];
