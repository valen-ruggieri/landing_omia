# [Extraccion de secciones de servicios]

## Fecha
2026-03-25

## Objetivo
Separar la pagina `/servicios` en componentes React por seccion para facilitar mantenimiento, lectura y futuras ediciones por bloque.

## Alcance
Incluye la extraccion de las secciones visibles de `/servicios` y de sus helpers compartidos.
No incluye cambios funcionales en el contenido ni en el recorrido visual de la pagina.

## Cambios realizados
- Se creo `Landing/components/services/` como espacio dedicado para las secciones de `/servicios`.
- Se extrajo el hero a `ServicesHeroSection`.
- Se extrajo el bloque de servicios principales a `ServicesMainSection`.
- Se extrajo el carrusel de proceso a `WorkProcessSection`.
- Se extrajo el bloque de diferencial a `DifferentialSection`.
- Se extrajo el bloque de proyectos y calidad a `ProjectsAndQualitySection`.
- Se extrajo el bloque de involucramiento a `InvolvementSection`.
- Se movieron helpers visuales compartidos a `shared.tsx`.
- `ServicesPageContent.tsx` quedo reducido al rol de orquestador de layout, refs, progreso superior y navegacion.
- Se adapto la integracion con `Nav` usando `navigationItems` y `mobileMenuSections` compatibles con su interfaz real.

## Archivos afectados
- `Landing/components/layout/ServicesPageContent.tsx`
- `Landing/components/services/shared.tsx`
- `Landing/components/services/ServicesHeroSection.tsx`
- `Landing/components/services/ServicesMainSection.tsx`
- `Landing/components/services/WorkProcessSection.tsx`
- `Landing/components/services/DifferentialSection.tsx`
- `Landing/components/services/ProjectsAndQualitySection.tsx`
- `Landing/components/services/InvolvementSection.tsx`
- `Landing/components/services/index.ts`

## Impacto tecnico
- No cambia rutas ni contratos externos.
- Mantiene la misma ancla y el mismo recorrido de `/servicios`.
- Reduce el acoplamiento del archivo `ServicesPageContent.tsx`.
- Facilita cambios por seccion sin tocar un archivo monolitico.

## Seguridad
- No aplica

## Pruebas realizadas
- `npm run build`
- Resultado: OK

## Commit asociado
`refactor(services): extract services page sections into components`

## Observaciones
- Persiste el warning conocido de Next por multiples `package-lock.json`.
- El siguiente paso razonable, si hace falta, es extraer tambien `AdvancedBackground` y `SectionProgressBar` a archivos separados.
