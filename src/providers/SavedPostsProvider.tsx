'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface SavedPostsContextValue {
  savedPostIds: string[];
  toggleSavePost: (id: string) => void;
}

const SavedPostsContext = createContext<SavedPostsContextValue>({
  savedPostIds: [],
  toggleSavePost: () => {}
});

export const useSavedPosts = () => useContext(SavedPostsContext);

export function SavedPostsProvider({ children }: { children: React.ReactNode }) {
  const [savedPostIds, setSavedPostIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('gutglow_saved_posts');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('gutglow_saved_posts', JSON.stringify(savedPostIds));
    } catch (e) {
      // Ignore storage errors (private mode, etc.)
    }
  }, [savedPostIds]);

  const toggleSavePost = (id: string) => {
    setSavedPostIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <SavedPostsContext.Provider value={{ savedPostIds, toggleSavePost }}>
      {children}
    </SavedPostsContext.Provider>
  );
}