'use client';

import { motion } from 'framer-motion';
export const ProblemCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  stat: string;
  delay: number;
}> = ({ icon, title, description, stat, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, delay }}
    whileHover={{ y: -10, scale: 1.02 }}
    className="bg-white dark:bg-slate-800/70 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700/50"
  >
    <div className="text-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 text-center">
      {title}
    </h3>
    <p className="text-slate-600 dark:text-slate-300 text-center leading-relajada mb-4">
      {description}
    </p>
    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-lg p-3 text-center">
      <span className="text-sm font-bold text-red-800 dark:text-red-300">
        ⚠️ {stat}
      </span>
    </div>
  </motion.div>
);