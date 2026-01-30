'use client';

import { SmartFunctionCard, SmartSectionHeader } from '@Landing/components';
import type { SmartSectionProps } from '@Landing/types/SmartFunction';

export default function ReusableSmartSection({
  title = "Smart",
  subtitle = "Procesos que antes llevaban horas ahora son segundos",
  functions,
  className = ""
}: SmartSectionProps) {
  return (
    <div className={`max-w-7xl mx-auto relative z-10 ${className}`}>
      {/* Header */}
      <SmartSectionHeader
        title={title}
        highlightedText="Functions"
        subtitle={subtitle}
      />

      {/* Smart Functions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 mb-8 sm:mb-12 lg:mb-16 px-4">
        {functions.map((smartFunction, index) => (
          <SmartFunctionCard
            key={index}
            image={smartFunction.image}
            title={smartFunction.title}
            description={smartFunction.description}
            details={smartFunction.details}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
