// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
// import staticAdapter from '@astrojs/adapter-static';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  // adapter: staticAdapter(),
  base: '/portfolioWeb/' // Cambia esto si tu repo tiene otro nombre
});