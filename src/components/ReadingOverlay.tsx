import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import type { EssaySection } from '../content/aboutEssay'

/* A full-screen reading view — not an inline expand. Long-form pieces
   (the About essay, eventually project deep-dives) get their own quiet
   page instead of unfolding inside a section and throwing off its
   rhythm. Portaled to <body> like the film lightbox; Escape closes,
   body scroll locks while open. */
export default function ReadingOverlay({
  open,
  onClose,
  title,
  sections,
  sourceNote,
}: {
  open: boolean
  onClose: () => void
  title: string
  sections: EssaySection[]
  sourceNote?: string
}) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  return createPortal(
    <div
      className="fixed inset-0 z-[95] overflow-y-auto bg-bone"
      style={{
        opacity: open ? 1 : 0,
        visibility: open ? 'visible' : 'hidden',
        pointerEvents: open ? 'auto' : 'none',
        transitionProperty: 'opacity, visibility',
        transitionDuration: '400ms',
        transitionDelay: open ? '0ms, 0ms' : '150ms, 400ms',
      }}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="fixed right-7 top-6 z-10 font-serif text-[42px] font-light leading-none text-ink/55 transition-colors duration-300 hover:text-moss sm:right-16 sm:top-8 sm:text-[58px]"
      >
        ×
      </button>

      <div className="mx-auto max-w-2xl px-6 pb-28 pt-24 sm:px-10 sm:pt-28">
        <h2 className="title-face text-ink" style={{ fontSize: 'clamp(28px, 6vw, 46px)' }}>
          {title}
        </h2>

        {sections.map((s, si) => (
          <div key={s.heading ?? si} className="mt-11 first:mt-10">
            {s.heading && (
              <h3
                className="font-serif font-medium italic text-moss"
                style={{ fontSize: 'clamp(19px, 2.8vw, 24px)' }}
              >
                {s.heading}
              </h3>
            )}
            {s.paragraphs.map((p, i) => (
              <p
                key={i}
                className="mt-6 font-serif font-medium text-ink first:mt-6"
                style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', lineHeight: 1.7 }}
              >
                {p}
              </p>
            ))}
          </div>
        ))}

        {sourceNote && (
          <p className="mt-14 border-t border-ink/10 pt-6 font-serif text-[13px] italic leading-relaxed text-ink/45">
            {sourceNote}
          </p>
        )}
      </div>
    </div>,
    document.body,
  )
}
