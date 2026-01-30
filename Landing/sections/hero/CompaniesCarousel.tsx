'use client';

import React from 'react';
import { motion } from 'framer-motion';

type CompanyItem = {
  id: string;
  name: string;
  nameShort?: string;
  icon?: React.ReactNode;
};

const companies: CompanyItem[] = [
  { id: 'fintoc', name: 'Fintoc' },
  {
    id: 'global66',
    name: 'Global66',
    icon: (
      <svg viewBox="0 0 32 32" className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="16" cy="16" r="12" />
        <path d="M8 16c0-2 2-4 4-4s4 2 4 4-2 4-4 4-4-2-4-4" />
        <path d="M16 8v8l4 4" />
      </svg>
    ),
  },
  { id: 'copec', name: 'COPEC FLUX', nameShort: 'FLUX' },
  {
    id: 'reuse',
    name: 'reuse',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 4v4l3 3" />
        <path d="M4 12a8 8 0 1 1 8 8" />
        <path d="M12 20v-4l-3-3" />
      </svg>
    ),
  },
  {
    id: 'wift',
    name: 'wift',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 12h14l-4-6" />
        <path d="M19 12H5l4 6" />
      </svg>
    ),
  },
  {
    id: 'uai',
    name: 'Universidad Adolfo Ibáñez',
    nameShort: 'UAI',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 4L4 20h4l4-12 4 12h4L12 4z" />
      </svg>
    ),
  },
  { id: 'diio', name: 'diio' },
  { id: 'buk', name: 'Buk' },
  { id: 'xepelin', name: 'Xepelin' },
  { id: 'comparachile', name: 'ComparaOnline', nameShort: 'Compara' },
  { id: 'dentalink', name: 'dentalink', nameShort: 'dentalink' },
  { id: 'osoji', name: 'OSOJI' },
];

function CompanyChip({ item, useShort = false }: { item: CompanyItem; useShort?: boolean }) {
  const label = useShort && item.nameShort ? item.nameShort : item.name;
  return (
    <div
      className="flex items-center gap-1.5 sm:gap-2 shrink-0 px-3 sm:px-4 py-2 rounded-full text-white font-medium text-xs sm:text-sm whitespace-nowrap bg-gray-900/85 border border-white/15 backdrop-blur-sm"
      style={{ minHeight: 36 }}
    >
      {item.icon && <span className="text-white/70 [&>svg]:text-white/80 flex items-center">{item.icon}</span>}
      <span>{label}</span>
    </div>
  );
}

export function CompaniesCarousel() {
  const duplicated = [...companies, ...companies];

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-4 sm:mt-6 md:mt-8 min-w-0">
      {/* Máscaras de desvanecimiento: más estrechas en mobile para no tapar tanto */}
      <div
        className="absolute inset-y-0 left-0 w-8 sm:w-16 md:w-24 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,0.92) 0%, transparent 100%)',
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-8 sm:w-16 md:w-24 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to left, rgba(0,0,0,0.92) 0%, transparent 100%)',
        }}
      />

      <div className="overflow-hidden w-full" style={{ contain: 'layout paint' }}>
        <motion.div
          className="flex items-center gap-3 sm:gap-5 md:gap-6 w-max"
          animate={{
            x: [0, '-50%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 40,
              ease: 'linear',
            },
          }}
        >
          {duplicated.map((item, i) => (
            <CompanyChip key={`${item.id}-${i}`} item={item} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
