'use client';

import React from 'react';
import Image from 'next/image';
import { BookOpen, GraduationCap, MessageCircle, Users } from 'lucide-react';

const mentoringCards = [
  {
    title: 'Capacitacion clara',
    description: 'Explicamos el sistema segun roles y procesos para que el equipo lo use con seguridad.',
    icon: GraduationCap,
  },
  {
    title: 'Acompanamiento real',
    description: 'Acompanamos dudas y criterios de uso para acelerar la adopcion.',
    icon: Users,
  },
  {
    title: 'Documentacion viva',
    description: 'Dejamos una base clara para onboarding y continuidad del conocimiento.',
    icon: BookOpen,
  },
  {
    title: 'Equipo autonomo',
    description: 'Ajustamos el producto para que cada persona lo aproveche mejor en el dia a dia.',
    icon: MessageCircle,
  },
];

export function TrainingMentoringSection() {
  return (
    <section className="relative px-4 py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(96,165,250,0.10),transparent_24%),radial-gradient(circle_at_80%_22%,rgba(139,92,246,0.14),transparent_24%),linear-gradient(180deg,rgba(12,14,23,0)_0%,rgba(14,18,40,0.18)_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
          <div className="relative min-h-[43rem] w-full sm:aspect-[16/9] sm:min-h-0">
            <Image
              src="/heroscreen2.png"
              alt="Capacitacion y mentoria para tu equipo"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 1200px"
              className="object-cover object-[center_52%] scale-[1.16] sm:object-center sm:scale-100"
            />

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(139,92,246,0.22),transparent_28%),linear-gradient(180deg,rgba(7,11,22,0.96)_0%,rgba(7,11,22,0.78)_28%,rgba(7,11,22,0.30)_54%,rgba(7,11,22,0.88)_100%)]" />

            <div className="relative z-10 flex min-h-[43rem] flex-col px-5 pt-8 pb-5 text-center sm:absolute sm:inset-0 sm:min-h-0 sm:px-8 sm:pt-10 sm:pb-8 lg:px-10 lg:pb-10">
              <div>
                <h2 className="mx-auto max-w-[12ch] text-[2rem] tracking-tighter text-white termina-light sm:text-4xl md:text-5xl lg:max-w-[13ch] lg:text-6xl">
                  Adopcion real para tu{' '}
                  <span className="bg-gradient-to-r from-violet-200 via-fuchsia-200 to-violet-300 bg-clip-text text-transparent termina-medium">
                    equipo
                  </span>
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
                  No solo construimos el sistema: te ayudamos a que el equipo lo entienda, lo adopte rapido y lo convierta en una herramienta real de trabajo.
                </p>
              </div>

              <div className="mt-6 sm:mt-auto">
                <div className="mx-auto max-w-6xl">
                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {mentoringCards.map((card) => {
                      const Icon = card.icon;

                      return (
                        <article
                          key={card.title}
                          className="rounded-[0.95rem] border border-white/8 bg-black/18 px-3.5 py-3 backdrop-blur-[6px]"
                        >
                          <div className="text-left">
                            <div className="flex items-center gap-2.5">
                              <Icon className="h-[1rem] w-[1rem] shrink-0 text-violet-100" />
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
