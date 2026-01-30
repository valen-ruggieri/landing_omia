'use client';

import { useRef, useEffect } from 'react';

interface BackgroundProps {
    color?: 'emerald' | 'blue' | 'violet';
}

export default function Background({ color = 'emerald' }: BackgroundProps) {
    const backgroundRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const background = backgroundRef.current;
            if (!background) return;
            const rect = background.getBoundingClientRect();
            background.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
            background.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const getColorValues = (color: string) => {
        switch (color) {
            case 'emerald':
                return {
                    radial: 'rgba(52, 211, 153, 0.15)',
                    grid: 'rgba(52, 211, 153, 0.3)'
                };
            case 'blue':
                return {
                    radial: 'rgba(59, 130, 246, 0.15)',
                    grid: 'rgba(59, 130, 246, 0.3)'
                };
            case 'violet':
                return {
                    radial: 'rgba(139, 92, 246, 0.15)',
                    grid: 'rgba(139, 92, 246, 0.3)'
                };
            default:
                return {
                    radial: 'rgba(52, 211, 153, 0.15)',
                    grid: 'rgba(52, 211, 153, 0.3)'
                };
        }
    };

    const colors = getColorValues(color);

    return (
        <div ref={backgroundRef} className="absolute inset-0">
            {/* Fondo dinámico mejorado */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-slate-900" />
            
            {/* Efectos de cursor interactivo */}
            <div 
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{ 
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${colors.radial}, transparent 40%)` 
                }} 
            />

            {/* Grid pattern futurista */}
            <div 
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(${colors.grid} 1px, transparent 1px),
                        linear-gradient(90deg, ${colors.grid} 1px, transparent 1px)
                    `,
                    backgroundSize: '100px 100px',
                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
                }}
            />
        </div>
    );
}