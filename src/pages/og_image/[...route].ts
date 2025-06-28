import { getCollection } from 'astro:content';
import { OGImageRoute } from 'astro-og-canvas';

const collectionEntries = await getCollection('posts');
const pages = Object.fromEntries(collectionEntries.map(({ id: slug, data }) => [slug, data]));

export const { getStaticPaths, GET } = OGImageRoute({
  param: 'route',
  pages: pages,
  getImageOptions: (path, page) => ({
    title: page.title,
    description: '        ' + page.description,
    logo: {
      path: './public/images/kitty-rounded.webp',
      size: [128, 128],
    },
    bgImage: {
      path: './src/images/og_image_bg.png',
      fit: 'cover',
    },
    font: {
      title: {
        color: [205, 214, 244],
      },
      description: {
        color: [166, 173, 200],
      },
    },
  }),
});
