import React, { useState } from 'react';
import { PageType, CategorySlug } from '../types';
import { CATEGORIES } from '../data/categoryData';
import { downloadFreeGuide } from '../utils/downloadGuide';
import {
  Sparkles,
  Search,
  Bookmark,
  Menu,
  X,
  ChevronDown,
  ShoppingBag,
  Heart,
  BookOpen,
  Mail,
  ShieldCheck,
  Zap,
  CheckCircle2
} from 'lucide-react';

interface Props {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
  selectedCategory: CategorySlug | null;
  setSelectedCategory: (cat: CategorySlug | null) => void;
  savedPostIds: string[];
  onSearchQuery: (query: string) => void;
  searchQuery: string;
}

export const Header: React.FC<Props> = ({
  currentPage,
  setCurrentPage,
  selectedCategory,
  setSelectedCategory,
  savedPostIds,
  onSearchQuery,
  searchQuery
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleCategoryClick = (catSlug: CategorySlug) => {
    setSelectedCategory(catSlug);
    setCurrentPage('category');
    setIsCategoryDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (page: PageType) => {
    setCurrentPage(page);
    if (page !== 'category') {
      setSelectedCategory(null);
    }
    setIsMobileMenuOpen(false);
    setIsCategoryDropdownOpen(false);
  };

  return (
    <header className="w-full bg-white border-b border-[#4A7C59]/10 sticky top-0 z-40 shadow-2xs">
      {/* Top Announcement Bar */}
      <div className="bg-[#4A7C59] text-white text-xs py-2 px-4 text-center font-medium flex items-center justify-center space-x-2">
        <Sparkles className="w-3.5 h-3.5 text-[#F4B942] shrink-0" />
        <span>
          <strong>FREE GUIDE:</strong> Download the 7-Day Anti-Inflammatory Meal Prep & Grocery Protocol
        </span>
        <button
          onClick={downloadFreeGuide}
          className="ml-2 bg-[#F4B942] hover:bg-[#E2A732] text-[#4A7C59] font-bold px-2.5 py-0.5 rounded text-[11px] transition-all shadow-2xs"
        >
          Get PDF Guide
        </button>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div
            onClick={() => handleNavClick('home')}
            className="cursor-pointer flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 bg-[#4A7C59] rounded-full flex items-center justify-center shadow-2xs group-hover:bg-[#3A6346] transition-all">
              <span className="text-white font-serif text-xl font-bold">G</span>
            </div>
            <div>
              <span className="text-2xl font-serif font-bold text-[#4A7C59] tracking-tight block group-hover:text-[#3A6346] transition-colors">
                Gut Glow Kitchen
              </span>
              <span className="text-[10px] font-sans text-[#4A7C59]/70 uppercase tracking-widest block font-semibold -mt-0.5">
                Wellness & Nutrition
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-medium text-[#4A7C59]/80 uppercase tracking-widest">
            <button
              onClick={() => handleNavClick('home')}
              className={`hover:text-[#4A7C59] transition-colors py-2 border-b-2 ${
                currentPage === 'home' ? 'text-[#4A7C59] font-bold border-[#F4B942]' : 'border-transparent'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('blog')}
              className={`hover:text-[#4A7C59] transition-colors py-2 border-b-2 ${
                currentPage === 'blog' ? 'text-[#4A7C59] font-bold border-[#F4B942]' : 'border-transparent'
              }`}
            >
              Blog
            </button>

            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                onMouseEnter={() => setIsCategoryDropdownOpen(true)}
                className={`hover:text-[#4A7C59] transition-colors py-2 flex items-center space-x-1 border-b-2 ${
                  currentPage === 'category' ? 'text-[#4A7C59] font-bold border-[#F4B942]' : 'border-transparent'
                }`}
              >
                <span>Categories</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isCategoryDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isCategoryDropdownOpen && (
                <div
                  onMouseLeave={() => setIsCategoryDropdownOpen(false)}
                  className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-[#4A7C59]/10 py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150 normal-case tracking-normal"
                >
                  <div className="text-[11px] font-bold text-[#8B6E2C] uppercase tracking-wider px-3 py-1 mb-1">
                    Core Health Topics
                  </div>
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryClick(cat.slug)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg hover:bg-[#F4F7F2] transition-colors flex items-start space-x-3 group ${
                        selectedCategory === cat.slug ? 'bg-[#F4F7F2] text-[#4A7C59] font-semibold' : 'text-[#333333]'
                      }`}
                    >
                      <div className="w-2 h-2 rounded-full bg-[#F4B942] mt-2 group-hover:scale-125 transition-transform" />
                      <div>
                        <div className="font-semibold text-sm group-hover:text-[#4A7C59] transition-colors">{cat.name}</div>
                        <div className="text-xs text-[#777777] line-clamp-1">{cat.tagline}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Recommended Products (Affiliate Hub) */}
            <button
              onClick={() => handleNavClick('products')}
              className={`hover:text-[#4A7C59] transition-colors py-2 flex items-center space-x-1 border-b-2 ${
                currentPage === 'products' ? 'text-[#4A7C59] font-bold border-[#F4B942]' : 'border-transparent'
              }`}
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#F4B942]" />
              <span>Products</span>
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`hover:text-[#4A7C59] transition-colors py-2 border-b-2 ${
                currentPage === 'about' ? 'text-[#4A7C59] font-bold border-[#F4B942]' : 'border-transparent'
              }`}
            >
              About
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`hover:text-[#4A7C59] transition-colors py-2 border-b-2 ${
                currentPage === 'contact' ? 'text-[#4A7C59] font-bold border-[#F4B942]' : 'border-transparent'
              }`}
            >
              Contact
            </button>
          </nav>

          {/* Right Utilities */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-slate-600 hover:text-sage hover:bg-slate-100 rounded-full transition-colors"
              title="Search Articles & Recipes"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Saved Bookmarks Counter */}
            <button
              onClick={() => handleNavClick('blog')}
              className="p-2 text-slate-600 hover:text-sage hover:bg-slate-100 rounded-full transition-colors relative"
              title="Saved Articles"
            >
              <Bookmark className="w-5 h-5" />
              {savedPostIds.length > 0 && (
                <span className="absolute top-1 right-1 bg-gold text-slate-900 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {savedPostIds.length}
                </span>
              )}
            </button>

            {/* Free Guide Call To Action */}
            <button
              onClick={downloadFreeGuide}
              className="hidden sm:flex items-center space-x-1.5 bg-sage hover:bg-sage-dark text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-xs"
            >
              <Mail className="w-4 h-4 text-gold" />
              <span>Get Free Prep Plan</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-sage rounded-lg focus:outline-hidden"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Modal Drawer */}
        {isSearchOpen && (
          <div className="pb-4 pt-2 px-2 animate-in fade-in duration-150 border-t border-slate-100">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  onSearchQuery(e.target.value);
                  if (currentPage !== 'blog') setCurrentPage('blog');
                }}
                placeholder="Search anti-inflammatory recipes, gut health guides, blood sugar hacks..."
                className="w-full pl-11 pr-10 py-3 bg-stone-50 border border-stone-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sage focus:bg-white text-sm transition-all"
                autoFocus
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
              {searchQuery && (
                <button
                  onClick={() => onSearchQuery('')}
                  className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600 text-xs bg-slate-200 rounded-full w-5 h-5 flex items-center justify-center"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200 px-4 pt-4 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="space-y-1 text-slate-800 font-medium">
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-base ${
                currentPage === 'home' ? 'bg-sage-light text-sage font-bold' : 'hover:bg-slate-50'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleNavClick('blog')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-base ${
                currentPage === 'blog' ? 'bg-sage-light text-sage font-bold' : 'hover:bg-slate-50'
              }`}
            >
              Blog & Recipes
            </button>

            {/* Mobile Categories Accordion */}
            <div className="py-2 px-3 border-y border-stone-100 space-y-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Categories
              </div>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.slug)}
                  className={`w-full text-left py-2 px-2 rounded-md text-sm flex items-center justify-between ${
                    selectedCategory === cat.slug ? 'text-sage font-bold bg-sage-50' : 'text-slate-700 hover:text-sage'
                  }`}
                >
                  <span>{cat.name}</span>
                  <span className="text-xs text-slate-400 font-mono">({cat.postsCount})</span>
                </button>
              ))}
            </div>

            <button
              onClick={() => handleNavClick('products')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-base flex items-center space-x-2 ${
                currentPage === 'products' ? 'bg-sage-light text-sage font-bold' : 'hover:bg-slate-50'
              }`}
            >
              <ShoppingBag className="w-5 h-5 text-gold" />
              <span>Recommended Products</span>
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-base ${
                currentPage === 'about' ? 'bg-sage-light text-sage font-bold' : 'hover:bg-slate-50'
              }`}
            >
              About Us
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-base ${
                currentPage === 'contact' ? 'bg-sage-light text-sage font-bold' : 'hover:bg-slate-50'
              }`}
            >
              Contact
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                downloadFreeGuide();
              }}
              className="w-full bg-sage text-white font-bold py-3 rounded-xl flex items-center justify-center space-x-2 shadow-xs"
            >
              <Mail className="w-5 h-5 text-gold" />
              <span>Get Free 7-Day Meal Plan PDF</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
