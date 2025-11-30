import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Crosshair, Aperture, Monitor, Zap } from 'lucide-react';

const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.9, 1]);
  
  return (
    <section id="about" className="relative w-full bg-[#050505] text-white py-32 overflow-hidden border-t border-white/5">
        
        {/* Decor */}
        <div className="absolute top-12 left-12 opacity-20"><Crosshair className="text-[#FFCC00] w-8 h-8" /></div>
        <div className="absolute bottom-12 right-12 opacity-20"><Crosshair className="text-[#FFCC00] w-8 h-8" /></div>
        
        <div className="container mx-auto px-4 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                <div className="order-2 lg:order-1">
                    <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 leading-[0.9]">
                        Crafting <span className="text-[#FFCC00]">Visual</span> <br/> Impact
                    </h2>
                    <p className="text-gray-400 leading-relaxed text-lg mb-8 max-w-md">
                        I bridge the gap between raw footage and emotional resonance. Specialized in high-retention editing for creators and cinematic storytelling for brands.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <div className="flex items-center gap-2 mb-2 text-[#FFCC00]">
                                <Zap size={20} />
                                <h3 className="font-bold uppercase tracking-wider">Speed</h3>
                            </div>
                            <p className="text-sm text-gray-500">48h turnaround for social assets.</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-2 text-[#FFCC00]">
                                <Monitor size={20} />
                                <h3 className="font-bold uppercase tracking-wider">Software</h3>
                            </div>
                            <p className="text-sm text-gray-500">Premiere Pro, After Effects, DaVinci.</p>
                        </div>
                    </div>
                </div>

                <motion.div 
                    style={{ scale }}
                    className="order-1 lg:order-2 relative w-full aspect-square md:aspect-[4/3] bg-gray-900 rounded-sm overflow-hidden border border-white/10"
                >
                    <img src="https://picsum.photos/seed/editor_setup/800/800" alt="Editor Setup" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" />
                    
                    {/* UI Overlay Elements */}
                    <div className="absolute top-4 left-4 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    
                    <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#050505] to-transparent"></div>
                </motion.div>

            </div>
        </div>
    </section>
  );
};

export default About;