import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sprout } from 'lucide-react';
import { IMAGES } from '../data/imagesData';

export const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative bg-[#1C160F] text-[#FAF7F2] overflow-hidden px-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Agricultural Field 404"
          className="w-full h-full object-cover brightness-[0.35]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C160F] via-black/40 to-[#1C160F]/80" />
      </div>

      <div className="relative z-10 max-w-xl text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#4E5D36] text-amber-300 flex items-center justify-center mx-auto shadow-xl">
          <Sprout className="w-8 h-8" />
        </div>

        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#D4A359] block">
          404 — PAGE NOT FOUND
        </span>

        <h1 className="font-serif-display text-3xl sm:text-5xl text-white">
          Looks like this harvest took a different path.
        </h1>

        <p className="text-stone-300 text-sm sm:text-base font-light max-w-md mx-auto leading-relaxed">
          The page you're looking for could not be found or may have been moved back to the fields.
        </p>

        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#4E5D36] text-white text-xs font-bold uppercase tracking-widest hover:bg-[#D4A359] hover:text-[#1C160F] transition-all shadow-xl"
          >
            <span>Return Home →</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
