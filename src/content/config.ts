import { z, defineCollection } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    category: z.string().default('общее'),
    views: z.number().default(0),
    draft: z.boolean().default(false),
    coverImage: z.string().optional(),
    ogImage: z.string().optional(),
  }),
});

export const collections = { posts };