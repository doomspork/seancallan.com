// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://seancallan.com',
  integrations: [sitemap()],
  redirects: {
    '/writings/': '/#writings',
    '/contributions/': '/#projects',
    '/experience/': '/',
    '/contact/': '/#contact',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
