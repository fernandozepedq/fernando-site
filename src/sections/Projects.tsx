import { useState } from 'react'
import ProjectPanels from '../components/ProjectPanels'
import GauntletBuild from '../components/GauntletBuild'
import { projects } from '../content/projects'

/* No visible heading — the titles inside the wall carry the section,
   and a second "Projects" above them only repeated what they say. The
   heading stays for screen readers and the #projects anchor. */
export default function Projects() {
  const [buildOpen, setBuildOpen] = useState(false)

  return (
    <section id="projects" className="py-24 sm:py-28">
      <h2 className="sr-only">Projects</h2>

      <div className="mx-auto max-w-[1500px] px-6 sm:px-10">
        <ProjectPanels projects={projects} onOpenBuild={() => setBuildOpen(true)} />
      </div>

      <GauntletBuild open={buildOpen} onClose={() => setBuildOpen(false)} />
    </section>
  )
}
