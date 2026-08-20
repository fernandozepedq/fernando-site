import { useState } from 'react'
import Reveal from '../components/Reveal'
import VideoPlayer from '../components/VideoPlayer'
import { films, photos } from '../content/travel'
import type { TravelPhoto } from '../content/travel'

/* B/W at rest, illuminates to color on hover and stays lit. Borderless;
   the place it was taken sits beneath. */
function Photo({ photo }: { photo: TravelPhoto }) {
  const [lit, setLit] = useState(false)
  return (
    <figure>
      <div
        onMouseEnter={() => setLit(true)}
        className={`photo-frame relative aspect-[4/5] w-full overflow-hidden ${lit ? 'lit' : ''}`}
      >
        <img
          src={photo.bwSrc}
          alt={photo.alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <img
          src={photo.src}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="photo-color absolute inset-0 h-full w-full object-cover"
        />
        {/* The city printed on the photo, postcard-style — bold serif caps */}
        <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 via-ink/25 to-transparent px-4 pb-3 pt-12 font-serif text-[22px] font-semibold uppercase leading-none tracking-[0.05em] text-cream">
          {photo.location}
        </span>
      </div>
    </figure>
  )
}

export default function Travel() {
  return (
    <section id="travel" className="bg-cream px-6 py-24 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2
            className="display font-serif font-medium leading-[1.1] text-ink"
            style={{ fontSize: 'clamp(38px, 5.2vw, 62px)' }}
          >
            Go and <span className="text-moss">see</span>.
          </h2>
          <p
            className="mt-4 font-serif text-ink/60"
            style={{ fontSize: 'clamp(15px, 1.8vw, 18px)' }}
          >
            Places I&rsquo;ve been and films I&rsquo;ve created.
          </p>
        </Reveal>

        {/* Films — click to open the lightbox; nothing loads until then */}
        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          {films.map((film, i) => (
            <Reveal key={film.title} delay={i * 0.08}>
              <VideoPlayer film={film} />
            </Reveal>
          ))}
        </div>

        {/* Photos — B/W until hovered, then they illuminate and stay lit */}
        <div className="mt-16 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6">
          {photos.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 3) * 0.06}>
              <Photo photo={photo} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
