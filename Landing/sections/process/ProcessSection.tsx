'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function ProcessSection() {
    const steps = [
        {
            id: 1,
            title: "Análisis",
            description: "Evaluamos tu negocio y definimos objetivos específicos para tu implementación.",
            icon: "🔍"
        },
        {
            id: 2,
            title: "Configuración",
            description: "Personalizamos OMIA según tus necesidades y configuramos todos los canales.",
            icon: "⚙️"
        },
        {
            id: 3,
            title: "Implementación",
            description: "Desplegamos la solución y entrenamos a tu equipo para el uso óptimo.",
            icon: "🚀"
        },
        {
            id: 4,
            title: "Optimización",
            description: "Monitoreamos resultados y optimizamos continuamente para máximo rendimiento.",
            icon: "📈"
        }
    ];

    // Datos del gráfico de satisfacción del cliente
    const satisfactionSeries = [
        {

            data: [3, 6, 8, 12, 20],
        },
    ];

    const satisfactionOptions: ApexOptions = {
        chart: {
            type: "area",
            height: 200,
            sparkline: {
                enabled: true,
            },
            animations: {
                enabled: true,
                speed: 800,
            },
            toolbar: {
                show: false,
            },
            background: 'transparent',
        },
        colors: ["#8b5cf6"],
        stroke: {
            curve: "smooth",
            width: 3,
        },
        markers: {
            size: 0,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.8,
                opacityTo: 0.1,
                stops: [0, 100],
                colorStops: [
                    {
                        offset: 0,
                        color: '#8b5cf6',
                        opacity: 0.8
                    },
                    {
                        offset: 50,
                        color: '#6366f1',
                        opacity: 0.4
                    },
                    {
                        offset: 100,
                        color: '#0a0b11',
                        opacity: 0.6
                    }
                ]
            },
        },
        xaxis: {
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        grid: {
            show: false,
        },
        tooltip: {
            enabled: false,
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
    };

    return (
        <section className="relative text-white py-20 lg:py-24 px-4">
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h3 className="text-4xl md:text-5xl lg:text-6xl  text-white mb-6 font-termina">
                        Nuestro{' '}
                        <span className="termina-bold bg-gradient-to-r from-violet-400 via-violet-400 to-indigo-600/70 bg-clip-text text-transparent">
                            proceso
                        </span>
                    </h3>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-poppins">
                        4 pasos simples para transformar tu negocio con inteligencia artificial
                    </p>
                </motion.div>

                {/* Desktop: Gráfico con cards encima */}
                <motion.div
                    className="relative mb-16 hidden lg:block"
                >
                    {/* Gráfico de fondo */}
                    <div className="h-120 pointer-events-none relative">
                        <Chart
                            options={satisfactionOptions}
                            series={satisfactionSeries}
                            type="area"
                            height="100%"
                            width="100%"
                        />
                        {/* Gradiente de difuminado en el lado derecho */}
                        <div className="absolute top-0 right-0 w-42 h-full bg-gradient-to-r from-[#0c0e15]/0 via-[#0c0e15]/50  to-[#0c0e15] pointer-events-none rounded-2xl"></div>
                    </div>
                    
                    {/* Cards posicionadas sobre el gráfico */}
                    <div className="absolute inset-0 flex items-end justify-between">
                        {steps.map((step, index) => {
                            // Posiciones escalonadas de abajo hacia arriba
                            const positions = ['bottom-0', 'bottom-8', 'bottom-16', 'bottom-24'];
                            const position = positions[index] || 'bottom-0';
                            
                            return (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                                    className={`absolute ${position} w-64`}
                                    style={{
                                        left: `${(index * 28)}%`,
                                        bottom: `${(index * 23)}%`,
                                        transform: 'translateX(-50%)'
                                    }}
                                >
                                    {/* Card */}
                                    <div className="relative shadow-xl bg-gradient-to-b from-purple-500/5 to-transparent rounded-2xl p-4 transition-all duration-500 hover:shadow-2xl hover:scale-105 backdrop-blur-xl">
                                        <div className="text-center">
                                            {/* Icono */}
                                            <div className="text-4xl mb-3">
                                                {step.icon}
                                            </div>
                                            
                                            {/* Contenido */}
                                                <h3 className="text-lg font-bold text-white mb-2 font-poppins">
                                                    {step.title}
                                                </h3>
                                                <p className="text-gray-300 text-sm leading-relaxed font-poppins">
                                                    {step.description}
                                                </p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Mobile: Cards apiladas verticalmente */}
                <div className="lg:hidden space-y-8 relative">
                    {/* Gradiente de fondo similar al gráfico */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-indigo-500/3 to-blue-500/5 rounded-2xl pointer-events-none"></div>
                    
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative group z-10"
                        >
                            {/* Card */}
                            <div className="relative shadow-xl bg-gradient-to-b from-purple-500/5 to-transparent rounded-2xl p-4 transition-all duration-500 hover:shadow-2xl hover:scale-105 backdrop-blur-xl">
                                <div className="text-center">
                                    {/* Icono */}
                                    <div className="text-4xl mb-3">
                                        {step.icon}
                                    </div>
                                    
                                    {/* Contenido */}
                                                <h3 className="text-lg font-bold text-white mb-2 font-poppins">
                                                    {step.title}
                                                </h3>
                                                <p className="text-gray-300 text-sm leading-relaxed font-poppins">
                                                    {step.description}
                                                </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
