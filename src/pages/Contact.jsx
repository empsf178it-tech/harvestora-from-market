import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  MapPin, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Sprout, 
  Clock, 
  Navigation, 
  ExternalLink,
  Compass,
  MessageCircle
} from 'lucide-react';
import { IMAGES } from '../data/imagesData';
import { useApp } from '../context/AppContext';
import confetti from 'canvas-confetti';
import { 
  XIcon, 
  InstagramIcon, 
  FacebookIcon, 
  LinkedinIcon, 
  YoutubeIcon, 
  WhatsappIcon 
} from '../components/common/SocialIcons';

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

  const socialLinks = [
    {
      name: 'X (formerly Twitter)',
      handle: '@harvestora_x',
      description: 'Latest harvest alerts, crop yields, and direct agricultural updates.',
      icon: XIcon,
      url: 'https://x.com',
      badge: 'Official X Channel',
      color: 'bg-black text-white hover:bg-stone-800'
    },
    {
      name: 'Instagram',
      handle: '@harvestora_farms',
      description: 'Daily visual field notes, soil health stories, and crop photography.',
      icon: InstagramIcon,
      url: 'https://instagram.com',
      badge: 'Field Photos',
      color: 'bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 text-white hover:opacity-90'
    },
    {
      name: 'Facebook',
      handle: '/harvestoraproduce',
      description: 'Farming community events, harvest announcements & traditional recipes.',
      icon: FacebookIcon,
      url: 'https://facebook.com',
      badge: 'Community',
      color: 'bg-[#1877F2] text-white hover:bg-[#0b63d6]'
    },
    {
      name: 'LinkedIn',
      handle: 'Harvestora Farm Networks',
      description: 'B2B wholesale grain sourcing, supply chain transparency & ESG reporting.',
      icon: LinkedinIcon,
      url: 'https://linkedin.com',
      badge: 'B2B & Partners',
      color: 'bg-[#0A66C2] text-white hover:bg-[#08519c]'
    },
    {
      name: 'YouTube',
      handle: '@harvestora_stories',
      description: 'Short documentaries on South Indian heirloom seed conservation and farmers.',
      icon: YoutubeIcon,
      url: 'https://youtube.com',
      badge: 'Video Stories',
      color: 'bg-[#FF0000] text-white hover:bg-[#cc0000]'
    },
    {
      name: 'WhatsApp Business',
      handle: '+91 4362 284 920',
      description: 'Instant chat desk for quick order enquiries and farmer partnership calls.',
      icon: WhatsappIcon,
      url: 'https://wa.me/914362284920',
      badge: 'Direct Chat',
      color: 'bg-[#25D366] text-white hover:bg-[#1da851]'
    }
  ];

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

        {/* Split Form & Contact Info Section */}
        <div className="bg-white rounded-3xl overflow-hidden border border-[#EFEBE4] shadow-xl grid grid-cols-1 lg:grid-cols-12 mb-16">
          
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C160F] via-[#1C160F]/85 to-transparent" />
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

              <div className="space-y-5 text-xs sm:text-sm text-stone-200">
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

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#D4A359] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Dispatch Hours:</span>
                    <span>Morning Fresh Harvest: 6:00 AM - 11:00 AM IST</span>
                  </div>
                </div>
              </div>

              {/* Social Channels Quick Links in Contact Card */}
              <div className="pt-4 border-t border-white/15">
                <span className="text-xs font-semibold text-stone-300 block mb-3">
                  Quick Connect via Social Channels:
                </span>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <a 
                    href="https://x.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-stone-200 hover:bg-[#D4A359] hover:text-[#1C160F] transition-all"
                    title="Follow X (Twitter)"
                    aria-label="X (formerly Twitter)"
                  >
                    <XIcon className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-stone-200 hover:bg-[#D4A359] hover:text-[#1C160F] transition-all"
                    title="Follow Instagram"
                    aria-label="Instagram"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-stone-200 hover:bg-[#D4A359] hover:text-[#1C160F] transition-all"
                    title="Visit Facebook"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-stone-200 hover:bg-[#D4A359] hover:text-[#1C160F] transition-all"
                    title="Connect on LinkedIn"
                    aria-label="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-stone-200 hover:bg-[#D4A359] hover:text-[#1C160F] transition-all"
                    title="Subscribe YouTube"
                    aria-label="YouTube"
                  >
                    <YoutubeIcon className="w-4 h-4" />
                  </a>
                  <a 
                    href="https://wa.me/914362284920" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all"
                    title="Chat on WhatsApp"
                    aria-label="WhatsApp"
                  >
                    <WhatsappIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/10 text-[11px] text-stone-400">
              * Demonstration contact details for client presentation preview.
            </div>
          </div>

        </div>

        {/* Interactive Map Section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4E5D36] tracking-widest uppercase mb-2">
                <Compass className="w-4 h-4" />
                <span>PACK-HOUSE LOCATION & MAP</span>
              </div>
              <h2 className="font-serif-display text-3xl sm:text-4xl text-[#1C160F]">
                Visit Our Agricultural Hub
              </h2>
              <p className="text-stone-600 text-sm mt-1 max-w-xl font-light">
                Nestled along the fertile Cauvery Delta in Thanjavur, Tamil Nadu. Our primary pack-house coordinates regional farmer harvests and cold dispatches.
              </p>
            </div>
            
            <a
              href="https://www.google.com/maps/search/?api=1&query=Thanjavur,+Tamil+Nadu,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#4E5D36] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1C160F] transition-colors shadow-md shrink-0"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Live Directions →</span>
            </a>
          </div>

          <div className="bg-white p-3 sm:p-4 rounded-3xl border border-[#EFEBE4] shadow-xl relative overflow-hidden">
            {/* Embedded Google Map iframe */}
            <div className="relative w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden bg-stone-100">
              <iframe
                title="HARVESTORA Pack-House Hub Map"
                src="https://maps.google.com/maps?q=Thanjavur,+Tamil+Nadu,+India&t=&z=12&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] contrast-[1.05]"
              />

              {/* Floating Overlay Badge on Map */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 max-w-xs bg-[#1C160F]/90 backdrop-blur-md text-white p-4 rounded-2xl border border-white/20 shadow-2xl space-y-2 pointer-events-auto">
                <div className="flex items-center gap-2 text-[#D4A359] text-xs font-bold tracking-wider uppercase">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span>Main Processing Hub</span>
                </div>
                <h4 className="font-serif-display text-lg text-white leading-tight">
                  Thanjavur Pack-House
                </h4>
                <p className="text-stone-300 text-xs font-light">
                  Cauvery River Basin Road, Thanjavur, Tamil Nadu 613001
                </p>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-amber-300 font-mono">
                  <span>GPS: 10.7867° N, 79.1378° E</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>

            {/* Map Highlights Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 px-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF7F2] border border-[#EFEBE4]">
                <div className="w-8 h-8 rounded-full bg-[#4E5D36]/10 text-[#4E5D36] flex items-center justify-center shrink-0">
                  <Sprout className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#1C160F] block">Heirloom Grain Hub</span>
                  <span className="text-[11px] text-stone-500">Seeraga Samba & Karuppu Kavuni</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF7F2] border border-[#EFEBE4]">
                <div className="w-8 h-8 rounded-full bg-[#4E5D36]/10 text-[#4E5D36] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#1C160F] block">Visiting Hours</span>
                  <span className="text-[11px] text-stone-500">Mon - Sat: 9:00 AM - 5:00 PM</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#FAF7F2] border border-[#EFEBE4]">
                <div className="w-8 h-8 rounded-full bg-[#4E5D36]/10 text-[#4E5D36] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#1C160F] block">Farmer Desk</span>
                  <span className="text-[11px] text-stone-500">On-site registration & support</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Social Media Connect Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A359]/15 text-[#B85C38] text-xs font-bold uppercase tracking-widest mb-3">
              <XIcon className="w-3.5 h-3.5" />
              <span>STAY CONNECTED</span>
            </div>
            <h2 className="font-serif-display text-3xl sm:text-4xl text-[#1C160F]">
              Follow Harvestora Across Social Media
            </h2>
            <p className="text-stone-600 text-sm mt-3 font-light leading-relaxed">
              Join our growing community of conscious consumers, chefs, and organic farmers. Get live harvest updates, crop field notes, and farm transparent dispatches.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialLinks.map((social, idx) => {
              const IconComponent = social.icon;
              return (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl border border-[#EFEBE4] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md transition-transform group-hover:scale-105 ${social.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full bg-[#FAF7F2] text-stone-600 border border-[#EFEBE4]">
                        {social.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif-display text-xl text-[#1C160F] flex items-center gap-2">
                        {social.name}
                      </h3>
                      <span className="text-xs font-mono text-[#4E5D36] font-semibold block mt-0.5">
                        {social.handle}
                      </span>
                    </div>

                    <p className="text-stone-600 text-xs font-light leading-relaxed">
                      {social.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#EFEBE4]">
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#1C160F] group-hover:text-[#4E5D36] transition-colors"
                    >
                      <span>Connect on {social.name.split(' ')[0]}</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

