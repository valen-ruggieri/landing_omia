# Carrusel vertical compacto en tipos de proyectos

## Fecha
2026-04-04

## Objetivo
Transformar la sección de tipos de proyectos en un formato más compacto y minimalista, con una sola card visible por vez, ícono a la izquierda y animación vertical.

## Alcance
Se incluyó un cambio de comportamiento y presentación en la sección de proyectos dentro de `/servicios`.
No se modificaron los textos de los proyectos ni otras secciones.

## Cambios realizados
- se reemplazó la grilla de cards por un carrusel vertical automático
- se dejó una sola card visible por vez, apareciendo de abajo hacia arriba
- se ubicó el ícono contextual a la izquierda del texto en una sola línea visual
- se agregó un glow del color de énfasis según el tipo de proyecto activo
- se añadieron indicadores inferiores para mostrar la rotación del carrusel

## Archivos afectados
- Landing/components/services/ProjectsSection.tsx

## Impacto técnico
- la sección pasó de una presentación estática a una animada con rotación automática
- se agregó estado local e intervalo controlado para cambiar el proyecto activo
- no se introdujeron dependencias nuevas ni cambios de arquitectura externos al componente

## Seguridad
- No aplica

## Pruebas realizadas
- `npm run build`
- compilación exitosa de la app con `/servicios`

## Commit asociado
`feat(services): convert project types to vertical carousel`

## Observaciones
- la advertencia de Next.js por múltiples `package-lock.json` sigue siendo externa a este cambio
- si se quisiera pausar el carrusel en hover o hacerlo manual, puede extenderse sin reestructurar la sección
