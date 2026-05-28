## - Configurar Tailwind CSS en un proyecto Vite + React.

La inteligencia artificial realizó:

1. Instalar dependencias:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

2. Añadir directivas en el CSS principal (por ejemplo `src/index.css` o `src/App.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

3. Configurar `tailwind.config.js` para escanear los archivos JSX/MDX/Markdown:

```js
module.exports = {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx,md,mdx}", "./public/**/*.md"],
	theme: { extend: {} },
	plugins: [],
}
```

4. Reinicia el servidor de desarrollo (`npm run dev`) para verificar cambios.

## - Diagnosticar y mitigar errores comunes (ej. `NOT_FOUND`).

La inteligencia artificial realizó:

El error `NOT_FOUND` indica que un recurso solicitado no existe en la ruta esperada. Pasos para diagnosticar y corregir:

- Verificar rutas: comprueba que las rutas a archivos Markdown coincidan con la estructura del proyecto (`docs_karcha/` o `public/`).
- Revisar logs del servidor: busca rutas 404 o errores de lectura de archivos.
- Limpiar cachés y reinstalar dependencias si el error aparece tras una actualización:

```bash
rm -rf node_modules
npm ci
```

## - Hacer que la página resumen funcione como página principal y las demás como subpáginas.

La inteligencia artificial realizó:

- Título y descripción breve.
- Índice con enlaces a cada subpágina.

## - Hacer que la página de promts mantenga el formato de las demas páginas.

La inteligencia artificial realizó:

- Modificación del texto.
- Agrego comandos visuales.

