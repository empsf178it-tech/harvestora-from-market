import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Sprout, ShoppingBag, ShieldCheck, ChevronDown } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Harvest Boxes', path: '/subscriptions' },
  {
    name: 'Our Farms',
    dropdown: [
      { name: 'Farm Traceability', path: '/traceability', desc: 'Scan & trace crop origins' },
      { name: 'Our Farmers', path: '/farmers', desc: 'Meet our regional growers' }
    ]
  },
  { name: 'Journal', path: '/journal' },
  { name: 'Contact', path: '/contact' }
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useApp();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'glass-nav py-3.5 shadow-sm border-b border-[#EFEBE4]/80 text-[#2C2A29]'
            : isHomePage
            ? 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5 text-white'
            : 'bg-[#FAF7F2]/90 backdrop-blur-md py-4 border-b border-[#EFEBE4] text-[#2C2A29]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              isScrolled || !isHomePage
                ? 'bg-[#4E5D36] text-[#FAF7F2]'
                : 'bg-white/20 backdrop-blur-sm text-white group-hover:bg-[#4E5D36]'
            }`}>
              <Sprout className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-display text-xl sm:text-2xl font-bold tracking-tight leading-none">
                HARVESTORA
              </span>
              <span className={`text-[9px] tracking-[0.22em] font-semibold uppercase mt-0.5 ${
                isScrolled || !isHomePage ? 'text-[#B85C38]' : 'text-amber-200'
              }`}>
                DIRECT FARM MARKETPLACE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              if (link.dropdown) {
                const isChildActive = link.dropdown.some((sub) => location.pathname === sub.path);
                const isOpen = activeDropdown === link.name;
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`relative text-xs font-semibold tracking-wide uppercase transition-colors duration-200 py-1 flex items-center gap-1.5 ${
                        isChildActive
                          ? isScrolled || !isHomePage
                            ? 'text-[#4E5D36] font-bold'
                            : 'text-amber-300 font-bold'
                          : isScrolled || !isHomePage
                          ? 'text-[#2C2A29]/80 hover:text-[#4E5D36]'
                          : 'text-white/85 hover:text-white'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                      {isChildActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${
                            isScrolled || !isHomePage ? 'bg-[#4E5D36]' : 'bg-amber-300'
                          }`}
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>

                    {/* Dropdown Menu Overlay */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.96 }}
                          transition={{ duration: 0.18, ease: 'easeOut' }}
                          className="absolute top-full left-0 mt-2 w-64 bg-[#FAF7F2] text-[#2C2A29] rounded-2xl p-2.5 shadow-2xl border border-[#EFEBE4] z-50"
                        >
                          {link.dropdown.map((sub) => {
                            const isSubActive = location.pathname === sub.path;
                            return (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                className={`block p-3 rounded-xl transition-all duration-200 ${
                                  isSubActive
                                    ? 'bg-[#4E5D36]/10 text-[#4E5D36] font-semibold'
                                    : 'hover:bg-[#EFEBE4]/70 text-[#2C2A29]'
                                }`}
                              >
                                <div className="text-xs font-bold uppercase tracking-wider">{sub.name}</div>
                                {sub.desc && (
                                  <div className="text-[11px] text-[#2C2A29]/60 mt-0.5 normal-case font-normal">
                                    {sub.desc}
                                  </div>
                                )}
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-xs font-semibold tracking-wide uppercase transition-colors duration-200 py-1 ${
                    isActive
                      ? isScrolled || !isHomePage
                        ? 'text-[#4E5D36] font-bold'
                        : 'text-amber-300 font-bold'
                      : isScrolled || !isHomePage
                      ? 'text-[#2C2A29]/80 hover:text-[#4E5D36]'
                      : 'text-white/85 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full ${
                        isScrolled || !isHomePage ? 'bg-[#4E5D36]' : 'bg-amber-300'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Cart & Quick Order CTA */}
          <div className="flex items-center gap-3">
            {/* Interactive Shopping Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className={`relative p-2.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                isScrolled || !isHomePage
                  ? 'bg-[#EFEBE4] text-[#1C160F] hover:bg-[#4E5D36] hover:text-white'
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-[#1C160F]'
              }`}
              title="Open Basket"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#B85C38] text-white text-[10px] font-extrabold rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* CTA Button */}
            <Link
              to="/products"
              className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-sm ${
                isScrolled || !isHomePage
                  ? 'bg-[#4E5D36] text-white hover:bg-[#3B4729] hover:shadow-md'
                  : 'bg-white text-[#1C160F] hover:bg-[#D4A359] hover:text-white'
              }`}
            >
              <span>Shop Harvest</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full xl:hidden transition-colors ${
                isScrolled || !isHomePage
                  ? 'text-[#1C160F] hover:bg-[#EFEBE4]'
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-30 bg-[#1C160F] text-[#FAF7F2] pt-24 px-6 pb-8 flex flex-col justify-between overflow-y-auto"
          >
            <div className="space-y-6 max-w-md mx-auto w-full pt-4">
              <div className="flex items-center justify-between">
                <p className="text-[11px] font-bold tracking-[0.25em] text-[#D4A359] uppercase">
                  DIRECT FARM NAVIGATION
                </p>
                <div className="flex items-center gap-1 text-[10px] text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  100% Pesticide Free
                </div>
              </div>
              <div className="space-y-2 divide-y divide-[#231B12]/80">
                {NAV_LINKS.map((link, idx) => {
                  if (link.dropdown) {
                    const isAnyChildActive = link.dropdown.some((sub) => location.pathname === sub.path);
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04 * idx, duration: 0.25 }}
                        className="pt-2.5 space-y-2"
                      >
                        <button
                          onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                          className="w-full flex items-center justify-between text-xl font-serif-display text-[#FAF7F2] py-1"
                        >
                          <span className={isAnyChildActive ? 'text-[#D4A359] font-bold' : ''}>
                            {link.name}
                          </span>
                          <ChevronDown className={`w-5 h-5 text-stone-400 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {mobileDropdownOpen && (
                          <div className="pl-4 space-y-2 border-l-2 border-[#D4A359]/40 my-1">
                            {link.dropdown.map((sub) => (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                className={`text-base font-serif-display block py-1.5 transition-colors ${
                                  location.pathname === sub.path
                                    ? 'text-[#D4A359] font-bold'
                                    : 'text-stone-300 hover:text-white'
                                }`}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * idx, duration: 0.25 }}
                      className="pt-2.5"
                    >
                      <Link
                        to={link.path}
                        className={`text-xl font-serif-display block transition-colors ${
                          location.pathname === link.path
                            ? 'text-[#D4A359] pl-2 font-bold'
                            : 'text-[#FAF7F2] hover:text-[#D4A359]'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="max-w-md mx-auto w-full pt-6 border-t border-white/10 mt-6 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#4E5D36] text-white font-bold text-xs tracking-wider uppercase shadow-lg"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>View Basket ({cartCount} Items)</span>
              </button>
              <div className="text-center text-[11px] text-stone-400">
                Fresh Harvest Delivered from Farm to Doorstep in 24 Hours.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
