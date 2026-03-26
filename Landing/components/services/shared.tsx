'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MonitorSmartphone, type LucideIcon } from 'lucide-react';

export function ServicesSectionHeader({
  title,
  highlighted,
  subtitle,
  accentClassName = 'bg-gradient-to-r from-violet-400 via-purple-500 to-violet-700',
}: {
  title: string;
  highlighted: string;
  subtitle: string;
  accentClassName?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.25 }}
      className="mb-8 mx-auto max-w-5xl text-center sm:mb-12"
    >
      <h2 className="mb-3 text-4xl tracking-tighter text-white termina-light sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
        {title}{' '}
        <span className={`termina-medium ${accentClassName} bg-clip-text text-transparent`}>
          {highlighted}
        </span>
      </h2>
      <p className="mx-auto max-w-3xl px-4 text-sm text-gray-400 sm:text-base md:text-lg">
        {subtitle}
      </p>
    </motion.div>
  );
}

export function ShowcaseContentPanel({
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  title,
  description,
  features,
  accentClassName,
}: {
  eyebrow: string;
  eyebrowIcon?: LucideIcon;
  title: string;
  description: string;
  features: string[];
  accentClassName: string;
}) {
  return (
    <div className="w-full max-w-[640px] space-y-7 lg:max-w-[640px] lg:flex-[0_0_44%]">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.24em] text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r ${accentClassName}`}>
          {EyebrowIcon ? <EyebrowIcon className="h-3 w-3 text-white" /> : <span className="h-1.5 w-1.5 rounded-full bg-white" />}
        </span>
        <span>{eyebrow}</span>
      </div>

      <div className="space-y-5">
        <div>
          <h3 className="max-w-[16ch] text-[2.25rem] leading-[0.94] tracking-[-0.05em] text-white sm:max-w-[15ch] sm:text-[3.1rem] lg:max-w-[14ch] lg:text-[3.45rem] xl:max-w-[15ch] xl:text-[3.75rem]">
            <span className={`bg-gradient-to-r ${accentClassName} bg-clip-text text-transparent termina-medium`}>
              {title}
            </span>
          </h3>
          <p className="mt-5 max-w-[52ch] text-[1.02rem] leading-[1.8] text-gray-300 sm:text-[1.06rem]">
            {description}
          </p>
        </div>

        <div className="space-y-3.5">
          {features.map((feature) => (
            <div key={feature} className="flex items-start gap-3.5">
              <div className="relative mt-[0.42rem] flex h-3.5 w-3.5 items-center justify-center">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${accentClassName} opacity-20`} />
                <div className={`relative h-2 w-2 rounded-full bg-gradient-to-r ${accentClassName}`} />
              </div>
              <p className="text-[0.98rem] leading-[1.65] text-gray-200">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ServiceVisualSplitSection({
  eyebrow,
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  accentClassName,
  imageClassName = '',
  eyebrowIcon,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  accentClassName: string;
  imageClassName?: string;
  eyebrowIcon?: LucideIcon;
  reverse?: boolean;
}) {
  return (
    <section className="relative px-4 py-20 lg:py-24">
      <div
        className={`mx-auto flex max-w-7xl flex-col gap-12 lg:min-h-[560px] lg:flex-row lg:items-center lg:justify-between xl:gap-20 ${
          reverse ? 'lg:flex-row-reverse' : ''
        }`}
      >
        <ShowcaseContentPanel
          eyebrow={eyebrow}
          eyebrowIcon={eyebrowIcon}
          title={title}
          description={description}
          features={features}
          accentClassName={accentClassName}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className={`relative flex w-full justify-center ${reverse ? 'lg:flex-[0_0_52%] lg:justify-start' : 'lg:flex-[0_0_52%] lg:justify-end'}`}
        >
          <div className="relative w-full max-w-[1400px] border-0 bg-transparent shadow-none">
            <div className="relative aspect-[16/10] border-0 bg-transparent shadow-none">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 64vw"
                className={`object-contain object-center ${imageClassName}`}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function MobileAppsShowcaseSection() {
  const mobileFeatures = [
    'Apps para clientes y equipos internos',
    'Experiencias mobile-first con foco operativo',
    'Integraciones, notificaciones y seguimiento en tiempo real',
  ];

  return (
    <section className="relative px-4 ">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] xl:gap-14">
          <ShowcaseContentPanel
            eyebrow="App movil"
            eyebrowIcon={MonitorSmartphone}
            title="Productos pensados para telefono"
            description="Construimos apps moviles para procesos reales: seguimiento, aprobaciones, operacion interna, experiencia de cliente y tareas que necesitan resolverse rapido desde el celular."
            features={mobileFeatures}
            accentClassName="from-cyan-300 via-sky-400 to-blue-600"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[760px] border-0 bg-transparent shadow-none">
              <div className="relative aspect-[5/6] border-0 bg-transparent shadow-none">
                <Image
                  src="/appmovil.png"
                  alt="Mockup de app movil"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
