import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/auth': {
        target: 'http://localhost:5001',
        changeOrigin: true,
      },
      '/api/bids': {
        target: 'http://localhost:5001',
        changeOrigin: true,
      },
      '/api/admin': {
        target: 'http://localhost:5001',
        changeOrigin: true,
      },
      '/api': {
        target: 'https://www.b4traders.com',
        changeOrigin: true,
      },
    },
  },
})
