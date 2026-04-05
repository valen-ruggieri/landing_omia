# Enfasis cromatico en la foto de tipos de proyectos

## Fecha
2026-04-04

## Objetivo
Dar mas protagonismo a los colores del asset `bgtypeproyects.png` para que la seccion se vea mas viva y alineada con la identidad visual.

## Alcance
Se ajusto solo el tratamiento visual de la imagen de fondo en la seccion de tipos de proyectos.
No se modificaron el layout, los textos ni la logica del carrusel.

## Cambios realizados
- se aumento la saturacion, contraste y brillo de la imagen de fondo
- se redujo la intensidad de los overlays oscuros que apagaban el asset
- se agregaron refuerzos cromaticos sutiles en violeta y cian con blend modes
- se mantuvo el resto de la composicion sin cambios funcionales

## Archivos afectados
- Landing/components/services/ProjectsSection.tsx

## Impacto tecnico
- mejora la presencia visual del fondo sin cambiar la estructura del componente
- mantiene compatibilidad total con la composicion actual del mockup y del carrusel

## Seguridad
- No aplica

## Pruebas realizadas
- `npm run build`
- compilacion exitosa de la app con la seccion `/servicios`

## Commit asociado
`refactor(services): increase project background color emphasis`

## Observaciones
- la advertencia de Next.js por multiples `package-lock.json` sigue siendo externa a este cambio
- si hiciera falta aun mas intensidad, el siguiente paso correcto es subir apenas mas la saturacion o reducir otro poco el overlay general, sin tocar el contenido
