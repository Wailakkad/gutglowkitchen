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
    id: 'meal-prep-tools-storage',
    name: 'Meal Prep Tools & Storage',
    slug: 'meal-prep-tools-storage',
    description: 'Buying guides and storage systems for glass meal prep containers — leak-proof, oven-safe, freezer-safe, and made to keep anti-inflammatory meal prep simple.',
    tagline: 'Store smarter, eat cleaner with the right containers.',
    iconName: 'Boxes',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=800',
    postsCount: 6,
    keyBenefits: [
      'Borosilicate glass food storage without plastic concerns',
      'Leak-proof, oven-safe and freezer-safe container guidance',
      'Storage systems that keep prepped meals fresh all week'
    ]
  }
];