'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function HeroSection() {
    const ref = useRef<HTMLDivElement>(null);

    // Progreso de scroll SOLO dentro de la sección del hero
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"], // cuando el final del contenedor toca el top => 1
    });

    // ---- Mapeos "vambe-like" (dos etapas) ----
    // Etapa A (0 → 0.5): 1.00 → 0.86   | Etapa B (0.5 → 1): 0.86 → 0.72
    const scaleRaw = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.86, 0.72]);
    const scale = useSpring(scaleRaw, { stiffness: 170, damping: 22, mass: 0.3 });

    // Leve descenso para simular "peso" al achicarse (muy sutil)
    const translateY = useTransform(scrollYProgress, [0, 1], [0, 10]);

    // Borde y viñeta que se intensifica un poco (solo bottom)
    const radiusBottom = useTransform(scrollYProgress, [0, 1], ["44px", "48px"]);
    const vignetteOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.38, 0.32, 0.26]);

    // Título: entra muy vivo, se atenúa al achicarse
    const titleOpacity = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [1, 1, 0.85, 0.8]);
    const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -8]);

    // Blur muy leve en el video al final (como en vambe) + oscurecer
    const videoFilter = useTransform(
        scrollYProgress, 
        [0, 1], 
        ["brightness(0.7) blur(0px)", "brightness(0.6) blur(1.25px)"]
    );


    return (
        <section ref={ref} id="hero" className="relative pt-1 ">
            {/* Sticky que se achica en dos etapas */}
            <motion.div
                style={{ scale, y: translateY }}
                className="
                    sticky top-0
                   
                    h-[124vh] md:h-[124vh]
                    rounded-b-[44px] overflow-hidden
                    shadow-[0_40px_120px_rgba(0,0,0,.35)]
                    will-change-transform
                "
            >
                {/* Video */}
                <motion.div 
                    style={{ filter: videoFilter }} 
                    className="absolute inset-0"
                >
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

                {/* Vignette + borde dinámico */}
                <motion.div
                    style={{ 
                        borderBottomLeftRadius: radiusBottom,
                        borderBottomRightRadius: radiusBottom,
                        backgroundColor: 'rgb(0, 0, 0)',
                        opacity: vignetteOpacity
                    }}
                    className="pointer-events-none absolute inset-0"
                />

                {/* Fader inferior como "nebulosa" (gradiente que sube en mobile) */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 md:h-48 bg-gradient-to-t from-black/45 to-transparent" />

                {/* Contenido central */}
                <motion.div
                    style={{ y: titleY, opacity: titleOpacity }}
                    className="relative z-10 h-full grid place-content-center text-center px-6"
                >
                    
                    
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-white  leading-[1.03] mx-auto max-w-[16ch] text-[50px] md:text-[64px] font-termina"
                        >
                        Automatizá tu atención{' '}
                        <span className="font-semibold bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent termina-bold">
                            sin perder clientes
                        </span>
                    </motion.h1>
                    
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-white mt-4 text-xl md:mt-6 max-w-[70ch] mx-auto font-poppins"
                        >
                        
                        Diseñamos <strong className="text-white bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">asistentes de IA</strong>,
                        <strong className="text-white"> sistemas personalizados</strong> y
                        <strong className="text-white"> automatizaciones</strong> que responden a tus clientes, organizan tus procesos y
                        conectan todas tus plataformas para que tu empresa funcione 24/7 sin depender de vos.
                    </motion.p>

                    {/* Logos + CTAs */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="mt-6 md:mt-8 flex items-center justify-center gap-6 opacity-90"
                    >
                        <span className="text-white/80 font-semibold text-sm">OSOJI</span>
                        <span className="text-white/80 font-semibold text-sm">wift</span>
                        <span className="text-white/80 font-semibold text-sm">dentalink</span>
                        <span className="text-white/80 font-semibold text-sm">COPEC FI</span>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
                    >
                        <motion.a
                            href="https://wa.me/5491112345678"
                            target="_blank"
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="group bg-gradient-to-r from-violet-400 to-violet-700 hover:bg-violet-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 text-sm sm:text-base"
                        >
                            <span>Quiero agendar una consultoría</span>
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.div>

         
        </section>
    );
}
