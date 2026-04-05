'use client';

import React from 'react';
import { ServicesSectionHeader, MobileAppsShowcaseSection, ServiceVisualSplitSection } from './shared';

function WebShowcaseSection() {
  return (
    <ServiceVisualSplitSection
      eyebrow="Webs"
      title="Sitios web profesionales"
      description="Desarrollamos sitios institucionales, landings, portales y plataformas web con foco en conversion, claridad de contenido y escalabilidad tecnica."
      features={[
        'Webs institucionales y comerciales',
        'Landings y experiencias orientadas a captacion',
        'Plataformas web para clientes, equipos y operacion',
      ]}
      imageSrc="/macbookpro.png"
      imageAlt="Visual de plataforma web"
      accentClassName="from-purple-300 via-violet-500 to-purple-700"
      imageClassName="scale-[1.08]"
      reverse
    />
  );
}

function SystemsShowcaseSection() {
  return (
    <ServiceVisualSplitSection
      eyebrow="Sistemas"
      title="CRMs, Saas y Software personalizado"
      description="Armamos sistemas internos, CRMs y entornos de gestion con automatizaciones, trazabilidad y logica operativa para equipos que necesitan orden real."
      features={[
        'CRMs y paneles administrativos',
        'Sistemas multiusuario y multiagente',
        'Flujos de trabajo, estados, permisos e integraciones',
      ]}
      imageSrc="/macpc2.png"
      imageAlt="Visual de sistema CRM y gestion"
      accentClassName="from-emerald-300 via-teal-400 to-cyan-500"
      imageClassName="scale-[1.62] shadow-none drop-shadow-none"
    />
  );
}

function EcommerceShowcaseSection() {
  return (
    <ServiceVisualSplitSection
      eyebrow="Ecommerce"
      title="Tiendas web completas"
      description="Disenamos ecommerce, catalogos y funnels con foco en experiencia de compra, rendimiento y una operacion mas conectada con el negocio."
      features={[
        'Ecommerce y catalogos digitales',
        'Experiencias de compra mas claras y rapidas',
        'Integracion con pagos, stock, CRM y automatizaciones',
      ]}
      imageSrc="/web3.png"
      imageAlt="Visual de ecommerce"
      accentClassName="from-blue-300 via-indigo-500 to-violet-500"
      imageClassName="scale-[1.28]"
      reverse
    />
  );
}

export function ServicesMainSection() {
  return (
    <section className="relative overflow-hidden py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(34,211,238,0.08),transparent_24%),radial-gradient(circle_at_82%_78%,rgba(96,165,250,0.08),transparent_24%),linear-gradient(180deg,rgba(7,17,26,0)_0%,rgba(8,22,31,0.12)_100%)]" />
      <div className="mx-auto max-w-7xl px-4">
        <ServicesSectionHeader
          title="Servicios"
          highlighted="principales"
          accentClassName="bg-gradient-to-r from-blue-500 via-blue-500 to-cyan-500"
          subtitle="Desarrollamos soluciones a medida combinando software, automatización e inteligencia artificial para ordenar procesos, escalar operaciones y mejorar resultados reales."
        />
      </div>

      <div className="space-y-0">
        <MobileAppsShowcaseSection />
        <WebShowcaseSection />
        <SystemsShowcaseSection />
        <EcommerceShowcaseSection />
      </div>
    </section>
  );
}
