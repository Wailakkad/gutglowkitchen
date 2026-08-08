import React from 'react';
import { PageType, CategorySlug } from '../types';
import { CATEGORIES } from '../data/categoryData';
import { downloadFreeGuide } from '../utils/downloadGuide';
import { Sparkles, Mail, Heart, ShieldAlert, Lock, CheckCircle2 } from 'lucide-react';

interface Props {
  setCurrentPage: (page: PageType) => void;
  setSelectedCategory: (cat: CategorySlug | null) => void;
}

export const Footer: React.FC<Props> = ({ setCurrentPage, setSelectedCategory }) => {
  const handleCategoryLink = (slug: CategorySlug) => {
    setSelectedCategory(slug);
    setCurrentPage('category');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (page: PageType) => {
    setCurrentPage(page);
    if (page !== 'category') setSelectedCategory(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2C4A35] text-[#F4F7F2]/90 pt-16 pb-12 border-t border-[#4A7C59]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#4A7C59]/30">
          
          {/* Column 1: Brand & Mission */}
          <div className="space-y-4">
            <div
              onClick={() => handleNavClick('home')}
              className="cursor-pointer flex items-center space-x-2.5 group"
            >
              <div className="w-9 h-9 rounded-full bg-[#4A7C59] flex items-center justify-center text-white border border-[#F4B942]/40">
                <span className="font-serif text-lg font-bold text-white">G</span>
              </div>
              <span className="text-xl font-serif font-bold text-white group-hover:text-[#F4B942] transition-colors">
                Gut Glow Kitchen
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#F4F7F2]/80 leading-relaxed">
              Gut Glow Kitchen provides evidence-backed anti-inflammatory meal prep routines, microbiome gut repair strategies, low-glycemic blood sugar recipes, and female-friendly fasting plans.
            </p>
            <div className="flex items-center space-x-2 text-xs text-[#F4F7F2] font-medium bg-[#4A7C59]/30 p-2.5 rounded-lg border border-[#4A7C59]/40">
              <CheckCircle2 className="w-4 h-4 text-[#F4B942] shrink-0" />
              <span>Tested by Clinical Nutritionists & Holistic Dietitians</span>
            </div>
          </div>

          {/* Column 2: Core Topics & Categories */}
          <div>
            <h3 className="text-white font-serif font-semibold text-base mb-4 tracking-wide border-b border-[#4A7C59]/30 pb-2">
              Categories
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCategoryLink(cat.slug)}
                    className="hover:text-[#F4B942] transition-colors text-[#F4F7F2]/90 hover:translate-x-1 inline-block transform duration-150"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNavClick('products')}
                  className="hover:text-[#F4B942] transition-colors text-[#F4B942] font-semibold"
                >
                  ⭐ Recommended Products (Amazon Hub)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Site & Legal Links */}
          <div>
            <h3 className="text-white font-serif font-semibold text-base mb-4 tracking-wide border-b border-[#4A7C59]/30 pb-2">
              Information & Legal
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button onClick={() => handleNavClick('about')} className="hover:text-white transition-colors">
                  About Gut Glow Kitchen
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="hover:text-white transition-colors">
                  Contact & Media Inquiries
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('privacy')} className="hover:text-white transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('affiliate-disclosure')} className="hover:text-white transition-colors">
                  Affiliate Disclosure (FTC)
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('terms')} className="hover:text-white transition-colors">
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Lead Magnet Newsletter */}
          <div className="space-y-4">
            <h3 className="text-white font-serif font-semibold text-base mb-2 tracking-wide border-b border-[#4A7C59]/30 pb-2">
              Join 50,000+ Readers
            </h3>
            <p className="text-xs text-[#F4F7F2]/80">
              Get our weekly <strong>Anti-Inflammatory Meal Prep & Grocery Reset PDF</strong> delivered free every Sunday.
            </p>
            <button
              onClick={downloadFreeGuide}
              className="w-full bg-[#F4B942] hover:bg-[#E2A732] text-[#4A7C59] font-bold py-2.5 px-4 rounded-lg text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center space-x-2"
            >
              <Mail className="w-4 h-4 text-[#4A7C59]" />
              <span>Get Free Weekly Prep Guide</span>
            </button>
            <div className="text-[11px] text-[#F4F7F2]/60 flex items-center space-x-1">
              <Lock className="w-3 h-3 text-[#F4B942]" />
              <span>Zero spam. Unsubscribe anytime.</span>
            </div>
          </div>
        </div>

        {/* Footer Disclaimers & Copyright */}
        <div className="pt-8 text-xs text-[#F4F7F2]/70 space-y-4 leading-relaxed">
          <div className="bg-[#4A7C59]/20 p-4 rounded-xl border border-[#4A7C59]/30 flex items-start space-x-3">
            <ShieldAlert className="w-5 h-5 text-[#F4B942] shrink-0 mt-0.5" />
            <p>
              <strong>Medical Disclaimer:</strong> The content provided on Gut Glow Kitchen is for educational and informational purposes only and is not intended as medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider or clinical nutritionist before making changes to your diet or supplement regimen.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 text-[#F4F7F2]/70 pt-2 text-[10px] uppercase tracking-widest">
            <p>
              © {new Date().getFullYear()} Gut Glow Kitchen. All rights reserved.
            </p>
            <p>
              Participant in the Amazon Services LLC Associates Program.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
