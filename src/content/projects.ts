export type Project = {
  slug: string
  title: string
  /* The one line beneath the title — the whole pitch. These are hooks,
     not summaries; a panel that teases well reads finished even before
     the deep-dive behind it is written. More copy lands here later. */
  teaser: string
  /* Screenprint plate revealed in the panel — moss ink keyed to
     transparency, so it prints onto the paper instead of covering it. */
  image: string
  /* Plates are contained (never cropped), so each one needs its own
     scale to sit right in a tall column. */
  plateScale: number
  /* Where the plate sits vertically in the column (CSS object-position). */
  imagePos?: string
  /* Opens the on-site full-build overlay. */
  buildPage?: { label: string }
  /* The full read lives off-page — swap the TODO hrefs for real URLs. */
  link?: { href: string; label: string }
}

export const projects: Project[] = [
  {
    slug: 'danos-detailing',
    title: "Dano's Detailing",
    teaser: 'Lessons from my six figure business and its catalog acquisition.',
    image: '/images/plates/danos.png',
    plateScale: 1.2,
    imagePos: 'center 72%',
  },
  {
    slug: 'investment-thesis',
    title: 'Investment Thesis',
    teaser: 'Going from 50k to 500k and back down to -50k. Lessons on what not to do.',
    image: '/images/plates/thesis.png',
    plateScale: 1.12,
    imagePos: 'center 70%',
  },
  {
    slug: 'venture-summit',
    title: 'Venture Summit',
    teaser: 'Building an institutional venture summit at UCSD from zero.',
    image: '/images/plates/summit.png',
    plateScale: 1.16,
    imagePos: 'center 72%',
  },
  {
    slug: 'batman-gauntlet',
    title: 'Batman Gauntlet',
    teaser: 'A fully 3D printed gauntlet with spikes that deploy.',
    image: '/images/plates/gauntlet.png',
    /* Soft pencil — runs larger than the ink plates to hold its weight */
    plateScale: 1.5,
    imagePos: 'center 62%',
    buildPage: { label: 'See the full build' },
  },
]
