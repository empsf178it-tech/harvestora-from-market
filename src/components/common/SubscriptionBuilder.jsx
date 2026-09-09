import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SUBSCRIPTION_PLANS } from '../../data/subscriptionsData';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, ShieldCheck, Sparkles, RefreshCw, ShoppingBag, ArrowRight } from 'lucide-react';

export function SubscriptionBuilder() {
  const { showToast } = useApp();
  const [selectedPlanId, setSelectedPlanId] = useState(SUBSCRIPTION_PLANS[0].id);
  const [frequency, setFrequency] = useState('weekly'); // 'weekly' or 'monthly'
  const [customItems, setCustomItems] = useState({});

  const currentPlan = SUBSCRIPTION_PLANS.find((p) => p.id === selectedPlanId) || SUBSCRIPTION_PLANS[0];

  const handleSubscribeClick = () => {
    showToast(`🎉 Subscribed to ${currentPlan.name} (${frequency.toUpperCase()})! Delivery scheduled for Tuesday!`);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-[#EFEBE4] space-y-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F4E8D1] text-[#4E5D36] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-[#D4A359]" />
          Weekly Organic Farm Box Subscriptions
        </div>
        <h2 className="font-serif-display text-3xl sm:text-4xl text-[#1C160F] font-bold">
          Custom Harvest Boxes Delivered Direct
        </h2>
        <p className="text-sm text-gray-600">
          Skip the supermarket. Receive fresh, pesticide-free harvest baskets harvested early morning and delivered on your chosen schedule. Pause or cancel anytime.
        </p>

        {/* Frequency Selector Pills */}
        <div className="inline-flex p-1 bg-[#FAF7F2] rounded-full border border-gray-200 mt-2">
          <button
            onClick={() => setFrequency('weekly')}
            className={`px-5 py-2 text-xs font-bold rounded-full transition ${
              frequency === 'weekly'
                ? 'bg-[#4E5D36] text-white shadow-md'
                : 'text-gray-600 hover:text-[#1C160F]'
            }`}
          >
            Weekly Deliveries
          </button>
          <button
            onClick={() => setFrequency('monthly')}
            className={`px-5 py-2 text-xs font-bold rounded-full transition ${
              frequency === 'monthly'
                ? 'bg-[#4E5D36] text-white shadow-md'
                : 'text-gray-600 hover:text-[#1C160F]'
            }`}
          >
            Monthly Saver Pass
          </button>
        </div>
      </div>

      {/* Plan Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SUBSCRIPTION_PLANS.map((plan, idx) => {
          const isSelected = plan.id === selectedPlanId;
          const price = frequency === 'weekly' ? plan.priceWeekly : plan.priceMonthly;

          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedPlanId(plan.id)}
              className={`cursor-pointer rounded-3xl p-6 transition-all duration-400 flex flex-col justify-between relative overflow-hidden card-shine ${
                isSelected
                  ? 'bg-[#1C160F] text-white border-2 border-[#D4A359] shadow-2xl shadow-[#D4A359]/20'
                  : 'bg-[#FAF7F2] text-[#1C160F] border border-[#EFEBE4] hover:border-[#4E5D36]/60 hover:shadow-xl'
              }`}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm ${
                  isSelected ? 'bg-[#D4A359] text-[#1C160F]' : 'bg-[#4E5D36] text-white'
                }`}>
                  {plan.badge}
                </span>
              </div>

              <div>
                <div className="relative overflow-hidden rounded-2xl mb-4 bg-gray-200 aspect-[16/10]">
                  <img
                    src={plan.image}
                    alt={plan.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                
                <h3 className={`font-serif-display text-xl font-bold mb-1 ${isSelected ? 'text-[#F4E8D1]' : 'text-[#1C160F]'}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs mb-4 line-clamp-2 leading-relaxed ${isSelected ? 'text-stone-300' : 'text-stone-600'}`}>
                  {plan.tagline}
                </p>

                {/* Price */}
                <div className="mb-4 p-3 rounded-2xl bg-black/10 backdrop-blur-sm border border-white/5">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-2xl font-extrabold ${isSelected ? 'text-[#D4A359]' : 'text-[#B85C38]'}`}>
                      ₹{price}
                    </span>
                    <span className={`text-xs ${isSelected ? 'text-stone-400' : 'text-stone-500'}`}>
                      / {frequency === 'weekly' ? 'week' : 'month'}
                    </span>
                  </div>
                  <div className={`text-[11px] font-semibold mt-0.5 ${isSelected ? 'text-[#D4A359]' : 'text-[#4E5D36]'}`}>
                    {plan.savings}
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-2.5 mb-6">
                  {plan.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isSelected ? 'text-[#D4A359]' : 'text-[#4E5D36]'}`} />
                      <span className={isSelected ? 'text-stone-300' : 'text-stone-600'}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileTap={{ scale: 0.95 }}
                type="button"
                className={`w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#D4A359] text-[#1C160F] hover:bg-[#c59347]'
                    : 'bg-[#4E5D36] text-white hover:bg-[#3B4729]'
                }`}
              >
                {isSelected ? '✓ Selected Box' : 'Choose Box'}
              </motion.button>
            </motion.div>
          );
        })}
      </div>

      {/* Customize Active Box Section */}
      {currentPlan && (
        <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-2xl border border-[#EFEBE4] space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#EFEBE4] pb-4">
            <div>
              <span className="text-xs text-[#4E5D36] font-bold uppercase tracking-wider">Customizing Selected Basket</span>
              <h3 className="font-serif-display text-2xl font-bold text-[#1C160F]">{currentPlan.name}</h3>
              <p className="text-xs text-gray-600">Expected weight: {currentPlan.weight} • Ideal for {currentPlan.idealFor}</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-xs text-gray-500 block">Subscription Total</span>
                <span className="text-2xl font-bold text-[#B85C38]">
                  ₹{frequency === 'weekly' ? currentPlan.priceWeekly : currentPlan.priceMonthly}
                </span>
              </div>
              <button
                onClick={handleSubscribeClick}
                className="px-6 py-3.5 bg-[#4E5D36] hover:bg-[#3B4729] text-white text-xs font-bold rounded-xl shadow-lg transition flex items-center gap-2"
              >
                Confirm Basket Subscription
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Included Items Pill Swapper */}
          <div>
            <h4 className="font-bold text-xs uppercase text-gray-700 mb-3 flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-[#4E5D36]" />
              Items Included in Next Delivery (Swap up to 2 items):
            </h4>

            <div className="flex flex-wrap gap-2">
              {currentPlan.includedItems.map((item, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1.5 bg-white border border-[#EFEBE4] rounded-lg text-xs font-semibold text-[#1C160F] flex items-center gap-2 shadow-xs"
                >
                  <span>🥬 {item}</span>
                  <span className="text-[10px] text-[#4E5D36] bg-[#FAF7F2] px-1.5 py-0.5 rounded font-mono">Guaranteed Fresh</span>
                </div>
              ))}
            </div>
          </div>

          {/* Flexible Guarantee banner */}
          <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-[#4E5D36]/20 text-xs text-[#4E5D36]">
            <ShieldCheck className="w-5 h-5 flex-shrink-0 text-[#4E5D36]" />
            <div>
              <strong>Zero Commitment Guarantee:</strong> Pause, skip a week, or modify your items anytime via your Harvestora account portal.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
