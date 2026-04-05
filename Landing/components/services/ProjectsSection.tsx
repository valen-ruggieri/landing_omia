'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
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

const CAROUSEL_INTERVAL_MS = 2800;
const PROJECTS_PER_GROUP = 3;

export function ProjectsSection() {
  const projectGroups = Array.from({ length: Math.ceil(projectTypes.length / PROJECTS_PER_GROUP) }, (_, groupIndex) =>
    projectTypes.slice(groupIndex * PROJECTS_PER_GROUP, groupIndex * PROJECTS_PER_GROUP + PROJECTS_PER_GROUP)
  );

  const [activeGroupIndex, setActiveGroupIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveGroupIndex((current) => (current + 1) % projectGroups.length);
    }, CAROUSEL_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [projectGroups.length]);

  const projectPalette = {
    border: 'border-violet-900/10',
    surface: 'from-fuchsia-400/12 via-violet-400/5 to-violet-400/0',
    icon: 'text-violet-100',
    indicator: 'bg-violet-300',
  };

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

  const activeProjects = projectGroups[activeGroupIndex];

  return (
    <section className="relative px-4 py-18 text-white lg:py-22">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(126,92,255,0.14),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(56,189,248,0.12),transparent_28%),radial-gradient(circle_at_24%_84%,rgba(168,85,247,0.10),transparent_24%),linear-gradient(180deg,rgba(10,12,22,0)_0%,rgba(14,12,28,0.18)_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-violet-300/10 bg-[#080914] shadow-[0_30px_90px_rgba(14,10,40,0.42)] min-h-[35rem] sm:min-h-[38rem] lg:min-h-0 lg:aspect-[1365/768]">
          <Image
            src="/bgtypeproyects.png"
            alt=""
            fill
            className="scale-[1.08] object-cover object-center saturate-[1.28] contrast-[1.1] brightness-[1.03] sm:scale-[1.06] lg:scale-[1.04]"
            sizes="(min-width: 1280px) 1280px, 100vw"
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,16,0.02)_0%,rgba(7,10,16,0.08)_26%,rgba(7,10,16,0.02)_52%,rgba(7,10,16,0.12)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_14%,rgba(114,102,255,0.34),transparent_33%),radial-gradient(circle_at_18%_82%,rgba(181,82,255,0.22),transparent_30%),radial-gradient(circle_at_56%_92%,rgba(145,71,255,0.18),transparent_24%)] mix-blend-screen" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_20%,rgba(37,211,197,0.08),transparent_26%)] mix-blend-screen" />
          <div className="absolute inset-x-0 top-0 h-[28%] bg-[linear-gradient(180deg,rgba(6,10,17,0.04)_0%,rgba(6,10,17,0)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[22%] bg-[linear-gradient(180deg,rgba(6,10,17,0)_0%,rgba(6,10,17,0.12)_100%)]" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-0 top-[5.5%] z-10 sm:top-[5%] lg:top-[4.5%]"
          >
            <div className="mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-12">
              <h2 className="mx-auto max-w-[62ch] text-[clamp(1.95rem,5.3vw,4.25rem)] leading-[0.92] tracking-[-0.055em] text-slate-100 termina-light lg:max-w-[38ch] ">
                <span className="block drop-shadow-[0_0_22px_rgba(157,139,255,0.12)]">Impulsamos tus</span>
                <span className="block termina-medium bg-gradient-to-r from-fuchsia-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
                  proyectos
                </span>
              </h2>
              <p className="mx-auto mt-3 max-w-[36rem] px-3 text-[0.82rem] leading-[1.55] text-slate-200/90 sm:mt-4 sm:text-[0.94rem] lg:max-w-[40rem] lg:text-[1rem]">
              Creamos, mejoramos y escalamos sistemas digitales que hacen que tu negocio funcione mejor todos los días.
              </p>
            </div>
          </motion.div>

          <div className="absolute inset-x-0 top-[66%] z-10 -translate-y-1/2 px-4 sm:top-[66%] sm:px-8 lg:top-[67%] lg:px-12">
            <div className="mx-auto w-[93%] max-w-[39rem] sm:w-[74%] sm:max-w-[43rem] lg:w-[58%] lg:max-w-[43rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`group-${activeGroupIndex}`}
                  initial={{ opacity: 0, y: 28, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -28, filter: 'blur(6px)' }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-3 sm:space-y-5"
                >
                  {activeProjects.map((project, index) => {
                    const ProjectIcon = getProjectIcon(project);

                    return (
                      <motion.article
                        key={project}
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.24, delay: index * 0.06 }}
                        className={`relative overflow-hidden rounded-[1rem] border ${projectPalette.border} bg-[linear-gradient(180deg,rgba(10, 18, 24, 0.07)_0%,rgba(8,12,18,0.24)_100%)] px-4 py-3.5 backdrop-blur-[12px] sm:rounded-[1.15rem] sm:px-6 sm:py-5`}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${projectPalette.surface}`} />
                        <div className="absolute inset-y-0 left-0 w-px bg-white/6" />

                        <div className="relative flex items-center gap-4 sm:gap-4.5">
                          <ProjectIcon className={`h-[0.95rem] w-[0.95rem] shrink-0 ${projectPalette.icon} sm:h-[1.16rem] sm:w-[1.16rem]`} />
                          <p className="text-left text-[0.86rem] leading-[1.12] text-white sm:text-[1.04rem] lg:text-[1.12rem]">
                            {project}
                          </p>
                        </div>
                      </motion.article>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
