import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import confetti from 'canvas-confetti';

export const EnquiryModal = () => {
  const { enquiryProduct, closeEnquiry, showToast } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: '5 kg',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!enquiryProduct) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast(`Enquiry received for ${enquiryProduct.name}. We will get back to you!`);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#4E5D36', '#D4A359', '#B85C38']
    });
    setTimeout(() => {
      setSubmitted(false);
      closeEnquiry();
    }, 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-[#EFEBE4]"
        >
          <button
            onClick={closeEnquiry}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#EFEBE4] text-[#1C160F] flex items-center justify-center hover:bg-[#1C160F] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#4E5D36] text-amber-300 flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif-display text-2xl text-[#1C160F]">
                Enquiry Submitted!
              </h3>
              <p className="text-stone-600 text-sm max-w-xs mx-auto">
                Thank you for your interest in <strong>{enquiryProduct.name}</strong>. Our farm relations team will contact you shortly.
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#EFEBE4]">
                <img
                  src={enquiryProduct.image}
                  alt={enquiryProduct.name}
                  className="w-12 h-12 rounded-xl object-cover"
                />
                <div>
                  <span className="text-[10px] font-bold text-[#B85C38] uppercase tracking-wider">
                    PRODUCT ENQUIRY
                  </span>
                  <h3 className="font-serif-display text-xl text-[#1C160F]">
                    {enquiryProduct.name}
                  </h3>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#1C160F] uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#EFEBE4] text-sm text-[#1C160F] focus:outline-none focus:border-[#4E5D36]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1C160F] uppercase tracking-wider mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#EFEBE4] text-sm text-[#1C160F] focus:outline-none focus:border-[#4E5D36]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#1C160F] uppercase tracking-wider mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#EFEBE4] text-sm text-[#1C160F] focus:outline-none focus:border-[#4E5D36]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1C160F] uppercase tracking-wider mb-1">
                    Estimated Quantity / Pack Size
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#EFEBE4] text-sm text-[#1C160F] focus:outline-none focus:border-[#4E5D36]"
                  >
                    <option>5 kg Trial Pack</option>
                    <option>10 kg Family Pack</option>
                    <option>25 kg Jute Bag</option>
                    <option>Bulk Farm Order (100+ kg)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1C160F] uppercase tracking-wider mb-1">
                    Specific Requirements or Questions
                  </label>
                  <textarea
                    rows="3"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Tell us if you need organic certification details or special delivery dates..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-[#EFEBE4] text-sm text-[#1C160F] focus:outline-none focus:border-[#4E5D36]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#1C160F] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#4E5D36] transition-colors flex items-center justify-center gap-2 mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Product Enquiry</span>
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
