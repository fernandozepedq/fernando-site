export type Quote = {
  text: string
  author?: string // omit for Fernando's own
}

export const quotes: Quote[] = [
  {
    text: "To regret one's own experiences is to arrest one's own development.",
    author: 'Oscar Wilde',
  },
  {
    text: 'In a world obsessed with more, being grateful is the rarest luxury.',
  },
]
