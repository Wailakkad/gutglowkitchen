'use client';

import React from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blogData';
import { CATEGORIES } from '@/data/categoryData';
import { PRODUCTS } from '@/data/productData';
import { downloadFreeGuide } from '@/utils/downloadGuide';
import { MealPlanCalculator } from '@/components/MealPlanCalculator';
import { NewsletterOptIn } from '@/components/NewsletterOptIn';
import { AffiliateProductBox } from '@/components/AffiliateProductBox';
import { SavePostButton } from '@/components/SavePostButton';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  ShoppingBag,
  Award
} from 'lucide-react';

export default function HomePage() {
  const latestPosts = BLOG_POSTS.slice(0, 4);
  const kitchenTools = PRODUCTS.filter(
    (p) => p.categorySlug === 'kitchen-tools' || p.categorySlug === 'meal-prep-containers'
  ).slice(0, 3);

  return (
    <div className="space-y-16 pb-12">
      {/* 1. HERO SECTION */}
      <section className="px-6 sm:px-12 py-10 sm:py-14 bg-[#F4F7F2] border-b border-[#4A7C59]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-block px-3.5 py-1 bg-[#F4B942]/20 text-[#8B6E2C] text-xs font-bold uppercase tracking-widest rounded-full">
              Wellness & Nutrition
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight text-[#4A7C59]">
              Anti-Inflammatory <br className="hidden sm:inline" />
              <span className="italic">Meal Prep</span> Made Simple
            </h1>

            {/* Mission Statement */}
            <p className="text-base sm:text-lg text-[#555555] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Heal your gut, flatten glucose spikes, and master 60-minute Sunday batch cooking with nutritionist-approved meal plans designed for modern, busy lives.
            </p>

            {/* Key Trust Signals */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0 text-left">
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#333333] bg-white p-2.5 rounded-xl border border-[#4A7C59]/10 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0" />
                <span>Gut Repair Protocols</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#333333] bg-white p-2.5 rounded-xl border border-[#4A7C59]/10 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0" />
                <span>Low-Glycemic Plans</span>
              </div>
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#333333] bg-white p-2.5 rounded-xl border border-[#4A7C59]/10 shadow-2xs col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#4A7C59] shrink-0" />
                <span>16:8 Fasting Guides</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/blog"
                className="w-full sm:w-auto px-8 py-4 bg-[#4A7C59] hover:bg-[#3A6346] text-white font-bold rounded-lg shadow-lg text-sm sm:text-base transition-all flex items-center justify-center space-x-2 group"
              >
                <span>View Meal Plans</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={downloadFreeGuide}
                className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-[#4A7C59] text-[#4A7C59] hover:bg-[#F4F7F2] font-bold rounded-lg text-sm sm:text-base transition-all flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-[#F4B942]" />
                <span>Get the Free Guide</span>
              </button>
            </div>

            {/* Reader Metrics */}
            <div className="pt-2 flex items-center justify-center lg:justify-start space-x-6 text-xs text-[#777777] font-medium">
              <div className="flex items-center space-x-1.5">
                <Users className="w-4 h-4 text-[#4A7C59]" />
                <span>50,000+ Active Readers</span>
              </div>
              <div className="h-3 w-px bg-[#4A7C59]/20"></div>
              <div className="flex items-center space-x-1.5">
                <Award className="w-4 h-4 text-[#8B6E2C]" />
                <span>4.9/5 Clinical Rating</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Card */}
          <div className="relative flex justify-center py-4">
            <div className="w-[320px] sm:w-[400px] h-[360px] sm:h-[400px] bg-[#4A7C59] rounded-[40px] rotate-2 overflow-hidden shadow-2xl relative">
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=800"
                alt="Anti-inflammatory meal prep bowls"
                className="w-full h-full object-cover opacity-80 mix-blend-overlay"
              />
              <div className="absolute inset-0 flex items-center justify-center text-[#FCFBF8] text-center p-8 bg-gradient-to-t from-[#4A7C59]/90 via-transparent to-transparent">
                <div className="border-2 border-[#F4B942]/40 p-6 rounded-full bg-[#4A7C59]/30 backdrop-blur-xs">
                  <p className="text-xl sm:text-2xl font-serif italic text-white">"Let food be <br /> your medicine"</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-2 -left-2 sm:bottom-2 sm:left-4 bg-[#F4B942] p-5 rounded-2xl shadow-xl max-w-[220px] text-left">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#8B6E2C] mb-1">New Recipe</p>
              <p className="text-xs sm:text-sm font-semibold leading-snug text-[#4A7C59]">
                Golden Turmeric Salmon & Sweet Potato Meal Prep Bowl
              </p>
            </div>
          </div>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* 2. CATEGORY HIGHLIGHT GRID */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-serif font-bold text-slate-900">
              Explore Core Health Topics
            </h2>
            <p className="text-sm text-slate-600">
              Targeted protocols to soothe digestion, balance glucose, and simplify weekly batch cooking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={`/category/${cat.slug}`}
                className="group bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-slate-800 text-xs font-bold px-2.5 py-1 rounded-full shadow-2xs font-mono">
                    {cat.postsCount} Guides
                  </div>
                </div>

                <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-sage transition-colors mb-1">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center text-xs font-bold text-sage group-hover:text-sage-dark">
                    <span>Browse {cat.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 3. INTERACTIVE MEAL PLAN CALCULATOR */}
        <section>
          <MealPlanCalculator />
        </section>

        {/* 4. FEATURED BLOG POSTS */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#4A7C59]/10 pb-4 gap-4">
            <div>
              <div className="text-xs uppercase tracking-widest font-bold text-[#4A7C59] flex items-center gap-2 mb-1">
                <span className="w-8 h-[1px] bg-[#4A7C59]"></span>
                <span>Featured Articles</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-[#4A7C59]">
                Anti-Inflammatory Guides & Recipes
              </h2>
            </div>

            <Link
              href="/blog"
              className="text-xs uppercase tracking-widest font-bold text-[#4A7C59] hover:text-[#3A6346] flex items-center space-x-1"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-[#4A7C59]/10 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                  <Link
                    href={`/blog/${post.slug}`}
                    className="absolute top-3 left-3 bg-[#4A7C59] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-2xs"
                  >
                    {post.category}
                  </Link>

                  <SavePostButton postId={post.id} />
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 text-xs text-[#777777] font-mono">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xl font-serif font-bold text-[#4A7C59] group-hover:text-[#3A6346] transition-colors cursor-pointer leading-snug line-clamp-2 block"
                    >
                      {post.title}
                    </Link>

                    <p className="text-xs text-[#555555] line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#4A7C59]/10 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-7 h-7 rounded-full object-cover border border-[#4A7C59]/20"
                      />
                      <span className="text-xs font-semibold text-[#333333]">{post.author.name}</span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-bold text-[#4A7C59] hover:text-[#3A6346] flex items-center space-x-1"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 5. RECOMMENDED KITCHEN TOOLS (AMAZON AFFILIATE HIGHLIGHT) */}
        <section className="bg-stone-50 border border-stone-200 rounded-3xl p-8 sm:p-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-stone-200 pb-4 gap-4">
            <div>
              <div className="inline-flex items-center space-x-1 text-xs font-bold text-gold-hover bg-gold-light px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-2">
                <ShoppingBag className="w-3.5 h-3.5 text-gold" />
                <span>Amazon Affiliate Store Ready</span>
              </div>
              <h2 className="text-3xl font-serif font-bold text-slate-900">
                Recommended Kitchen Tools & Appliances
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                The exact non-toxic glassware, high-speed blenders, and bone-broth pressure cookers used in our prep recipes.
              </p>
            </div>

            <Link
              href="/products"
              className="text-sm font-bold text-sage hover:text-sage-dark flex items-center space-x-1 shrink-0"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="space-y-6">
            {kitchenTools.map((prod) => (
              <AffiliateProductBox key={prod.id} product={prod} />
            ))}
          </div>
        </section>

        {/* 6. EMBEDDED LEAD MAGNET OPT-IN */}
        <section>
          <NewsletterOptIn isEmbedded={true} />
        </section>

      </div>
    </div>
  );
}