"use client";

import { motion } from 'framer-motion';

const HeroGradient = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main hero gradient orb - Blue */}
      <motion.div
        className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-500/40 blur-[160px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
          x: [-100, 0, -100],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Secondary gradient orb - Purple */}
      <motion.div
        className="absolute top-1/4 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/35 blur-[140px]"
        animate={{
          scale: [1.1, 0.9, 1.2],
          opacity: [0.3, 0.5, 0.3],
          y: [0, 50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Tertiary gradient orb - Pink */}
      <motion.div
        className="absolute -bottom-40 left-20 h-[450px] w-[450px] rounded-full bg-pink-500/30 blur-[150px]"
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.25, 0.45, 0.25],
          x: [0, 80, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Additional accent orb - Cyan */}
      <motion.div
        className="absolute top-1/2 left-0 h-[350px] w-[350px] rounded-full bg-cyan-500/25 blur-[130px]"
        animate={{
          scale: [0.9, 1.15, 0.9],
          opacity: [0.2, 0.4, 0.2],
          y: [-50, 50, -50],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Small accent orb - Indigo */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 h-[300px] w-[300px] rounded-full bg-indigo-500/30 blur-[120px]"
        animate={{
          scale: [1.2, 0.95, 1.2],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 180, 360],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};

export default HeroGradient;
