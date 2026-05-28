# Página de analisis legal sobre hackeo Rhysida hecho con React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:



# Informe Karcha — Proyecto de clase (React + Vite)

Sitio web construido con React y Vite para la asignatura **Fundamentos de Seguridad de la Información**. Contiene análisis, documentación y visualizaciones relacionadas con el caso de estudio.

## Autor y créditos

- **Autor:** k-chahuan — https://github.com/k-chahuan
- **Profesor (créditos):** Rubén Schnettler L.

## Estructura del proyecto

- `src/` — código fuente React (componentes, estilos, assets).
- `docs_karcha/` — archivos Markdown con contenido por sección (01_resumen_karcha.md, 02_marco_karcha.md, ...).
- `public/` — copia pública de los Markdown para servir con Vite.

## Cómo ejecutar el proyecto (desarrollo)

Instala dependencias y levanta el servidor de desarrollo:

```bash
npm install
npm run dev
```

Abre `http://localhost:5173` (o la URL que indique Vite) para ver la página.

## Generar build (producción)

```bash
npm run build
npm run preview
```

## Notas importantes

- `01_Resumen_Karcha.md` se usa como página principal/referencia; las demás son subpáginas temáticas.
- Si usas Tailwind, revisa `tailwind.config.js` para asegurarte de que escanee `src/` y `public/`.

Si quieres, puedo:

- Revisar los componentes que renderizan Markdown y aplicar estilos Tailwind.
- Añadir un enlace visible al perfil de GitHub en la cabecera del sitio.
