# Carrusel de proyectos en grupos de tres

## Fecha
2026-04-04

## Objetivo
Hacer que los labels de tipos de proyectos aparezcan y roten de a tres, usando una paleta coherente con la seccion.

## Alcance
Se ajusto solo el comportamiento y la presentacion del carrusel dentro del mockup en `/servicios`.
No se modificaron el fondo, el titulo ni los textos base de proyectos.

## Cambios realizados
- se agruparon los tipos de proyecto en tandas de tres
- se cambio la rotacion para avanzar por grupos en lugar de hacerlo uno por uno
- se agrego una entrada escalonada para que los tres items aparezcan desde abajo
- se unifico la paleta de las cards con tonos violeta, fucsia y cian alineados a la seccion
- se actualizaron los indicadores para reflejar grupos y no items individuales

## Archivos afectados
- Landing/components/services/ProjectsSection.tsx

## Impacto tecnico
- el componente mantiene la misma arquitectura base, pero la logica del carrusel ahora trabaja por grupos
- se mejora la coherencia visual entre labels, titulo y ambiente general del bloque

## Seguridad
- No aplica

## Pruebas realizadas
- `npm run build`
- compilacion exitosa de la app con la seccion `/servicios`

## Commit asociado
`feat(services): rotate project labels in groups of three`

## Observaciones
- la advertencia de Next.js por multiples `package-lock.json` sigue siendo externa a este cambio
- si luego hiciera falta mas ritmo o menos densidad, el siguiente paso correcto es ajustar solo el intervalo del carrusel o el alto de cada card
