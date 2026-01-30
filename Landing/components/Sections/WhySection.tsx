'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
    ArrowRight,
} from 'lucide-react';
import { useMobileDetection } from '@Landing/hooks';

export default function WhySection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { isMobile } = useMobileDetection();

    useEffect(() => {
        // Solo agregar el efecto de mouse si no es móvil
        if (!isMobile) {
            const handleMouseMove = (e: MouseEvent) => {
                const section = sectionRef.current;
                if (!section) return;
                const rect = section.getBoundingClientRect();
                section.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                section.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
            };
            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [isMobile]);

    const timelineEvents = [
        {
            year: "Inicio",
            title: "La necesidad real",
            description: "Descubrimos que las empresas no necesitaban otro chatbot básico más. Necesitaban soluciones integrales hechas a medida para sus procesos únicos y con un entorno mas completo.",
            color: "blue",
            achievement: "Identificación del problema",
            step: "1"
        },
        {
            year: "Evolución",
            title: "Más que una plataforma",
            description: "Decidimos ser diferentes: no vendemos software, creamos soluciones. Cada empresa recibe un sistema personalizado, integraciones y soporte dedicado.",
            color: "violet",
            achievement: "Enfoque personalizado",
            step: "2"
        },
        {
            year: "Crecimiento",
            title: "Equipos especializados",
            description: "Formamos equipos de desarrolladores e integradores. Cada cliente tiene un equipo que entiende su negocio y crea soluciones específicas.",
            color: "emerald",
            achievement: "95% satisfacción cliente",
            step: "3"
        },
        {
            year: "Actualidad",
            title: "Soluciones completas",
            description: "Hoy ayudamos a empresas con automatización integral: desde asistentes inteligentes hasta sistemas completos que transforman sus operaciones.",
            color: "indigo",
            achievement: "300% crecimiento anual",
            step: "4"
        }
    ];

    const getColorClasses = (color: string) => {
        switch (color) {
            case 'blue':
                return {
                    text: 'text-blue-400',
                    border: 'border-blue-500/30',
                    bg: 'bg-blue-500/10',
                    hover: 'hover:border-blue-400/50',
                    accent: 'bg-blue-500'
                };
            case 'violet':
                return {
                    text: 'text-violet-400',
                    border: 'border-violet-500/30',
                    bg: 'bg-violet-500/10',
                    hover: 'hover:border-violet-400/50',
                    accent: 'bg-violet-500'
                };
            case 'emerald':
                return {
                    text: 'text-emerald-400',
                    border: 'border-emerald-500/30',
                    bg: 'bg-emerald-500/10',
                    hover: 'hover:border-emerald-400/50',
                    accent: 'bg-emerald-500'
                };
            case 'indigo':
                return {
                    text: 'text-indigo-400',
                    border: 'border-indigo-500/30',
                    bg: 'bg-indigo-500/10',
                    hover: 'hover:border-indigo-400/50',
                    accent: 'bg-indigo-500'
                };
            default:
                return {
                    text: 'text-blue-400',
                    border: 'border-blue-500/30',
                    bg: 'bg-blue-500/10',
                    hover: 'hover:border-blue-400/50',
                    accent: 'bg-blue-500'
                };
        }
    };

    return (
        <section 
            ref={sectionRef}
            className="relative text-white py-20 lg:py-24 px-4 overflow-hidden"
        >
         
          
            
            {/* Efecto de cursor sutil */}
            <div 
                className="pointer-events-none absolute inset-0 opacity-10"
                style={{ 
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(139, 92, 246, 0.08), transparent 40%)` 
                }} 
            />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header mejorado - Responsivo */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16 md:mb-20"
                >
                   
                    
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 sm:mb-8 text-white leading-tight">
                        Por qué nació{' '}
                        <span className="font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent relative">
                            OMIA
                            <motion.div
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                            />
                        </span>
                    </h2>
                    
                    <div className="max-w-3xl mx-auto px-4">
                        <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
                            Te contamos nuestra historia, cómo pasamos de identificar un problema real a crear soluciones de IA que realmente transforman negocios.
                        </p>
                        <div className="w-24 h-0.5 bg-blue-400 mx-auto opacity-60"></div>
                    </div>
                </motion.div>

                {/* Grid 2x2 compacto */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {timelineEvents.map((event, index) => {
                        const colorClasses = getColorClasses(event.color);
                        
                        // Colores sólidos para títulos
                        const getTitleColor = (index: number) => {
                            switch (index) {
                                case 0: return 'text-blue-400';
                                case 1: return 'text-violet-400';
                                case 2: return 'text-emerald-400';
                                case 3: return 'text-indigo-400';
                                default: return 'text-blue-400';
                            }
                        };

                        // Gradientes únicos para cada tarjeta
                        const getCardGradient = (index: number) => {
                            switch (index) {
                                case 0: return 'from-blue-600/10 via-blue-500/5 to-black/60';
                                case 1: return 'from-violet-600/10 via-violet-500/5 to-black/60';
                                case 2: return 'from-emerald-600/10 via-emerald-500/5 to-black/60';
                                case 3: return 'from-indigo-600/10 via-indigo-500/5 to-black/60';
                                default: return 'from-blue-600/10 via-blue-500/5 to-black/60';
                            }
                        };
                        
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                className="group"
                            >
                                <div
                                    className={`backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden bg-gradient-to-br ${getCardGradient(index)} hover:border-white/20`}
                                    style={{
                                        borderColor: colorClasses.border.includes('blue') ? 'rgba(59, 130, 246, 0.3)' :
                                                   colorClasses.border.includes('violet') ? 'rgba(139, 92, 246, 0.3)' :
                                                   colorClasses.border.includes('emerald') ? 'rgba(52, 211, 153, 0.3)' :
                                                   'rgba(99, 102, 241, 0.3)',
                                        boxShadow: `0 10px 25px -5px ${
                                            colorClasses.border.includes('blue') ? 'rgba(59, 130, 246, 0.1)' :
                                            colorClasses.border.includes('violet') ? 'rgba(139, 92, 246, 0.1)' :
                                            colorClasses.border.includes('emerald') ? 'rgba(52, 211, 153, 0.1)' :
                                            'rgba(99, 102, 241, 0.1)'
                                        }, 0 0 0 1px rgba(255,255,255,0.05)`
                                    }}
                                >
                                    {/* Número de paso */}
                                  

                                    {/* Título compacto */}
                                    <h3 className={`text-xl font-bold mb-3 ${getTitleColor(index)} leading-tight`}>
                                        {event.title}
                                    </h3>
                                    
                                    {/* Descripción compacta */}
                                    <p className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors duration-300">
                                        {event.description}
                                    </p>

                                  

                                    {/* Efecto de brillo en hover */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: '100%' }}
                                        transition={{ duration: 0.6 }}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA impactante compacto - Responsivo */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-12 sm:mt-16 md:mt-20"
                >
                    <div className="max-w-3xl mx-auto relative">
                        {/* Efectos de fondo del banner */}
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-purple-600/5 to-indigo-600/10 rounded-2xl blur-2xl" />
                        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-purple-500/5 to-indigo-500/5 rounded-2xl" />
                        
                        {/* Banner principal */}
                        <div className="relative bg-gradient-to-br from-white/5 via-white/3 to-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 text-center overflow-hidden">
                            {/* Efectos de partículas */}
                            <div className="absolute inset-0">
                                <motion.div
                                    animate={{ 
                                        scale: [1, 1.2, 1],
                                        opacity: [0.1, 0.3, 0.1]
                                    }}
                                    transition={{ 
                                        duration: 8, 
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="absolute top-1/4 left-1/4 w-24 h-24 bg-violet-500/20 rounded-full blur-xl"
                                />
                                <motion.div
                                    animate={{ 
                                        scale: [1.2, 1, 1.2],
                                        opacity: [0.2, 0.1, 0.2]
                                    }}
                                    transition={{ 
                                        duration: 6, 
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 2
                                    }}
                                    className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
                                />
                            </div>

                            {/* Contenido del banner */}
                            <div className="relative z-10">
                                {/* Título principal */}
                                <motion.h3 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                    className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4 leading-tight"
                                >
                                    ¿Listo para{' '}
                                    <span className="font-bold bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent relative">
                                        transformar
                                        <motion.div
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-violet-400 to-transparent"
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            transition={{ delay: 0.8, duration: 0.6 }}
                                        />
                                    </span>{' '}
                                    <span className="relative">
                                        tu negocio?
                                       
                                    </span>
                                </motion.h3>
                                
                                {/* Descripción */}
                                <motion.p 
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.8 }}
                                    className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
                                >
                            Únete a las empresas inteligentes que ya automatizaron sus procesos y multiplicaron sus resultados con IA personalizada
                                </motion.p>

                                {/* Botón mejorado */}
                                <motion.button 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ delay: 0.8, duration: 0.6 }}
                                    className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:via-purple-500 hover:to-indigo-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-violet-500/30 text-base sm:text-lg overflow-hidden"
                                >
                                    {/* Efecto de brillo en hover */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: '100%' }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    
                                    <span className="relative z-10">🚀 QUIERO MI TRANSFORMACIÓN</span>
                                    <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </motion.button>

                              
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}


