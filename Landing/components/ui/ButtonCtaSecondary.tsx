export const ButtonCtaSecondary: React.FC<{ href: string; children: React.ReactNode; icon?: React.ReactNode; size?: 'sm' | 'md' | 'lg'; fullWidth?: boolean; className?: string; }> = ({ href, children, icon, size = 'md', fullWidth, className }) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-7 py-3 text-sm',
    lg: 'px-10 py-4 text-base'
  };
  return (
    <a // Usar <a> para enlaces de anclaje si es necesario, o Link para rutas internas
      href={href}
      className={`inline-flex items-center justify-center ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/80 border border-slate-300 dark:border-slate-600/80 hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 dark:focus:ring-offset-slate-950 ${className || ''}`}
    >
      {icon}
      {children}
    </a>
  );
};