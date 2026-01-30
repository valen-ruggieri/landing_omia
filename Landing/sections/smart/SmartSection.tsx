'use client';

import { ReusableSmartSection } from '@Landing/components';
import type { SmartFunction } from '@Landing/types/SmartFunction';

export default function SmartSection() {
    const smartFunctions: SmartFunction[] = [
        {
            image: "/images/tag.png",
            title: "Tags",
            description: "Organiza y segmenta tus clientes con IA",
            color: "from-violet-500 to-purple-600",
            bgColor: "bg-violet-500/10",
            borderColor: "border-violet-500/30",
            details: [
                "Crea reglas dinámicas adaptadas a tu negocio",
                "Clasifica automáticamente a cada contacto",
                "Segmenta para enviar mensajes más efectivos",
                "Dispara notificaciones, seguimientos o recordatorios"
            ]
        },
        {
            image: "/images/bolt.png",
            title: "Buttons",
            description: "Ejecuta automatizaciones con un solo click",
            color: "from-indigo-500 to-indigo-600",
            bgColor: "bg-indigo-500/10",
            borderColor: "border-indigo-500/30",
            details: [
                "Configura flujos de automatización previamente",
                "Activa procesos en segundos desde un botón único",
                "Dispara acciones múltiples de forma simultánea",
                "Monitorea y mide resultados de cada ejecución"
            ]
        }
    ];

    return (
        <ReusableSmartSection
            title="Smart"
            subtitle="Procesos que antes llevaban horas ahora son segundos"
            functions={smartFunctions}
        />
    );
}

