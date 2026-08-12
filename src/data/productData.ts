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
  },
  {
    id: 'prod-mcirco-glass-containers',
    name: 'M MCIRCO Borosilicate Glass Meal Prep Containers',
    category: 'Meal Prep Containers',
    categorySlug: 'meal-prep-containers',
    price: '$29.99',
    rating: 4.6,
    reviewsCount: 2300,
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=600',
    amazonUrl: 'https://amazon.com/s?k=mcirmo+borosilicate+glass+meal+prep+containers&tag=gutglowkitchen-20',
    badge: 'Must Have',
    description: 'Leak-proof borosilicate glass meal prep containers with lockable silicone lids — oven-safe, freezer-safe, and stackable for keeping bread, leftovers, and prepped meals fresh all week.',
    keyFeatures: [
      'Genuine borosilicate glass body rated for oven, freezer, and microwave',
      'Lockable leak-proof lids with silicone seals',
      'BPA-free and stackable rectangular sizes for clean fridge organization',
      'Dishwasher-safe for effortless weekly cleaning'
    ],
    whyWeLoveIt: 'The airtight silicone seal protects baked goods like apple bread from drying out, and the clear glass lets you see your prep without opening the fridge — freshness you can actually verify.'
  },
  {
    id: 'prod-digital-kitchen-scale',
    name: 'Digital Kitchen Scale – Stainless Steel, 0.1g Precision',
    category: 'Kitchen Tools',
    categorySlug: 'kitchen-tools',
    price: '$19.99',
    rating: 4.7,
    reviewsCount: 5200,
    image: 'https://images.unsplash.com/photo-1563299796-17596ed6b017?auto=format&fit=crop&q=80&w=600',
    amazonUrl: 'https://amazon.com/s?k=digital+kitchen+scale+0.1g+precision&tag=gutglowkitchen-20',
    badge: 'Top Pick',
    description: 'High-precision digital kitchen scale with 0.1g accuracy for consistent almond flour baking, protein tracking, and portion-controlled anti-inflammatory meal prep.',
    keyFeatures: [
      '0.1g precision for accurate flour and protein measurements',
      'Easy tare function for bowl-to-bowl mixing',
      'Stainless steel surface that wipes clean in seconds',
      'Compact design that stores flat in any drawer'
    ],
    whyWeLoveIt: 'Baking with almond flour is an exact science — a weigh-in of 0.1g accuracy is the difference between a moist loaf and a dense one, and this scale delivers it reliably every single Sunday.'
  }
];
