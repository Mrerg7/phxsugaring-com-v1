import { defineCollection, z } from 'astro:content';

const whyPoints = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    order: z.number(),
  }),
});

const benefits = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    order: z.number(),
  }),
});

const useCases = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    order: z.number(),
  }),
});

export const collections = { whyPoints, benefits, useCases };
