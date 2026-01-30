'use client';

import { motion } from 'framer-motion';

interface SmartSectionHeaderProps {
  title: string;
  highlightedText: string;
  subtitle: string;
  className?: string;
}

export default function SmartSectionHeader({
  title,
  highlightedText,
  subtitle,
  className = ""
}: SmartSectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`text-center mb-8 sm:mb-12 lg:mb-16 px-4 ${className}`}
    >
      <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-termina text-white mb-4"
        >
          {title}{' '}
          <span className="termina-bold bg-gradient-to-r font-bold from-violet-400 via-indigo-400 to-indigo-500 bg-clip-text text-transparent">
            {highlightedText}
          </span>
        </motion.h2>
      </div>
      <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2 font-poppins">
        {subtitle}
      </p>
    </motion.div>
  );
}
