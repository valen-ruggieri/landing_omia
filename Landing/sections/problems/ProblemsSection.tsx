'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import {
    CheckCircle,
    XCircle,
    Bot,
    Calendar,
    Users,
    Database,
    FileText,
    TrendingUp,
    BarChart3,
    Settings,
    Shield,
    Headphones,
    Palette,
    Mic,
    Megaphone,
    ShieldCheck,
    Gauge,
    Lock,
    Truck,
    Package,
    Receipt,
    CreditCard,
    MonitorSmartphone,
    ShoppingCart,
    Globe,
    KeyRound,
    Server,
    Plug,
    Layers,
    MessageSquare
} from 'lucide-react';



const rows = [
    // IA & Automatización
    {
      icon: <Bot className="w-6 h-6" />,
      omia: "Asistentes con IA multiagente que conversan, venden, agendan y se integran a tus procesos",
      other: "Bots genéricos sin contexto ni conexión real con tu negocio"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      omia: "Flujos de conversación de punta a punta (descubrimiento → recomendación → cierre → cobro)",
      other: "Respuestas sueltas sin un proceso comercial definido"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      omia: "Base de conocimiento entrenada (PDFs, catálogos, políticas) con memoria contextual",
      other: "Información dispersa: hay que reenviar archivos o repetir respuestas"
  
    },
  
    // Agenda & Operaciones
    {
      icon: <Calendar className="w-6 h-6" />,
      omia: "Agenda inteligente: altas, bajas, reprogramaciones, recordatorios y confirmaciones automáticas",
      other: "Turnos en WhatsApp, papel o Excel: olvidos, superposiciones y caos"
    },
    {
      icon: <Users className="w-6 h-6" />,
      omia: "Bandeja omnicanal y multiagente desde un solo número, con historial compartido",
      other: "Una sola persona responde; si no está, no hay atención"
    },
  
    // CRM & Datos
    {
      icon: <Database className="w-6 h-6" />,
      omia: "CRM visual a medida: contactos, tareas, embudos, follow-ups y alertas",
      other: "Sin registro centralizado; no hay trazabilidad ni seguimiento"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      omia: "Data ownership: tu información en tu infraestructura (exportable y auditable)",
      other: "Datos encerrados en plataformas cerradas, sin control ni exportación clara"
    },
  
    // Integraciones & APIs
    {
      icon: <Plug className="w-6 h-6" />,
      omia: "Hub de integraciones: Google (Calendar/Sheets), Mercado Pago/Stripe, Notion, ERPs y más",
      other: "Herramientas aisladas que no se hablan entre sí"
    },
    {
      icon: <Server className="w-6 h-6" />,
      omia: "APIs propias + conexión a tus sistemas para stock, precios, envíos y reportes",
      other: "No se puede sincronizar información crítica del negocio"
    },
    {
      icon: <KeyRound className="w-6 h-6" />,
      omia: "Webhooks y eventos para activar automatizaciones en tiempo real",
      other: "Procesos manuales y tardíos que dependen de personas"
    },
  
    // Web, E-commerce & Apps
    {
      icon: <Globe className="w-6 h-6" />,
      omia: "Sitios y landings orientados a conversión (UX, SEO técnico, velocidad, accesibilidad)",
      other: "Páginas lentas, sin estrategia y difíciles de actualizar"
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      omia: "E-commerce con catálogo interactivo, cobros, recuperación de carritos y posventa",
      other: "Tienda sin automatización: ventas perdidas y soporte saturado"
    },
    {
      icon: <MonitorSmartphone className="w-6 h-6" />,
      omia: "Apps y plataformas a medida que crecen con tu negocio",
      other: "Sistemas genéricos que limitan tus procesos"
  
    },
  
    // Pagos & Logística
    {
      icon: <CreditCard className="w-6 h-6" />,
      omia: "Cobros integrados (links, tarjetas, QR) con conciliación automática",
      other: "Pagos por fuera, conciliación manual y errores frecuentes"
    },
    {
      icon: <Receipt className="w-6 h-6" />,
      omia: "Facturación y comprobantes automatizados con datos del cliente",
      other: "Carga manual y demoras en emitir comprobantes"
    },
    {
      icon: <Package className="w-6 h-6" />,
      omia: "Pedidos con estado actualizado y seguimiento de envíos",
      other: "Clientes preguntando todo el tiempo por el estado del pedido"
    },
    {
      icon: <Truck className="w-6 h-6" />,
      omia: "Integración con logística y cálculo de costos de envío",
      other: "Cotizaciones a mano y errores de entrega"
  
    },
  
    // Analytics & Mejora Continua
    {
      icon: <BarChart3 className="w-6 h-6" />,
      omia: "Panel de métricas: respuesta, ventas, conversión, tiempos, embudos",
      other: "Sin datos: decisiones a ciegas, difícil mejorar"
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      omia: "Experimentos A/B y KPIs por canal para iterar con evidencia",
      other: "Cambios por intuición, sin medir impacto real"
    },
  
    // Seguridad & Confiabilidad
    {
      icon: <Lock className="w-6 h-6" />,
      omia: "Buenas prácticas de seguridad, privacidad y control de accesos por rol",
      other: "Usuarios compartidos, accesos sin control y riesgo de filtraciones"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      omia: "Monitoreo, alertas y alta disponibilidad para continuidad operativa",
      other: "Caídas sin aviso y pérdida de conversaciones o ventas"
    },
  
    // Marca & Soporte
    {
      icon: <Palette className="w-6 h-6" />,
      omia: "Branding integrado: tu tono, tus guías, tu estética en cada canal",
      other: "Imagen inconsistente y poco profesional"
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      omia: "Onboarding, migración y soporte cercano para tu equipo",
      other: "Hacélo por tu cuenta: prueba y error sin acompañamiento"
    },
  
    // Canales & Experiencias
    {
      icon: <Mic className="w-6 h-6" />,
      omia: "IA de voz y agentes embebidos en web para experiencias fluidas",
      other: "Atención limitada a texto y sin interacción natural"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      omia: "Personalización total por rubro: reglas, flujos y contenidos a medida",
      other: "Plantillas rígidas que no reflejan cómo trabajás"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      omia: "Escalás sin sumar cabezas: procesos automatizados y coordinados",
      other: "Más demanda = más personas para capacitar y gestionar"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      omia: "Menos errores humanos y tareas repetitivas; más foco en lo importante",
      other: "Errores al pasar precios, confirmar turnos o responder rápido"
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      omia: "Automatizaciones de marketing: nutrición, recontacto y campañas",
      other: "Seguimientos manuales que se olvidan o llegan tarde"
    },
  ];

export default function ProblemsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
 

    return (
        <section
            ref={sectionRef}
            className="relative text-white py-16 lg:py-20 px-4"
        >
            {/* Iconos decorativos */}
       
            
        
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Título principal mejorado y responsivo */}
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-4">
                       Tu atencion es nuestra {" "}
                        <span className="font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                            mayor prioridad
                        </span>
                    </h2>
                    <p className=" bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent text-lg ">
                       para destacar se necesita innovar, por eso te contamos como con nosotros tu negocio va a diferenciarse de la competencia
                    </p>
                </motion.div>

                {/* Comparación estilo antes/después con sombras laterales de color */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-2xl overflow-hidden shadow-lg"
                    >
                        {/* Sombras laterales */}
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 z-10 hidden md:block"
                            style={{
                                background: "linear-gradient(to right, rgba(239, 68, 68, 0.06) 0%, transparent 100%)"
                            }}
                        />
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 z-10 hidden md:block"
                            style={{
                                background: "linear-gradient(to left, rgba(16, 185, 129, 0.06) 0%, transparent 100%)"
                            }}
                        />

                        {/* Header */}
                        <div className="grid grid-cols-2 text-sm md:text-base hidden sm:grid">
                            <div className="p-3 md:p-4 text-center">
                                <h3 className="font-bold text-3xl bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                                 
                                  Otras empresas
                                </h3>
                            </div>
                            <div className="p-3 md:p-4 text-center">
                                 <h3 className="font-bold text-3xl bg-gradient-to-r from-emerald-300 to-emerald-600 bg-clip-text text-transparent">
                                 
                                    Con Omia
                                </h3>
                            </div>
                        </div>

                        {/* Lista de comparaciones minimalista y mobile first */}
                        <div className="max-h-[420px] overflow-y-auto w-full custom-scrollbar">
                            {rows.map((row, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: idx * 0.02 }}
                                    className="relative grid grid-cols-1 md:grid-cols-2 transition-colors duration-200"
                                >
                                    {/* Sin OMIA */}
                                    <div className="flex items-center gap-2 px-4 py-3 md:py-4 md:pr-8 justify-start">
                                        <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                                        <p className="text-xs md:text-sm text-white leading-snug text-left">
                                            {row.other}
                                        </p>
                                    </div>

                                    {/* Con OMIA */}
                                    <div className="flex items-center gap-2 px-4 py-3 md:py-4 md:pl-8 justify-start">
                                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                        <p className="text-xs md:text-sm text-white leading-snug font-medium text-left">
                                            {row.omia}
                                        </p>
                                    </div>

                                    {/* Icono temático único al centro, solo visible en md+ */}
                                
                                </motion.div>
                            ))}
                        </div>

                        {/* Gradiente inferior para indicar scroll */}
                        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black to-transparent pointer-events-none "></div>
                    </motion.div>
                </div>

               
            </div>
        </section>
    );
}
