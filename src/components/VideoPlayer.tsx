import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import type { TravelFilm } from '../content/travel'

/* Poster pops on hover; clicking opens the film in a chromeless
   lightbox — no native control bar, no overflow menu, just the film,
   click-to-pause, and a large × to leave. No video bytes load until
   the lightbox opens. */
export default function VideoPlayer({ film }: { film: TravelFilm }) {
  const [open, setOpen] = useState(false)
  // Where the zoom starts — captured from the poster's position on click
  const [origin, setOrigin] = useState<{ dx: number; dy: number; s: number } | null>(null)
  const [entered, setEntered] = useState(false)

  // One frame after the lightbox mounts at the poster's position, release
  // it — the transition carries you from the card into the screen.
  useEffect(() => {
    if (!open) return
    const t = setTimeout(() => setEntered(true), 30)
    return () => {
      clearTimeout(t)
      setEntered(false)
    }
  }, [open])

  // Escape closes; the page behind doesn't scroll while watching.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <figure>
      <button
        type="button"
        onClick={(e) => {
          const r = e.currentTarget.getBoundingClientRect()
          setOrigin({
            dx: r.left + r.width / 2 - window.innerWidth / 2,
            dy: r.top + r.height / 2 - window.innerHeight / 2,
            s: Math.max(r.width / window.innerWidth, 0.18),
          })
          setOpen(true)
        }}
        aria-label={`Watch ${film.title}`}
        className="group relative block aspect-[4/3] w-full overflow-hidden bg-ink transition-transform duration-500 ease-out hover:scale-[1.02]"
      >
        <img
          src={film.poster}
          alt=""
          loading="lazy"
          decoding="async"
          style={film.posterPosition ? { objectPosition: film.posterPosition } : undefined}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-cream/70 bg-ink/30 transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-cream" aria-hidden="true">
              <path d="M8 5.5v13l11-6.5-11-6.5Z" />
            </svg>
          </span>
        </span>
      </button>

      <figcaption className="mt-3 flex items-baseline justify-between">
        <span className="font-serif text-[17px] font-medium text-ink">{film.title}</span>
        <span className="eyebrow">{film.duration}</span>
      </figcaption>

      {/* Lightbox — portaled to <body>: the travel section is inside a
          content-visibility containment context, which would otherwise
          clip a position:fixed overlay to the section's own box. */}
      {open &&
        createPortal(
          <div
            className="film-zoom fixed inset-0 z-[70] bg-ink/95"
            style={{
              opacity: entered ? 1 : 0,
              transition: 'opacity 0.45s ease',
            }}
            onClick={() => setOpen(false)}
            role="dialog"
            aria-label={film.title}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close film"
              className="absolute right-6 top-5 z-10 font-serif text-[44px] font-light leading-none text-cream/80 transition-transform duration-300 hover:rotate-90 hover:text-cream"
            >
              ×
            </button>

            {/* The screen flies in from the poster you clicked */}
            <div
              className="film-zoom flex h-full w-full items-center justify-center px-4 py-10 sm:px-10"
              style={{
                transform:
                  entered || !origin
                    ? 'none'
                    : `translate(${origin.dx}px, ${origin.dy}px) scale(${origin.s})`,
                transition: 'transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              <video
                ref={(el) => {
                  el?.play().catch(() => {})
                }}
                src={film.src}
                playsInline
                loop
                onClick={(e) => {
                  e.stopPropagation()
                  const v = e.currentTarget
                  if (v.paused) v.play()
                  else v.pause()
                }}
                className="max-h-full w-auto max-w-full cursor-pointer shadow-2xl"
              />
            </div>
          </div>,
          document.body,
        )}
    </figure>
  )
}
