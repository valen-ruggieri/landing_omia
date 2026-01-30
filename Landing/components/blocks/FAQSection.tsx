'use client'; 

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, Zap, Plug, Users, Sparkles, Clock, Layers, Rocket, Shield, LifeBuoy, BarChart3 } from 'lucide-react';

const faqs = [
    {
        question: "¿En qué se diferencia OMIA de un chatbot tradicional?",
        answer:
            "Los chatbots siguen flujos fijos. OMIA diseña agentes de IA que entienden contexto, recuerdan conversaciones y ejecutan acciones reales: crean o actualizan registros en tu CRM, agendan turnos, consultan stock/precios y disparan automatizaciones en tus sistemas.",
        icon: <Zap className="w-6 h-6" />,
        gradient: "from-emerald-500 to-violet-500",
        bgGradient: "from-emerald-500/10 to-violet-500/10",
    },
    {
        question: "¿Para qué tipos de negocios funciona mejor?",
        answer:
            "Negocios con atención recurrente por WhatsApp/Instagram y procesos repetibles: salud (turnos y recordatorios), inmobiliarias (consultas y visitas), e-commerce/retail (pre/posventa y recupero), educación y servicios profesionales.",
        icon: <Users className="w-6 h-6" />,
        gradient: "from-violet-500 to-blue-500",
        bgGradient: "from-violet-500/10 to-blue-500/10",
    },
    {
        question: "¿Cómo es la implementación con OMIA?",
        answer:
            "Simple y por etapas. Integramos tus canales y sistemas, entrenamos un agente base y vamos ampliando funciones sin frenar tu operación. Entregamos tableros, métricas y flujos listos para iterar semana a semana.",
        icon: <Rocket className="w-6 h-6" />,
        gradient: "from-blue-500 to-indigo-500",
        bgGradient: "from-blue-500/10 to-indigo-500/10",
    },
    {
        question: "¿Qué servicios ofrece OMIA además de agentes de IA?",
        answer:
            "Construimos el ecosistema completo: sitios y e-commerce, apps y microservicios, CRMs y paneles a medida, automatizaciones n8n y flujos multicanal. Todo conectado para que tu operación funcione 24/7.",
        icon: <Sparkles className="w-6 h-6" />,
        gradient: "from-indigo-500 to-cyan-500",
        bgGradient: "from-indigo-500/10 to-cyan-500/10",
    },
    {
        question: "¿Puedo integrar mis APIs y plataformas actuales?",
        answer:
            "Sí. OMIA se conecta por API/Webhooks a tus herramientas (Calendar, Sheets, Mercado Pago, Shopify, WooCommerce, HubSpot, Tokko, etc.). Si no las tenés, te armamos una capa propia y la dejamos lista para escalar.",
        icon: <Plug className="w-6 h-6" />,
        gradient: "from-cyan-500 to-violet-500",
        bgGradient: "from-cyan-500/10 to-violet-500/10",
    },
    {
        question: "¿Necesito saber de tecnología para usarlo?",
        answer:
            "No. Nosotros configuramos, integramos y entrenamos la IA. Te capacitamos y dejamos ‘botones inteligentes’ para que tu equipo active o pause flujos sin tocar código.",
        icon: <Layers className="w-6 h-6" />,
        gradient: "from-violet-500 to-blue-500",
        bgGradient: "from-violet-500/10 to-blue-500/10",
    },
    {
        question: "¿Cómo manejan la seguridad y los datos?",
        answer:
            "Usamos buenas prácticas de autenticación, control de accesos y registro de auditoría. Los agentes solo acceden a la información necesaria para cada tarea y respetan roles/permiso de tus sistemas.",
        icon: <Shield className="w-6 h-6" />,
        gradient: "from-slate-500 to-emerald-500",
        bgGradient: "from-slate-500/10 to-emerald-500/10",
    },
    {
        question: "¿Cuál es el tiempo típico para ver resultados?",
        answer:
            "En las primeras 2–4 semanas ya podés automatizar las consultas frecuentes y el agendado básico. Desde ahí, iteramos sobre casos de uso de mayor impacto (ventas, recupero, posventa) con métricas claras.",
        icon: <Clock className="w-6 h-6" />,
        gradient: "from-amber-500 to-fuchsia-500",
        bgGradient: "from-amber-500/10 to-fuchsia-500/10",
    },
    {
        question: "¿Ofrecen prueba o proyecto piloto?",
        answer:
            "Sí. Podemos arrancar con un piloto acotado para validar el encaje: 1 canal, 1-2 integraciones y un set de intents críticos. Si funciona, escalar es directo: sumamos canales, reglas y automatizaciones.",
        icon: <LifeBuoy className="w-6 h-6" />,
        gradient: "from-teal-500 to-indigo-500",
        bgGradient: "from-teal-500/10 to-indigo-500/10",
    },
    {
        question: "¿Cómo se mide el impacto de OMIA?",
        answer:
            "Definimos KPIs desde el día uno: tiempo de respuesta, tasa de resolución, turnos confirmados, ventas asistidas, carritos recuperados y ahorro operativo. Todas las métricas quedan visibles en tu panel.",
        icon: <BarChart3 className="w-6 h-6" />,
        gradient: "from-rose-500 to-cyan-500",
        bgGradient: "from-rose-500/10 to-cyan-500/10",
    },
];

export default function FAQSection() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
        >
            <div className="text-center mb-20">
                <h3 className="text-4xl md:text-5xl lg:text-6xl  text-white mb-6 font-termina">
                    Resolvemos tus{' '}
                    <span className="termina-bold bg-gradient-to-r from-cyan-400 via-cyan-600 to-cyan-700 bg-clip-text text-transparent">
                        dudas
                    </span>
                </h3>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-poppins">
                    Información clara y transparente sobre nuestros servicios
                </p>
            </div>

            <div className="max-w-6xl mx-auto">
                {/* Estructura en Columnas Profesionales */}
                <div className="grid lg:grid-cols-2 gap-8 mb-20">
                    {/* Columna Izquierda - Preguntas Principales */}
                    <div className="space-y-6">
                        {faqs.slice(0, 3).map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                                className="group"
                            >
                                <div className="shadow-lg bg-gradient-to-b from-cyan-500/10 to-transparent rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:scale-105 ">
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full text-left transition-all duration-300"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-white transition-colors duration-300 font-poppins">
                                                    {faq.question}
                                                </h4>
                                                {openFaq !== index && (
                                                    <p className="text-gray-300 text-sm leading-relaxed font-poppins">
                                                        {faq.answer.substring(0, 80)}...
                                                    </p>
                                                )}
                                            </div>
                                            <motion.div
                                                animate={{
                                                    rotate: openFaq === index ? 180 : 0,
                                                }}
                                                transition={{ duration: 0.3 }}
                                                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white ml-4 flex-shrink-0"
                                            >
                                                <ChevronUp className="w-4 h-4" />
                                            </motion.div>
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {openFaq === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-4">
                                                    <div className="h-px bg-gradient-to-r from-cyan-400/100 to-transparent mb-4" />
                                                    <p className="text-gray-300 leading-relaxed font-poppins">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Columna Derecha - Preguntas Técnicas */}
                    <div className="space-y-6">
                        {faqs.slice(3, 6).map((faq, index) => (
                            <motion.div
                                key={index + 3}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                                className="group"
                            >
                                <div className="shadow-lg bg-gradient-to-b from-cyan-500/10 to-transparent rounded-2xl p-6 transition-all duration-500 hover:shadow-2xl hover:scale-105 ">
                                    <button
                                        onClick={() => toggleFaq(index + 3)}
                                        className="w-full text-left transition-all duration-300"
                                    >
                                        <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-white transition-colors duration-300 font-poppins">
                                                    {faq.question}
                                                </h4>
                                                {openFaq !== index + 3 && (
                                                    <p className="text-gray-300 text-sm leading-relaxed font-poppins">
                                                        {faq.answer.substring(0, 80)}...
                                                    </p>
                                                )}
                                            </div>
                                            <motion.div
                                                animate={{
                                                    rotate: openFaq === index + 3 ? 180 : 0,
                                                }}
                                                transition={{ duration: 0.3 }}
                                                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white ml-4 flex-shrink-0"
                                            >
                                                <ChevronUp className="w-4 h-4" />
                                            </motion.div>
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {openFaq === index + 3 && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-4">
                                                    <div className="h-px bg-gradient-to-r from-cyan-400/100 to-transparent mb-4" />
                                                    <p className="text-gray-300 leading-relaxed font-poppins">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
