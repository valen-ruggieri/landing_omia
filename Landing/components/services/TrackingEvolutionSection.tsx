'use client';

import React from 'react';
import Image from 'next/image';
import { Activity, CalendarDays, LineChart, Wrench } from 'lucide-react';

const evolutionCards = [
  {
    title: 'Visibilidad total',
    description: 'Visibilidad constante sobre prioridades, avances y ajustes mientras el proyecto avanza.',
    icon: Activity,
  },
  {
    title: 'Avances semanales',
    description: 'Cada semana se traduce en progreso real, definiciones claras y proximos pasos visibles.',
    icon: CalendarDays,
  },
  {
    title: 'Mejora constante',
    description: 'Iteramos sobre lo construido para sumar nuevas oportunidades y mejoras.',
    icon: LineChart,
  },
  {
    title: 'Evolucion tecnica',
    description: 'Cuidamos estabilidad y crecimiento tecnico para que la base siga firme en el tiempo.',
    icon: Wrench,
  },
];

export function TrackingEvolutionSection() {
  return (
    <section className="relative px-4 py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(45,212,191,0.10),transparent_24%),radial-gradient(circle_at_80%_22%,rgba(59,130,246,0.12),transparent_24%),linear-gradient(180deg,rgba(10,16,22,0)_0%,rgba(8,30,36,0.18)_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
          <div className="relative min-h-[43rem] w-full sm:aspect-[16/9] sm:min-h-0">
            <Image
              src="/web2.png"
              alt="Seguimiento, entregas y evolucion del sistema"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover object-[center_52%] scale-[1.16] sm:object-center sm:scale-100"
            />

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(34,211,238,0.18),transparent_28%),linear-gradient(180deg,rgba(6,12,20,0.96)_0%,rgba(6,12,20,0.78)_28%,rgba(6,12,20,0.30)_54%,rgba(6,12,20,0.88)_100%)]" />

            <div className="relative z-10 flex min-h-[43rem] flex-col px-5 pt-8 pb-5 text-center sm:absolute sm:inset-0 sm:min-h-0 sm:px-8 sm:pt-10 sm:pb-8 lg:px-10 lg:pb-10">
              <div>
                <h2 className="mx-auto max-w-[12ch] text-[2rem] tracking-tighter text-white termina-light sm:text-4xl md:text-5xl lg:max-w-[13ch] lg:text-6xl">
                  Tu proyecto siempre{' '}
                  <span className="bg-gradient-to-r from-emerald-200 via-cyan-200 to-blue-300 bg-clip-text text-transparent termina-medium">
                    visible
                  </span>
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
                  Seguimos el proyecto de cerca, con avances visibles, entregas semanales y mejoras continuas para que el sistema evolucione con tu negocio.
                </p>
              </div>

              <div className="mt-6 sm:mt-auto">
                <div className="mx-auto max-w-6xl">
                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {evolutionCards.map((card) => {
                      const Icon = card.icon;

                      return (
                        <article
                          key={card.title}
                          className="rounded-[0.95rem] border border-white/8 bg-black/18 px-3.5 py-3 backdrop-blur-[6px]"
                        >
                          <div className="text-left">
                            <div className="flex items-center gap-2.5">
                              <Icon className="h-[1rem] w-[1rem] shrink-0 text-cyan-100" />
                              <h3 className="text-[0.92rem] leading-tight text-white sm:text-[0.96rem]">{card.title}</h3>
                            </div>
                            <p className="mt-2 text-[0.83rem] leading-[1.5] text-gray-300">{card.description}</p>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
