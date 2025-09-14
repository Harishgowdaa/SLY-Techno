import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import HeroSection from '../components/HeroSection';

// Import the uploaded images
import image1 from '../assets/img1.jpeg';
import image2 from '../assets/img2.jpeg';
import image3 from '../assets/img3.jpeg';
import cnc from '../assets/cnc.png';
import vmc from '../assets/vmc.png';
import smartImg from '../assets/smart.webp';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      image: image1,
      title: 'Precision Machined Components Set 1',
      description: 'High-precision CNC machined components showcasing our manufacturing capabilities',
      // category: 'CNC Machining'
    },
    {
      id: 2,
      image: image2,
      title: 'Precision Machined Components Set 2',
      description: 'Complex geometries and tight tolerances achieved through advanced machining',
      // category: 'Complex Parts'
    },
    {
      id: 3,
      image: image3,
      title: 'Precision Machined Components Set 3',
      description: 'Industrial components manufactured for aerospace and tooling applications',
      // category: 'Industrial Parts'
    },
    // Duplicate items to show a fuller gallery
    {
      id: 4,
      image: cnc,
      title: 'CNC Machine',
      description: 'An automated tool controlled by pre-programmed computer software to perform precise manufacturing tasks like cutting, drilling, and milling',
      // category: 'Tooling'
    },
    {
      id: 5,
      image: vmc,
      title: 'VMC Machine',
      description: 'Machine with a vertically oriented spindle that performs various high-precision milling, drilling, and tapping operations on a workpiece',
      // category: 'Aerospace'
    },
    {
      id: 6,
      image: smartImg,
      title: 'Smart Tap',
      description: 'A specific servo-driven electric tapping machine',
      // category: 'Aerospace'
    },
  ];

  const categories = ['All', 'CNC Machining', 'Complex Parts', 'Industrial Parts', 'Tooling', 'Aerospace', 'Heavy Machinery'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item?.category === activeCategory);

  return (
    <div className="min-h-screen">
      <HeroSection 
        title="Gallery"
        subtitle="Showcase of Our Precision Manufacturing Excellence"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-yellow-500 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div> */}

          {/* Gallery Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                      <button
                        onClick={() => setSelectedImage(item.image)}
                        className="opacity-0 group-hover:opacity-100 bg-white text-slate-800 p-3 rounded-full transition-all duration-300 transform scale-75 group-hover:scale-100 hover:bg-yellow-500 hover:text-white"
                      >
                        <ZoomIn className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      {/* <span className="text-sm text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">
                        {item.category}
                      </span> */}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Stats Section */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            {[
              { number: '500+', label: 'Components Manufactured', color: 'text-blue-600' },
              { number: '50+', label: 'Unique Designs', color: 'text-green-600' },
              { number: '99.8%', label: 'Quality Success Rate', color: 'text-yellow-600' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-slate-50 p-8 rounded-lg"
              >
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div> */}
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-5xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Gallery item"
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white text-slate-800 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;