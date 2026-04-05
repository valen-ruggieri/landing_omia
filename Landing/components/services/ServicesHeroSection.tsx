'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { servicesHero } from '@Landing/data/servicesPage';

export function ServicesHeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const heroTitle = 'Tu empresa no necesita mas herramientas. Necesita un sistema.';
  const heroHighlighted = 'Necesita un sistema.';
  const heroDescription =
    'En Omia lo diseñamos, lo construimos y lo hacemos evolucionar.';

  const scaleRaw = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.86, 0.72]);
  const scale = useSpring(scaleRaw, { stiffness: 170, damping: 22, mass: 0.3 });
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const heroOverlayOpacity = useTransform(scrollYProgress, [0, 1], [0.28, 0.36]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [1, 1, 0.85, 0.8]);
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -8]);

  const titleParts = heroTitle.split(heroHighlighted);

  return (
    <section ref={ref} className="relative pt-1">
      <motion.div
        style={{ scale, y: translateY }}
        className="sticky top-0 h-[124vh] overflow-hidden 2,170,140,0.12),transparent_28%),linear-gradient(180deg,#0b0b14_0%,#091118_100%)] will-change-transform md:h-[124vh]"
      >
        <motion.div className="absolute inset-0 md:hidden">
          <div className="absolute left-1/2 top-[25svh] h-[54svh] w-[172vw] -translate-x-1/2 opacity-[0.82]">
            <Image
              src="/heromobile2.png"
              alt="Hero mobile de servicios Omia"
              fill
              priority
              sizes="100vw"
              className="object-contain object-center scale-[2.5] opacity-30 transition-opacity duration-300  "
            />
          </div>
         
        </motion.div>

        <motion.div className="absolute inset-0 hidden md:block">
          <div className="relative h-full w-full">
            <Image
              src="/heroscreen1.png"
              alt="Fondo principal de servicios Omia"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-30 transition-opacity duration-300   "
            />
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: heroOverlayOpacity }}
          className="pointer-events-none absolute inset-0 "
        />

        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="relative z-10 grid h-full place-content-start px-6 pt-[31svh] text-center md:place-content-center md:pt-0"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.25 }}
            className="mx-auto max-w-[18ch] text-[33px] leading-[1.03] text-white termina-light md:text-[64px] font-termina  "
          >
            {titleParts[0]}{' '}
            <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent termina-bold">
              {heroHighlighted}
            </span>
            {titleParts[1]}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.25 }}
            className="mx-auto mt-10 max-w-[31ch] text-md font-poppins text-white md:mt-10 md:text-xl  md:max-w-[92ch]"
          >
            {heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.25 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3 opacity-90 sm:mt-6 sm:gap-5 md:mt-8 md:gap-6 m d:max-w-4xl mx-auto px-4 "
          >
            {servicesHero.badges.map((badge) => (
              <span key={badge} className="text-xs font-semibold sm:text-sm bg-gradient-to-l from-violet-300 to-violet-400 bg-clip-text text-transparent termina-bold">
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.25 }}
            className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row md:mt-8"
          >
            <motion.a
              href={servicesHero.primaryCta.href}
              target="_blank"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-violet-500 to-violet-800 px-8 py-4 text-md font-semibold text-white transition-all duration-300 hover:bg-violet-600 sm:px-8 sm:py-4 sm:text-base"
            >
              <span>Agenda una consultoria</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
