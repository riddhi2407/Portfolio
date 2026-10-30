import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps asset paths valid on Netlify, Vercel and GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: './',
  build: { minify: 'esbuild', cssMinify: true, sourcemap: false }
})
