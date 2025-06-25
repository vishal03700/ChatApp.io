import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://chatapp-io-2.onrender.com/', // or your local backend URL
        changeOrigin: true,
        secure: false
      }
    }
  }
})
