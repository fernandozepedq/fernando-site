import { useEffect, useRef } from 'react'
import HeroTitle, { useHeroReady } from '../components/HeroTitle'
import { heroArtwork } from '../content/site'

export default function Hero() {
  const ready = useHeroReady()
  const artRef = useRef<HTMLElement>(null)

  /* Scroll parallax — the plate recedes at half the page's speed, so
     leaving the landing feels like pulling away from a wall rather than
     sliding a flat sheet. One rAF-throttled listener writing a single
     compositor transform; the drift animation lives on the img inside,
     so the two motions never fight. */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = artRef.current
    if (!el) return
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const y = Math.min(window.scrollY, window.innerHeight * 1.2)
        el.style.transform = `translate3d(0, ${y * 0.45}px, 0)`
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section
      id="top"
      className={`relative flex min-h-screen flex-col overflow-hidden ${ready ? 'hero-ready' : ''}`}
    >
      {/* The plate — fades in first, fills the viewport. The picture
          carries the parallax; the img inside carries the slow drift. */}
      <picture ref={artRef} className="hero-art" aria-hidden="true">
        <source media="(max-width: 640px)" srcSet={heroArtwork.mobileSrc} />
        <img src={heroArtwork.src} alt="" decoding="async" />
      </picture>

      {/* Faint veil only where the name sits, so the plate stays present */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 78% 56% at 50% 48%, rgba(233,229,216,0.46) 0%, rgba(233,229,216,0.2) 55%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative flex flex-1 flex-col items-center justify-center px-6 pt-20 sm:px-10">
        <HeroTitle />
      </div>
    </section>
  )
}
