/** Prefix a root-relative path with the configured base (e.g. "/inhaleyoga.org" on the GitHub Pages preview). */
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path: string) => base + path;

/** Strip the base from a pathname so it can be compared with root-relative hrefs. */
export const unbase = (pathname: string) => pathname.slice(base.length) || '/';
