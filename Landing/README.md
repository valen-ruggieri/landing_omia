# Landing Page - Estructura Organizada

## 📁 Estructura de Carpetas

```
Landing/
├── sections/           # Secciones de la landing page
│   ├── hero/         # Sección principal/hero
│   ├── problems/      # Sección de problemas
│   ├── solutions/     # Sección de soluciones
│   ├── metrics/       # Sección de métricas
│   ├── testimonials/ # Sección de testimonios
│   ├── integrations/ # Sección de integraciones
│   ├── agents/        # Sección de agentes IA
│   ├── smart/         # Sección de funciones inteligentes
│   ├── consulting/    # Sección de consultoría
│   ├── process/       # Sección de proceso
│   └── faq/           # Sección de preguntas frecuentes
├── components/        # Componentes reutilizables
│   ├── layout/        # Componentes de layout (Nav, Footer, etc.)
│   ├── ui/           # Componentes de interfaz (Botones, Cards, etc.)
│   └── shared/       # Componentes compartidos
├── data/             # Datos y textos
├── hooks/            # Hooks personalizados
├── types/            # Tipos TypeScript
└── utils/            # Utilidades
```

## 🎯 Organización por Lógica

- **Secciones**: Cada sección de la landing tiene su propia carpeta
- **Componentes**: Organizados por tipo (layout, UI, shared)
- **Datos**: Textos y datos separados de la lógica
- **Utilidades**: Funciones auxiliares y helpers

## 📦 Importaciones Simplificadas

```typescript
// Importar secciones
import { HeroSection, Solutions, MetricsSection } from '../sections';

// Importar componentes
import { Nav, Footer, ButtonCtaPrimary } from '../components';
```
