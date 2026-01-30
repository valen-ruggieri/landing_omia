'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface LogoLoopItem {
  src: string;
  alt: string;
  href: string;
  title: string;
  height: number;
}

export interface LogoLoopProps {
  logos: LogoLoopItem[];
  speed?: number;
  direction?: 'left' | 'right';
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  ariaLabel?: string;
}

export const LogoLoop: React.FC<LogoLoopProps> = ({
  logos,
  speed = 60,
  direction = 'left',
  logoHeight = 48,
  gap = 64,
  pauseOnHover = true,
  scaleOnHover = true,
  ariaLabel = 'Logos',
}) => {
  const duplicated = [...logos, ...logos];

  return (
    <div
      className="overflow-hidden"
      aria-label={ariaLabel}
    >
      <motion.div
        className="flex items-center"
        style={{ gap }}
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed / 10,
            ease: 'linear',
          },
        }}
        onHoverStart={() => pauseOnHover && document.body.classList.add('pause-animation')}
        onHoverEnd={() => pauseOnHover && document.body.classList.remove('pause-animation')}
      >
        {duplicated.map((logo, i) => (
          <a
            key={`${logo.alt}-${i}`}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            title={logo.title}
            className={`inline-flex shrink-0 transition-transform ${scaleOnHover ? 'hover:scale-110' : ''}`}
            style={{ height: logoHeight }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-full w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
              style={{ height: logoHeight }}
            />
          </a>
        ))}
      </motion.div>
    </div>
  );
};
