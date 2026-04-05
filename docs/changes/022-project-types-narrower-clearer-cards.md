# Ajuste fino de ancho y transparencia en cards de proyectos

## Fecha
2026-04-04

## Objetivo
Reducir un poco el ancho de las cards del mockup y hacerlas mas transparentes, eliminando la sombra.

## Alcance
Se ajusto solo la presentacion de las cards del carrusel en `/servicios`.
No se modificaron la logica de grupos, el mockup ni el header.

## Cambios realizados
- se redujo levemente el ancho del bloque de cards dentro del mockup
- se bajo la opacidad del fondo de las cards para dar una sensacion mas liviana
- se elimino la sombra de las cards
- se mantuvo el blur y la paleta cromatica general de la seccion

## Archivos afectados
- Landing/components/services/ProjectsSection.tsx

## Impacto tecnico
- no cambia el comportamiento del componente
- mejora la integracion visual de las cards con el fondo del mockup

## Seguridad
- No aplica

## Pruebas realizadas
- `npm run build`
- compilacion exitosa de la app con la seccion `/servicios`

## Commit asociado
`refactor(services): narrow and lighten project cards`

## Observaciones
- la advertencia de Next.js por multiples `package-lock.json` sigue siendo externa a este cambio
- si luego hiciera falta otro ajuste, el siguiente paso correcto es tocar solo la opacidad del gradiente o el borde de las cards
