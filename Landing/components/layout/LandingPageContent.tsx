'use client'; 
import React, { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring, } from 'framer-motion';


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
  MultiagenteSection,
  FAQSectionNew,
} from '@Landing/sections';


// --- CONFIGURACIÓN MEJORADA ---
const SCROLL_CONFIGS = {
    PARALLAX_Y1: [0, -80],
    PARALLAX_Y2: [0, -120],
    SCROLL_THRESHOLD: 50
};

const ANIMATIONS = {
    LOADING_DURATION: 1.2,
    CURSOR_SPRING: { stiffness: 400, damping: 25 },
    SECTION_DELAY: 0.15,
    PARTICLES_COUNT: 10,
    STAGGER_DELAY: 0.1
};

// --- COMPONENTES OPTIMIZADOS ---
// Partículas solo en cliente para evitar hydration mismatch (Math.random distinto en server vs client)
const AnimatedParticles = React.memo(() => {
    const [particles, setParticles] = useState<Array<{ id: number; left: string; top: string; delay: number; duration: number }>>([]);

    useEffect(() => {
        setParticles(
            Array.from({ length: ANIMATIONS.PARTICLES_COUNT }, (_, i) => ({
                id: i,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                delay: Math.random() * 10,
                duration: 10 + Math.random() * 1
            }))
        );
    }, []);

    if (particles.length === 0) return <div className="absolute inset-0 pointer-events-none" />;

    return (
        <div className="absolute inset-0 pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute w-30 h-30 bg-gradient-to-r from-emerald-400/10 to-violet-600/10 rounded-full "
                    style={{ left: particle.left, top: particle.top, filter: "blur(20px)" }}
                    animate={{
                        y: [0, -40, 0],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1.2, 0.5]
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
});
const GlowCursor = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Suavizar con resorte (spring)
    const springX = useSpring(x, { stiffness: 100, damping: 20 });
    const springY = useSpring(y, { stiffness: 100, damping: 20 });

    useEffect(() => {
        const updateMouse = (e: MouseEvent) => {
            x.set(e.clientX - 150); // centrado por tamaño del glow
            y.set(e.clientY - 150);
        };

        window.addEventListener("mousemove", updateMouse);
        return () => window.removeEventListener("mousemove", updateMouse);
    }, [x, y]);

    return (
        <motion.div
            className="fixed pointer-events-none z-10"
            style={{
                top: springY,
                left: springX,
                width: 300,
                height: 300,
                borderRadius: "9999px",
                background: `radial-gradient(circle, 
          rgba(59, 131, 246, 0.65) 0%, 
          rgba(169, 85, 247, 0.25) 40%, 
          transparent 80%)`,
                filter: "blur(80px)",
                opacity: 0.5,
            }}
        />
    );
};
const AdvancedBackground = React.memo(({ }: {
    mousePosition: { x: number; y: number };
    y1: any;
    y2: any;
}) => (
    <div className="fixed inset-0 z-0 pointer-events-none select-none">
        {/* Fondo base dark con degradado profundo */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c0e15]/4 via-[#0a0a0f] to-[#0c0e15]" />

        {/* Glow radial sutil que sigue el mouse */}





        {/* Partículas decorativas (opcional si ya son sutiles) */}
        <AnimatedParticles />




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



const CursorEffect = React.memo(({ mousePosition }: { mousePosition: { x: number; y: number } }) => {
    const cursorX = useMotionValue(0);
    const cursorY = useMotionValue(0);
    const springConfig = ANIMATIONS.CURSOR_SPRING;
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        cursorX.set(mousePosition.x * (window.innerWidth / 100) - 16);
        cursorY.set(mousePosition.y * (window.innerHeight / 100) - 16);
    }, [mousePosition, cursorX, cursorY]);

    return (
        <motion.div
            className="fixed w-8 h-8 border-2 border-blue-400/40 rounded-full pointer-events-none z-50 mix-blend-difference"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
            animate={{
                scale: [1, 1.1, 1],
                opacity: [0.6, 0.8, 0.6]
            }}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />
    );
});

// --- COMPONENTE PRINCIPAL OPTIMIZADO ---
export const LandingPageContent: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 400], SCROLL_CONFIGS.PARALLAX_Y1);
    const y2 = useTransform(scrollY, [0, 400], SCROLL_CONFIGS.PARALLAX_Y2);

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

    const handleMouseMove = useCallback((e: MouseEvent) => {
        requestAnimationFrame(() => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100
            });
        });
    }, []);

    useEffect(() => {
        // Event listeners optimizados
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
        window.addEventListener('mousemove', handleMouseMove, { passive: true });


        // Loading mejorado
        const timer = setTimeout(() => {
            setIsLoaded(true);

        }, ANIMATIONS.LOADING_DURATION * 1000);

        return () => {
            window.removeEventListener('scroll', optimizedHandleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
            clearTimeout(timer);

        };
    }, [handleScroll, handleMouseMove]);

    // Secciones con configuración mejorada
    const sections = useMemo(() => [
        { Component: Solutions, name: 'Soluciones', color: 'slate', delay: ANIMATIONS.SECTION_DELAY * 2, ref: solutionsRef },
        { Component: AgentsFunctions, name: 'Funciones de Agentes', color: 'purple', delay: ANIMATIONS.SECTION_DELAY * 5, ref: agentsFunctionsRef },
        { Component: MultiagenteSection, name: 'Multiagente', color: 'violet', delay: ANIMATIONS.SECTION_DELAY * 6, ref: crmIntegradoRef },
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
            transition={{ duration: 1, ease: "easeOut" }}
            className="font-sans relative overflow-hidden  bg-[#0c0e15]"
        >
            {/* Background System Optimizado */}
            <AdvancedBackground mousePosition={mousePosition} y1={y1} y2={y2} />

            {/* Progress Bar por Secciones */}
            <SectionProgressBar sections={allSections} sectionRefs={sectionRefs} />

            {/* Main Content Container */}
            <div className="relative z-10 min-h-screen bg-transparent text-white">

                {/* ElevenLabs Integration */}
                {React.createElement('elevenlabs-convai', { 'agent-id': 'agent_01jxn9t1hbe9naz1j34knyj7kg' })}

                {/* Navigation mejorada */}
                <Nav isScrolled={isScrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

                {/* Hero Section con animación mejorada */}
                <motion.div
                    id="hero"
                    ref={heroRef}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                >
                    <HeroSection />
                </motion.div>



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
                        else if (Component === MultiagenteSection) sectionId = 'multiagente';
                        else if (Component === ConsultingSection) sectionId = 'consulting';
                        else if (Component === TestimonialsSection) sectionId = 'testimonials';
                        else if (Component === MetricsSection) sectionId = 'metrics';
                        else if (Component === ProcessSection) sectionId = 'process';
                        else if (Component === FAQSectionNew) sectionId = 'faq';
                        else sectionId = `section-${index}`;

                        return (
                            <motion.div
                                key={index}
                                id={sectionId}
                                ref={ref}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{
                                    duration: 0.8,
                                    delay: delay + (index * ANIMATIONS.STAGGER_DELAY),
                                    ease: "easeOut"
                                }}
                                className="relative"
                            >
                                <Component />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <Footer />
                </motion.div>
            </div>


            <GlowCursor />

            {/* Cursor Effect Optimizado */}
            <CursorEffect mousePosition={mousePosition} />


        </motion.div>
    );
};

