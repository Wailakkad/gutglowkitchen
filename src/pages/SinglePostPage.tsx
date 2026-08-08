import React, { useState } from 'react';
import { BlogPost, PageType, CommentItem } from '../types';
import { PRODUCTS } from '../data/productData';
import { RecipeCard } from '../components/RecipeCard';
import { AffiliateProductBox } from '../components/AffiliateProductBox';
import { NewsletterOptIn } from '../components/NewsletterOptIn';
import { SeoInspectorModal } from '../components/SeoInspectorModal';
import {
  Clock,
  Bookmark,
  Share2,
  ThumbsUp,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Send
} from 'lucide-react';

interface Props {
  post: BlogPost;
  allPosts: BlogPost[];
  setCurrentPage: (page: PageType) => void;
  setSelectedPost: (post: BlogPost) => void;
  savedPostIds: string[];
  toggleSavePost: (id: string) => void;
}

export const SinglePostPage: React.FC<Props> = ({
  post,
  allPosts,
  setCurrentPage,
  setSelectedPost,
  savedPostIds,
  toggleSavePost
}) => {
  const [isSeoInspectorOpen, setIsSeoInspectorOpen] = useState(false);
  const [comments, setComments] = useState<CommentItem[]>([
    {
      id: 'c1',
      postId: post.id,
      authorName: 'Jessica Miller',
      date: 'August 5, 2026',
      text: 'I prepped the turmeric salmon bowls on Sunday and my bloating completely vanished by Tuesday! Thank you for the black pepper tip!',
      likes: 12
    },
    {
      id: 'c2',
      postId: post.id,
      authorName: 'Dr. Rachel Torres',
      date: 'August 6, 2026',
      text: 'As an integrative medicine practitioner, I love how clearly you explain butyrate SCFA production and enterocyte lining repair.',
      likes: 8
    }
  ]);

  const [newCommentText, setNewCommentText] = useState('');
  const [newCommentName, setNewCommentName] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  const isSaved = savedPostIds.includes(post.id);

  // Find linked affiliate products
  const affiliateProducts = PRODUCTS.filter((p) => post.affiliateProductIds?.includes(p.id));

  // Find related posts in same category
  const relatedPosts = allPosts.filter((p) => p.id !== post.id).slice(0, 2);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText || !newCommentName) return;

    const newC: CommentItem = {
      id: `c-${Date.now()}`,
      postId: post.id,
      authorName: newCommentName,
      date: 'Just now',
      text: newCommentText,
      likes: 0
    };

    setComments([newC, ...comments]);
    setNewCommentText('');
    setNewCommentName('');
  };

  const handleLikeComment = (id: string) => {
    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, likes: c.likes + 1 } : c))
    );
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <article className="pb-16 pt-8 space-y-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Back Link & Meta Tools Bar */}
        <div className="flex items-center justify-between mb-6 text-xs">
          <button
            onClick={() => {
              setCurrentPage('blog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-slate-600 hover:text-sage font-bold flex items-center space-x-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </button>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setIsSeoInspectorOpen(true)}
              className="bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-bold px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>SEO & Schema Inspector</span>
            </button>

            <button
              onClick={() => toggleSavePost(post.id)}
              className={`p-2 rounded-lg font-bold transition-colors flex items-center space-x-1 ${
                isSaved ? 'bg-gold text-slate-900' : 'bg-stone-100 text-slate-600 hover:bg-stone-200'
              }`}
            >
              <Bookmark className="w-4 h-4" />
              <span>{isSaved ? 'Saved' : 'Save'}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-2 bg-stone-100 hover:bg-stone-200 text-slate-700 rounded-lg flex items-center space-x-1"
              title="Share Article"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">{copiedLink ? 'Link Copied!' : 'Share'}</span>
            </button>
          </div>
        </div>

        {/* Post Category & Title Header */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-3">
            <span className="bg-sage text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-[1.15]">
            {post.title}
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed font-serif italic">
            {post.excerpt}
          </p>

          {/* Author Badge */}
          <div className="pt-4 border-y border-stone-200 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-sage"
              />
              <div>
                <div className="font-bold text-slate-900 text-sm flex items-center space-x-1.5">
                  <span>{post.author.name}</span>
                  <CheckCircle2 className="w-4 h-4 text-sage" />
                </div>
                <div className="text-xs text-slate-500 font-medium">{post.author.role}</div>
              </div>
            </div>

            <div className="text-right text-xs text-slate-400 font-mono">
              <div className="flex items-center space-x-1 justify-end">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden shadow-md mb-10">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-[420px] object-cover"
          />
        </div>

        {/* Table of Contents Jump Box */}
        {post.tableOfContents && (
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 mb-10">
            <h4 className="text-sm font-bold uppercase text-sage-dark tracking-wider mb-3 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-gold" />
              <span>Table of Contents</span>
            </h4>
            <ul className="space-y-2 text-sm text-slate-700 font-medium">
              {post.tableOfContents.map((toc) => (
                <li key={toc.id}>
                  <a
                    href={`#${toc.id}`}
                    className="hover:text-sage hover:underline transition-colors block"
                  >
                    {toc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Main Article Rich Content */}
        <div
          className="prose prose-slate max-w-none mb-12 text-slate-800 leading-relaxed font-sans"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Interactive Recipe Component (if post contains recipe details) */}
        {post.recipeDetails && (
          <div className="my-10">
            <RecipeCard recipe={post.recipeDetails} />
          </div>
        )}

        {/* Affiliate Product Section (if linked products exist) */}
        {affiliateProducts.length > 0 && (
          <div className="my-12 space-y-6">
            <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-5 flex items-center justify-between">
              <div>
                <h4 className="font-serif font-bold text-slate-900 text-lg">
                  Tools Used in This Recipe & Protocol
                </h4>
                <p className="text-xs text-slate-600">
                  Tested and approved by Gut Glow Kitchen clinical nutritionists.
                </p>
              </div>
              <span className="text-[11px] font-bold bg-amber-200 text-amber-900 px-2.5 py-1 rounded-md shrink-0">
                Amazon Affiliate
              </span>
            </div>

            {affiliateProducts.map((prod) => (
              <AffiliateProductBox key={prod.id} product={prod} />
            ))}
          </div>
        )}

        {/* Author Bio Card */}
        <div className="bg-sage-50 border border-sage-light rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 my-10">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-20 h-20 rounded-2xl object-cover border-2 border-sage shrink-0"
          />
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <h4 className="text-lg font-serif font-bold text-slate-900">
                Written by {post.author.name}
              </h4>
              <span className="text-xs font-mono bg-sage text-white px-2 py-0.5 rounded-md font-semibold">
                Verified Expert
              </span>
            </div>
            <p className="text-xs text-slate-500 font-mono">{post.author.credentials}</p>
            <p className="text-xs text-slate-700 leading-relaxed">{post.author.bio}</p>
          </div>
        </div>

        {/* Newsletter Call to Action */}
        <div className="my-10">
          <NewsletterOptIn isEmbedded={true} />
        </div>

        {/* Interactive Comment Section */}
        <section className="bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-8 my-10">
          <div className="flex items-center justify-between border-b border-stone-200 pb-4">
            <h3 className="text-2xl font-serif font-bold text-slate-900 flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-sage" />
              <span>Reader Community Discussion ({comments.length})</span>
            </h3>
          </div>

          {/* New Comment Form */}
          <form onSubmit={handleAddComment} className="bg-stone-50 p-5 rounded-2xl border border-stone-200 space-y-3">
            <div className="text-xs font-bold text-slate-800">Leave a Reply / Ask Nutritionist</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                value={newCommentName}
                onChange={(e) => setNewCommentName(e.target.value)}
                placeholder="Your Name (e.g., Sarah)"
                className="px-4 py-2 bg-white border border-stone-300 rounded-xl text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sage"
                required
              />
            </div>
            <textarea
              rows={3}
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
              placeholder="Share your experience with this meal prep or ask a gut health question..."
              className="w-full px-4 py-2 bg-white border border-stone-300 rounded-xl text-xs text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sage"
              required
            />
            <button
              type="submit"
              className="bg-sage hover:bg-sage-dark text-white font-bold px-5 py-2.5 rounded-xl text-xs flex items-center space-x-1.5 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Post Comment</span>
            </button>
          </form>

          {/* Existing Comments List */}
          <div className="space-y-4">
            {comments.map((c) => (
              <div key={c.id} className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-slate-900">{c.authorName}</span>
                  <span className="text-[11px] text-slate-400 font-mono">{c.date}</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">{c.text}</p>
                <div className="pt-1">
                  <button
                    onClick={() => handleLikeComment(c.id)}
                    className="text-[11px] text-slate-500 hover:text-sage font-bold flex items-center space-x-1"
                  >
                    <ThumbsUp className="w-3 h-3" />
                    <span>Helpful ({c.likes})</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="space-y-6 pt-6 border-t border-stone-200">
            <h3 className="text-2xl font-serif font-bold text-slate-900">
              Related Anti-Inflammatory Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => {
                    setSelectedPost(rel);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white border border-stone-200 rounded-2xl p-4 shadow-2xs hover:shadow-md transition-all cursor-pointer flex items-center space-x-4 group"
                >
                  <img
                    src={rel.coverImage}
                    alt={rel.title}
                    className="w-24 h-24 object-cover rounded-xl shrink-0"
                  />
                  <div>
                    <span className="text-[10px] font-bold text-sage uppercase">{rel.category}</span>
                    <h5 className="font-serif font-bold text-sm text-slate-900 group-hover:text-sage transition-colors line-clamp-2">
                      {rel.title}
                    </h5>
                    <span className="text-[11px] text-slate-400 mt-1 block">{rel.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>

      {/* SEO & Schema Inspector Modal */}
      <SeoInspectorModal
        post={post}
        isOpen={isSeoInspectorOpen}
        onClose={() => setIsSeoInspectorOpen(false)}
      />
    </article>
  );
};
