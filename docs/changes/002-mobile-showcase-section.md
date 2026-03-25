# [Mobile showcase section]

## Fecha
2026-03-25

## Objetivo
Ajustar la seccion de showcase en `/servicios` para que quede enfocada en tipos de producto concretos: apps moviles, webs, sistemas/CRM y ecommerce.

## Alcance
Incluye la sustitucion del bloque mostrado en la seccion de muestras por una version centrada en mobile y la incorporacion de bloques equivalentes para web, sistemas y ecommerce.
No incluye cambios en otras secciones de la pagina.

## Cambios realizados
- Se agrego una nueva variante de la seccion de showcase orientada a apps moviles.
- Se reemplazo el visual principal por `public/mockupiphone.png`.
- Se aumento el tamano del mockup para darle mas peso visual dentro de la seccion.
- Se actualizo el copy para hablar solo de apps moviles.
- Se agregaron bloques equivalentes para webs, sistemas/CRM/multiagente y ecommerce.
- Se dejo `public/macbookpro.png` para web, `public/macpc.png` para sistemas/CRM y `public/web.png` para ecommerce, manteniendo el mismo layout y escala visual.
- Se removieron las sombras CSS de los mockups porque los assets ya incluyen profundidad visual propia.
- Se removieron tambien los halos y glows de fondo de los contenedores de imagen para que los mockups queden completamente limpios.
- Se neutralizaron tambien los wrappers de imagen con fondo transparente, sin borde y sin sombra para evitar cualquier estilo residual del contenedor.
- Se amplio el espacio del contenedor visual desktop y se ajusto la escala por asset para que web, sistemas y ecommerce se lean con un tamano aparente mas uniforme.
- Se reemplazo la seccion tabulada de `Servicios principales` por bloques independientes, uno por cada tipo de servicio, para que la oferta quede separada y mas clara.
- Se movio el patron visual de `Apps moviles` a `Servicios principales`, reutilizando ahi los bloques de producto y eliminando la seccion separada de `muestras` para evitar duplicacion.
- Se removio el encabezado superior de `Apps moviles` para que el bloque empiece directo con el contenido lateral y no duplique titulos dentro de `Servicios principales`.
- Se centralizo el bloque lateral de producto en un componente compartido para unificar el estilo de badge, titulo, descripcion, metricas y bullets entre mobile, web, sistemas y ecommerce.
- Se actualizo el hero principal de `/servicios` con el copy final institucional y se reemplazo el fondo de video por `public/heroscreen1.png` como imagen fija de fondo.
- Se actualizo nuevamente el copy del hero principal para enfocarlo en propuesta de sistema y se ajusto el CTA a `Agenda una consultoria`.
- Se removieron la sombra y el redondeo del wrapper del hero para que el fondo principal se vea sin tratamiento de contenedor.
- Se aumento levemente la escala del fondo `heroscreen1.png` para recortar el canvas visible del asset y evitar bordes oscuros alrededor de la imagen.
- Se ajusto tambien el overscan y la posicion del fondo del hero para ocultar el margen izquierdo e inferior visible del PNG.
- Se removio la overlay negra que seguia encima del hero y se dejo la imagen de fondo sin capa de color agregada.
- Se ajusto el hero para ocupar exactamente el alto del viewport y evitar que se vea el fondo global de la pagina debajo de la imagen.
- Se agrego nuevamente una capa opaca controlada sobre `heroscreen1.png` para bajar la intensidad visual del fondo sin volver a usar contenedor con sombra o borde.
- Se agrego un degradé de fondo al contenedor del hero para que cualquier espacio libre alrededor del asset siga el lenguaje visual general de la landing.
- Se aumento de forma marcada la escala visible de `heroscreen1.png` dentro del hero para darle mucha mas presencia sin cambiar el layout del bloque.
- Se aumento la separacion entre texto e imagen en los bloques de producto y se alineo cada visual hacia la punta correcta para que la composicion respire mejor.
- Se amplio el ancho del panel compartido de servicios y se agrandaron los titulos para reducir cortes innecesarios y aprovechar mejor el espacio horizontal.
- Se alinearon los gradientes de los bloques de servicios con la paleta de Omia, usando solo variantes de verde, azul, cyan, violeta y lila.
- Se reordeno la pagina para que la seccion `Nuestro trabajo de punta a punta` quede debajo de `Servicios principales`, manteniendo consistente el orden de navegacion, footer y barra de progreso.
- Se alterno el orden visual de los bloques de servicios para que imagen y texto vayan cambiando de lado en secuencia, y se reforzo una identidad cromatica distinta por bloque dentro de la misma paleta Omia.
- Se extendio esa logica cromatica al resto de `/servicios`, dando una dominante distinta por seccion con fondos sutiles, headers y cards alineadas a verde, azul, cyan, violeta y lila.
- Se redujo el peso tipografico de los titulos principales de los bloques de servicios, pasando de bold a medium para evitar cortes visuales demasiado bruscos.
## Archivos afectados
- Se ajusto la tipografia del header de secciones y del hero para usar Termina Light en el texto base y Termina Medium en el destacado, en lugar de bold.

## Archivos afectados
- `Landing/components/layout/ServicesPageContent.tsx`
- `public/mockupiphone.png`
- `public/macbookpro.png`
- `public/macpc.png`
- `public/web.png`
- `public/heroscreen1.png`

## Impacto técnico
- No altera APIs ni contratos.
- Mantiene el sistema visual actual y reutiliza `next/image`.

## Seguridad
- No aplica

## Pruebas realizadas
- `npm run build`
- Resultado: OK

## Commit asociado
`feat(services): add product showcase blocks`

## Observaciones
- El componente anterior queda sin uso directo, pero la pagina ya renderiza la nueva variante mobile.
