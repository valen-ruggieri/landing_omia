# [Carrusel de proceso en servicios]

## Fecha
2026-03-25

## Objetivo
Reemplazar la seccion `Como trabajamos` por una version mas visual, con carrusel animado, mockups de fondo y un recorrido de 7 etapas alineado al proceso real de Omia.

## Alcance
Incluye la actualizacion de la data del proceso, la nueva composicion visual de la seccion y la asignacion de mockups para cada etapa.
No incluye cambios en otras secciones de `/servicios`.

## Cambios realizados
- Se actualizaron las 7 etapas de `Como trabajamos` con el contenido final definido para consultoria, diagnostico, producto, diseno, desarrollo, testing y evolucion.
- Se agrego un `imageSrc` y un `accentClassName` por etapa dentro de `workProcess`.
- Se reemplazo la grilla de cards por un carrusel visual con:
- mockup activo opaco de fondo
- mockups laterales como referencias del slide anterior y siguiente
- tarjeta central con numero, titulo y descripcion
- rotacion automatica entre etapas
- navegacion manual por botones de etapa
- Se elimino despues el marco exterior grande de la seccion para dejar una sola caja protagonista.
- Se removio la botonera inferior de etapas, manteniendo solo la rotacion automatica del carrusel.
- Se amplio el ancho util del titulo principal del carrusel para reducir saltos de linea y aprovechar mejor el espacio horizontal.
- Se reemplazo el progreso inferior por un borde activo alrededor de la caja central, que avanza por tramos y adopta el color de la etapa actual.
- Se reforzo ese borde activo con mayor grosor y un glow del mismo color de la etapa para que el avance se perciba mas y el contenedor gane presencia visual.
- Se aumento ademas la intensidad del glow general y de cada tramo del borde activo para que el progreso se note con mas fuerza.

## Archivos afectados
- `Landing/data/servicesPage.ts`
- `Landing/components/layout/ServicesPageContent.tsx`

## Impacto tecnico
- No cambia rutas, APIs ni contratos externos.
- Mantiene la misma ancla `#como-trabajamos`.
- Centraliza la informacion del carrusel en `servicesPage.ts` para evitar hardcodeo en el componente.

## Seguridad
- No aplica

## Pruebas realizadas
- `npm run build`
- Resultado esperado: OK

## Commit asociado
`feat(services): redesign work process section as animated carousel`

## Observaciones
- La rotacion automatica usa un intervalo local dentro del componente.
- Si despues hace falta, el siguiente ajuste razonable es pausar el carrusel al hover o al interactuar manualmente.
