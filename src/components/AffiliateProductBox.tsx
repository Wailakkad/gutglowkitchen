import React, { useState } from 'react';
import { Product } from '../types';
import { Star, ExternalLink, ShieldCheck, CheckCircle2, ShoppingCart, Award, Info } from 'lucide-react';

interface Props {
  product: Product;
  compact?: boolean;
}

export const AffiliateProductBox: React.FC<Props> = ({ product, compact = false }) => {
  const [showDisclosureModal, setShowDisclosureModal] = useState(false);

  const handleAmazonClick = (e: React.MouseEvent) => {
    // Allows opening real simulated affiliate window or notification
    window.open(product.amazonUrl, '_blank', 'noopener,noreferrer');
  };

  if (compact) {
    return (
      <div className="bg-white border border-[#4A7C59]/10 rounded-2xl p-4 shadow-xs hover:shadow-md transition-all flex items-center space-x-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-20 h-20 object-cover rounded-xl shrink-0 bg-[#F4F7F2]"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <span className="text-[10px] font-bold bg-[#F4B942]/20 text-[#8B6E2C] px-2 py-0.5 rounded-full uppercase tracking-wider">
              {product.badge || 'Recommended'}
            </span>
            <div className="flex items-center text-[#F4B942] text-xs">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="font-mono ml-1 font-bold text-[#333333]">{product.rating}</span>
            </div>
          </div>
          <h5 className="font-bold text-sm text-[#4A7C59] truncate">{product.name}</h5>
          <div className="text-xs font-mono text-[#3A6346] font-bold mt-0.5">{product.price}</div>
        </div>
        <button
          onClick={handleAmazonClick}
          className="bg-[#F4B942] hover:bg-[#E2A732] text-[#4A7C59] font-bold px-3 py-2 rounded-xl text-xs flex items-center space-x-1 shrink-0 transition-colors uppercase tracking-wider"
        >
          <span>Buy</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#4A7C59]/10 rounded-2xl p-6 shadow-xs hover:shadow-md transition-all relative overflow-hidden my-6">
      {/* Top Badge Banner */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#4A7C59]/10">
        <div className="flex items-center space-x-2">
          <span className="bg-[#F4B942] text-[#4A7C59] text-xs font-bold px-2.5 py-1 rounded-md flex items-center space-x-1 uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#4A7C59]" />
            <span>{product.badge || 'Kitchen Essential'}</span>
          </span>
          <span className="text-xs text-[#777777] hidden sm:inline">
            Tested & Verified by Gut Glow Kitchen
          </span>
        </div>

        <button
          onClick={() => setShowDisclosureModal(true)}
          className="text-xs text-[#777777] hover:text-[#4A7C59] flex items-center space-x-1"
        >
          <Info className="w-3.5 h-3.5" />
          <span>Affiliate Link</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        {/* Product Image */}
        <div className="md:col-span-4 relative group">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-xl bg-[#F4F7F2] group-hover:scale-102 transition-transform duration-200 border border-[#4A7C59]/10"
          />
        </div>

        {/* Product Description & Features */}
        <div className="md:col-span-8 space-y-3">
          <div className="flex items-center space-x-2">
            <div className="flex items-center text-[#F4B942]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs font-mono font-bold text-[#333333]">{product.rating}</span>
            <span className="text-xs text-[#777777] font-mono">({product.reviewsCount.toLocaleString()} Amazon reviews)</span>
          </div>

          <h4 className="text-lg font-serif font-bold text-[#4A7C59] leading-snug">
            {product.name}
          </h4>

          <p className="text-sm text-[#555555] line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          <ul className="space-y-1.5 text-xs text-[#333333]">
            {product.keyFeatures.map((feat, idx) => (
              <li key={idx} className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>

          {/* Pricing & CTA */}
          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-[#4A7C59]/10">
            <div>
              <span className="text-xs text-[#777777] block font-medium">Amazon Price</span>
              <span className="text-2xl font-mono font-bold text-[#333333]">{product.price}</span>
            </div>

            <button
              onClick={handleAmazonClick}
              className="w-full sm:w-auto bg-[#F4B942] hover:bg-[#E2A732] text-[#4A7C59] font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-widest transition-all flex items-center justify-center space-x-2 shadow-xs"
            >
              <ShoppingCart className="w-4 h-4 text-[#4A7C59]" />
              <span>Check Price on Amazon</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Why We Recommend Callout */}
      <div className="mt-4 bg-[#F4F7F2] p-3.5 rounded-xl border border-[#4A7C59]/20 text-xs text-[#333333] flex items-start space-x-2">
        <ShieldCheck className="w-4 h-4 text-[#4A7C59] shrink-0 mt-0.5" />
        <span>
          <strong className="text-[#4A7C59]">Why Gut Glow Kitchen Recommends This:</strong> {product.whyWeLoveIt}
        </span>
      </div>

      {/* Affiliate Disclosure Modal */}
      {showDisclosureModal && (
        <div className="fixed inset-0 bg-[#333333]/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <h3 className="text-lg font-serif font-bold text-[#4A7C59]">
              Affiliate Link Transparency Notice
            </h3>
            <p className="text-sm text-[#555555] leading-relaxed">
              Gut Glow Kitchen is a reader-supported health publication. When you buy products through our Amazon links, we may earn an affiliate commission at no extra cost to you.
            </p>
            <p className="text-xs text-[#777777]">
              We only recommend kitchen tools, appliances, and gut supplements that our team of clinical nutritionists has thoroughly vetted.
            </p>
            <button
              onClick={() => setShowDisclosureModal(false)}
              className="w-full bg-[#4A7C59] text-white font-bold py-2.5 rounded-xl text-xs uppercase tracking-widest hover:bg-[#3A6346] transition-colors"
            >
              Understood, Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
