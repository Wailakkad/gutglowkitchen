import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'prod-vitamix-blender',
    name: 'Vitamix E310 Explorian Professional Grade High-Speed Blender',
    category: 'Kitchen Tools',
    categorySlug: 'kitchen-tools',
    price: '$349.95',
    rating: 4.9,
    reviewsCount: 8910,
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&q=80&w=600',
    amazonUrl: 'https://amazon.com/dp/B0758JHZK7?tag=gutglowkitchen-20',
    badge: 'Top Pick',
    description: 'Heavy-duty motor pulverizes tough fibrous greens, turmeric root, and chia seeds for silky smooth gut-healing smoothies and dressings.',
    keyFeatures: [
      '48 oz container ideal for single to medium meal prep batches',
      'Aircraft-grade stainless steel laser-cut blades',
      'Self-cleaning in 60 seconds with warm water & dish soap'
    ],
    whyWeLoveIt: 'Breaks down cell walls of raw cruciferous vegetables and ginger roots, releasing maximum polyphenols and digestible bio-compounds.'
  }
];
