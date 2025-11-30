
import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { PortfolioItem, PortfolioCategory } from '../types';
import { Play, X, TrendingUp, Youtube, Smartphone, Layers, MonitorPlay } from 'lucide-react';

// --- Improved Mock Data with YouTube Integrations ---
const items: PortfolioItem[] = [
    // Storytelling (Long Form / YouTube)
    { 
        id: 1, 
        title: 'Origins of Light', 
        category: 'storytelling', 
        thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop', 
        youtubeId: 'LXb3EKWsInQ', 
        client: 'Nat Geo' 
    },
    { 
        id: 2, 
        title: 'The Artisan', 
        category: 'storytelling', 
        thumbnail: 'https://images.unsplash.com/photo-1518933165971-611dbc9c412d?q=80&w=1000&auto=format&fit=crop', 
        youtubeId: '9bZkp7q19f0', 
        client: 'Craft Co' 
    },
    { 
        id: 3, 
        title: 'Urban Rhythm', 
        category: 'storytelling', 
        thumbnail: 'https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=1000&auto=format&fit=crop', 
        youtubeId: 'u31qwQUeGuM', 
        client: 'Sony' 
    },
    
    // Shortform (Vertical / Social)
    { 
        id: 4, 
        title: 'Tokyo Night Walk', 
        category: 'shortform', 
        thumbnail: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000&auto=format&fit=crop', 
        videoSrc: 'https://videos.pexels.com/video-files/5827670/5827670-uhd_2732_1440_25fps.mp4', 
        stats: '86% Retention',
        client: 'TravelJapan'
    },
    { 
        id: 5, 
        title: 'Sneaker Drop', 
        category: 'shortform', 
        thumbnail: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1000&auto=format&fit=crop', 
        videoSrc: 'https://videos.pexels.com/video-files/4125026/4125026-uhd_2560_1440_25fps.mp4', 
        stats: '1.2M Views',
        client: 'Nike'
    },
    { 
        id: 6, 
        title: 'Coffee Ritual', 
        category: 'shortform', 
        thumbnail: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop', 
        videoSrc: 'https://videos.pexels.com/video-files/3196582/3196582-uhd_2560_1440_25fps.mp4', 
        stats: '45k Shares',
        client: 'Starbucks'
    },

    // Motion (Graphics)
    { 
        id: 7, 
        title: 'Neon Cyberpunk', 
        category: 'motion', 
        thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop', 
        videoSrc: 'https://videos.pexels.com/video-files/3205916/3205916-uhd_2560_1440_25fps.mp4',
        client: 'CDPR'
    },
    { 
        id: 8, 
        title: 'Logo Reveal', 
        category: 'motion', 
        thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop', 
        videoSrc: 'https://videos.pexels.com/video-files/2759477/2759477-hd_1920_1080_30fps.mp4',
        client: 'Startup'
    },
    { 
        id: 9, 
        title: 'Abstract Flow', 
        category: 'motion', 
        thumbnail: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop', 
        videoSrc: 'https://videos.pexels.com/video-files/856973/856973-hd_1920_1080_25fps.mp4',
        client: 'Adobe'
    },
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory | 'all'>('storytelling');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = items.filter(item => activeCategory === 'all' || item.category === activeCategory);

  return (
    <section id="portfolio" className="relative w-full min-h-screen bg-[#050505] py-24 pb-48">
      
      {/* Background Grid Accent */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16 flex flex-col items-center justify-center text-center">
            <h2 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter mb-4">
                Media <span className="text-[#FFCC00]">Vault</span>
            </h2>
            <div className="flex gap-2 items-center text-gray-400 text-sm font-mono tracking-widest uppercase">
                <div className="w-2 h-2 bg-[#FFCC00] rounded-full animate-pulse" />
                Select Category to Morph Layout
            </div>
        </div>

        {/* Layout Engine */}
        <LayoutGroup>
            <motion.div layout className="w-full min-h-[600px]">
                
                {/* MODE: SHORTFORM (Vertical Grid) */}
                {activeCategory === 'shortform' ? (
                     <motion.div 
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    >
                        {filteredItems.map((item) => (
                            <ShortformCard key={item.id} item={item} onClick={() => setSelectedItem(item)} />
                        ))}
                    </motion.div>
                ) : 
                
                /* MODE: STORYTELLING (Cinematic 16:9 Grid) */
                activeCategory === 'storytelling' ? (
                    <motion.div 
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto"
                    >
                         {filteredItems.map((item) => (
                            <StorytellingCard key={item.id} item={item} onClick={() => setSelectedItem(item)} />
                        ))}
                    </motion.div>
                ) :

                /* MODE: MOTION / ALL (Standard Grid) */
                (
                    <motion.div 
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8"
                    >
                         {filteredItems.map((item) => (
                            <MotionCard key={item.id} item={item} onClick={() => setSelectedItem(item)} />
                        ))}
                    </motion.div>
                )}
                
            </motion.div>
        </LayoutGroup>
      </div>

      {/* Floating Category Filter */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 w-auto max-w-[95vw]">
        <div className="bg-[#111]/90 backdrop-blur-xl border border-white/10 rounded-full p-2 flex items-center shadow-2xl overflow-x-auto no-scrollbar">
            <FilterTab 
                label="Storytelling" 
                icon={<MonitorPlay size={16} />} 
                isActive={activeCategory === 'storytelling'} 
                onClick={() => setActiveCategory('storytelling')} 
            />
            <div className="w-[1px] h-4 bg-white/10 mx-1" />
            <FilterTab 
                label="Shortform" 
                icon={<Smartphone size={16} />} 
                isActive={activeCategory === 'shortform'} 
                onClick={() => setActiveCategory('shortform')} 
            />
            <div className="w-[1px] h-4 bg-white/10 mx-1" />
            <FilterTab 
                label="Motion" 
                icon={<Layers size={16} />} 
                isActive={activeCategory === 'motion'} 
                onClick={() => setActiveCategory('motion')} 
            />
        </div>
      </div>

      {/* Cinema Mode Modal */}
      <AnimatePresence>
        {selectedItem && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] bg-black/98 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-8"
            >
                {/* Close Button */}
                <button 
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-8 right-8 z-50 p-4 bg-white/10 hover:bg-[#FFCC00] rounded-full group transition-all"
                >
                    <X className="text-white group-hover:text-black" size={24} />
                </button>

                <div className={`w-full relative shadow-2xl border border-white/10 overflow-hidden bg-black ${selectedItem.category === 'shortform' ? 'max-w-md aspect-[9/16] rounded-3xl' : 'max-w-6xl aspect-video rounded-lg'}`}>
                    
                    {selectedItem.youtubeId ? (
                         <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${selectedItem.youtubeId}?autoplay=1&rel=0`}
                            title={selectedItem.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ) : (
                        <video 
                            src={selectedItem.videoSrc} 
                            className="w-full h-full object-cover" 
                            controls 
                            autoPlay
                            loop={selectedItem.category === 'motion'}
                        />
                    )}
                </div>

                <div className="mt-8 text-center">
                    <h3 className="text-3xl font-black uppercase text-white mb-2">{selectedItem.title}</h3>
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-[#FFCC00] font-mono text-sm uppercase px-3 py-1 border border-[#FFCC00] rounded-full">
                            {selectedItem.client || selectedItem.category}
                        </span>
                        {selectedItem.stats && (
                            <span className="text-gray-400 font-mono text-sm uppercase">
                                {selectedItem.stats}
                            </span>
                        )}
                    </div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

// --- Sub-Components ---

const FilterTab = ({ label, icon, isActive, onClick }: { label: string, icon: React.ReactNode, isActive: boolean, onClick: () => void }) => (
    <button
        onClick={onClick}
        className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wide transition-all ${
            isActive 
            ? 'bg-[#FFCC00] text-black shadow-[0_0_15px_rgba(255,204,0,0.4)] scale-105' 
            : 'text-gray-400 hover:text-white hover:bg-white/10'
        }`}
    >
        {icon}
        <span className="whitespace-nowrap">{label}</span>
    </button>
);

// 1. Storytelling Card (YouTube/Cinematic)
const StorytellingCard = ({ item, onClick }: { item: PortfolioItem, onClick: () => void }) => {
    return (
        <motion.div 
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative cursor-pointer"
            onClick={onClick}
        >
            <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-gray-900">
                <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700" 
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-[#FFCC00] transition-all duration-300">
                        {item.youtubeId ? (
                            <Youtube className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-black fill-current" />
                        ) : (
                             <Play className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-black fill-current ml-1" />
                        )}
                    </div>
                </div>

                {/* Client Tag */}
                <div className="absolute top-4 left-4">
                    <span className="bg-black/60 backdrop-blur-md text-white text-xs font-bold uppercase px-3 py-1 rounded-sm border border-white/10">
                        {item.client || "Client Work"}
                    </span>
                </div>
            </div>

            <div className="mt-4 flex justify-between items-end">
                <div>
                    <h3 className="text-2xl font-bold text-white uppercase leading-none mb-1 group-hover:text-[#FFCC00] transition-colors">{item.title}</h3>
                    <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">YouTube / Documentary</p>
                </div>
                <div className="w-8 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-[#FFCC00] transition-all" />
            </div>
        </motion.div>
    );
};

// 2. Shortform Card (Vertical/Reels)
const ShortformCard = ({ item, onClick }: { item: PortfolioItem, onClick: () => void }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div 
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-[9/16] relative group cursor-pointer overflow-hidden rounded-2xl bg-gray-900 border border-white/10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
             {isHovered && item.videoSrc ? (
                <video src={item.videoSrc} className="w-full h-full object-cover" autoPlay muted loop playsInline />
            ) : (
                <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100" />
            )}

            {/* Floating Stats */}
            {item.stats && (
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-2 z-20">
                    <TrendingUp size={12} className="text-[#FFCC00]" />
                    <span className="text-[10px] font-bold text-white uppercase">{item.stats}</span>
                </div>
            )}

            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-20 translate-y-2 group-hover:translate-y-0 transition-transform">
                 <h3 className="text-lg font-bold text-white leading-tight mb-1">{item.title}</h3>
                 <p className="text-[10px] text-[#FFCC00] uppercase tracking-wider font-bold">{item.client}</p>
            </div>
        </motion.div>
    );
};

// 3. Motion Card (Square/Grid)
const MotionCard = ({ item, onClick }: { item: PortfolioItem, onClick: () => void }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <motion.div 
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="aspect-square relative group cursor-pointer overflow-hidden bg-gray-900 border border-white/5"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
             {isHovered && item.videoSrc ? (
                <video src={item.videoSrc} className="w-full h-full object-cover grayscale" autoPlay muted loop playsInline />
            ) : (
                <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 grayscale transition-all" />
            )}
            
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                <span className="text-[#FFCC00] font-black text-4xl tracking-tighter uppercase mix-blend-difference">View</span>
            </div>

            <div className="absolute bottom-4 left-4 z-20">
                <h3 className="text-sm font-bold text-white uppercase">{item.title}</h3>
            </div>
        </motion.div>
    );
};

export default Portfolio;
