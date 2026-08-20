import { useState } from 'react'
import Reveal from '../components/Reveal'
import { books } from '../content/books'

/* Spine shapes for the shelf — heights/widths vary like a real shelf.
   Cycled if the shelf outgrows the list. */
const spines = [
  { h: 96, w: 24, bg: '#E3DCC4' },
  { h: 112, w: 28, bg: '#F1EEE5' },
  { h: 102, w: 22, bg: '#CFC9B4' },
  { h: 108, w: 26, bg: '#DDD8C7' },
  { h: 92, w: 21, bg: '#E8E2CE' },
]

export default function Books() {
  const reading = books.filter((b) => b.status === 'reading')
  const shelf = books.filter((b) => b.status === 'shelf')
  const [picked, setPicked] = useState<number | null>(null)

  return (
    <section id="books" className="bg-cream px-9 py-24 sm:px-10 sm:py-28">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <h2
            className="display font-serif font-medium leading-[1.1] text-ink"
            style={{ fontSize: 'clamp(38px, 5.2vw, 62px)' }}
          >
            Reading
          </h2>
        </Reveal>

        {reading.map((book) => (
          <Reveal key={book.title}>
            <div className="mt-10">
              <h3 className="eyebrow mb-3">Currently</h3>
              <p className="font-serif text-[27px] font-medium text-moss">
                {book.title}
                <span className="font-light text-ink/60"> — {book.author}</span>
              </p>
            </div>
          </Reveal>
        ))}

        {/* The shelf — the list and its shelf, hover either side */}
        <Reveal delay={0.08}>
          <div className="mt-12">
            <h3 className="eyebrow mb-6">The shelf</h3>

            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:items-start">
              {/* Titles */}
              <ul>
                {shelf.map((book, i) => (
                  <li
                    key={book.title}
                    onMouseEnter={() => setPicked(i)}
                    onMouseLeave={() => setPicked(null)}
                    className="group border-b border-ink/10 py-3.5 last:border-b-0"
                  >
                    {/* Direct hover tint is pure CSS (group-hover) so it can
                        never miss; React state only adds the cross-highlight
                        between this list and the shelf. */}
                    <span
                      className={`font-serif text-[21px] font-medium group-hover:text-moss ${
                        picked === i ? 'text-moss' : 'text-ink'
                      }`}
                    >
                      {book.title}
                    </span>
                    <span className="block font-serif text-[16px] text-ink/55">
                      {book.author}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Spines — hover and the book rises, name below.
                  Centered on phones, left-aligned beside the list on larger screens. */}
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-end gap-1.5 sm:pl-1">
                  {shelf.map((book, i) => {
                    const s = spines[i % spines.length]
                    return (
                      <button
                        key={book.title}
                        type="button"
                        onMouseEnter={() => setPicked(i)}
                        onMouseLeave={() => setPicked(null)}
                        onFocus={() => setPicked(i)}
                        onBlur={() => setPicked(null)}
                        aria-label={`${book.title} by ${book.author}`}
                        className={`border border-ink/30 transition-transform duration-300 ease-out hover:-translate-y-2 ${
                          picked === i ? '-translate-y-2' : ''
                        }`}
                        style={{ height: s.h, width: s.w, background: s.bg }}
                      />
                    )
                  })}
                </div>
                {/* Shelf board */}
                <div className="h-[3px] w-48 bg-[#6B5138] sm:w-56" />

                {/* The raised book */}
                <p
                  className="mt-4 min-h-[3.2em] text-center font-serif text-[19px] text-ink sm:text-left"
                  aria-live="polite"
                >
                  {picked !== null && (
                    <>
                      &ldquo;{shelf[picked].title}&rdquo;
                      <span className="font-light text-ink/60">
                        , {shelf[picked].author}
                      </span>
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
