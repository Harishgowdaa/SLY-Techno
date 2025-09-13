import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  showButtons?: boolean;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title, 
  subtitle, 
  showButtons = false,
  backgroundImage 
}) => {
  return (
    <section className={`relative min-h-[70vh] flex items-center justify-center ${backgroundImage ? '' : 'bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900'}`}>
      {backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/90 via-slate-700/90 to-slate-900/90" />
      )}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-slate-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>

          {showButtons && (
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300 transform hover:scale-105">
                <span>Explore Services</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-300">
                <Play className="h-5 w-5" />
                <span>Contact Us</span>
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute bottom-10 left-10 w-20 h-20 border border-yellow-500/30 rounded-full"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity }
        }}
      />
      <motion.div
        className="absolute top-20 right-20 w-16 h-16 border border-yellow-500/20 rounded-full"
        animate={{ 
          rotate: -360,
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity }
        }}
      />
    </section>
  );
};

export default HeroSection;