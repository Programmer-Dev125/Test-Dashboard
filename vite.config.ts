import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"


export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@custom": path.resolve(__dirname, "./components/custom"),
      "@ui": path.resolve(__dirname, "./components/ui"),
      "@store": path.resolve(__dirname, "./store"),
      "@data": path.resolve(__dirname, "./data"),
      "@hooks": path.resolve(__dirname, "./hooks")
    },
  },
})
