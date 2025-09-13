import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  delay?: number;
}

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  image, 
  icon, 
  children, 
  className = '',
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className={`bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${className}`}
    >
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <motion.img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
      
      {icon && (
        <div className="mb-4 text-yellow-500">
          {icon}
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-slate-800 mb-3">{title}</h3>
      
      {description && (
        <p className="text-slate-600 mb-4">{description}</p>
      )}
      
      {children}
    </motion.div>
  );
};

export default Card;