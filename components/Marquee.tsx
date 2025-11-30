import React from 'react';
import { motion } from 'framer-motion';

const Marquee: React.FC<{ text: string; reverse?: boolean }> = ({ text, reverse = false }) => {
  return (
    <div className="w-full overflow-hidden bg-[#FFCC00] py-3">
      <motion.div 
        className="flex whitespace-nowrap"
        initial={{ x: reverse ? "-50%" : "0%" }}
        animate={{ x: reverse ? "0%" : "-50%" }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        {[...Array(8)].map((_, i) => (
          <span key={i} className="text-black text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none px-6">
            {text} <span className="text-white/50">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;