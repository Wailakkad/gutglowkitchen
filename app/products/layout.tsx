import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Recommended Kitchen Tools',
  description:
    'Vetted kitchen tools, glass meal prep containers, blenders, and non-toxic cookware recommended by Gut Glow Kitchen clinical nutritionists.',
  alternates: {
    canonical: '/products'
  },
  openGraph: {
    title: 'Recommended Kitchen Tools – Gut Glow Kitchen',
    description:
      'Vetted kitchen tools, glass meal prep containers, blenders, and non-toxic cookware recommended by Gut Glow Kitchen clinical nutritionists.',
    type: 'website',
    url: '/products'
  }
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
