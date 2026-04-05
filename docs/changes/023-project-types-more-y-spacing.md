# Mayor separacion vertical entre cards de proyectos

## Fecha
2026-04-04

## Objetivo
Aumentar la separacion en el eje Y entre las cards del carrusel de proyectos.

## Alcance
Se ajusto solo el espaciado vertical entre las cards dentro del mockup en `/servicios`.
No se modificaron anchos, opacidad, paleta ni comportamiento del carrusel.

## Cambios realizados
- se incremento el `gap` vertical entre las tres cards visibles
- se mantuvo intacta la composicion general del bloque

## Archivos afectados
- Landing/components/services/ProjectsSection.tsx

## Impacto tecnico
- cambio visual puntual, sin efectos funcionales
- mejora la lectura y la respiracion entre cards dentro del mockup

## Seguridad
- No aplica

## Pruebas realizadas
- `npm run build`
- compilacion exitosa de la app con la seccion `/servicios`

## Commit asociado
`refactor(services): increase vertical spacing in project cards`

## Observaciones
- la advertencia de Next.js por multiples `package-lock.json` sigue siendo externa a este cambio
- si luego hiciera falta aun mas aire, el siguiente paso correcto es volver a subir solo este spacing sin tocar el resto
