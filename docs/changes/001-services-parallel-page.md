# Página paralela de servicios

## Fecha
2026-03-21

## Objetivo
Crear una página pública paralela en `/servicios` con el mismo lenguaje visual, tipografía, shell de navegación y ritmo general de la landing principal, pero usando contenido institucional y de servicios de Omia.

## Alcance
Se incluyó una nueva ruta pública, un entrypoint dedicado, una vista propia con el mismo estilo general de la home, y la extracción del contenido a una fuente de datos separada.

No se reemplazó la home existente ni se alteraron sus secciones funcionales.

## Cambios realizados
- Se creó la ruta `app/servicios/page.tsx`.
- Se agregó `Landing/OMIAServicesLandingPage.tsx` como entrypoint de la nueva página.
- Se implementó `Landing/components/layout/ServicesPageContent.tsx` reutilizando el shell visual de la landing actual.
- Se extrajo el contenido institucional y de servicios a `Landing/data/servicesPage.ts`.
- Se extendieron `Nav` y `Footer` para aceptar configuración de navegación custom sin romper el comportamiento actual de la home.
- Se expuso la nueva ruta `/servicios` desde la navegación principal y desde el footer de la home.

## Archivos afectados
- app/servicios/page.tsx
- Landing/OMIAServicesLandingPage.tsx
- Landing/components/index.ts
- Landing/components/layout/ServicesPageContent.tsx
- Landing/components/layout/Nav.tsx
- Landing/components/layout/Footer.tsx
- Landing/data/servicesPage.ts
- docs/changes/001-services-parallel-page.md

## Impacto técnico
- Se agregó una nueva interfaz pública sin modificar la home como entrypoint principal.
- `Nav` y `Footer` ahora admiten navegación configurable para reutilizar el mismo estilo en páginas paralelas.
- El contenido institucional quedó desacoplado del JSX.

## Seguridad
- No aplica

## Pruebas realizadas
- `npm run build`
- Verificación de tipos y generación de la ruta `/servicios`

## Commit asociado
`feat(services): add parallel services landing`

## Observaciones
- El cambio mantiene el mismo lenguaje visual general de la landing actual, pero con contenido específico para Omia como consultora de sistemas y producto digital.
- Si después se quiere exponer la ruta desde la home, se puede sumar un link visible a `/servicios` en navegación y footer.
