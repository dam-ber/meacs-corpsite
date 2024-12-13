import React from 'react';
import { motion } from 'framer-motion';
import CompanyCard from './CompanyCard';
import { companies } from './companyData';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

export default function CompanyGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-3"
    >
      {companies.map((company, index) => (
        <CompanyCard
          key={company}
          name={company}
          delay={index * 0.1}
        />
      ))}
    </motion.div>
  );
}