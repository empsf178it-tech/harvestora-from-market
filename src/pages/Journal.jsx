import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ChevronRight, Sprout } from 'lucide-react';
import { JOURNAL_ARTICLES } from '../data/journalData';
import { useApp } from '../context/AppContext';

const CATEGORIES = ['All', 'Farming', 'Produce', 'Farmers', 'Sustainability'];

export const Journal = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { openJournalArticle } = useApp();

  const filteredArticles = JOURNAL_ARTICLES.filter(
    (a) => activeCategory === 'All' || a.category.toLowerCase() === activeCategory.toLowerCase()
  );

  const featured = JOURNAL_ARTICLES[0];

  return (
    <div className="pt-28 pb-24 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4E5D36]/10 text-[#4E5D36] text-xs font-bold uppercase tracking-[0.2em] mb-4"
          >
            <Sprout className="w-3.5 h-3.5" />
            <span>HARVESTORA EDITORIAL</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif-display text-4xl sm:text-6xl text-[#1C160F]"
          >
            Stories from soil, food and farming.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 text-base mt-4 font-light leading-relaxed"
          >
            Deep-dives into South Indian farming rhythms, native grain nutrition, and water conservation practices.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar pb-4 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#1C160F] text-[#FAF7F2] shadow-md'
                    : 'bg-white text-stone-600 border border-[#EFEBE4] hover:bg-[#EFEBE4]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Featured Article Banner */}
        {activeCategory === 'All' && featured && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            onClick={() => openJournalArticle(featured)}
            className="bg-white rounded-3xl overflow-hidden border border-[#EFEBE4] hover:border-[#4E5D36]/40 shadow-xl hover:shadow-2xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 mb-16 cursor-pointer group card-shine"
          >
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto bg-stone-900 overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3.5 py-1.5 rounded-full bg-[#B85C38] text-white text-xs font-extrabold uppercase tracking-wider shadow-md">
                  FEATURED STORY
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6 bg-gradient-to-b from-white via-white to-[#FAF7F2]/60">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs text-stone-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#4E5D36]" />
                    {featured.date}
                  </span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>

                <h2 className="font-serif-display text-2xl sm:text-4xl text-[#1C160F] group-hover:text-[#4E5D36] transition-colors leading-tight">
                  {featured.title}
                </h2>

                <p className="text-stone-600 text-sm leading-relaxed font-light">
                  {featured.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EFEBE4] flex items-center text-xs font-bold uppercase tracking-wider text-[#4E5D36] group-hover:text-[#B85C38] transition-colors">
                <span>Read Full Article</span>
                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1.5" />
              </div>
            </div>
          </motion.div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.015 }}
              onClick={() => openJournalArticle(article)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-[#EFEBE4] hover:border-[#4E5D36]/40 shadow-sm hover:shadow-2xl hover:shadow-[#4E5D36]/10 transition-all duration-400 flex flex-col justify-between card-shine relative"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-50 group-hover:opacity-75 transition-opacity" />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 rounded-full bg-[#1C160F]/85 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider shadow-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-stone-500 font-medium">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#4E5D36]" />
                      {article.date}
                    </span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif-display text-xl text-[#1C160F] group-hover:text-[#4E5D36] transition-colors leading-snug font-bold">
                    {article.title}
                  </h3>

                  <p className="text-stone-600 text-xs line-clamp-3 leading-relaxed font-light">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center text-xs font-bold uppercase tracking-wider text-[#4E5D36] group-hover:text-[#B85C38] transition-colors">
                <span>Read Story</span>
                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1.5" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};
