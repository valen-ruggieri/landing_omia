'use client';

import Link from "next/link";

export const ButtonCtaPrimary: React.FC<{ 
  href: string; 
  children: React.ReactNode; 
  icon?: React.ReactNode; 
  size?: 'sm' | 'md' | 'lg'; 
  fullWidth?: boolean;
  className?: string;
  variant?: 'blue' | 'green' | 'purple'; // Solo tres variantes
}> = ({ 
  href, 
  children, 
  icon, 
  size = 'md', 
  fullWidth, 
  className,
  variant = 'blue' // Por defecto azul
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-7 py-3 text-sm',
    lg: 'px-10 py-4 text-base'
  };
  
  // Configuraciones de color predefinidas
  const colorVariants = {
    blue: 'from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 focus:ring-blue-500',
    green: 'from-emerald-500 to-green-700 hover:from-emerald-600 hover:to-green-800 focus:ring-green-500',
    purple: 'from-purple-500 to-violet-700 hover:from-purple-600 hover:to-violet-800 focus:ring-violet-500'
  };
  
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} 
      font-semibold text-white bg-gradient-to-r ${colorVariants[variant]} 
      rounded-md shadow-sm hover:shadow-md transition-all duration-300 
      focus:outline-none focus:ring-2 focus:ring-offset-2
      dark:focus:ring-offset-slate-900 ${className || ''}`}
    >
      {children}
      {icon && icon}
    </Link>
  );
};