'use client'; 

import { ApexOptions } from "apexcharts";
import { useEffect, useState } from "react";
import { MetricCard } from "./MetricCard";



export default function OmiaSaasCharts() {
    // Estados para animaciones de contadores
    const [conversationsCount, setConversationsCount] = useState(0);
    const [satisfactionCount, setSatisfactionCount] = useState(0);
    const [timeCount, setTimeCount] = useState(0);
    const [savingsCount, setSavingsCount] = useState(0);

    // Animaciones de contadores
    useEffect(() => {
        const timer1 = setTimeout(() => {
            let count = 0;
            const interval = setInterval(() => {
                count += 47;
                if (count >= 2847) {
                    setConversationsCount(2847);
                    clearInterval(interval);
                } else {
                    setConversationsCount(count);
                }
            }, 20);
        }, 500);

        const timer2 = setTimeout(() => {
            let count = 0;
            const interval = setInterval(() => {
                count += 0.7;
                if (count >= 95.7) {
                    setSatisfactionCount(95.7);
                    clearInterval(interval);
                } else {
                    setSatisfactionCount(count);
                }
            }, 30);
        }, 800);

        const timer3 = setTimeout(() => {
            let count = 0;
            const interval = setInterval(() => {
                count += 0.2;
                if (count >= 7.2) {
                    setTimeCount(7.2);
                    clearInterval(interval);
                } else {
                    setTimeCount(count);
                }
            }, 40);
        }, 1100);

        const timer4 = setTimeout(() => {
            let count = 0;
            const interval = setInterval(() => {
                count += 4524;
                if (count >= 452450) {
                    setSavingsCount(452450);
                    clearInterval(interval);
                } else {
                    setSavingsCount(count);
                }
            }, 10);
        }, 1400);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
        };
    }, []);

    // Gráfico de Conversaciones Automatizadas
    const growthSeries = [
        {
            name: "Conversaciones",
            data: [1200, 1500, 1800, 2100, 2400, 2600, 2847],
        },
    ];

    const growthOptions: ApexOptions = {
        chart: {
            type: "area",
            height: 60,
            sparkline: {
                enabled: true,
            },
            animations: {
                enabled: true,
                speed: 800,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ["#10b981"],
        stroke: {
            curve: "smooth",
            width: 2,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.6,
                opacityTo: 0.1,
                stops: [0, 100],
            },
        },
        tooltip: {
            fixed: {
                enabled: false,
            },
            x: {
                show: false,
            },
            y: {
                formatter: (value) => value.toLocaleString(),
            },
            marker: {
                show: false,
            },
        },
    };

    // Gráfico de Satisfacción del Cliente
    const responseSeries = [
        {
            name: "Satisfacción",
            data: [85, 88, 92, 95, 97, 98, 98.7],
        },
    ];

    const responseOptions: ApexOptions = {
        chart: {
            type: "area",
            height: 60,
            sparkline: {
                enabled: true,
            },
            animations: {
                enabled: true,
                speed: 800,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ["#3177f0"],
        stroke: {
            curve: "smooth",
            width: 2,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.6,
                opacityTo: 0.1,
                stops: [0, 100],
            },
        },
        tooltip: {
            fixed: {
                enabled: false,
            },
            x: {
                show: false,
            },
            y: {
                formatter: (value) => value.toFixed(1) + "%",
            },
            marker: {
                show: false,
            },
        },
    };

    // Gráfico de Tiempo Ahorrado
    const conversionSeries = [
        {
            name: "Tiempo Ahorrado",
            data: [2.5, 3.0, 3.2, 3.5, 3.8, 4.0, 4.2],
        },
    ];

    const conversionOptions: ApexOptions = {
        chart: {
            type: "area",
            height: 60,
            sparkline: {
                enabled: true,
            },
            animations: {
                enabled: true,
                speed: 800,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ["#8b5cf6"],
        stroke: {
            curve: "smooth",
            width: 2,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.6,
                opacityTo: 0.1,
                stops: [0, 100],
            },
        },
        tooltip: {
            fixed: {
                enabled: false,
            },
            x: {
                show: false,
            },
            y: {
                formatter: (value) => value.toFixed(1) + "h",
            },
            marker: {
                show: false,
            },
        },
    };

    // Gráfico de Ahorro de Costos
    const clientsSeries = [
        {
            name: "Ahorro",
            data: [8500, 9200, 9800, 10500, 11200, 11800, 12450],
        },
    ];

    const clientsOptions: ApexOptions = {
        chart: {
            type: "area",
            height: 60,
            sparkline: {
                enabled: true,
            },
            animations: {
                enabled: true,
                speed: 800,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ["#06b6d4"],
        stroke: {
            curve: "smooth",
            width: 2,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.6,
                opacityTo: 0.1,
                stops: [0, 100],
            },
        },
        tooltip: {
            fixed: {
                enabled: false,
            },
            x: {
                show: false,
            },
            y: {
                formatter: (value) => "€" + value.toLocaleString(),
            },
            marker: {
                show: false,
            },
        },
    };

    return (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-2">
            <MetricCard
                title="Conversaciones"
                subtitle="Interacciones manejadas por IA"
                value={conversationsCount.toLocaleString()}
                change="+647"
                changeLabel="vs mes anterior"
                clientsOptions={growthOptions}
                clientsSeries={growthSeries}
                char1=""
                char2=""
            />
            <MetricCard
                title="Satisfacción del Cliente"
                subtitle="Nivel de satisfacción"
                value={satisfactionCount.toFixed(1)}
                change={"60.4"}
                changeLabel="vs mes anterior"
                clientsOptions={responseOptions}
                clientsSeries={responseSeries}
                char1=""
                char2="%"
            />
            <MetricCard
                title="Tiempo Ahorrado"
                subtitle="Horas automatizadas"
                value={timeCount.toFixed(1)}
                change={"3.8"}
                changeLabel="vs mes anterior"
                clientsOptions={conversionOptions}
                clientsSeries={conversionSeries}
                char1=""
                char2="Hs"
            />
            <MetricCard
                title="Ahorro de Costos"
                subtitle="Reducción de costos operativos"
                value={savingsCount.toLocaleString()}
                change={"337.250"}
                changeLabel="vs mes anterior"
                clientsOptions={clientsOptions}
                clientsSeries={clientsSeries}
                char1="$"
                char2=""
            />

        </div>
    );
}
