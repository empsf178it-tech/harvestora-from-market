import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { QuickViewModal } from './components/common/QuickViewModal';
import { EnquiryModal } from './components/common/EnquiryModal';
import { JournalArticleModal } from './components/common/JournalArticleModal';
import { CartDrawer } from './components/common/CartDrawer';
import { Toast } from './components/common/Toast';

// Pages
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Subscriptions } from './pages/Subscriptions';
import { Traceability } from './pages/Traceability';
import { Farms } from './pages/Farms';
import { Process } from './pages/Process';
import { Farmers } from './pages/Farmers';
import { About } from './pages/About';
import { Journal } from './pages/Journal';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

// Scroll to top component on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Animated Page Routes Component
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/traceability" element={<Traceability />} />
          <Route path="/farms" element={<Farms />} />
          <Route path="/process" element={<Process />} />
          <Route path="/farmers" element={<Farmers />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export function App() {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col justify-between bg-[#FAF7F2] text-[#2C2A29]">
          <Navbar />
          <main className="grow overflow-hidden">
            <AnimatedRoutes />
          </main>
          <Footer />

          {/* Global Modals & Notifications */}
          <CartDrawer />
          <QuickViewModal />
          <EnquiryModal />
          <JournalArticleModal />
          <Toast />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
