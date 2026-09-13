export type Place = { name: string; year: string }

export const places: Place[] = [
  { name: 'Japan', year: '2025' },
  { name: 'Thailand', year: '2025' },
  { name: 'Indonesia', year: '2025' },
  { name: 'Singapore', year: '2025' },
  { name: 'Yosemite', year: '2025' },
  { name: 'Sequoia', year: '2026' },
  { name: 'Mexico', year: '2024' },
]

export type TravelFilm = {
  title: string
  duration: string
  /* The film at full quality — what plays full screen, with sound. */
  src: string
  /* A lighter encode for the silent in-page loop. Autoplay downloads
     the whole file on a phone, so this is the one that has to be small. */
  preview: string
  /* A frame from inside the film, not the first frame — it stands alone
     wherever autoplay is refused (iOS Low Power Mode, reduced motion). */
  still: string
  /* Where it was shot, set as a run of names with no punctuation. */
  places: string[]
  year: string
}

export const films: TravelFilm[] = [
  {
    title: 'Japan',
    duration: '0:28',
    src: '/video/japan.mp4',
    preview: '/video/japan-preview.mp4',
    still: '/images/film/japan-still.jpg',
    places: ['Tokyo', 'Kyoto', 'Osaka', 'Narita'],
    year: '2025',
  },
  {
    title: 'Yosemite',
    duration: '0:26',
    /* 1280-wide re-encode (9.7 MB) of the 20 MB original, which is
       still in public/video but no longer served. */
    src: '/video/yosemite-1280.mp4',
    preview: '/video/yosemite-preview.mp4',
    still: '/images/film/yosemite-still.jpg',
    places: ['Sierra Nevada'],
    year: '2025',
  },
]

/* Prints on the strip. `location` and `year` are typed on the matte;
   `note` is the line for each place, kept for captions elsewhere. */
export type TravelPhoto = {
  src: string
  alt: string
  caption: string
  location: string
  year: string
  note: string
}

/* Deliberately shuffled rather than grouped by place: three Bali prints
   in a row read as one stop repeated, where interleaving them reads as a
   set of places. The order also has to survive the loop seam, since the
   strip runs the set twice back to back — so the last print and the
   first are different places too. */
export const photos: TravelPhoto[] = [
  {
    src: '/images/bali-scooters-800.jpg',
    alt: 'Scooter traffic on a palm-lined street in Bali',
    caption: 'Indonesia',
    location: 'Bali',
    year: '2025',
    note: 'Everyone is on two wheels. You learn fast.',
  },
  {
    src: '/images/tokyo-tower-800.jpg',
    alt: 'Tokyo Tower at night, seen from directly below',
    caption: 'Japan',
    location: 'Tokyo',
    year: '2025',
    note: 'Lots of walking & eating. Best enjoyed with hometown friends and no plan for the day.',
  },
  {
    src: '/images/singapore-800.jpg',
    alt: 'Cable cars in Singapore',
    caption: 'Singapore',
    location: 'Singapore',
    year: '2025',
    note: 'Hot, sweaty and full of exploration.',
  },
  {
    src: '/images/kyoto-800.jpg',
    alt: 'Fernando in Kyoto with the Yasaka Pagoda behind',
    caption: 'Japan',
    location: 'Kyoto',
    year: '2025',
    note: 'Find a gyoza bar, you\'ll thank me later.',
  },
  {
    src: '/images/bali-800.jpg',
    alt: 'Jungle hillside in Bali',
    caption: 'Indonesia',
    location: 'Bali',
    year: '2025',
    note: 'If in Seminyak, go to Black Library. Pool tournaments, live music, and the occasional forced karaoke. If you look hard enough you\'ll find a picture of me on the wall.',
  },
  {
    src: '/images/thinker-800.jpg',
    alt: "Rodin's Thinker at Museo Soumaya, Mexico City",
    caption: 'Mexico',
    location: 'Mexico City',
    year: '2024',
    note: 'Amazing food, history, culture and opportunity to see family.',
  },
  {
    src: '/images/singapore-river-800.jpg',
    alt: 'The Singapore skyline across Marina Bay',
    caption: 'Singapore',
    location: 'Singapore',
    year: '2025',
    note: 'The whole city looks engineered, because it is.',
  },
  {
    src: '/images/osaka-800.jpg',
    alt: 'Fernando in a narrow Osaka side street',
    caption: 'Japan',
    location: 'Osaka',
    year: '2025',
    note: 'Every alley is worth turning down.',
  },
  {
    src: '/images/bali-note-800.jpg',
    alt: 'A drink at Black Library in Seminyak with a handwritten note beside it',
    caption: 'Indonesia',
    location: 'Bali',
    year: '2025',
    note: 'The note from Black Library. This is the picture on the wall story.',
  },
  {
    src: '/images/yosemite-falls-800.jpg',
    alt: 'A waterfall in Yosemite under a night sky full of stars',
    caption: 'California',
    location: 'Yosemite',
    year: '2025',
    note: 'Long exposure, freezing cold, worth every minute.',
  },
  {
    src: '/images/japan-cat-800.jpg',
    alt: 'Fernando sitting with a cat in a café in Japan',
    caption: 'Japan',
    location: 'Japan',
    year: '2025',
    note: 'A whole café of them, and this one picked me.',
  },
  {
    src: '/images/sequoia-800.jpg',
    alt: 'Four friends at the base of the General Sherman tree in Sequoia',
    caption: 'California',
    location: 'Sequoia',
    year: '2026',
    note: 'General Sherman. You cannot photograph the scale of it.',
  },
  {
    src: '/images/thailand-800.jpg',
    alt: 'Spires and guardian statues at the Grand Palace, Bangkok',
    caption: 'Thailand',
    location: 'Bangkok',
    year: '2025',
    note: 'The most stimulating city in the world. Incredible duo adventure. Almost died.',
  },
]
