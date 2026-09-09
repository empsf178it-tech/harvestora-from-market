import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle2, ArrowLeft, Send, Sparkles, Sprout, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '../data/productsData';
import { ProductCard } from '../components/common/ProductCard';
import { useApp } from '../context/AppContext';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { openEnquiry } = useApp();

  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="pt-28 pb-24 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <button
          onClick={() => navigate('/products')}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-500 hover:text-[#1C160F] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Products Catalog</span>
        </button>

        {/* Product Editorial Hero */}
        <div className="bg-white rounded-3xl overflow-hidden border border-[#EFEBE4] shadow-lg grid grid-cols-1 lg:grid-cols-12 mb-16">
          
          {/* Left Large Photo */}
          <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto bg-[#EFEBE4] overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3.5 py-1.5 rounded-full bg-[#1C160F]/80 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
                {product.category} COLLECTION
              </span>
            </div>
          </div>

          {/* Right Product Specifications */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-stone-500 text-xs">
                <MapPin className="w-4 h-4 text-[#B85C38]" />
                <span>{product.origin}</span>
              </div>

              <h1 className="font-serif-display text-3xl sm:text-5xl text-[#1C160F]">
                {product.name}
              </h1>

              <p className="text-stone-600 text-base leading-relaxed font-light">
                {product.longDescription || product.description}
              </p>

              {/* Specs Table */}
              <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#EFEBE4] space-y-3 text-xs">
                <div className="flex justify-between border-b border-[#EFEBE4] pb-2">
                  <span className="text-stone-500 font-semibold">Category:</span>
                  <span className="text-[#1C160F] font-bold">{product.category}</span>
                </div>
                <div className="flex justify-between border-b border-[#EFEBE4] pb-2">
                  <span className="text-stone-500 font-semibold">Grain / Spec Type:</span>
                  <span className="text-[#1C160F] font-bold">{product.grainType || 'Native Sourced'}</span>
                </div>
                <div className="flex justify-between border-b border-[#EFEBE4] pb-2">
                  <span className="text-stone-500 font-semibold">Origin Region:</span>
                  <span className="text-[#1C160F] font-bold">{product.origin}</span>
                </div>
                <div className="flex justify-between border-b border-[#EFEBE4] pb-2">
                  <span className="text-stone-500 font-semibold">Available Pack Sizes:</span>
                  <span className="text-[#1C160F] font-bold">{product.packSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500 font-semibold">Season Status:</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    {product.availability || 'In Season'}
                  </span>
                </div>
              </div>

              {/* Sourcing Features */}
              {product.features && (
                <div className="space-y-2 pt-2">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-[#4E5D36] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-[#EFEBE4]">
              <button
                onClick={() => openEnquiry(product)}
                className="w-full py-4 px-6 rounded-full bg-[#1C160F] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#4E5D36] transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Enquire About Product</span>
              </button>
            </div>
          </div>

        </div>

        {/* Section: From Farm to Pack Timeline */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EFEBE4] shadow-sm mb-16 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#4E5D36]">
              TRACEABLE PROCESS
            </span>
            <h2 className="font-serif-display text-3xl text-[#1C160F] mt-2">
              From Farm to Pack
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#EFEBE4] relative">
              <span className="text-3xl font-serif-display text-[#B85C38] font-bold">01</span>
              <h4 className="font-serif-display text-lg text-[#1C160F] mt-2">Cultivation</h4>
              <p className="text-stone-600 text-xs mt-1 leading-relaxed">
                Cultivated using rain-fed channels and organic compost in authentic South Indian soils.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#EFEBE4] relative">
              <span className="text-3xl font-serif-display text-[#B85C38] font-bold">02</span>
              <h4 className="font-serif-display text-lg text-[#1C160F] mt-2">Harvesting</h4>
              <p className="text-stone-600 text-xs mt-1 leading-relaxed">
                Hand-harvested when naturally mature without artificial growth accelerators.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#EFEBE4] relative">
              <span className="text-3xl font-serif-display text-[#B85C38] font-bold">03</span>
              <h4 className="font-serif-display text-lg text-[#1C160F] mt-2">Sorting</h4>
              <p className="text-stone-600 text-xs mt-1 leading-relaxed">
                Multi-stage gravity separation and optical sorting to remove broken grains.
              </p>
            </div>

            <div className="bg-[#FAF7F2] p-6 rounded-2xl border border-[#EFEBE4] relative">
              <span className="text-3xl font-serif-display text-[#B85C38] font-bold">04</span>
              <h4 className="font-serif-display text-lg text-[#1C160F] mt-2">Packaging</h4>
              <p className="text-stone-600 text-xs mt-1 leading-relaxed">
                Sealed in food-grade jute sacks and moisture-protected paper pouches.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Related Products */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif-display text-2xl sm:text-3xl text-[#1C160F]">
              Related Produce
            </h2>
            <Link
              to="/products"
              className="text-xs font-bold uppercase tracking-wider text-[#4E5D36] hover:text-[#B85C38]"
            >
              View Full Catalog →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
