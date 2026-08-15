export type PageType =
  | 'home'
  | 'blog'
  | 'category'
  | 'products'
  | 'about'
  | 'contact'
  | 'post'
  | 'privacy'
  | 'affiliate-disclosure'
  | 'terms';

export type CategorySlug =
  | 'anti-inflammatory-meal-prep'
  | 'meal-prep-tools-storage'
  | 'healthy-baking-fall-recipes'
  | 'refrigerator-pickles-ferments';

export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
  note?: string;
}

export interface RecipeStep {
  stepNumber: number;
  instruction: string;
  tip?: string;
  timerMinutes?: number;
}

export interface RecipeDetails {
  title: string;
  prepTime: string;
  cookTime: string;
  totalTime: string;
  servings: number;
  calories: number;
  protein: string;
  carbs: string;
  fat: string;
  fiber: string;
  ingredients: Ingredient[];
  steps: RecipeStep[];
  glycemicIndex: 'Low (GI < 35)' | 'Medium (GI 35-55)';
  gutBenefitScore: number; // out of 10
}

export interface TocItem {
  id: string;
  title: string;
}

export interface SeoData {
  focusKeyword: string;
  metaTitle: string;
  metaDescription: string;
  readabilityScore: string;
  schemaType: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML / Rich formatted content
  category: string;
  categorySlug: CategorySlug;
  tags: string[];
  coverImage: string;
  date: string;
  readTime: string;
  commentsCount: number;
  isFeatured?: boolean;
  views: number;
  recipeDetails?: RecipeDetails;
  affiliateProductIds?: string[];
  seo: SeoData;
  tableOfContents?: TocItem[];
}

export interface Product {
  id: string;
  name: string;
  category: 'Kitchen Tools' | 'Gut Supplements' | 'Pantry Essentials' | 'Meal Prep Containers';
  categorySlug: 'kitchen-tools' | 'gut-supplements' | 'pantry-essentials' | 'meal-prep-containers';
  price: string;
  listPrice?: string;
  discount?: string;
  pricePerUnit?: string;
  rating: number;
  reviewsCount: number;
  image: string;
  amazonUrl: string;
  badge?: 'Best Seller' | 'Top Pick' | 'Gut Health Essential' | 'Must Have';
  description: string;
  keyFeatures: string[];
  whyWeLoveIt: string;
}

export interface CategoryInfo {
  id: CategorySlug;
  name: string;
  slug: CategorySlug;
  description: string;
  tagline: string;
  iconName: string;
  image: string;
  postsCount: number;
  keyBenefits: string[];
}

export interface CommentItem {
  id: string;
  postId: string;
  authorName: string;
  date: string;
  text: string;
  likes: number;
}
