# [Servicios visual refresh]

## Fecha
2026-03-25

## Objetivo
Mejorar la página `/servicios` con una composición más atractiva, más variación de color y un bloque de mockups animados que muestren ejemplos de producto en contexto.

## Alcance
Incluye el refresco visual de la landing institucional de servicios, la incorporación de un showcase con mockups de web y mobile, y ajustes de contenido y navegación interna dentro de esa página.
No incluye cambios en la home principal ni en contratos backend.

## Cambios realizados
- Se agregó un bloque nuevo de ejemplos rotativos con mockups de web y celular.
- Se amplió la paleta visual con acentos cyan, fuchsia, emerald y amber dentro del showcase.
- Se ajustó el fondo general para que la página tenga más profundidad y color sin perder el estilo sobrio.
- Se sumó una sección visible de `Muestras` en la navegación y el footer de `/servicios`.

## Archivos afectados
- `Landing/components/layout/ServicesPageContent.tsx`
- `Landing/data/servicesPage.ts`

## Impacto técnico
- No altera APIs ni flujos de negocio.
- Mantiene la arquitectura actual basada en componentes y data centralizada.
- Agrega una sección animada con `framer-motion` usando estado local y rotación automática.

## Seguridad
- No aplica.

## Pruebas realizadas
- `npm run build`
- Resultado: OK

## Commit asociado
`feat(services): refresh visual with animated mockups`

## Observaciones
- Queda revisar visualmente el render en mobile y desktop para ajustar espaciados finos si hace falta.
- Si se quiere más contraste o más calma visual, se puede ajustar sólo la paleta del showcase sin tocar el resto de la landing.
