'use client';

import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { motion } from "framer-motion";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

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
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.2 }}
     >
         <div className="absolute inset-0 opacity-20">
             <Chart
                 options={clientsOptions}
                 series={clientsSeries}
                 type="area"
                 height="100%"
                 width="100%"
             />
         </div>

         <div className="relative z-10">
             <div className="mb-6 flex justify-between">
                 <div>
                     <h3 className="text-lg font-semibold text-white/90">
                       {title}
                     </h3>
                     <p className="text-theme-sm mt-1 text-gray-500 dark:text-gray-400">
                         {subtitle}
                     </p>
                 </div>
             </div>
             <div className="flex justify-between">
                 <div>
                     <h3 className="text-title-lg font-semibold text-white/90">
                        {char1}{value.toLocaleString()}{char2}
                     </h3>
                     <p className="text-theme-md mt-1 text-gray-500 dark:text-gray-400">
                         <span className="text-success-500 font-bold mr-1 inline-block">{char1}{change}{char2} </span>
                         {changeLabel}
                     </p>
                 </div>
             </div>
         </div>
     </motion.div>
    );
};
