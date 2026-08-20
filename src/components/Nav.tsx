import { useEffect, useState } from 'react'
import { EmailIcon, LinkedInIcon, SubstackIcon } from './Icons'
import { links } from '../content/site'

const items = [
  { href: '#about', label: 'About' },
  { href: '#writing', label: 'Archive' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

/* No bar. The F.Z. signature sits alone in the corner and unfolds a
   full-screen index — big stacked links rising out of masks (the same
   gesture as the hero name), socials beneath. Built mobile-first: the
   whole viewport is the menu, targets are large. */
export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Over the hero the signature reads light against the plate; once the
  // page scrolls past it, the background turns pale and it flips to moss.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

  // Menu open → moss over the bone overlay; on the hero → light; past it → moss
  const fzColor =
    open || scrolled ? 'text-moss hover:text-ink' : 'text-cream hover:text-bone'

  return (
    <>
      {/* Desktop only — phones are pure scroll, no chrome. The signature
          is the menu button, above the overlay so it also closes it. */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? 'Close menu' : 'Open menu'}
        className={`script fixed z-[90] hidden flex-col items-center px-2 py-1 leading-none transition-colors duration-500 sm:left-8 sm:top-6 sm:inline-flex sm:text-[34px] ${fzColor}`}
      >
        F.Z.
        {/* A calligraphic swash — thick-thin ribbon drawn as a filled
            path. Inherits the initials' color, so it flips with them.
            Hidden on phones: the signature stays a small, quiet mark
            there instead of a content-blocking block. */}
        <svg
          className="fz-flourish hidden sm:block"
          viewBox="0 0 140 32"
          fill="currentColor"
          aria-hidden="true"
        >
          {/* main sweep — a fine ribbon, hairline tips, a whisper of
              weight through the middle */}
          <path d="M 4 24 C 30 8, 74 9, 112 17 C 76 13.6, 34 14.8, 4 24 Z" />
          {/* right curl — tapers to nothing as it spirals under */}
          <path d="M 110.5 16.5 C 121 19.2, 129.5 15.5, 130 9.5 C 130.4 5, 125.5 3.2, 123 6.5 C 121.2 9, 123 12, 126.5 11.3 C 124.5 12.9, 120.5 12.4, 118.3 10 C 119 13.5, 122 15.6, 110.5 16.5 Z" />
          {/* left hairline under-flick */}
          <path d="M 4 24 C 8.5 27, 15 27.4, 20 24.8 C 14.5 26.2, 8.5 25.9, 4 24 Z" />
        </svg>
      </button>

      {/* Full-screen index */}
      <div
        className={`fixed inset-0 z-[80] flex flex-col items-center justify-center bg-bone ${open ? 'menu-open' : ''}`}
        style={{
          opacity: open ? 1 : 0,
          visibility: open ? 'visible' : 'hidden',
          pointerEvents: open ? 'auto' : 'none',
          transitionProperty: 'opacity, visibility',
          transitionDuration: '350ms',
          transitionDelay: open ? '0ms, 0ms' : '150ms, 350ms',
        }}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <nav className="flex flex-col items-center gap-1 sm:gap-2" aria-label="Sections">
          {items.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => {
                // Unlock the scroller before the anchor's default action
                // runs — React's effect cleanup lands a beat too late, and
                // a locked body silently swallows the scroll-to-section.
                document.body.style.overflow = ''
                setOpen(false)
              }}
              className="menu-link-mask index-link px-4 py-1 font-serif font-medium text-ink transition-colors duration-200 hover:text-moss"
              style={{ fontSize: 'clamp(44px, 10vw, 76px)', lineHeight: 1.15 }}
            >
              <span
                className="menu-link-inner"
                style={{ transitionDelay: open ? `${120 + i * 90}ms` : '0ms' }}
              >
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        {/* Socials — large targets, brand color on hover */}
        <div className="mt-12 flex items-center gap-8">
          <a
            href={links.email}
            aria-label="Email"
            className="flex p-2 leading-none text-ink/50 hover:text-moss"
          >
            <EmailIcon className="h-6 w-6" />
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex p-2 leading-none text-ink/50 hover:text-[#0A66C2]"
          >
            <LinkedInIcon className="h-6 w-6" />
          </a>
          <a
            href={links.substack}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Substack"
            className="flex p-2 leading-none text-ink/50 hover:text-[#FF6719]"
          >
            <SubstackIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </>
  )
}
