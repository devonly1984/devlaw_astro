import clerk from '@clerk/astro';
import { defineConfig, envField } from 'astro/config';
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
    optimizeDeps: {
      exclude: ["@sanity/client"],
    },
  },
  env: {
    schema: {
      PUBLIC_CLERK_PUBLISHABLE_KEY: envField.string({
        context: "client",
        access: "public",
        optional: true,
      }),
      CLERK_SECRET_KEY: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
      SANITY_TOKEN: envField.string({
        context: "server",
        access: "secret",
      }),
      SANITY_DATASET: envField.string({
        context: "client",
        access: "public",
      }),
      SANITY_PROJECT_ID: envField.string({
        context: "client",
        access: "public",
      }),
      SIGNING_SECRET: envField.string({
        context: "server",
        access: "secret",
      }),
      STRIPE_SECRET_KEY: envField.string({
        context: "server",
        access: "secret",
      }),
      STRIPE_WEBHOOK_SECRET: envField.string({
        context: "server",
        access: "secret",
      }),
      PUBLIC_DOMAIN_URL: envField.string({
        context: "client",
        access: "public",
      }),
    },
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