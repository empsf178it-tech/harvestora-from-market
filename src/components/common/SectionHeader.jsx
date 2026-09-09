import React from 'react';
import { motion } from 'framer-motion';

export const SectionHeader = ({ eyebrow, title, subtitle, centered = false, light = false }) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-3"
        >
          <span className="w-2 h-2 rounded-full bg-[#B85C38]" />
          <span className={`text-[11px] font-extrabold uppercase tracking-[0.25em] ${
            light ? 'text-[#D4A359]' : 'text-[#4E5D36]'
          }`}>
            {eyebrow}
          </span>
        </motion.div>
      )}

      {title && (
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`font-serif-display text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.15] ${
            light ? 'text-[#FAF7F2]' : 'text-[#1C160F]'
          }`}
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? 'text-stone-300' : 'text-[#2C2A29]/80'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
