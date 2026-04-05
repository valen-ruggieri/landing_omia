# Cards mas grandes y transparentes en tipos de proyectos

## Fecha
2026-04-04

## Objetivo
Hacer las cards del carrusel de proyectos mas grandes, con mas aire y mas transparencia visual.

## Alcance
Se ajusto solo la presentacion de las cards dentro del mockup en `/servicios`.
No se modificaron la logica por grupos ni el resto de la seccion.

## Cambios realizados
- se amplio el ancho util del bloque de cards dentro del mockup
- se aumento el padding y el radio de las cards para darles mas presencia
- se incremento levemente el tamaño de iconos y textos
- se redujo la opacidad del fondo de las cards para que se vean mas transparentes
- se suavizo el glow para acompañar el nuevo nivel de transparencia

## Archivos afectados
- Landing/components/services/ProjectsSection.tsx

## Impacto tecnico
- se mantiene la misma estructura y logica del carrusel por grupos
- mejora la lectura y la integracion visual de las cards con el mockup de fondo

## Seguridad
- No aplica

## Pruebas realizadas
- `npm run build`
- compilacion exitosa de la app con la seccion `/servicios`

## Commit asociado
`refactor(services): enlarge and soften project cards`

## Observaciones
- la advertencia de Next.js por multiples `package-lock.json` sigue siendo externa a este cambio
- si luego hiciera falta aun mas transparencia, el siguiente paso correcto es bajar un poco mas la opacidad del gradiente de fondo sin tocar el texto
