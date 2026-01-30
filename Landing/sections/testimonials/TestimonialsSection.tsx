'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
    const testimonialsRef = useRef<HTMLDivElement>(null);

    const testimonials = [
        {
          company: "Del Sur Desarrollos",
          industry: "Real Estate / Desarrollos",
          quote:
            "Antes perdíamos horas entre WhatsApp e Instagram. Con Omia, las consultas se califican solas, se envía ficha + precio y el agente propone 3 horarios según el calendario real del asesor. Hoy respondemos en minutos y las visitas llegan con intención.",
          author: "María González",
          position: "Directora Comercial",
        },
        {
          company: "Red Nacional Inmobiliaria",
          industry: "Brokerage Multisucursal",
          quote:
            "Cada sucursal trabajaba distinto. Omia unificó el ruteo por zona, idioma y horario; estandarizó respuestas y midió todo. Si es lead caliente, notifica al asesor correcto. Orden + velocidad sin contratar más gente.",
          author: "Carlos Mendoza",
          position: "Gerente de Operaciones",
        },
        {
          company: "Clínica San Rafael",
          industry: "Salud",
          quote:
            "El ausentismo nos castigaba. Omia pre-clasifica motivo de consulta, ofrece turnos disponibles, envía recordatorios y reprograma en un toque. Nuestro equipo dejó de vivir al teléfono y el paciente siente una atención 24/7.",
          author: "Ana Rodríguez",
          position: "Jefa de Atención al Paciente",
        },
        {
          company: "AutoMax Group",
          industry: "Automotriz",
          quote:
            "Separaron venta y posventa en un mismo canal. El agente ia agenda test drives por sucursal, pide licencia/DNI y coordina repuestos en service. Los vendedores ahora dedican tiempo a cerrar, no a coordinar.",
          author: "Roberto Silva",
          position: "Director Comercial",
        },
        {
          company: "TechFlow Solutions",
          industry: "SaaS / Software",
          quote:
            "Soporte nivel 1 nos consumía. Omia resuelve claves, billing y onboarding paso a paso; si detecta riesgo, avisa al CSM. Bajó el ruido, subió la adopción y tenemos métricas claras en un dashboard.",
          author: "Laura Fernández",
          position: "Head of Customer Success",
        },
        {
          company: "Fashion Hub LATAM",
          industry: "Retail / E-commerce",
          quote:
            "Unificamos WhatsApp, Instagram y Web. Menos '¿dónde está mi pedido?' gracias a seguimiento automático y más ventas asistidas sin sumar headcount.",
          author: "Diego Herrera",
          position: "E-commerce Manager",
        },
        {
          company: "Bunker Analytics",
          industry: "Marketing / Analytics",
          quote:
            "Con Omia respondemos en segundos 24/7 en web, WhatsApp e Instagram. Mejoró la tasa de conversión y podemos atribuir cada venta a su conversación.",
          author: "Tomás Ulloa",
          position: "Director de Marketing",
        },
        {
          company: "Skateistan Chile",
          industry: "Educación / ONGs",
          quote:
            "Pasamos de conversar a convertir: Omia llevó la conversión de conversación a lead a otro nivel y migró campañas sin fricción. Todo medido y en tiempo real.",
          author: "Orlando",
          position: "Co-fundador",
        },
        {
          company: "Clínica Vespucio",
          industry: "Salud",
          quote:
            "En salud el tiempo vale oro. Omia responde al instante, filtra por obra social y coordina turnos con recordatorios. Más pacientes asistidos y menos huecos.",
          author: "Vicente Rotman",
          position: "Director de Marketing",
        },
        {
          company: "Oftavision",
          industry: "Salud / Oftalmología",
          quote:
            "Automatizamos la pre-consulta y los recordatorios. El retorno de inversión llegó muy rápido porque el agente trabaja 24/7 y no se olvida de nadie.",
          author: "Dr. Rodrigo Acuña",
          position: "Fundador",
        },
        {
          company: "Kitchen Center",
          industry: "Retail / Electro",
          quote:
            "La recomendación de productos con reglas + IA fue clave. Omia entiende intención, sugiere combos y reduce dudas repetidas. La conversión promedio mensual creció de forma consistente.",
          author: "Jorge",
          position: "Head of Digital",
        },
        {
          company: "InnovaLaw",
          industry: "Servicios Profesionales / Legal",
          quote:
            "Digitalizamos intake y agenda con formularios guiados por Omia. Se ordenó el pipeline y mejoró el uso del tiempo del estudio.",
          author: "Pablo",
          position: "Gerente de Innovación",
        },
      ];
      

    return (
        <section
            id="testimonials"
            ref={testimonialsRef}
            className="relative  text-white py-20 lg:py-24 px-4"
        >
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25 }}
                    className="text-center mb-8 sm:mb-12 lg:mb-5 px-4"
                >
                    <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4">

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05, duration: 0.2 }}
                            className="text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl  text-white mb-4 font-termina"
                        >
                         Que dicen {' '}
                            <span className="font-termina  termina-bold bg-gradient-to-r font-bold from-purple-400 via-purple-500 to-violet-700 bg-clip-text text-transparent">
                            nuestros clientes 
                            </span>
                        </motion.h2>
                    </div>
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2 font-poppins">
                       Un poco de lo que dicen sobre nosotros
                    </p>
                </motion.div>
              

                {/* Grid masonry con 3 columnas y espaciados variables */}
                <div className="relative max-h-[750px] overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {/* Columna 1 - Espaciados variables */}
                        <div className="flex flex-col gap-0 ">
                            {[0, 3, 6, 9].map((index, i) => {

                                return testimonials[index] && (
                                    <motion.div
                                        key={`col1-${i}-${index}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className={"mt-5"}
                                    >
                                        <div className="  shadow-lg bg-gradient-to-b from-purple-500/5 to-transparent rounded-2xl p-6 pointer-none transition-colors">
                                            <p className="text-gray-300 text-[18px] mb-5 leading-relaxed">
                                                {testimonials[index].quote}
                                            </p>
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-full   flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                                                    {testimonials[index].author.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="text-white text-[18px] font-medium font-poppins">{testimonials[index].author}</p>
                                                    <p className="text-gray-500 text-[13px] font-poppins">{testimonials[index].position}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Columna 2 - Espaciados variables */}
                        <div className="flex flex-col gap-0 pt-15">
                            {[1, 4, 7, 10].map((index, i) => {

                                return testimonials[index] && (
                                    <motion.div
                                        key={`col2-${i}-${index}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className={"mb-5"}
                                    >
                                        <div className="  rounded-2xl shadow-lg bg-gradient-to-b from-purple-500/5 to-transparent p-6 pointer-none transition-colors">
                                            <p className="text-gray-300 text-[18px] mb-10 leading-relaxed font-poppins">
                                                {testimonials[index].quote}
                                            </p>
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-full   flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                                                    {testimonials[index].author.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="text-white text-[18px] font-medium font-poppins">{testimonials[index].author}</p>
                                                    <p className="text-gray-500 text-[13px] font-poppins">{testimonials[index].position}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Columna 3 - Espaciados variables */}
                        <div className="flex flex-col gap-0">
                            {[2, 5, 8, 11].map((index, i) => {
                                const spacings = ['mb-6', 'mb-5', 'mb-4', 'mb-6'];
                                return testimonials[index] && (
                                    <motion.div
                                        key={`col3-${i}-${index}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className={spacings[i]}
                                    >
                                        <div className="  rounded-2xl p-6 shadow-lg bg-gradient-to-b from-purple-500/5 to-transparent pointer-none transition-colors">
                                            <p className="text-gray-300 text-[18px] mb-5 leading-relaxed">
                                                {testimonials[index].quote}
                                            </p>
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-full   flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                                                    {testimonials[index].author.charAt(0)}
                                                </div>
                                                <div>
                                                    <p className="text-white text-[18px] font-medium font-poppins">{testimonials[index].author}</p>
                                                    <p className="text-gray-500 text-[13px] font-poppins">{testimonials[index].position}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Gradientes de difuminado */}
                    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-t from-transparent via-[#0c0e15]/50 to-[#0c0e15]/70  pointer-events-none z-10"></div>
                    <div className="absolute agente iatom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-[#0c0e15]/50 to-[#0c0e15]/60 pointer-events-none z-10"></div>
                </div>
            </div>
        </section>
    );
}
