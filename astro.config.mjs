import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import react from '@astrojs/react';


import mdx from "@astrojs/mdx";

import vercel from '@astrojs/vercel/serverless'



// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  site: 'https://astro-frontend-masters.netlify.app',
  integrations: [solidJs(), react(), mdx()],
  adapter: vercel(),
});