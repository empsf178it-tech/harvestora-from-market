import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sprout, CheckCircle2, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { PROCESS_STEPS } from '../data/processData';

export const Process = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

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
            <span>TRANSPARENT SUPPLY CHAIN</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif-display text-4xl sm:text-6xl text-[#1C160F]"
          >
            From field to final selection.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 text-base mt-4 font-light leading-relaxed"
          >
            A six-stage journey engineered to preserve grain integrity, natural aroma, and farm freshness without chemical interference.
          </motion.p>
        </div>

        {/* Interactive Step Navigation Ticker */}
        <div className="bg-white p-4 rounded-3xl border border-[#EFEBE4] shadow-sm mb-16 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-between min-w-[700px]">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-2xl transition-all ${
                    isActive
                      ? 'bg-[#1C160F] text-white shadow-md'
                      : 'hover:bg-[#FAF7F2] text-stone-600'
                  }`}
                >
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-serif-display font-bold ${
                    isActive ? 'bg-[#D4A359] text-[#1C160F]' : 'bg-[#EFEBE4] text-[#1C160F]'
                  }`}>
                    {step.step}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider">{step.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 6 Vertical Process Cards with Progress Line */}
        <div className="relative space-y-16">
          {/* Central Vertical Connector Line */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-1 bg-[#EFEBE4] -translate-x-1/2 z-0" />

          {PROCESS_STEPS.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Image Panel */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:pr-8' : 'lg:order-2 lg:pl-8'}`}>
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-stone-900 shadow-xl border border-[#EFEBE4] group">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1.5 rounded-full bg-[#1C160F]/80 backdrop-blur-md text-[#D4A359] text-xs font-bold uppercase tracking-wider">
                        {step.highlight}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Panel */}
                <div className={`lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-[#EFEBE4] shadow-lg ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl font-serif-display font-bold text-[#B85C38]">
                        {step.step}
                      </span>
                      <div className="h-6 w-[1px] bg-[#EFEBE4]" />
                      <span className="text-xs font-bold tracking-[0.2em] text-[#4E5D36] uppercase">
                        STAGE {step.step}
                      </span>
                    </div>

                    <h2 className="font-serif-display text-2xl sm:text-3xl text-[#1C160F]">
                      {step.title}
                    </h2>

                    <p className="text-[#B85C38] text-xs font-bold uppercase tracking-wider">
                      {step.subtitle}
                    </p>

                    <p className="text-stone-600 text-sm leading-relaxed font-light">
                      {step.description}
                    </p>

                    <div className="pt-4 border-t border-[#EFEBE4] space-y-2">
                      {step.details.map((d, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-[#4E5D36] shrink-0" />
                          <span>{d}</span>
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
