'use client';

import React, { useState } from 'react';
import { PRODUCTS } from '@/data/productData';
import { AffiliateProductBox } from '@/components/AffiliateProductBox';
import { ShoppingBag, Search, ShieldAlert } from 'lucide-react';

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = PRODUCTS.filter((product) => {
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchesName = product.name.toLowerCase().includes(q);
      const matchesDesc = product.description.toLowerCase().includes(q);
      if (!matchesName && !matchesDesc) return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Page Header */}
      <div className="bg-white border border-stone-200 rounded-3xl p-8 sm:p-10 shadow-xs text-center space-y-3">
        <div className="inline-flex items-center space-x-1.5 bg-amber-50 text-amber-900 text-xs font-bold px-3.5 py-1 rounded-full border border-amber-200">
          <ShoppingBag className="w-3.5 h-3.5 text-gold" />
          <span>Amazon Associate Affiliate Store Hub</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
          Recommended Kitchen Tools
        </h1>

        <p className="text-sm text-slate-600 max-w-2xl mx-auto">
          Every non-toxic pan, high-speed blender, and glass prep container on this page has been thoroughly vetted by our team of clinical nutritionists.
        </p>

        {/* Search Bar */}
        <div className="max-w-lg mx-auto pt-2">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search kitchen tools, blenders, pans..."
              className="w-full pl-11 pr-10 py-3 bg-stone-50 border border-stone-300 rounded-xl text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-sage focus:bg-white"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
          </div>
        </div>
      </div>

      {/* FTC Transparency Disclosure Banner */}
      <div className="bg-amber-50/90 border border-amber-200 rounded-2xl p-4 text-xs text-amber-900 flex items-start space-x-3">
        <ShieldAlert className="w-5 h-5 text-gold shrink-0 mt-0.5" />
        <p>
          <strong>Affiliate Transparency Disclosure:</strong> Gut Glow Kitchen is a participant in the Amazon Services LLC Associates Program. When you purchase through our links, we earn a small commission at no additional cost to you. This directly funds our free recipe testing and clinical research.
        </p>
      </div>

      {/* Products Feed */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white border border-stone-200 rounded-2xl p-12 text-center space-y-3">
          <h3 className="text-xl font-serif font-bold text-slate-900">
            No products found matching &quot;{searchQuery}&quot;
          </h3>
          <p className="text-xs text-slate-500">
            Try resetting your search query.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
            }}
            className="bg-sage text-white font-bold px-4 py-2 rounded-xl text-xs"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredProducts.map((product) => (
            <AffiliateProductBox key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}