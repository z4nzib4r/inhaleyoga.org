// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

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

export default defineConfig({
  site: 'https://www.inhaleyoga.org',
  integrations: [sitemap()],
  redirects: {
    '/general-9': '/sports-orthopedic-acupuncture',
    ...Object.fromEntries(legacyServicePages.map((s) => [`/service-page/${s}`, '/services'])),
    ...Object.fromEntries(legacyPosts.map((s) => [`/post/${s}`, `/blog/${s}`])),
  },
});
