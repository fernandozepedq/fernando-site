import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

/* Runs after both Vite builds. Three jobs:

     1. Fill <div id="root"> in dist/index.html with the rendered home
        page, so the first HTML a crawler gets is the actual prose
        rather than an empty div.
     2. Write each long-form piece to its own address as static HTML,
        with its own title, description and Article schema.
     3. Write the sitemap from the same list, so it can never drift out
        of step with the pages that actually exist.

   Everything is derived from dist/index.html — the stylesheet and
   script tags Vite emitted are lifted from it rather than hardcoded,
   so a change to the build never silently leaves a page unstyled. */

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = join(ROOT, 'dist')
const ORIGIN = 'https://www.fernandozepeda.me'

const { renderHome, renderPiece, pieces } = await import(join(DIST, '..', 'dist-ssr/entry-server.js'))

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const template = await readFile(join(DIST, 'index.html'), 'utf8')

/* ---- 1. home ---------------------------------------------------- */

const ROOT_DIV = /(<div id="root">)(<\/div>)/
if (!ROOT_DIV.test(template)) {
  throw new Error('prerender: <div id="root"></div> not found in dist/index.html')
}
const home = template.replace(ROOT_DIV, (_m, open, close) => open + renderHome() + close)
await writeFile(join(DIST, 'index.html'), home)

/* ---- 2. article pages ------------------------------------------- */

// Lift the emitted asset tags out of the built page.
const head = template.slice(template.indexOf('<head>'), template.indexOf('</head>'))
const styles = [...head.matchAll(/<link rel="stylesheet"[^>]*>/g)].map((m) => m[0]).join('\n    ')
const preconnects = [...head.matchAll(/<link rel="(?:preconnect|modulepreload)"[^>]*>/g)]
  .map((m) => m[0])
  .join('\n    ')
if (!styles) throw new Error('prerender: no stylesheet link found in dist/index.html')

for (const piece of pieces) {
  const url = `${ORIGIN}/${piece.path}/`
  const image = piece.image ? ORIGIN + piece.image : `${ORIGIN}/images/og-card.jpg`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: piece.title,
    description: piece.description,
    image,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Person', name: 'Fernando Zepeda', url: `${ORIGIN}/` },
  }

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#E9E5D8" />

    <title>${esc(piece.title)} — Fernando Zepeda</title>
    <meta name="description" content="${esc(piece.description)}" />
    <link rel="canonical" href="${url}" />

    <meta property="og:site_name" content="Fernando Zepeda" />
    <meta property="og:title" content="${esc(piece.title)}" />
    <meta property="og:description" content="${esc(piece.description)}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${esc(image)}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(piece.title)}" />
    <meta name="twitter:description" content="${esc(piece.description)}" />
    <meta name="twitter:image" content="${esc(image)}" />

    ${preconnects}
    ${styles}

    <script type="application/ld+json">
${JSON.stringify(schema, null, 6).replace(/^/gm, '      ')}
    </script>
  </head>
  <body>
    ${renderPiece(piece)}
  </body>
</html>
`
  const dir = join(DIST, piece.path)
  await mkdir(dir, { recursive: true })
  await writeFile(join(dir, 'index.html'), html)
}

/* ---- 3. sitemap -------------------------------------------------- */

const urls = [`${ORIGIN}/`, ...pieces.map((p) => `${ORIGIN}/${p.path}/`)]
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u, i) => `  <url>
    <loc>${u}</loc>
    <changefreq>monthly</changefreq>
    <priority>${i === 0 ? '1.0' : '0.8'}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`
await writeFile(join(DIST, 'sitemap.xml'), sitemap)

const homeText = home.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ')
console.log(
  `prerender: home ${homeText.split(/\s+/).filter(Boolean).length} words · ` +
    `${pieces.length} pages · sitemap ${urls.length} urls`,
)
for (const p of pieces) console.log(`  /${p.path}/`)
