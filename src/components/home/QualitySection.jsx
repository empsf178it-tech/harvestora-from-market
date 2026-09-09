import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, MapPin, HeartHandshake } from 'lucide-react';

const FEATURES = [
  {
    icon: Sparkles,
    title: 'Freshness',
    description: 'Harvested at natural maturity and packed within 24 hours to preserve original taste, crunch, and aroma.'
  },
  {
    icon: ShieldCheck,
    title: 'Quality',
    description: 'Multi-stage optical color sorting and hand inspection. Zero artificial polishers, waxes, or synthetic dyes.'
  },
  {
    icon: MapPin,
    title: 'Traceability',
    description: 'Every product batch links directly to regional farm coordinates across South Indian agricultural hubs.'
  },
  {
    icon: HeartHandshake,
    title: 'Care',
    description: 'Fair pricing guaranteed directly to farmers while preserving soil organic health for future generations.'
  }
];

export const QualitySection = () => {
  return (
    <section className="py-24 bg-[#1C160F] text-[#FAF7F2] border-t border-[#231B12] relative overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#4E5D36]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#D4A359] block mb-3">
            QUALITY & STANDARDS
          </span>
          <h2 className="font-serif-display text-4xl sm:text-5xl text-white">
            Selected with purpose.
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-4 font-light">
            We hold every harvest to strict standards of authenticity, purity, and environmental ethics.
          </p>
        </div>

        {/* 4 Feature Cards Animated Sequentially */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.12 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-[#231B12] p-8 rounded-3xl border border-white/10 hover:border-[#D4A359]/60 shadow-xl hover:shadow-2xl hover:shadow-[#D4A359]/10 transition-all duration-400 flex flex-col justify-between group relative overflow-hidden card-shine"
              >
                {/* Glow Backdrop Pill */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#D4A359]/10 rounded-full blur-xl group-hover:bg-[#D4A359]/25 transition-all duration-500 pointer-events-none" />

                <div>
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    className="w-14 h-14 rounded-2xl bg-[#4E5D36]/30 border border-[#4E5D36]/60 text-[#D4A359] flex items-center justify-center mb-6 group-hover:bg-[#4E5D36] group-hover:text-white transition-all duration-300 shadow-md"
                  >
                    <Icon className="w-7 h-7" />
                  </motion.div>

                  <h3 className="font-serif-display text-2xl text-white mb-3 group-hover:text-[#D4A359] transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-stone-300 text-sm leading-relaxed font-light">
                    {feat.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-[#D4A359] uppercase tracking-wider">
                  <span>STANDARD 0{idx + 1}</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#4E5D36] group-hover:bg-[#D4A359] group-hover:scale-125 transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
