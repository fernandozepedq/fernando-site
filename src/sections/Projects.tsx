import { useState } from 'react'
import ProjectPanels from '../components/ProjectPanels'
import GauntletBuild from '../components/GauntletBuild'
import ReadingOverlay from '../components/ReadingOverlay'
import { projects } from '../content/projects'
import { writeupsBySlug } from '../content/projectWriteups'

/* No visible heading — the panel titles carry the section, and a second
   "Projects" above them only repeated what they say. The heading stays
   for screen readers and the #projects anchor. */
export default function Projects() {
  const [buildOpen, setBuildOpen] = useState(false)
  const [writeupSlug, setWriteupSlug] = useState<string | null>(null)
  const writeup = writeupSlug ? writeupsBySlug[writeupSlug] : undefined

  return (
    <section id="projects" className="py-24 sm:py-28">
      <h2 className="sr-only">Projects</h2>

      <div className="mx-auto max-w-[1500px] px-6 sm:px-10">
        <ProjectPanels
          projects={projects}
          onOpenBuild={() => setBuildOpen(true)}
          onOpenWriteup={(slug) => setWriteupSlug(slug)}
        />
      </div>

      <GauntletBuild open={buildOpen} onClose={() => setBuildOpen(false)} />

      {writeup && (
        <ReadingOverlay
          open={writeupSlug !== null}
          onClose={() => setWriteupSlug(null)}
          title={writeup.title}
          subtitle={writeup.subtitle}
          sections={writeup.sections}
        />
      )}
    </section>
  )
}
