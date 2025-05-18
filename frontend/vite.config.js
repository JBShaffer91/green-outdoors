// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import os from 'os';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  // Store Vite’s cache in the OS temp dir instead of node_modules/.vite
  cacheDir: path.join(os.tmpdir(), 'green-outdoors-vite-cache'),
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  server: {
    host: true
  }
});
