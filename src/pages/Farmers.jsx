import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sprout, Quote, Award } from 'lucide-react';
import { FARMERS } from '../data/farmersData';

export const Farmers = () => {
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
            <span>FARMER PARTNERSHIPS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif-display text-4xl sm:text-6xl text-[#1C160F]"
          >
            Meet the people behind the harvest.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 text-base mt-4 font-light leading-relaxed"
          >
            Behind every pouch of Ponni rice and bag of Ragi millet are real farming families dedicated to honest agricultural stewardship across South India.
          </motion.p>
        </div>

        {/* Farmer Profile Cards Grid */}
        <div className="space-y-16">
          {FARMERS.map((farmer, idx) => (
            <motion.div
              key={farmer.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl overflow-hidden border border-[#EFEBE4] hover:border-[#4E5D36]/40 shadow-xl hover:shadow-2xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 group card-shine"
            >
              {/* Left Portrait & Farm Action */}
              <div className="lg:col-span-5 relative bg-stone-900 aspect-square sm:aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src={farmer.portrait}
                  alt={farmer.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <span className="px-3.5 py-1 rounded-full bg-[#4E5D36] text-[#F4E8D1] text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                    {farmer.role}
                  </span>
                  <h3 className="font-serif-display text-3xl sm:text-4xl mt-2 text-white">{farmer.name}</h3>
                  <p className="text-stone-300 text-xs mt-1 font-medium">{farmer.region}</p>
                </div>
              </div>

              {/* Right Story & Experience */}
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6 bg-gradient-to-b from-white via-white to-[#FAF7F2]/50">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[#EFEBE4]">
                    <div className="flex items-center gap-2 text-stone-600 text-xs font-semibold">
                      <MapPin className="w-4 h-4 text-[#B85C38]" />
                      <span>{farmer.region}</span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#FAF7F2] text-[#1C160F] text-xs font-bold border border-[#EFEBE4] shadow-xs">
                      {farmer.experience}
                    </span>
                  </div>

                  <blockquote className="p-5 rounded-2xl bg-[#FAF7F2] border-l-4 border-[#D4A359] text-stone-800 italic text-sm sm:text-base leading-relaxed shadow-sm">
                    "{farmer.quote}"
                  </blockquote>

                  <p className="text-stone-600 text-sm leading-relaxed font-light">
                    {farmer.bio}
                  </p>

                  {/* Crops Specialization */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#4E5D36] block mb-2.5">
                      Crop Specializations:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {farmer.crops.map((crop, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="px-3.5 py-1.5 rounded-full bg-[#EFEBE4] hover:bg-[#4E5D36] hover:text-white transition-colors text-[#1C160F] text-xs font-semibold shadow-xs"
                        >
                          🌾 {crop}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EFEBE4] text-[11px] text-stone-400 italic">
                  * {farmer.demonstrationNotice}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};
