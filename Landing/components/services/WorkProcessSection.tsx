'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { workProcess } from '@Landing/data/servicesPage';
import { ServicesSectionHeader } from './shared';

export function WorkProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = workProcess[activeIndex];
  const previousStep = workProcess[(activeIndex - 1 + workProcess.length) % workProcess.length];
  const nextStep = workProcess[(activeIndex + 1) % workProcess.length];
  const activeGlowColors = [
    'rgba(34, 211, 238, 0.52)',
    'rgba(99, 102, 241, 0.5)',
    'rgba(168, 85, 247, 0.5)',
    'rgba(16, 185, 129, 0.5)',
    'rgba(45, 212, 191, 0.5)',
    'rgba(59, 130, 246, 0.5)',
    'rgba(96, 165, 250, 0.5)',
  ];
  const activeGlow = activeGlowColors[activeIndex] ?? 'rgba(34, 211, 238, 0.5)';
  const totalProgress = (activeIndex + 1) / workProcess.length;
  const topProgress = Math.min(totalProgress / 0.25, 1);
  const rightProgress = totalProgress <= 0.25 ? 0 : Math.min((totalProgress - 0.25) / 0.25, 1);
  const bottomProgress = totalProgress <= 0.5 ? 0 : Math.min((totalProgress - 0.5) / 0.25, 1);
  const leftProgress = totalProgress <= 0.75 ? 0 : Math.min((totalProgress - 0.75) / 0.25, 1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % workProcess.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden px-4 py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_22%,rgba(34,211,238,0.12),transparent_24%),radial-gradient(circle_at_84%_78%,rgba(59,130,246,0.1),transparent_26%),linear-gradient(180deg,rgba(8,15,24,0)_0%,rgba(8,27,38,0.14)_100%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <ServicesSectionHeader
          title="Como"
          highlighted="trabajamos"
          accentClassName="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500"
          subtitle="Un proceso claro desde la consultoria inicial hasta la evolucion continua, con una hoja de ruta visible para cada etapa."
        />

        <div className="relative mt-14">
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[24%] items-center justify-start lg:flex">
            <motion.div
              key={`prev-${previousStep.id}`}
              initial={{ opacity: 0, x: -48, rotate: -12 }}
              animate={{ opacity: 0.28, x: -14, rotate: -10 }}
              exit={{ opacity: 0, x: -60, rotate: -14 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[20rem] w-[16rem] xl:h-[24rem] xl:w-[19rem]"
            >
              <Image
                src={previousStep.imageSrc}
                alt={previousStep.title}
                fill
                sizes="320px"
                className="object-contain opacity-70 blur-[0.6px]"
              />
            </motion.div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[24%] items-center justify-end lg:flex">
            <motion.div
              key={`next-${nextStep.id}`}
              initial={{ opacity: 0, x: 48, rotate: 12 }}
              animate={{ opacity: 0.28, x: 14, rotate: 10 }}
              exit={{ opacity: 0, x: 60, rotate: 14 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[20rem] w-[16rem] xl:h-[24rem] xl:w-[19rem]"
            >
              <Image
                src={nextStep.imageSrc}
                alt={nextStep.title}
                fill
                sizes="320px"
                className="object-contain opacity-70 blur-[0.6px]"
              />
            </motion.div>
          </div>

          <div className="relative flex min-h-[34rem] items-center justify-center overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.03] px-4 py-8 sm:px-8 lg:min-h-[38rem]">
            <div className="pointer-events-none absolute inset-0 rounded-[2.2rem]">
              <div
                className="absolute inset-0 rounded-[2.2rem]"
                style={{
                  boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.03), 0 0 48px ${activeGlow}, 0 0 110px ${activeGlow.replace('0.5', '0.24').replace('0.52', '0.26')}`,
                }}
              />
              <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
              <div className="absolute inset-y-0 right-0 w-px bg-white/10" />
              <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
              <div className="absolute inset-y-0 left-0 w-px bg-white/10" />

              <motion.div
                className={`absolute left-0 top-0 h-[2px] origin-left bg-gradient-to-r ${activeStep.accentClassName}`}
                animate={{ width: `${topProgress * 100}%` }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                style={{ boxShadow: `0 0 24px ${activeGlow}, 0 0 42px ${activeGlow.replace('0.5', '0.26').replace('0.52', '0.28')}` }}
              />
              <motion.div
                className={`absolute right-0 top-0 w-[2px] origin-top bg-gradient-to-b ${activeStep.accentClassName}`}
                animate={{ height: `${rightProgress * 100}%` }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                style={{ boxShadow: `0 0 24px ${activeGlow}, 0 0 42px ${activeGlow.replace('0.5', '0.26').replace('0.52', '0.28')}` }}
              />
              <motion.div
                className={`absolute bottom-0 right-0 h-[2px] origin-right bg-gradient-to-l ${activeStep.accentClassName}`}
                animate={{ width: `${bottomProgress * 100}%` }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                style={{ boxShadow: `0 0 24px ${activeGlow}, 0 0 42px ${activeGlow.replace('0.5', '0.26').replace('0.52', '0.28')}` }}
              />
              <motion.div
                className={`absolute bottom-0 left-0 w-[2px] origin-bottom bg-gradient-to-t ${activeStep.accentClassName}`}
                animate={{ height: `${leftProgress * 100}%` }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                style={{ boxShadow: `0 0 24px ${activeGlow}, 0 0 42px ${activeGlow.replace('0.5', '0.26').replace('0.52', '0.28')}` }}
              />
            </div>

            <div className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${activeStep.accentClassName} to-transparent opacity-40`} />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative h-full w-full max-w-[68rem]">
                  <Image
                    src={activeStep.imageSrc}
                    alt={activeStep.title}
                    fill
                    priority={activeIndex === 0}
                    sizes="(min-width: 1024px) 900px, 100vw"
                    className="object-contain opacity-[0.22]"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(7,10,16,0.12),rgba(7,10,16,0.76)_62%,rgba(7,10,16,0.92)_100%)]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activeStep.id}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="relative z-10 mx-auto flex w-full max-w-[46rem] flex-col items-center text-center"
              >
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <span className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${activeStep.accentClassName}`} />
                  Etapa {String(activeStep.id).padStart(2, '0')}
                </div>

                <h3 className="mt-6 max-w-[17ch] text-[2.4rem] leading-[0.94] tracking-[-0.05em] text-white sm:max-w-[16ch] sm:text-[3.15rem] lg:max-w-[18ch] lg:text-[4rem]">
                  <span className={`bg-gradient-to-r ${activeStep.accentClassName} bg-clip-text text-transparent termina-medium`}>
                    {activeStep.title}
                  </span>
                </h3>

                <p className="mt-5 max-w-[40rem] text-base leading-[1.85] text-gray-300 sm:text-lg">
                  {activeStep.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
