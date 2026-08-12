'use client';

import React, { useState } from 'react';
import { CommentItem } from '../types';
import { MessageSquare, ThumbsUp, Send } from 'lucide-react';

interface Props {
  postId: string;
}

export const CommentSection: React.FC<Props> = ({ postId }) => {
  const [comments, setComments] = useState<CommentItem[]>([
    {
      id: 'c1',
      postId,
      authorName: 'Jessica Miller',
      date: 'August 5, 2026',
      text: 'I prepped the turmeric salmon bowls on Sunday and my bloating completely vanished by Tuesday! Thank you for the black pepper tip!',
      likes: 12
    },
    {
      id: 'c2',
      postId,
      authorName: 'Dr. Rachel Torres',
      date: 'August 6, 2026',
      text: 'As an integrative medicine practitioner, I love how clearly you explain butyrate SCFA production and enterocyte lining repair.',
      likes: 8
    }
  ]);

  const [newCommentText, setNewCommentText] = useState('');
  const [newCommentName, setNewCommentName] = useState('');

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText || !newCommentName) return;

    const newC: CommentItem = {
      id: `c-${Date.now()}`,
      postId,
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

  return (
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
  );
};