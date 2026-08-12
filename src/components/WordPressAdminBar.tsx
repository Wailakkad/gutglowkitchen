'use client';

import React, { useState, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { Sparkles, Eye, ShieldCheck, DollarSign, BarChart2 } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';
import { SeoInspectorModal } from './SeoInspectorModal';

export const WordPressAdminBar: React.FC = () => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isSeoModalOpen, setIsSeoModalOpen] = useState(false);
  const pathname = usePathname();

  const currentPost = useMemo(() => {
    const slugMatch = pathname?.match(/^\/blog\/([^/]+)$/);
    if (!slugMatch) return BLOG_POSTS[0];
    return BLOG_POSTS.find((p) => p.slug === slugMatch[1]) ?? BLOG_POSTS[0];
  }, [pathname]);

  if (!isAdminMode) {
    return (
      <>
        <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="font-semibold text-white">Gut Glow Kitchen</span>
            <span className="hidden sm:inline text-slate-400">• Next.js App Router Live Preview</span>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsAdminMode(true)}
              className="flex items-center space-x-1 hover:text-white transition-colors bg-slate-800 px-2.5 py-0.5 rounded text-[11px]"
            >
              <Eye className="w-3 h-3 text-gold" />
              <span>Enable WP Admin Toolbar</span>
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-slate-900 text-white text-xs py-1.5 px-4 flex items-center justify-between border-b border-slate-800 sticky top-0 z-50 shadow-md">
        <div className="flex items-center space-x-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center space-x-1.5 font-bold text-sage-light">
            <span className="bg-sage text-white text-[10px] px-1.5 py-0.5 rounded font-mono">WP</span>
            <span className="whitespace-nowrap">Gut Glow Kitchen</span>
          </div>

          <div className="h-3 w-px bg-slate-700 hidden sm:block"></div>

          <button
            onClick={() => setIsSeoModalOpen(true)}
            className="flex items-center space-x-1.5 hover:bg-slate-800 px-2 py-1 rounded text-emerald-400 font-medium transition-colors whitespace-nowrap"
            title="Inspect RankMath / Yoast SEO Score & Schema"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>SEO Score: 96/100 (Good)</span>
          </button>

          <div className="flex items-center space-x-1.5 text-gold bg-slate-800/80 px-2 py-0.5 rounded whitespace-nowrap">
            <DollarSign className="w-3.5 h-3.5 text-gold" />
            <span>Affiliate Clicks Today: <strong className="text-white font-mono">142</strong></span>
          </div>

          <div className="hidden lg:flex items-center space-x-2 text-slate-300">
            <BarChart2 className="w-3.5 h-3.5 text-sage" />
            <span>Daily Readers: 1,840</span>
          </div>
        </div>

        <div className="flex items-center space-x-3 ml-2">
          <button
            onClick={() => setIsAdminMode(false)}
            className="text-slate-400 hover:text-white transition-colors text-[11px] whitespace-nowrap"
          >
            Hide Bar
          </button>
        </div>
      </div>

      <SeoInspectorModal
        post={currentPost}
        isOpen={isSeoModalOpen}
        onClose={() => setIsSeoModalOpen(false)}
      />
    </>
  );
};