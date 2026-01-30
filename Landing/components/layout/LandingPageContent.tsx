'use client'; 
import React, { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { motion } from 'framer-motion';


// HACK: Define the custom element type directly in the file to resolve linter issues.
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & { 'agent-id'?: string }, HTMLElement>;
        }
    }
}

import { Footer, Nav } from '@Landing/components';
import {
  Solutions,
  MetricsSection,
  TestimonialsSection,
  HeroSection,
  ProblemsSection,
  AgentsFunctions,
  IntegrationsSection,
  SmartSection,
  ConsultingSection,
  ProcessSection,
  MultiAgentSection,
  FAQSectionNew,
} from '@Landing/sections';


// --- CONFIGURACIÓN MEJORADA ---
const SCROLL_CONFIGS = {
    PARALLAX_Y1: [0, -80],
    PARALLAX_Y2: [0, -120],
    SCROLL_THRESHOLD: 50
};

const ANIMATIONS = {
    LOADING_DURATION: 0.2,
    SECTION_DELAY: 0.02,
    STAGGER_DELAY: 0.02
};

// Fondo sin partículas ni glow para mejor rendimiento
const AdvancedBackground = React.memo(() => (
    <div className="fixed inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c0e15]/4 via-[#0a0a0f] to-[#0c0e15]" />
    </div>
));


// --- NUEVO: PROGRESS BAR POR SECCIONES ---
const SectionProgressBar = React.memo(({ sections, sectionRefs }: {
    sections: any[],
    sectionRefs: React.RefObject<HTMLDivElement | null>[]
}) => {
    const [sectionProgress, setSectionProgress] = useState<number[]>(new Array(sections.length).fill(0));

    useEffect(() => {
        const updateProgress = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const newProgress = [...sectionProgress];

            sectionRefs.forEach((ref, index) => {
                if (ref.current) {
                    const rect = ref.current.getBoundingClientRect();
                    const sectionTop = scrollY + rect.top;
                    const sectionHeight = rect.height;
                    const sectionEnd = sectionTop + sectionHeight;

                    // Calcular progreso de la sección
                    if (scrollY >= sectionTop - windowHeight / 2 && scrollY <= sectionEnd) {
                        const progress = Math.max(0, Math.min(1,
                            (scrollY - sectionTop + windowHeight / 2) / (sectionHeight + windowHeight / 2)
                        ));
                        newProgress[index] = progress;

                        if (progress > 0.1) {
                            // Section is active (logic removed as activeSection is not used)
                        }
                    } else if (scrollY > sectionEnd) {
                        newProgress[index] = 1;
                    } else {
                        newProgress[index] = 0;
                    }
                }
            });

            setSectionProgress(newProgress);
        };

        const throttledUpdate = () => {
            requestAnimationFrame(updateProgress);
        };

        window.addEventListener('scroll', throttledUpdate, { passive: true });
        updateProgress(); // Initial call

        return () => window.removeEventListener('scroll', throttledUpdate);
    }, [sectionRefs]);

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            {/* Barra principal de progreso */}
            <div className="h-[2px] bg-black/30 backdrop-blur-sm">
                <motion.div
                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 origin-left"
                    style={{
                        scaleX: sectionProgress.reduce((acc, curr) => acc + curr, 0) / sections.length
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                />
            </div>


        </div>
    );
});



// --- COMPONENTE PRINCIPAL ---
export const LandingPageContent: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    // Refs para cada sección
    const heroRef = useRef<HTMLDivElement>(null);
    const problemsRef = useRef<HTMLDivElement>(null);
    const whyRef = useRef<HTMLDivElement>(null);
    const solutionsRef = useRef<HTMLDivElement>(null);
    const metricsRef = useRef<HTMLDivElement>(null);
    const testimonialsRef = useRef<HTMLDivElement>(null);
    const pricingRef = useRef<HTMLDivElement>(null);
    const agentsFunctionsRef = useRef<HTMLDivElement>(null);
    const crmIntegradoRef = useRef<HTMLDivElement>(null);
    const integrationsRef = useRef<HTMLDivElement>(null);
    const smartRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLDivElement>(null);
    const processRef = useRef<HTMLDivElement>(null);
    const faqRef = useRef<HTMLDivElement>(null);

    const sectionRefs = [heroRef, problemsRef, whyRef, solutionsRef, metricsRef, testimonialsRef, pricingRef, agentsFunctionsRef, crmIntegradoRef, integrationsRef, smartRef, videoRef, processRef, faqRef];

    // Optimización de event handlers
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

    // Secciones con configuración mejorada
    const sections = useMemo(() => [
        { Component: Solutions, name: 'Soluciones', color: 'slate', delay: ANIMATIONS.SECTION_DELAY * 2, ref: solutionsRef },
        { Component: AgentsFunctions, name: 'Funciones de Agentes', color: 'purple', delay: ANIMATIONS.SECTION_DELAY * 5, ref: agentsFunctionsRef },
        { Component: MultiAgentSection, name: 'Multiagente', color: 'violet', delay: ANIMATIONS.SECTION_DELAY * 6, ref: crmIntegradoRef },
         { Component: IntegrationsSection, name: 'Integraciones', color: 'orange', delay: ANIMATIONS.SECTION_DELAY * 7, ref: integrationsRef },
        { Component: SmartSection, name: 'Smart Functions', color: 'yellow', delay: ANIMATIONS.SECTION_DELAY * 8, ref: smartRef },
        { Component: ConsultingSection, name: 'Video Demostrativo', color: 'emerald', delay: ANIMATIONS.SECTION_DELAY * 9, ref: videoRef },
        { Component: MetricsSection, name: 'Metricas', color: 'blue', delay: ANIMATIONS.SECTION_DELAY * 3, ref: metricsRef },
        { Component: TestimonialsSection, name: 'Testimonios', color: 'violet', delay: ANIMATIONS.SECTION_DELAY * 4, ref: testimonialsRef },
        { Component: ProcessSection, name: 'Proceso', color: 'indigo', delay: ANIMATIONS.SECTION_DELAY * 10, ref: processRef },
        { Component: FAQSectionNew, name: 'FAQ', color: 'pink', delay: ANIMATIONS.SECTION_DELAY * 11, ref: faqRef },
    ], []);

    const allSections = [
        { name: 'Inicio', color: 'blue' },
        ...sections
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="font-sans relative overflow-hidden bg-[#0c0e15]"
        >
            <AdvancedBackground />

            {/* Progress Bar por Secciones */}
            <SectionProgressBar sections={allSections} sectionRefs={sectionRefs} />

            {/* Main Content Container */}
            <div className="relative z-10 min-h-screen bg-transparent text-white">

                {/* ElevenLabs Integration */}
                {React.createElement('elevenlabs-convai', { 'agent-id': 'agent_01jxn9t1hbe9naz1j34knyj7kg' })}

                {/* Navigation mejorada */}
                <Nav isScrolled={isScrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

                <div id="hero" ref={heroRef}>
                    <HeroSection />
                </div>



                {/* Content Sections con animaciones optimizadas */}
                <div className="space-y-0">
                    {sections.map(({ Component, delay, ref }, index) => {
                        // Mapear IDs únicos según el componente
                        let sectionId;
                        if (Component === ProblemsSection) sectionId = 'problems';
                        else if (Component === Solutions) sectionId = 'solutions';
                        else if (Component === AgentsFunctions) sectionId = 'why'; // Funciones principales
                        else if (Component === IntegrationsSection) sectionId = 'integrations';
                        else if (Component === SmartSection) sectionId = 'smart-functions';
                        else if (Component === MultiAgentSection) sectionId = 'multiagente';
                        else if (Component === ConsultingSection) sectionId = 'consulting';
                        else if (Component === TestimonialsSection) sectionId = 'testimonials';
                        else if (Component === MetricsSection) sectionId = 'metrics';
                        else if (Component === ProcessSection) sectionId = 'process';
                        else if (Component === FAQSectionNew) sectionId = 'faq';
                        else sectionId = `section-${index}`;

                        return (
                            <div
                                key={index}
                                id={sectionId}
                                ref={ref}
                                className="relative"
                            >
                                <Component />
                            </div>
                        );
                    })}
                </div>

                <div className="relative">
                    <Footer />
                </div>
            </div>
        </motion.div>
    );
};

