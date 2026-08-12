import type { Metadata } from 'next';
import { Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'GDPR & CCPA compliant privacy policy for Gut Glow Kitchen.'
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="bg-sage-light border border-sage-light rounded-3xl p-8 space-y-3">
        <div className="inline-flex items-center space-x-1.5 bg-sage text-white text-xs font-bold px-3 py-1 rounded-full">
          <Lock className="w-3.5 h-3.5 text-gold" />
          <span>GDPR & CCPA Compliant Privacy Policy</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-600 font-mono">Effective Date: August 2026</p>
      </div>

      <div className="prose prose-slate max-w-none text-xs text-slate-700 space-y-4 leading-relaxed">
        <p>
          Gut Glow Kitchen (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy. This policy outlines how we collect, use, and protect your personal information when you visit our health blog and request our 7-Day Anti-Inflammatory Meal Prep PDF.
        </p>

        <h2 className="text-lg font-serif font-bold text-slate-900 mt-6">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Email Subscribers:</strong> First name and email address provided when opting in for free PDF meal plan guides.</li>
          <li><strong>Log & Analytics Data:</strong> Anonymous browser IP address, device type, and page view statistics via privacy-focused analytics.</li>
        </ul>

        <h2 className="text-lg font-serif font-bold text-slate-900 mt-6">
          2. Email Unsubscribe Guarantee
        </h2>
        <p>
          We do not sell, rent, or trade email lists to third parties. Every newsletter email includes an instant 1-click unsubscribe link at the bottom.
        </p>

        <h2 className="text-lg font-serif font-bold text-slate-900 mt-6">
          3. Advertising & Cookies
        </h2>
        <p>
          We display privacy-compliant display advertising (including Google AdSense and partner ad networks such as Adsterra) to keep this publication free. These partners may use cookies to serve relevant ads. You can manage or disable cookies in your browser settings at any time.
        </p>
      </div>
    </div>
  );
}