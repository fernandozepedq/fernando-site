import { useEffect, useRef, useState } from 'react'
import type { TravelFilm } from '../content/travel'

/* A film in a cinematic frame. It plays, silently, the moment it comes
   into view and pauses when it leaves — the film is the thing on the
   page, not a thumbnail for one. The still holds the frame until the
   first real frame is ready, and stands in entirely where autoplay is
   refused (iOS Low Power Mode, reduced motion), so tapping the frame
   also plays. Sound and full screen are the two things a visitor
   actually wants, so they are the two controls.

   Nothing here depends on hover. */
export default function VideoPlayer({ film }: { film: TravelFilm }) {
  const frameRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  /* The preview bytes attach only once the frame is near the viewport —
     nothing downloads for a section the visitor never reaches. */
  const attach = () => {
    const v = videoRef.current
    if (v && !v.src) {
      v.src = film.preview
      v.load()
    }
  }

  /* `muted` is a DOM property, not an attribute. React never writes it
     on the client, but the server renderer emits muted="" — so shipping
     it as JSX makes every prerendered page fail hydration. Setting it
     once on mount keeps both sides identical, and it lands long before
     anything can call play(), so autoplay is still permitted. */
  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = true
  }, [])

  useEffect(() => {
    const frame = frameRef.current
    const v = videoRef.current
    if (!frame || !v) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.45) {
          if (reduce) return
          attach()
          v.play().catch(() => {})
        } else if (!v.paused) {
          v.pause()
        }
      },
      { threshold: [0, 0.45, 1] },
    )
    io.observe(frame)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggle = () => {
    const v = videoRef.current
    if (!v) return
    attach()
    if (v.paused) v.play().catch(() => {})
    else v.pause()
  }

  const toggleSound = () => {
    const v = videoRef.current
    if (!v) return
    attach()
    v.muted = !v.muted
    setMuted(v.muted)
    if (v.paused) v.play().catch(() => {})
  }

  /* Full screen plays the full-quality file with sound. Swapping the
     source mid-play restarts from the top, which is what "watch the
     film" should do anyway. */
  const fullScreen = () => {
    const v = videoRef.current
    if (!v) return
    if (v.src !== new URL(film.src, window.location.href).href) {
      v.src = film.src
      v.load()
    }
    v.muted = false
    setMuted(false)
    const el = v as HTMLVideoElement & { webkitEnterFullscreen?: () => void }
    if (el.requestFullscreen) el.requestFullscreen().catch(() => {})
    else el.webkitEnterFullscreen?.()
    v.play().catch(() => {})
  }

  return (
    <article
      ref={frameRef}
      className={`film-reel${playing ? ' is-playing' : ''}`}
      aria-label={`${film.title}, ${film.duration}`}
    >
      <img src={film.still} alt="" loading="lazy" decoding="async" className="film-reel-still" />
      <video
        ref={videoRef}
        playsInline
        loop
        preload="none"
        poster={film.still}
        onPlaying={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="film-reel-video"
      />
      <div className="film-reel-scrim" aria-hidden="true" />

      {/* The whole frame is the play/pause surface; the controls sit on
          top and stop the click from reaching it. */}
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? `Pause ${film.title}` : `Play ${film.title}`}
        className="film-reel-surface"
      >
        <span className="film-reel-glyph" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M8 5.5v13l11-6.5-11-6.5Z" />
          </svg>
        </span>
      </button>

      <span className="film-reel-year">{film.year}</span>

      <div className="film-reel-lockup">
        {/* Title alone — the place names are kept in the content for
            captions and metadata, but over the picture they were one
            line too many. */}
        <h3 className="film-reel-title">{film.title}</h3>
        <div className="film-reel-ctl">
          <span className="film-reel-dur">{film.duration}</span>
          <button
            type="button"
            onClick={toggleSound}
            aria-pressed={!muted}
            className="film-reel-pill"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 9v6h4l5 4V5L8 9H4zm12.5 3a4.5 4.5 0 0 0-2.5-4v8a4.5 4.5 0 0 0 2.5-4z" />
            </svg>
            {muted ? 'Sound' : 'Mute'}
          </button>
          <button type="button" onClick={fullScreen} className="film-reel-pill">
            Full screen
          </button>
        </div>
      </div>
    </article>
  )
}
