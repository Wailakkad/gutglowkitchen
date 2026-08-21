import type { Metadata } from 'next';
import './globals.css';
import { SavedPostsProvider } from '@/providers/SavedPostsProvider';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { WordPressAdminBar } from '@/components/WordPressAdminBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default:
      'Gut Glow Kitchen – Anti-Inflammatory Meal Prep, Gut Health & Low-Glycemic Recipes',
    template: '%s | Gut Glow Kitchen'
  },
  description:
    'Evidence-backed anti-inflammatory meal prep plans, gut health recipes, blood sugar balancing guides, and 16:8 intermittent fasting meal plans for busy women.',
  icons: {
    icon: '/favicon.svg'
  },
  metadataBase: new URL(process.env.SITE_URL ?? 'https://gutglowkitchen.com'),
  openGraph: {
    siteName: 'Gut Glow Kitchen',
    type: 'website',
    title: 'Gut Glow Kitchen – Anti-Inflammatory Meal Prep, Gut Health & Low-Glycemic Recipes',
    description:
      'Evidence-backed anti-inflammatory meal prep plans, gut health recipes, blood sugar balancing guides, and 16:8 intermittent fasting meal plans for busy women.'
  },
  other: {
    'google-site-verification': 'Nsz6F0v4KXYEIMqCWjIQqEoKvDrhkISduv0IDrYGubg'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className="min-h-screen flex flex-col bg-cream text-slate-800 font-sans antialiased selection:bg-sage/20 selection:text-sage-dark">
        <SavedPostsProvider>
          <WordPressAdminBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SavedPostsProvider>
      </body>
    </html>
  );
}