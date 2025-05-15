
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '/auth': 'http://0.0.0.0:5000',
      '/events': 'http://0.0.0.0:5000',
      '/api': 'http://0.0.0.0:5000'
    }
  },
  build: {
    outDir: 'dist'
  }
});
