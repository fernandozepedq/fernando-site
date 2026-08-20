import Reveal from '../components/Reveal'
import Note from '../components/Note'
import EssayItem from '../components/EssayItem'
import { essays } from '../content/writing'
import { notes } from '../content/notes'
import { links } from '../content/site'

export default function Writing() {
  return (
    <section id="writing" className="bg-cream px-6 py-24 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2
            className="display font-serif font-medium leading-[1.1] text-ink"
            style={{ fontSize: 'clamp(38px, 5.2vw, 62px)' }}
          >
            Writing
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-14 md:grid-cols-2 md:gap-12">
          {/* Essays — published on Substack */}
          <Reveal>
            <h3 className="eyebrow mb-3 !text-[15px]">Essays</h3>
            <div>
              {essays.map((e) => (
                <EssayItem key={e.title} essay={e} />
              ))}
            </div>
            <a
              href={links.substack}
              target="_blank"
              rel="noopener noreferrer"
              className="draw-underline mt-4 inline-block pb-1 font-serif text-[18px] text-ink transition-colors duration-300 hover:text-moss"
            >
              All essays on Substack ↗
            </a>
          </Reveal>

          {/* Notes — short pieces, read here */}
          <Reveal delay={0.08}>
            <h3 className="eyebrow mb-3 !text-[15px]">Notes</h3>
            <div>
              {notes.map((n) => (
                <Note key={n.slug} note={n} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
