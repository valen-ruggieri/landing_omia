# Integracion de bgtypeproyects en tipos de proyectos

## Fecha
2026-04-04

## Objetivo
Usar `bgtypeproyects.png` como contenedor visual principal de la seccion de tipos de proyectos e integrar dentro de esa imagen el titulo, subtitulo y el carrusel de labels.

## Alcance
Se modifico solo la composicion visual del bloque de proyectos en `/servicios`.
No se cambiaron los textos de los proyectos ni la logica de rotacion automatica.

## Cambios realizados
- se reemplazo el armado anterior por una seccion basada en la imagen `bgtypeproyects.png`
- se movieron el titulo y el subtitulo dentro del contenedor visual
- se posiciono el label activo dentro del area central del mockup del navegador
- se mantuvo el carrusel vertical y los indicadores inferiores
- se agregaron overlays suaves para mejorar contraste sin tapar la imagen

## Archivos afectados
- Landing/components/services/ProjectsSection.tsx

## Impacto tecnico
- la seccion paso a depender de una composicion absoluta sobre una imagen de fondo
- se elimino la dependencia del header compartido para este bloque puntual
- se mantuvo la arquitectura local del componente y el estado del carrusel sin agregar dependencias nuevas

## Seguridad
- No aplica

## Pruebas realizadas
- `npm run build`
- compilacion exitosa de la app con la seccion `/servicios`

## Commit asociado
`refactor(services): align project carousel inside background mockup`

## Observaciones
- la advertencia de Next.js por multiples `package-lock.json` sigue siendo externa a este cambio
- si luego se quisiera un ajuste mas fino del encuadre, conviene mover solo las posiciones verticales del header y del carrusel, no rehacer la estructura
