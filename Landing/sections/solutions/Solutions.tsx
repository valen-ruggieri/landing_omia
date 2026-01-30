'use client';

import { motion, AnimatePresence } from 'framer-motion';

import {
    CalendarDays, Check, Briefcase, BarChart3, Zap, Users,
    LucideProps, Sparkles, ShoppingCart, Building, Brain, Target,
    Clock
} from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { useMobileDetection } from '@Landing/hooks';


// --- TIPOS Y DATOS ---
type ThemeColor = "blue" | "emerald" | "purple" | "indigo";

interface Metric {
    label: string;
    value: string;
    icon?: React.ReactNode;
}

interface Solution {
    id: string;
    icon: React.ReactElement<LucideProps>;
    title: string;
    description: string;
    metrics: Metric[];
    features: string[];
    themeColor: ThemeColor;
    ctaText?: string;
    imageSrc: string;
}

// --- DATOS DE SOLUCIONES EMPRESARIALES (MÁS DETALLADO) ---
const omiaSolutions: Solution[] = [
    {
        id: "medical",
        icon: <CalendarDays />,
        title: "Optimización para Consultorios Médicos",
        description:
            "Organizá tu agenda médica con IA: confirma turnos, envía recordatorios y responde FAQs 24/7. Integrá historia clínica/gestores médicos y enfocá a tu equipo en la atención de calidad.",
        metrics: [
            { label: "Reducción de ausentismo", value: "-95%", icon: <Users /> },
            { label: "Menos anotaciones", value: "100%", icon: <Zap /> },
            { label: "Satisfacción de pacientes", value: "9.2/10", icon: <Sparkles /> },
            { label: "Confirmaciones ", value: "+300%", icon: <Clock /> },
        ],
        features: [
            "Agenda inteligente con confirmación automática",
            "Recordatorios personalizados por WhatsApp",
            "Respuestas a preparaciones y estudios",
            "Integración con sistemas de gestión médica (API/Calendar)"
        ],
        themeColor: "blue",
        ctaText: "Optimizar Mi Consultorio",
        imageSrc: "/images/agenda.png",
    },
    {
        id: "ecommerce",
        icon: <ShoppingCart />,
        title: "Automatización para E-commerce",
        description:
            "Convertí WhatsApp e Instagram en tus mejores canales de ventas. El asistente guía el catálogo, responde dudas, cobra y hace seguimiento de envíos de forma automática.",
        metrics: [
            { label: "Incremento de conversión", value: "+40%", icon: <BarChart3 /> },
            { label: "Ventas automáticas", value: "24/7", icon: <Check /> },
            { label: "Revisión de stock", value: "-200%", icon: <Zap /> },
            { label: "Tiempo de respuesta", value: "10s", icon: <Clock /> },
        ],
        features: [
            "Catálogo interactivo y carrito",
            "Pagos integrados (Mercado Pago / Stripe)",
            "Recuperación de carritos abandonados",
            "Tracking de envíos y posventa (API/CRM)"
        ],
        themeColor: "emerald",
        ctaText: "Impulsar Mis Ventas",
        imageSrc: "/images/ventas.png",
    },
    {
        id: "realestate",
        icon: <Building />,
        title: "Digitalización para Inmobiliarias",
        description:
            "Capturá y calificá leads en automático. El agente filtra interesados, agenda visitas y envía fichas; tus agentes solo hablan con prospectos calificados.",
        metrics: [
            { label: "Leads calificados", value: "+120%", icon: <Target /> },
            { label: "Visitas efectivas", value: "+65%", icon: <CalendarDays /> },
            { label: "Tiempo liberado", value: "+12 h/sem", icon: <Briefcase /> },
            { label: "Mejor atencion", value: "100%", icon: <Clock /> },
        ],
        features: [
            "Calificación de leads 24/7 con preguntas clave",
            "Agenda de visitas sincronizada (Google/Outlook)",
            "Envío automático de fichas y multimedia",
            "Segmentación por interés, zona y presupuesto (CRM)"
        ],
        themeColor: "indigo",
        ctaText: "Capturar Más Leads",
        imageSrc: "/images/alquileres.png",
    },
    {
        id: "academies",
        icon: <Brain />,
        title: "Gestión para Academias y Educación",
        description:
            "Automatizá el ciclo completo del alumno: consultas, info de cursos, inscripción y pagos. Mejorá la captación y la retención con seguimiento proactivo.",
        metrics: [
            { label: "Inscripciones", value: "+50%", icon: <Users /> },
            { label: "Gestión administrativa", value: "-80%", icon: <Briefcase /> },
            { label: "Seguimiento de leads", value: "100%", icon: <Check /> },
            { label: "Mejor atencion", value: "200%", icon: <Clock /> },
        ],
        features: [
            "Información automatizada de cursos y aranceles",
            "Preinscripción y pago online",
            "Recordatorios de clases y evaluaciones",
            "Canal directo con alumnos y responsables (CRM + API)"
        ],
        themeColor: "purple",
        ctaText: "Modernizar Mi Academia",
        imageSrc: "/images/cursos.png",
    },
];


const colorClasses = {
    blue: {
        text: 'text-blue-400',
        bg: 'bg-blue-500',
        shadow: 'shadow-[0_0_20px_rgba(59,130,246,0.5)]',
        hoverShadow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.8)]',
        color: 'blue-500',
        borderColor: 'border-blue-400/30',
    },
    emerald: {
        text: 'text-emerald-400',
        bg: 'bg-emerald-500',
        shadow: 'shadow-[0_0_20px_rgba(16,185,129,0.5)]',
        hoverShadow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.8)]',
        color: 'emerald-500',
        borderColor: 'border-emerald-400/30',
    },
    purple: {
        text: 'text-purple-400',
        bg: 'bg-purple-500',
        shadow: 'shadow-[0_0_20px_rgba(168,85,247,0.5)]',
        hoverShadow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]',
        color: 'purple-500',
        borderColor: 'border-purple-400/30',
    },
    indigo: {
        text: 'text-indigo-400',
        bg: 'bg-indigo-500',
        shadow: 'shadow-[0_0_20px_rgba(129,140,248,0.5)]',
        hoverShadow: 'hover:shadow-[0_0_30px_rgba(129,140,248,0.8)]',
        color: 'indigo-500',
        borderColor: 'border-indigo-400/30',
    }
};

// --- COMPONENTE DE MÉTRICAS ---


// --- COMPONENTE PRINCIPAL ---
export default function Solutions() {
    const [activeIndex, setActiveIndex] = useState(0);
    const solutionsRef = useRef<HTMLDivElement>(null);
    const activeSolution = omiaSolutions[activeIndex];
    const theme = colorClasses[activeSolution.themeColor];
    const { isMobile } = useMobileDetection();

    const handleIconClick = (index: number) => setActiveIndex(index);

    useEffect(() => {
        // Solo agregar el efecto de mouse si no es móvil
        if (!isMobile) {
            const handleMouseMove = (e: MouseEvent) => {
                const solutions = solutionsRef.current;
                if (!solutions) return;
                const rect = solutions.getBoundingClientRect();
                solutions.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                solutions.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
            };
            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [isMobile]);

    return (
        <section
            ref={solutionsRef}
            id="solutions"
            className="relative text-white py-20 lg:py-24 px-4 overflow-hidden "
        >





            <div className="max-w-7xl mx-auto relative z-10">
                {/* Encabezado */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="text-center mb-8 sm:mb-12 max-w-5xl mx-auto "
                >

                    <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl  tracking-tighter text-white mb-3 sm:mb-4 font-termina">
                        Soluciones personalizadas {''}
                        <span className={`termina-bold bg-gradient-to-r ${activeSolution.themeColor === 'blue' ? 'from-blue-400 to-blue-600' :
                            activeSolution.themeColor === 'emerald' ? 'from-emerald-400 to-emerald-600' :
                                activeSolution.themeColor === 'purple' ? 'from-purple-400 to-purple-600' :
                                    'from-indigo-400 to-indigo-600'} bg-clip-text text-transparent`}>
                            para cada negocio
                        </span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto px-4">
                        Cada empresa tiene su propia forma de trabajar, nosotros la potenciamos  </p>
                </motion.div>
                {/* Navegación horizontal móvil */}
                <div className="flex lg:hidden justify-center items-center gap-4 my-8">
                    {omiaSolutions.map((solution, index) => {
                        const isActive = activeIndex === index;
                        const solutionTheme = colorClasses[solution.themeColor];
                        return (
                            <button
                                key={solution.id}
                                onClick={() => handleIconClick(index)}
                                className={`relative p-3 rounded-lg ${isActive
                                    ? `bg-gradient-to-b from-${solutionTheme.color} via-${solutionTheme.color}/20 to-${solutionTheme.color}/0`
                                    : 'bg-gray-900/40 border border-white/10'
                                    }`}
                                aria-label={`Ver solución ${solution.title}`}
                            >
                                {React.cloneElement(solution.icon, {
                                    className: `w-6 h-6 ${isActive ? solutionTheme.text : 'text-gray-400'}`
                                })}
                                {isActive && (
                                    <div
                                        className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-4 rounded-full ${solutionTheme.bg}`}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
                {/* Grid principal */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-16 items-center">
                    {/* Panel de información */}
                    <div className="lg:col-span-6 space-y-4 sm:space-y-5">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSolution.id}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 30 }}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                                className="space-y-3 sm:space-y-4 bg-gray-900/30 rounded-xl p-4 sm:p-6"
                            >
                                <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold ${theme.text}`}>
                                    {activeSolution.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-400">
                                    {activeSolution.description}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-2">
                                    {activeSolution.features.map((feature, index) => (
                                        <div key={index} className="flex items-start space-x-2">
                                            <Check className={`w-4 h-4 sm:w-5 sm:h-5 ${theme.text} flex-shrink-0 mt-0.5`} />
                                            <span className="font-medium text-gray-300 text-xs sm:text-sm leading-relaxed">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                {/* Métricas mejoradas */}
                                <div className="flex justify-between gap-2 sm:gap-3  sm:pt-2 flex-wrap">
                                    {activeSolution.metrics.map((metric) => (
                                        <div
                                            key={metric.label}
                                            className="flex flex-col items-center justify-center px-1 sm:px-2 gap-3 flex-row"
                                        >

                                            <span className="text-base sm:text-lg font-bold text-white mb-0.5">{metric.value}</span>
                                            <span className="text-xs font-medium text-gray-400 uppercase tracking-wide text-center leading-tight">{metric.label}</span>
                                        </div>
                                    ))}
                                </div>

                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Imagen grande */}
                    <div className="hidden lg:flex justify-center items-center h-[400px] sm:h-[540px] lg:col-span-5">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeSolution.id}
                                src={activeSolution.imageSrc}
                                alt={`Demostración de ${activeSolution.title}`}
                                initial={{ opacity: 0, scale: 0.92, x: 60 }}
                                animate={{ opacity: 1, scale: 1.22, x: 0 }}
                                exit={{ opacity: 0, scale: 0.92, x: -60 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="w-full max-w-2xl h-auto object-contain drop-shadow-[0_30px_60px_rgba(139,92,246,0.22)]"
                            />
                        </AnimatePresence>
                    </div>



                    {/* Slider de iconos en el costado derecho */}
                    <div className="hidden lg:flex flex-col items-center gap-6 sm:gap-8 lg:col-span-1 py-4">
                        {omiaSolutions.map((solution, index) => {
                            const isActive = activeIndex === index;
                            const solutionTheme = colorClasses[solution.themeColor];
                            return (
                                <motion.button
                                    key={solution.id}
                                    onClick={() => handleIconClick(index)}
                                    whileHover={{
                                        scale: isActive ? 1.22 : 1.12,
                                        filter: isActive
                                            ? `brightness(1.3) drop-shadow(0 0 18px ${solutionTheme.text === 'text-blue-400' ? 'rgba(59,130,246,0.7)' :
                                                solutionTheme.text === 'text-emerald-400' ? 'rgba(16,185,129,0.7)' :
                                                    solutionTheme.text === 'text-purple-400' ? 'rgba(168,85,247,0.7)' :
                                                        solutionTheme.text === 'text-indigo-400' ? 'rgba(129,140,248,0.7)' :
                                                            'rgba(0, 0, 0, 0)'
                                            })`
                                            : `brightness(1.1) drop-shadow(0 0 8px ${solutionTheme.text === 'text-blue-400' ? 'rgba(59,130,246,0.4)' :
                                                solutionTheme.text === 'text-emerald-400' ? 'rgba(16,185,129,0.4)' :
                                                    solutionTheme.text === 'text-purple-400' ? 'rgba(168,85,247,0.4)' :
                                                        solutionTheme.text === 'text-indigo-400' ? 'rgba(129,140,248,0.4)' :
                                                            'rgba(0, 0, 0, 0)'
                                            })`,
                                        zIndex: 2
                                    }}
                                    whileTap={{ scale: 0.96 }}
                                    className="bg-transparent border-none p-0 flex items-center justify-center"
                                    aria-label={`Ver solución ${solution.title}`}
                                >
                                    {React.cloneElement(solution.icon, {
                                        className: `transition-all duration-300
                                            ${isActive
                                                ? `${solutionTheme.text} w-12 h-12 sm:w-14 sm:h-14 drop-shadow-[0_0_32px_${solutionTheme.text}]`
                                                : "text-gray-600 w-6 h-6 sm:w-7 sm:h-7 opacity-50 group-hover:opacity-80"
                                            }`
                                    })}
                                </motion.button>
                            );
                        })}
                    </div>
                </div>


            </div>
        </section>
    );
}
