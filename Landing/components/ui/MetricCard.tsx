'use client';  


import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { motion } from "framer-motion";

interface MetricCardProps {
    title: string;
    subtitle: string;
    value: string;
    change: string;
    changeLabel: string;
    clientsOptions: ApexOptions;
    clientsSeries: { name: string; data: number[] }[];
    char1: string;
    char2: string; 
}

export const MetricCard = ({
    clientsOptions,
    clientsSeries,
    title,
    subtitle,
    value,
    change,
    changeLabel,
    char1,
    char2,
}: MetricCardProps) => {
    return (
        
         <motion.div
         className="relative overflow-hidden rounded-2xl p-6 dark:border-gray-800 dark:bg-white/]"
         initial={{ opacity: 0, y: 50, scale: 0.9 }}
         animate={{ opacity: 1, y: 0, scale: 1 }}
         transition={{ duration: 0.8, delay: 0.8 }}
         whileHover={{ y: -5, scale: 1.02 }}
     >
         {/* Gráfico como fondo */}
         <motion.div
             className="absolute inset-0 opacity-20"
             initial={{ opacity: 0 }}
             animate={{ opacity: 0.5 }}
             transition={{ duration: 1.5, delay: 1.1 }}
         >
             <Chart
                 options={clientsOptions}
                 series={clientsSeries}
                 type="area"
                 height="100%"
                 width="100%"
             />
         </motion.div>

         {/* Contenido encima del gráfico */}
         <div className="relative z-10">
             <motion.div
                 className="mb-6 flex justify-between"
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6, delay: 1.4 }}
             >
                 <div>
                     <h3 className="text-lg font-semibold text-white/90">
                       {title}
                     </h3>
                     <p className="text-theme-sm mt-1 text-gray-500 dark:text-gray-400">
                         {subtitle}
                     </p>
                 </div>
             </motion.div>
             <motion.div
                 className="flex justify-between"
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6, delay: 1.6 }}
             >
                 <div>
                     <motion.h3
                         className="text-title-lg font-semibold text-white/90"
                         initial={{ scale: 0.5 }}
                         animate={{ scale: 1 }}
                         transition={{ duration: 0.5, delay: 1.8 }}
                     >
                        {char1}{value.toLocaleString()}{char2}
                     </motion.h3>
                     <motion.p
                         className="text-theme-md mt-1 text-gray-500 dark:text-gray-400"
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{ duration: 0.4, delay: 2.1 }}
                     >
                         <span className="text-success-500 font-bold mr-1 inline-block">{char1}{change}{char2} </span>
                         {changeLabel}
                     </motion.p>
                 </div>
             </motion.div>
         </div>
     </motion.div>
    );
};
