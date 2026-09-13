export type Project = {
  slug: string
  title: string
  /* The one line beneath the title — the whole pitch. These are hooks,
     not summaries; a panel that teases well reads finished even before
     the deep-dive behind it is written. More copy lands here later. */
  teaser: string
  /* Screenprint plate printed into the sheet — moss ink keyed to
     transparency, blended with multiply so it darkens the paper rather
     than covering it. */
  image: string
  /* Plates are contained (never cropped) and sit on the foot of the
     sheet. This is how much of the sheet's height each one may fill —
     a tall figure takes more, the stacked cars less, so every plate
     lands at a comparable visual weight. */
  plateHeight: string
  /* Opens the on-site full-build overlay. */
  buildPage?: { label: string }
  /* Key into writeupsBySlug — opens the long-form write-up in the reader. */
  writeup?: string
  /* The full read lives off-page — swap the TODO hrefs for real URLs. */
  link?: { href: string; label: string }
}

export const projects: Project[] = [
  {
    slug: 'danos-detailing',
    title: "Dano's Detailing",
    teaser:
      'Lessons from my six figure business and its catalog acquisition. Everything I learned from my 3 year adventure.',
    writeup: 'danos-detailing',
    image: '/images/plates/danos.png',
    plateHeight: '72%',
  },
  {
    slug: 'investment-thesis',
    title: 'Investment Thesis',
    teaser:
      'A $50k position that reached $500k and went to zero. What I got right, and what it cost me.',
    writeup: 'investment-thesis',
    image: '/images/plates/thesis.png',
    plateHeight: '86%',
  },
  {
    slug: 'venture-summit',
    title: 'Venture Summit',
    teaser:
      'Building a private venture summit in San Diego. Why SD is a hidden gem for startups.',
    image: '/images/plates/summit.png',
    plateHeight: '86%',
  },
  {
    slug: 'batman-gauntlet',
    title: 'Batman Gauntlet',
    teaser: 'A fully 3D printed gauntlet with spikes that deploy.',
    image: '/images/plates/gauntlet.png',
    plateHeight: '78%',
    buildPage: { label: 'Build' },
  },
]
