import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import type { EssaySection } from '../content/aboutEssay'
import ReadingContent from './ReadingContent'

/* A full-screen reading view — not an inline expand. Long-form pieces
   get their own quiet page instead of unfolding inside a section and
   throwing off its rhythm. Portaled to <body> like the film lightbox;
   Escape closes, body scroll locks while open.

   The article markup itself lives in ReadingContent, shared with the
   standalone pages generated at build time. */

export default function ReadingOverlay({
  open,
  onClose,
  title,
  subtitle,
  sections,
  sourceNote,
}: {
  open: boolean
  onClose: () => void
  title: string
  subtitle?: string
  sections: EssaySection[]
  sourceNote?: string
}) {
  /* Portals take part in hydration, so a `typeof document` branch is a
     server/client mismatch, not a fix for one — React names that exact
     pattern in its hydration error. Instead the first client render
     matches the server by rendering nothing, and the portal mounts one
     effect later. The overlay is closed at that point, so nothing moves
     on screen. */
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

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

  if (!mounted) return null

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
      {/* Sits on a bone disc: the reading view runs full-bleed photos,
          and a bare glyph vanished against the darker ones. */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="fixed right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-bone/85 font-serif text-[26px] font-light leading-none text-ink/60 backdrop-blur-sm transition-colors duration-300 hover:text-moss sm:right-8 sm:top-8"
      >
        ×
      </button>

      <ReadingContent
        title={title}
        subtitle={subtitle}
        sections={sections}
        sourceNote={sourceNote}
      />
    </div>,
    document.body,
  )
}
