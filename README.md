# Base Astro para centro de psicología / psicopedagogía

Esta base está pensada para una web institucional, informativa y sin backend propio.

## Incluye
- Home de una sola página con secciones
- Servicios
- Profesionales
- Galería
- Preguntas frecuentes
- Contacto
- Formulario preparado para Netlify Forms
- Estructura simple para reemplazar textos, colores, tipografías, logos e imágenes

## Cómo usar
```bash
npm install
npm run dev
```

## Dónde cambiar cada cosa
- **Textos y datos del sitio:** `src/data/site.ts`
- **Estilos globales, colores y fuentes:** `src/styles/global.css`
- **Logo y favicon:** `public/logos/`
- **Imágenes:** `public/images/`
- **Fuentes:** `public/fonts/`

## Qué deberías reemplazar primero
1. `public/logos/logo.svg`
2. `public/logos/favicon.svg`
3. Imágenes de `public/images/`
4. Variables de color en `src/styles/global.css`
5. Fuentes reales en `public/fonts/` y `@font-face`
6. Datos reales del centro en `src/data/site.ts`

## Siguiente paso recomendado
Cuando me pases la guía de colores, fuentes y logos, lo ideal es:
- mapear la identidad visual a variables CSS reales
- ajustar jerarquías tipográficas
- adaptar el home al estilo exacto del diseñador
- definir si conviene mantener one-page o pasar a multipágina
