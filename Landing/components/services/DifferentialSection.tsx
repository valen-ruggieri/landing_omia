'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { differentialCards } from '@Landing/data/servicesPage';

export function DifferentialSection() {
  const cardAccents = [
    {
      border: 'border-violet-300/12',
      surface: 'from-violet-400/14 via-violet-400/4 to-transparent',
      line: 'via-violet-300/34',
      dot: 'bg-violet-300',
    },
    {
      border: 'border-fuchsia-300/12',
      surface: 'from-fuchsia-400/14 via-purple-400/4 to-transparent',
      line: 'via-fuchsia-300/32',
      dot: 'bg-fuchsia-300',
    },
    {
      border: 'border-cyan-300/12',
      surface: 'from-cyan-400/12 via-sky-400/4 to-transparent',
      line: 'via-cyan-300/32',
      dot: 'bg-cyan-300',
    },
  ];

  return (
    <section className="relative px-4 py-14 text-white lg:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(167,139,250,0.14),transparent_22%),radial-gradient(circle_at_84%_16%,rgba(34,211,238,0.08),transparent_18%),linear-gradient(180deg,rgba(12,10,22,0)_0%,rgba(14,12,26,0.12)_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-violet-300/10 bg-[#0b0b15]">
          <div className="absolute inset-0">
            <Image
              src="/nuestrodiferencial2.png"
              alt="Nuestro diferencial"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover object-[center_68%] opacity-[0.18]"
            />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,8,16,0.92)_0%,rgba(8,8,16,0.84)_30%,rgba(8,8,16,0.72)_100%)] lg:bg-[linear-gradient(90deg,rgba(8,8,16,0.94)_0%,rgba(8,8,16,0.80)_44%,rgba(8,8,16,0.70)_100%)]" />
          <div className="pointer-events-none absolute -left-12 top-0 h-36 w-36 rounded-full bg-violet-500/12 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 rounded-full bg-cyan-400/8 blur-3xl" />

          <div className="relative z-10 px-5 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-9 xl:px-12">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mx-auto max-w-[14ch] text-4xl tracking-tighter text-white termina-light sm:text-5xl lg:text-[3.4rem]">
                Nuestro{' '}
                <span className="bg-gradient-to-r from-violet-300 via-purple-400 to-fuchsia-500 bg-clip-text text-transparent termina-medium">
                  diferencial
                </span>
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-300/90 sm:text-base md:text-[1.02rem]">
                Construimos sistemas alineados a tu negocio, con visibilidad total y resultados reales desde el primer momento.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-8 lg:gap-3.5 xl:grid-cols-3">
              {differentialCards.map((card, index) => {
                const accent = cardAccents[index % cardAccents.length];

                return (
                  <motion.article
                    key={card.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.24, delay: index * 0.03 }}
                    className={`group relative overflow-hidden rounded-[1rem] border ${accent.border} bg-[linear-gradient(180deg,rgba(18,16,32,0.20)_0%,rgba(10,10,18,0.14)_100%)] p-4.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-[8px] sm:p-5`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${accent.surface} opacity-70`} />
                    <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${accent.line} to-transparent`} />

                    <div className="relative flex h-full flex-col gap-3">
                      <span className={`h-2.5 w-10 rounded-full ${accent.dot} shadow-[0_0_18px_rgba(255,255,255,0.08)]`} />

                      <div className="space-y-2">
                        <h3 className="text-[1.02rem] leading-tight text-white sm:text-[1.12rem]">{card.title}</h3>
                        <p className="text-[0.92rem] leading-relaxed text-gray-300/90">{card.body}</p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
