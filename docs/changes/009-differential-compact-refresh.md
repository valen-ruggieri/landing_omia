# Refresh compacto de nuestro diferencial

## Fecha
2026-04-04

## Objetivo
Compactar la sección "Nuestro diferencial" y actualizar su contenido para comunicar mejor el valor de Omia con un bloque más claro y directo.

## Alcance
Se incluyó un rediseño visual puntual de la sección y la actualización completa del copy de sus seis cards.
No se modificaron otras secciones de la landing.

## Cambios realizados
- se reemplazó el layout disperso de badges flotantes por un grid compacto de seis cards
- se actualizó el subtítulo de la sección con una propuesta más directa y orientada a resultados
- se renovó el contenido de todas las cards según el texto definido para negocio, integración, resultados, escalabilidad, transparencia y acompañamiento
- se simplificó la composición visual con menos ornamento, menor padding y cards más limpias
- se recortó el fondo visual para reducir ruido y dejar el bloque más sobrio

## Archivos afectados
- Landing/components/services/DifferentialSection.tsx
- Landing/data/servicesPage.ts

## Impacto técnico
- simplifica el render de la sección eliminando posicionamientos absolutos complejos
- mejora mantenibilidad al dejar un grid uniforme y copy centralizado en la capa de datos
- no introduce cambios de arquitectura ni dependencias nuevas

## Seguridad
- No aplica

## Pruebas realizadas
- `npm run build`
- compilación exitosa de la app con `/servicios`

## Commit asociado
`feat(services): refresh differential section`

## Observaciones
- la advertencia de Next.js por múltiples `package-lock.json` sigue siendo externa a este cambio
- el bloque quedó listo para futuros ajustes finos de densidad visual o iconografía si hiciera falta
