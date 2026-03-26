# [Reemplazo visual de la seccion Como nos involucramos]

## Fecha
2026-03-25

## Objetivo
Simplificar la seccion `Como nos involucramos` para que use una sola imagen como base visual y mantenga solo el titulo y la descripcion superpuestos.

## Alcance
Incluye el reemplazo completo del contenido interno de la seccion por la imagen `public/comonosinvolucramos.png`, el titulo superior y una descripcion breve debajo.
No incluye cambios en otras secciones de `/servicios`.

## Cambios realizados
- Se elimino el contenido textual, cards y CTA previo de la seccion.
- Se agrego `public/comonosinvolucramos.png` como visual principal de la seccion.
- Se mantuvo el titulo `Como nos involucramos` superpuesto sobre la imagen.
- Se agrego debajo una descripcion breve para conservar contexto en la seccion.
- Se conservo el contenedor general de la seccion para no romper el flujo de layout.

## Archivos afectados
- `Landing/components/services/InvolvementSection.tsx`

## Impacto tecnico
- No cambia rutas, contratos ni navegacion.
- Simplifica fuertemente el bloque visual de la seccion partner.

## Seguridad
- No aplica

## Pruebas realizadas
- `npm run build`
- Resultado esperado: OK

## Commit asociado
`feat(services): replace involvement section with image hero`

## Observaciones
- La imagen queda como fuente unica del contenido visible de la seccion.
- Si despues hace falta, el siguiente ajuste razonable es mover la posicion del titulo o agregar un overlay sutil para mejorar contraste.
