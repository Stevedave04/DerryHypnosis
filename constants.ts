
import { NavItem, ServiceItem, TestimonialItem, ContactOption, FAQItem } from './types';

export const SITE_INFO = {
  title: "Derry Hypnosis",
  tagline: "Transform Your Life Through the Power of Your Mind",
  email: "hello@derryhypnosis.co.uk",
  location: "2-4 Foyle Rd, Londonderry BT48 6AX - Centre of Wellbeing",
  owner: "Tracey McGill"
};

export const SERVICE_IMAGES: Record<string, string> = {
  'weight-loss': 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop',
  'quit-smoking': 'https://images.unsplash.com/photo-1563223552-30d01fda3ead?q=80&w=1200&auto=format&fit=crop',
  'anxiety-stress': 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
  'sleep-insomnia': 'https://images.unsplash.com/photo-1541480601022-2308c0f02487?q=80&w=1200&auto=format&fit=crop',
  'phobia-release': 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200&auto=format&fit=crop',
  'sports-performance': 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
  'ibs-management': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop',
  'public-speaking': 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1200&auto=format&fit=crop'
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
    longDescription: "At the elite level, sport is 90% mental. If your mind isn't as trained as your body, you aren't reaching your potential.\n\nWe work with athletes in Derry to help them master focus, confidence, and performance consistency under pressure.",
    benefits: [
      "Improve focus and concentration",
      "Overcome performance anxiety",
      "Enhance mental rehearsal techniques",
      "Develop unshakeable self-belief",
      "Enter 'The Flow State' on demand"
    ],
    price: "From £120 per session",
    icon: "sun",
    category: "general"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    text: "Tracey helped me quit smoking in just one session. I haven't touched a cigarette in 6 months and don't even think about them anymore.",
    author: "James M.",
    location: "Derry",
    rating: 5,
    category: 'smoking'
  },
  {
    text: "The weight loss program changed my life. I finally understand my emotional triggers and the pounds are just falling off naturally.",
    author: "Sarah O.",
    location: "Letterkenny",
    rating: 5,
    category: 'weight'
  },
  {
    text: "I was crippled by social anxiety. After four sessions with Tracey, I feel like a new person. I'm actually enjoying meeting new people now.",
    author: "Michael R.",
    location: "Derry",
    rating: 5,
    category: 'anxiety'
  },
  {
    text: "Derry Hypnosis was the breakthrough I needed. After years of struggling with public speaking, I delivered a 20-minute presentation with total ease.",
    author: "Emma L.",
    location: "Strabane",
    rating: 5,
    category: 'general'
  }
];

export const CONTACT_OPTIONS: ContactOption[] = [
  {
    title: "Discovery Call",
    description: "Book a free 15-minute consultation to discuss your goals and how we can help.",
    ctaText: "Request Call",
    ctaUrl: "/contact",
    icon: "video"
  },
  {
    title: "Clinic Visit",
    description: "Visit our professional, private clinic rooms at the Centre of Wellbeing in Derry.",
    ctaText: "Find Us",
    ctaUrl: "/contact",
    icon: "map"
  },
  {
    title: "Online Sessions",
    description: "Access high-quality clinical hypnotherapy from the comfort and privacy of your home.",
    ctaText: "Book Video",
    ctaUrl: "/contact",
    icon: "video"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What actually happens during a hypnotherapy session?",
    answer: "During a session, you will be guided into a state of deep physical and mental relaxation. While you are in this state, your subconscious mind becomes more receptive to positive suggestions and new ways of thinking. You remain fully aware and in control throughout the entire process—it's very much like a guided meditation but with specific therapeutic goals."
  },
  {
    question: "Can everyone be hypnotised?",
    answer: "Most people can be hypnotised, provided they are willing and feel safe. It is a natural state of mind that we all experience daily, such as when we become deeply absorbed in a book or 'zone out' while driving. Some people enter a deeper state than others, but even a light trance is highly effective for therapeutic change."
  },
  {
    question: "Will I lose control or say things I don't want to?",
    answer: "No. This is a common myth popularized by stage hypnosis. In clinical hypnotherapy, you are always in control. You cannot be made to do anything that goes against your values or willpower. You can open your eyes and end the session at any time."
  },
  {
    question: "How many sessions will I typically need?",
    answer: "This varies depending on your goal. Some issues, like smoking cessation, can often be resolved in a single intensive session. Other habits or emotional challenges like weight loss or anxiety typically require between 3 to 6 sessions to ensure long-term, sustainable change."
  },
  {
    question: "Do you offer sessions online or only in person?",
    answer: "We offer both! We have professional clinical rooms in Derry/Londonderry for face-to-face sessions. We also provide highly effective online sessions via secure video calls, which many clients find more convenient and relaxing as they can be in the comfort of their own homes."
  },
  {
    question: "Is hypnotherapy safe for children?",
    answer: "Yes, hypnotherapy is very safe and often highly effective for children and teenagers. They usually have great imaginations, which makes the process very natural for them. We work with young people on issues like exam stress, confidence, and habit breaking. All practitioners at Derry Hypnosis are fully vetted."
  },
  {
    question: "How should I prepare for my first session?",
    answer: "There isn't much formal preparation needed. We recommend wearing comfortable clothing and ensuring you are in a relatively quiet frame of mind. If your session is online, please ensure you have a private space where you won't be interrupted and a stable internet connection. Most importantly, bring an open mind and a genuine desire for change."
  },
  {
    question: "Can I drive straight after a hypnotherapy session?",
    answer: "Yes, absolutely. While hypnotherapy involves deep relaxation, it is not a state of sleep or sedation. Once the session is concluded, we use a 're-alerting' process to ensure you are fully awake, alert, and grounded. You will feel calm but entirely capable of driving and continuing with your normal daily activities."
  },
  {
    question: "What if I have an 'analytical' mind that won't switch off?",
    answer: "Many of our clients are high-achievers with very active, analytical minds. You don't need to 'stop thinking' for hypnotherapy to work. In fact, we can use that mental energy as part of the process. We use specific techniques designed to bypass the critical conscious mind, allowing the therapeutic suggestions to reach the subconscious regardless of how busy your thoughts feel."
  },
  {
    question: "Are the results of hypnotherapy permanent?",
    answer: "Hypnotherapy aims for long-term transformation by changing the subconscious 'blueprints' that drive your behaviour. Once a new, healthier perspective is fully integrated, it typically becomes your new 'normal'. We also provide you with self-hypnosis tools and techniques to maintain and reinforce your results long after our sessions have finished."
  },
  {
    question: "Do you offer evening or weekend appointments in Derry?",
    answer: "We understand that many of our clients have busy work and family schedules. To accommodate this, we offer a limited number of evening and weekend slots at our Foyle Road clinic. We recommend booking these well in advance as they are our most popular times. You can check current availability through our online booking system."
  }
];
