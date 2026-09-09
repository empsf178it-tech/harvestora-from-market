import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sprout, CheckCircle2, Droplets, Mountain, Users } from 'lucide-react';
import { SectionHeader } from '../components/common/SectionHeader';
import { FARMS } from '../data/farmsData';
import { IMAGES } from '../data/imagesData';

export const Farms = () => {
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
            <span>SOUTH INDIAN AGRICULTURAL LANDSCAPES</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif-display text-4xl sm:text-6xl text-[#1C160F]"
          >
            Closer to the land.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 text-base mt-4 font-light leading-relaxed"
          >
            Explore the authentic farming regions across Tamil Nadu, Karnataka, Kerala, Andhra Pradesh, and Telangana where our produce is cultivated with care.
          </motion.p>
        </div>

        {/* Hero Panorama Banner */}
        <div className="relative rounded-3xl overflow-hidden aspect-[21/9] min-h-[300px] mb-20 shadow-2xl bg-stone-900">
          <img
            src={IMAGES.farms.paddy}
            alt="South Indian Farmland Horizon"
            className="w-full h-full object-cover brightness-[0.75]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          
          <div className="absolute bottom-8 left-8 right-8 text-white max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
              REGIONAL SPOTLIGHT
            </span>
            <h2 className="font-serif-display text-2xl sm:text-4xl text-white mt-1">
              Thanjavur to the Nilgiris
            </h2>
            <p className="text-stone-200 text-xs sm:text-sm mt-2 font-light">
              From water-abundant river deltas to high-altitude mist terraces, each region provides ideal micro-climates for native crops.
            </p>
          </div>
        </div>

        {/* Farm Spotlights */}
        <div className="space-y-20">
          {FARMS.map((farm, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={farm.id}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className={`bg-white rounded-3xl overflow-hidden border border-[#EFEBE4] hover:border-[#4E5D36]/40 shadow-xl hover:shadow-2xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 group card-shine ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Panel */}
                <div className={`lg:col-span-6 relative min-h-[360px] bg-stone-200 overflow-hidden ${isEven ? '' : 'lg:order-2'}`}>
                  <img
                    src={farm.image}
                    alt={farm.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-4 py-1.5 rounded-full bg-[#1C160F]/85 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider shadow-md">
                      {farm.cropType}
                    </span>
                  </div>
                </div>

                {/* Info Content */}
                <div className={`lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between space-y-6 bg-gradient-to-b from-white via-white to-[#FAF7F2]/50 ${isEven ? '' : 'lg:order-1'}`}>
                  <div className="space-y-5">
                    <div className="flex items-center gap-2 text-stone-600 text-xs font-semibold">
                      <MapPin className="w-4 h-4 text-[#B85C38]" />
                      <span>{farm.region}</span>
                    </div>

                    <h2 className="font-serif-display text-3xl sm:text-4xl text-[#1C160F] group-hover:text-[#4E5D36] transition-colors">
                      {farm.name}
                    </h2>

                    <p className="text-stone-600 text-sm sm:text-base leading-relaxed font-light">
                      {farm.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <motion.div whileHover={{ scale: 1.03 }} className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EFEBE4] hover:border-[#4E5D36]/30 shadow-xs transition-all">
                        <span className="text-[10px] uppercase font-bold text-stone-400 block">Soil Profile</span>
                        <span className="text-xs font-bold text-[#1C160F]">{farm.stats.soilType}</span>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.03 }} className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EFEBE4] hover:border-[#4E5D36]/30 shadow-xs transition-all">
                        <span className="text-[10px] uppercase font-bold text-stone-400 block">Water Source</span>
                        <span className="text-xs font-bold text-[#1C160F]">{farm.stats.waterSource}</span>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.03 }} className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EFEBE4] hover:border-[#4E5D36]/30 shadow-xs transition-all">
                        <span className="text-[10px] uppercase font-bold text-stone-400 block">Cluster Size</span>
                        <span className="text-xs font-bold text-[#1C160F]">{farm.stats.acreage}</span>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.03 }} className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#EFEBE4] hover:border-[#4E5D36]/30 shadow-xs transition-all">
                        <span className="text-[10px] uppercase font-bold text-stone-400 block">Farming Families</span>
                        <span className="text-xs font-bold text-[#1C160F]">{farm.stats.farmersCount}</span>
                      </motion.div>
                    </div>

                    {/* Sustainable Practices */}
                    <div className="pt-2 space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#4E5D36] block">
                        FARMING PRACTICES
                      </span>
                      {farm.practices.map((p, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#4E5D36] shrink-0" />
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
