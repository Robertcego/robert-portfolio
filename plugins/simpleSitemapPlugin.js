import { writeFile } from 'fs/promises';
import path from 'path';

export default function simpleSitemapPlugin(options = {}) {
  const {
    hostname = process.env.SITE_URL || 'https://example.com',
    routes = ['/'],
    outDir = 'dist',
    ping = true,
  } = options;

  return {
    name: 'vite-plugin-simple-sitemap',
    async closeBundle() {
      const urls = routes
        .map((route) => `<url><loc>${hostname}${route}</loc></url>`) 
        .join('\n');
      const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
      await writeFile(path.join(outDir, 'sitemap.xml'), xml, 'utf8');

      if (ping) {
        const sitemapUrl = `${hostname}/sitemap.xml`;
        const pingUrls = [
          `https://www.google.com/ping?sitemap=${sitemapUrl}`,
          `https://www.bing.com/ping?sitemap=${sitemapUrl}`,
        ];

        for (const url of pingUrls) {
          try {
            await fetch(url);
          } catch (err) {
            console.warn(`Failed to ping ${url}:`, err.message);
          }
        }
      }
    },
  };
}
