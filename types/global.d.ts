/**
 * Declaraciones globales para módulos de assets (SVG, imágenes).
 * Next.js trata los SVG como URLs por defecto.
 */
declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}
