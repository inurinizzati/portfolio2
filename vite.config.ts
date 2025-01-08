import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Ensures correct relative paths
});

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  plugins: [react()],
});
