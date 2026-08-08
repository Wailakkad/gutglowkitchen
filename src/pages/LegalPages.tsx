import React from 'react';
import { PageType } from '../types';
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';

interface Props {
  page: 'privacy' | 'affiliate-disclosure' | 'terms';
}

export const LegalPages: React.FC<Props> = ({ page }) => {
  if (page === 'affiliate-disclosure') {
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

  if (page === 'privacy') {
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
            Gut Glow Kitchen ("we", "our", "us") respects your privacy. This policy outlines how we collect, use, and protect your personal information when you visit our health blog and request our 7-Day Anti-Inflammatory Meal Prep PDF.
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
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="bg-stone-100 border border-stone-200 rounded-3xl p-8 space-y-3">
        <div className="inline-flex items-center space-x-1.5 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full">
          <FileText className="w-3.5 h-3.5 text-gold" />
          <span>Terms of Service & Medical Disclaimer</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900">
          Terms & Conditions
        </h1>
        <p className="text-xs text-slate-600 font-mono">Last Updated: August 2026</p>
      </div>

      <div className="prose prose-slate max-w-none text-xs text-slate-700 space-y-4 leading-relaxed">
        <h2 className="text-lg font-serif font-bold text-slate-900">
          1. Medical & Educational Disclaimer
        </h2>
        <p>
          The information, recipes, meal plans, and nutrient recommendations provided on Gut Glow Kitchen are intended for general educational purposes only. They do not constitute personal medical advice, diagnosis, or treatment. Always consult a qualified physician or clinical dietitian before altering your diet or supplement protocol.
        </p>

        <h2 className="text-lg font-serif font-bold text-slate-900 mt-6">
          2. Intellectual Property
        </h2>
        <p>
          All recipe text, step-by-step photography, meal prep schedules, and downloadable PDF guides are the copyrighted intellectual property of Gut Glow Kitchen Media LLC.
        </p>
      </div>
    </div>
  );
};
