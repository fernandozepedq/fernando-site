/* Essays are published on Substack; the site indexes and links out.
   An essay whose full text lives in ./essays.ts is read here instead,
   which is how a piece goes live before it has a Substack post.
   Short notes live in ./notes/*.md and are read on the site itself. */

export type Essay = {
  title: string
  subtitle?: string
  date: string
  url: string
  /* Key into essaysBySlug — set when the full text is on the site. */
  essay?: string
}

export const essays: Essay[] = [
  {
    title: 'Building for the Wrong Audience',
    subtitle:
      'I watched a number climb to $500,000 and was certain that when it hit a million, something in my life would finally click.',
    date: 'July 2026',
    url: '',
    essay: 'building-for-the-wrong-audience',
  },
  {
    title: 'Diary of the High Performer',
    subtitle: 'One question, asked of every Poseidon guest speaker',
    date: 'Coming soon',
    url: '',
  },
  {
    title: 'The UCSD arbitrage',
    subtitle: 'Why the best-kept secret in venture is a beach in La Jolla',
    date: 'Coming soon',
    url: '',
  },
]
