'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { differentialCards, transparencyPoints } from '@Landing/data/servicesPage';
import { ServicesSectionHeader } from './shared';

export function DifferentialSection() {
  const cards = [
    ...differentialCards.map((card) => ({
      title: card.title,
      quote: card.body,
      author: 'Omia',
      position: 'Diferencial',
    })),
    ...transparencyPoints.map((point) => ({
      title: 'Transparencia y seguimiento',
      quote: point,
      author: 'Cliente',
      position: 'Visibilidad real',
    })),
  ];

  const columns = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  return (
    <section className="relative px-4 py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(167,139,250,0.12),transparent_24%),radial-gradient(circle_at_78%_74%,rgba(192,132,252,0.1),transparent_26%),linear-gradient(180deg,rgba(15,12,26,0)_0%,rgba(29,16,44,0.14)_100%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <ServicesSectionHeader
          title="Nuestro"
          highlighted="diferencial"
          accentClassName="bg-gradient-to-r from-violet-300 via-purple-400 to-fuchsia-500"
          subtitle="Negocio, trazabilidad, transparencia y seguimiento real para construir con mucha mas alineacion."
        />

        <div className="relative max-h-[760px] overflow-hidden">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className={`flex flex-col gap-0 ${columnIndex === 1 ? 'pt-15' : ''}`}>
                {column.map((cardIndex, itemIndex) => {
                  const card = cards[cardIndex];
                  if (!card) return null;

                  const spacing =
                    columnIndex === 2
                      ? ['mb-6', 'mb-5', 'mb-4'][itemIndex] ?? 'mb-5'
                      : columnIndex === 0
                        ? 'mt-5'
                        : 'mb-5';

                  return (
                    <motion.div
                      key={`${columnIndex}-${cardIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: cardIndex * 0.05 }}
                      className={spacing}
                    >
                      <div className="rounded-2xl bg-gradient-to-b from-purple-400/8 via-violet-500/4 to-transparent p-6 shadow-lg transition-colors">
                        <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-violet-300">{card.title}</p>
                        <p className="mb-5 text-[18px] leading-relaxed text-gray-300">{card.quote}</p>
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-sm font-medium text-white">
                            {card.author.charAt(0)}
                          </div>
                          <div>
                            <p className="font-poppins text-[18px] font-medium text-white">{card.author}</p>
                            <p className="font-poppins text-[13px] text-gray-500">{card.position}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-24 bg-gradient-to-t from-transparent via-[#0c0e15]/50 to-[#0c0e15]/70" />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-40 bg-gradient-to-b from-transparent via-[#0c0e15]/50 to-[#0c0e15]/60" />
        </div>
      </div>
    </section>
  );
}
