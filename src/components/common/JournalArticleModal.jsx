import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, User, Share2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const JournalArticleModal = () => {
  const { activeJournalArticle, closeJournalArticle, showToast } = useApp();

  if (!activeJournalArticle) return null;

  const handleShare = () => {
    showToast('Article link copied to clipboard!');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-[#FAF7F2] rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl border border-[#EFEBE4] max-h-[90vh] flex flex-col"
        >
          {/* Header image */}
          <div className="relative h-64 sm:h-80 bg-[#1C160F] shrink-0">
            <img
              src={activeJournalArticle.image}
              alt={activeJournalArticle.title}
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C160F] via-transparent to-transparent" />
            
            <button
              onClick={closeJournalArticle}
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="px-3 py-1 rounded-full bg-[#B85C38] text-[10px] font-bold uppercase tracking-wider">
                {activeJournalArticle.category}
              </span>
              <h2 className="font-serif-display text-2xl sm:text-3xl text-white mt-2 leading-tight">
                {activeJournalArticle.title}
              </h2>
            </div>
          </div>

          {/* Article Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#EFEBE4] text-xs text-stone-500">
              <div className="flex items-center gap-4">
                <span className="inline-flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#4E5D36]" />
                  {activeJournalArticle.author}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#4E5D36]" />
                  {activeJournalArticle.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#4E5D36]" />
                  {activeJournalArticle.readTime}
                </span>
              </div>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1 text-[#4E5D36] font-bold hover:text-[#B85C38]"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </button>
            </div>

            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed text-sm sm:text-base space-y-4">
              <p className="font-medium text-stone-900 text-lg leading-relaxed italic border-l-2 border-[#D4A359] pl-4">
                {activeJournalArticle.excerpt}
              </p>

              <div className="whitespace-pre-line">
                {activeJournalArticle.content}
              </div>
            </div>

            <div className="pt-6 border-t border-[#EFEBE4] flex justify-end">
              <button
                onClick={closeJournalArticle}
                className="px-6 py-2.5 rounded-full bg-[#1C160F] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#4E5D36] transition-colors"
              >
                Done Reading
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
