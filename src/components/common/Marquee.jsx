import React from 'react';
import { Sprout } from 'lucide-react';

export const Marquee = () => {
  const items = [
    "FRESH",
    "LOCAL",
    "RESPONSIBLY SOURCED",
    "FARM GROWN",
    "CAREFULLY SELECTED",
    "SOUTH INDIAN HARVEST",
    "HEIRLOOM GRAINS",
    "NO ARTIFICIAL POLISH"
  ];

  return (
    <div className="bg-[#1C160F] text-[#FAF7F2] py-4 overflow-hidden border-y border-[#231B12] relative z-20">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {[...items, ...items, ...items].map((text, index) => (
          <div key={index} className="inline-flex items-center mx-6">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#EFEBE4]">
              {text}
            </span>
            <Sprout className="w-3.5 h-3.5 text-[#D4A359] ml-12 opacity-80" />
          </div>
        ))}
      </div>
    </div>
  );
};
