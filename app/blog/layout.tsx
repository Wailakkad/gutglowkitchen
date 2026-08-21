import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Recipe Index',
  description:
    'Explore evidence-backed anti-inflammatory recipes, gut microbiome healing guides, low-glycemic meal planning tips, and batch cooking protocols for busy women.',
  alternates: {
    canonical: '/blog'
  },
  openGraph: {
    title: 'Gut Glow Kitchen Blog – Anti-Inflammatory Recipes & Gut Health Guides',
    description:
      'Evidence-backed anti-inflammatory recipes, gut microbiome healing guides, and low-glycemic meal planning tips for busy women.',
    type: 'website',
    url: '/blog'
  }
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
