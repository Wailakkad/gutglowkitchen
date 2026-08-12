'use client';

import React, { useState } from 'react';
import { BlogPost } from '../types';
import { Bookmark, Share2, ShieldCheck } from 'lucide-react';
import { useSavedPosts } from '../providers/SavedPostsProvider';
import { SeoInspectorModal } from './SeoInspectorModal';

interface Props {
  post: BlogPost;
}

export const PostMetaActions: React.FC<Props> = ({ post }) => {
  const { savedPostIds, toggleSavePost } = useSavedPosts();
  const [isSeoInspectorOpen, setIsSeoInspectorOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const isSaved = savedPostIds.includes(post.id);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <>
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

      <SeoInspectorModal
        post={post}
        isOpen={isSeoInspectorOpen}
        onClose={() => setIsSeoInspectorOpen(false)}
      />
    </>
  );
};