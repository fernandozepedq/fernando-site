import Reveal from '../components/Reveal'
import { LinkedInIcon, SubstackIcon } from '../components/Icons'
import { links } from '../content/site'

export default function Contact() {
  return (
    <section id="contact" className="px-6 pb-20 pt-24 sm:px-10 sm:pt-28">
      <Reveal className="text-center">
        <p
          className="display font-serif font-medium leading-[1.05] text-ink"
          style={{ fontSize: 'clamp(40px, 7vw, 96px)' }}
        >
          Say <em className="text-moss">hello</em>.
        </p>
        <a
          href={links.email}
          className="draw-underline mt-8 inline-block pb-1 font-sans text-[16px] text-ink transition-colors duration-300 hover:text-moss"
        >
          fezepeda@ucsd.edu
        </a>

        {/* Neutral at rest; brand colors snap in instantly, anchors hug the icons */}
        <div className="mt-10 flex items-center justify-center gap-8">
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex leading-none text-ink/45 hover:text-[#0A66C2]"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
          <a
            href={links.substack}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Substack"
            className="flex leading-none text-ink/45 hover:text-[#FF6719]"
          >
            <SubstackIcon className="h-5 w-5" />
          </a>
        </div>
      </Reveal>
    </section>
  )
}
