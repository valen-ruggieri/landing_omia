# Rebalanceo del titulo y encuadre en tipos de proyectos

## Fecha
2026-04-04

## Objetivo
Corregir el desbalance visual del bloque de tipos de proyectos usando un titulo mas corto, mas aire arriba y un mockup de fondo un poco mas protagonista.

## Alcance
Se ajusto solo la composicion visual de la seccion en `/servicios`.
No se alteraron la logica del carrusel ni los textos de los labels activos.

## Cambios realizados
- se cambio el titulo a una variante mas corta: `Te ayudamos en tus proyectos`
- se movio el header mas arriba dentro de la imagen
- se amplio el ancho util del header para evitar cortes torpes
- se escalo levemente la imagen de fondo para hacer mas protagonista el mockup
- se bajo el bloque del label activo para centrarlo mejor dentro de la ventana del navegador

## Archivos afectados
- Landing/components/services/ProjectsSection.tsx

## Impacto tecnico
- se mantiene la misma arquitectura del componente
- se mejora el equilibrio entre header y mockup sin tocar la rotacion automatica

## Seguridad
- No aplica

## Pruebas realizadas
- `npm run build`
- compilacion exitosa de la app con la seccion `/servicios`

## Commit asociado
`fix(services): rebalance project section title and mockup`

## Observaciones
- la advertencia de Next.js por multiples `package-lock.json` sigue siendo externa a este cambio
- si todavia hiciera falta mas ajuste, el siguiente paso correcto es separar aun mas el subtitulo del borde superior del mockup o mover unos puntos el carrusel segun desktop y mobile
