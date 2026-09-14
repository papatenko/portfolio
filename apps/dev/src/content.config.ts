import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * CASE STUDIES — each .md file in src/content/case-studies/ becomes a page
 * at /case-studies/<filename>. Frontmatter is validated by this schema, so
 * a typo fails the build with a clear error instead of a broken page.
 */
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    /** <meta name="description"> for this page. Falls back to `summary`. */
    description: z.string().optional(),
    /** Open Graph / Twitter card image for this page. Falls back to /og/default.png. */
    ogImage: z.string().optional(),
    tech: z.array(z.string()),
    repoUrl: z.string().optional(),
    demoUrl: z.string().optional(),
    image: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { 'case-studies': caseStudies };
