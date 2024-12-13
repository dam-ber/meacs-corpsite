import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import JoinModal from '../join/JoinModal';

export default function Hero() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  return (
    <div className="relative overflow-hidden bg-background dark:bg-background-dark py-32 lg:py-48">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl"
        >
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
            Empowering Diversity in{' '}
            <span className="text-transparent bg-clip-text gradient-bg animate-gradient">
              Cybersecurity
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-xl text-gray-600 dark:text-gray-300"
          >
            Building a vibrant community of Middle Eastern and African cybersecurity professionals through mentorship, education, and collaboration.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex gap-4"
          >
            <button onClick={() => setIsJoinModalOpen(true)} className="btn-primary">
              Join Our Community
            </button>
            <a href="#initiatives" className="btn-secondary">
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </Container>
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/5 dark:bg-accent-dark/5 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-blue-100/5 dark:bg-blue-900/5 blur-3xl"
      />
      
      <JoinModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
    </div>
  );
}