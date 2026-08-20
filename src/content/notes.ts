/* Short pieces read on the site. Markdown files in ./notes/ are bundled
   at build time — the Notion pipeline (Phase 3) commits into that folder
   and nothing here changes. */

export type Note = {
  slug: string
  title: string
  date: string
  paragraphs: string[]
  /* When set, the note is a blurb for a longer on-site essay: the row
     shows a "Read the full piece →" link that opens it in the reader.
     Value is a key into essaysBySlug (src/content/essays.ts). */
  essay?: string
}

const files = import.meta.glob('./notes/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function parseNote(raw: string): Note | null {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
  if (!match) return null
  const [, front, body] = match

  const meta: Record<string, string> = {}
  for (const line of front.split('\n')) {
    const i = line.indexOf(':')
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim()
  }
  if (!meta.title || !meta.slug) return null

  const paragraphs = body
    .split(/\n\s*\n/)
    .map((p) => p.replace(/\n/g, ' ').trim())
    .filter(Boolean)

  return {
    slug: meta.slug,
    title: meta.title,
    date: meta.date ?? '',
    paragraphs,
    ...(meta.essay ? { essay: meta.essay } : {}),
  }
}

export const notes: Note[] = Object.values(files)
  .map(parseNote)
  .filter((n): n is Note => n !== null)
  .sort((a, b) => b.date.localeCompare(a.date))

/* Render *italics* and [links](url) inside a paragraph. */
export function renderInline(text: string): (string | { em: string } | { link: string; href: string })[] {
  const parts: (string | { em: string } | { link: string; href: string })[] = []
  const re = /\*([^*]+)\*|\[([^\]]+)\]\(([^)]+)\)/g
  let last = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(text.slice(last, m.index))
    if (m[1] !== undefined) parts.push({ em: m[1] })
    else parts.push({ link: m[2], href: m[3] })
    last = m.index + m[0].length
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts
}
