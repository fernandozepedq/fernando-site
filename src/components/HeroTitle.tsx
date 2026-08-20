import { useEffect, useState } from 'react'

/* Masked line rise (yourbana.com): each line of the name sits inside an
   overflow-hidden mask, starts below it, and slides up on a long
   decelerating curve — line two a beat behind. Plain text + transform,
   so it can never produce stroke artifacts and is free to composite. */

export function useHeroReady(): boolean {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const failsafe = setTimeout(() => setReady(true), 1500)
    document.fonts
      .load('600 140px "Cormorant Variable"')
      .then(() => {
        clearTimeout(failsafe)
        setReady(true)
      })
      .catch(() => setReady(true))
    return () => clearTimeout(failsafe)
  }, [])

  return ready
}

export default function HeroTitle() {
  return (
    <h1 className="hero-title text-center" aria-label="Fernando Zepeda">
      {['Fernando', 'Zepeda'].map((word, i) => (
        <span key={word} className="hero-line" aria-hidden="true">
          <span className="hero-line-inner" style={{ transitionDelay: `${i * 0.14}s` }}>
            {word}
          </span>
        </span>
      ))}
    </h1>
  )
}
