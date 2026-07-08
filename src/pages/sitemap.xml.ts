import { allPaths, siteFromHost } from '../content';

export async function GET() {
  const site = siteFromHost();
  const base = `https://www.${site.domain}`;
  const paths = allPaths();
  const urls = paths
    .map((path) => {
      const loc = path ? `${base}/${path}` : base;
      const priority = path === '' ? '1.0' : path.includes('/') ? '0.7' : '0.85';
      return `  <url><loc>${loc}</loc><lastmod>2026-07-08</lastmod><changefreq>weekly</changefreq><priority>${priority}</priority></url>`;
    })
    .join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`,
    { headers: { 'content-type': 'application/xml; charset=utf-8' } }
  );
}
