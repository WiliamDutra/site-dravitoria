import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    metaTitle: z.string().max(65),
    metaDescription: z.string().max(160),
    h1: z.string(),
    excerpt: z.string(),
    cluster: z.string(), // ex.: "Integrativa"
    keyword: z.string().optional(),
    anchorPhrase: z.string().optional(),
    relatedCondition: z.string().optional(), // slug de condição/pilar
    relatedLabel: z.string().optional(),
    emergencyNote: z.boolean().default(false),
    order: z.number().default(99),
    // Datas em ISO (podem ficar vazias até a publicação real).
    datePublished: z.string().optional(),
    dateModified: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
