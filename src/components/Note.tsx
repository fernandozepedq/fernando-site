import { useEffect, useRef, useState } from 'react'
import { renderInline, type Note as NoteType } from '../content/notes'
import { essaysBySlug } from '../content/essays'
import ReadingOverlay from './ReadingOverlay'
import OpenPiece from './OpenPiece'

/* Expandable note row. The body opens with a grid-template-rows 0fr → 1fr
   transition (composited, no JS height measurement). #<slug> in the URL
   opens the note and scrolls to it on load. */
export default function Note({ note }: { note: NoteType }) {
  const [open, setOpen] = useState(false)
  const [essayOpen, setEssayOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const essay = note.essay ? essaysBySlug[note.essay] : undefined

  useEffect(() => {
    if (window.location.hash === `#${note.slug}`) {
      setOpen(true)
      ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }, [note.slug])

  return (
    <div ref={ref} id={note.slug}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="group flex w-full items-baseline justify-between gap-6 py-4 text-left cursor-pointer"
      >
        <span
          className={`font-serif text-[30px] font-semibold leading-[1.15] transition-colors duration-300 sm:text-[35px] ${
            open ? 'text-moss' : 'text-ink group-hover:text-moss'
          }`}
        >
          {note.title}
        </span>
        <span
          className={`font-serif text-[34px] font-light leading-none text-moss transition-transform duration-300 ${
            open ? 'rotate-45' : ''
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div
        className="grid transition-[grid-template-rows] duration-500 ease-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="max-w-xl pb-6 pr-8">
            {note.paragraphs.map((p, i) => (
              <p
                key={i}
                className="mt-3 font-serif font-medium text-ink/85 first:mt-0"
                style={{ fontSize: '18px', lineHeight: 1.7 }}
              >
                {renderInline(p).map((part, j) =>
                  typeof part === 'string' ? (
                    part
                  ) : 'em' in part ? (
                    <em key={j}>{part.em}</em>
                  ) : (
                    <a
                      key={j}
                      href={part.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-b border-moss/40 text-ink transition-colors duration-300 hover:text-moss"
                    >
                      {part.link}
                    </a>
                  ),
                )}
              </p>
            ))}

            {essay && (
              <OpenPiece
                slug={note.essay}
                onOpen={() => setEssayOpen(true)}
                className="draw-underline mt-5 inline-block pb-1 font-serif text-[18px] font-medium text-ink transition-colors duration-300 hover:text-moss"
              >
                Read the full piece →
              </OpenPiece>
            )}
          </div>
        </div>
      </div>

      {essay && (
        <ReadingOverlay
          open={essayOpen}
          onClose={() => setEssayOpen(false)}
          title={essay.title}
          subtitle={essay.subtitle}
          sections={essay.sections}
          sourceNote={essay.sourceNote}
        />
      )}
    </div>
  )
}
