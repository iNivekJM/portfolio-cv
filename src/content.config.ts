import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        techs: z.array(z.string()),
        repoUrl: z.string().optional(),
        liveUrl: z.string().optional(),
        image: z.string().optional(),
        featured: z.boolean().default(false),
        order: z.number().default(99),
    }),
});

export const collections = { projects };
