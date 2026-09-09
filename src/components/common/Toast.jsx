import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sprout, CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const Toast = () => {
  const { toastMessage } = useApp();

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 bg-[#1C160F] text-[#FAF7F2] px-5 py-3.5 rounded-2xl shadow-2xl border border-amber-500/30 flex items-center gap-3 max-w-md"
        >
          <div className="w-8 h-8 rounded-full bg-[#4E5D36] text-amber-300 flex items-center justify-center shrink-0">
            <Sprout className="w-4 h-4" />
          </div>
          <p className="text-xs font-semibold leading-snug">
            {toastMessage}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
