// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/cursotiroides/',
  vite: {
    plugins: [tailwindcss()]
  }
});