import type { TravelPhoto } from '../content/travel'

/* The photographs as prints on a slow strip. Each is a cream matte with
   the place and year typed on the foot; the strip runs edge to edge,
   fades at both sides, and drifts continuously — pausing under the
   cursor. The set is doubled so the loop has no seam; the second copy
   is hidden from assistive tech. Under reduced motion the strip stands
   still and scrolls by hand. */
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
  return (
    <div className="print-strip">
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
  )
}
