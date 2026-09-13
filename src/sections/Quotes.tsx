import Reveal from '../components/Reveal'
import { quotes } from '../content/quotes'
import { links } from '../content/site'

export default function Quotes() {
  return (
    <section id="quotes" className="px-6 py-24 sm:px-10 sm:py-28">
      <div className="mx-auto flex max-w-3xl flex-col gap-24">
        {quotes.map((q) => (
          <Reveal key={q.text}>
            <figure className="text-center">
              <blockquote
                className="font-serif font-light italic leading-[1.42] text-ink"
                style={{ fontSize: 'clamp(26px, 3.4vw, 38px)', textWrap: 'balance' }}
              >
                &ldquo;{q.text}&rdquo;
              </blockquote>
              {q.author && (
                <figcaption className="eyebrow mt-5 !not-italic">{q.author}</figcaption>
              )}
            </figure>
          </Reveal>
        ))}

        <Reveal className="text-center">
          <a
            href={links.quotes}
            target="_blank"
            rel="noopener noreferrer"
            className="draw-underline inline-block pb-1 font-serif text-[18px] text-ink transition-colors duration-300 hover:text-moss"
          >
            More quotes I keep close ↗
          </a>
        </Reveal>
      </div>
    </section>
  )
}
