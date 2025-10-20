import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://govard108.github.io',
  base: '/testRepo/',
  output: 'static',
  trailingSlash: 'always',
  integrations: [vue(), mdx(), sitemap()],
});
