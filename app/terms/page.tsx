import type { Metadata } from 'next';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms of service and medical disclaimer for Gut Glow Kitchen.'
};

export default function TermsPage() {
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

        <h2 className="text-lg font-serif font-bold text-slate-900 mt-6">
          3. Affiliate & Advertising Disclosure
        </h2>
        <p>
          Gut Glow Kitchen is a participant in the Amazon Services LLC Associates Program and displays third-party advertising. Clicking affiliate links may earn us a commission at no extra cost to you. Advertisers and ad networks may serve ads through cookies as described in our Privacy Policy.
        </p>
      </div>
    </div>
  );
}