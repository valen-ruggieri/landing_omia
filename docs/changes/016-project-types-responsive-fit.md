# Ajuste responsive fino en tipos de proyectos

## Fecha
2026-04-04

## Objetivo
Mejorar la adaptacion visual de la seccion de tipos de proyectos para que el titulo, subtitulo y label activo encajen mejor dentro de la composicion del mockup.

## Alcance
Se ajusto solo el layout responsive del bloque en `/servicios`.
No se modificaron los textos, iconos ni la logica del carrusel.

## Cambios realizados
- se fijo una proporcion mas estable del contenedor en desktop usando el ratio del asset
- se redujo y ordeno el header con saltos de linea controlados
- se ajustaron posiciones verticales por breakpoint para separar mejor header y mockup
- se recalibro el ancho y la ubicacion del label activo dentro de la pantalla central

## Archivos afectados
- Landing/components/services/ProjectsSection.tsx

## Impacto tecnico
- la seccion mantiene la misma arquitectura, pero con un layout absoluto mas robusto frente a cambios de viewport
- se mejora la consistencia visual sin alterar el comportamiento del carrusel

## Seguridad
- No aplica

## Pruebas realizadas
- `npm run build`
- compilacion exitosa de la app con la seccion `/servicios`

## Commit asociado
`fix(services): improve project mockup responsive fit`

## Observaciones
- la advertencia de Next.js por multiples `package-lock.json` sigue siendo externa a este cambio
- si hiciera falta un ajuste mas fino, el siguiente paso correcto es mover unos puntos el bloque del label dentro de la ventana del mockup segun desktop o mobile
