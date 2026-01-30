'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Menu,
    X,
    Sparkles,
    Cpu,
    Layers,
    Plug,
    Zap,
    Video,
    BarChart3,
    MessageSquare,
    GitBranch,
    HelpCircle,
    type LucideIcon,
} from 'lucide-react';

// Rutas públicas de los logos (en public/)
const OMIA_ICON = '/omia-icon.svg';
const OMIA_LETRAS = '/omia-letras.svg';

interface NavProps {
    isScrolled: boolean;
    isMenuOpen: boolean;
    setIsMenuOpen: (open: boolean) => void;
}

// Items para desktop (orden según LandingPageContent)
const navigationItems = [
    { id: 'solutions', label: 'Personalización' },
    { id: 'why', label: 'Funciones' },
    { id: 'multiagente', label: 'Multiagente' },
    { id: 'integrations', label: 'Integraciones' },
    { id: 'smart-functions', label: 'Smart' },
    { id: 'consulting', label: 'Consultoría' },
    { id: 'metrics', label: 'Métricas' },
    { id: 'testimonials', label: 'Testimonios' },
    { id: 'process', label: 'Proceso' },
    { id: 'faq', label: 'FAQ' },
];

// Estructura del sidebar móvil: secciones con icono + título + descripción (estilo Omia)
const mobileMenuSections: {
    title: string;
    subtitle?: string;
    items: { id: string; label: string; description: string; icon: LucideIcon }[];
}[] = [
    {
        title: 'SOLUCIONES',
        subtitle: 'Personalización e IA',
        items: [
            { id: 'solutions', label: 'Personalización', description: 'Soluciones a medida para tu negocio', icon: Sparkles },
            { id: 'why', label: 'Funciones', description: 'Todo lo que OMIA puede hacer por ti', icon: Cpu },
            { id: 'multiagente', label: 'Multiagente', description: 'Agentes que conversan, venden y agendan', icon: Layers },
        ],
    },
    {
        title: 'PLATAFORMA',
        subtitle: 'Integraciones y más',
        items: [
            { id: 'integrations', label: 'Integraciones', description: 'Conecta con tus aplicaciones actuales', icon: Plug },
            { id: 'smart-functions', label: 'Smart', description: 'Procesos que antes llevaban horas', icon: Zap },
            { id: 'consulting', label: 'Consultoría', description: 'Demostración y asesoría experta', icon: Video },
        ],
    },
    {
        title: 'MÉTRICAS Y MÁS',
        subtitle: 'Resultados y soporte',
        items: [
            { id: 'metrics', label: 'Métricas', description: 'Datos que importan en tiempo real', icon: BarChart3 },
            { id: 'testimonials', label: 'Testimonios', description: 'Lo que dicen nuestros clientes', icon: MessageSquare },
            { id: 'process', label: 'Proceso', description: 'Cómo implementamos tu solución', icon: GitBranch },
            { id: 'faq', label: 'FAQ', description: 'Preguntas frecuentes', icon: HelpCircle },
        ],
    },
];

export const Nav: React.FC<NavProps> = ({ isScrolled, isMenuOpen, setIsMenuOpen }) => {
    const [activeSection, setActiveSection] = useState('hero');

    // Función de scroll optimizada
    const scrollToSection = (sectionId: string) => {
        const element = document.querySelector(`#${sectionId}`) as HTMLElement;
        if (element) {
            const offset = 80; // Offset más preciso
            const elementPosition = element.offsetTop - offset;

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
        setActiveSection(sectionId);
        setIsMenuOpen(false);
    };

    // Detectar sección activa con Intersection Observer
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -20% 0px',
            threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
        };

        const observer = new IntersectionObserver((entries) => {
            // Encontrar la sección con mayor intersección visible
            let maxIntersection = 0;
            let activeSectionId = 'hero';

            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio > maxIntersection) {
                    maxIntersection = entry.intersectionRatio;
                    activeSectionId = entry.target.id;
                }
            });

            // Solo actualizar si hay una sección con intersección significativa
            if (maxIntersection > 0.1) {
                setActiveSection(activeSectionId);
            }
        }, observerOptions);

        // Observar todas las secciones en el orden correcto según LandingPageContent
        const sections = [
            'hero', 'solutions', 'why', 'multiagente', 'integrations',
            'smart-functions', 'consulting', 'metrics', 'testimonials', 'process', 'faq'
        ];

        sections.forEach((sectionId) => {
            const element = document.querySelector(`#${sectionId}`);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach((sectionId) => {
                const element = document.querySelector(`#${sectionId}`);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);

    return (
        <>
            {/* Navbar Principal */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
                    ? 'bg-[#0a0b11]/40 backdrop-blur-xl '
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between lg:justify-center h-15 sm:h-18 md:h-18 lg:h-20 xl:h-20 gap-4">
                        {/* En mobile: espaciador para centrar el logo */}
                        <div className="flex-1 lg:hidden min-w-0" aria-hidden />
                        {/* Logo — centrado en mobile, a la izquierda en desktop */}
                        <div className="flex justify-center lg:flex-initial lg:justify-start">
                            <motion.button
                                onClick={() => scrollToSection('hero')}
                                whileHover={{ scale: 1.02 }}
                                className="flex items-center gap-3 min-w-0 py-2 -my-2 group touch-manipulation"
                                aria-label="Ir al inicio"
                            >
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.25 }}
                                    className="relative flex-shrink-0 w-8 h-8 "
                                >
                                    <img
                                        src={OMIA_ICON}
                                        alt="OMIA Icon"
                                        className="w-full h-full transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                                    />
                                </motion.div>
                                <div className="flex flex-col min-w-0">
                                    <img
                                        src={OMIA_LETRAS}
                                        alt="OMIA"
                                        className="h-5 w-auto max-h-5 object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]"
                                    />
                                </div>
                            </motion.button>
                        </div>
                        {/* Navigation Desktop */}
                        <div className="hidden lg:flex items-center space-x-8 ml-6 mt-3 flex-1">
                            {navigationItems.map((item) => (
                                <motion.button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    whileHover={{ y: -1 }}
                                    className={`relative text-md font-medium transition-all duration-300 ${activeSection === item.id
                                        ? 'text-white font-semibold'
                                        : ' hover:text-white'
                                        }`}
                                    animate={activeSection === item.id ? { scale: 1.05 } : { scale: 1 }}
                                >
                                    {item.label}

                                    {/* Indicator activo */}
                                    {activeSection === item.id && (
                                        <motion.div
                                            initial={{ scaleX: 0 }}
                                            animate={{ scaleX: 1 }}
                                            transition={{ duration: 0.3 }}
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-violet-400 rounded-full"
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>

                        {/* En mobile: contenedor derecho para que el logo quede centrado */}
                        <div className="flex-1 flex justify-end lg:hidden min-w-0">
                            <motion.button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                whileTap={{ scale: 0.95 }}
                                className="p-2 text-white"
                                aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                            >
                            <AnimatePresence mode="wait">
                                {isMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X className="w-6 h-6" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu className="w-6 h-6" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Sidebar — estilo Omia con secciones e iconos */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-black/70 backdrop-blur-xl   border-l border-white/10 z-40 lg:hidden flex flex-col shadow-2xl"
                        >
                                                       {/* Header del sidebar — logo centrado, X a la derecha */}
                            <div className="flex-shrink-0 bg-gradient-to-r from-violet-700/10 via-indigo-700/40 to-indigo-800/10 px-5 py- flex items-center justify-between min-h-[64px]">
                                <div className="flex-1 min-w-0" aria-hidden />
                                <button
                                    onClick={() => scrollToSection('hero')}
                                    className="flex items-center gap-2.5 shrink-0"
                                    aria-label="Ir al inicio"
                                >
                                    <img src={OMIA_ICON} alt="" className="w-8 h-8" />
                                    <img src={OMIA_LETRAS} alt="OMIA" className="h-5 w-auto" />
                                </button>
                                <div className="flex-1 flex justify-end min-w-0">
                                    <button
                                        onClick={() => setIsMenuOpen(false)}
                                        className="p-2 -mr-1 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                                        aria-label="Cerrar menú"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                            {/* Contenido con scroll */}
                            <div className="flex-1 overflow-y-auto">
                                <div className="px-4 py-6 space-y-8">
                                    {mobileMenuSections.map((section, sectionIndex) => (
                                        <div key={sectionIndex}>
                                            <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 mb-1 px-1">
                                                {section.title}
                                            </p>
                                            {section.subtitle && (
                                                <p className="text-xs text-gray-500/80 mb-4 px-1">
                                                    {section.subtitle}
                                                </p>
                                            )}
                                            <div className="space-y-1">
                                                {section.items.map((item) => {
                                                    const Icon = item.icon;
                                                    const isActive = activeSection === item.id;
                                                    return (
                                                        <button
                                                            key={item.id}
                                                            onClick={() => scrollToSection(item.id)}
                                                            className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-start gap-3 group ${
                                                                isActive
                                                                    ? 'bg-violet-500/15 border border-violet-500/30'
                                                                    : 'border border-transparent hover:bg-white/5 hover:border-white/10'
                                                            }`}
                                                        >
                                                            <div className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${isActive ? 'bg-violet-500/20 text-violet-400' : 'bg-white/5 text-gray-400 group-hover:text-violet-400'}`}>
                                                                <Icon className="w-4 h-4" />
                                                            </div>
                                                            <div className="min-w-0 flex-1">
                                                                <p className={`font-semibold text-sm ${isActive ? 'text-white' : 'text-white/90 group-hover:text-white'}`}>
                                                                    {item.label}
                                                                </p>
                                                                <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                                                                    {item.description}
                                                                </p>
                                                            </div>
                                                            {isActive && (
                                                                <div className="flex-shrink-0 w-1 h-8 rounded-full bg-gradient-to-b from-violet-400 to-indigo-400" />
                                                            )}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};