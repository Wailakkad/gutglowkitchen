'use client';

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { BLOG_POSTS } from '@/data/blogData';
import { CATEGORIES } from '@/data/categoryData';
import { Search, Bookmark, Grid, List, ArrowRight, Filter, Sparkles } from 'lucide-react';
import { SavePostButton } from '@/components/SavePostButton';
import { useSavedPosts } from '@/providers/SavedPostsProvider';

function BlogPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { savedPostIds } = useSavedPosts();
  const query = searchParams.get('q') ?? '';

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showSavedOnly, setShowSavedOnly] = useState(false);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleSearchChange = (q: string) => {
    router.replace(q.trim() ? `/blog?q=${encodeURIComponent(q.trim())}` : '/blog', {
      scroll: false
    });
  };

  // Filter posts
  const filteredPosts = BLOG_POSTS.filter((post) => {
    // Search Filter
    if (query) {
      const q = query.toLowerCase();
      const matchesTitle = post.title.toLowerCase().includes(q);
      const matchesExcerpt = post.excerpt.toLowerCase().includes(q);
      const matchesTag = post.tags.some((t) => t.toLowerCase().includes(q));
      if (!matchesTitle && !matchesExcerpt && !matchesTag) return false;
    }

    // Bookmarked Filter
    if (showSavedOnly && !savedPostIds.includes(post.id)) {
      return false;
    }

    // Tag Filter
    if (selectedTag && !post.tags.includes(selectedTag)) {
      return false;
    }

    return true;
  });

  // Extract all unique tags
  const allTags = Array.from(new Set(BLOG_POSTS.flatMap((p) => p.tags)));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Blog Page Header */}
      <div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-xs text-center space-y-3">
        <div className="inline-flex items-center space-x-1.5 bg-sage-light text-sage-dark text-xs font-bold px-3 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-gold" />
          <span>Evidence-Backed Articles & Prep Guides</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
          Gut Glow Kitchen Blog & Recipe Index
        </h1>
        <p className="text-sm text-slate-600 max-w-2xl mx-auto">
          Explore structured anti-inflammatory recipes, gut microbiome healing guides, and low-glycemic meal planning tips.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto pt-2">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search recipes, ingredients, gut symptoms or glucose hacks..."
              className="w-full pl-11 pr-10 py-3 bg-stone-50 border border-stone-300 rounded-xl text-slate-900 text-sm focus:outline-hidden focus:ring-2 focus:ring-sage focus:bg-white"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
            {query && (
              <button
                onClick={() => handleSearchChange('')}
                className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600 text-xs bg-slate-200 rounded-full w-5 h-5 flex items-center justify-center"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Categories & Filter Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-stone-200 pb-4">
        {/* Category Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0">
          <Link
            href="/blog"
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors whitespace-nowrap ${
              !showSavedOnly
                ? 'bg-sage text-white shadow-xs'
                : 'bg-white border border-stone-200 text-slate-700 hover:bg-stone-50'
            }`}
          >
            All Articles ({BLOG_POSTS.length})
          </Link>

          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className="px-4 py-2 rounded-xl text-xs font-bold transition-colors whitespace-nowrap bg-white border border-stone-200 text-slate-700 hover:bg-stone-50"
            >
              {cat.name}
            </Link>
          ))}

          <button
            onClick={() => {
              setShowSavedOnly(!showSavedOnly);
              setSelectedTag(null);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors whitespace-nowrap flex items-center space-x-1.5 ${
              showSavedOnly
                ? 'bg-gold text-slate-900 shadow-xs'
                : 'bg-white border border-stone-200 text-slate-700 hover:bg-stone-50'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Saved ({savedPostIds.length})</span>
          </button>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg border text-slate-600 transition-colors ${
              viewMode === 'grid' ? 'bg-sage text-white border-sage' : 'bg-white border-stone-200 hover:bg-stone-50'
            }`}
            title="Grid View"
          >
            <Grid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg border text-slate-600 transition-colors ${
              viewMode === 'list' ? 'bg-sage text-white border-sage' : 'bg-white border-stone-200 hover:bg-stone-50'
            }`}
            title="List View"
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Tag Chips Filter */}
      <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
        <span className="text-xs font-bold text-slate-400 shrink-0">Tags:</span>
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => {
              setSelectedTag(selectedTag === tag ? null : tag);
              setShowSavedOnly(false);
            }}
            className={`text-xs px-3 py-1 rounded-full border transition-colors whitespace-nowrap ${
              selectedTag === tag
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-stone-100 text-slate-600 border-stone-200 hover:bg-stone-200'
            }`}
          >
            #{tag}
          </button>
        ))}
      </div>

      {/* Filtered Posts Grid / List */}
      {filteredPosts.length === 0 ? (
        <div className="bg-white border border-stone-200 rounded-2xl p-12 text-center space-y-3">
          <div className="w-12 h-12 bg-stone-100 text-slate-400 rounded-full flex items-center justify-center mx-auto">
            <Filter className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-serif font-bold text-slate-900">
            No matching articles found
          </h3>
          <p className="text-xs text-slate-500">
            Try resetting your search query or choosing a different health category.
          </p>
          <button
            onClick={() => {
              handleSearchChange('');
              setSelectedTag(null);
              setShowSavedOnly(false);
            }}
            className="bg-sage text-white font-bold px-4 py-2 rounded-xl text-xs hover:bg-sage-dark transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div
          className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'space-y-6'
          }
        >
          {filteredPosts.map((post) => {
            if (viewMode === 'list') {
              return (
                <article
                  key={post.id}
                  className="bg-white border border-stone-200 rounded-2xl p-5 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col md:flex-row gap-6 items-center group"
                >
                  <Link href={`/blog/${post.slug}`} className="shrink-0">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full md:w-64 h-48 object-cover rounded-xl group-hover:scale-102 transition-transform duration-200"
                    />
                  </Link>
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/category/${post.categorySlug}`}
                        className="text-xs font-bold text-sage bg-sage-light px-2.5 py-0.5 rounded-md"
                      >
                        {post.category}
                      </Link>
                      <span className="text-xs text-slate-400 font-mono">{post.readTime}</span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xl font-serif font-bold text-slate-900 group-hover:text-sage transition-colors block"
                    >
                      {post.title}
                    </Link>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-2">
                      <SavePostButton postId={post.id} mode="inline" />
                    </div>
                  </div>
                </article>
              );
            }

            return (
              <article
                key={post.id}
                className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                  <Link
                    href={`/category/${post.categorySlug}`}
                    className="absolute top-3 left-3 bg-sage text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs"
                  >
                    {post.category}
                  </Link>

                  <SavePostButton postId={post.id} />
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 text-xs text-slate-400 font-mono">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xl font-serif font-bold text-slate-900 group-hover:text-sage transition-colors cursor-pointer leading-snug line-clamp-2 block"
                    >
                      {post.title}
                    </Link>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-end">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-bold text-sage hover:text-sage-dark flex items-center space-x-1"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <BlogPageContent />
    </Suspense>
  );
}