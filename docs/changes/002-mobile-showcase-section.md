# [Mobile showcase section]

## Fecha
2026-03-25

## Objetivo
Ajustar la seccion de showcase en `/servicios` para que quede enfocada en tipos de producto concretos: apps moviles, webs, sistemas/CRM y ecommerce.

## Alcance
Incluye la sustitucion del bloque mostrado en la seccion de muestras por una version centrada en mobile y la incorporacion de bloques equivalentes para web, sistemas y ecommerce.
No incluye cambios en otras secciones de la pagina.

## Cambios realizados
- Se agrego una nueva variante de la seccion de showcase orientada a apps moviles.
- Se reemplazo el visual principal por `public/mockupiphone.png`.
- Se aumento el tamano del mockup para darle mas peso visual dentro de la seccion.
- Se actualizo el copy para hablar solo de apps moviles.
- Se agregaron bloques equivalentes para webs, sistemas/CRM/multiagente y ecommerce.
- Se dejo `public/macbookpro.png` para web, `public/macpc.png` para sistemas/CRM y `public/web.png` para ecommerce, manteniendo el mismo layout y escala visual.
- Se removieron las sombras CSS de los mockups porque los assets ya incluyen profundidad visual propia.
- Se removieron tambien los halos y glows de fondo de los contenedores de imagen para que los mockups queden completamente limpios.
- Se neutralizaron tambien los wrappers de imagen con fondo transparente, sin borde y sin sombra para evitar cualquier estilo residual del contenedor.
- Se amplio el espacio del contenedor visual desktop y se ajusto la escala por asset para que web, sistemas y ecommerce se lean con un tamano aparente mas uniforme.
- Se reemplazo la seccion tabulada de `Servicios principales` por bloques independientes, uno por cada tipo de servicio, para que la oferta quede separada y mas clara.

## Archivos afectados
- `Landing/components/layout/ServicesPageContent.tsx`
- `public/mockupiphone.png`
- `public/macbookpro.png`
- `public/macpc.png`
- `public/web.png`

## Impacto técnico
- No altera APIs ni contratos.
- Mantiene el sistema visual actual y reutiliza `next/image`.

## Seguridad
- No aplica

## Pruebas realizadas
- `npm run build`
- Resultado: OK

## Commit asociado
`feat(services): add product showcase blocks`

## Observaciones
- El componente anterior queda sin uso directo, pero la pagina ya renderiza la nueva variante mobile.
