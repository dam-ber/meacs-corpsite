import React from 'react';
import { motion } from 'framer-motion';

interface CompanyCardProps {
  name: string;
  delay: number;
}

export default function CompanyCard({ name, delay }: CompanyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="group relative flex items-center justify-center p-6 card overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-accent-dark/10 dark:to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <motion.span 
        className="relative z-10 text-2xl font-bold bg-clip-text text-transparent gradient-bg text-center"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {name}
      </motion.span>
    </motion.div>
  );
}