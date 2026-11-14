// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { fileURLToPath } from 'node:url';

// Old Wix URLs → new routes, so existing links and search results keep working.
const legacyServicePages = [
  'acupuncture-initial-visit',
  'acupuncture-basic',
  'acupuncture-plus',
  'acupuncture-premium',
  'orthopedic-acupuncture',
  'thai-bliss-relaxation-treatment',
  'thai-bliss-with-cupping',
  '30-minute-cupping-therapy-package',
  '45-minute-cupping-therapy-package',
  'basic-reflexology',
  'reflexology-cupping',
  'wellness-coaching-with-angela',
  'wellness-coaching-follow-up-sessions',
];

const legacyPosts = [
  'acupuncture-frequently-asked-questions',
  'acupuncture-in-athens-ohio-for-back-pain-neck-pain-and-sports-injuries-inhale-wellness-studio',
  'electro-acupuncture-sports-orthopedic-acupuncture',
];

const base = (process.env.BASE_PATH ?? '').replace(/\/$/, '');

/**
 * Safety net for content we don't control in components (e.g. Markdown `[..](/contact)` links):
 * after a base-path build, prefix any remaining root-relative href/src with the base.
 */
const baseLinks = {
  name: 'base-links',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      if (!base) return;
      const { readdir, readFile, writeFile } = await import('node:fs/promises');
      const root = fileURLToPath(dir);
      const pattern = new RegExp(`(href|src)="/(?!/|${base.slice(1)}/)`, 'g');
      for (const file of await readdir(root, { recursive: true })) {
        if (!file.endsWith('.html')) continue;
        const path = `${root}/${file}`;
        const html = await readFile(path, 'utf8');
        const fixed = html.replace(pattern, `$1="${base}/`);
        if (fixed !== html) await writeFile(path, fixed);
      }
    },
  },
};

export default defineConfig({
  // Defaults to the real domain; the GitHub Pages preview build overrides these (see .github/workflows/deploy.yml).
  site: process.env.SITE_URL ?? 'https://www.inhaleyoga.org',
  base: base || '/',
  integrations: [sitemap(), baseLinks],
  redirects: {
    '/general-9': `${base}/sports-orthopedic-acupuncture`,
    ...Object.fromEntries(legacyServicePages.map((s) => [`/service-page/${s}`, `${base}/services`])),
    ...Object.fromEntries(legacyPosts.map((s) => [`/post/${s}`, `${base}/blog/${s}`])),
  },
});
