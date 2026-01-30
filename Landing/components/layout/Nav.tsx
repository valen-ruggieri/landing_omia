'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Rutas públicas de los logos (en public/)
const OMIA_ICON = '/omia-icon.svg';
const OMIA_LETRAS = '/omia-letras.svg';

interface NavProps {
    isScrolled: boolean;
    isMenuOpen: boolean;
    setIsMenuOpen: (open: boolean) => void;
}

// Secciones reales de la landing - orden EXACTO según LandingPageContent
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
    { id: 'faq', label: 'FAQ' }
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
                transition={{ duration: 0.5 }}
                className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
                    ? 'bg-[#0a0b11]/40 backdrop-blur-xl '
                    : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto ">
                    <div className="flex items-center justify-between h-20">

                        {/* Logo con SVG Original */}
                        <motion.button
                            onClick={() => scrollToSection('hero')}
                            whileHover={{ scale: 1.02 }}
                            className="flex items-center space-x-3 group"
                        >
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <img
                                    src={OMIA_ICON}
                                    alt="OMIA Icon"
                                    className="w-10 h-10 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                                />
                            </motion.div>

                            <div className="flex flex-col">
                                <img
                                    src={OMIA_LETRAS}
                                    alt="OMIA"
                                    className="h-6 transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]"
                                />
                                <span className="text-xs font-medium tracking-wider">
                                    AI Solutions
                                </span>
                            </div>
                        </motion.button>

                        {/* Navigation Desktop */}
                        <div className="hidden lg:flex items-center space-x-8">
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


                        {/* Mobile Menu Button */}
                        <motion.button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            whileTap={{ scale: 0.95 }}
                            className="lg:hidden p-2 text-white"
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
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0  backdrop-blur-sm z-30 lg:hidden"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-20 right-0 bottom-0 w-80  backdrop-blur-xl border-l border-white/10 z-40 lg:hidden"
                        >
                            <div className="p-8">
                                {/* Navigation Links */}
                                <div className="space-y-5 mb-10">
                                    {navigationItems.map((item, index) => (
                                        <motion.button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className={`w-full text-left py-3.5 px-5 rounded-lg transition-all duration-300 relative ${activeSection === item.id
                                                ? 'text-white bg-gradient-to-r from-violet-500/20 to-indigo-500/5 font-semibold '
                                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                                                }`}
                                        >
                                            {/* Barrita solo para el activo */}
                                            {activeSection === item.id && (
                                                <motion.div
                                                    initial={{ scaleX: 0 }}
                                                    animate={{ scaleX: 1 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-400 to-indigo-400 rounded-r-full"
                                                />
                                            )}
                                            {item.label}
                                        </motion.button>
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