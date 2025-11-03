// client/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Optional: Use a standard React development port
    proxy: {
      // Proxy requests starting with /api to the Express server
      '/api': {
        target: 'http://localhost:5000', // Target of your Express server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});