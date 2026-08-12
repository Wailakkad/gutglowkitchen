'use client';

import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle2, Lock, X, FileText, Download } from 'lucide-react';
import { downloadFreeGuide } from '../utils/downloadGuide';

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
  isEmbedded?: boolean;
}

export const NewsletterOptIn: React.FC<Props> = ({ isOpen = false, onClose, isEmbedded = false }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
  };

  const formContent = (
    <div className="space-y-4">
      {isSubmitted ? (
        <div className="bg-sage-light/80 p-6 rounded-2xl text-center space-y-3 animate-in zoom-in-95 border border-sage-light">
          <div className="w-12 h-12 bg-sage text-white rounded-full flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-6 h-6 text-gold" />
          </div>
          <h4 className="text-xl font-serif font-bold text-slate-900">
            Welcome to the Gut Glow Community, {name || 'Friend'}!
          </h4>
          <p className="text-xs text-slate-700 leading-relaxed">
            Your <strong>Free 7-Day Anti-Inflammatory Meal Prep & Grocery Reset PDF Guide</strong> has been sent to <strong>{email}</strong>.
          </p>
          
          {/* Instant PDF Preview Card */}
          <div className="bg-white p-4 rounded-xl border border-stone-200 text-left space-y-2 my-4">
            <div className="flex items-center space-x-2 text-sage font-bold text-xs">
              <FileText className="w-4 h-4 text-gold" />
              <span>Instant Download Access</span>
            </div>
            <div className="text-xs font-bold text-slate-900">
              Gut_Glow_Kitchen_7Day_AntiInflammatory_MealPrep.pdf (4.2 MB)
            </div>
            <button
              onClick={() => alert('📥 PDF Download Initiated: Gut_Glow_Kitchen_7Day_AntiInflammatory_MealPrep.pdf')}
              className="w-full bg-gold hover:bg-amber-400 text-slate-900 font-bold py-2 rounded-lg text-xs flex items-center justify-center space-x-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Click to Save PDF Now</span>
            </button>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="text-xs text-slate-500 hover:text-slate-800 underline font-medium"
            >
              Close Window
            </button>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">First Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Sarah"
              className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-sage focus:bg-white"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="sarah@example.com"
              className="w-full px-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-slate-900 placeholder-slate-400 text-sm focus:outline-hidden focus:ring-2 focus:ring-sage focus:bg-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#4A7C59] hover:bg-[#3A6346] text-white font-bold py-3 rounded-xl text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center space-x-2"
          >
            <Mail className="w-4 h-4 text-[#F4B942]" />
            <span>Send Me The Free 7-Day Guide PDF</span>
          </button>

          <div className="flex items-center justify-center space-x-1 text-[11px] text-slate-400 pt-1">
            <Lock className="w-3 h-3 text-slate-400" />
            <span>We respect your privacy. Unsubscribe with 1 click anytime.</span>
          </div>
        </form>
      )}
    </div>
  );

  if (isEmbedded) {
    return (
      <div className="bg-[#4A7C59] text-white rounded-3xl p-8 sm:p-10 shadow-lg my-10 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-1.5 bg-[#F4B942]/20 text-[#F4B942] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#F4B942]" />
              <span>Join the Glow Circle</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-serif italic text-white tracking-tight">
              Get Your Free 7-Day Anti-Inflammatory Meal Plan
            </h3>
            <p className="text-sm text-[#F4F7F2]/80 leading-relaxed">
              Join 50,000+ women taking back their gut health, ending digestive bloating, and enjoying delicious low-glycemic Sunday batch cooking.
            </p>
            <ul className="space-y-2 text-xs font-medium text-[#F4F7F2]/90 pt-1">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#F4B942] shrink-0" />
                <span>Complete 7-day breakfast, lunch, dinner & elixir schedule</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#F4B942] shrink-0" />
                <span>Categorized grocery store checklist (produce, proteins, pantry)</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#F4B942] shrink-0" />
                <span>60-minute Sunday kitchen prep sequence guide</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-2xl text-[#333333] shadow-md">
            <div className="space-y-4">
              <div className="bg-sage-light/80 p-6 rounded-2xl text-center space-y-3">
                <div className="w-12 h-12 bg-sage text-white rounded-full flex items-center justify-center mx-auto shadow-sm">
                  <FileText className="w-6 h-6 text-gold" />
                </div>
                <h4 className="text-xl font-serif font-bold text-slate-900">
                  Free 7-Day Anti-Inflammatory Meal Prep & Grocery Reset PDF
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Instant download. No email required.
                </p>
              </div>
              <button
                onClick={downloadFreeGuide}
                className="w-full bg-gold hover:bg-amber-400 text-slate-900 font-bold py-3 rounded-xl text-xs flex items-center justify-center space-x-1.5 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download Free Guide PDF Now</span>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full pointer-events-none"></div>
      </div>
    );
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative space-y-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2">
          <div className="w-12 h-12 bg-sage-light text-sage rounded-2xl flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6 text-gold" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-slate-900">
            Free 7-Day Anti-Inflammatory Meal Prep PDF
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Instant download access to our complete grocery list, batch cooking sequence, and low-glycemic recipe cards.
          </p>
        </div>

        {formContent}
      </div>
    </div>
  );
};
