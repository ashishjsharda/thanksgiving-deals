import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Ensures proper resolution
      '@components': path.resolve(__dirname, './src/components'),
      '@services': path.resolve(__dirname, './src/services'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@context': path.resolve(__dirname, './src/context'),
      '@constants': path.resolve(__dirname, './src/constants')
    }
  },
  base: './', // Ensures relative paths for assets in production
  build: {
    outDir: 'dist', // Output directory for production build
    rollupOptions: {
      input: '/index.html', // Entry point for the app
    },
  },
  server: {
    port: 3000, // Optional: Local dev server port
  },
});
