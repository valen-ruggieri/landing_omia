# [Redisenio de nuestro diferencial como bloque visual integrado]

## Fecha
2026-03-26

## Objetivo
Reconvertir la seccion `Nuestro diferencial` para que siga el mismo lenguaje visual de `Que cuidamos en cada proyecto`, usando `public/nuestrodiferencial.jpeg` dentro de un bloque visual unico con las cards integradas a los lados.

## Alcance
Incluye el reemplazo completo de la grilla masonry anterior por una composicion integrada con:
- imagen de fondo dentro del contenedor principal
- titulo y descripcion centrados arriba
- cards distribuidas en dos columnas laterales dentro del mismo bloque
- variante mobile consistente

No incluye cambios en otras secciones fuera de `Nuestro diferencial`.

## Cambios realizados
- Se elimino la estructura masonry anterior basada en columnas desfasadas.
- Se incorporo `public/nuestrodiferencial.jpeg` como imagen de fondo dentro del contenedor principal.
- Se agregaron overlays violetas/cyan para mantener contraste y coherencia con la paleta del bloque.
- Se distribuyeron las cards a izquierda y derecha del visual dentro del mismo contenedor, siguiendo el patron de `Que cuidamos`.
- Se agrego una variante mobile con grid compacto dentro del mismo bloque.
- Se desplazo mas el visual hacia un costado para darle mayor protagonismo al asset dentro del bloque.
- Se refino el estilo de las cards para que funcionen como badges mas livianos, compactos y con menos peso visual.

## Archivos afectados
- `Landing/components/services/DifferentialSection.tsx`
- `docs/changes/007-differential-image-layout.md`

## Impacto tecnico
- Simplifica la lectura de la seccion al pasar de una composicion masonry a un bloque visual integrado y consistente con otra seccion de servicios.
- Mantiene el origen de datos actual (`differentialCards` y `transparencyPoints`) sin duplicar contenido.
- Conserva compatibilidad con el flujo actual de `/servicios`.

## Seguridad
- No aplica

## Pruebas realizadas
- `npm run build`
- Resultado esperado: OK

## Commit asociado
`refactor(services): redesign differential section as integrated image block`

## Observaciones
- La seccion ahora comparte criterio visual con `Que cuidamos en cada proyecto`, pero con dominante violeta.
- Si despues hace falta afinarla, el siguiente ajuste razonable es compactar aun mas las cards o revelar un poco mas del asset central.
- Si queres un ajuste mas extremo, el siguiente paso razonable es reducir la cantidad de badges visibles por lado para dejar todavia mas aire alrededor del visual.
