import { useState } from 'react'
import ReadingOverlay from './ReadingOverlay'
import OpenPiece from './OpenPiece'
import { essaysBySlug } from '../content/essays'
import type { Essay } from '../content/writing'

/* One essay in the index. Three states: the full text lives on the site
   (opens the reading view), it lives on Substack (links out), or it
   isn't written yet (sits inert as a coming-soon line). */
export default function EssayItem({ essay }: { essay: Essay }) {
  const [open, setOpen] = useState(false)
  const full = essay.essay ? essaysBySlug[essay.essay] : undefined

  const inner = (
    <>
      <span className="block font-serif text-[30px] font-semibold leading-[1.15] text-ink transition-colors duration-300 group-hover:text-moss sm:text-[35px]">
        {essay.title}
      </span>
      {essay.subtitle && (
        <span
          className="mt-1 block font-serif font-medium text-ink/60"
          style={{ fontSize: '18px' }}
        >
          {essay.subtitle}
        </span>
      )}
      <span className="eyebrow mt-2 block !text-ink/40">{essay.date}</span>
    </>
  )

  if (full) {
    return (
      <div id={essay.essay}>
        <OpenPiece
          slug={essay.essay}
          onOpen={() => setOpen(true)}
          className="group block w-full py-4 text-left"
        >
          {inner}
          <span className="draw-underline mt-2 inline-block pb-1 font-serif text-[17px] text-ink transition-colors duration-300 group-hover:text-moss">
            Read the full piece →
          </span>
        </OpenPiece>

        <ReadingOverlay
          open={open}
          onClose={() => setOpen(false)}
          title={full.title}
          subtitle={full.subtitle}
          sections={full.sections}
          sourceNote={full.sourceNote}
        />
      </div>
    )
  }

  if (essay.url) {
    return (
      <a
        href={essay.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block py-4"
      >
        {inner}
      </a>
    )
  }

  return <div className="group block py-4">{inner}</div>
}
