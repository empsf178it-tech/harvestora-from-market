import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Calendar, ChevronRight, ShieldCheck, Heart, RefreshCw } from 'lucide-react';
import { HeroSection } from '../components/home/HeroSection';
import { Marquee } from '../components/common/Marquee';
import { SectionHeader } from '../components/common/SectionHeader';
import { ProductCard } from '../components/common/ProductCard';
import { TraceabilityScanner } from '../components/common/TraceabilityScanner';
import { SubscriptionBuilder } from '../components/common/SubscriptionBuilder';
import { FarmToTableSticky } from '../components/home/FarmToTableSticky';
import { QualitySection } from '../components/home/QualitySection';
import { PRODUCTS } from '../data/productsData';
import { FARMERS } from '../data/farmersData';
import { JOURNAL_ARTICLES } from '../data/journalData';
import { IMAGES } from '../data/imagesData';
import { useApp } from '../context/AppContext';

export const Home = () => {
  const { openJournalArticle, showToast } = useApp();

  return (
    <div className="space-y-0 bg-[#FAF7F2]">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Marquee Ticker */}
      <Marquee />

      {/* 3. Daily Harvest Drop (D2C Shop) */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <SectionHeader
              eyebrow="DAILY HARVEST MARKETPLACE"
              title="Harvested Fresh Today."
              subtitle="Direct from local organic growers to your kitchen with 100% pesticide-free lab certificates."
            />

            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4E5D36] hover:text-[#B85C38] transition-colors shrink-0 mb-4 sm:mb-12"
            >
              <span>View Full Organic Marketplace</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Live Farm-to-Fork Batch Traceability Scanner */}
      <section className="py-20 bg-[#EFEBE4]/60 border-y border-[#EFEBE4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TraceabilityScanner />
        </div>
      </section>

      {/* 5. Weekly Harvest Box Subscription Builder */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SubscriptionBuilder />
        </div>
      </section>

      {/* 6. Sticky Farm-to-Table Storytelling Process */}
      <FarmToTableSticky />

      {/* 7. Real Farmer Spotlight */}
      <section className="py-24 bg-[#FAF7F2] text-[#2C2A29]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-3xl overflow-hidden border border-[#EFEBE4] hover:border-[#4E5D36]/40 shadow-xl hover:shadow-2xl transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 group card-shine"
          >
            {/* Left Farmer Portrait */}
            <div className="lg:col-span-5 relative aspect-square sm:aspect-[4/3] lg:aspect-auto bg-[#EFEBE4] overflow-hidden min-h-[380px]">
              <img
                src={FARMERS[0].portrait}
                alt={FARMERS[0].name}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3.5 py-1.5 rounded-full bg-[#1C160F]/85 backdrop-blur-md text-amber-300 text-[10px] font-extrabold uppercase tracking-widest border border-amber-300/30 flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  VERIFIED ORGANIC GROWER
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-10 text-white space-y-1">
                <span className="text-[11px] uppercase tracking-widest text-amber-300 font-extrabold block">
                  {FARMERS[0].role}
                </span>
                <h3 className="font-serif-display text-2xl sm:text-3xl text-white">
                  {FARMERS[0].name}
                </h3>
                <p className="text-stone-300 text-xs flex items-center gap-1">
                  <span>📍 {FARMERS[0].region}</span>
                </p>
              </div>
            </div>

            {/* Right Story Text */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6 bg-gradient-to-b from-white via-white to-[#FAF7F2]/60">
              <div className="space-y-4">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#B85C38] block">
                  FARMER SPOTLIGHT & DIRECT FAIR-TRADE
                </span>

                <h2 className="font-serif-display text-3xl sm:text-4xl text-[#1C160F] leading-tight">
                  Supporting local growers directly.
                </h2>

                <p className="text-stone-700 text-sm sm:text-base leading-relaxed font-light">
                  When you order from Harvestora, 78% of your purchase goes directly to farming families like Farmer Ramesh Thangavel, cutting out predatory brokers and middlemen.
                </p>

                {/* Impact & Farm Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
                  <div className="bg-[#FAF7F2] p-3 rounded-2xl border border-[#EFEBE4]">
                    <span className="text-[10px] font-extrabold text-[#B85C38] uppercase block">Direct Share</span>
                    <span className="text-lg font-extrabold text-[#1C160F]">78%</span>
                    <span className="text-[9px] text-stone-500 block">Order Value</span>
                  </div>

                  <div className="bg-[#FAF7F2] p-3 rounded-2xl border border-[#EFEBE4]">
                    <span className="text-[10px] font-extrabold text-[#4E5D36] uppercase block">Experience</span>
                    <span className="text-lg font-extrabold text-[#1C160F]">28 Yrs</span>
                    <span className="text-[9px] text-stone-500 block">Soil Stewardship</span>
                  </div>

                  <div className="bg-[#FAF7F2] p-3 rounded-2xl border border-[#EFEBE4]">
                    <span className="text-[10px] font-extrabold text-[#D4A359] uppercase block">Water Saving</span>
                    <span className="text-lg font-extrabold text-[#1C160F]">30%</span>
                    <span className="text-[9px] text-stone-500 block">Delta Rain-Fed</span>
                  </div>

                  <div className="bg-[#FAF7F2] p-3 rounded-2xl border border-[#EFEBE4]">
                    <span className="text-[10px] font-extrabold text-emerald-600 uppercase block">Residue</span>
                    <span className="text-lg font-extrabold text-[#1C160F]">0.00</span>
                    <span className="text-[9px] text-stone-500 block">Pesticide Free</span>
                  </div>
                </div>

                <blockquote className="p-4 rounded-2xl bg-[#FAF7F2] border-l-4 border-[#4E5D36] text-stone-700 italic text-xs sm:text-sm shadow-xs">
                  "{FARMERS[0].quote}"
                </blockquote>

                {/* Crops Grown Pills */}
                <div className="pt-1">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#4E5D36] block mb-2">
                    Primary Native Crops Cultivated:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {FARMERS[0].crops.map((crop, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-[#EFEBE4] text-[#1C160F] text-xs font-semibold">
                        🌾 {crop}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#EFEBE4] flex flex-wrap items-center gap-4">
                <Link
                  to="/farmers"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1C160F] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#4E5D36] transition-colors shadow-md group"
                >
                  <span>Meet All Farmer Partners</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => showToast("💚 ₹50 Farmer Support Bonus added to your cart checkout!")}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#F4E8D1] text-[#4E5D36] text-xs font-bold hover:bg-[#4E5D36] hover:text-white transition shadow-sm"
                >
                  <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                  <span>Support Farmer Fund (+₹50)</span>
                </motion.button>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* 8. 100% Organic Quality & Pesticide Free Section */}
      <QualitySection />

      {/* 9. Journal Preview */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <SectionHeader
              eyebrow="SOIL & SEASON JOURNAL"
              title="Stories from Soil & Season"
              subtitle="Articles on organic farming, heirloom rice varieties, and agricultural wisdom."
            />

            <Link
              to="/journal"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4E5D36] hover:text-[#B85C38] transition-colors shrink-0 mb-4 sm:mb-12"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {JOURNAL_ARTICLES.slice(0, 3).map((article, idx) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
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

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-stone-500 font-medium mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#4E5D36]" />
                        {article.date}
                      </span>
                      <span>·</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="font-serif-display text-xl text-[#1C160F] group-hover:text-[#4E5D36] transition-colors font-bold">
                      {article.title}
                    </h3>

                    <p className="text-stone-600 text-xs mt-3 line-clamp-2 leading-relaxed font-light">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center text-xs font-bold uppercase tracking-wider text-[#4E5D36] group-hover:text-[#B85C38] transition-colors">
                  <span>Read Article</span>
                  <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
