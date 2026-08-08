import React, { useState, useEffect } from 'react';
import { PageType, CategorySlug, BlogPost } from './types';
import { BLOG_POSTS } from './data/blogData';
import { WordPressAdminBar } from './components/WordPressAdminBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { CategoryPage } from './pages/CategoryPage';
import { SinglePostPage } from './pages/SinglePostPage';
import { ProductsPage } from './pages/ProductsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPages } from './pages/LegalPages';
import { SeoInspectorModal } from './components/SeoInspectorModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedCategory, setSelectedCategory] = useState<CategorySlug | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost>(BLOG_POSTS[0]);
  const [savedPostIds, setSavedPostIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('gutglow_saved_posts');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isSeoInspectorOpen, setIsSeoInspectorOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('gutglow_saved_posts', JSON.stringify(savedPostIds));
    } catch (e) {
      // Ignore fallback
    }
  }, [savedPostIds]);

  const toggleSavePost = (id: string) => {
    setSavedPostIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream text-slate-800 font-sans antialiased selection:bg-sage/20 selection:text-sage-dark">
      {/* Optional WordPress Admin Bar Simulation */}
      <WordPressAdminBar
        isAdminMode={isAdminMode}
        setIsAdminMode={setIsAdminMode}
        onToggleSeoModal={() => setIsSeoInspectorOpen(true)}
      />

      {/* Main Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        savedPostIds={savedPostIds}
        onSearchQuery={(q) => setSearchQuery(q)}
        searchQuery={searchQuery}
      />

      {/* Main Page Render */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            posts={BLOG_POSTS}
            setCurrentPage={setCurrentPage}
            setSelectedCategory={setSelectedCategory}
            setSelectedPost={setSelectedPost}
            savedPostIds={savedPostIds}
            toggleSavePost={toggleSavePost}
          />
        )}

        {currentPage === 'blog' && (
          <BlogPage
            posts={BLOG_POSTS}
            setCurrentPage={setCurrentPage}
            setSelectedPost={setSelectedPost}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            savedPostIds={savedPostIds}
            toggleSavePost={toggleSavePost}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        )}

        {currentPage === 'category' && selectedCategory && (
          <CategoryPage
            categorySlug={selectedCategory}
            posts={BLOG_POSTS}
            setCurrentPage={setCurrentPage}
            setSelectedPost={setSelectedPost}
            savedPostIds={savedPostIds}
            toggleSavePost={toggleSavePost}
          />
        )}

        {currentPage === 'post' && (
          <SinglePostPage
            post={selectedPost}
            allPosts={BLOG_POSTS}
            setCurrentPage={setCurrentPage}
            setSelectedPost={setSelectedPost}
            savedPostIds={savedPostIds}
            toggleSavePost={toggleSavePost}
          />
        )}

        {currentPage === 'products' && <ProductsPage />}

        {currentPage === 'about' && <AboutPage />}

        {currentPage === 'contact' && <ContactPage />}

        {(currentPage === 'privacy' || currentPage === 'affiliate-disclosure' || currentPage === 'terms') && (
          <LegalPages page={currentPage} />
        )}
      </main>

      {/* Main Footer */}
      <Footer
        setCurrentPage={setCurrentPage}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Global SEO Inspector Modal */}
      <SeoInspectorModal
        post={selectedPost}
        isOpen={isSeoInspectorOpen}
        onClose={() => setIsSeoInspectorOpen(false)}
      />
    </div>
  );
}
