# Compactación minimalista de cards de proyectos

## Fecha
2026-04-04

## Objetivo
Reducir visualmente las cards de la sección de tipos de proyectos para que se vean más compactas, sobrias y minimalistas.

## Alcance
Se incluyó un ajuste visual puntual sobre la sección de proyectos en `/servicios`.
No se modificaron textos ni otras secciones de la landing.

## Cambios realizados
- se redujo la altura mínima de las cards
- se achicaron paddings, gaps y tipografía interna
- se suavizó el glow y los acentos decorativos
- se simplificó el borde, el radio y la línea de cierre para una estética más limpia

## Archivos afectados
- Landing/components/services/ProjectsSection.tsx

## Impacto técnico
- mejora la densidad visual y la legibilidad del grid
- mantiene la lógica de iconografía contextual ya existente
- no introduce cambios de arquitectura ni dependencias nuevas

## Seguridad
- No aplica

## Pruebas realizadas
- `npm run build`
- compilación exitosa de la app con `/servicios`

## Commit asociado
`refactor(services): compact project cards`

## Observaciones
- la advertencia de Next.js por múltiples `package-lock.json` sigue siendo externa a este cambio
- si se busca aún más densidad visual, el siguiente paso sería reducir también el subtítulo superior de la sección
