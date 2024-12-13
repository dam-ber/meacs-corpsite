import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JoinModal({ isOpen, onClose }: JoinModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-4xl bg-white dark:bg-panel-dark rounded-xl shadow-xl"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="p-1">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSffhHfcS1nZDyG17Kzf7BMylaYLPThRyTvxua8mya0cuI_lcw/viewform?embedded=true"
              width="850"
              height="1000"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              className="w-full rounded-lg"
            >
              Loading…
            </iframe>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}