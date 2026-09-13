import type { EssaySection } from '../content/aboutEssay'
import { renderInline } from '../content/notes'

/* The body of a long-form piece: title, standfirst, sections, source
   note. Extracted from ReadingOverlay so the same markup can be rendered
   two ways — inside the on-site reader, and as a standalone page at
   build time, which is what makes the writing indexable. Nothing here
   touches the DOM, so it renders on the server unchanged.

   Paragraph syntax, kept deliberately small:
     "![caption](/path.jpg)"   renders as a captioned figure
     "> quote\n— Attribution"  renders as a pull quote
     *emphasis* and [text](url) are handled by renderInline, shared
     with the notes renderer. */

function Inline({ text }: { text: string }) {
  return (
    <>
      {renderInline(text).map((part, i) =>
        typeof part === 'string' ? (
          part
        ) : 'em' in part ? (
          <em key={i}>{part.em}</em>
        ) : (
          <a
            key={i}
            href={part.href}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b-2 border-moss/60 text-ink transition-colors duration-300 hover:border-moss hover:text-moss"
          >
            {part.link}
          </a>
        ),
      )}
    </>
  )
}

function Block({ text, lede }: { text: string; lede?: boolean }) {
  /* ![caption](/path.jpg) — a figure with its caption beneath. Photos run
     full measure and are never cropped, so a portrait phone shot and a
     landscape one both sit correctly without per-image tuning. */
  const image = text.match(/^!\[([^\]]*)\]\(([^)]+)\)$/)
  if (image) {
    const [, caption, src] = image
    return (
      <figure className="my-10">
        <img src={src} alt={caption} loading="lazy" decoding="async" className="w-full bg-haze" />
        {caption && (
          <figcaption className="mt-3 text-center font-sans text-[15px] leading-relaxed text-ink/55">
            {caption}
          </figcaption>
        )}
      </figure>
    )
  }

  if (text.startsWith('> ')) {
    const [quote, attribution] = text.slice(2).split('\n')
    return (
      /* The quote mark hangs in the left margin at full strength and the
         whole block indents past it, so the mark reads as attached to
         the words rather than floating above them, and the indent sets
         the passage apart from body text on its own. */
      <figure className="relative my-14 pl-11 sm:pl-16">
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 select-none font-serif text-moss"
          style={{
            fontSize: 'clamp(58px, 7.5vw, 84px)',
            lineHeight: 1,
            fontWeight: 400,
            transform: 'translateY(-0.22em)',
          }}
        >
          &ldquo;
        </span>
        <blockquote
          className="font-serif italic text-ink/85"
          style={{ fontSize: 'clamp(22px, 3vw, 29px)', lineHeight: 1.45, fontWeight: 400 }}
        >
          <Inline text={quote} />
        </blockquote>
        {attribution && (
          <figcaption className="mt-5 font-sans text-[11px] uppercase tracking-[0.18em] text-ink/45">
            {attribution.replace(/^—\s*/, '')}
          </figcaption>
        )}
      </figure>
    )
  }

  /* The line directly under a section title is that section's standfirst
     — it states the lesson before the body argues it. A step up in weight
     and size marks it as such without turning it into another heading. */
  return (
    <p
      className="mt-6 font-serif text-ink first:mt-6"
      style={
        lede
          ? { fontSize: 'clamp(20px, 2.7vw, 24px)', lineHeight: 1.6, fontWeight: 600, maxWidth: '58ch' }
          : { fontSize: 'clamp(18px, 2.4vw, 21px)', lineHeight: 1.72, fontWeight: 400, maxWidth: '64ch' }
      }
    >
      <Inline text={text} />
    </p>
  )
}

export default function ReadingContent({
  title,
  subtitle,
  sections,
  sourceNote,
}: {
  title: string
  subtitle?: string
  sections: EssaySection[]
  sourceNote?: string
}) {
  return (
    <div className="mx-auto max-w-2xl px-6 pb-28 pt-24 sm:px-10 sm:pt-28">
      {/* Cormorant is a high-contrast display serif — it earns its
          elegance at large sizes in its *regular* weight, where the
          thin strokes survive. Bolding it thickens those strokes and
          kills the thing that makes it good, so the title gets scale
          and tight leading instead of weight. */}
      <h1
        className="font-serif text-ink"
        style={{
          fontSize: 'clamp(42px, 8.5vw, 76px)',
          lineHeight: 1.02,
          fontWeight: 400,
          letterSpacing: '-0.015em',
          /* Cormorant defaults to oldstyle figures, which sit at
             x-height — fine inside running prose, but in a title the
             "10" reads as sunken next to the caps. Lining figures put
             the digits back on the cap line. */
          fontVariantNumeric: 'lining-nums',
        }}
      >
        {title}
      </h1>

      {subtitle && (
        /* Sans against the serif title: the texture change does the
           separating, so the subtitle can stay quiet and still read
           as a distinct layer. */
        <p
          className="mt-6 font-sans text-ink/55"
          style={{ fontSize: 'clamp(15px, 1.7vw, 17px)', lineHeight: 1.65, maxWidth: '46ch' }}
        >
          {subtitle}
        </p>
      )}

      {sections.map((s, si) => {
        /* "1. Careers look like..." splits into a hanging numeral and
           the title itself. A hairline above each opener gives the
           reader an actual chapter turn. */
        const numbered = s.heading?.match(/^(\d+)\.\s*(.+)$/)

        return (
          <section key={s.heading ?? si}>
            {s.heading && (
              <header className="mt-24">
                <div className="mb-8 h-0.5 w-full bg-ink/25" />
                {numbered ? (
                  /* Sans for both numeral and title. Two reasons: its
                     figures are lining and monospaced, so 01 and 10 sit
                     at one height instead of Cormorant's oldstyle
                     figures bobbing around; and a sans head against a
                     serif body can never be mistaken for another
                     paragraph, which size alone could not achieve. */
                  <h2 className="flex items-start gap-x-4 sm:gap-x-5">
                    {/* Baseline alignment puts a 78px numeral's shoulders
                        well above a 33px title — correct by the metrics,
                        wrong to the eye. What reads as level is a flush
                        cap line, so the numeral is dropped until its cap
                        top meets the title's and it grows downward
                        instead of upward.

                        The offset is derived, not eyeballed: Instrument
                        Sans caps measure 0.72em, its font box 0.97/0.25.
                        A cap top therefore sits 0.24em below the top of a
                        1.2-leaded line and 0.14em below a 1.0-leaded one,
                        and the difference of those two is the drop. */}
                    <span
                      className="shrink-0 font-sans leading-none text-moss"
                      style={{
                        fontSize: 'clamp(40px, 7.5vw, 78px)',
                        fontWeight: 600,
                        letterSpacing: '-0.03em',
                        fontVariantNumeric: 'lining-nums tabular-nums',
                        marginTop:
                          'calc(0.24 * clamp(23px, 3.2vw, 33px) - 0.14 * clamp(40px, 7.5vw, 78px))',
                      }}
                    >
                      {numbered[1].padStart(2, '0')}
                    </span>
                    <span
                      className="font-sans text-ink"
                      style={{
                        fontSize: 'clamp(23px, 3.2vw, 33px)',
                        lineHeight: 1.2,
                        fontWeight: 600,
                        letterSpacing: '-0.015em',
                        maxWidth: '26ch',
                      }}
                    >
                      {numbered[2]}
                    </span>
                  </h2>
                ) : (
                  <h2
                    className="font-sans text-ink"
                    style={{
                      fontSize: 'clamp(23px, 3.2vw, 33px)',
                      lineHeight: 1.2,
                      fontWeight: 600,
                      letterSpacing: '-0.015em',
                      maxWidth: '26ch',
                    }}
                  >
                    {s.heading}
                  </h2>
                )}
              </header>
            )}
            {s.paragraphs.map((p, i) => (
              <Block key={i} text={p} lede={i === 0 && !!s.heading} />
            ))}
          </section>
        )
      })}

      {sourceNote && (
        <p className="mt-14 border-t border-ink/10 pt-6 font-serif text-[13px] italic leading-relaxed text-ink/45">
          {sourceNote}
        </p>
      )}
    </div>
  )
}
