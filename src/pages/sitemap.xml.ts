import { siteFromHost } from '../content';

const pageModules = import.meta.glob('./**/*.astro');

export async function GET() {
  const site = siteFromHost();
  const base = `https://www.${site.domain}`;
  const paths = Object.keys(pageModules)
    .filter((p) => !p.includes('/sitemap') && !p.includes('['))
    .map((p) => {
      let route = p.replace(/^\.\//, '').replace(/\.astro$/, '');
      if (route === 'index') route = '';
      else if (route.endsWith('/index')) route = route.slice(0, -'/index'.length);
      return route;
    })
    .sort();
  const urls = paths
    .map((p) => {
      const loc = p ? `${base}/${p}` : base;
      const priority = p === '' ? '1.0' : p.includes('/') ? '0.7' : '0.85';
      return `  <url><loc>${loc}</loc><lastmod>2026-07-08</lastmod><changefreq>weekly</changefreq><priority>${priority}</priority></url>`;
    })
    .join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`,
    { headers: { 'content-type': 'application/xml; charset=utf-8' } }
  );
}
