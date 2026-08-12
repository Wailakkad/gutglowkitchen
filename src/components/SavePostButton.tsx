'use client';

import React from 'react';
import { Bookmark } from 'lucide-react';
import { useSavedPosts } from '../providers/SavedPostsProvider';

interface Props {
  postId: string;
  mode?: 'card' | 'inline';
}

export const SavePostButton: React.FC<Props> = ({ postId, mode = 'card' }) => {
  const { savedPostIds, toggleSavePost } = useSavedPosts();
  const isSaved = savedPostIds.includes(postId);

  if (mode === 'inline') {
    return (
      <button
        onClick={() => toggleSavePost(postId)}
        className={`p-2 rounded-lg text-xs font-bold flex items-center space-x-1 ${
          isSaved ? 'bg-gold text-slate-900' : 'bg-stone-100 text-slate-600'
        }`}
      >
        <Bookmark className="w-3.5 h-3.5" />
        <span>{isSaved ? 'Saved' : 'Save'}</span>
      </button>
    );
  }

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        toggleSavePost(postId);
      }}
      className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${
        isSaved ? 'bg-[#F4B942] text-[#4A7C59]' : 'bg-white/80 hover:bg-white text-[#555555]'
      }`}
      title={isSaved ? 'Saved to Bookmarks' : 'Save Article'}
      aria-label={isSaved ? 'Remove from saved articles' : 'Save article'}
    >
      <Bookmark className="w-4 h-4" />
    </button>
  );
};