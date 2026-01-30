'use client';

import { motion } from 'framer-motion';

interface SmartFunctionCardProps {
  image: string;
  title: string;
  description: string;
  details: string[];
  index: number;
  className?: string;
}

export default function SmartFunctionCard({
  image,
  title,
  description,
  details,
  index,
 
}: SmartFunctionCardProps) {
  return (
    <motion.div
      key={index}
    
    >
      <motion.div
     
        className="relative group"
      >
        {/* Fondo con gradiente y efectos */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-indigo-500/5 rounded-2xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
        
      
        
        {/* Contenido */}
        <div className="relative z-10 p-6 lg:p-8 rounded-2xl backdrop-blur-sm">
          <div className="flex items-start gap-4 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-indigo-500/20 rounded-xl blur-xl" />
              <img 
                src={image} 
                alt={title} 
                className="relative w-16 h-16 lg:w-20 lg:h-20 object-contain" 
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl font-termina text-white mb-2">
                Smart{' '}
                <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-violet-500 bg-clip-text text-transparent font-bold">
                  {title}
                </span>
              </h2>
              <p className="text-gray-300 text-sm lg:text-base leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                {description}
              </p>
            </div>
          </div>
        
          <div className="space-y-4">
            {details.map((detail, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + (index * 0.1) }}
                className="flex items-start gap-4 group/item"
              >
                <div className="relative flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-full" />
                  <div className="absolute inset-0 w-2 h-2 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-full animate-pulse opacity-50" />
                </div>
                <span className="text-gray-300 text-md leading-relaxed group-hover:text-gray-100 group/item:hover:text-white transition-colors duration-300">
                  {detail}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
