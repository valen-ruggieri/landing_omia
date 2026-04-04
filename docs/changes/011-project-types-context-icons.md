# Iconografía contextual en tipos de proyectos

## Fecha
2026-04-04

## Objetivo
Reemplazar la numeración de las cards de tipos de proyectos por íconos más descriptivos según el contexto de cada caso.

## Alcance
Se incluyó un ajuste visual puntual sobre la sección de proyectos en `/servicios`.
No se modificaron los textos de cada proyecto ni otras secciones.

## Cambios realizados
- se eliminó la numeración superior de cada card
- se agregó iconografía contextual para cada tipo de proyecto
- se mantuvo la flecha de acción como remate visual secundario
- se reforzó la jerarquía visual haciendo que el ícono sea el elemento principal del encabezado de cada card

## Archivos afectados
- Landing/components/services/ProjectsSection.tsx

## Impacto técnico
- la selección de iconos queda resuelta dentro del componente según el texto del proyecto
- no introduce dependencias nuevas ni cambios de arquitectura

## Seguridad
- No aplica

## Pruebas realizadas
- `npm run build`
- compilación exitosa de la app con `/servicios`

## Commit asociado
`refactor(services): add contextual icons to project cards`

## Observaciones
- la advertencia de Next.js por múltiples `package-lock.json` sigue siendo externa a este cambio
- si en el futuro cambia el copy de los proyectos, puede requerirse ajustar la lógica de mapeo de iconos
