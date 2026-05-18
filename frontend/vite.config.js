import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://yt-app-qqcw.onrender.com"
      }
    }
  },
  plugins: [react(), tailwindcss()],
})
