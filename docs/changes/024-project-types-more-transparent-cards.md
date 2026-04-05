# Cards mas transparentes en tipos de proyectos

## Fecha
2026-04-04

## Objetivo
Hacer las cards del carrusel aun mas transparentes manteniendo su legibilidad.

## Alcance
Se ajusto solo la opacidad del fondo y del color de superficie de las cards dentro del mockup en `/servicios`.
No se modificaron tamaños, espaciado ni logica del carrusel.

## Cambios realizados
- se redujo la opacidad del gradiente de fondo de las cards
- se bajo la intensidad del overlay cromatico de superficie
- se mantuvo el blur y el borde para conservar lectura y separacion del fondo

## Archivos afectados
- Landing/components/services/ProjectsSection.tsx

## Impacto tecnico
- cambio visual puntual sin alterar comportamiento
- mejora el efecto glass e integra mas las cards con la imagen del mockup

## Seguridad
- No aplica

## Pruebas realizadas
- `npm run build`
- compilacion exitosa de la app con la seccion `/servicios`

## Commit asociado
`refactor(services): increase project card transparency`

## Observaciones
- la advertencia de Next.js por multiples `package-lock.json` sigue siendo externa a este cambio
- si hiciera falta otro ajuste, el siguiente paso correcto es bajar un poco mas el borde o el blur
