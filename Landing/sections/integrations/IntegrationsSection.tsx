'use client';

import { motion } from 'framer-motion';
import { Calendar, ShoppingCart, Building, CreditCard, ShoppingBag, BarChart } from 'lucide-react';


export default function IntegrationsSection() {
    const integrations = [
        {
            icon: Building,
            title: "Tokko Broker",
            description:
                "Con Tokko Omia sincroniza todas tus propiedades al instante, mantiene precios y stock actualizados y también se te envían los leads calificados para que vos los cierres.",
            color: "from-red-500 to-red-600",
            bgColor: "bg-red-500/10",
            borderColor: "border-red-500/30",
            logo: "/images/logo/tokko_broker_logo (1) 1.svg",
            isSvg: true,
        },
        {
            icon: ShoppingCart,
            title: "Mercado Libre",
            description:
                "Omia se sincroniza con todos los productos que tengas publicados en Mercado Libre para que el agente responda cualquier consulta y cierre ventas directamente.",
            color: "from-yellow-500 to-orange-500",
            bgColor: "bg-yellow-500/10",
            borderColor: "border-yellow-500/30",
            logo: "/images/logo/meecadolibre.logo.svg",
            isSvg: true,
        },
        {
            icon: CreditCard,
            title: "Mercado Pago",
            description:
                "Envía links de pago automáticos, cobra reservas y registra pagos en tu sistema. Totalmente integrado con tus flujos de venta.",
            color: "from-cyan-500 to-sky-500",
            bgColor: "bg-cyan-500/10",
            borderColor: "border-cyan-500/30",
            logo: "/images/logo/mercadopago.logo.svg",
            isSvg: true,
        },
        {
            icon: BarChart,
            title: "HubSpot",
            description:
                "Integra Omia con HubSpot para registrar automáticamente leads calificados, contactos y oportunidades en tu CRM.",
            color: "from-teal-500 to-cyan-600",
            bgColor: "bg-teal-500/10",
            borderColor: "border-teal-500/30",
            logo: "/images/logo/hubspot.svg",
            isSvg: true,
        },
        {
            icon: BarChart,
            title: "Kommo",
            description:
                "Conecta con Kommo CRM para que todos los leads, conversaciones y oportunidades se sincronicen en un solo lugar.",
            color: "from-indigo-500 to-violet-500",
            bgColor: "bg-indigo-500/10",
            borderColor: "border-indigo-500/30",
            logo: "/images/logo/kommo.logo.svg",
            isSvg: true,
        },
        {
            icon: ShoppingBag,
            title: "Tiendanube",
            description:
                "Sincroniza tu tienda de Tiendanube para que Omia gestione consultas de productos, pedidos y disponibilidad.",
            color: "from-pink-500 to-rose-500",
            bgColor: "bg-pink-500/10",
            borderColor: "border-pink-500/30",
            logo: "/images/logo/tiendanube.logo_1.svg",
            isSvg: true,
        },
        {
            icon: ShoppingBag,
            title: "WooCommerce",
            description:
                "Integra tu tienda en WooCommerce para que el agente responda dudas, tome pedidos y mantenga actualizado el stock.",
            color: "from-orange-500 to-pink-500",
            bgColor: "bg-orange-500/10",
            borderColor: "border-orange-500/30",
            logo: "/images/logo/woocommerce.logo.svg",
            isSvg: true,
        },
        {
            icon: ShoppingBag,
            title: "Shopify",
            description:
                "Conecta tu tienda Shopify y permite que Omia gestione el catálogo, consultas de clientes y ventas directas.",
            color: "from-green-500 to-emerald-600",
            bgColor: "bg-green-500/10",
            borderColor: "border-green-500/30",
            logo: "/images/logo/shopify.logo.svg",
            isSvg: true,
        },
        {
            icon: Calendar,
            title: "Google Calendar",
            description:
                "Omia sincroniza tu disponibilidad en tiempo real. El agente ofrece horarios libres, confirma turnos y los agenda solo.",
            color: "from-blue-500 to-blue-600",
            bgColor: "bg-blue-500/10",
            borderColor: "border-blue-500/30",
            logo: "/images/logo/googlecalendar.logo.svg",
            isSvg: true,
        },


    ];


    return (
        <section className="relative max-w-7xl mx-auto py-20 lg:py-24 px-4 overflow-hidden">

            <div className=" w-full mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center  sm:mb-12 lg:mb-16 px-4"
                >
                    <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                        
                        <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 font-termina"
                    >
                        Conectalo con   {' '}
                        <span className="termina-bold bg-gradient-to-r from-blue-300 to-indigo-600 to-emerald-700 bg-clip-text text-transparent ">
                        integraciones
                        </span>
                    </motion.h2>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-2 font-poppins">
                       Tus sistemas y agente IA integrado para que tu entorno esté completo
                    </p>
                </motion.div>

                {/* Grid de Integraciones Simplificado */}
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-16 mt-10">
                    {integrations.map((integration, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent backdrop-blur-sm  rounded-xl p-4 sm:p-6  transition-all duration-300 h-full">
                                {/* Logo */}
                                <div className="flex items-center justify-center ">
                                    <img
                                        src={integration.logo}
                                        alt={integration.title}
                                        className="h-20 w-40 lg:w-50 lg:h-50  object-contain"
                                    />
                                </div>




                                {/* Description */}
                                <p className="hidden lg:block text-gray-300 text-sm lg:text-md leading-relaxed text-center">
                                    {integration.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
