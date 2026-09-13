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
    title: '10 Lessons from Poseidon Fellows',
    subtitle:
      'Key takeaways and personal reflections from my time inside UCSD’s new entrepreneurship fellowship.',
    date: 'August 2026',
    url: '',
    essay: 'ten-lessons-poseidon-fellowship',
  },
  /* "Building for the Wrong Audience" is archived while it is revised.
     Its full text is still in essays.ts under the same slug, so restoring
     it is a matter of pasting this entry back. */
  {
    title: 'The UCSD arbitrage',
    subtitle: 'Why the best-kept secret in venture is a beach in La Jolla',
    date: 'Coming soon',
    url: '',
  },
]
