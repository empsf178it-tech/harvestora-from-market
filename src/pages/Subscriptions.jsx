import React from 'react';
import { motion } from 'framer-motion';
import { SubscriptionBuilder } from '../components/common/SubscriptionBuilder';
import { ShieldCheck, Truck, RefreshCw, Heart } from 'lucide-react';

export function Subscriptions() {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-[#4E5D36] text-[#FAF7F2] text-xs font-bold uppercase tracking-wider shadow-sm inline-block">
            Direct Farm Subscriptions
          </span>
          <h1 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#1C160F]">
            Weekly Organic Harvest Baskets
          </h1>
          <p className="text-sm text-stone-600 leading-relaxed font-light">
            Get early dew-harvested vegetables, tree-ripened orchard fruits, and heritage grains delivered directly from local South Indian farms every week. 100% pesticide-free, customizable, with no long-term contracts.
          </p>
        </div>

        {/* Subscription Builder Component */}
        <SubscriptionBuilder />

        {/* How It Works Steps */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EFEBE4] shadow-xl space-y-8">
          <h2 className="font-serif-display text-2xl sm:text-3xl text-center text-[#1C160F] font-bold">
            How Your Weekly Harvest Subscription Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="text-center space-y-3 p-6 bg-[#FAF7F2] rounded-3xl border border-[#EFEBE4] hover:border-[#4E5D36]/40 shadow-xs hover:shadow-lg transition-all card-shine"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#4E5D36] text-white font-bold text-lg flex items-center justify-center mx-auto shadow-md">
                1
              </div>
              <h3 className="font-bold text-base text-[#1C160F]">Choose Your Box</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Select your preferred plan based on family size and dietary habits.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="text-center space-y-3 p-6 bg-[#FAF7F2] rounded-3xl border border-[#EFEBE4] hover:border-[#4E5D36]/40 shadow-xs hover:shadow-lg transition-all card-shine"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#D4A359] text-[#1C160F] font-bold text-lg flex items-center justify-center mx-auto shadow-md">
                2
              </div>
              <h3 className="font-bold text-base text-[#1C160F]">Customize Items</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Swap up to 2 items every week before harvest day using your portal.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="text-center space-y-3 p-6 bg-[#FAF7F2] rounded-3xl border border-[#EFEBE4] hover:border-[#4E5D36]/40 shadow-xs hover:shadow-lg transition-all card-shine"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#B85C38] text-white font-bold text-lg flex items-center justify-center mx-auto shadow-md">
                3
              </div>
              <h3 className="font-bold text-base text-[#1C160F]">Early Morning Harvest</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Farmers harvest your basket items at 5:00 AM on delivery day.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="text-center space-y-3 p-6 bg-[#FAF7F2] rounded-3xl border border-[#EFEBE4] hover:border-[#4E5D36]/40 shadow-xs hover:shadow-lg transition-all card-shine"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#4E5D36] text-white font-bold text-lg flex items-center justify-center mx-auto shadow-md">
                4
              </div>
              <h3 className="font-bold text-base text-[#1C160F]">Cold-Chain Express</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Arrives at your doorstep in eco-friendly insulated baskets within 24 hours.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

