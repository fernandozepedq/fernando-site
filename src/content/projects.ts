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
      'How a seventeen-year-old with no credibility got the first stranger to say yes.',
    writeup: 'danos-detailing',
    image: '/images/plates/danos.png',
    plateHeight: '72%',
  },
  {
    slug: 'investment-thesis',
    title: 'Investment Thesis',
    teaser:
      '$50k in, $500k at the peak, -$50k at twenty. Four sell targets hit, I took none.',
    writeup: 'investment-thesis',
    image: '/images/plates/thesis.png',
    plateHeight: '86%',
  },
  {
    slug: 'venture-summit',
    title: 'Venture Summit',
    teaser:
      'Founders and investors in one room in San Diego. Building it now.',
    image: '/images/plates/summit.png',
    plateHeight: '86%',
  },
  {
    slug: 'batman-gauntlet',
    title: 'Batman Gauntlet',
    teaser: 'Throw a punch and the spikes fire out of the wrist. Every part 3D printed.',
    image: '/images/plates/gauntlet.png',
    plateHeight: '78%',
    buildPage: { label: 'Build' },
  },
]
