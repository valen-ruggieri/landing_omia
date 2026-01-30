'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ReactNode;
  description?: string;
  gradient?: string;
  index?: number;
}

export const MobileNavLink: React.FC<MobileNavLinkProps> = ({ 
  href, 
  children, 
  onClick, 
  icon,
  description,
  gradient = "from-emerald-500/10 to-blue-500/10",
  index = 0
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Si es un enlace de sección (empieza con #), hacer scroll
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    
    // Ejecutar onClick si existe
    if (onClick) {
      onClick();
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`group relative w-full text-left p-4 rounded-2xl transition-all duration-300 overflow-hidden border border-transparent hover:border-emerald-500/20 hover:bg-gradient-to-r hover:${gradient} backdrop-blur-sm`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      whileHover={{ x: 5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Efectos de glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
      
      <div className="relative z-10 flex items-center space-x-3">
        {/* Icono si se proporciona */}
        {icon && (
          <div className="flex-shrink-0 p-2.5 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-xl backdrop-blur-sm border border-emerald-500/20 shadow-lg group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-emerald-500/30 group-hover:to-blue-500/30 transition-all duration-300">
            {icon}
          </div>
        )}
        
        <div className="flex-1">
          {/* Título principal */}
          <div className="flex items-center justify-between">
            <span className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
              {children}
            </span>
            <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-emerald-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
          </div>
          
          {/* Descripción si se proporciona */}
          {description && (
            <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300 mt-1 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
      
      {/* Línea de hover animada */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-400 group-hover:w-full transition-all duration-500"></div>
    </motion.button>
  );
};

// Versión simple para compatibilidad hacia atrás
export const SimpleMobileNavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    
    if (onClick) {
      onClick();
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className="group relative w-full text-left py-3 px-4 rounded-xl hover:bg-gradient-to-r hover:from-slate-800/50 hover:to-slate-700/50 transition-all duration-300 text-slate-200 hover:text-white font-medium border border-transparent hover:border-slate-600/30 backdrop-blur-sm"
      whileHover={{ x: 5, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="flex items-center justify-between">
        <span>{children}</span>
        <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-emerald-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
      </div>
      
      {/* Línea de hover animada */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-blue-400 group-hover:w-full transition-all duration-500"></div>
    </motion.button>
  );
};