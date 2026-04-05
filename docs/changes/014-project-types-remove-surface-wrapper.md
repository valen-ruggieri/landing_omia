# Remocion del contenedor de fondo en tipos de proyectos

## Fecha
2026-04-04

## Objetivo
Quitar el contenedor visual de fondo que envolvia el carrusel de tipos de proyectos para dejar la card activa mas limpia y directa.

## Alcance
Se modifico solo la presentacion del bloque de proyectos dentro de `/servicios`.
No se altero la animacion, los textos, los iconos ni la rotacion automatica del carrusel.

## Cambios realizados
- se elimino el wrapper externo con fondo oscuro, borde y blur
- se mantuvo la card activa como superficie principal del carrusel
- se conservo el glow de enfasis aplicado directamente sobre la card activa
- se dejaron los indicadores inferiores fuera de un contenedor adicional

## Archivos afectados
- Landing/components/services/ProjectsSection.tsx

## Impacto tecnico
- se simplifico la jerarquia visual del componente
- se redujo una capa estructural sin cambiar el comportamiento del carrusel
- se mantuvo la compatibilidad con la arquitectura actual del bloque

## Seguridad
- No aplica

## Pruebas realizadas
- `npm run build`
- compilacion exitosa de la app con la seccion `/servicios`

## Commit asociado
`refactor(services): remove project carousel surface wrapper`

## Observaciones
- la advertencia de Next.js por multiples `package-lock.json` sigue siendo externa a este cambio
- si despues se quisiera volver a encapsular el bloque, conviene hacerlo con una variante mas liviana y sin competir con la card activa
