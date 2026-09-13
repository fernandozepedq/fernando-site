import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

/* The Batman Gauntlet full-build page. Not a route — a full-screen
   view portaled to <body>, opened from the Projects row (same pattern
   as the About essay and film lightbox). Concise showcase register:
   let the object be the hero, whitespace is the design. */

const YT_ID = 'wIhVIA2VscY'

/* An image tile that degrades to a labeled placeholder until the real
   photo is dropped into public/images/gauntlet/. */
function Plate({
  src,
  alt,
  caption,
  className = '',
  ratio = 'aspect-[4/5]',
  position = 'center',
  fit = 'cover',
}: {
  src: string
  alt: string
  caption?: string
  className?: string
  ratio?: string
  position?: string
  fit?: 'cover' | 'contain'
}) {
  const [failed, setFailed] = useState(false)
  return (
    <figure className={className}>
      <div className={`relative ${ratio} w-full overflow-hidden bg-haze`}>
        {!failed && (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            onError={() => setFailed(true)}
            style={{ objectPosition: position }}
            className={`absolute inset-0 h-full w-full ${fit === 'contain' ? 'object-contain' : 'object-cover'}`}
          />
        )}
        {failed && (
          <span className="absolute inset-0 flex items-center justify-center px-4 text-center font-sans text-[12px] uppercase tracking-[0.14em] text-ink/35">
            {alt}
          </span>
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 font-sans text-[14px] leading-relaxed text-ink/70">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

const subsystems = [
  {
    src: '/images/gauntlet/blade.jpg',
    alt: 'Blade retraction',
    title: 'Blade retraction',
    caption: 'Servo-actuated spikes that deploy in stages.',
    position: 'center 42%',
  },
  {
    src: '/images/gauntlet/spikes-retracted.jpg',
    alt: 'Motion sensing',
    title: 'Motion sensing',
    caption: 'Accelerometer fires the spikes on an arm thrust.',
    position: 'center 32%',
  },
  {
    src: '/images/gauntlet/interface.jpg',
    alt: 'The interface',
    title: 'The interface',
    caption: 'LCD readout, LED indicators, buzzer, soft-potentiometer input.',
    position: 'center 45%',
  },
  {
    src: '/images/gauntlet/electronics.jpg',
    alt: 'Electronics & code',
    title: 'Electronics & code',
    caption: 'Arduino Micro, hand-soldered, 3D-printed mounts for every component.',
    position: 'center 45%',
  },
]

export default function GauntletBuild({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [playing, setPlaying] = useState(false)

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

  // Reset the film to its poster whenever the page closes
  useEffect(() => {
    if (!open) setPlaying(false)
  }, [open])

  if (!mounted) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[95] overflow-y-auto bg-cream"
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
      aria-label="Batman Gauntlet — full build"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="fixed right-7 top-6 z-10 font-serif text-[42px] font-light leading-none text-ink/55 transition-colors duration-300 hover:text-moss sm:right-16 sm:top-8 sm:text-[58px]"
      >
        ×
      </button>

      <div className="mx-auto max-w-4xl px-6 pb-28 pt-24 sm:px-10 sm:pt-28">
        {/* 1. Title block */}
        <h1
          className="font-serif font-semibold leading-[1.05] text-ink"
          style={{ fontSize: 'clamp(40px, 8vw, 84px)' }}
        >
          Batman Gauntlet
        </h1>
        <p
          className="mt-5 max-w-2xl font-serif italic text-sage"
          style={{ fontSize: 'clamp(18px, 2.4vw, 24px)', lineHeight: 1.5 }}
        >
          A fully 3D printed forearm gauntlet I took from a notebook sketch to a
          working build.
        </p>

        {/* 2. Hero image */}
        <Plate
          src="/images/gauntlet/hero.jpg"
          alt="Gauntlet on the wrist, spikes extended"
          ratio="aspect-[3/2]"
          position="center 62%"
          className="mt-12"
        />

        {/* 3. The statement */}
        <p
          className="mx-auto mt-16 max-w-2xl text-center font-serif font-light text-ink"
          style={{ fontSize: 'clamp(20px, 2.8vw, 28px)', lineHeight: 1.5 }}
        >
          Turn the potentiometer and the spikes deploy in stages. Thrust your arm
          and the accelerometer fires them. LEDs, an LCD readout, and a buzzer are
          built into the housing.
        </p>

        {/* 4. Film — click to load, never autoplays on open */}
        <div className="mt-16">
          <div className="relative aspect-video w-full overflow-hidden bg-ink">
            {playing ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${YT_ID}?autoplay=1&rel=0`}
                title="Batman Gauntlet film"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label="Play the Batman Gauntlet film"
                className="group absolute inset-0 flex items-center justify-center"
              >
                <img
                  src="/images/gauntlet/film-poster.jpg"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                  style={{ objectPosition: 'center 64%' }}
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-90"
                />
                <span className="relative flex h-16 w-16 items-center justify-center rounded-full border border-cream/70 bg-ink/30 transition-transform duration-300 group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-cream" aria-hidden="true">
                    <path d="M8 5.5v13l11-6.5-11-6.5Z" />
                  </svg>
                </span>
              </button>
            )}
          </div>
        </div>

        {/* 5. Subsystem gallery — two-column on desktop, stacked on mobile */}
        <div className="mt-20 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
          {subsystems.map((s) => (
            <div key={s.title}>
              <Plate
                src={s.src}
                alt={s.alt}
                ratio="aspect-[4/5]"
                position={s.position ?? 'center'}
              />
              <h3 className="mt-4 font-serif text-[19px] font-medium text-ink">
                {s.title}
              </h3>
              <p className="mt-1 font-sans text-[14px] leading-relaxed text-ink/65">
                {s.caption}
              </p>
            </div>
          ))}
        </div>

        {/* The CAD render — full-width landscape frame matching the render's
            own shape, so it fills edge to edge with no border and no crop */}
        <Plate
          src="/images/gauntlet/retraction.png"
          alt="Blade retraction — CAD render"
          caption="Blade retraction mechanism, modeled in Onshape. Elastics pull the spikes back the moment the servo releases."
          ratio="aspect-[7/5]"
          className="mt-16"
        />

        {/* The assembled object, off the wrist. Portrait frame matched to
            the photo's own shape so it shows whole — zoomed out, no border. */}
        <Plate
          src="/images/gauntlet/object.jpg"
          alt="The gauntlet off the wrist"
          caption="The assembled gauntlet, off-wrist."
          ratio="aspect-[3/4]"
          className="mx-auto mt-12 max-w-md"
        />

        {/* 6. Build notes */}
        <p
          className="mx-auto mt-20 max-w-2xl font-serif font-light text-ink/85"
          style={{ fontSize: 'clamp(17px, 2vw, 19px)', lineHeight: 1.75 }}
        >
          Designed in Onshape, circuits modeled in CircuitLab, printed on a Prusa,
          soldered by hand, and coded in Arduino C++.
        </p>

        {/* 7. Close */}
        <div className="mt-20 border-t border-ink/10 pt-10">
          <button
            type="button"
            onClick={onClose}
            className="draw-underline mt-6 inline-block pb-1 font-serif text-[17px] text-ink transition-colors duration-300 hover:text-moss"
          >
            ← Back to projects
          </button>
        </div>
      </div>
    </div>,
    document.body,
  )
}
