export const ComparisonItem: React.FC<{ oldWay: string; newWay: string; icon: React.ReactNode }> = ({ oldWay, newWay, icon }) => (
  <div className="bg-white dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
    <div className="flex items-start space-x-3">
      <div className="text-slate-400 dark:text-slate-500 mt-1">{icon}</div>
      <div className="flex-1">
        <div className="text-sm text-slate-500 dark:text-slate-400 mb-1 line-through">{oldWay}</div>
        <div className="text-slate-800 dark:text-slate-200 font-medium">{newWay}</div>
      </div>
    </div>
  </div>
);