import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'src', // assuming the source files are in the 'src' directory
  build: {
    outDir: '../dist', // output directory
  },
});
