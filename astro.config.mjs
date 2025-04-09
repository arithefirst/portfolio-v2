import rehypeExternalLinks from 'rehype-external-links';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';

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
  },
});
