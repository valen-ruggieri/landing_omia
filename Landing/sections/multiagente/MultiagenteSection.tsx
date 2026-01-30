'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMobileDetection } from '@Landing/hooks';
import { LogoLoop } from '@Landing/components';

const MultiagenteSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const { isMobile } = useMobileDetection();

    useEffect(() => {
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

    // Optimización del video: solo reproducir con hover
    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.pause();

            const handleMouseEnter = () => {
                video.play();
            };

            const handleMouseLeave = () => {
                video.pause();
            };

            const videoContainer = video.parentElement;
            if (videoContainer) {
                videoContainer.addEventListener('mouseenter', handleMouseEnter);
                videoContainer.addEventListener('mouseleave', handleMouseLeave);
            }

            return () => {
                if (videoContainer) {
                    videoContainer.removeEventListener('mouseenter', handleMouseEnter);
                    videoContainer.removeEventListener('mouseleave', handleMouseLeave);
                }
            };
        }
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center px-2 sm:px-4 md:px-6 lg:px-8 relative">
            {/* Video de fondo con bordes redondeados */}
            <div className="absolute inset-0 flex items-center justify-center group">
                <div className="w-full lg:max-w-8xl 2xl:max-w-8xl mx-auto px-2 sm:px-4 md:px-6 lg:px-12 xl:px-20">
                    <video
                        ref={videoRef}
                        className="w-full h-184 sm:h-80 md:h-96 lg:h-[500px] xl:h-[800px] rounded-xl sm:rounded-2xl md:rounded-3xl object-cover " autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        style={{
                            pointerEvents: 'none',
                            filter: 'brightness(0.4) contrast(1.2) saturate(1.1)'
                        }}
                    >
                        <source src="/images/video-thumb/multiagente.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>

            {/* Contenido centrado sobre el video */}
            <div className="relative z-10 max-w-sm md:max-w-4xl lg:max-w-5xl xl:max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="px-3 sm:px-4 md:px-6"
                >
                    {/* Logo y Título principal */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6"
                    >

                        <h2 className="text-4xl md:text-5xl lg:text-6xl  text-white mb-6 font-termina">
                            Todas tus conversaciones {' '}
                            <span className="termina-bold bg-gradient-to-r from-blue-500 via-cyan-600 to-cyan-400 bg-clip-text text-transparent">
                                en un solo lugar
                            </span>
                        </h2>
                    </motion.div>

                    {/* Descripción */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg sm:text-sm md:text-base lg:text-lg xl:text-2xl text-gray-200 mb-20 sm:mb-6 md:mb-20 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2 sm:px-4"
                    >
                        <p className="mb-2 sm:mb-4">
                            Conecta todos tus canales, organiza tus conversaciones, y mantene el control de tus clientes desde un solo lugar
                        </p>
                    </motion.div>

                    {/* Pasarela de Redes Sociales */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col items-center justify-center px-4 "
                    >

                        <div className="w-full max-w-4xl ">
                            <LogoLoop
                                logos={[
                                    {
                                        src: '/images/iconsSocial/whatsapp.svg',
                                        alt: 'WhatsApp',
                                        href: 'https://wa.me/5491112345678',
                                        title: 'WhatsApp',
                                        height: 48
                                    },
                                    {
                                        src: '/images/iconsSocial/instagram-icon.svg',
                                        alt: 'Instagram',
                                        href: 'https://instagram.com/omia',
                                        title: 'Instagram',
                                        height: 48
                                    },
                                    {
                                        src: '/images/iconsSocial/facebook-icon.svg',
                                        alt: 'Facebook',
                                        href: 'https://facebook.com/omia',
                                        title: 'Facebook',
                                        height: 48
                                    },
                                    {
                                        src: '/images/iconsSocial/telegram.svg',
                                        alt: 'Telegram',
                                        href: 'https://t.me/omia',
                                        title: 'Telegram',
                                        height: 48
                                    },
                                    {
                                        src: '/images/iconsSocial/gmail.svg',
                                        alt: 'Gmail',
                                        href: 'mailto:contacto@omia.com',
                                        title: 'Gmail',
                                        height: 48
                                    },
                                    {
                                        src: '/images/iconsSocial/linkedin.svg',
                                        alt: 'LinkedIn',
                                        href: 'https://linkedin.com/company/omia',
                                        title: 'LinkedIn',
                                        height: 48
                                    },
                                    {
                                        src: '/images/iconsSocial/twitter.svg',
                                        alt: 'Twitter',
                                        href: 'https://twitter.com/omia',
                                        title: 'Twitter',
                                        height: 48
                                    },
                                    {
                                        src: '/images/iconsSocial/youtube.svg',
                                        alt: 'YouTube',
                                        href: 'https://youtube.com/@omia',
                                        title: 'YouTube',
                                        height: 48
                                    }
                                ]}
                                speed={60}
                                direction="left"
                                logoHeight={48}
                                gap={64}
                                pauseOnHover={true}
                                fadeOut={true}
                                fadeOutColor="rgba(0, 0, 0, 0)"
                                scaleOnHover={true}
                                ariaLabel="Canales de comunicación disponibles"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default MultiagenteSection;