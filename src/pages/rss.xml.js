import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const allPosts = await getCollection('posts', ({ data }) => !data.draft);
  const posts = allPosts
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .slice(0, 20);

  return rss({
    title: 'Блог',
    description: 'Последние записи блога',
    site: (context.site ?? 'https://govard108.github.io/testRepo/').toString(),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/posts/${post.slug}/`,
    })),
  });
}
