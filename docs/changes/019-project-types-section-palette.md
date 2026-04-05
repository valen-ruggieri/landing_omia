# Cambio de paleta en la seccion de tipos de proyectos

## Fecha
2026-04-04

## Objetivo
Cambiar los colores de la seccion y del titulo para alinear mejor el bloque con una paleta violeta, azul y cian.

## Alcance
Se ajusto solo la paleta cromatica del bloque de tipos de proyectos en `/servicios`.
No se modificaron el layout ni la logica del carrusel.

## Cambios realizados
- se reemplazo el fondo ambiental de la seccion por una composicion violeta, azul y cian
- se actualizo el borde y la sombra del contenedor para acompañar la nueva paleta
- se cambio el degradado del titulo principal a una combinacion fucsia, violeta y cian
- se ajusto el tono del texto secundario para integrarlo mejor al nuevo esquema

## Archivos afectados
- Landing/components/services/ProjectsSection.tsx

## Impacto tecnico
- el bloque mantiene la misma estructura y comportamiento
- mejora la coherencia visual de la seccion sin introducir cambios funcionales

## Seguridad
- No aplica

## Pruebas realizadas
- `npm run build`
- compilacion exitosa de la app con la seccion `/servicios`

## Commit asociado
`refactor(services): update project section palette`

## Observaciones
- la advertencia de Next.js por multiples `package-lock.json` sigue siendo externa a este cambio
- si despues se quisiera mas contraste, el siguiente paso correcto es ajustar solo el degradado del titulo o el color de la card activa, no rehacer toda la seccion
