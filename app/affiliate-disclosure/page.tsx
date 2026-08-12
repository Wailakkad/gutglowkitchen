import type { Metadata } from 'next';
import { ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure (FTC)',
  description:
    'FTC and Amazon Associates compliance disclosure for Gut Glow Kitchen affiliate links.'
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 space-y-3">
        <div className="inline-flex items-center space-x-1.5 bg-gold text-slate-900 text-xs font-bold px-3 py-1 rounded-full">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>FTC & Amazon Associates Compliance Statement</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
          Affiliate Disclosure Policy
        </h1>
        <p className="text-xs text-slate-600 font-mono">Last Updated: August 2026</p>
      </div>

      <div className="prose prose-slate max-w-none text-xs text-slate-700 space-y-4 leading-relaxed">
        <p>
          In compliance with the Federal Trade Commission (FTC) guidelines concerning the use of endorsements and testimonials in advertising, Gut Glow Kitchen wishes to disclose that certain links on this website are affiliate links.
        </p>

        <h2 className="text-lg font-serif font-bold text-slate-900 mt-6">
          1. Amazon Associates Program Participation
        </h2>
        <p>
          Gut Glow Kitchen is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
        </p>

        <h2 className="text-lg font-serif font-bold text-slate-900 mt-6">
          2. How Affiliate Links Work
        </h2>
        <p>
          When you click on an affiliate link for a kitchen appliance, Pyrex glass container set, or gut supplement on our site and make a purchase, Amazon or our partner vendors pay us a small commission. <strong>This occurs at zero additional cost to you.</strong>
        </p>

        <h2 className="text-lg font-serif font-bold text-slate-900 mt-6">
          3. Editorial Integrity & Testing Standards
        </h2>
        <p>
          Our product recommendations are based exclusively on clinical suitability, durability, non-toxic material safety, and performance during real Sunday meal prep batching. We never accept payment in exchange for positive reviews.
        </p>
      </div>
    </div>
  );
}