import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IMAGES } from '../../data/imagesData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const STAGES = [
  {
    step: '01',
    name: 'GROW',
    title: 'Cultivated in authentic South Indian soils.',
    description: 'Crops are nurtured using natural compost, rainwater harvesting, and traditional crop rotation across Tamil Nadu, Karnataka, AP, and Kerala.',
    image: IMAGES.journey.grow,
    tagline: 'Sunlight, Alluvial Soil & Native Seeds',
    highlights: ['Natural soil enrichment', 'Rain-fed crop practices', 'Zero forced artificial boosters']
  },
  {
    step: '02',
    name: 'HARVEST',
    title: 'Harvested at peak natural maturity.',
    description: 'Experienced farm hands harvest grains when golden crisp and fruits when tree-ripened, preserving vital nutrients and natural sweetness.',
    image: IMAGES.journey.harvest,
    tagline: 'Timely Hand-Harvesting',
    highlights: ['Tree-ripened orchard pick', 'Sun-dried paddy threshing', 'Early morning freshness']
  },
  {
    step: '03',
    name: 'SELECT',
    title: 'Optical sorting & hand inspection.',
    description: 'Each harvest batch passes multi-tier gravity separation and color sorting to eliminate chaff while retaining intact bran coatings.',
    image: IMAGES.journey.select,
    tagline: 'Precision Quality Assurance',
    highlights: ['Zero chemical polishing', 'Optical color sorting', 'Purity checks per lot']
  },
  {
    step: '04',
    name: 'DELIVER',
    title: 'Brought directly from farm to table.',
    description: 'Products are sealed in eco-friendly jute and paper packaging, arriving directly at your kitchen with full harvest transparency.',
    image: IMAGES.journey.deliver,
    tagline: 'Farm-Fresh Speed',
    highlights: ['Breathable food-grade bags', 'Complete batch origin tracking', 'Guaranteed farm freshness']
  }
];

export const FarmToTableSticky = () => {
  const [activeStage, setActiveStage] = useState(0);

  const current = STAGES[activeStage];

  return (
    <section className="py-24 bg-[#1C160F] text-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#D4A359] block mb-3">
            FARM-TO-CONSUMER JOURNEY
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl text-white">
            A journey measured in care.
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-4 font-light">
            Every grain, pulse, fruit, and vegetable follows a transparent path from pristine soil to your dining table.
          </p>
        </div>

        {/* 4 Stage Interactive Stepper Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {STAGES.map((s, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStage(idx)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 relative border ${
                  isActive
                    ? 'bg-[#231B12] border-[#D4A359] shadow-xl'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 text-stone-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-2xl font-serif-display ${isActive ? 'text-[#D4A359]' : 'text-stone-500'}`}>
                    {s.step}
                  </span>
                  <span className={`text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-[#4E5D36] text-white' : 'bg-white/5 text-stone-400'
                  }`}>
                    {s.name}
                  </span>
                </div>
                <div className={`text-xs font-semibold truncate ${isActive ? 'text-white' : 'text-stone-400'}`}>
                  {s.tagline}
                </div>
                
                {/* Active Progress Bar Underneath */}
                {isActive && (
                  <motion.div
                    layoutId="activeStageIndicator"
                    className="absolute bottom-0 left-4 right-4 h-1 bg-[#D4A359] rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Main Stage Display Grid */}
        <div className="bg-[#231B12] rounded-3xl overflow-hidden border border-white/10 grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
          
          {/* Left Visual Image Panel */}
          <div className="lg:col-span-7 relative overflow-hidden min-h-[300px] lg:min-h-full bg-black">
            <AnimatePresence mode="wait">
              <motion.img
                key={current.step}
                src={current.image}
                alt={current.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7 }}
                className="w-full h-full object-cover brightness-[0.85]"
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-[#231B12] via-transparent to-transparent lg:hidden" />

            <div className="absolute top-6 left-6 z-10">
              <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-[#D4A359] text-xs font-bold uppercase tracking-widest border border-white/20">
                STAGE {current.step} — {current.name}
              </span>
            </div>
          </div>

          {/* Right Content Description Panel */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.step}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="text-7xl font-serif-display text-white/10 font-bold select-none">
                  {current.step}
                </div>

                <h3 className="font-serif-display text-2xl sm:text-3xl text-white leading-tight -mt-10">
                  {current.title}
                </h3>

                <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
                  {current.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  {current.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-stone-200">
                      <CheckCircle2 className="w-4 h-4 text-[#D4A359] shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex gap-2">
                {STAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStage(idx)}
                    className={`h-2 rounded-full transition-all ${
                      activeStage === idx ? 'w-8 bg-[#D4A359]' : 'w-2 bg-white/20'
                    }`}
                  />
                ))}
              </div>

              <Link
                to="/process"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4A359] hover:text-white transition-colors"
              >
                <span>Full Process Timeline</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
