import type { Metadata } from 'next';
import { Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'The story and clinical mission of Gut Glow Kitchen. Gut healing, anti-inflammatory meal prep and blood sugar balance for busy women.'
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Hero Intro */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-1.5 bg-sage-light text-sage-dark text-xs font-bold px-3 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>Our Story & Clinical Mission</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-900 tracking-tight">
          Welcome to Gut Glow Kitchen
        </h1>
        <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          We believe that healing chronic inflammation, ending digestive distress, and stabilizing blood sugar should never feel overwhelming or require hours of daily cooking.
        </p>
      </div>

      {/* Founder Profile */}
      <div className="bg-white border border-stone-200 rounded-3xl p-8 sm:p-10 shadow-xs space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
              alt="Dr. Elena Vance"
              className="w-full h-80 object-cover rounded-2xl shadow-md border-2 border-sage"
            />
          </div>

          <div className="md:col-span-8 space-y-3">
            <span className="text-xs font-bold text-sage bg-sage-light px-3 py-1 rounded-full uppercase">
              Founder & Clinical Lead
            </span>
            <h2 className="text-2xl font-serif font-bold text-slate-900">
              Meet Dr. Elena Vance, MS, CNS
            </h2>
            <p className="text-xs text-slate-500 font-mono">
              Certified Nutrition Specialist • MS in Human Clinical Nutrition
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              &quot;After spending over a decade in clinical nutrition research seeing women struggle with unexplained fatigue, severe post-meal bloating, and erratic hormonal blood sugar spikes, I realized that generic &apos;eat clean&apos; advice was failing them.&quot;
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              &quot;Gut Glow Kitchen was born to bridge the gap between complex microbiome science and realistic, delicious Sunday batch-cooking meal plans.&quot;
            </p>
          </div>
        </div>
      </div>

      {/* Our 4 Health Pillars */}
      <div className="space-y-6">
        <h3 className="text-2xl font-serif font-bold text-slate-900 text-center">
          The 4 Pillars of Gut Glow Nutrition
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-stone-50 border border-stone-200 p-6 rounded-2xl space-y-2">
            <div className="flex items-center space-x-2 text-sage font-bold text-base">
              <CheckCircle2 className="w-5 h-5 text-gold" />
              <span>1. Anti-Inflammatory Meal Prep</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Batch cooking routines anchored in antioxidant herbs, turmeric, omega-3 wild fish, and low-toxin glass storage methods.
            </p>
          </div>

          <div className="bg-stone-50 border border-stone-200 p-6 rounded-2xl space-y-2">
            <div className="flex items-center space-x-2 text-sage font-bold text-base">
              <CheckCircle2 className="w-5 h-5 text-gold" />
              <span>2. Gut Microbiome Barrier Repair</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Re-seeding beneficial colon flora with spore probiotics, L-glutamine mucosal fuel, and 30+ weekly plant fibers.
            </p>
          </div>

          <div className="bg-stone-50 border border-stone-200 p-6 rounded-2xl space-y-2">
            <div className="flex items-center space-x-2 text-sage font-bold text-base">
              <CheckCircle2 className="w-5 h-5 text-gold" />
              <span>3. Blood Sugar Spike Flattening</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Food sequencing hacks (protein/fat clothing for carbs, pre-meal ACV) to eliminate 3 PM energy crashes and sugar cravings.
            </p>
          </div>

          <div className="bg-stone-50 border border-stone-200 p-6 rounded-2xl space-y-2">
            <div className="flex items-center space-x-2 text-sage font-bold text-base">
              <CheckCircle2 className="w-5 h-5 text-gold" />
              <span>4. Female Intermittent Fasting</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Gentle 14:10 and 16:8 circadian eating windows that protect female hormone balance while promoting cellular autophagy.
            </p>
          </div>
        </div>
      </div>

      {/* Editorial Standards */}
      <div className="bg-sage p-8 rounded-3xl text-white space-y-4">
        <div className="flex items-center space-x-2">
          <ShieldCheck className="w-6 h-6 text-gold" />
          <h3 className="text-xl font-serif font-bold text-white">
            Editorial Integrity & Fact-Checking Standard
          </h3>
        </div>
        <p className="text-xs text-white/90 leading-relaxed">
          Every article published on Gut Glow Kitchen undergoes rigorous review by our medical review board. We cite peer-reviewed clinical studies from PubMed, Nature Metabolism, and Gastroenterology. We never accept paid sponsorships from untested seed-oil products or unverified supplements.
        </p>
      </div>
    </div>
  );
}