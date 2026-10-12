# Código Base

Sitio estático construido con Astro. El plan de clases y el contenido se mantienen en Markdown dentro de `src/content/lessons/`; Astro valida sus metadatos y genera una página por archivo. No se usa base de datos ni CMS.

## Agregar una clase

1. Crea `src/content/lessons/NN-titulo-corto.md`, usando un nombre de archivo único.
2. Añade los metadatos requeridos al inicio:

   ```yaml
   ---
   number: 13
   title: "Título de la clase"
   summary: "Una frase que aparecerá en la ruta."
   status: outline
   topics: [Python, Fundamentos]
   ---
   ```

3. Escribe el contenido debajo del segundo `---` con Markdown.
4. Usa `status: outline` mientras sea solo un esquema. Cámbialo a `status: published` cuando la lección esté preparada.

Los campos `number`, `title`, `summary`, `status` y `topics` son obligatorios y se validan en `src/content.config.ts`. `duration` es opcional. `setupTools` es opcional y permite crear la navegación por pestañas de instrucciones, enlaces y comandos de verificación que usa la clase 1; consulta `01-preparar-entorno.md` como ejemplo.

## Desarrollo local

- `npm run dev`: servidor de desarrollo.
- `npm run build`: genera el sitio estático en `dist/`.
- `npm run preview`: previsualiza la compilación.

El progreso de los ocho ejercicios iniciales permanece en el navegador del estudiante mediante `localStorage`; no se sincroniza entre dispositivos.
