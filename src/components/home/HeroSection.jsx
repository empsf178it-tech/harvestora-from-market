import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronDown, Sprout, ShieldCheck, Search, Truck, Clock, Sparkles } from 'lucide-react';
import { IMAGES } from '../../data/imagesData';
import { useApp } from '../../context/AppContext';

export const HeroSection = () => {
  const { setSearchedBatch, showToast } = useApp();
  const [heroInput, setHeroInput] = useState('');
  const navigate = useNavigate();

  const handleHeroSearch = (e) => {
    e.preventDefault();
    if (heroInput.trim()) {
      setSearchedBatch(heroInput.trim().toUpperCase());
      showToast(`Searching batch code: ${heroInput.trim()}`);
      navigate('/traceability');
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#1C160F]">
      {/* Hero Background Image */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <img
          src={IMAGES.hero}
          alt="South Indian Organic Farm Morning Harvest"
          className="w-full h-full object-cover object-center brightness-[0.65] contrast-[1.1]"
        />
        {/* Cinematic Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C160F] via-black/40 to-black/60" />
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-20 flex flex-col items-center">
        
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-200 text-xs font-extrabold uppercase tracking-[0.2em] mb-6 shadow-xl"
        >
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>DIRECT FARM-TO-TABLE MARKETPLACE</span>
        </motion.div>

        {/* Heading */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FAF7F2] font-normal tracking-tight leading-[1.05]"
          >
            Direct From Farm <br className="hidden sm:inline" />
            <span className="italic font-serif-display text-amber-300">To Your Doorstep in 24 Hours.</span>
          </motion.h1>
        </div>

        {/* Supporting Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-stone-200 text-base sm:text-lg md:text-xl max-w-3xl font-light leading-relaxed mb-8 text-shadow-sm"
        >
          Buy 100% organic, pesticide-free fresh vegetables, tree-ripened fruits, and heritage rice straight from local South Indian farmers with full lab traceability.
        </motion.p>

        {/* Interactive Batch Code Tracer Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-full max-w-xl mx-auto mb-8"
        >
          <form onSubmit={handleHeroSearch} className="relative flex items-center">
            <Search className="w-5 h-5 absolute left-4 text-gray-400" />
            <input
              type="text"
              value={heroInput}
              onChange={(e) => setHeroInput(e.target.value)}
              placeholder="Enter Batch Code (e.g. #BIO-HARVEST-8942)"
              className="w-full pl-12 pr-36 py-4 bg-white/95 backdrop-blur-md rounded-full text-sm font-mono text-[#1C160F] border-2 border-amber-300/60 focus:outline-none focus:border-[#4E5D36] shadow-2xl"
            />
            <button
              type="submit"
              className="absolute right-2 px-5 py-2.5 bg-[#4E5D36] hover:bg-[#3B4729] text-white text-xs font-bold rounded-full transition shadow-md flex items-center gap-1"
            >
              Trace Batch
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
          <div className="text-[11px] text-amber-200/80 mt-2 font-medium">
            💡 Sample code: <button onClick={() => { setSearchedBatch("#BIO-HARVEST-8942"); navigate('/traceability'); }} className="underline font-mono">#BIO-HARVEST-8942</button>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full justify-center mb-12"
        >
          <Link
            to="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#4E5D36] text-white font-bold text-xs uppercase tracking-widest hover:bg-[#D4A359] hover:text-[#1C160F] transition-all duration-300 shadow-xl group"
          >
            <span>Shop Fresh Produce</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <Link
            to="/subscriptions"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#1C160F] transition-all duration-300 shadow-md"
          >
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>Custom Harvest Boxes</span>
          </Link>
        </motion.div>

        {/* Live Trust Metrics Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl border-t border-white/15 pt-8 text-white/90 text-xs"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-amber-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-bold text-sm text-white">0.00 ppm Residue</div>
              <div className="text-stone-300">100% Pesticide Free</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-emerald-400">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-bold text-sm text-white">24-Hour Express</div>
              <div className="text-stone-300">Harvest to Doorstep</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-amber-300">
              <Truck className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="font-bold text-sm text-white">500+ Local Farmers</div>
              <div className="text-stone-300">Direct Fair-Trade Share</div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/60"
      >
        <span className="text-[9px] uppercase tracking-[0.2em] font-semibold">Explore Organic Marketplace</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ChevronDown className="w-4 h-4 text-amber-300" />
        </motion.div>
      </motion.div>
    </section>
  );
};
