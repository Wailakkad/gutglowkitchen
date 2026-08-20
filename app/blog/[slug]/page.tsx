import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/data/blogData';
import { PRODUCTS } from '@/data/productData';
import { RecipeCard } from '@/components/RecipeCard';
import { AffiliateProductBox } from '@/components/AffiliateProductBox';
import { NewsletterOptIn } from '@/components/NewsletterOptIn';
import { PostMetaActions } from '@/components/PostMetaActions';
import { CommentSection } from '@/components/CommentSection';
import { ArrowLeft, ArrowRight, Calendar, Sparkles } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: post.tags,
    pinterest: {
      richPin: true
    },
    openGraph: {
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      type: 'article',
      url: `/blog/${post.slug}`,
      images: [{ url: post.coverImage, alt: post.title }]
    },
    alternates: {
      canonical: `/blog/${post.slug}`
    }
  };
}

export default async function SinglePostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const affiliateProducts = PRODUCTS.filter((p) => post.affiliateProductIds?.includes(p.id));
  const hasProducts = affiliateProducts.length > 0;
  const relatedPosts = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 2);

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': post.recipeDetails ? 'Recipe' : 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: [post.coverImage],
    datePublished: '2026-08-04',
    publisher: {
      '@type': 'Organization',
      name: 'Gut Glow Kitchen'
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

  return (
    <article className="pb-16 pt-8 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      <div className={hasProducts ? 'max-w-6xl mx-auto px-4 sm:px-6' : 'max-w-4xl mx-auto px-4 sm:px-6'}>
        <div className={hasProducts ? 'grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10' : ''}>
          <div className="min-w-0">
        
        {/* Back Link & Meta Tools Bar */}
        <div className="flex items-center justify-between mb-6 text-xs">
          <Link
            href="/blog"
            className="text-slate-600 hover:text-sage font-bold flex items-center space-x-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>

          <PostMetaActions post={post} />
        </div>

        {/* Post Category & Title Header */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center space-x-3">
            <Link
              href={`/category/${post.categorySlug}`}
              className="bg-sage text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
            >
              {post.category}
            </Link>
            <span className="text-xs text-slate-400 font-mono">{post.readTime}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-[1.15]">
            {post.title}
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed font-serif italic">
            {post.excerpt}
          </p>

          {/* Meta Bar */}
          <div className="pt-4 border-y border-stone-200 flex items-center justify-between">
            <div className="text-xs text-slate-400 font-mono flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.date}</span>
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

        {/* Affiliate Product (mobile — sidebar is hidden below lg) */}
        {affiliateProducts.length > 0 && (
          <div className="lg:hidden my-10 space-y-4">
            {affiliateProducts.map((prod) => (
              <AffiliateProductBox key={prod.id} product={prod} compact />
            ))}
          </div>
        )}

        {/* Interactive Recipe Component (if post contains recipe details) */}
        {post.recipeDetails && (
          <div className="my-10">
            <RecipeCard recipe={post.recipeDetails} />
          </div>
        )}

        {/* Newsletter Call to Action */}
        <div className="my-10">
          <NewsletterOptIn isEmbedded={true} />
        </div>

        {/* Interactive Comment Section */}
        <CommentSection postId={post.id} />

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="space-y-6 pt-6 border-t border-stone-200">
            <h3 className="text-2xl font-serif font-bold text-slate-900">
              Related Anti-Inflammatory Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.slug}`}
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
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>
        </div>

        {/* Right Sidebar — Affiliate Product (desktop) */}
        {hasProducts && (
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-4">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-serif font-bold text-slate-900 text-sm leading-snug">
                    Tools We Use & Recommend
                  </h4>
                  <span className="text-[10px] font-bold bg-amber-200 text-amber-900 px-2 py-1 rounded-md shrink-0">
                    Amazon Affiliate
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 mt-1.5 leading-snug">
                  Tested and approved by Gut Glow Kitchen clinical nutritionists.
                </p>
              </div>
              {affiliateProducts.map((prod) => (
                <AffiliateProductBox key={prod.id} product={prod} compact />
              ))}
            </div>
          </aside>
        )}
      </div>
    </article>
  );
}