
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Mouse Parallax State
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const springConfig = { damping: 25, stiffness: 120 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      // Calculate normalized position (-1 to 1)
      const x = (clientX / innerWidth) * 2 - 1;
      const y = (clientY / innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Text parallax transforms
  const textX = useTransform(mouseX, [-1, 1], [-20, 20]);
  const textY = useTransform(mouseY, [-1, 1], [-20, 20]);
  const subtextX = useTransform(mouseX, [-1, 1], [15, -15]); // Opposite direction

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.19, 1, 0.22, 1], // Fluid cinematic ease
      },
    },
  };

  const firstName = "JAYANTH".split("");
  const lastName = "DN".split("");

  return (
    <header className="relative w-full h-screen flex flex-col justify-end pb-24 px-4 md:px-12 overflow-hidden bg-[#050505]">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent z-10" />
        <video 
            className="w-full h-full object-cover grayscale contrast-125"
            autoPlay
            loop
            muted
            playsInline
            poster="https://picsum.photos/seed/darkhero/1920/1080"
        >
            <source src="https://videos.pexels.com/video-files/3196582/3196582-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-[95vw] perspective-1000"
      >
        <motion.div 
            className="flex flex-col items-start leading-[0.8]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ x: textX, y: textY }}
        >
            {/* First Name */}
            <div className="overflow-hidden flex">
                {firstName.map((letter, index) => (
                    <motion.span
                        key={index}
                        variants={letterVariants}
                        className="text-[13vw] md:text-[12vw] font-black tracking-tighter uppercase text-white mix-blend-overlay block select-none"
                    >
                        {letter}
                    </motion.span>
                ))}
            </div>
            
            {/* Last Name */}
            <div className="overflow-hidden flex items-baseline">
                {lastName.map((letter, index) => (
                    <motion.span
                        key={index}
                        variants={letterVariants}
                        className="text-[13vw] md:text-[12vw] font-black tracking-tighter uppercase text-white block select-none"
                    >
                        {letter}
                    </motion.span>
                ))}
                <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.4, type: "spring" }}
                    className="text-[13vw] md:text-[12vw] font-black tracking-tighter text-[#FFCC00] ml-2 block leading-none"
                >
                    .
                </motion.span>
            </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
            style={{ x: subtextX }}
            className="mt-12 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8"
        >
            <div className="h-[1px] w-12 md:w-24 bg-[#FFCC00]" />
            <p className="text-xl md:text-2xl font-medium text-gray-300 tracking-wide uppercase font-['Inter']">
                Visual Storyteller <span className="mx-2 text-[#FFCC00]">//</span> Editor
            </p>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 right-8 md:right-12 z-20 hidden md:block"
      >
        <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center animate-bounce text-white/50 backdrop-blur-sm">
            <ArrowDown size={24} />
        </div>
      </motion.div>
    </header>
  );
};

export default Hero;
