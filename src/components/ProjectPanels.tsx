import type { CSSProperties, ReactNode } from 'react'
import Reveal from './Reveal'
import type { Project } from '../content/projects'

/* Four cream sheets on the bone page. On scroll the set deals like a hand
   of cards — all four start stacked under the first, then fan right one
   after another while each plate flashes in and settles back out.
   One Reveal drives the whole band so the deal stays in sync; the
   stagger is pure CSS transition-delay per column. */

function PanelBody({ project, index }: { project: Project; index: number }) {
  const folio = String(index + 1).padStart(2, '0')
  /* What the foot promises. Only panels with something to open get a
     label, so an unwritten one never advertises a link it does not have. */
  const cta = project.buildPage
    ? project.buildPage.label
    : project.writeup
      ? 'Read'
      : project.link?.label

  return (
    <>
      {/* Ghost folio — the edition number at poster scale, printed so
          faint it is felt as a layer under the plate rather than read. */}
      <span className="project-panel-folio" aria-hidden="true">
        {folio}
      </span>

      <img
        src={project.image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="project-panel-art"
        style={{ '--plate-h': project.plateHeight } as CSSProperties}
      />

      <h3 className="project-panel-title relative z-10">{project.title}</h3>

      <p className="project-panel-meta relative z-10">{project.teaser}</p>

      <span className="project-panel-foot relative z-10 mt-auto">
        <span className="project-panel-num">{folio}</span>
        {cta ? (
          /* Small caps on a rust hairline. The underline is the oldest
             link cue there is and it reads at rest on a phone; the rust
             rhymes with the edition number without adding a second
             solid shape to the sheet. */
          <span className="project-panel-cta">
            <span className="project-panel-cta-label">{cta}</span>
            <span className="project-panel-cta-arrow" aria-hidden="true">
              ↗
            </span>
          </span>
        ) : (
          <span className="project-panel-soon">Coming soon</span>
        )}
      </span>
    </>
  )
}

function Panel({
  project,
  index,
  onOpenBuild,
  onOpenWriteup,
}: {
  project: Project
  index: number
  onOpenBuild?: () => void
  onOpenWriteup?: () => void
}) {
  const inner = <PanelBody project={project} index={index} />
  const shell = 'project-panel group flex flex-col text-left'

  let content: ReactNode

  if (project.buildPage && onOpenBuild) {
    content = (
      <button type="button" onClick={onOpenBuild} className={`${shell} w-full`}>
        {inner}
      </button>
    )
  } else if (project.writeup && onOpenWriteup) {
    content = (
      <button type="button" onClick={onOpenWriteup} className={`${shell} w-full`}>
        {inner}
      </button>
    )
  } else if (project.link) {
    content = (
      <a
        href={project.link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={shell}
      >
        {inner}
      </a>
    )
  } else {
    /* Nothing to open yet — the teaser is the whole panel, so it stays
       inert rather than pretending to be a link */
    content = <div className={shell}>{inner}</div>
  }

  return (
    <div id={project.slug} className="project-slot">
      {content}
    </div>
  )
}

export default function ProjectPanels({
  projects,
  onOpenBuild,
  onOpenWriteup,
}: {
  projects: Project[]
  onOpenBuild?: () => void
  onOpenWriteup?: (slug: string) => void
}) {
  return (
    <Reveal className="project-deck">
      {/* Two-up on tablets and small laptops: four sheets under ~1280px
          are too narrow for the titles to hold their size */}
      <div className="project-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((p, i) => (
          <Panel
            key={p.slug}
            project={p}
            index={i}
            onOpenBuild={p.buildPage ? onOpenBuild : undefined}
            onOpenWriteup={
              p.writeup && onOpenWriteup ? () => onOpenWriteup(p.writeup!) : undefined
            }
          />
        ))}
      </div>
    </Reveal>
  )
}
