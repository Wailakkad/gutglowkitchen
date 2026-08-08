import React from 'react';
import { BlogPost, PageType, CategorySlug } from '../types';
import { CATEGORIES } from '../data/categoryData';
import { PRODUCTS } from '../data/productData';
import { AffiliateProductBox } from '../components/AffiliateProductBox';
import { Sparkles, ArrowRight, Bookmark, CheckCircle2, ShoppingBag } from 'lucide-react';

interface Props {
  categorySlug: CategorySlug;
  posts: BlogPost[];
  setCurrentPage: (page: PageType) => void;
  setSelectedPost: (post: BlogPost) => void;
  savedPostIds: string[];
  toggleSavePost: (id: string) => void;
}

export const CategoryPage: React.FC<Props> = ({
  categorySlug,
  posts,
  setCurrentPage,
  setSelectedPost,
  savedPostIds,
  toggleSavePost
}) => {
  const category = CATEGORIES.find((c) => c.slug === categorySlug) || CATEGORIES[0];
  const filteredPosts = posts.filter((p) => p.categorySlug === categorySlug);
  const relatedProducts = PRODUCTS.slice(0, 2);

  const handlePostClick = (post: BlogPost) => {
    setSelectedPost(post);
    setCurrentPage('post');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Category Hero Banner */}
      <div className="bg-gradient-to-r from-sage-dark to-sage text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-lg">
        <div className="max-w-3xl space-y-4 relative z-10">
          <div className="inline-flex items-center space-x-1.5 bg-sage-light text-sage-dark text-xs font-bold px-3 py-1 rounded-full border border-white/20">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Health Category Topic</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            {category.name}
          </h1>

          <p className="text-base sm:text-lg text-sage-light leading-relaxed">
            {category.description}
          </p>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {category.keyBenefits.map((ben, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-2 text-xs font-semibold bg-white/10 backdrop-blur-xs p-2.5 rounded-xl border border-white/10"
              >
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                <span>{ben}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category Articles */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-stone-200 pb-3">
          <h2 className="text-2xl font-serif font-bold text-slate-900">
            {category.name} Guides & Recipes ({filteredPosts.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => {
            const isSaved = savedPostIds.includes(post.id);

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
                  <div className="absolute top-3 left-3 bg-sage text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                    {post.category}
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSavePost(post.id);
                    }}
                    className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
                      isSaved ? 'bg-gold text-slate-900' : 'bg-white/80 hover:bg-white text-slate-600'
                    }`}
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 text-xs text-slate-400 font-mono">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3
                      onClick={() => handlePostClick(post)}
                      className="text-xl font-serif font-bold text-slate-900 group-hover:text-sage transition-colors cursor-pointer leading-snug line-clamp-2"
                    >
                      {post.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-700">By {post.author.name}</span>
                    <button
                      onClick={() => handlePostClick(post)}
                      className="text-xs font-bold text-sage hover:text-sage-dark flex items-center space-x-1"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Recommended Products for this Topic */}
      <section className="bg-stone-50 border border-stone-200 rounded-3xl p-8 space-y-6">
        <div className="flex items-center space-x-2">
          <ShoppingBag className="w-5 h-5 text-gold" />
          <h3 className="text-xl font-serif font-bold text-slate-900">
            Recommended Tools for {category.name}
          </h3>
        </div>

        <div className="space-y-4">
          {relatedProducts.map((prod) => (
            <AffiliateProductBox key={prod.id} product={prod} />
          ))}
        </div>
      </section>
    </div>
  );
};
