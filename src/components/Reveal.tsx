import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  delay?: number
  className?: string
}

/* Scroll fade-up without a JS animation loop. One shared
   IntersectionObserver flips a class; the browser's compositor runs the
   CSS transition off the main thread — scrolling and input never wait
   on it (the framer-motion version starved clicks/hovers mid-scroll). */

let observer: IntersectionObserver | null = null

function getObserver(): IntersectionObserver {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer!.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '-60px' },
    )
  }
  return observer
}

export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = getObserver()
    io.observe(el)
    return () => io.unobserve(el)
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${className ?? ''}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  )
}
