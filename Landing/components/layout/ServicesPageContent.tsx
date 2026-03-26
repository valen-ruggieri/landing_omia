'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, MonitorSmartphone, type LucideIcon } from 'lucide-react';
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
      <div className="max-w-7xl mx-auto relative z-10">
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
  const projectCardAccents = [
    {
      border: 'border-emerald-300/12',
      surface: 'from-emerald-400/14 via-emerald-400/5 to-transparent',
      glow: 'bg-emerald-400/12',
      line: 'from-transparent via-emerald-300/50 to-transparent',
      meta: 'text-emerald-200/80',
    },
    {
      border: 'border-cyan-300/12',
      surface: 'from-cyan-400/14 via-sky-400/5 to-transparent',
      glow: 'bg-cyan-400/12',
      line: 'from-transparent via-cyan-300/50 to-transparent',
      meta: 'text-cyan-200/80',
    },
    {
      border: 'border-blue-300/12',
      surface: 'from-blue-400/14 via-indigo-400/5 to-transparent',
      glow: 'bg-blue-400/12',
      line: 'from-transparent via-blue-300/50 to-transparent',
      meta: 'text-blue-200/80',
    },
    {
      border: 'border-violet-300/12',
      surface: 'from-violet-400/14 via-violet-400/5 to-transparent',
      glow: 'bg-violet-400/12',
      line: 'from-transparent via-violet-300/50 to-transparent',
      meta: 'text-violet-200/80',
    },
    {
      border: 'border-fuchsia-300/12',
      surface: 'from-fuchsia-400/14 via-purple-400/5 to-transparent',
      glow: 'bg-fuchsia-400/12',
      line: 'from-transparent via-fuchsia-300/50 to-transparent',
      meta: 'text-fuchsia-200/80',
    },
  ];

  const projectCardLayouts = [
    'xl:col-span-4',
    'xl:col-span-4 xl:-mt-6',
    'xl:col-span-4',
    'xl:col-span-5',
    'xl:col-span-3 xl:mt-4',
    'xl:col-span-4',
    'xl:col-span-4',
    'xl:col-span-5 xl:-mt-4',
    'xl:col-span-3',
  ];

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

          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-12">
            {projectTypes.map((project, index) => {
              const accent = projectCardAccents[index % projectCardAccents.length];
              const layout = projectCardLayouts[index] ?? 'xl:col-span-4';

              return (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
                whileHover={{ y: -4 }}
                className={`group relative overflow-hidden rounded-[1.75rem] border ${accent.border} ${layout} bg-white/[0.03] p-5 backdrop-blur-sm sm:p-6`}
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${accent.surface}`} />
                <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent.line}`} />
                <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full ${accent.glow} blur-3xl transition-opacity duration-300 group-hover:opacity-100`} />

                <div className="relative flex min-h-[168px] flex-col justify-between gap-7">
                  <div className="space-y-5">
                    <span className={`inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.24em] ${accent.meta}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="max-w-[24ch] text-lg leading-[1.2] text-white sm:text-[1.35rem]">
                      {project}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] uppercase tracking-[0.24em] ${accent.meta}`}>
                      Proyecto Omia
                    </span>
                    <ArrowRight className={`h-4 w-4 ${accent.meta}`} />
                  </div>
                </div>
              </motion.div>
              );
            })}
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
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const differentialRef = useRef<HTMLDivElement>(null);
  const projectQualityRef = useRef<HTMLDivElement>(null);
  const involvementRef = useRef<HTMLDivElement>(null);

  const sectionRefs = [heroRef, servicesRef, processRef, differentialRef, projectQualityRef, involvementRef];

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


