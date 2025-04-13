import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './readingTime';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [svelte()],

  markdown: {
    shikiConfig: {
      theme: 'catppuccin-mocha',
    },
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: ['nofollow', 'noopener', 'noreferrer'] }]],
    remarkPlugins: [remarkReadingTime],
  },
});
