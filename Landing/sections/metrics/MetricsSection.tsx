'use client';

import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMobileDetection } from '@Landing/hooks';
import { OmiaSaasCharts } from '@Landing/components';  

export default function MetricsSection() {
    const metricsRef = useRef<HTMLDivElement>(null);
    const { isMobile } = useMobileDetection();

    useEffect(() => {
        if (!isMobile) {
            const handleMouseMove = () => {
                const section = metricsRef.current;
                if (!section) return;
            };
            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [isMobile]);

    return (
        <section
            ref={metricsRef}
            className="relative text-white pt-20 lg:pt-24 px-4 overflow-hidden"

        >

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25 }}
                    className="mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25 }}
                        className="text-center mb-16"
                    >

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05, duration: 0.2 }}
                            className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl  text-white mb-4 font-termina"
                        >
                            Metricas que{' '}
                            <span className="termina-bold bg-gradient-to-r font-bold from-violet-400 via-indigo-400 to-indigo-500 bg-clip-text text-transparent">
                                importan
                            </span>
                        </motion.h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
                            Datos de rendimiento en tiempo real de tu empresa
                        </p>
                    </motion.div>

                    <svg width="0" height="0" className="absolute">
                        <defs>
                            <linearGradient id="gradient-0">
                                <stop offset="0%" stopColor="#3B82F6" />
                                <stop offset="100%" stopColor="#2563EB" />
                            </linearGradient>
                            <linearGradient id="gradient-1">
                                <stop offset="0%" stopColor="#8B5CF6" />
                                <stop offset="100%" stopColor="#7C3AED" />
                            </linearGradient>
                            <linearGradient id="gradient-2">
                                <stop offset="0%" stopColor="#10B981" />
                                <stop offset="100%" stopColor="#059669" />
                            </linearGradient>
                            <linearGradient id="gradient-3">
                                <stop offset="0%" stopColor="#6366F1" />
                                <stop offset="100%" stopColor="#4F46E5" />
                            </linearGradient>
                        </defs>
                    </svg>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25 }}
                    >
                        <OmiaSaasCharts />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
