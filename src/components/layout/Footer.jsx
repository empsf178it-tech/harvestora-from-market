import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sprout, ArrowRight, CheckCircle2, Globe, Share2, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useApp } from '../../context/AppContext';


export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useApp();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address.');
      return;
    }
    setSubscribed(true);
    showToast('Thank you for subscribing to HARVESTORA stories!');
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.9 },
      colors: ['#4E5D36', '#D4A359', '#B85C38']
    });
    setEmail('');
  };

  return (
    <footer className="bg-[#1C160F] text-[#FAF7F2] pt-20 pb-10 border-t border-[#231B12] relative overflow-hidden">
      {/* Decorative Background Accent */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#4E5D36]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-10 h-10 rounded-full bg-[#4E5D36] text-[#FAF7F2] flex items-center justify-center">
                <Sprout className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-display text-2xl font-bold tracking-tight text-white">
                  HARVESTORA
                </span>
                <span className="text-[10px] tracking-[0.25em] font-semibold text-[#D4A359] uppercase mt-0.5">
                  FARM PRODUCE
                </span>
              </div>
            </Link>

            <p className="text-stone-300 text-sm max-w-sm leading-relaxed">
              From Good Soil to Good Food. Connecting modern consumers with authentic South Indian agricultural harvests, rooted in soil health, farmer respect, and transparency.
            </p>

            <div className="flex items-center gap-4 text-stone-400">
              <a href="#website" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#4E5D36] hover:text-white transition-colors" aria-label="Website">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#share" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#4E5D36] hover:text-white transition-colors" aria-label="Share">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#contact" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#4E5D36] hover:text-white transition-colors" aria-label="Mail">
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Links Column 1 — Explore */}
          <div>
            <h4 className="font-serif-display text-base font-medium text-[#D4A359] mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <Link to="/products" className="hover:text-white transition-colors">Products Catalog</Link>
              </li>
              <li>
                <Link to="/farms" className="hover:text-white transition-colors">Our Regional Farms</Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-white transition-colors">Our Supply Process</Link>
              </li>
              <li>
                <Link to="/farmers" className="hover:text-white transition-colors">Farmer Stories</Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 — Discover */}
          <div>
            <h4 className="font-serif-display text-base font-medium text-[#D4A359] mb-4">
              Discover
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <Link to="/journal" className="hover:text-white transition-colors">Soil & Harvest Journal</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Harvestora</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact & Enquiries</Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Produce Categories */}
          <div>
            <h4 className="font-serif-display text-base font-medium text-[#D4A359] mb-4">
              Produce
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-300">
              <li>
                <Link to="/products?cat=Rice" className="hover:text-white transition-colors">Heirloom Rice</Link>
              </li>
              <li>
                <Link to="/products?cat=Millets" className="hover:text-white transition-colors">Traditional Millets</Link>
              </li>
              <li>
                <Link to="/products?cat=Pulses" className="hover:text-white transition-colors">Everyday Pulses</Link>
              </li>
              <li>
                <Link to="/products?cat=Vegetables" className="hover:text-white transition-colors">Seasonal Vegetables</Link>
              </li>
              <li>
                <Link to="/products?cat=Fruits" className="hover:text-white transition-colors">Orchard Fruits</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-10 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="font-serif-display text-xl text-white">
              Stay close to the harvest.
            </h3>
            <p className="text-stone-400 text-xs mt-1">
              Receive seasonal harvest announcements and farming stories delivered quietly to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-md w-full">
            {subscribed ? (
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#4E5D36] text-white text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-amber-300" />
                <span>Subscribed to Harvestora Stories</span>
              </div>
            ) : (
              <div className="relative w-full flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full pl-4 pr-32 py-3 rounded-full bg-white/5 border border-white/15 text-white placeholder-stone-400 text-sm focus:outline-none focus:border-[#D4A359]"
                />
                <button
                  type="submit"
                  className="absolute right-1 px-4 py-2 rounded-full bg-[#4E5D36] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#D4A359] transition-colors flex items-center gap-1.5"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <p>© 2026 HARVESTORA. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Sourcing</span>
            <span>South Indian Agriculture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
