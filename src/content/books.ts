export type Book = {
  title: string
  author: string
  status: 'reading' | 'shelf'
  note?: string
}

export const books: Book[] = [
  {
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    status: 'reading',
  },
  { title: 'What I Wish I Knew When I Was 20', author: 'Tina Seelig', status: 'shelf' },
  { title: 'Memories, Dreams, Reflections', author: 'Carl Jung', status: 'shelf' },
  { title: "Man's Search for Meaning", author: 'Viktor Frankl', status: 'shelf' },
]
