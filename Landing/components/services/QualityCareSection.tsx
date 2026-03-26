'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { qualityFocus } from '@Landing/data/servicesPage';

export function QualityCareSection() {
  const leftColumnItems = qualityFocus.filter((_, index) => index % 2 === 0);
  const rightColumnItems = qualityFocus.filter((_, index) => index % 2 !== 0);
  const itemAccents = [
    {
      border: 'border-emerald-300/12',
      surface: 'from-emerald-400/14 via-emerald-400/4 to-transparent',
      icon: 'text-emerald-200/90',
      chip: 'bg-emerald-400/8 border-emerald-300/12',
      line: 'via-emerald-300/26',
    },
    {
      border: 'border-teal-300/12',
      surface: 'from-teal-400/12 via-cyan-400/4 to-transparent',
      icon: 'text-teal-100/90',
      chip: 'bg-teal-400/8 border-teal-300/12',
      line: 'via-teal-300/24',
    },
    {
      border: 'border-cyan-300/12',
      surface: 'from-cyan-400/12 via-sky-400/4 to-transparent',
      icon: 'text-cyan-100/90',
      chip: 'bg-cyan-400/8 border-cyan-300/12',
      line: 'via-cyan-300/24',
    },
  ];

  return (
    <section className="relative px-4 py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(16,185,129,0.16),transparent_26%),radial-gradient(circle_at_82%_78%,rgba(20,184,166,0.12),transparent_24%),linear-gradient(180deg,rgba(6,20,17,0)_0%,rgba(8,34,24,0.18)_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-emerald-300/10 bg-[#081312]">
          <div className="absolute inset-0">
            <Image
              src="/quecuidamos45.png"
              alt="Que cuidamos en cada proyecto"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover object-right "
            />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,10,11,0.18)_0%,rgba(4,10,11,0.34)_20%,rgba(4,10,11,0.56)_44%,rgba(4,10,11,0.78)_100%)] lg:bg-[linear-gradient(90deg,rgba(4,10,11,0.22)_0%,rgba(4,10,11,0.28)_24%,rgba(4,10,11,0.48)_46%,rgba(4,10,11,0.70)_64%,rgba(4,10,11,0.84)_100%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(52,211,153,0.12),transparent_22%),radial-gradient(circle_at_80%_18%,rgba(20,184,166,0.10),transparent_18%),radial-gradient(circle_at_82%_80%,rgba(16,185,129,0.14),transparent_24%)]" />

          <div className="relative z-10 flex min-h-[720px] flex-col px-6 py-8 sm:px-8 sm:py-10 lg:min-h-[620px] lg:px-10 lg:py-10 xl:min-h-[660px] xl:px-12 xl:py-12">
            <div className="max-w-7xl mx-auto mb-20 ">
              <h2 className="max-w-[15ch] text-4xl tracking-tighter text-white termina-light sm:max-w-[17ch] sm:text-4xl md:max-w-[18ch] md:text-5xl lg:max-w-[20ch] lg:text-6xl">
                Que cuidamos{' '}
                <span className="bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-500 bg-clip-text text-transparent termina-medium">
                  en cada proyecto
                </span>
              </h2>
              <p className="mt-4 max-w-7xl mx-auto text-center  text-sm leading-relaxed text-gray-300/90 sm:text-base md:text-lg">
                Cada solucion se construye con foco en calidad real, no solo en velocidad.
              </p>
            </div>

            <div className="mt-10 flex flex-1 items-end">
              <div className="hidden w-full grid-cols-[minmax(0,250px)_1fr_minmax(0,250px)] items-end gap-6 lg:grid xl:grid-cols-[minmax(0,270px)_1fr_minmax(0,270px)] xl:gap-8">
                <div className="flex flex-col gap-3">
                  {leftColumnItems.map((item, index) => {
                    const Icon = item.icon;
                    const accent = itemAccents[index % itemAccents.length];

                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: -18 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.25, delay: index * 0.03 }}
                        className={`group relative overflow-hidden rounded-[1.05rem] border ${accent.border} bg-[linear-gradient(180deg,rgba(8,18,18,0.16)_0%,rgba(8,14,16,0.10)_100%)] px-3.5 py-3 backdrop-blur-[6px]`}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${accent.surface}`} />
                        <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${accent.line} to-transparent`} />

                        <div className="relative flex items-center gap-3">
                          <span className={`inline-flex h-8 w-8 items-center justify-center rounded-[0.8rem] border ${accent.chip}`}>
                            <Icon className={`h-4 w-4 ${accent.icon}`} />
                          </span>
                          <p className="text-[0.82rem] leading-snug text-white/92">{item.label}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div />

                <div className="flex flex-col gap-3">
                  {rightColumnItems.map((item, index) => {
                    const Icon = item.icon;
                    const accent = itemAccents[(index + 1) % itemAccents.length];

                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 18 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.25, delay: index * 0.03 }}
                        className={`group relative overflow-hidden rounded-[1.05rem] border ${accent.border} bg-[linear-gradient(180deg,rgba(8,18,18,0.16)_0%,rgba(8,14,16,0.10)_100%)] px-3.5 py-3 backdrop-blur-[6px]`}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${accent.surface}`} />
                        <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${accent.line} to-transparent`} />

                        <div className="relative flex items-center gap-3">
                          <span className={`inline-flex h-8 w-8 items-center justify-center rounded-[0.8rem] border ${accent.chip}`}>
                            <Icon className={`h-4 w-4 ${accent.icon}`} />
                          </span>
                          <p className="text-[0.82rem] leading-snug text-white/92">{item.label}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="grid w-full grid-cols-1 gap-2.5 sm:grid-cols-2 lg:hidden">
                {qualityFocus.map((item, index) => {
                  const Icon = item.icon;
                  const accent = itemAccents[index % itemAccents.length];

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.25, delay: index * 0.03 }}
                      className={`group relative overflow-hidden rounded-[1.05rem] border ${accent.border} bg-[linear-gradient(180deg,rgba(8,18,18,0.18)_0%,rgba(8,14,16,0.12)_100%)] px-3.5 py-3 backdrop-blur-[6px]`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${accent.surface}`} />
                      <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${accent.line} to-transparent`} />

                      <div className="relative flex items-center gap-3">
                        <span className={`inline-flex h-8 w-8 items-center justify-center rounded-[0.8rem] border ${accent.chip}`}>
                          <Icon className={`h-4 w-4 ${accent.icon}`} />
                        </span>
                        <p className="text-[0.82rem] leading-snug text-white/92">{item.label}</p>
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
