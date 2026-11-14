# Inhale Wellness Studio: inhaleyoga.org

Static Astro rebuild of the Inhale Wellness Studio site (previously on Wix).

## Develop

```sh
nvm use          # Node 22.23.4+ (Astro 7 requirement; see .nvmrc)
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npx astro check  # type-check
```

## Where things live

| What | Where |
| --- | --- |
| Phone, email, address, socials, nav, form endpoint | `src/data/site.ts` |
| Services & prices, conditions, FAQs, testimonials | `src/data/content.ts` |
| Blog posts (Markdown) | `src/content/blog/*.md` |
| Colors, type, buttons (design tokens) | `src/styles/global.css` |
| Images (auto-optimized to WebP at build) | `src/assets/` |

**New blog post:** add a `.md` file to `src/content/blog/` with `title`, `description`, `date`, and `cover` (a path into `src/assets/`). Copy an existing post's frontmatter as a starting point.

## Contact form

With `formEndpoint` empty in `src/data/site.ts`, submitting opens the visitor's email app with the message pre-filled. To receive submissions directly, create a form at Formspree/Basin/etc. and paste its POST URL into `formEndpoint`.

Service cards link to `/contact?service=…`, which pre-selects that service in the form.

## Old URLs

Redirects for the old Wix paths (`/general-9`, `/service-page/*`, `/post/*`) are in `astro.config.mjs`, so existing links and search results keep working.
