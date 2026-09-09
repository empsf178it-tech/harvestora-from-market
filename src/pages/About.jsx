import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, ShieldCheck, HeartHandshake, RefreshCw, Eye, Award } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { IMAGES } from '../data/imagesData';

const VALUES = [
  {
    icon: Eye,
    title: 'Transparency',
    description: 'Complete traceability from specific South Indian farm clusters straight to product packaging.'
  },
  {
    icon: ShieldCheck,
    title: 'Purity & Quality',
    description: 'Zero chemical dyes, synthetic polishers, or artificial catalysts during post-harvest handling.'
  },
  {
    icon: RefreshCw,
    title: 'Sustainability',
    description: 'Promoting soil-enriching crop rotations, water conservation, and rain-fed landraces.'
  },
  {
    icon: HeartHandshake,
    title: 'Farmer Respect',
    description: 'Guaranteed fair purchase prices directly to smallholder farm families before harvest begins.'
  },
  {
    icon: Sprout,
    title: 'Responsible Sourcing',
    description: 'Focusing on native heirloom seeds and dryland crops adapted to natural rainfall.'
  }
];

export const About = () => {
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
            <span>THE HARVESTORA VISION</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif-display text-4xl sm:text-6xl text-[#1C160F]"
          >
            Rooted in agriculture. Designed for today.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 text-base mt-4 font-light leading-relaxed"
          >
            HARVESTORA was founded to bridge the gap between traditional South Indian farm wisdom and modern urban households seeking wholesome, unadulterated food.
          </motion.p>
        </div>

        {/* Editorial Story Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#EFEBE4] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#B85C38]">
              OUR ORIGIN STORY
            </span>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#1C160F]">
              Bringing honesty back to the dining table.
            </h2>
            <p className="text-stone-700 text-base leading-relaxed font-light">
              For decades, modern food supply chains have lengthened the distance between farms and consumers, hiding grain origins behind heavy chemical processing and artificial shelf-life extenders.
            </p>
            <p className="text-stone-600 text-sm leading-relaxed">
              HARVESTORA was created to simplify this journey. By working directly with farming communities across Tamil Nadu, Karnataka, Kerala, AP, and Telangana, we ensure that every bag of rice, millet, or pulse maintains its natural integrity, soil character, and vital nutrients.
            </p>
          </div>

          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-200 shadow-md">
            <img
              src={IMAGES.aboutSoil}
              alt="South Indian Farmer inspecting crops"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Banner: Our Philosophy */}
        <div className="bg-[#1C160F] text-[#FAF7F2] rounded-3xl p-10 sm:p-16 text-center mb-20 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4A359]">
              OUR CORE PHILOSOPHY
            </span>
            <h2 className="font-serif-display text-3xl sm:text-5xl text-white italic">
              "Respect the Soil. Value the Farmer. Respect the Harvest."
            </h2>
            <p className="text-stone-300 text-sm sm:text-base font-light pt-2">
              Three unyielding commitments that guide every sourcing decision, processing method, and customer delivery we make.
            </p>
          </div>
        </div>

        {/* Section: Our Values Grid */}
        <div>
          <SectionHeader
            eyebrow="OUR VALUES"
            title="What we stand for."
            subtitle="The core principles governing our agricultural partnerships and food processing standards."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="bg-white p-8 rounded-3xl border border-[#EFEBE4] shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#4E5D36]/10 text-[#4E5D36] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-display text-2xl text-[#1C160F] mb-2">{val.title}</h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed font-light">{val.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};
