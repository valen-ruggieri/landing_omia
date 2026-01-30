'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface ConsultingProps {
  videoSrc?: string;
}

const ConsultingSection: React.FC<ConsultingProps> = ({
  videoSrc = '/images/video-thumb/planning.mp4' 
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Optimización del video: solo reproducir con hover
  React.useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // NO reproducir automáticamente al inicio
      video.pause();

      // Reproducir solo con hover
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
             className="w-full h-184 sm:h-80 md:h-96 lg:h-[500px] xl:h-[800px] rounded-xl sm:rounded-2xl md:rounded-3xl object-cover "
             autoPlay
             muted
             loop
             playsInline
             preload="auto"
             style={{ 
               pointerEvents: 'none',
               filter: 'brightness(0.4) contrast(1.2) saturate(1.1)'
             }}
           >
             <source src={videoSrc} type="video/mp4" />
           </video>
           {/* Overlay oscuro adicional para mayor contraste */}
          
         </div>
       </div>
      
      {/* Contenido centrado sobre el video */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
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
               Consultoría {' '}
               <span className="termina-bold bg-gradient-to-r from-blue-500 via-cyan-600 to-cyan-400 bg-clip-text text-transparent">
                 personalizada
               </span>
             </h2>
          </motion.div>

          {/* Descripción */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="text-lg sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-200 mb-4 sm:mb-6 md:mb-8 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2 sm:px-4"
           >
             <p className="mb-2 sm:mb-4">
               Agenda una consultoría gratuita de 30 minutos con nuestros expertos donde analizamos tu negocio y te mostramos cómo Omia puede simplicar los procesos de tu empresa.
             </p>
           </motion.div>

          {/* Botón de CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
             <motion.a
               href="https://wa.me/5491112345678"
               target="_blank"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="bg-gradient-to-r from-blue-600/30 to-cyan-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-xl font-semibold text-base flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transition-all duration-300 "
             >
               <Calendar className="w-5 h-5" />
               <span>Agendar Consultoría</span>
             </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultingSection;

