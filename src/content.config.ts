import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const setupToolSchema = z.object({
  id: z.string(),
  label: z.string(),
  title: z.string(),
  instructions: z.array(z.string()),
  resources: z.array(z.object({
    label: z.string(),
    url: z.string().url(),
  })).default([]),
  command: z.string(),
  outcome: z.string(),
});

const lessons = defineCollection({
  loader: glob({ base: './src/content/lessons', pattern: '**/*.md' }),
  schema: z.object({
    number: z.number().int().min(0),
    title: z.string(),
    summary: z.string(),
    duration: z.string().optional(),
    status: z.enum(['published', 'outline']),
    topics: z.array(z.string()),
    setupTools: z.array(setupToolSchema).optional(),
  }),
});

export const collections = { lessons };
