import clerk from '@clerk/astro';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

import sanity from '@sanity/astro';

export default defineConfig({
  server: {
    port: 3000,
  },
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    clerk(),
    react(),
    sanity({
      projectId: "a8bpwdzi",
      dataset: "production",
      useCdn: false,
      studioBasePath: "/admin",
    }),
  ],
  adapter: netlify(),
  output: "server",
});