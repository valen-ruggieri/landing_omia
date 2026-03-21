'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Check, type LucideIcon } from 'lucide-react';
import { Footer, Nav } from '@Landing/components';
import {
  differentialCards,
  endToEndFeatures,
  involvementPillars,
  projectTypes,
  qualityFocus,
  serviceCategories,
  servicesHero,
  transparencyPoints,
  valueCards,
  workProcess,
} from '@Landing/data/servicesPage';

const SCROLL_CONFIGS = {
  SCROLL_THRESHOLD: 50,
};

const ANIMATIONS = {
  LOADING_DURATION: 0.2,
};

const AdvancedBackground = React.memo(() => (
  <div className="fixed inset-0 z-0 pointer-events-none select-none">
    <div className="absolute inset-0 bg-gradient-to-br from-[#0c0e15]/4 via-[#0a0a0f] to-[#0c0e15]" />
  </div>
));

const SectionProgressBar = React.memo(({
  sections,
  sectionRefs,
}: {
  sections: { name: string }[];
  sectionRefs: React.RefObject<HTMLDivElement | null>[];
}) => {
  const [sectionProgress, setSectionProgress] = useState<number[]>(new Array(sections.length).fill(0));

  useEffect(() => {
    const updateProgress = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const newProgress = [...sectionProgress];

      sectionRefs.forEach((ref, index) => {
        if (!ref.current) {
          return;
        }

        const rect = ref.current.getBoundingClientRect();
        const sectionTop = scrollY + rect.top;
        const sectionHeight = rect.height;
        const sectionEnd = sectionTop + sectionHeight;

        if (scrollY >= sectionTop - windowHeight / 2 && scrollY <= sectionEnd) {
          const progress = Math.max(
            0,
            Math.min(1, (scrollY - sectionTop + windowHeight / 2) / (sectionHeight + windowHeight / 2))
          );
          newProgress[index] = progress;
        } else if (scrollY > sectionEnd) {
          newProgress[index] = 1;
        } else {
          newProgress[index] = 0;
        }
      });

      setSectionProgress(newProgress);
    };

    const throttledUpdate = () => {
      requestAnimationFrame(updateProgress);
    };

    window.addEventListener('scroll', throttledUpdate, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', throttledUpdate);
  }, [sectionRefs, sectionProgress]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="h-[2px] bg-black/30 backdrop-blur-sm">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 origin-left"
          style={{
            scaleX: sectionProgress.reduce((acc, curr) => acc + curr, 0) / sections.length,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
});

function ServicesSectionHeader({
  title,
  highlighted,
  subtitle,
}: {
  title: string;
  highlighted: string;
  subtitle: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.25 }}
      className="text-center mb-8 sm:mb-12 max-w-5xl mx-auto"
    >
      <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter text-white mb-3 sm:mb-4 font-termina">
        {title}{' '}
        <span className="termina-bold bg-gradient-to-r from-violet-400 via-purple-500 to-violet-700 bg-clip-text text-transparent">
          {highlighted}
        </span>
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto px-4">
        {subtitle}
      </p>
    </motion.div>
  );
}

function ServicesHeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const scaleRaw = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.86, 0.72]);
  const scale = useSpring(scaleRaw, { stiffness: 170, damping: 22, mass: 0.3 });
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const radiusBottom = useTransform(scrollYProgress, [0, 1], ['44px', '48px']);
  const vignetteOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.38, 0.32, 0.26]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [1, 1, 0.85, 0.8]);
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -8]);
  const videoFilter = useTransform(scrollYProgress, [0, 1], ['brightness(0.7) blur(0px)', 'brightness(0.6) blur(1.25px)']);

  const titleParts = servicesHero.title.split(servicesHero.highlighted);

  return (
    <section ref={ref} className="relative pt-1">
      <motion.div
        style={{ scale, y: translateY }}
        className="sticky top-0 h-[124vh] md:h-[124vh] rounded-b-[44px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,.35)] will-change-transform"
      >
        <motion.div style={{ filter: videoFilter }} className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            src="/images/video-thumb/clientecansadovideo.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </motion.div>

        <motion.div
          style={{
            borderBottomLeftRadius: radiusBottom,
            borderBottomRightRadius: radiusBottom,
            backgroundColor: 'rgb(0, 0, 0)',
            opacity: vignetteOpacity,
          }}
          className="pointer-events-none absolute inset-0"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 md:h-48 bg-gradient-to-t from-black/45 to-transparent" />

        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="relative z-10 h-full grid md:place-content-center md:pt-0 place-content-start pt-56 text-center px-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.25 }}
            className="text-white leading-[1.03] mx-auto max-w-[18ch] text-[35px] md:text-[64px] font-termina"
          >
            {titleParts[0]}{' '}
            <span className="font-semibold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent termina-bold">
              {servicesHero.highlighted}
            </span>
            {titleParts[1]}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.25 }}
            className="text-white mt-10 text-md md:text-xl md:mt-10 max-w-[92ch] mx-auto font-poppins"
          >
            {servicesHero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.25 }}
            className="mt-10 sm:mt-6 md:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-5 md:gap-6 opacity-90"
          >
            {servicesHero.badges.map((badge) => (
              <span key={badge} className="text-white/80 font-semibold text-xs sm:text-sm">
                {badge}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.25 }}
            className="mt-10 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.a
              href={servicesHero.primaryCta.href}
              target="_blank"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-gradient-to-r from-violet-400 to-violet-700 hover:bg-violet-600 text-white px-8 sm:px-8 py-4 sm:py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 text-md sm:text-base"
            >
              <span>{servicesHero.primaryCta.label}</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function EndToEndSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = endToEndFeatures[activeIndex];
  const ActiveIcon = activeFeature.icon;

  return (
    <section className="relative text-white py-20 lg:py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <ServicesSectionHeader
          title="Nuestro trabajo"
          highlighted="de punta a punta"
          subtitle="Discovery, UX/UI, desarrollo, automatización, IA, métricas, documentación y mejora continua dentro de un mismo proceso."
        />

        <div className="flex lg:hidden justify-center items-center gap-4 my-8 flex-wrap">
          {endToEndFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeIndex === index;

            return (
              <button
                key={feature.title}
                onClick={() => setActiveIndex(index)}
                className={`relative p-3 rounded-lg ${
                  isActive ? 'bg-gradient-to-b from-violet-500 via-violet-500/20 to-violet-500/0' : 'bg-gray-900/40 border border-white/10'
                }`}
                aria-label={`Ver etapa ${feature.title}`}
              >
                <Icon className={`w-6 h-6 ${isActive ? 'text-violet-400' : 'text-gray-400'}`} />
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-4 rounded-full bg-violet-500" />
                )}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="space-y-3 sm:space-y-4 bg-gray-900/30 rounded-xl p-4 sm:p-6"
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-violet-400">{activeFeature.title}</h3>
                <p className="text-sm sm:text-base text-gray-400">{activeFeature.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-2">
                  {(activeFeature.details ?? []).map((detail) => (
                    <div key={detail} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="font-medium text-gray-300 text-xs sm:text-sm leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between gap-2 sm:gap-3 sm:pt-2 flex-wrap">
                  {(activeFeature.metrics ?? []).map((metric) => (
                    <div key={metric.label} className="flex flex-col items-center justify-center px-1 sm:px-2 gap-3 flex-row">
                      <span className="text-base sm:text-lg font-bold text-white mb-0.5">{metric.value}</span>
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-wide text-center leading-tight">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden lg:flex justify-center items-center h-[400px] sm:h-[540px] lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.title}
                initial={{ opacity: 0, scale: 0.92, x: 60 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.92, x: -60 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-2xl h-full rounded-[2rem] border border-violet-400/15 bg-gradient-to-b from-violet-500/10 via-violet-500/5 to-transparent flex flex-col items-center justify-center text-center p-10"
              >
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-violet-500/20 blur-3xl rounded-full" />
                  <div className="relative w-32 h-32 rounded-[2rem] bg-violet-500/10 border border-violet-400/20 flex items-center justify-center">
                    <ActiveIcon className="w-16 h-16 text-violet-400" />
                  </div>
                </div>
                <p className="text-sm uppercase tracking-[0.24em] text-violet-400 mb-4">Etapa {String(activeIndex + 1).padStart(2, '0')}</p>
                <h3 className="text-3xl font-semibold text-white mb-4">{activeFeature.title}</h3>
                <p className="text-base text-gray-400 max-w-xl">{activeFeature.description}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hidden lg:flex flex-col items-center gap-6 sm:gap-8 lg:col-span-1 py-4">
            {endToEndFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeIndex === index;

              return (
                <motion.button
                  key={feature.title}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{
                    scale: isActive ? 1.22 : 1.12,
                    filter: isActive
                      ? 'brightness(1.3) drop-shadow(0 0 18px rgba(168,85,247,0.7))'
                      : 'brightness(1.1) drop-shadow(0 0 8px rgba(168,85,247,0.4))',
                    zIndex: 2,
                  }}
                  whileTap={{ scale: 0.96 }}
                  className="bg-transparent border-none p-0 flex items-center justify-center"
                  aria-label={`Ver etapa ${feature.title}`}
                >
                  <Icon
                    className={`transition-all duration-300 ${
                      isActive ? 'text-violet-400 w-12 h-12 sm:w-14 sm:h-14' : 'text-gray-600 w-6 h-6 sm:w-7 sm:h-7 opacity-50'
                    }`}
                  />
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesMainSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = serviceCategories[activeIndex];

  return (
    <section className="relative text-white py-20 lg:py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <ServicesSectionHeader
          title="Servicios"
          highlighted="principales"
          subtitle="Producto digital, software, automatización, IA, ecommerce y datos organizados dentro del mismo lenguaje visual de Omia."
        />

        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {serviceCategories.map((category, index) => {
            const isActive = activeIndex === index;
            const Icon = category.icon;

            return (
              <motion.button
                key={category.title}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`px-4 py-2.5 rounded-xl backdrop-blur-md transition-all duration-300 text-sm font-medium overflow-hidden relative flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-violet-500/20 to-indigo-500/20 border border-violet-400/20 text-white'
                    : 'bg-white/5 border border-white/10 text-gray-400'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-violet-400' : 'text-gray-500'}`} />
                <span>{category.title}</span>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="grid lg:grid-cols-[1fr_1.2fr] gap-8 items-start"
          >
            <div className="rounded-2xl bg-gray-900/30 p-6">
              <h3 className="text-3xl font-termina text-white mb-4">
                <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent termina-bold">
                  {activeCategory.title}
                </span>
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">{activeCategory.description}</p>
              <div className="mt-6 rounded-2xl bg-gradient-to-b from-violet-500/10 to-transparent p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-violet-400 mb-3">Enfoque Omia</p>
                <p className="text-gray-300 leading-relaxed">
                  Diseñamos cada servicio como una herramienta real para ordenar, automatizar y escalar, no solo como una entrega técnica.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {activeCategory.items.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-2xl bg-gradient-to-b from-violet-500/5 to-transparent p-5 shadow-lg"
                >
                  <p className="text-white text-lg font-medium leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function WorkProcessSection() {
  return (
    <section className="relative text-white py-20 lg:py-24 px-4">
      <div className="max-w-7xl mx-auto relative z-10">
        <ServicesSectionHeader
          title="Como"
          highlighted="trabajamos"
          subtitle="Un proceso claro desde el entendimiento hasta la evolución continua para reducir fricción entre idea, diseño y ejecución."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {workProcess.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.25 }}
              className="rounded-2xl bg-gradient-to-b from-violet-500/8 to-transparent p-6 shadow-lg"
            >
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center text-violet-400 font-semibold mb-5">
                {String(step.id).padStart(2, '0')}
              </div>
              <h3 className="text-white text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-400 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DifferentialSection() {
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
    <section className="relative text-white py-20 lg:py-24 px-4">
      <div className="max-w-7xl mx-auto relative z-10">
        <ServicesSectionHeader
          title="Nuestro"
          highlighted="diferencial"
          subtitle="Negocio, trazabilidad, transparencia y seguimiento real para construir con mucha más alineación."
        />

        <div className="relative max-h-[760px] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className={`flex flex-col gap-0 ${columnIndex === 1 ? 'pt-15' : ''}`}>
                {column.map((cardIndex, itemIndex) => {
                  const card = cards[cardIndex];
                  if (!card) return null;

                  const spacing = columnIndex === 2 ? ['mb-6', 'mb-5', 'mb-4'][itemIndex] ?? 'mb-5' : columnIndex === 0 ? 'mt-5' : 'mb-5';

                  return (
                    <motion.div
                      key={`${columnIndex}-${cardIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: cardIndex * 0.05 }}
                      className={spacing}
                    >
                      <div className="rounded-2xl p-6 shadow-lg bg-gradient-to-b from-purple-500/5 to-transparent transition-colors">
                        <p className="text-violet-400 text-[11px] uppercase tracking-[0.22em] mb-3">{card.title}</p>
                        <p className="text-gray-300 text-[18px] mb-5 leading-relaxed">{card.quote}</p>
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                            {card.author.charAt(0)}
                          </div>
                          <div>
                            <p className="text-white text-[18px] font-medium font-poppins">{card.author}</p>
                            <p className="text-gray-500 text-[13px] font-poppins">{card.position}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-t from-transparent via-[#0c0e15]/50 to-[#0c0e15]/70 pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-[#0c0e15]/50 to-[#0c0e15]/60 pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
}

function ProjectsAndQualitySection() {
  return (
    <section className="relative text-white py-20 lg:py-24 px-4">
      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        <div>
          <ServicesSectionHeader
            title="En que tipo de proyectos"
            highlighted="podemos ayudar"
            subtitle="Omia se adapta tanto a negocios en etapa inicial como a empresas que necesitan ordenar y escalar su operación."
          />

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projectTypes.map((project, index) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
                className="rounded-xl p-4 sm:p-6 bg-gradient-to-b from-violet-500/10 via-violet-500/5 to-transparent"
              >
                <p className="text-white/90 text-sm lg:text-md leading-relaxed text-center">{project}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <ServicesSectionHeader
            title="Que cuidamos"
            highlighted="en cada proyecto"
            subtitle="Cada solución se construye con foco en calidad real, no solo en velocidad."
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-5 gap-4">
            {qualityFocus.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: index * 0.03 }}
                  className="rounded-2xl p-5 bg-gray-900/30"
                >
                  <Icon className="w-8 h-8 text-violet-400 mb-4" />
                  <p className="text-white text-sm leading-relaxed">{item.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function InvolvementSection() {
  return (
    <section className="relative text-white py-20 lg:py-24 px-4">
      <div className="max-w-7xl mx-auto relative z-10 space-y-14">
        <ServicesSectionHeader
          title="Como nos"
          highlighted="involucramos"
          subtitle="Nos involucramos en el proyecto como partner, no solo como proveedor."
        />

        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-start">
          <div className="rounded-2xl bg-gradient-to-b from-violet-500/10 to-transparent p-8">
            <h3 className="text-3xl font-termina text-white mb-4">
              Nos metemos en la lógica del negocio
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              No tomamos un pedido y lo ejecutamos sin contexto. Analizamos prioridades, detectamos oportunidades de mejora y proponemos la mejor forma de construir.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {involvementPillars.map((pillar) => (
                <span key={pillar} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                  {pillar}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {valueCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04, duration: 0.25 }}
                  className="rounded-2xl bg-gray-900/30 p-5"
                >
                  <Icon className="w-8 h-8 text-violet-400 mb-4" />
                  <p className="text-white leading-relaxed">{card.title}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-violet-500/10 to-transparent px-6 py-12 text-center shadow-2xl md:px-12">
          <p className="text-violet-400 text-[11px] uppercase tracking-[0.24em] mb-4">Propuesta de valor</p>
          <h2 className="mx-auto mb-4 max-w-4xl text-4xl font-termina text-white sm:text-4xl md:text-5xl lg:text-6xl">
            No vendemos solo software
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
            Creamos sistemas digitales que ayudan a las empresas a ordenar, automatizar y escalar. Diseñamos. Construimos. Probamos. Iteramos. Escalamos.
          </p>
          <motion.a
            href="https://wa.me/5491112345678"
            target="_blank"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-400 to-violet-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300"
          >
            <span>Hablar con Omia</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export function ServicesPageContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const endToEndRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const differentialRef = useRef<HTMLDivElement>(null);
  const projectQualityRef = useRef<HTMLDivElement>(null);
  const involvementRef = useRef<HTMLDivElement>(null);

  const sectionRefs = [heroRef, endToEndRef, servicesRef, processRef, differentialRef, projectQualityRef, involvementRef];

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > SCROLL_CONFIGS.SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    let ticking = false;
    const optimizedHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizedHandleScroll, { passive: true });
    const timer = setTimeout(() => setIsLoaded(true), ANIMATIONS.LOADING_DURATION * 1000);

    return () => {
      window.removeEventListener('scroll', optimizedHandleScroll);
      clearTimeout(timer);
    };
  }, [handleScroll]);

  const sections = useMemo(() => [
    { id: 'trabajo', label: 'Trabajo', description: 'De punta a punta', icon: endToEndFeatures[0].icon, href: '#trabajo', type: 'scroll' as const },
    { id: 'servicios-principales', label: 'Servicios', description: 'Oferta principal de Omia', icon: serviceCategories[0].icon, href: '#servicios-principales', type: 'scroll' as const },
    { id: 'como-trabajamos', label: 'Proceso', description: 'Cómo trabajamos', icon: endToEndFeatures[1].icon, href: '#como-trabajamos', type: 'scroll' as const },
    { id: 'diferencial', label: 'Diferencial', description: 'Negocio y trazabilidad', icon: endToEndFeatures[4].icon, href: '#diferencial', type: 'scroll' as const },
    { id: 'proyectos-calidad', label: 'Proyectos', description: 'Dónde ayudamos y qué cuidamos', icon: qualityFocus[0].icon as LucideIcon, href: '#proyectos-calidad', type: 'scroll' as const },
    { id: 'partner', label: 'Partner', description: 'Cómo nos involucramos', icon: valueCards[0].icon as LucideIcon, href: '#partner', type: 'scroll' as const },
  ], []);

  const mobileMenuSections = [
    {
      title: 'SERVICIOS',
      subtitle: 'Omia institucional',
      items: sections,
    },
  ];

  const footerLinks = [
    { name: 'Trabajo', href: '#trabajo', type: 'scroll' as const },
    { name: 'Servicios', href: '#servicios-principales', type: 'scroll' as const },
    { name: 'Proceso', href: '#como-trabajamos', type: 'scroll' as const },
    { name: 'Diferencial', href: '#diferencial', type: 'scroll' as const },
    { name: 'Partner', href: '#partner', type: 'scroll' as const },
  ];

  const allSections = useMemo(() => [{ name: 'Inicio' }, ...sections.map((section) => ({ name: section.label }))], [sections]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="font-sans relative overflow-hidden bg-[#0c0e15]"
    >
      <AdvancedBackground />
      <SectionProgressBar sections={allSections} sectionRefs={sectionRefs} />

      <div className="relative z-10 min-h-screen bg-transparent text-white">
        <Nav
          isScrolled={isScrolled}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          navigationItems={sections}
          mobileMenuSections={mobileMenuSections}
        />

        <div id="hero" ref={heroRef}>
          <ServicesHeroSection />
        </div>

        <div id="trabajo" ref={endToEndRef}>
          <EndToEndSection />
        </div>

        <div id="servicios-principales" ref={servicesRef}>
          <ServicesMainSection />
        </div>

        <div id="como-trabajamos" ref={processRef}>
          <WorkProcessSection />
        </div>

        <div id="diferencial" ref={differentialRef}>
          <DifferentialSection />
        </div>

        <div id="proyectos-calidad" ref={projectQualityRef}>
          <ProjectsAndQualitySection />
        </div>

        <div id="partner" ref={involvementRef}>
          <InvolvementSection />
        </div>

        <div className="relative">
          <Footer quickLinks={footerLinks} />
        </div>
      </div>
    </motion.div>
  );
}
