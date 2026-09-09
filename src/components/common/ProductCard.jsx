import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Eye, MapPin, Sparkles, ShoppingBag, ShieldCheck, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export const ProductCard = ({ product }) => {
  const { openQuickView, addToCart } = useApp();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group card-shine bg-white rounded-3xl overflow-hidden border border-[#EFEBE4] hover:border-[#4E5D36]/40 shadow-sm hover:shadow-2xl hover:shadow-[#4E5D36]/10 transition-all duration-500 flex flex-col justify-between relative"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#EFEBE4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-300" />

        {/* Category & Organic Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1 rounded-full bg-[#1C160F]/85 backdrop-blur-md text-white text-[10px] font-extrabold uppercase tracking-wider shadow-md"
          >
            {product.category}
          </motion.span>
          {product.harvestBadge && (
            <motion.span
              animate={{ y: [0, -2, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="px-2.5 py-0.5 rounded-full bg-[#4E5D36] text-[#F4E8D1] text-[10px] font-bold shadow-md flex items-center gap-1 border border-white/20"
            >
              <Sparkles className="w-3 h-3 text-[#D4A359]" />
              <span>{product.harvestBadge}</span>
            </motion.span>
          )}
        </div>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/25 backdrop-blur-[3px]">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openQuickView(product)}
            className="px-5 py-2.5 rounded-full bg-white text-[#1C160F] text-xs font-bold uppercase tracking-wider shadow-2xl flex items-center gap-2 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#4E5D36] hover:text-white"
          >
            <Eye className="w-4 h-4 text-[#4E5D36] group-hover:text-white" />
            <span>Quick View</span>
          </motion.button>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-white via-white to-[#FAF7F2]/60">
        <div>
          <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
            <div className="flex items-center gap-1 text-stone-600 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#B85C38] shrink-0" />
              <span className="truncate max-w-[150px]">{product.origin}</span>
            </div>
            {product.rating && (
              <div className="flex items-center gap-1 font-bold text-[#1C160F] bg-[#F4E8D1]/60 px-2 py-0.5 rounded-full">
                <Star className="w-3.5 h-3.5 fill-[#D4A359] text-[#D4A359]" />
                <span>{product.rating}</span>
              </div>
            )}
          </div>

          <h3 className="font-serif-display text-lg sm:text-xl text-[#1C160F] group-hover:text-[#4E5D36] transition-colors duration-300 line-clamp-1 font-bold">
            {product.name}
          </h3>

          <p className="text-stone-600 text-xs mt-2 line-clamp-2 leading-relaxed font-light">
            {product.description}
          </p>

          {/* Farmer & Batch stamp */}
          {product.farmerName && (
            <div className="mt-3 pt-2.5 border-t border-[#EFEBE4] flex items-center justify-between text-[11px] text-[#4E5D36] font-medium">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4E5D36] animate-pulse" />
                🌾 {product.farmerName}
              </span>
              <span className="font-mono text-stone-400 text-[10px] bg-[#FAF7F2] px-2 py-0.5 rounded border border-[#EFEBE4]">
                {product.batchCode}
              </span>
            </div>
          )}
        </div>

        {/* Pricing & Add to Cart */}
        <div className="mt-4 pt-3.5 border-t border-[#EFEBE4] flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-extrabold text-xl text-[#B85C38]">₹{product.price || 350}</span>
              {product.originalPrice && (
                <span className="text-xs text-stone-400 line-through font-normal">₹{product.originalPrice}</span>
              )}
            </div>
            <span className="text-[10px] text-stone-500 font-semibold uppercase tracking-wider block">{product.unit || 'Per Pack'}</span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={`/products/${product.id}`}
              className="p-2.5 rounded-xl bg-[#EFEBE4] text-[#1C160F] hover:bg-[#1C160F] hover:text-white transition-all duration-300 shadow-sm"
              title="View Details"
            >
              <ArrowRight className="w-4 h-4" />
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => addToCart(product, 1)}
              className="px-4 py-2.5 rounded-xl bg-[#4E5D36] text-white text-xs font-bold hover:bg-[#3B4729] transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-1.5"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

