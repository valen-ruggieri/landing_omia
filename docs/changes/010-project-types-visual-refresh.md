# Refresh visual de tipos de proyectos

## Fecha
2026-04-04

## Objetivo
Mejorar la sección de tipos de proyectos para que se vea más linda, más clara y más simple, eliminando el texto "Proyecto Omia" de cada card.

## Alcance
Se incluyó un ajuste visual puntual sobre la sección de proyectos en `/servicios`.
No se modificó el contenido de los tipos de proyecto ni otras secciones.

## Cambios realizados
- se eliminó el texto "Proyecto Omia" del pie de cada card
- se reemplazó el layout desparejo por un grid más uniforme y ordenado
- se mejoró la jerarquía visual con una cabecera más limpia, mejor balance de espacio y cards más premium
- se simplificó el cierre visual de cada card dejando un acento sutil en lugar de texto redundante

## Archivos afectados
- Landing/components/services/ProjectsSection.tsx

## Impacto técnico
- simplifica la composición visual al eliminar layouts especiales por card
- mejora mantenibilidad dejando una estructura uniforme y más fácil de ajustar
- no introduce dependencias nuevas ni cambios de arquitectura

## Seguridad
- No aplica

## Pruebas realizadas
- `npm run build`
- compilación exitosa de la app con `/servicios`

## Commit asociado
`refactor(services): refine project types cards`

## Observaciones
- la advertencia de Next.js por múltiples `package-lock.json` sigue siendo externa a este cambio
- la sección quedó preparada para un ajuste posterior de copy o iconografía si hiciera falta
