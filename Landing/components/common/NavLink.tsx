export const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors relative group py-2">
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 dark:bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
  </a>
);