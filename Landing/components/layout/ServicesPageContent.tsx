'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Check, MonitorSmartphone, type LucideIcon } from 'lucide-react';
import { Footer, Nav } from '@Landing/components';
import {
  differentialCards,
  endToEndFeatures,
  involvementPillars,
  projectTypes,
  qualityFocus,
  serviceCategories,
  servicesHero,
  servicesShowcase,
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
    <div className="absolute inset-0 bg-[#0a0b11]" />
    <div className="absolute -top-32 left-[-8%] h-[30rem] w-[30rem] rounded-full bg-violet-500/12 blur-[120px]" />
    <div className="absolute top-[14%] right-[-10%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[120px]" />
    <div className="absolute bottom-[-8rem] left-[18%] h-[24rem] w-[24rem] rounded-full bg-emerald-500/8 blur-[120px]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(169, 85, 247, 0),transparent_30%),radial-gradient(circle_at_82%_16%,rgba(34,211,238,0.10),transparent_28%),radial-gradient(circle_at_28%_90%,rgba(16,185,129,0.08),transparent_26%),linear-gradient(180deg,rgba(8,10,16,0.92)_0%,rgba(10,11,17,1)_100%)]" />
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
  accentClassName = 'bg-gradient-to-r from-violet-400 via-purple-500 to-violet-700',
}: {
  title: string;
  highlighted: string;
  subtitle: string;
  accentClassName?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.25 }}
      className="text-center mb-8 sm:mb-12 max-w-5xl mx-auto"
    >
      <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tighter text-white mb-3 sm:mb-4 termina-light">
        {title}{' '}
        <span className={`termina-medium ${accentClassName} bg-clip-text text-transparent`}>
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
  const heroTitle = 'Tu negocio no necesita mas herramientas. Necesita un sistema.';
  const heroHighlighted = 'Necesita un sistema.';
  const heroDescription =
    'En Omia lo diseniamos, lo construimos y lo hacemos evolucionar.';

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
        className="sticky top-0 h-[124vh] md:h-[124vh] overflow-hidden bg-[radial-gradient(circle_at_14%_18%,rgba(120,87,255,0.18),transparent_26%),radial-gradient(circle_at_82%_22%,rgba(12,170,140,0.12),transparent_28%),linear-gradient(180deg,#0b0b14_0%,#091118_100%)] will-change-transform"
      >
        <motion.div className="absolute inset-0">
          <Image
            src="/heroscreen1.png"
            alt="Fondo principal de servicios Omia"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-[1.22]"
          />
        </motion.div>

        <motion.div
          style={{ opacity: heroOverlayOpacity }}
          className="pointer-events-none absolute inset-0 bg-black"
        />

        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="relative z-10 h-full grid md:place-content-center md:pt-0 place-content-start pt-56 text-center px-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.25 }}
            className="text-white leading-[1.03] mx-auto max-w-[18ch] text-[35px] md:text-[64px] termina-light"
          >
            {titleParts[0]}{' '}
            <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent termina-medium">
              {heroHighlighted}
            </span>
            {titleParts[1]}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.25 }}
            className="text-white mt-10 text-md md:text-xl md:mt-10 max-w-[92ch] mx-auto font-poppins"
          >
            {heroDescription}
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
              <span>Agenda una consultoria</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function ServicesShowcaseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = servicesShowcase[activeIndex];
  const ActiveIcon = activeSlide.icon;
  const mobileMetrics = [
    { label: 'UX', value: 'Clara' },
    { label: 'Flujos', value: 'Reales' },
    { label: 'Escala', value: 'Lista' },
  ];

  const mobileFeatures = [
    'Apps para clientes y equipos internos',
    'Experiencias mobile-first con foco operativo',
    'Integraciones, notificaciones y seguimiento en tiempo real',
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % servicesShowcase.length);
    }, 4800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative px-4 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <ServicesSectionHeader
          title="Apps"
          highlighted="moviles"
          subtitle="Mockups de web y mobile que van rotando para mostrar cómo podrían verse los distintos sistemas que construimos."
          accentClassName="bg-gradient-to-r from-cyan-300 via-blue-500 to-indigo-600"
        />

        <div className="grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] xl:gap-10">
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_40px_120px_rgba(0,0,0,.22)] backdrop-blur-xl sm:p-8">
              <div
                className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r ${activeSlide.accent} px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-white/90`}
              >
                <ActiveIcon className="h-3.5 w-3.5" />
                <span>{activeSlide.eyebrow}</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="mt-5 space-y-5"
                >
                  <div>
                    <h3 className="text-3xl font-termina text-white sm:text-4xl">
                      <span className={`bg-gradient-to-r ${activeSlide.accent} bg-clip-text text-transparent termina-bold`}>
                        {activeSlide.title}
                      </span>
                    </h3>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
                      {activeSlide.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {activeSlide.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-2xl border border-white/10 bg-black/20 px-3 py-4 text-center">
                        <p className="text-lg font-semibold text-white">{metric.value}</p>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-gray-400">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-6 flex flex-wrap gap-2">
                {servicesShowcase.map((slide, index) => {
                  const isActive = index === activeIndex;

                  return (
                    <button
                      key={slide.title}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`rounded-full border px-3 py-2 text-xs font-medium transition-all duration-300 ${
                        isActive
                          ? `border-white/15 bg-gradient-to-r ${slide.accent} text-white shadow-[0_12px_30px_rgba(0,0,0,.18)]`
                          : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/15 hover:text-white'
                      }`}
                      aria-label={`Ver ejemplo ${slide.title}`}
                    >
                      {slide.title}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.title}
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 p-4 shadow-[0_50px_120px_rgba(0,0,0,.3)] backdrop-blur-2xl sm:p-5"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${activeSlide.surface}`} />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                <div className="relative">
                  <div className="flex items-center justify-between rounded-[1.4rem] border border-white/10 bg-black/20 px-4 py-3 sm:px-5">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                    </div>
                    <div className={`rounded-full border border-white/10 bg-gradient-to-r ${activeSlide.accent} px-3 py-1 text-[10px] uppercase tracking-[0.26em] text-white/90`}>
                      {activeSlide.browserTitle}
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 lg:grid-cols-[1.04fr_0.96fr]">
                    <div className="rounded-[1.8rem] border border-white/10 bg-[#0d1018]/90 p-5 sm:p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.24em] text-gray-400">Web preview</p>
                          <h4 className="mt-2 text-xl font-semibold text-white sm:text-2xl">{activeSlide.title}</h4>
                        </div>
                        <ActiveIcon className="h-10 w-10 text-white/70" />
                      </div>

                      <div className="mt-6 space-y-3">
                        {activeSlide.browserRows.map((row, index) => (
                          <div key={row} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                            <div className={`h-2.5 w-2.5 rounded-full bg-gradient-to-r ${activeSlide.accent}`} />
                            <p className="text-sm text-gray-200 sm:text-base">{row}</p>
                            <span className="ml-auto text-[11px] uppercase tracking-[0.22em] text-gray-500">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative flex items-center justify-center">
                      <div className={`absolute inset-8 rounded-full bg-gradient-to-br ${activeSlide.accent} opacity-35 blur-3xl`} />
                      <div className="relative w-full max-w-[280px] rounded-[2.4rem] border border-white/10 bg-[#0d1018]/92 p-3 shadow-[0_40px_100px_rgba(0,0,0,.28)]">
                        <div className="mx-auto h-5 w-24 rounded-[999px] border border-white/10 bg-black/25" />
                        <div className="mt-3 rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/6 to-black/20 p-4">
                          <p className="text-[11px] uppercase tracking-[0.24em] text-gray-400">{activeSlide.phoneTitle}</p>
                          <div className="mt-4 space-y-3">
                            {activeSlide.phoneRows.map((row, index) => (
                              <div key={row} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
                                <div className={`h-9 w-9 rounded-xl bg-gradient-to-br ${activeSlide.accent}`} />
                                <div className="min-w-0 flex-1">
                                  <p className="text-sm font-medium text-white">{row}</p>
                                  <p className="mt-1 text-[11px] text-gray-400">Paso {index + 1}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileAppsShowcaseSection() {
  const mobileFeatures = [
    'Apps para clientes y equipos internos',
    'Experiencias mobile-first con foco operativo',
    'Integraciones, notificaciones y seguimiento en tiempo real',
  ];

  return (
    <section className="relative px-4 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] xl:gap-14">
        <ShowcaseContentPanel
          eyebrow="App movil"
          eyebrowIcon={MonitorSmartphone}
          title="Productos pensados para telefono"
          description="Construimos apps moviles para procesos reales: seguimiento, aprobaciones, operacion interna, experiencia de cliente y tareas que necesitan resolverse rapido desde el celular."
          features={mobileFeatures}
          accentClassName="from-cyan-300 via-sky-400 to-blue-600"
        />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[760px] border-0 bg-transparent shadow-none">
              <div className="relative aspect-[5/6] border-0 bg-transparent shadow-none">
                <Image
                  src="/mockupiphone.png"
                  alt="Mockup de app movil"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServiceVisualSplitSection({
  eyebrow,
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  accentClassName,
  imageClassName = '',
  eyebrowIcon,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  accentClassName: string;
  imageClassName?: string;
  eyebrowIcon?: LucideIcon;
  reverse?: boolean;
}) {
  return (
    <section className="relative px-4 py-20 lg:py-24">
      <div className={`mx-auto flex max-w-7xl flex-col gap-12 lg:min-h-[560px] lg:flex-row lg:items-center lg:justify-between xl:gap-20 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        <ShowcaseContentPanel
          eyebrow={eyebrow}
          eyebrowIcon={eyebrowIcon}
          title={title}
          description={description}
          features={features}
          accentClassName={accentClassName}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className={`relative flex w-full justify-center ${reverse ? 'lg:justify-start lg:flex-[0_0_52%]' : 'lg:justify-end lg:flex-[0_0_52%]'}`}
        >
          <div className="relative w-full max-w-[1400px] border-0 bg-transparent shadow-none">
            <div className="relative aspect-[16/10] border-0 bg-transparent shadow-none">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 64vw"
                className={`object-contain object-center ${imageClassName}`}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WebShowcaseSection() {
  return (
    <ServiceVisualSplitSection
      eyebrow="Webs"
      title="Sitios y plataformas web"
      description="Desarrollamos sitios institucionales, landings, portales y plataformas web con foco en conversion, claridad de contenido y escalabilidad tecnica."
      features={[
        'Webs institucionales y comerciales',
        'Landings y experiencias orientadas a captacion',
        'Plataformas web para clientes, equipos y operacion',
      ]}
      imageSrc="/macbookpro.png"
      imageAlt="Visual de plataforma web"
      accentClassName="from-purple-300 via-violet-500 to-purple-700"
      imageClassName="scale-[1.08]"
      reverse
    />
  );
}

function SystemsShowcaseSection() {
  return (
    <ServiceVisualSplitSection
      eyebrow="Sistemas"
      title="CRM, gestion y multiagente"
      description="Armamos sistemas internos, CRMs y entornos de gestion con automatizaciones, trazabilidad y logica operativa para equipos que necesitan orden real."
      features={[
        'CRMs y paneles administrativos',
        'Sistemas multiusuario y multiagente',
        'Flujos de trabajo, estados, permisos e integraciones',
      ]}
      imageSrc="/macpc.png"
      imageAlt="Visual de sistema CRM y gestion"
      accentClassName="from-emerald-300 via-teal-400 to-cyan-500"
      imageClassName="scale-[1.62] shadow-none drop-shadow-none"
    />
  );
}

function EcommerceShowcaseSection() {
  return (
    <ServiceVisualSplitSection
      eyebrow="Ecommerce"
      title="Tiendas y experiencias de venta"
      description="Disenamos ecommerce, catalogos y funnels con foco en experiencia de compra, rendimiento y una operacion mas conectada con el negocio."
      features={[
        'Ecommerce y catalogos digitales',
        'Experiencias de compra mas claras y rapidas',
        'Integracion con pagos, stock, CRM y automatizaciones',
      ]}
      imageSrc="/web.png"
      imageAlt="Visual de ecommerce"
      accentClassName="from-blue-300 via-indigo-500 to-violet-500"
      imageClassName="scale-[1.08]"
      reverse
    />
  );
}

function EndToEndSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFeature = endToEndFeatures[activeIndex];
  const ActiveIcon = activeFeature.icon;

  return (
    <section className="relative overflow-hidden px-4 py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(139,92,246,0.14),transparent_26%),radial-gradient(circle_at_82%_26%,rgba(168,85,247,0.12),transparent_24%),linear-gradient(180deg,rgba(12,14,21,0)_0%,rgba(36,18,56,0.12)_100%)]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <ServicesSectionHeader
          title="Nuestro trabajo"
          highlighted="de punta a punta"
          accentClassName="bg-gradient-to-r from-violet-300 via-purple-500 to-fuchsia-500"
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
  return (
    <section className="relative overflow-hidden py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(34,211,238,0.08),transparent_24%),radial-gradient(circle_at_82%_78%,rgba(96,165,250,0.08),transparent_24%),linear-gradient(180deg,rgba(7,17,26,0)_0%,rgba(8,22,31,0.12)_100%)]" />
      <div className="mx-auto max-w-7xl px-4">
        <ServicesSectionHeader
          title="Servicios"
          highlighted="principales"
          accentClassName="bg-gradient-to-r from-cyan-300 via-blue-500 to-violet-500"
          subtitle="Producto digital, software, automatizacion, IA, ecommerce y datos organizados dentro del mismo lenguaje visual de Omia."
        />
      </div>

      <div className="space-y-0">
        <MobileAppsShowcaseSection />
        <WebShowcaseSection />
        <SystemsShowcaseSection />
        <EcommerceShowcaseSection />
      </div>
    </section>
  );
}

function ShowcaseContentPanel({
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  title,
  description,
  features,
  accentClassName,
}: {
  eyebrow: string;
  eyebrowIcon?: LucideIcon;
  title: string;
  description: string;
  features: string[];
  accentClassName: string;
}) {
  return (
    <div className="w-full max-w-[640px] space-y-7 lg:max-w-[640px] lg:flex-[0_0_44%]">
      <div className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.24em] text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`}>
        <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r ${accentClassName}`}>
          {EyebrowIcon ? <EyebrowIcon className="h-3 w-3 text-white" /> : <span className="h-1.5 w-1.5 rounded-full bg-white" />}
        </span>
        <span>{eyebrow}</span>
      </div>

      <div className="space-y-5">
        <div>
          <h3 className="max-w-[16ch] text-[2.25rem] leading-[0.94] tracking-[-0.05em] text-white sm:max-w-[15ch] sm:text-[3.1rem] lg:max-w-[14ch] lg:text-[3.45rem] xl:max-w-[15ch] xl:text-[3.75rem]">
            <span className={`bg-gradient-to-r ${accentClassName} bg-clip-text text-transparent termina-medium`}>
              {title}
            </span>
          </h3>
          <p className="mt-5 max-w-[52ch] text-[1.02rem] leading-[1.8] text-gray-300 sm:text-[1.06rem]">
            {description}
          </p>
        </div>

        <div className="space-y-3.5">
          {features.map((feature) => (
            <div key={feature} className="flex items-start gap-3.5">
              <div className="relative mt-[0.42rem] flex h-3.5 w-3.5 items-center justify-center">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${accentClassName} opacity-20`} />
                <div className={`relative h-2 w-2 rounded-full bg-gradient-to-r ${accentClassName}`} />
              </div>
              <p className="text-[0.98rem] leading-[1.65] text-gray-200">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
function WorkProcessSection() {
  return (
    <section className="relative px-4 py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_22%,rgba(34,211,238,0.12),transparent_24%),radial-gradient(circle_at_84%_78%,rgba(59,130,246,0.1),transparent_26%),linear-gradient(180deg,rgba(8,15,24,0)_0%,rgba(8,27,38,0.14)_100%)]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <ServicesSectionHeader
          title="Como"
          highlighted="trabajamos"
          accentClassName="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500"
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
              className="rounded-2xl bg-gradient-to-b from-cyan-400/10 via-blue-500/6 to-transparent p-6 shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 font-semibold text-cyan-300">
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
    <section className="relative px-4 py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(167,139,250,0.12),transparent_24%),radial-gradient(circle_at_78%_74%,rgba(192,132,252,0.1),transparent_26%),linear-gradient(180deg,rgba(15,12,26,0)_0%,rgba(29,16,44,0.14)_100%)]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <ServicesSectionHeader
          title="Nuestro"
          highlighted="diferencial"
          accentClassName="bg-gradient-to-r from-violet-300 via-purple-400 to-fuchsia-500"
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
                      <div className="rounded-2xl bg-gradient-to-b from-purple-400/8 via-violet-500/4 to-transparent p-6 shadow-lg transition-colors">
                        <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-violet-300">{card.title}</p>
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
    <section className="relative px-4 py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(16,185,129,0.12),transparent_24%),radial-gradient(circle_at_82%_80%,rgba(45,212,191,0.09),transparent_26%),linear-gradient(180deg,rgba(8,20,19,0)_0%,rgba(8,28,24,0.14)_100%)]" />
      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        <div>
          <ServicesSectionHeader
            title="En que tipo de proyectos"
            highlighted="podemos ayudar"
            accentClassName="bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-500"
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
                className="rounded-xl bg-gradient-to-b from-emerald-400/12 via-teal-400/6 to-transparent p-4 sm:p-6"
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
            accentClassName="bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500"
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
                  className="rounded-2xl bg-gradient-to-b from-emerald-400/8 via-cyan-500/5 to-transparent p-5"
                >
                  <Icon className="mb-4 h-8 w-8 text-emerald-300" />
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
    <section className="relative px-4 py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(96,165,250,0.12),transparent_24%),radial-gradient(circle_at_80%_22%,rgba(139,92,246,0.12),transparent_24%),linear-gradient(180deg,rgba(12,14,23,0)_0%,rgba(14,18,40,0.16)_100%)]" />
      <div className="max-w-7xl mx-auto relative z-10 space-y-14">
        <ServicesSectionHeader
          title="Como nos"
          highlighted="involucramos"
          accentClassName="bg-gradient-to-r from-blue-300 via-indigo-400 to-violet-500"
          subtitle="Nos involucramos en el proyecto como partner, no solo como proveedor."
        />

        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-start">
          <div className="rounded-2xl bg-gradient-to-b from-blue-400/10 via-indigo-500/6 to-transparent p-8">
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
                  className="rounded-2xl bg-gradient-to-b from-indigo-400/8 via-blue-500/5 to-transparent p-5"
                >
                  <Icon className="mb-4 h-8 w-8 text-blue-300" />
                  <p className="text-white leading-relaxed">{card.title}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-blue-400/10 via-violet-500/6 to-transparent px-6 py-12 text-center shadow-2xl md:px-12">
          <p className="mb-4 text-[11px] uppercase tracking-[0.24em] text-blue-300">Propuesta de valor</p>
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
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-400 to-violet-600 px-8 py-4 font-semibold text-white transition-all duration-300"
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

  const sectionRefs = [heroRef, servicesRef, endToEndRef, processRef, differentialRef, projectQualityRef, involvementRef];

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
    { id: 'servicios-principales', label: 'Servicios', description: 'Oferta principal de Omia', icon: serviceCategories[0].icon, href: '#servicios-principales', type: 'scroll' as const },
    { id: 'trabajo', label: 'Trabajo', description: 'De punta a punta', icon: endToEndFeatures[0].icon, href: '#trabajo', type: 'scroll' as const },
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
    { name: 'Servicios', href: '#servicios-principales', type: 'scroll' as const },
    { name: 'Trabajo', href: '#trabajo', type: 'scroll' as const },
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

        <div id="servicios-principales" ref={servicesRef}>
          <ServicesMainSection />
        </div>

        <div id="trabajo" ref={endToEndRef}>
          <EndToEndSection />
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
