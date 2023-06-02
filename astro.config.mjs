import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./styles/base/_variables.scss";',
      },
    },
  },
});