import React from 'react';
import { NavLink } from '../types';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

const links: NavLink[] = [
  { label: 'Work', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navigation: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center text-white mix-blend-difference"
    >
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-[#FFCC00] rounded-sm flex items-center justify-center">
            <span className="font-black text-black text-xl leading-none">J</span>
        </div>
        <span className="font-bold text-xl tracking-tighter">DN</span>
      </div>

      <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest">
        {links.map((link) => (
          <a key={link.label} href={link.href} className="hover:text-[#FFCC00] transition-colors">
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button className="md:hidden text-white">
            <Menu className="w-6 h-6" />
        </button>
        <button className="hidden md:block px-6 py-2 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#FFCC00] hover:border-[#FFCC00] hover:text-black transition-all">
            Book Call
        </button>
      </div>
    </motion.nav>
  );
};

export default Navigation;