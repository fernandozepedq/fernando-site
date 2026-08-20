export type Place = { name: string; year: string }

export const places: Place[] = [
  { name: 'Japan', year: '2024' },
  { name: 'Thailand', year: '2024' },
  { name: 'Indonesia', year: '2024' },
  { name: 'Singapore', year: '2024' },
  { name: 'Yosemite', year: '2023' },
  { name: 'Sequoia', year: '2023' },
  { name: 'Mexico', year: '2022' },
]

export type TravelFilm = {
  title: string
  duration: string
  src: string
  poster: string
  /* Where the card's crop window sits on the poster (CSS object-position).
     The Japan poster is portrait — ride the window up to the pagoda. */
  posterPosition?: string
}

export const films: TravelFilm[] = [
  {
    title: 'Japan Film',
    duration: '00:28',
    src: '/video/japan.mp4',
    poster: '/images/japan-poster.jpg',
    posterPosition: 'center 72%',
  },
  {
    title: 'Yosemite Film',
    duration: '00:26',
    src: '/video/yosemite.mp4',
    poster: '/images/yosemite-poster.jpg',
  },
]

/* Postcards. `src` is the front; the B/W variant becomes the stamp on
   the back. `note` is the handwritten line — edit these freely. */
export type TravelPhoto = {
  src: string
  bwSrc: string
  alt: string
  caption: string
  location: string
  note: string
}

export const photos: TravelPhoto[] = [
  {
    src: '/images/kyoto-800.jpg',
    bwSrc: '/images/kyoto-bw-800.jpg',
    alt: 'Fernando in Kyoto with the Yasaka Pagoda behind',
    caption: 'Japan',
    location: 'Kyoto',
    note: 'Find a gyoza bar, you\'ll thank me later.',
  },
  {
    src: '/images/tokyo-tower-800.jpg',
    bwSrc: '/images/tokyo-tower-bw-800.jpg',
    alt: 'Tokyo Tower at night, seen from directly below',
    caption: 'Japan',
    location: 'Tokyo',
    note: 'Lots of walking & eating. Best enjoyed with hometown friends and no plan for the day.',
  },
  {
    src: '/images/thailand-800.jpg',
    bwSrc: '/images/thailand-bw-800.jpg',
    alt: 'Thailand',
    caption: 'Thailand',
    location: 'Bangkok',
    note: 'The most stimulating city in the world. Incredible duo adventure. Almost died.',
  },
  {
    src: '/images/bali-800.jpg',
    bwSrc: '/images/bali-bw-800.jpg',
    alt: 'Jungle hillside in Bali',
    caption: 'Indonesia',
    location: 'Bali',
    note: 'If in Seminyak, go to Black Library. Pool tournaments, live music, and the occasional forced karaoke. If you look hard enough you\'ll find a picture of me on the wall.',
  },
  {
    src: '/images/singapore-800.jpg',
    bwSrc: '/images/singapore-bw-800.jpg',
    alt: 'Cable cars in Singapore',
    caption: 'Singapore',
    location: 'Singapore',
    note: 'Hot, sweaty and full of exploration.',
  },
  {
    src: '/images/thinker-800.jpg',
    bwSrc: '/images/thinker-bw-800.jpg',
    alt: "Rodin's Thinker at Museo Soumaya, Mexico City",
    caption: 'Mexico',
    location: 'Mexico City',
    note: 'Amazing food, history, culture and opportunity to see family.',
  },
]
