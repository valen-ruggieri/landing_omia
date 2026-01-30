'use client';

import { useRef, useEffect } from 'react';
import { useMobileDetection } from '@Landing/hooks';
import { FAQSection } from '@Landing/components';

export default function FAQSectionNew() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { isMobile } = useMobileDetection();

    useEffect(() => {
        // Solo agregar el efecto de mouse si no es móvil
        if (!isMobile) {
            const handleMouseMove = (e: MouseEvent) => {
                const section = sectionRef.current;
                if (!section) return;
                const rect = section.getBoundingClientRect();
                section.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
                section.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
            };
            window.addEventListener('mousemove', handleMouseMove);
            return () => window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [isMobile]);

    return (
        <section
            ref={sectionRef}
            className="relative text-white py-20 lg:py-24 px-4 overflow-hidden"
        >
            {/* Efecto de cursor sutil */}
            <div 
                className="absolute inset-0 opacity-10"
                style={{ 
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(139, 92, 246, 0.08), transparent 40%)` 
                }} 
            />
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* FAQ Section */}
                <FAQSection />
            </div>
        </section>
    );
}
