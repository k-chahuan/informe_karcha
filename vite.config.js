import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// Plugin para copiar archivos Markdown a public
const copyMarkdownPlugin = {
  name: 'copy-markdown',
  apply: 'build',
  async generateBundle() {
    const docsDir = path.resolve(__dirname, 'docs_karcha')
    const publicDir = path.resolve(__dirname, 'public')
    
    // Crear carpeta public si no existe
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true })
    }
    
    // Copiar archivos .md
    const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.md'))
    files.forEach(file => {
      const src = path.join(docsDir, file)
      const dest = path.join(publicDir, file)
      fs.copyFileSync(src, dest)
    })
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), copyMarkdownPlugin],
})



