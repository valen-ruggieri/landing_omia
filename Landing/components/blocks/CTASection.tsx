'use client';

import { motion } from 'framer-motion';
import { Zap, ArrowRight, CheckCircle } from 'lucide-react';

export default function () {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
        >
            <div className="bg-gradient-to-r from-emerald-500/10 via-violet-500/10 to-indigo-500/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                {/* Patrón de fondo sutil */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-400 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-violet-400 rounded-full blur-3xl" />
                </div>

                <div className="relative z-10">
                    <motion.div
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-violet-400 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    >
                        <Zap className="w-8 h-8 text-white" />
                    </motion.div>

                    <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        ¿Listo para{' '}
                        <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent">
                            automatizar?
                        </span>
                    </h4>

                    <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                        Descubrí cómo OMIA puede transformar tu negocio con una consultoría personalizada y sin compromiso.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.a
                            href="https://wa.me/5491112345678"
                            target="_blank"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group bg-gradient-to-r from-emerald-500 to-violet-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 relative overflow-hidden"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: '100%' }}
                                transition={{ duration: 0.6 }}
                            />
                            <span className="relative z-10 flex items-center space-x-2">
                                <span>Agendar Consultoría Gratis</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </motion.a>

                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-emerald-400" />
                            <span>Sin compromiso • 30-45 min</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
