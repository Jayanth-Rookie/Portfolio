import React, { useState } from 'react';
import { Exhibition } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const exhibitionsData: Exhibition[] = [
  { id: 1, title: 'Video Editor', subtitle: 'CutCraze', location: 'Remote', date: '2023 - Present' },
  { id: 2, title: 'Video Editor', subtitle: 'Multiple Cafes', location: 'Mysuru', date: '2021 - Present' },
  { id: 3, title: 'Content Creator', subtitle: 'Freelance', location: 'Global', date: '2019 - Present' },
];

const ExhibitionRow: React.FC<{ 
    exhibition: Exhibition; 
    isOpen: boolean; 
    onClick: () => void 
}> = ({ exhibition, isOpen, onClick }) => {
    const [aiDescription, setAiDescription] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const generateInsight = async (e: React.MouseEvent) => {
        e.stopPropagation();
        if (aiDescription) return;
        setLoading(true);

        try {
            const apiKey = process.env.API_KEY;
            if (!apiKey) {
                setAiDescription("API Key not found. Please configure the environment.");
                return;
            }

            const ai = new GoogleGenAI({ apiKey });
            const prompt = `Write a professional, concise job description for a ${exhibition.title} role at ${exhibition.subtitle}. Focus on high-impact video editing results.`;
            
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
            });
            
            setAiDescription(response.text);
        } catch (error) {
            console.error("Gemini API Error:", error);
            setAiDescription("Could not fetch insight at this moment.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="border-b border-white/10">
            <div 
                onClick={onClick}
                className="py-8 flex flex-col md:flex-row md:items-center justify-between cursor-pointer group hover:bg-white/5 transition-colors px-4"
            >
                <div className="flex items-baseline gap-4 md:gap-12 w-full md:w-1/2">
                    <span className="text-sm font-mono text-[#FFCC00]">0{exhibition.id}</span>
                    <h3 className="text-2xl md:text-3xl font-bold font-['Syne'] text-white group-hover:ml-4 transition-all duration-300">
                        {exhibition.title}
                    </h3>
                </div>

                <div className="flex items-center justify-between w-full md:w-1/2 mt-4 md:mt-0">
                    <div className="text-sm md:text-base text-gray-400">
                        <p className="text-white">{exhibition.subtitle}</p>
                        <p className="opacity-60">{exhibition.date}</p>
                    </div>
                    <button className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                         <ArrowRight size={24} className="text-[#FFCC00]" />
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-[#0A0A0A]"
                    >
                        <div className="p-8 md:p-12 border-t border-dashed border-white/10">
                             <div className="flex flex-col justify-center max-w-3xl">
                                 <h4 className="text-lg font-bold mb-4 text-[#FFCC00]">Role Overview</h4>
                                 <p className="text-gray-400 mb-6 leading-relaxed">
                                     {aiDescription || "Leading post-production workflows, managing a team of junior editors, and delivering high-fidelity assets for global brands. Specialized in color grading and sound design."}
                                 </p>
                                 
                                 <div className="flex gap-4">
                                     {!aiDescription && (
                                         <button 
                                            onClick={generateInsight}
                                            disabled={loading}
                                            className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-white hover:text-[#FFCC00] transition-colors"
                                         >
                                             {loading ? (
                                                 <span className="animate-pulse">Analyzing...</span>
                                             ) : (
                                                 <>
                                                    <Sparkles size={16} />
                                                    Generate Role Details
                                                 </>
                                             )}
                                         </button>
                                     )}
                                 </div>
                             </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Exhibitions: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="exhibitions" className="py-24 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-4 md:px-12">
            <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-16 tracking-tighter">
                Experience
            </h2>
            <div className="border-t border-white/10">
                {exhibitionsData.map((ex) => (
                    <ExhibitionRow 
                        key={ex.id} 
                        exhibition={ex} 
                        isOpen={openId === ex.id} 
                        onClick={() => setOpenId(openId === ex.id ? null : ex.id)}
                    />
                ))}
            </div>
        </div>
    </section>
  );
};

export default Exhibitions;