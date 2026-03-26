'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { differentialCards, transparencyPoints } from '@Landing/data/servicesPage';

export function DifferentialSection() {
  const cards = [
    ...differentialCards.map((card) => ({
      title: card.title,
      body: card.body,
      meta: 'Omia',
      role: 'Diferencial',
    })),
    ...transparencyPoints.map((point) => ({
      title: 'Transparencia y seguimiento',
      body: point,
      meta: 'Cliente',
      role: 'Visibilidad real',
    })),
  ];

  const cardAccents = [
    {
      border: 'border-violet-300/12',
      surface: 'from-violet-400/14 via-violet-400/4 to-transparent',
      meta: 'text-violet-200/80',
      line: 'via-violet-300/26',
    },
    {
      border: 'border-fuchsia-300/12',
      surface: 'from-fuchsia-400/12 via-purple-400/4 to-transparent',
      meta: 'text-fuchsia-200/80',
      line: 'via-fuchsia-300/24',
    },
    {
      border: 'border-cyan-300/12',
      surface: 'from-cyan-400/12 via-sky-400/4 to-transparent',
      meta: 'text-cyan-100/80',
      line: 'via-cyan-300/24',
    },
  ];
  const desktopBadgePositions = [
    // Columna interna (derecha pero más hacia el centro)
    'right-[48%] top-[8%]',
    'right-[50%] top-[42%]',
    'right-[52%] top-[76%]',

    'right-[22%] top-[8%]',
    'right-[25%] top-[36%]',
    'right-[28%] top-[60%]',
    'right-[30%] top-[87%]',
    // Columna externa (pegada a la derecha)
    'right-[0%] top-[10%]',
    'right-[3%] top-[34%]',
    'right-[5%] top-[58%]',
    'right-[7%] top-[82%]',
  ];

  return (
    <section className="relative px-4 py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(167,139,250,0.16),transparent_22%),radial-gradient(circle_at_84%_16%,rgba(34,211,238,0.10),transparent_18%),radial-gradient(circle_at_78%_82%,rgba(167,139,250,0.12),transparent_26%),linear-gradient(180deg,rgba(12,10,22,0)_0%,rgba(14,12,26,0.16)_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-violet-300/10 bg-[#0b0b15]">
          <div className="absolute inset-0">
            <Image
              src="/nuestrodiferencial2.png"
              alt="Nuestro diferencial"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,16,0.18)_0%,rgba(8,8,16,0.36)_20%,rgba(8,8,16,0.58)_44%,rgba(8,8,16,0.82)_100%)] lg:bg-[linear-gradient(90deg,rgba(8,8,16,0.34)_0%,rgba(8,8,16,0.40)_24%,rgba(8,8,16,0.50)_44%,rgba(8,8,16,0.64)_60%,rgba(8,8,16,0.80)_78%)]" />
          
          <div className="relative z-10 flex min-h-[760px] flex-col px-6 py-8 sm:px-8 sm:py-10 lg:min-h-[680px] lg:px-10 lg:py-10 xl:min-h-[720px] xl:px-12 xl:py-12">
            <div className="mx-auto w-full max-w-5xl text-center">
              <h2 className="mx-auto max-w-[18ch] text-4xl tracking-tighter text-white termina-light sm:max-w-[20ch] sm:text-4xl md:max-w-[22ch] md:text-5xl lg:max-w-[24ch] lg:text-6xl">
                Nuestro{' '}
                <span className="bg-gradient-to-r from-violet-300 via-purple-400 to-fuchsia-500 bg-clip-text text-transparent termina-medium">
                  diferencial
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-4xl text-sm leading-relaxed text-gray-300/90 sm:text-base md:text-lg">
                Negocio, trazabilidad, transparencia y seguimiento real para construir con mucha mas alineacion.
              </p>
            </div>

            <div className="mt-10 flex flex-1 items-end">
              <div className="relative hidden min-h-[520px] w-full lg:block">
                {cards.map((card, index) => {
                  const accent = cardAccents[index % cardAccents.length];
                  const position = desktopBadgePositions[index] ?? desktopBadgePositions[desktopBadgePositions.length - 1];

                  return (
                    <motion.div
                      key={`${card.title}-desktop-${index}`}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.24, delay: index * 0.025 }}
                      className={`absolute ${position} w-[180px] xl:w-[195px]`}
                    >
                      <div
                        className={`group relative overflow-hidden rounded-[0.85rem] border ${accent.border} bg-[linear-gradient(180deg,rgba(18,16,32,0.12)_0%,rgba(10,10,18,0.06)_100%)] px-2.5 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] backdrop-blur-[8px]`}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${accent.surface} opacity-60`} />
                        <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${accent.line} to-transparent`} />

                        <div className="relative space-y-1.5">
                          <div className="flex items-center gap-1.5">
                            <span className={`h-1.5 w-1.5 rounded-full bg-current ${accent.meta}`} />
                            <p className={`text-[0.52rem] uppercase tracking-[0.22em] ${accent.meta}`}>
                              {card.title}
                            </p>
                          </div>
                          <p className="text-[0.76rem] leading-snug text-white/88">{card.body}</p>
                          <p className={`text-[0.58rem] uppercase tracking-[0.16em] ${accent.meta}`}>
                            {card.meta}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="grid w-full grid-cols-1 gap-2.5 sm:grid-cols-2 lg:hidden">
                {cards.map((card, index) => {
                  const accent = cardAccents[index % cardAccents.length];

                  return (
                    <motion.div
                      key={`${card.title}-mobile-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.18 }}
                      transition={{ duration: 0.25, delay: index * 0.02 }}
                      className={`group relative overflow-hidden rounded-[0.95rem] border ${accent.border} bg-[linear-gradient(180deg,rgba(18,16,32,0.16)_0%,rgba(10,10,18,0.10)_100%)] px-3 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-[10px]`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${accent.surface} opacity-70`} />
                      <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${accent.line} to-transparent`} />

                      <div className="relative space-y-2">
                        <div className="flex items-center gap-2">
                          <span className={`h-1.5 w-1.5 rounded-full bg-current ${accent.meta}`} />
                          <p className={`text-[0.58rem] uppercase tracking-[0.24em] ${accent.meta}`}>
                            {card.title}
                          </p>
                        </div>
                        <p className="text-[0.82rem] leading-snug text-white/90">{card.body}</p>
                        <p className={`text-[0.65rem] uppercase tracking-[0.18em] ${accent.meta}`}>
                          {card.meta}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
