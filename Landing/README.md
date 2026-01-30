# Landing OMIA — Estructura del proyecto

Estructura de carpetas pensada para edición sencilla y mantenimiento profesional.

## Estructura de carpetas

```
Landing/
├── components/           # Componentes reutilizables
│   ├── layout/           # Layout global (Header, Footer, página)
│   │   ├── Nav.tsx       # Navegación principal
│   │   ├── Footer.tsx    # Pie de página
│   │   └── LandingPageContent.tsx
│   ├── ui/               # Componentes de interfaz (botones, cards, gráficos)
│   │   ├── ButtonCtaPrimary.tsx
│   │   ├── ButtonCtaSecondary.tsx
│   │   ├── MetricCard.tsx
│   │   ├── ProblemCard.tsx
│   │   ├── SmartFunctionCard.tsx
│   │   ├── LogoLoop.tsx
│   │   └── OmiaSaasCharts.tsx
│   ├── blocks/           # Bloques reutilizables (CTA, FAQ, Why)
│   │   ├── CTASection.tsx
│   │   ├── FAQSection.tsx
│   │   └── WhySection.tsx
│   └── common/           # Componentes compartidos
│       ├── ChatBubble.tsx
│       ├── ComparisonItem.tsx
│       ├── MobileNavLink.tsx
│       ├── NavLink.tsx
│       ├── ReusableSmartSection.tsx
│       └── SmartSectionHeader.tsx
├── sections/             # Secciones de la landing (una carpeta por sección)
│   ├── hero/             # HeroSection
│   ├── problems/         # ProblemsSection
│   ├── solutions/        # Solutions
│   ├── agents/           # AgentsFunctions
│   ├── multi-agent/      # MultiAgentSection
│   ├── integrations/     # IntegrationsSection
│   ├── smart/            # SmartSection
│   ├── consulting/       # ConsultingSection
│   ├── metrics/          # MetricsSection
│   ├── testimonials/     # TestimonialsSection
│   ├── process/          # ProcessSection
│   └── faq/              # FAQSectionNew
├── data/                 # Datos y textos
│   ├── testimonials.ts
│   └── texts.tsx
├── assets/               # Assets de marca (SVGs)
│   ├── Omia.icono.svg
│   ├── Omia.letras.svg
│   └── Omia.letras.light.svg
├── hooks/                # Hooks personalizados
│   ├── index.ts
│   └── useMobileDetection.ts
├── types/                # Tipos TypeScript
│   └── SmartFunction.ts
├── index.ts              # Barrel (no existe; el entry es OMIAProfessionalLandingPage)
└── OMIAProfessionalLandingPage.tsx
```

## Convenciones de nombres

| Carpeta / tipo | Uso | Ejemplo |
|----------------|-----|---------|
| **layout** | Navegación, footer, estructura de página | Nav, Footer, LandingPageContent |
| **ui** | Botones, cards, gráficos, elementos de UI | ButtonCtaPrimary, MetricCard |
| **blocks** | Bloques de contenido reutilizables | CTASection, FAQSection |
| **common** | Componentes compartidos entre secciones | ReusableSmartSection, NavLink |
| **sections/** | Una carpeta por sección de la landing | hero, solutions, multi-agent |
| **data** | Datos y textos | testimonials, texts |
| **assets** | SVGs e iconos de marca | Omia.icono.svg |
| **hooks** | Hooks de React | useMobileDetection |
| **types** | Tipos e interfaces | SmartFunction |

## Importaciones (alias)

Usa los alias `@Landing/*` para no depender de rutas relativas:

```ts
import { Nav, Footer, OmiaSaasCharts } from '@Landing/components';
import { HeroSection, Solutions, MultiAgentSection } from '@Landing/sections';
import { useMobileDetection } from '@Landing/hooks';
import type { SmartFunction } from '@Landing/types/SmartFunction';
```

## Dónde editar qué

- **Texto / datos**: `Landing/data/`
- **Una sección concreta**: `Landing/sections/<nombre-seccion>/`
- **Nav / Footer**: `Landing/components/layout/Nav.tsx`, `Footer.tsx`
- **Botones y cards**: `Landing/components/ui/`
- **Bloques (FAQ, CTA, Why)**: `Landing/components/blocks/`
- **Lógica de “es móvil”**: `Landing/hooks/useMobileDetection.ts`
