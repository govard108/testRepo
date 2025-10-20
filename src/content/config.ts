import { z, defineCollection } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    coverImage: z.string().optional(),
    ogImage: z.string().optional(),
  }),
  slug: ({ defaultSlug }) => defaultSlug,
});

export const collections = { posts };
