import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@services': '/src/services',
      '@hooks': '/src/hooks',
      '@utils': '/src/utils',
      '@context': '/src/context',
      '@constants': '/src/constants',
    },
  },
  base: './', // Ensures assets are served correctly on deployment
  build: {
    outDir: 'dist', // Default for Vite, ensures Vercel points to the correct directory
  },
});
