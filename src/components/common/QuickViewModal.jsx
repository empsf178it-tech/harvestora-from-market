import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { Link } from 'react-router-dom';

export const QuickViewModal = () => {
  const { selectedProduct, closeQuickView, openEnquiry } = useApp();

  if (!selectedProduct) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-[#FAF7F2] rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl border border-[#EFEBE4] grid grid-cols-1 md:grid-cols-2"
        >
          {/* Close Button */}
          <button
            onClick={closeQuickView}
            className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Left Image Showcase */}
          <div className="relative h-64 md:h-full bg-[#EFEBE4]">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 rounded-full bg-[#4E5D36] text-white text-xs font-bold uppercase tracking-wider">
                {selectedProduct.category}
              </span>
            </div>
          </div>

          {/* Right Details */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-1.5 text-stone-500 text-xs mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#B85C38]" />
                <span>{selectedProduct.origin}</span>
              </div>

              <h2 className="font-serif-display text-2xl sm:text-3xl text-[#1C160F]">
                {selectedProduct.name}
              </h2>

              <p className="text-stone-600 text-sm mt-3 leading-relaxed">
                {selectedProduct.longDescription || selectedProduct.description}
              </p>

              <div className="mt-4 pt-4 border-t border-[#EFEBE4] space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-stone-500 font-semibold">Grain / Produce Type:</span>
                  <span className="text-[#1C160F] font-bold">{selectedProduct.grainType || 'Native Sourced'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500 font-semibold">Available Sizes:</span>
                  <span className="text-[#1C160F] font-bold">{selectedProduct.packSize}</span>
                </div>
              </div>

              {selectedProduct.features && (
                <div className="mt-4 space-y-1.5">
                  {selectedProduct.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4E5D36] mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-[#EFEBE4] flex items-center gap-3">
              <button
                onClick={() => {
                  const p = selectedProduct;
                  closeQuickView();
                  openEnquiry(p);
                }}
                className="flex-1 py-3 px-4 rounded-full bg-[#1C160F] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#4E5D36] transition-colors"
              >
                Enquire Product
              </button>

              <Link
                to={`/products/${selectedProduct.id}`}
                onClick={closeQuickView}
                className="py-3 px-4 rounded-full bg-[#EFEBE4] text-[#1C160F] text-xs font-bold uppercase tracking-wider hover:bg-[#B85C38] hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <span>Full Specs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
