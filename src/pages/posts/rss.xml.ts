import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { formatDescription } from '$lib/scripts/formatDescription';
import type { APIContext } from 'astro';
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

export async function GET(context: APIContext) {
  const blog = await getCollection('posts');

  const posts = await Promise.all(
    blog
      .filter((post) => !post.data.wip)
      .map(async (post) => {
        return {
          ...post,
          rendered: true,
          // Render and sanitize the blog post
          renderedContent: sanitizeHtml(await marked(post.body!)),
        };
      }),
  );

  return rss({
    title: "April Hall's Blog Posts",
    description: 'An insight into the mind of a deranged teenage girl',
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: formatDescription(post.body),
      link: `/posts/${post.id}/`,
      content: post.renderedContent,
    })),
  });
}
