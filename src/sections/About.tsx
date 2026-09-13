import { useState } from 'react'
import type { ReactNode } from 'react'
import Reveal from '../components/Reveal'
import ReadingOverlay from '../components/ReadingOverlay'
import { aboutEssay, aboutEssaySubtitle } from '../content/aboutEssay'

function Org({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="draw-underline transition-colors duration-300 hover:text-moss"
    >
      {children}
    </a>
  )
}

/* Previously was retired: the prose above now tells that history, and
   listing it again a few inches later read as saying it twice. */
const currently: ReactNode[] = [
  'Founding a Venture Summit in San Diego',
  <>
    Studying mechanical engineering &amp; reading philosophy @{' '}
    <Org href="https://www.ucsd.edu/">UCSD</Org>
  </>,
]

export default function About() {
  const [essayOpen, setEssayOpen] = useState(false)

  return (
    <section id="about" className="px-6 py-24 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-4xl">
        {/* No display heading — the section opens on "Hey, I'm Fernando",
            which a credo above it would collide with. The heading stays
            for screen readers and the #about anchor. */}
        <h2 className="sr-only">About</h2>

        <Reveal>
          <div
            className="flex flex-col gap-5 font-serif font-medium text-ink/90"
            style={{ fontSize: 'clamp(18px, 4.2vw, 23px)', lineHeight: 1.65, maxWidth: '700px' }}
          >
            <p>Hey, I&rsquo;m Fernando. I like to live life as an experiment.</p>
            <p>
              At seventeen I started an automotive detailing business in my hometown of
              Tracy, California. Over 2.5 years I grew it to 500+ unique clients and sold
              the catalog in January 2025. Along the way, I tried building a marketing
              agency, which failed. Cold calling is hard.
            </p>
            <p>
              After that, I spent three months developing an investment thesis on how
              Coinbase would push 100 million users onto its new blockchain. I pushed my
              chips in, watched the position climb from $50K to $500K, and over the
              following eight months lost it all. I ended up $50K in debt around the time
              I turned 20. I took the last of my money backpacking through Asia, came
              home, and flipped sectional couches to begin recouping my losses.
            </p>
            <p>
              I was selected as 1 of 12 for the inaugural Poseidon Fellows cohort, which
              pulled me into startups and venture capital. I am currently building a
              private venture summit in San Diego.
            </p>
            <p>
              I&rsquo;m drawn to problems of the physical world: climate, hardware, the
              unglamorous corners of engineering. Something built well moves people. It is
              why I write, why I make short films, why I create.{' '}
              <strong className="font-bold text-ink">
                I want people to feel something personal and be moved by it.
              </strong>
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-8">
            {/* Opens a full-screen reading view, not an inline expand —
                the essay is long enough that unfolding it in place would
                throw off the section's rhythm */}
            <button
              type="button"
              onClick={() => setEssayOpen(true)}
              aria-haspopup="dialog"
              className="draw-underline pb-1 font-serif text-[18px] text-ink transition-colors duration-300 hover:text-moss"
            >
              Read more about how I think →
            </button>
          </div>
        </Reveal>

        <div className="mt-16">
          <Reveal>
            <h3 className="eyebrow mb-4">Currently</h3>
            <ul className="flex flex-col gap-3">
              {currently.map((item, i) => (
                <li key={i} className="font-sans text-[16px] leading-relaxed text-ink/85">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <ReadingOverlay
        open={essayOpen}
        onClose={() => setEssayOpen(false)}
        title="How I Think"
        subtitle={aboutEssaySubtitle}
        sections={aboutEssay}
      />
    </section>
  )
}
