import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/portfolio' }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    categories: z.array(z.string()),
    duration: z.string(),
    year: z.number().optional(),
    collaborators: z.array(z.string()).default([]),
    quote: z.string().optional(),
    summary: z.string(),
    cover: z.string(),
    gallery: z.array(z.object({
      src: z.string(),
      alt: z.string().optional(),
      caption: z.string().optional(),
    })).default([]),
    order: z.number().default(0),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { portfolio };
