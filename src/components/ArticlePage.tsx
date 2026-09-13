import ReadingContent from './ReadingContent'
import type { Piece } from '../content/pieces'

/* A piece at its own address. This is what a search result opens and
   what a link shared anywhere resolves to, so it is a real page rather
   than a copy of the overlay: it carries a way back to the site at the
   top and a signature at the foot, and it ships as static HTML with no
   JavaScript behind it — nothing on it needs any. */
export default function ArticlePage({ piece }: { piece: Piece }) {
  return (
    <div className="grain">
      <header className="mx-auto max-w-2xl px-6 pt-8 sm:px-10">
        <a
          href="/"
          className="draw-underline inline-block pb-1 font-sans text-[13px] uppercase tracking-[0.16em] text-ink/60 transition-colors duration-300 hover:text-moss"
        >
          ← Fernando Zepeda
        </a>
      </header>

      <main>
        <ReadingContent
          title={piece.title}
          subtitle={piece.subtitle}
          sections={piece.sections}
          sourceNote={piece.sourceNote}
        />
      </main>

      <footer className="mx-auto max-w-2xl border-t border-ink/15 px-6 pb-20 pt-8 sm:px-10">
        <p className="font-serif text-[17px] text-ink/70">
          Written by Fernando Zepeda.{' '}
          <a
            href="/"
            className="border-b-2 border-moss/60 text-ink transition-colors duration-300 hover:border-moss hover:text-moss"
          >
            More of what I build, write and think about
          </a>
          .
        </p>
      </footer>
    </div>
  )
}
