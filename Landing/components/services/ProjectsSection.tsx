'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  LayoutPanelTop,
  LineChart,
  Network,
  Rocket,
  Waypoints,
  Wrench,
} from 'lucide-react';
import { projectTypes } from '@Landing/data/servicesPage';
import { ServicesSectionHeader } from './shared';

export function ProjectsSection() {
  const projectCardAccents = [
    {
      border: 'border-emerald-300/14',
      surface: 'from-emerald-400/16 via-emerald-400/6 to-transparent',
      glow: 'bg-emerald-400/12',
      line: 'from-transparent via-emerald-300/46 to-transparent',
      meta: 'text-emerald-100',
    },
    {
      border: 'border-cyan-300/14',
      surface: 'from-cyan-400/16 via-sky-400/6 to-transparent',
      glow: 'bg-cyan-400/12',
      line: 'from-transparent via-cyan-300/46 to-transparent',
      meta: 'text-cyan-100',
    },
    {
      border: 'border-blue-300/14',
      surface: 'from-blue-400/16 via-indigo-400/6 to-transparent',
      glow: 'bg-blue-400/12',
      line: 'from-transparent via-blue-300/46 to-transparent',
      meta: 'text-blue-100',
    },
    {
      border: 'border-violet-300/14',
      surface: 'from-violet-400/16 via-violet-400/6 to-transparent',
      glow: 'bg-violet-400/12',
      line: 'from-transparent via-violet-300/46 to-transparent',
      meta: 'text-violet-100',
    },
    {
      border: 'border-fuchsia-300/14',
      surface: 'from-fuchsia-400/16 via-purple-400/6 to-transparent',
      glow: 'bg-fuchsia-400/12',
      line: 'from-transparent via-fuchsia-300/46 to-transparent',
      meta: 'text-fuchsia-100',
    },
  ];

  const getProjectIcon = (project: string) => {
    if (project.includes('MVP')) return Rocket;
    if (project.includes('existente')) return Wrench;
    if (project.includes('plataforma')) return LayoutPanelTop;
    if (project.includes('Centralizar')) return BriefcaseBusiness;
    if (project.includes('Automatizar')) return Waypoints;
    if (project.includes('Integrar')) return Network;
    if (project.includes('IA')) return BrainCircuit;
    if (project.includes('métricas') || project.includes('dashboards')) return LineChart;
    if (project.includes('clientes') || project.includes('equipos')) return Bot;
    return LayoutPanelTop;
  };

  return (
    <section className="relative px-4 py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(16,185,129,0.12),transparent_24%),radial-gradient(circle_at_82%_80%,rgba(45,212,191,0.09),transparent_26%),linear-gradient(180deg,rgba(8,20,19,0)_0%,rgba(8,28,24,0.14)_100%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <ServicesSectionHeader
          title="En que tipo de proyectos"
          highlighted="podemos ayudar"
          accentClassName="bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-500"
          subtitle="Omia se adapta tanto a negocios en etapa inicial como a empresas que necesitan ordenar y escalar su operacion."
        />

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projectTypes.map((project, index) => {
            const accent = projectCardAccents[index % projectCardAccents.length];
            const ProjectIcon = getProjectIcon(project);

            return (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
                whileHover={{ y: -4 }}
                className={`group relative overflow-hidden rounded-[1.55rem] border ${accent.border} bg-[linear-gradient(180deg,rgba(10,20,24,0.72)_0%,rgba(8,14,18,0.96)_100%)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-sm transition-transform duration-300 sm:p-6`}
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${accent.surface}`} />
                <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${accent.line}`} />
                <div className={`absolute -right-10 -top-10 h-28 w-28 rounded-full ${accent.glow} blur-3xl transition-opacity duration-300 group-hover:opacity-100`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_26%)] opacity-70" />

                <div className="relative flex min-h-[178px] flex-col justify-between gap-8 sm:min-h-[190px]">
                  <div className="flex items-start justify-between gap-4">
                    <span className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/20 ${accent.meta}`}>
                      <ProjectIcon className="h-5 w-5" />
                    </span>
                    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/20 ${accent.meta}`}>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>

                  <div className="space-y-3">
                    <p className="max-w-[24ch] text-lg leading-[1.08] text-white sm:text-[1.42rem]">
                      {project}
                    </p>
                    <div className="h-px w-16 bg-white/10" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
