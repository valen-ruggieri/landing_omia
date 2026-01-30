'use client';

import {
    CalendarCheck, RotateCw, CalendarX, MailCheck,
    Send, Sheet,  Mail,
    Target, PhoneForwarded, BookUser, Thermometer,
    Webhook, CreditCard, Database, Plug,
    Brain,  BarChart3,
    MessageSquare, Clock, TrendingUp,
    Smartphone, Eye, Heart,
    Star,  Lightbulb, 
    Gift, ShoppingCart, Truck,
    Cloud, Server,
    Calendar, Timer, Phone,
    BookOpen,
    ShoppingBag, Package,
    CableIcon,
    Users,
    Wrench,
    Inbox,
    LayoutDashboard,
    ListChecks,
    Search,
    Building2,
    Globe,
    Gauge,
    Tags,
    Shield,
    Mic,
    FileAudio,
    PhoneCall,
    Workflow,
    FileText,
    NotebookPen
} from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';


// --- TIPOS Y ESTILOS ---
type Feature = {
    icon: React.ElementType;
    title: string;
    description: string;
    category: string;
};

// --- TODAS LAS FUNCIONES ---
const allFeatures: Feature[] = [
    // Calendario (6 funciones)
    { icon: CalendarCheck, title: 'Confirmacion de turnos', description: 'Pide la confirmacion o cancelacion para que no tengas ausencias sin notificar', category: 'Calendario' },
    { icon: RotateCw, title: 'Turnos Automáticos', description: 'Reprogramación automática 24/7 sin intervención manual', category: 'Calendario' },
    { icon: CalendarX, title: 'Cancelación Inteligente', description: 'Gestión inteligente que libera y reasigna espacios al instante', category: 'Calendario' },
    { icon: Clock, title: 'Recordatorios de turnos', description: 'Crea recordatorios en diferentes horarios para que no se te pase ninguno', category: 'Calendario' },
    { icon: Calendar, title: 'Calendario Inteligente', description: 'Sugerencias automáticas para optimizar tu agenda diaria', category: 'Calendario' },
    { icon: Timer, title: 'Optimizador de Tiempo', description: 'Análisis y optimización automática del uso del tiempo', category: 'Calendario' },
    { icon: CreditCard, title: 'Reservas con seña', description: 'Genera links o envia datos de pago para reservar el turno una vez que los verifique', category: 'Calendario' },
    { icon: CableIcon, title: 'Tu agenda conectada ', description: 'Utiliza calendar, la agenda de Omia o tu app de turnos favorita', category: 'Calendario' },
  
    // Comunicación (6 funciones)
    { icon: MailCheck, title: 'Confirmación Automática', description: 'Sistema de confirmación multicanal que reduce ausencias', category: 'Comunicación' },
    { icon: Mail, title: 'Correos Inteligentes', description: 'Campañas que se ejecutan solas mientras te enfocas en crecer', category: 'Comunicación' },
    { icon: Send, title: 'Mensajes Precisos', description: 'Comunicación en el momento exacto por el canal preferido', category: 'Comunicación' },
    { icon: MessageSquare, title: 'Chat IA', description: 'Conversaciones contextuales que resuelven consultas complejas', category: 'Comunicación' },
    { icon: Smartphone, title: 'Alertas Inteligentes', description: 'Alertas inteligentes que llegan en el momento perfecto', category: 'Comunicación' },
    { icon: Phone, title: 'Llamadas Automáticas', description: 'Sistema de llamadas programadas con confirmación automática', category: 'Comunicación' },
  
    
    // Integración (6 funciones)
    { icon: Sheet, title: 'Sincronización de Hojas', description: 'Flujo bidireccional automatizado con Google Sheets y Excel', category: 'Integración' },
    { icon: Webhook, title: 'APIs Universales', description: 'Integración con cualquier herramienta de tu ecosistema digital', category: 'Integración' },
    { icon: Database, title: 'Sincronización de Base de Datos', description: 'ERPs y CRMs externos siempre actualizados en tiempo real', category: 'Integración' },
    { icon: Plug, title: 'Conexión Instantánea', description: 'Expande el poder con conectores nativos como n8n y Zapier', category: 'Integración' },
    { icon: Cloud, title: 'Sincronización en la Nube', description: 'Sincronización en tiempo real con servicios en la nube', category: 'Integración' },
    { icon: Server, title: 'Sistemas Locales', description: 'Integración segura con sistemas locales y privados', category: 'Integración' },
  
    // Analytics (6 funciones)
    { icon: Target, title: 'Seguimiento Proactivo', description: 'IA detecta oportunidades y sugiere la siguiente mejor acción', category: 'Analytics' },
    { icon: PhoneForwarded, title: 'Reconexión Inteligente', description: 'Momento y argumento óptimo para reactivar leads fríos', category: 'Analytics' },
    { icon: Thermometer, title: 'Puntuación Dinámica', description: 'Clasificación en tiempo real basada en comportamiento', category: 'Analytics' },
    { icon: BarChart3, title: 'Panel Predictivo', description: 'Visualización avanzada con insights del futuro', category: 'Analytics' },
    { icon: TrendingUp, title: 'Análisis de Tendencias', description: 'Identificación de patrones emergentes en tiempo real', category: 'Analytics' },
    { icon: Eye, title: 'Seguimiento Multicanal', description: 'Seguimiento completo del customer journey', category: 'Analytics' },
  
    // IA (6 funciones)
    { icon: BookUser, title: 'Memoria IA', description: 'Registra y resume cada interacción para contexto completo', category: 'IA' },
    { icon: Brain, title: 'Aprendizaje Automático', description: 'Aprendizaje continuo que mejora con cada interacción', category: 'IA' },
    { icon: Lightbulb, title: 'Insights Inteligentes', description: 'Descubrimiento automático de oportunidades ocultas', category: 'IA' },
    { icon: Star, title: 'Recomendaciones IA', description: 'Sugerencias personalizadas basadas en datos históricos', category: 'IA' },
    { icon: Heart, title: 'Análisis de Sentimientos', description: 'Análisis emocional de interacciones con clientes', category: 'IA' },
    { icon: BookOpen, title: 'Procesamiento de Lenguaje', description: 'Comprensión avanzada de texto y conversaciones', category: 'IA' },
  
    // Pagos (6 funciones)
    { icon: CreditCard, title: 'Pasarela de Pagos', description: 'Automatización de cobros con Mercado Pago, Stripe y más', category: 'Pagos' },
    { icon: ShoppingCart, title: 'Sincronización E-commerce', description: 'Integración completa con plataformas de venta online', category: 'Pagos' },
    { icon: Gift, title: 'Suscripciones Automáticas', description: 'Gestión inteligente de modelos de suscripción', category: 'Pagos' },
    { icon: Truck, title: 'Logística Inteligente', description: 'Optimización automática de envíos y entregas', category: 'Pagos' },
    { icon: ShoppingBag, title: 'Control de Inventario', description: 'Control automático de stock y reposición', category: 'Pagos' },
    { icon: Package, title: 'Seguimiento de Envíos', description: 'Monitoreo automático del estado de entregas', category: 'Pagos' },
  
    // Web (6 funciones)
    { icon: Globe, title: 'Landing Page de Alto Rendimiento', description: 'Páginas enfocadas en conversión con tests y formularios conectados', category: 'Web' },
    { icon: ShoppingCart, title: 'E-commerce Integrado', description: 'Catálogo, carrito y checkout conectados a tus medios de pago', category: 'Web' },
    { icon: Building2, title: 'Web Institucional', description: 'Sitios modernos, rápidos y escalables para tu marca', category: 'Web' },
    { icon: Search, title: 'SEO Técnico Automático', description: 'Metadatos, sitemaps y performance optimizados desde el día uno', category: 'Web' },
    { icon: ListChecks, title: 'Formularios Conectados', description: 'Leads directo a tu CRM, planillas o WhatsApp', category: 'Web' },
    { icon: Gauge, title: 'Velocidad & Performance', description: 'Core Web Vitals en verde y CDN global para máxima rapidez', category: 'Web' },
  
    // Apps & CRM (6 funciones)
    { icon: Users, title: 'CRM Omia', description: 'Contactos, etiquetas, embudos y recordatorios en un solo lugar', category: 'Apps & CRM' },
    { icon: Wrench, title: 'CRM a Medida', description: 'Módulos y campos 100% adaptados a tu operación', category: 'Apps & CRM' },
    { icon: Inbox, title: 'Inbox Omnicanal', description: 'WhatsApp, Instagram, Email y Web unificados con contexto', category: 'Apps & CRM' },
    { icon: LayoutDashboard, title: 'Paneles de Métricas', description: 'KPIs, revenue, turnos, conversiones y cohorts en tiempo real', category: 'Apps & CRM' },
    { icon: Tags, title: 'Embudos & Smart Tags', description: 'Segmentación automática y acciones por etapa', category: 'Apps & CRM' },
    { icon: Shield, title: 'Multiagente & Permisos', description: 'Roles, accesos y auditoría para equipos y franquicias', category: 'Apps & CRM' },
  
    // Voz (6 funciones)
    { icon: Mic, title: 'Agente de Voz en Tiempo Real', description: 'Atiende llamadas con IA, natural y sin esperas', category: 'Voz' },
    { icon: FileAudio, title: 'Audios: Envío y Lectura', description: 'El agente entiende y responde notas de voz', category: 'Voz' },
    { icon: PhoneCall, title: 'Llamadas Salientes TTS', description: 'Recordatorios, confirmaciones y encuestas por voz', category: 'Voz' },
    { icon: Workflow, title: 'IVR Inteligente', description: 'Menús por voz con enrutamiento según intención', category: 'Voz' },
    { icon: FileText, title: 'Transcripción & Resumen', description: 'Convierte llamadas y audios en notas accionables', category: 'Voz' },
    { icon: NotebookPen, title: 'Post-llamada & Seguimiento', description: 'Tareas, tickets y mensajes automáticos luego de la llamada', category: 'Voz' },
  ];
  

// --- COMPONENTE INNOVADOR ---
export default function AgentsFunctions() {
    const sectionRef = useRef<HTMLDivElement>(null);

    const [selectedCategory, setSelectedCategory] = useState<string>('');

    // Efectos de mouse para 3D
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                mouseX.set(e.clientX - rect.left);
                mouseY.set(e.clientY - rect.top);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    // Función para generar colores con paleta fría y vibrante
    const getGalaxyColor = (category: string) => {
        const galaxyColors = {
            'Calendario': {
                primary: '#3b82f6', // Azul vibrante
                secondary: '#1d4ed8', // Azul profundo
                glow: 'rgba(59, 130, 246, 0.8)',
                particle: 'rgba(59, 130, 246, 0.6)',
                gradient: 'from-blue-500 to-blue-600'
            },
            'Comunicación': {
                primary: '#8b5cf6', // Violeta vibrante
                secondary: '#7c3aed', // Violeta profundo
                glow: 'rgba(139, 92, 246, 0.8)',
                particle: 'rgba(139, 92, 246, 0.6)',
                gradient: 'from-violet-500 to-violet-600'
            },
            'Automatización': {
                primary: '#06b6d4', // Cian vibrante
                secondary: '#0891b2', // Cian profundo
                glow: 'rgba(6, 182, 212, 0.8)',
                particle: 'rgba(6, 182, 212, 0.6)',
                gradient: 'from-cyan-500 to-cyan-600'
            },
            'Integración': {
                primary: '#10b981', // Esmeralda vibrante
                secondary: '#059669', // Esmeralda profunda
                glow: 'rgba(16, 185, 129, 0.8)',
                particle: 'rgba(16, 185, 129, 0.6)',
                gradient: 'from-emerald-500 to-emerald-600'
            },
            'Analytics': {
                primary: '#6366f1', // Índigo vibrante
                secondary: '#4f46e5', // Índigo profundo
                glow: 'rgba(99, 102, 241, 0.8)',
                particle: 'rgba(99, 102, 241, 0.6)',
                gradient: 'from-indigo-500 to-indigo-600'
            },
            'IA': {
                primary: '#a855f7', // Púrpura vibrante
                secondary: '#9333ea', // Púrpura profundo
                glow: 'rgba(168, 85, 247, 0.8)',
                particle: 'rgba(168, 85, 247, 0.6)',
                gradient: 'from-purple-500 to-purple-600'
            },
            'Pagos': {
                primary: '#22c55e', // Verde vibrante
                secondary: '#16a34a', // Verde profundo
                glow: 'rgba(34, 197, 94, 0.8)',
                particle: 'rgba(34, 197, 94, 0.6)',
                gradient: 'from-green-500 to-green-600'
            },
            'Web': {
                primary: '#0ea5e9', // Azul cielo vibrante
                secondary: '#0284c7', // Azul cielo profundo
                glow: 'rgba(14, 165, 233, 0.8)',
                particle: 'rgba(14, 165, 233, 0.6)',
                gradient: 'from-sky-500 to-sky-600'
            },
            'Apps & CRM': {
                primary: '#14b8a6', // Teal vibrante
                secondary: '#0d9488', // Teal profundo
                glow: 'rgba(20, 184, 166, 0.8)',
                particle: 'rgba(20, 184, 166, 0.6)',
                gradient: 'from-teal-500 to-teal-600'
            },
            'Voz': {
                primary: '#06b6d4', // Cian vibrante (alternativo)
                secondary: '#0891b2', // Cian profundo
                glow: 'rgba(6, 182, 212, 0.8)',
                particle: 'rgba(6, 182, 212, 0.6)',
                gradient: 'from-cyan-500 to-cyan-600'
            } 
        };

        return galaxyColors[category as keyof typeof galaxyColors] || galaxyColors['Calendario'];
    }

    // Agrupar funciones por categoría
    const groupedFeatures = allFeatures.reduce((acc, feature) => {
        if (!acc[feature.category]) {
            acc[feature.category] = [];
        }
        acc[feature.category].push(feature);
        return acc;
    }, {} as Record<string, Feature[]>);

    const categories = Object.keys(groupedFeatures);
    const filteredFeatures = groupedFeatures[selectedCategory] || [];

    useEffect(() => {
        if (categories.length > 0) {
            setSelectedCategory(categories[0])
        }
    }, [])


return (
    <section
        ref={sectionRef}
        className="relative text-white py-16 lg:py-20 px-4 overflow-hidden"
    >
        <div className="max-w-6xl mx-auto relative z-10">
            {/* Header simple */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center mb-8 sm:mb-12 max-w-3xl mx-auto "
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl  text-white mb-4 "
                >
                    Una función para  {''}
                    <span className={`termina-bold bg-gradient-to-r ${
                        selectedCategory === 'Calendario' ? 'from-blue-400 to-blue-800' :
                        selectedCategory === 'Comunicación' ? 'from-violet-400 to-violet-800' :
                        selectedCategory === 'Automatización' ? 'from-cyan-400 to-cyan-800' :
                        selectedCategory === 'Integración' ? 'from-emerald-400 to-emerald-800' :
                        selectedCategory === 'Analytics' ? 'from-indigo-400 to-indigo-800' :
                        selectedCategory === 'IA' ? 'from-purple-400 to-purple-800' :
                        selectedCategory === 'Pagos' ? 'from-green-400 to-green-800' :
                        selectedCategory === 'Web' ? 'from-sky-400 to-sky-800' :
                        selectedCategory === 'Apps & CRM' ? 'from-teal-400 to-teal-800' :
                        selectedCategory === 'Voz' ? 'from-cyan-400 to-cyan-800' :
                        'from-blue-400 to-indigo-600 to-emerald-800'
                    } bg-clip-text text-transparent`}>
                        cada necesidad
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className=" bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent text-lg ">
                    Algunas de nuestras funciones inteligentes que marcan la diferencia
                </motion.p>
            </motion.div>

            {/* Navegación con estilo de cards */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap justify-center gap-1 md:gap-4 mb-10"
            >
                {categories.map((category) => {
                    const isActive = selectedCategory === category;
                    const color = getGalaxyColor(category);

                    return (
                        <motion.button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            whileHover={{
                                scale: 1.02,
                                y: -2
                            }}
                            whileTap={{ scale: 0.98 }}
                            className={`px-3 mt-3 py-1 md:px-5 md:py-2.5 rounded-xl backdrop-blur-md transition-all duration-300 text-xs md:text-sm font-medium overflow-hidden relative ${
                                isActive ? 'shadow-2xl hover:shadow-3xl scale-105' : 'shadow-lg hover:shadow-xl'
                            }`}
                            style={{
                                background: isActive
                                    ? `linear-gradient(135deg,${color.glow} 60%, rgba(161, 37, 37, 0.08) 30%, rgba(255, 255, 255, 0.05) 50%, )`
                                    : `linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.02) 100%)`,


                                maskImage: `linear-gradient(to right, black 90%, transparent 100%)`,
                                WebkitMaskImage: `linear-gradient(to right, black 90%, transparent 100%)`
                            }}
                        >
                            {/* Detalle de color sutil */}


                            <div className="relative z-10 text-sm md:text-md">
                                <span
                                    className={isActive ? 'font-bold' : 'text-gray-300'}
                                    style={isActive ? {
                                        background: `linear-gradient(to right, ${color.primary}, ${color.secondary})`,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    } : {}}
                                >
                                    {category}
                                </span>
                            </div>
                        </motion.button>
                    );
                })}
            </motion.div>

            {/* Grid de cards minimalistas */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedCategory}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6"
                >
                    {filteredFeatures.map((feature, featureIndex) => {
                        // Color base según la categoría seleccionada
                        const featureColor = getGalaxyColor(selectedCategory);



                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: featureIndex * 0.08,
                                    type: "spring",
                                    stiffness: 100
                                }}
                                whileHover={{
                                    scale: 1.04,
                                    y: -6,

                                }}

                                className="group relative"
                            >
                                {/* Detalle superior sutil y desvanecido */}
                               
                                {/* Glow de fondo colorido */}
                                <div
                                    className="absolute inset-0 z-0 rounded-2xl pointer-events-none"
                                    style={{
                                        background: `radial-gradient(circle at 0% 10%, ${featureColor.glow} 0%, transparent 30%)`,
                                        opacity: 0.35,
                                   
                                    }}
                                />
                                {/* Card glassmorph con color de la categoría y fondo desvanecido */}
                                <div
                                    className={`relative md:p-8 p-4 rounded-2xl  h-full group/card overflow-hidden  `}
                                >
                                    <div className="relative z-10 space-y-2">
                                        <div className='flex md:items-center gap-4 w-full flex-col md:flex-row justify-center md:justify-start'>
                                            {React.createElement(feature.icon, {
                                                className: "md:w-10 md:h-10 w-8 h-8 drop-shadow-[0_2px_8px_#0008] transition-colors duration-300",
                                                style: {
                                                    color: featureColor.primary
                                                }
                                            })}

                                            {/* Título */}
                                            <h4 
                                                className="md:text-lg font-semibold leading-tight drop-shadow-sm"
                                                style={{
                                                    background: `linear-gradient(to right, ${featureColor.primary}, ${featureColor.secondary})`,
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                    backgroundClip: 'text'
                                                }}
                                            >
                                                {feature.title}
                                            </h4></div>
                                        {/* Icono con fondo glass y color desvanecido */}

                                        {/* Descripción */}
                                        <p className="text-md text-gray-200 leading-relaxed drop-shadow-sm hidden sm:block">
                                            {feature.description}
                                        </p>
                                    </div>
                                    <div 
                                        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none opacity-50"
                                        style={{
                                            background: `linear-gradient(to top, ${featureColor.secondary}20, transparent)`
                                        }}
                                    ></div>

                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </AnimatePresence>
        </div>
    </section>
);
}