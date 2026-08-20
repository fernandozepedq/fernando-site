import { useState } from 'react'
import type { ReactNode } from 'react'
import Reveal from '../components/Reveal'
import ReadingOverlay from '../components/ReadingOverlay'
import { aboutEssay } from '../content/aboutEssay'

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

const currently: ReactNode[] = [
  'Founding a Venture Summit at UCSD',
  <>
    Blueprint Investor Track &mdash;{' '}
    <Org href="https://www.dormroomfund.com/">Dorm Room Fund</Org>
  </>,
  'Mechanical Engineering — UCSD',
]

const previously: ReactNode[] = [
  <>
    Founder &mdash; <Org href="https://danosdetailing.com/">Dano&rsquo;s Detailing</Org>{' '}
    (catalog acquired)
  </>,
  <>
    Inaugural Fellow &mdash;{' '}
    <Org href="https://today.ucsd.edu/story/poseidon-fellows-first-cohort">
      Poseidon Fellows
    </Org>
  </>,
  <>
    Steering Lead &mdash; <Org href="https://sae.eng.ucsd.edu/">Triton Racing FSAE</Org>
  </>,
]

export default function About() {
  const [essayOpen, setEssayOpen] = useState(false)

  return (
    <section id="about" className="px-6 py-24 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          {/* Fluid title: tracks the viewport tightly so it's as large
              as each phrase can be without wrapping — full title weight
              on desktop, single lines all the way down to 375px */}
          <h2
            className="title-face leading-[1.3] text-ink"
            style={{ fontSize: 'clamp(21px, 5.9vw, 50px)' }}
          >
            Engineering as <span className="text-moss">epistemology</span>.
            <br />
            Business as its <span className="text-moss">application</span>.
            <br />
            Philosophy as the <span className="text-moss">guide</span>.
          </h2>
        </Reveal>

        <Reveal>
          <div
            className="mt-9 flex flex-col gap-5 font-serif font-medium text-ink/90"
            style={{ fontSize: 'clamp(16px, 3.7vw, 20px)', lineHeight: 1.7, maxWidth: '680px' }}
          >
            <p>
              In first grade I opened a little storefront and sold my mother her own
              stationery back, marked up. Rainbow Loom bracelets came next, sold to my
              third grade classmates, then car detailing at seventeen, and through all of
              it came the same question: how does this work, and what happens if I touch
              it? That question is the whole of my engineering, and it is the basis of how
              I think. I have come to see life as a kind of drum, one that reverberates
              with whatever you touch. Business is the place where that touch gets tested.
              Philosophy is what stands beside me and keeps the test honest.
            </p>
            <p>
              I am drawn to problems at the edge of the physical world: climate, hardware,
              the unglamorous corners of engineering, because that is where I have found I
              can make someone feel something genuine. It is why I write, why I make short
              films with the people I love, why travel itself has never felt optional. To
              experience life from another vantage, even briefly, is a gift, and it is the
              verse I hope to write for myself.
            </p>
            <p className="font-bold text-ink">
              My north star: make people feel something personal, and through that
              feeling, help them enact change.
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

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12">
          <Reveal>
            <h3 className="eyebrow mb-4">Currently</h3>
            <ul className="flex flex-col gap-3">
              {currently.map((item, i) => (
                <li
                  key={i}
                  className="font-sans text-[15px] leading-relaxed text-ink/85"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <h3 className="eyebrow mb-4">Previously</h3>
            <ul className="flex flex-col gap-3">
              {previously.map((item, i) => (
                <li
                  key={i}
                  className="font-sans text-[15px] leading-relaxed text-ink/85"
                >
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
        sections={aboutEssay}
      />
    </section>
  )
}
