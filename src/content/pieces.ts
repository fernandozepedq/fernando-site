import type { EssaySection } from './aboutEssay'
import { essaysBySlug } from './essays'
import { writeupsBySlug } from './projectWriteups'

/* The long-form pieces that get their own URL and a static page built
   at deploy time.

   Why they need one: on the site every piece opens in a portaled
   overlay, and React cannot render a portal on the server — so none of
   this text exists in the HTML a crawler is first handed. Giving each
   piece a real address fixes that properly rather than by trickery, and
   it is better for readers too: a search result lands on the piece
   itself instead of on a homepage that has to be clicked twice.

   The list is written out by hand on purpose. essaysBySlug also holds
   three pieces Fernando pulled down to revise, and iterating the record
   would quietly republish them. Adding a piece here is the deliberate
   act of publishing it. */

export type Piece = {
  /* URL path, no leading or trailing slash */
  path: string
  title: string
  subtitle?: string
  sections: EssaySection[]
  sourceNote?: string
  /* Meta description — the subtitle where there is one, otherwise the
     opening line, trimmed at a word boundary. */
  description: string
  /* First figure in the piece, used as the social card */
  image?: string
}

const IMAGE = /^!\[([^\]]*)\]\(([^)]+)\)$/

function firstProse(sections: EssaySection[]): string {
  for (const s of sections) {
    for (const p of s.paragraphs) {
      if (!IMAGE.test(p) && !p.startsWith('> ')) return p
    }
  }
  return ''
}

function firstImage(sections: EssaySection[]): string | undefined {
  for (const s of sections) {
    for (const p of s.paragraphs) {
      const m = p.match(IMAGE)
      if (m) return m[2]
    }
  }
  return undefined
}

/* Meta descriptions are cut around 155 characters; trimming mid-word
   looks like a bug, so it backs up to the last space. */
function clamp(text: string, max = 155): string {
  const plain = text.replace(/\*([^*]+)\*/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
  if (plain.length <= max) return plain
  const cut = plain.slice(0, max)
  return cut.slice(0, cut.lastIndexOf(' ')) + '…'
}

function piece(path: string, source: { title: string; subtitle?: string; sections: EssaySection[]; sourceNote?: string }): Piece {
  return {
    path,
    title: source.title,
    subtitle: source.subtitle,
    sections: source.sections,
    sourceNote: source.sourceNote,
    description: clamp(source.subtitle || firstProse(source.sections)),
    image: firstImage(source.sections),
  }
}

export const pieces: Piece[] = [
  piece('writing/ten-lessons-poseidon-fellowship', essaysBySlug['ten-lessons-poseidon-fellowship']),
  piece('writing/how-i-think', essaysBySlug['how-i-think']),
  piece('projects/danos-detailing', writeupsBySlug['danos-detailing']),
  piece('projects/investment-thesis', writeupsBySlug['investment-thesis']),
]

/* Where each piece lives, keyed by the slug the site already uses.
   The buttons that open a piece in the reader carry this as a real
   href, so a crawler can follow a link to the page instead of relying
   on the sitemap alone — and a reader can cmd-click it like any link.
   Derived from `pieces`, so a page and its link can never disagree. */
export const pieceUrl: Record<string, string> = Object.fromEntries(
  pieces.map((p) => [p.path.split('/')[1], `/${p.path}/`]),
)
