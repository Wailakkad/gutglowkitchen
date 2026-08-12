import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '@/data/blogData';
import { CATEGORIES } from '@/data/categoryData';

const SITE_URL = process.env.SITE_URL ?? 'https://gutglowkitchen.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: 'daily', priority: 1 },
    { url: `${SITE_URL}/blog`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/products`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/about`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/contact`, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${SITE_URL}/privacy`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/terms`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/affiliate-disclosure`, changeFrequency: 'yearly', priority: 0.2 }
  ];

  const blogPosts: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    changeFrequency: 'monthly',
    priority: 0.8
  }));

  const categories: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${SITE_URL}/category/${cat.slug}`,
    changeFrequency: 'weekly',
    priority: 0.7
  }));

  return [...staticPages, ...blogPosts, ...categories];
}