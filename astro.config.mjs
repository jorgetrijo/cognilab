import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cognilab.com.ar',
  integrations: [sitemap()],
});