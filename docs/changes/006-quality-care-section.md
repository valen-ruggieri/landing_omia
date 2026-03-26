# [Separacion de proyectos y calidad en la pagina de servicios]

## Fecha
2026-03-25

## Objetivo
Separar `En que tipo de proyectos podemos ayudar` de `Que cuidamos en cada proyecto`, y redisenar esta ultima como una seccion independiente con la imagen `public/quecuidamos44.png` y predominancia verde.

## Alcance
Incluye la extraccion del bloque mixto anterior en dos componentes React separados, el reemplazo visual de la seccion de calidad con una composicion basada en imagen + cards laterales, y el ajuste de navegacion interna para reflejar el nuevo orden.
No incluye cambios en el contenido de otras secciones fuera de `/servicios`.

## Cambios realizados
- Se elimino el componente mixto `ProjectsAndQualitySection`.
- Se creo `ProjectsSection` para mantener solo el bloque de tipos de proyectos.
- Se creo `QualityCareSection` como seccion independiente con `public/quecuidamos44.png`.
- Se reorganizo `ServicesPageContent` para renderizar `Proyectos` y `Que cuidamos` por separado.
- Se actualizaron exports, refs, navegacion y footer para el nuevo esquema de secciones.
- Se agrando la imagen de `Que cuidamos`, se removio su contenedor visual y se fijo una composicion lateral con la misma altura que la grilla de labels.
- Se redujo ligeramente el tamano de las cards laterales para mantenerlas alineadas al alto del visual principal.
- Se rehizo la seccion como un bloque unico con imagen grande de fondo, titulo y descripcion integrados arriba, y los labels montados dentro del mismo contenedor hacia el lateral derecho.
- Se hizo la composicion mas horizontal, reduciendo la altura total del bloque y estirando mejor el titulo dentro del ancho disponible.
- Se suavizo el estilo de las cards laterales con mas transparencia, menos borde y un tratamiento visual mas liviano.
- Se centro el contenido principal del bloque para que el titulo, la descripcion y la grilla se lean alineados al medio y con mejor aprovechamiento del ancho.
- Se redujo el tamano de las cards laterales y se llevo su estilo a una variante mas minimalista, con menos masa visual, menor borde y fondos mas transparentes.
- Se reemplazo la grilla compacta por filas laterales integradas al visual, distribuyendo los items a ambos lados para dialogar mejor con el fondo de la imagen.
- Se diferenciaron acentos translucidos entre verde, teal y cyan para que los items jueguen con los colores del asset sin romper la paleta Omia.

## Archivos afectados
- `Landing/components/layout/ServicesPageContent.tsx`
- `Landing/components/services/index.ts`
- `Landing/components/services/ProjectsSection.tsx`
- `Landing/components/services/QualityCareSection.tsx`
- `docs/changes/006-quality-care-section.md`

## Impacto tecnico
- Mejora la separacion de responsabilidades dentro de `/servicios`.
- Simplifica futuras ediciones al desacoplar la seccion de calidad del bloque de proyectos.
- Ajusta ids de scroll y navegacion para representar correctamente el nuevo orden de secciones.
- La seccion de calidad ahora es un bloque visual autocontenido, mas cercano al patron usado en `Como nos involucramos`.
- El ajuste reciente prioriza una lectura mas ancha y menos pesada visualmente en desktop.
- El ultimo ajuste prioriza una composicion mas centrada y balanceada dentro del mismo visual.
- El refinamiento mas reciente baja el peso visual de los labels para que acompanen mejor la imagen de fondo.
- La variante actual prioriza integracion visual con el asset y una lectura mas escenografica en desktop.

## Seguridad
- No aplica

## Pruebas realizadas
- `npm run build`
- Resultado esperado: OK

## Commit asociado
`refactor(services): split projects and quality into independent sections`

## Observaciones
- La nueva seccion `Que cuidamos` usa una dominante verde coherente con la paleta de Omia.
- Si despues hace falta afinarla, el siguiente ajuste razonable es mover la posicion de las cards dentro del visual o ajustar el overlay para revelar mas o menos del asset.
- Si hace falta una variante aun mas liviana, el siguiente paso razonable es bajar un poco mas la opacidad del overlay oscuro del fondo.
