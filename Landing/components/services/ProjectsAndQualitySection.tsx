'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projectTypes, qualityFocus } from '@Landing/data/servicesPage';
import { ServicesSectionHeader } from './shared';

export function ProjectsAndQualitySection() {
  const projectCardAccents = [
    {
      border: 'border-emerald-300/12',
      surface: 'from-emerald-400/14 via-emerald-400/5 to-transparent',
      glow: 'bg-emerald-400/12',
      line: 'from-transparent via-emerald-300/50 to-transparent',
      meta: 'text-emerald-200/80',
    },
    {
      border: 'border-cyan-300/12',
      surface: 'from-cyan-400/14 via-sky-400/5 to-transparent',
      glow: 'bg-cyan-400/12',
      line: 'from-transparent via-cyan-300/50 to-transparent',
      meta: 'text-cyan-200/80',
    },
    {
      border: 'border-blue-300/12',
      surface: 'from-blue-400/14 via-indigo-400/5 to-transparent',
      glow: 'bg-blue-400/12',
      line: 'from-transparent via-blue-300/50 to-transparent',
      meta: 'text-blue-200/80',
    },
    {
      border: 'border-violet-300/12',
      surface: 'from-violet-400/14 via-violet-400/5 to-transparent',
      glow: 'bg-violet-400/12',
      line: 'from-transparent via-violet-300/50 to-transparent',
      meta: 'text-violet-200/80',
    },
    {
      border: 'border-fuchsia-300/12',
      surface: 'from-fuchsia-400/14 via-purple-400/5 to-transparent',
      glow: 'bg-fuchsia-400/12',
      line: 'from-transparent via-fuchsia-300/50 to-transparent',
      meta: 'text-fuchsia-200/80',
    },
  ];

  const projectCardLayouts = [
    'xl:col-span-4',
    'xl:col-span-4 xl:-mt-6',
    'xl:col-span-4',
    'xl:col-span-5',
    'xl:col-span-3 xl:mt-4',
    'xl:col-span-4',
    'xl:col-span-4',
    'xl:col-span-5 xl:-mt-4',
    'xl:col-span-3',
  ];

  return (
    <section className="relative px-4 py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(16,185,129,0.12),transparent_24%),radial-gradient(circle_at_82%_80%,rgba(45,212,191,0.09),transparent_26%),linear-gradient(180deg,rgba(8,20,19,0)_0%,rgba(8,28,24,0.14)_100%)]" />
      <div className="relative z-10 mx-auto max-w-7xl space-y-20">
        <div>
          <ServicesSectionHeader
            title="En que tipo de proyectos"
            highlighted="podemos ayudar"
            accentClassName="bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-500"
            subtitle="Omia se adapta tanto a negocios en etapa inicial como a empresas que necesitan ordenar y escalar su operacion."
          />

          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-12">
            {projectTypes.map((project, index) => {
              const accent = projectCardAccents[index % projectCardAccents.length];
              const layout = projectCardLayouts[index] ?? 'xl:col-span-4';

              return (
                <motion.div
                  key={project}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                  whileHover={{ y: -4 }}
                  className={`group relative overflow-hidden rounded-[1.75rem] border ${accent.border} ${layout} bg-white/[0.03] p-5 backdrop-blur-sm sm:p-6`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-b ${accent.surface}`} />
                  <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent.line}`} />
                  <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full ${accent.glow} blur-3xl transition-opacity duration-300 group-hover:opacity-100`} />

                  <div className="relative flex min-h-[168px] flex-col justify-between gap-7">
                    <div className="space-y-5">
                      <span className={`inline-flex rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.24em] ${accent.meta}`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className="max-w-[24ch] text-lg leading-[1.2] text-white sm:text-[1.35rem]">
                        {project}
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className={`text-[11px] uppercase tracking-[0.24em] ${accent.meta}`}>
                        Proyecto Omia
                      </span>
                      <ArrowRight className={`h-4 w-4 ${accent.meta}`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div>
          <ServicesSectionHeader
            title="Que cuidamos"
            highlighted="en cada proyecto"
            accentClassName="bg-gradient-to-r from-emerald-300 via-cyan-400 to-blue-500"
            subtitle="Cada solucion se construye con foco en calidad real, no solo en velocidad."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {qualityFocus.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: index * 0.03 }}
                  className="rounded-2xl bg-gradient-to-b from-emerald-400/8 via-cyan-500/5 to-transparent p-5"
                >
                  <Icon className="mb-4 h-8 w-8 text-emerald-300" />
                  <p className="text-sm leading-relaxed text-white">{item.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
