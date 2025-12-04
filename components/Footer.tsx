import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#050505] pt-24 pb-12 overflow-hidden border-t border-white/5 text-white">

      <div className="container mx-auto px-4 md:px-12 flex flex-col items-center text-center">

        <p className="text-gray-500 font-mono text-sm uppercase tracking-[0.2em] mb-8">Available for freelance</p>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12"
        >
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Scale?</span>
        </motion.h2>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdAhBQq6Dih_qPEZaAFvh5TI8r66arw87B7bgwJoCFgRHF2oA/viewform?usp=header"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full border border-white/30 hover:border-[#FFCC00] transition-colors duration-300 inline-block"
        >
          <div className="absolute inset-0 w-full h-full bg-[#FFCC00] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          <div className="relative flex items-center gap-4">
            <span className="text-sm md:text-lg font-bold uppercase tracking-widest text-white group-hover:text-black transition-colors">Book Production Slot</span>
            <ArrowUpRight className="text-white group-hover:text-black transition-colors" />
          </div>
        </a>

      </div>

      <div className="mt-32 border-t border-white/10 pt-12">
        <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 opacity-50 text-xs uppercase tracking-widest">
          <span>© 2024 Jayanth DN</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#FFCC00]">Instagram</a>
            <a href="#" className="hover:text-[#FFCC00]">Twitter</a>
            <a href="#" className="hover:text-[#FFCC00]">LinkedIn</a>
          </div>
          <span>Bangalore, India</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;