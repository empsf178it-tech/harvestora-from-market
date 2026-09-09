import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Filter, Sparkles, Sprout } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { ProductCard } from '../components/common/ProductCard';
import { PRODUCTS } from '../data/productsData';

const CATEGORIES = ['All', 'Rice', 'Millets', 'Pulses', 'Vegetables', 'Fruits'];

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'All';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory =
        activeCategory === 'All' || p.category.toLowerCase() === activeCategory.toLowerCase();
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.origin.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    if (cat === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ cat });
    }
  };

  return (
    <div className="pt-28 pb-24 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4E5D36]/10 text-[#4E5D36] text-xs font-bold uppercase tracking-[0.2em] mb-4"
          >
            <Sprout className="w-3.5 h-3.5" />
            <span>HARVESTORA CATALOG</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif-display text-4xl sm:text-6xl text-[#1C160F]"
          >
            Explore the harvest.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 text-base mt-4 font-light"
          >
            Carefully selected rice, millets, pulses, fruits, and vegetables harvested from authentic South Indian agricultural regions.
          </motion.p>
        </div>

        {/* Filters & Search Control Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-[#EFEBE4] shadow-sm mb-12 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory.toLowerCase() === cat.toLowerCase();
                return (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-[#1C160F] text-[#FAF7F2] shadow-md'
                        : 'bg-[#FAF7F2] text-stone-600 hover:bg-[#EFEBE4]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input Bar */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search rice, millets, region..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#FAF7F2] border border-[#EFEBE4] text-xs text-[#1C160F] placeholder-stone-400 focus:outline-none focus:border-[#4E5D36]"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-stone-500 pt-3 border-t border-[#EFEBE4]">
            <span>Showing <strong>{filteredProducts.length}</strong> harvest produce items</span>
            <span className="text-[11px] italic">100% Sourced from South Indian Agricultural Farms</span>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-[#EFEBE4]">
            <Sparkles className="w-10 h-10 text-stone-300 mx-auto mb-3" />
            <h3 className="font-serif-display text-xl text-[#1C160F]">No produce matches your search</h3>
            <p className="text-stone-500 text-xs mt-1">Try selecting another category or clear your search term.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-4 px-6 py-2 rounded-full bg-[#4E5D36] text-white text-xs font-bold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Disclaimer Notice */}
        <div className="mt-16 text-center text-xs text-stone-500 max-w-2xl mx-auto">
          * Produce availability varies by harvest season. Descriptions highlight traditional agricultural sourcing methods and natural processing without synthetic additives.
        </div>

      </div>
    </div>
  );
};
