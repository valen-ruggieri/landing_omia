# Ajustes mobile en hero y involvement de servicios

## Fecha
2026-04-04

## Objetivo
Mejorar la composición mobile de la landing de servicios para que las imágenes del hero y de las secciones "Como nos involucramos" y "Que cuidamos" se perciban mejor según el viewport.

## Alcance
Se incluyeron ajustes puntuales de layout y escalado responsive en `/servicios`.
No se modificaron otras secciones ni páginas fuera de este bloque.

## Cambios realizados
- se ajustó el hero mobile para usar `heromobile.png` como visual específica en mobile, separada de la de desktop
- se recentró el mockup mobile del hero y se redujo el espacio superior para que el texto arranque más arriba
- se restauró el bloque de badges del hero a una fila simple sobre el fondo principal
- se integró el texto de "Como nos involucramos" dentro de la misma imagen para evitar una franja separada arriba
- se aumentó la altura mobile de "Como nos involucramos" para darle más aire a la composición
- se incrementó la escala mobile del celular en "Como nos involucramos" para darle más protagonismo
- se corrigió el encuadre y la visibilidad del fondo en "Que cuidamos" para mobile
- se mantuvo el comportamiento desktop sin cambios estructurales

## Archivos afectados
- Landing/components/services/ServicesHeroSection.tsx
- Landing/components/services/InvolvementSection.tsx
- Landing/components/services/QualityCareSection.tsx

## Impacto técnico
- mejora de composición visual mobile mediante cambios de tamaño, posición y encuadre
- sin cambios de arquitectura ni incorporación de dependencias nuevas

## Seguridad
- No aplica

## Pruebas realizadas
- `npm run build`
- compilación exitosa de la app con `/servicios`

## Commit asociado
`fix(services): tune mobile image framing`

## Observaciones
- persiste la advertencia de Next.js por múltiples `package-lock.json` en el entorno
- el ajuste quedó preparado para seguir afinándose visualmente si hace falta
