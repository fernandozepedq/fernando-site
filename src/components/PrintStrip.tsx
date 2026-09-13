import { useState } from 'react'
import type { TravelPhoto } from '../content/travel'

/* The photographs as prints on a slow strip. Each is a cream matte with
   the place and year typed on the foot; the strip runs edge to edge,
   fades at both sides, and drifts continuously. The set is doubled so
   the loop has no seam; the second copy is hidden from assistive tech.

   It pauses under a cursor, and the Pause control does the same for a
   keyboard or a thumb — content that moves on its own for more than a
   few seconds has to be stoppable by everyone, not only by a mouse.
   Under reduced motion the strip stands still, scrolls by hand, and the
   control is hidden because there is nothing to pause. */
function Print({ photo }: { photo: TravelPhoto }) {
  return (
    <figure className="print">
      <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
      <figcaption className="print-cap">
        <span>{photo.location}</span>
        <span>{photo.year}</span>
      </figcaption>
    </figure>
  )
}

export default function PrintStrip({ photos }: { photos: TravelPhoto[] }) {
  const [paused, setPaused] = useState(false)

  return (
    <>
      <div className={`print-strip${paused ? ' is-paused' : ''}`}>
        <div className="print-track">
          {photos.map((p) => (
            <Print key={p.src} photo={p} />
          ))}
          <div className="print-track-copy" aria-hidden="true">
            {photos.map((p) => (
              <Print key={`${p.src}-copy`} photo={p} />
            ))}
          </div>
        </div>
      </div>

      <div className="print-controls">
        <button
          type="button"
          className="print-toggle"
          onClick={() => setPaused((v) => !v)}
          aria-label={paused ? 'Play the photographs' : 'Pause the photographs'}
        >
          <span>{paused ? 'Play' : 'Pause'}</span>
        </button>
      </div>
    </>
  )
}
