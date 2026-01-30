'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
    MessageSquare, 
    Instagram, 
    Linkedin, 
    Mail, 
    ArrowRight,
    Phone,
    MapPin
} from 'lucide-react';
// Rutas públicas de los logos (en public/)
const OMIA_ICON = '/omia-icon.svg';
const OMIA_LETRAS = '/omia-letras.svg';

export const Footer: React.FC = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.querySelector(`#${sectionId}`) as HTMLElement;
        if (element) {
            const offset = 100;
            const elementPosition = element.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    };

    const quickLinks = [
        { name: "Transformación", href: "#problems" },
        { name: "Personalización", href: "#solutions" },
        { name: "Funciones", href: "#why" },
        { name: "Integraciones", href: "#integrations" },
        { name: "Smart", href: "#smart-functions" },
        { name: "Consultoría", href: "#video" },
        { name: "Métricas", href: "#metrics" },
        { name: "Testimonios", href: "#testimonials" },
        { name: "Precios", href: "#pricing" },
        { name: "Proceso", href: "#process" },
        { name: "FAQ", href: "#faq" }
    ];

    const socialLinks = [
        { 
            name: "WhatsApp", 
            href: "https://wa.me/5491112345678", 
            icon: <MessageSquare className="w-5 h-5" />,
            color: "emerald"
        },
        { 
            name: "Instagram", 
            href: "https://www.instagram.com/omia.io/", 
            icon: <Instagram className="w-5 h-5" />,
            color: "pink"
        },
        { 
            name: "LinkedIn", 
            href: "https://www.linkedin.com/company/omia-solutions/", 
            icon: <Linkedin className="w-5 h-5" />,
            color: "blue"
        }
    ];

    return (
        <footer className="relative ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
                {/* Main Footer Content */}
                <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
                    
                    {/* Brand Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        {/* Logo */}
                        <div className="flex items-center space-x-3 mb-6">
                            <img 
                                src={OMIA_ICON} 
                                alt="OMIA Icon" 
                                className="w-10 h-10"
                            />
                            <img 
                                src={OMIA_LETRAS} 
                                alt="OMIA" 
                                className="h-6"
                                style={{ filter: 'brightness(0) saturate(100%) invert(100%)' }}
                            />
                        </div>
                        
                        {/* Tagline */}
                        <p className="text-gray-300 text-lg mb-6 max-w-md">
                            Tu atención es nuestra{' '}
                            <span className="text-white font-semibold">mayor prioridad</span>
                        </p>
                        
                        {/* Contact */}
                        <div className="space-y-3 mb-8">
                            <div className="flex items-center space-x-3 text-gray-400">
                                <Mail className="w-5 h-5" />
                                <span className="text-sm">administracion@omia.com.ar</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400">
                                <Phone className="w-5 h-5" />
                                <span className="text-sm">+54 9 11 1234-5678</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400">
                                <MapPin className="w-5 h-5" />
                                <span className="text-sm">Buenos Aires, Argentina</span>
                            </div>
                        </div>
                        
                        {/* Social Links */}
                        <div className="flex space-x-3">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    whileHover={{ 
                                        scale: 1.05, 
                                        y: -2
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    target="_blank"
                                    className="group relative w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300  hover:border-gray-500/50"
                                >
                                    <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                                        {social.icon}
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-1"
                    >
                        <h4 className="text-white font-semibold mb-4">Navegación</h4>
                        <div className="space-y-3">
                            {quickLinks.slice(0, 5).map((link, index) => (
                                <motion.button
                                    key={index}
                                    whileHover={{ x: 4 }}
                                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                                    className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                                >
                                    {link.name}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-1"
                    >
                        <h4 className="text-white font-semibold mb-4">¿Listo para empezar?</h4>
                        <p className="text-gray-400 text-sm mb-6">
                            Transforma tu negocio con IA
                        </p>
                        
                        <motion.a 
                            href="https://wa.me/5491112345678"
                            target="_blank"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 text-sm"
                        >
                            <span>Agendar Consultoría</span>
                            <ArrowRight className="w-5 h-5" />
                        </motion.a>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-12 pt-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm">
                        <div className="flex items-center space-x-6 mb-4 sm:mb-0">
                            <span>© 2022 Omia. Todos los derechos reservados.</span>
                        </div>
                        <div className="flex items-center space-x-6">
                            <span className="text-xs">Buenos Aires, Argentina</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};