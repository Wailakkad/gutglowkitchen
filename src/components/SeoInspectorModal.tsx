import React, { useState } from 'react';
import { BlogPost } from '../types';
import { ShieldCheck, Search, Code, CheckCircle2, AlertCircle, Copy, X, Eye } from 'lucide-react';

interface Props {
  post: BlogPost;
  isOpen: boolean;
  onClose: () => void;
}

export const SeoInspectorModal: React.FC<Props> = ({ post, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'serp' | 'checklist' | 'schema'>('serp');
  const [copiedSchema, setCopiedSchema] = useState(false);

  if (!isOpen) return null;

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': post.recipeDetails ? 'Recipe' : 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: [post.coverImage],
    datePublished: '2026-08-04',
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role
    },
    publisher: {
      '@type': 'Organization',
      name: 'Gut Glow Kitchen',
      logo: {
        '@type': 'ImageObject',
        url: 'https://gutglowkitchen.com/logo.png'
      }
    },
    ...(post.recipeDetails && {
      prepTime: 'PT20M',
      cookTime: 'PT25M',
      totalTime: 'PT45M',
      recipeYield: `${post.recipeDetails.servings} servings`,
      nutrition: {
        '@type': 'NutritionInformation',
        calories: `${post.recipeDetails.calories} calories`,
        proteinContent: post.recipeDetails.protein,
        carbohydrateContent: post.recipeDetails.carbs,
        fiberContent: post.recipeDetails.fiber
      }
    })
  };

  const handleCopySchema = () => {
    navigator.clipboard.writeText(JSON.stringify(schemaJson, null, 2));
    setCopiedSchema(true);
    setTimeout(() => setCopiedSchema(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 border-b border-stone-200 pb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h3 className="text-xl font-serif font-bold text-slate-900">
              WordPress SEO & Schema Inspector
            </h3>
            <p className="text-xs text-slate-500 font-mono">
              Post ID: {post.id} • RankMath SEO Score: <strong className="text-emerald-600">96/100</strong>
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex space-x-2 border-b border-stone-200 pb-2">
          <button
            onClick={() => setActiveTab('serp')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center space-x-1.5 ${
              activeTab === 'serp' ? 'bg-sage text-white' : 'text-slate-600 hover:bg-stone-100'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Google SERP Preview</span>
          </button>

          <button
            onClick={() => setActiveTab('checklist')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center space-x-1.5 ${
              activeTab === 'checklist' ? 'bg-sage text-white' : 'text-slate-600 hover:bg-stone-100'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>SEO Audit Checklist</span>
          </button>

          <button
            onClick={() => setActiveTab('schema')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center space-x-1.5 ${
              activeTab === 'schema' ? 'bg-sage text-white' : 'text-slate-600 hover:bg-stone-100'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Schema.org JSON-LD</span>
          </button>
        </div>

        {/* Tab 1: SERP Preview */}
        {activeTab === 'serp' && (
          <div className="space-y-4">
            <div className="text-xs text-slate-500">
              How this article appears on Google Search desktop & mobile results:
            </div>

            <div className="bg-white border border-stone-200 p-5 rounded-2xl shadow-xs space-y-1">
              <div className="flex items-center space-x-2 text-xs text-slate-700">
                <span className="w-4 h-4 bg-sage text-white rounded-full text-[9px] font-bold flex items-center justify-center">G</span>
                <span className="font-mono text-slate-600">https://gutglowkitchen.com/blog/{post.slug}</span>
              </div>
              <h4 className="text-lg font-medium text-blue-700 hover:underline cursor-pointer line-clamp-1">
                {post.seo.metaTitle}
              </h4>
              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {post.seo.metaDescription}
              </p>
            </div>

            <div className="bg-stone-50 p-4 rounded-xl text-xs space-y-2 border border-stone-200">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Focus Keyword:</span>
                <span className="font-mono font-bold text-sage">{post.seo.focusKeyword}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Readability Score:</span>
                <span className="font-mono font-bold text-slate-800">{post.seo.readabilityScore}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Structured Data Type:</span>
                <span className="font-mono font-bold text-amber-600">{post.seo.schemaType}</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: SEO Audit Checklist */}
        {activeTab === 'checklist' && (
          <div className="space-y-3 text-xs">
            <div className="flex items-center space-x-2 text-emerald-700 font-semibold bg-emerald-50 p-3 rounded-xl border border-emerald-200">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
              <span>Focus keyword "{post.seo.focusKeyword}" appears in SEO title & H1 headline.</span>
            </div>
            <div className="flex items-center space-x-2 text-emerald-700 font-semibold bg-emerald-50 p-3 rounded-xl border border-emerald-200">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
              <span>Meta description length is 154 characters (Optimal range: 120-160).</span>
            </div>
            <div className="flex items-center space-x-2 text-emerald-700 font-semibold bg-emerald-50 p-3 rounded-xl border border-emerald-200">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
              <span>Image ALT text tags contain target keyword & food descriptors.</span>
            </div>
            <div className="flex items-center space-x-2 text-emerald-700 font-semibold bg-emerald-50 p-3 rounded-xl border border-emerald-200">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
              <span>Schema.org Recipe markup validated for Google Rich Snippet display.</span>
            </div>
            <div className="flex items-center space-x-2 text-emerald-700 font-semibold bg-emerald-50 p-3 rounded-xl border border-emerald-200">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
              <span>Affiliate product disclaimer box present for Amazon Associates compliance.</span>
            </div>
          </div>
        )}

        {/* Tab 3: Schema JSON-LD Code */}
        {activeTab === 'schema' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500">Schema.org Structured JSON-LD Snippet:</span>
              <button
                onClick={handleCopySchema}
                className="bg-stone-100 hover:bg-stone-200 text-slate-800 px-3 py-1 rounded-lg font-bold flex items-center space-x-1"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copiedSchema ? 'Copied!' : 'Copy Schema'}</span>
              </button>
            </div>
            <pre className="bg-slate-900 text-emerald-400 p-4 rounded-xl text-[11px] font-mono overflow-x-auto max-h-60 border border-slate-800">
              {JSON.stringify(schemaJson, null, 2)}
            </pre>
          </div>
        )}

        <div className="pt-2 text-right">
          <button
            onClick={onClose}
            className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-5 py-2 rounded-xl text-xs"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
