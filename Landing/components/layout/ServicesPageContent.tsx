'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Activity, BriefcaseBusiness, GraduationCap, ShieldCheck, Sparkles, Waypoints } from 'lucide-react';
import { Footer, Nav } from '@Landing/components';
import {
  DifferentialSection,
  InvolvementSection,
  ProjectsSection,
  QualityCareSection,
  ServicesHeroSection,
  ServicesMainSection,
  TrackingEvolutionSection,
  TrainingMentoringSection,
  WorkProcessSection,
} from '@Landing/components/services';

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
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(169,85,247,0),transparent_30%),radial-gradient(circle_at_82%_16%,rgba(34,211,238,0.10),transparent_28%),radial-gradient(circle_at_28%_90%,rgba(16,185,129,0.08),transparent_26%),linear-gradient(180deg,rgba(8,10,16,0.92)_0%,rgba(10,11,17,1)_100%)]" />
  </div>
));

const SectionProgressBar = React.memo(({
  sectionRefs,
}: {
  sectionRefs: React.RefObject<HTMLDivElement | null>[];
}) => {
  const [sectionProgress, setSectionProgress] = useState<number[]>(new Array(sectionRefs.length).fill(0));

  useEffect(() => {
    const updateProgress = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      setSectionProgress(() =>
        sectionRefs.map((ref) => {
          if (!ref.current) {
            return 0;
          }

          const rect = ref.current.getBoundingClientRect();
          const sectionTop = scrollY + rect.top;
          const sectionHeight = rect.height;
          const sectionEnd = sectionTop + sectionHeight;

          if (scrollY >= sectionTop - windowHeight / 2 && scrollY <= sectionEnd) {
            return Math.max(
              0,
              Math.min(1, (scrollY - sectionTop + windowHeight / 2) / (sectionHeight + windowHeight / 2))
            );
          }

          if (scrollY > sectionEnd) {
            return 1;
          }

          return 0;
        })
      );
    };

    const throttledUpdate = () => {
      requestAnimationFrame(updateProgress);
    };

    window.addEventListener('scroll', throttledUpdate, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', throttledUpdate);
  }, [sectionRefs]);

  return (
    <div className="fixed left-0 right-0 top-0 z-50">
      <div className="h-[2px] bg-black/30 backdrop-blur-sm">
        <motion.div
          className="h-full origin-left bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"
          style={{
            scaleX: sectionProgress.reduce((acc, curr) => acc + curr, 0) / sectionRefs.length,
          }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
});

export function ServicesPageContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const differentialRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const qualityRef = useRef<HTMLDivElement>(null);
  const trainingRef = useRef<HTMLDivElement>(null);
  const trackingRef = useRef<HTMLDivElement>(null);
  const involvementRef = useRef<HTMLDivElement>(null);

  const sectionRefs = [
    heroRef,
    servicesRef,
    processRef,
    differentialRef,
    projectsRef,
    qualityRef,
    trainingRef,
    trackingRef,
    involvementRef,
  ];

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
    handleScroll();

    return () => window.removeEventListener('scroll', optimizedHandleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const sections = useMemo(
    () => [
      { id: 'servicios-principales', label: 'Servicios', color: 'from-cyan-300 via-blue-500 to-violet-500', icon: Sparkles },
      { id: 'como-trabajamos', label: 'Proceso', color: 'from-cyan-300 via-sky-400 to-blue-500', icon: Waypoints },
      { id: 'diferencial', label: 'Diferencial', color: 'from-violet-300 via-purple-400 to-fuchsia-500', icon: Sparkles },
      { id: 'proyectos', label: 'Proyectos', color: 'from-emerald-300 via-cyan-400 to-blue-500', icon: BriefcaseBusiness },
      { id: 'que-cuidamos', label: 'Calidad', color: 'from-emerald-300 via-teal-400 to-cyan-500', icon: ShieldCheck },
      { id: 'capacitacion-mentoria', label: 'Capacitacion', color: 'from-violet-300 via-indigo-400 to-fuchsia-500', icon: GraduationCap },
      { id: 'seguimiento-evolucion', label: 'Seguimiento', color: 'from-emerald-300 via-cyan-400 to-blue-500', icon: Activity },
      { id: 'partner', label: 'Partner', color: 'from-blue-300 via-indigo-400 to-violet-500', icon: BriefcaseBusiness },
    ],
    []
  );

  const navigationItems = useMemo(
    () =>
      sections.map((section) => ({
        id: section.id,
        label: section.label,
        href: `#${section.id}`,
        type: 'scroll' as const,
      })),
    [sections]
  );

  const mobileMenuSections = useMemo(
    () => [
      {
        title: 'SERVICIOS',
        subtitle: 'Secciones de la pagina',
        items: sections.map((section) => ({
          id: section.id,
          label: section.label,
          description: `Ir a ${section.label.toLowerCase()} en /servicios`,
          icon: section.icon,
          href: `#${section.id}`,
          type: 'scroll' as const,
        })),
      },
    ],
    [sections]
  );

  const footerLinks = [
    { name: 'Servicios', href: '#servicios-principales', type: 'scroll' as const },
    { name: 'Proceso', href: '#como-trabajamos', type: 'scroll' as const },
    { name: 'Diferencial', href: '#diferencial', type: 'scroll' as const },
    { name: 'Proyectos', href: '#proyectos', type: 'scroll' as const },
    { name: 'Calidad', href: '#que-cuidamos', type: 'scroll' as const },
    { name: 'Capacitacion', href: '#capacitacion-mentoria', type: 'scroll' as const },
    { name: 'Seguimiento', href: '#seguimiento-evolucion', type: 'scroll' as const },
    { name: 'Partner', href: '#partner', type: 'scroll' as const },
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a0b11]">
      <AdvancedBackground />
      <SectionProgressBar sectionRefs={sectionRefs} />

      <Nav
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navigationItems={navigationItems}
        mobileMenuSections={mobileMenuSections}
        isScrolled={isScrolled}
        logoHref="#hero"
        logoType="scroll"
      />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: ANIMATIONS.LOADING_DURATION }}
        className="relative z-10"
      >
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

        <div id="proyectos" ref={projectsRef}>
          <ProjectsSection />
        </div>

        <div id="que-cuidamos" ref={qualityRef}>
          <QualityCareSection />
        </div>

        <div id="capacitacion-mentoria" ref={trainingRef}>
          <TrainingMentoringSection />
        </div>

        <div id="seguimiento-evolucion" ref={trackingRef}>
          <TrackingEvolutionSection />
        </div>

        <div id="partner" ref={involvementRef}>
          <InvolvementSection />
        </div>
      </motion.main>

      <Footer quickLinks={footerLinks} />
    </div>
  );
}
