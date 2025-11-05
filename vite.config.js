import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/3pasos0verguenza/',   // <- ESTE es el correcto para https://yrvingv.github.io/3pasos0verguenza/
})
