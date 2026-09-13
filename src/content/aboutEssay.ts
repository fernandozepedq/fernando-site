export type EssaySection = {
  heading?: string
  paragraphs: string[]
}

/* "How I Think" — reachable two ways: the About section's read-more, and
   as the top note in the Writing index. Lives in its own reading view
   (see ReadingOverlay), not an inline expand.

   A paragraph beginning "> " renders as a pull quote; a following
   "— Name" line becomes its attribution. */
export const aboutEssaySubtitle =
  'A collection of notes and reflections I keep returning to. Topics include beauty, feeling, engineering, business, and the people who shaped my views.'

export const aboutEssay: EssaySection[] = [
  {
    heading: 'The Paradox That Guides Everything',
    paragraphs: [
      'The ironic tragedy of life is that it has to be lived forward but only makes sense in reverse. I spent most of my life convinced that the meaningful part was just ahead. I spent middle school dreaming of high school. In high school I looked forward to reimagining myself in college. Now at the end of college I am already visualizing the person I need to become afterward. This mindset is a trap.',
      'Dostoyevsky saw the same in human nature. Humanity is intrinsically paradoxical, driven by a mix of reason and emotion, with an irrational love for suffering.',
      'The paradox runs deeper than psychology. I see the natural world structured around it. To build strength you have to intentionally make yourself weaker. To become wise you must be willing to appear a fool. The moments in my life where I have received the most came from when I had given the most. I see the world ordered around this paradox.',
    ],
  },
  {
    heading: 'Making People Feel',
    paragraphs: [
      'The best form of influence isn’t intellectual persuasion. It is a feeling that spreads. Christianity’s first three centuries going from an illegal persecuted sect show the feeling-first approach. It spread through community and the visible testimony of changed lives. This felt experience is what made it spread faster than Rome could kill it.',
      'My North Star: make people feel something genuine, and through that feeling move them to act. I believe beauty to be the highest form of art because it produces feeling without explanation. It moves you without asking. When you encounter something truly beautiful like a piece of music or a landscape, you do not analyze it first. You feel.',
      'Beauty is the language of the divine.',
      '> The fundamental act of humanity is not so much creating history as it is writing it. Caesar’s account of the Gallic Wars has had far more impact on us than the wars themselves ever did.\n— Will Manidis',
      'Writing captures the human spirit and so does film. It captures what language cannot hold. It captures the texture of an experience. It captures feeling.',
    ],
  },
  {
    heading: 'On Winning and Game Theory',
    paragraphs: [
      'I believe the best businesses, investors, and individuals internalize generous tit for tat. This means forgiveness after defection and a bias toward cooperation. The strategies that work are built on mutual cooperation. You scratch my back, I scratch yours. This is mathematically optimal. The companies I want to build and the founders I want to learn from take this principle seriously.',
      '> We win when we pick up the people around us.\n— DJ Patil',
    ],
  },
  {
    heading: 'Engineering as a Way of Seeing',
    paragraphs: [
      'When I tell people I study engineering, they think I want to design machines. Engineering taught me a process of approaching problems with the same questions. What are the constraints? What does the ideal output look like and what will break first? I apply this thinking to the businesses I create and relationships I develop. I see business as engineering applied to human systems.',
    ],
  },
  {
    heading: 'Inheritance & Horses',
    paragraphs: [
      'I only have a handful of memories of my Grandfather before he passed away. What I remember is a man who kept a ranch called La Purificación. At this ranch he planted a tree after every grandchild was born. It also had every animal you could think of.',
      'He is one of the only people I have been told who loved the things I do. He was always surrounded by nature, near animals, and writing. I feel the same unexplainable pull toward horses that he apparently felt. Some things do not need to be questioned. They only need to be felt, and then lived.',
      'My life’s goal is to own a ranch full of horses. It will be called La Purificación.',
    ],
  },
  {
    heading: 'Where I am headed',
    paragraphs: [
      'I wrote to myself not too long ago that you are at a university. The historical incubator of some of the largest cultural shifts in Western history: the reformation, Tolkien and Lewis, the student movements of the 1960s. All of it gestated inside institutions like what I am currently in.',
      'What are you willing to build and what are you willing to sacrifice to build it?',
    ],
  },
]
