import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  ClipboardList,
  Compass,
  Gauge,
  LayoutPanelTop,
  LineChart,
  MonitorSmartphone,
  Network,
  Puzzle,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Target,
  Waypoints,
  Wrench,
} from 'lucide-react';

export type ServicesFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
  details?: string[];
  metrics?: { label: string; value: string }[];
};

export type ServicesCategory = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
};

export const servicesHero = {
  title: 'Construimos sistemas y producto digital con mas claridad',
  highlighted: 'mas claridad',
  description:
    'Omia es una consultora especializada en sistemas y productos digitales. Diseñamos y desarrollamos plataformas, apps, automatizaciones, ecommerce, CRMs y soluciones con IA, acompañando cada proyecto desde la estrategia hasta la implementación y mejora continua.',
  badges: [
    'Producto digital',
    'Automatización',
    'Integraciones',
    'Inteligencia aplicada',
  ],
  primaryCta: {
    label: 'Quiero agendar una consultoría',
    href: 'https://wa.me/5491112345678',
  },
};

export const endToEndFeatures: ServicesFeature[] = [
  {
    title: 'Discovery y estrategia del producto',
    description: 'Analizamos el contexto, objetivos, usuarios y prioridades para convertir la necesidad en una base de producto real.',
    icon: Search,
    details: [
      'Entendimiento del negocio y lógica operativa',
      'Priorización de alcance y roadmap',
      'Base clara para decidir mejor',
    ],
    metrics: [
      { label: 'Contexto', value: '100%' },
      { label: 'Prioridades', value: 'Claridad' },
      { label: 'Roadmap', value: 'Real' },
    ],
  },
  {
    title: 'UX/UI y definición funcional',
    description: 'Traducimos la necesidad en experiencia, estructura funcional, flujos y validaciones.',
    icon: LayoutPanelTop,
    details: [
      'Prototipos con foco en claridad',
      'Flujos y pantallas alineadas al negocio',
      'Validación antes de construir',
    ],
    metrics: [
      { label: 'Flujos', value: 'Orden' },
      { label: 'UX/UI', value: 'Foco' },
      { label: 'Alcance', value: 'Definido' },
    ],
  },
  {
    title: 'Desarrollo web y mobile',
    description: 'Construimos plataformas, apps y sistemas con una base sólida, mantenible y escalable.',
    icon: MonitorSmartphone,
    details: [
      'Web, mobile y software a medida',
      'Código mantenible y estructura clara',
      'Seguridad y performance desde el inicio',
    ],
    metrics: [
      { label: 'Web', value: 'Sí' },
      { label: 'Apps', value: 'Sí' },
      { label: 'Escala', value: 'Preparada' },
    ],
  },
  {
    title: 'Plataformas SaaS y sistemas internos',
    description: 'Creamos herramientas para ordenar la operación, centralizar procesos y mejorar la visibilidad.',
    icon: BriefcaseBusiness,
    details: [
      'SaaS',
      'Sistemas internos',
      'Portales de clientes y paneles administrativos',
    ],
    metrics: [
      { label: 'Procesos', value: 'Centralizados' },
      { label: 'Operación', value: 'Orden' },
      { label: 'Equipos', value: 'Mejor flujo' },
    ],
  },
  {
    title: 'Automatizaciones e integraciones',
    description: 'Integramos herramientas y automatizamos tareas repetitivas para que la operación no dependa de lo manual.',
    icon: Waypoints,
    details: [
      'Automatización de procesos',
      'Integraciones entre herramientas y APIs',
      'Flujos operativos automáticos',
    ],
    metrics: [
      { label: 'Manual', value: '-fricción' },
      { label: 'APIs', value: 'Integradas' },
      { label: 'Operación', value: '24/7' },
    ],
  },
  {
    title: 'Agentes de IA y funcionalidades inteligentes',
    description: 'Aplicamos IA con criterio de negocio para sumar capacidad útil a productos y procesos.',
    icon: Bot,
    details: [
      'Agentes de IA',
      'Asistentes virtuales',
      'Automatización con IA aplicada',
    ],
    metrics: [
      { label: 'IA', value: 'Aplicada' },
      { label: 'Asistencia', value: 'Real' },
      { label: 'Automación', value: '+inteligente' },
    ],
  },
  {
    title: 'Métricas, documentación, testing y mejora continua',
    description: 'Medimos, documentamos, probamos y mejoramos para que el producto siga creciendo sin desorden.',
    icon: LineChart,
    details: [
      'Dashboards, reporting y seguimiento',
      'Pruebas funcionales y validación',
      'Documentación clara para crecer bien',
    ],
    metrics: [
      { label: 'Métricas', value: 'Visibles' },
      { label: 'Testing', value: 'Real' },
      { label: 'Evolución', value: 'Continua' },
    ],
  },
];

export const serviceCategories: ServicesCategory[] = [
  {
    title: 'Producto digital y software',
    description: 'Soluciones para construir la base digital del negocio.',
    icon: Sparkles,
    items: ['Plataformas web', 'Apps móviles', 'SaaS', 'Sistemas internos', 'Portales de clientes', 'Paneles administrativos'],
  },
  {
    title: 'Automatización e integración',
    description: 'Conectamos herramientas y reducimos trabajo operativo manual.',
    icon: Network,
    items: ['Automatización de procesos', 'Integraciones entre herramientas', 'APIs', 'Flujos operativos automáticos'],
  },
  {
    title: 'Inteligencia artificial aplicada',
    description: 'IA con foco práctico sobre producto y operación.',
    icon: BrainCircuit,
    items: ['Agentes de IA', 'Asistentes virtuales', 'Funciones inteligentes', 'Automatización con IA'],
  },
  {
    title: 'Ecommerce y conversión',
    description: 'Experiencias digitales orientadas a vender mejor.',
    icon: ShoppingCart,
    items: ['Ecommerce', 'Catálogos digitales', 'Landings', 'Funnels', 'Experiencias de venta'],
  },
  {
    title: 'Datos y operación',
    description: 'Visibilidad y control para mejorar decisiones y seguimiento.',
    icon: Gauge,
    items: ['Dashboards', 'Paneles de métricas', 'Reporting', 'Seguimiento operativo'],
  },
];

export const workProcess = [
  {
    id: 1,
    title: 'Entendimiento del negocio',
    description: 'Analizamos contexto, objetivos, usuarios y lógica operativa.',
  },
  {
    id: 2,
    title: 'Definición funcional',
    description: 'Traducimos la necesidad en alcance, funcionalidades, prioridades y roadmap.',
  },
  {
    id: 3,
    title: 'UX/UI y prototipado',
    description: 'Diseñamos la experiencia y la interfaz con foco en claridad y validación.',
  },
  {
    id: 4,
    title: 'Arquitectura y desarrollo',
    description: 'Construimos sobre bases sólidas, priorizando seguridad y escalabilidad.',
  },
  {
    id: 5,
    title: 'Testing y validación',
    description: 'Probamos flujos, corregimos detalles y preparamos entregas funcionales.',
  },
  {
    id: 6,
    title: 'Evolución continua',
    description: 'Medimos, iteramos y mejoramos el producto a medida que crece.',
  },
];

export const differentialCards = [
  {
    title: 'Pensamos el proyecto desde el negocio',
    body: 'No resolvemos solo código. Entendemos prioridades reales, lógica operativa y valor para el día a día.',
  },
  {
    title: 'Combinamos estrategia, diseño, desarrollo, automatización e IA',
    body: 'Producto, UX/UI y tecnología trabajan como un mismo sistema.',
  },
  {
    title: 'Priorizamos MVPs funcionales con entregas reales y rápidas',
    body: 'La idea es avanzar con entregas que sirven, no con promesas vacías.',
  },
  {
    title: 'Construimos con visión de escalabilidad y mantenimiento',
    body: 'La solución no se piensa solo para hoy, sino para crecer mañana.',
  },
  {
    title: 'Trabajamos con foco en claridad, orden y trazabilidad',
    body: 'Cada etapa del proyecto queda visible y ordenada.',
  },
  {
    title: 'Dejamos documentación, validaciones y estructura para crecer bien',
    body: 'El cliente no queda atado a una caja negra.',
  },
];

export const transparencyPoints = [
  'Ver el avance del proyecto en tiempo real',
  'Revisar tareas, prioridades y estados',
  'Dejar comentarios y validaciones',
  'Acceder a pruebas funcionales',
  'Ver videos, documentación y entregables',
  'Seguir la evolución semana a semana',
  'Participar con más claridad en cada etapa',
];

export const projectTypes = [
  'Lanzar un MVP funcional',
  'Modernizar un sistema existente',
  'Crear una plataforma propia',
  'Centralizar procesos en un solo lugar',
  'Automatizar tareas manuales',
  'Integrar herramientas dispersas',
  'Sumar IA a un producto o proceso',
  'Dar más visibilidad al negocio con métricas y dashboards',
  'Mejorar la experiencia digital de clientes o equipos internos',
];

export const qualityFocus = [
  { label: 'Arquitectura sólida', icon: Wrench },
  { label: 'Base de datos bien pensada', icon: Puzzle },
  { label: 'Seguridad y certificados', icon: ShieldCheck },
  { label: 'Performance', icon: Activity },
  { label: 'Escalabilidad', icon: Rocket },
  { label: 'Buena experiencia de usuario', icon: LayoutPanelTop },
  { label: 'Documentación clara', icon: ClipboardList },
  { label: 'Pruebas funcionales', icon: CheckCircle2 },
  { label: 'Integración con herramientas externas', icon: Waypoints },
  { label: 'Mantenimiento y evolución futura', icon: LineChart },
];

export const involvementPillars = [
  'Sentido de negocio',
  'Claridad funcional',
  'Buena experiencia',
  'Solidez técnica',
  'Escalabilidad',
  'Valor real para el día a día',
];

export const valueCards = [
  { title: 'Desarrollo a medida', icon: Wrench },
  { title: 'Visión de producto', icon: Target },
  { title: 'Procesos claros', icon: ClipboardList },
  { title: 'Tecnología sólida', icon: BriefcaseBusiness },
  { title: 'IA aplicada con criterio', icon: Bot },
  { title: 'Entregas funcionales constantes', icon: Rocket },
  { title: 'Seguimiento real del proyecto', icon: Compass },
  { title: 'Métricas y reporting', icon: BarChart3 },
];

export const servicesMetadata = {
  title: 'Servicios | Omia',
  description:
    'Consultora especializada en sistemas, producto digital, automatización e inteligencia aplicada. Diseñamos, construimos, probamos, iteramos y escalamos.',
};
