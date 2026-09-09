import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, CheckCircle2, Sprout } from 'lucide-react';
import { IMAGES } from '../data/imagesData';
import { useApp } from '../context/AppContext';
import confetti from 'canvas-confetti';

export const Contact = () => {
  const { showToast } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Sourcing Enquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast('Your message has been sent to HARVESTORA farm team!');
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#4E5D36', '#D4A359', '#B85C38']
    });
    setFormData({ name: '', email: '', phone: '', subject: 'General Sourcing Enquiry', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

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
            <span>GET IN TOUCH</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif-display text-4xl sm:text-6xl text-[#1C160F]"
          >
            Let's start a conversation.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 text-base mt-4 font-light leading-relaxed"
          >
            Whether you have questions about our grain landraces, farm sourcing methods, or bulk orders, we are here to assist.
          </motion.p>
        </div>

        {/* Split Section */}
        <div className="bg-white rounded-3xl overflow-hidden border border-[#EFEBE4] shadow-xl grid grid-cols-1 lg:grid-cols-12 mb-12">
          
          {/* Left Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14">
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#4E5D36] text-amber-300 flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif-display text-3xl text-[#1C160F]">
                  Message Received!
                </h3>
                <p className="text-stone-600 text-sm max-w-sm mx-auto font-light">
                  Thank you for reaching out to HARVESTORA. Our team will review your enquiry and respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-[#1C160F] uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-2xl bg-[#FAF7F2] border border-[#EFEBE4] text-sm text-[#1C160F] focus:outline-none focus:border-[#4E5D36]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-[#1C160F] uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF7F2] border border-[#EFEBE4] text-sm text-[#1C160F] focus:outline-none focus:border-[#4E5D36]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#1C160F] uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF7F2] border border-[#EFEBE4] text-sm text-[#1C160F] focus:outline-none focus:border-[#4E5D36]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1C160F] uppercase tracking-wider mb-2">
                    Subject / Enquiry Type
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#FAF7F2] border border-[#EFEBE4] text-sm text-[#1C160F] focus:outline-none focus:border-[#4E5D36]"
                  >
                    <option>General Sourcing Enquiry</option>
                    <option>Bulk Farm Produce Order</option>
                    <option>Farmer Partner Program</option>
                    <option>Press & Editorial Enquiries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1C160F] uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    rows="5"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your enquiry, specific crop interests, or delivery needs..."
                    className="w-full px-4 py-3 rounded-2xl bg-[#FAF7F2] border border-[#EFEBE4] text-sm text-[#1C160F] focus:outline-none focus:border-[#4E5D36]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#1C160F] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#4E5D36] transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry →</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Farm Image & Contact Details */}
          <div className="lg:col-span-5 relative bg-[#1C160F] text-white p-8 sm:p-12 flex flex-col justify-between overflow-hidden">
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              <img
                src={IMAGES.heroSecondary}
                alt="South Indian Farmland"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C160F] via-[#1C160F]/80 to-transparent" />
            </div>

            <div className="relative z-10 space-y-8">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#D4A359] uppercase">
                  FARM RELATIONS DESK
                </span>
                <h3 className="font-serif-display text-3xl text-white mt-1">
                  HARVESTORA Hub
                </h3>
              </div>

              <div className="space-y-6 text-xs sm:text-sm text-stone-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#D4A359] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Agricultural Pack-House Hub:</span>
                    <span>Cauvery River Basin Road, Thanjavur, Tamil Nadu 613001, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#D4A359] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Email:</span>
                    <span>enquiries@harvestora-produce.demo</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#D4A359] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Phone:</span>
                    <span>+91 4362 284 920 (Mon - Sat, 8:00 AM - 6:00 PM IST)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 border-t border-white/10 text-[11px] text-stone-400">
              * Demonstration contact details for client presentation preview.
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
