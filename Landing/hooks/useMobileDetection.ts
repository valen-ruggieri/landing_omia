import { useState, useEffect } from 'react';

export const useMobileDetection = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            const mobile = width < 768;
            const tablet = width >= 768 && width < 1024;
            const desktop = width >= 1024;
            
            setIsMobile(mobile);
            setIsTablet(tablet);
            setIsDesktop(desktop);
            
            if (mobile) {
                setScreenSize('mobile');
            } else if (tablet) {
                setScreenSize('tablet');
            } else {
                setScreenSize('desktop');
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    return { 
        isMobile, 
        isTablet, 
        isDesktop, 
        screenSize,
        isMobileOrTablet: isMobile || isTablet
    };
}; 