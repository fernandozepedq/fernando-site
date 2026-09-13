import type { MouseEvent, ReactNode } from 'react'
import { pieceUrl } from '../content/pieces'

/* The control that opens a long-form piece. It is a real link to the
   piece's own page, not a button: a crawler can follow it, and cmd- or
   middle-clicking opens the page in a new tab the way any link should.
   A plain left click is intercepted and opens the reader instead, so
   nothing changes for someone browsing the site.

   Falls back to a button when the piece has no page of its own. */
export default function OpenPiece({
  slug,
  onOpen,
  className,
  children,
  ariaLabel,
}: {
  slug?: string
  onOpen: () => void
  className?: string
  children: ReactNode
  ariaLabel?: string
}) {
  const href = slug ? pieceUrl[slug] : undefined

  if (!href) {
    return (
      <button type="button" onClick={onOpen} aria-haspopup="dialog" className={className} aria-label={ariaLabel}>
        {children}
      </button>
    )
  }

  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    /* Leave the modified clicks alone — they mean "open the page", and
       taking them over is the thing that makes web apps feel broken.
       Deliberately no `button` check: middle-click fires auxclick rather
       than click, and testing it wrongly swallows activations where the
       property is unset — including keyboard Enter — which sends the
       reader-bound click off to the page instead. */
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    e.preventDefault()
    onOpen()
  }

  return (
    <a href={href} onClick={onClick} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  )
}
