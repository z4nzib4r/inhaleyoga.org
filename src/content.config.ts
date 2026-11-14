import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      category: z.string().default('Acupuncture'),
      cover: image(),
      coverAlt: z.string().default(''),
      author: z.string().default('Michelle Stobart, L.Ac.'),
    }),
});

export const collections = { blog };
