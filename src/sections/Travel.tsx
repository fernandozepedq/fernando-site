import Reveal from '../components/Reveal'
import VideoPlayer from '../components/VideoPlayer'
import RouteMap from '../components/RouteMap'
import PrintStrip from '../components/PrintStrip'
import { films, photos } from '../content/travel'

export default function Travel() {
  return (
    <section id="travel" className="bg-cream px-6 py-24 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2
            className="display font-serif font-medium leading-[1.1] text-ink"
            style={{ fontSize: 'clamp(46px, 6.4vw, 78px)' }}
          >
            Go and <span className="text-moss">see</span>.
          </h2>
          <p
            className="mt-4 font-serif text-ink/60"
            style={{ fontSize: 'clamp(17px, 2.1vw, 21px)' }}
          >
            Places I&rsquo;ve been and films I created. Highlights from my backpacking
            trip through Asia.
          </p>
        </Reveal>

        {/* The where, before the films */}
        <Reveal>
          <div className="mt-10">
            <RouteMap />
          </div>
        </Reveal>

        {/* Films — one cinematic frame each, stacked. They play silently
            as they come into view; nothing downloads before that. */}
        <div className="mt-14 grid grid-cols-1 gap-7">
          {films.map((film, i) => (
            <Reveal key={film.title} delay={i * 0.08}>
              <VideoPlayer film={film} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Prints — runs edge to edge, so it sits outside the column */}
      <div className="mt-16">
        <PrintStrip photos={photos} />
      </div>
    </section>
  )
}
