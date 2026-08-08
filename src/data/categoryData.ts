import { CategoryInfo } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'anti-inflammatory-meal-prep',
    name: 'Anti-Inflammatory Meal Prep',
    slug: 'anti-inflammatory-meal-prep',
    description: 'Effortless weekly batch cooking plans packed with antioxidants, omega-3s, and soothing herbs to calm systemic inflammation.',
    tagline: 'Prep 3 days of soothing meals in under 60 minutes.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800',
    postsCount: 12,
    keyBenefits: [
      'Reduces joint stiffness and morning bloating',
      'Uses low-toxin cooking methods (steam, slow simmer)',
      'Rich in polyphenol-dense herbs and spices'
    ]
  },
  {
    id: 'gut-health',
    name: 'Gut Health Improvement',
    slug: 'gut-health',
    description: 'Microbiome-friendly recipes, fermented foods, prebiotic fiber guides, and gut lining repair protocols.',
    tagline: 'Feed your 38 trillion gut microbes the nutrients they love.',
    iconName: 'Activity',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    postsCount: 18,
    keyBenefits: [
      'Increases short-chain fatty acid (butyrate) production',
      'Supports tight junction mucosal integrity',
      'Relieves chronic bloating and digestive discomfort'
    ]
  },
  {
    id: 'blood-sugar-balance',
    name: 'Blood Sugar Balance',
    slug: 'blood-sugar-balance',
    description: 'Low-glycemic meal strategies, smart carbohydrate pairing hacks, and glucose curve flattening recipes.',
    tagline: 'Stop energy crashes, brain fog, and intense sugar cravings.',
    iconName: 'TrendingDown',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800',
    postsCount: 15,
    keyBenefits: [
      'Stabilizes post-meal glucose spikes',
      'Sustains steady focus & hormonal harmony',
      'Helps prevent metabolic resistance naturally'
    ]
  },
  {
    id: 'fasting-and-metabolism',
    name: 'Fasting & Metabolism',
    slug: 'fasting-and-metabolism',
    description: 'Intermittent fasting schedules (16:8, 14:10), fast-breaking nutrition protocols, and circadian rhythm alignment.',
    tagline: 'Optimize cellular autophagy without spiking cortisol levels.',
    iconName: 'Clock',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800',
    postsCount: 10,
    keyBenefits: [
      'Activates cellular autophagy and renewal',
      'Maintains metabolic flexibility and fat oxidation',
      'Preserves lean muscle during digestive rest'
    ]
  }
];
