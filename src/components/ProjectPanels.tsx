import type { CSSProperties, ReactNode } from 'react'
import Reveal from './Reveal'
import type { Project } from '../content/projects'

/* Four columns split by hairlines. On scroll the set deals like a hand
   of cards — all four start stacked under the first, then fan right one
   after another while each plate flashes in and settles back out.
   One Reveal drives the whole band so the deal stays in sync; the
   stagger is pure CSS transition-delay per column. */

function PanelBody({ project, index }: { project: Project; index: number }) {
  return (
    <>
      <img
        src={project.image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="project-panel-art"
        style={
          {
            '--plate-scale': project.plateScale,
            objectPosition: project.imagePos ?? 'center',
          } as CSSProperties
        }
      />

      <h3 className="project-panel-title relative z-10">{project.title}</h3>

      <p className="project-panel-meta relative z-10">{project.teaser}</p>

      {/* Editioned foot — small red number, arrow to the read */}
      <span className="project-panel-foot relative z-10 mt-auto">
        <span className="project-panel-num">{String(index + 1).padStart(2, '0')}</span>
        <span className="project-panel-arrow" aria-hidden="true">
          ↗
        </span>
      </span>
    </>
  )
}

function Panel({
  project,
  index,
  onOpenBuild,
}: {
  project: Project
  index: number
  onOpenBuild?: () => void
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
}: {
  projects: Project[]
  onOpenBuild?: () => void
}) {
  return (
    <Reveal className="project-deck">
      <div className="project-grid grid grid-cols-1 md:grid-cols-4">
        {projects.map((p, i) => (
          <Panel
            key={p.slug}
            project={p}
            index={i}
            onOpenBuild={p.buildPage ? onOpenBuild : undefined}
          />
        ))}
      </div>
    </Reveal>
  )
}
