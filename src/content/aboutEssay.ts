export type EssaySection = {
  heading?: string
  paragraphs: string[]
}

/* "Engineering as a Way of Seeing" — the long version of the About
   credo. Lives in its own reading view (see ReadingOverlay), not an
   inline expand — too long to unfold inside the section without
   throwing off the page's rhythm. */
export const aboutEssay: EssaySection[] = [
  {
    heading: 'Engineering as a Way of Seeing',
    paragraphs: [
      'When I tell people I study mechanical engineering, they assume I want to design machines. What engineering actually gave me was a methodology, a way of approaching any system, any problem, any human endeavor with the same foundational questions. What are the inputs? What are the constraints? What does the ideal output look like and what breaks first under pressure? I apply this to everything from the businesses I have built, to the investments I am learning to evaluate, to the conversations I try to have and the relationships I try to cultivate. Business, to me, is engineering applied to human systems. Identifying the problem, understanding the constraints, building a hypothesis, testing it against reality, and iterating.',
    ],
  },
  {
    heading: 'The Paradox That Guides Everything',
    paragraphs: [
      'Kierkegaard wrote that the ironic tragedy of life is that it has to be lived forward but can only be understood in reverse. I have spent a significant portion of my early life feeling the weight of that sentence from the inside, always convinced that the meaningful part was just ahead, that life would begin in earnest once I cleared the next threshold. I spent middle school dreaming of high school. Once in high school I looked forward to reimagining myself in college. Now nearing the end of those years I am already constructing the person I need to become afterward. I have come to understand it not as ambition but as a trap, this quiet cultural belief that the good part is always just around the corner, that fulfillment is the fruit of a finished checklist rather than the condition you choose to inhabit right now.',
      'Dostoyevsky saw this same tendency in human nature at a civilizational scale. Viewing humanity as intrinsically paradoxical, creatures driven by a chaotic mix of reason and emotion, with a profound yet irrational love for suffering. The label we accept, becomes the conceptual prison we agree to live inside. Peace is not the reward for healing. It is the condition that allows healing to occur.',
      'The paradox runs deeper than psychology. The natural world is structured by it. The dandelion releases every seed it has built, gives up everything, and in return receives the multiplication of its entire species. To build real strength you must be willing to be broken first. To become wise you must be willing to appear a fool. The moments in my life where I have received the most — the most growth, the most fulfillment, the most clarity about who I am — have come directly from the moments I gave the most away, gave up the need to be right, gave up the performance of having it together, and told someone the true version of what was happening instead of the version I was protecting. Every time I have done that, something returned that I could not have manufactured.',
    ],
  },
  {
    heading: 'On Winning and Game Theory',
    paragraphs: [
      "The naive model of competition is tit for tat. I do to you what you do to me, we each protect our position, and the game stays zero sum. The research in game theory is more interesting than that. Tit for tat actually won Robert Axelrod's famous tournaments in the 1980s — it's a strong strategy. But the decades of work since have shown its limits: in any environment with noise, where a signal gets misread or a move gets misexecuted, pure tit for tat locks two parties into a retaliation spiral neither intended. The strategies that actually compound are generous tit for tat, forgiveness after defection, a bias toward cooperation even after it breaks.",
      'The strategies that compound are the ones built on mutual cooperation. You scratch my back, I scratch yours, not because it is idealistic but because it is mathematically optimal. I have come to believe that the best businesses, the best investors, and the best builders operate on this same understanding. I am constantly reminded of a quote by DJ Patil after grabbing dinner this past spring: “You win when the people around you win.” What compounds isn’t the pie itself, plenty of individual rounds are genuinely zero-sum. What compounds is reputation where every round you play without maximally extracting is a signal about what kind of counterparty you are, and that signal is what gets you invited back to better games next time.',
      'The companies I want to build and the founders I want to learn from are the ones that take this seriously as a principle rather than a marketing position.',
    ],
  },
  {
    heading: 'Making People Feel',
    paragraphs: [
      "The naive assumption is that dominant systems fall to better arguments, that if you can out-reason the paradigm, it collapses. History rarely works that cleanly. The systems that fall usually fall to some combination of force, economics, and institutional capture but argument alone almost never does it. What argument alone can't do is make people feel the new thing before they've agreed to it intellectually. And the movements that spread fastest, that outrun the old system's ability to suppress them, are ones that get felt before they get argued.",
      "Christianity's first three centuries prove the feeling-first approach from an illegal, often-persecuted sect that spread through community and the visible testimony of changed lives, with no institutional power behind it at all. This felt experience is what made Christianity spread faster than Rome could kill it. The most durable form of influence has rarely been primarily intellectual persuasion. It has been a feeling, the kind that spreads because people who encounter it are visibly more alive than the people around them. The systems that actually replaced what came before them combined the felt experience with structural force behind it: state power, a new technology of distribution, an economic shift that made the old order unaffordable to maintain.",
      'DJ Patil, one of the people I have been fortunate enough to learn from, pushed me on my North Star: make people feel something real, and through that feeling, move them to act. The more I have sat with it the more I believe it is the most complete articulation of what I am actually trying to do across every medium and every endeavor. I am drawn to this concept like Schopenhauer and the aesthetic thinking of Kant before him, that holds beauty to be the highest form of art precisely because it produces feeling without demanding explanation. Schopenhauer argued that aesthetic experience, and music above all, was the one place where human beings escaped the grinding cycle of desire and wanting, because beauty produces pure contemplation rather than craving. It moves you without asking anything back. When you encounter something truly beautiful, a piece of music, a landscape, a sentence that lands exactly right, you do not analyze it first. You feel it first. And that feeling, if it is real, moves you toward something — toward making something, toward changing something, toward reaching out to another person because you suddenly understand something you did not before.',
      'I believe we are living through a meaning vacuum. Social media dominates not only because it is addictive but because it moved into a space that was already empty. Community had already fragmented. Shared civic ritual was already eroding. The phone did not cause the loneliness — it colonized it. And the damage is spread across millions of individuals who each experience it as a personal failure while the aggregation, the fact that it is happening to an entire generation simultaneously, gets lost because we are each alone in our suffering. Renaissances do not start at the top. They start with a small group of people who are so visibly alive, so clearly more flourishing and more connected, that others are drawn in despite themselves. That is the only mechanism that has ever worked. It is the mechanism I am trying to build toward.',
      'This is why I work in the mediums I do. Writing, when it is honest, makes people feel less alone. Film captures what language cannot quite hold, the texture of an experience, the specific quality of a place, the thing that existed between the words. A well-run business, built on genuine values rather than performed ones, makes the people inside it feel that their work means something beyond the transaction. A conversation, when both people are actually present for it, can shift something in a person that years of passive consumption never could. They are the same impulse expressed through different tools, and my mind brings up the same question through and through: can I make this person feel something true, and if I can, what becomes possible for them afterward.',
    ],
  },
  {
    heading: 'Inheritance & Horses',
    paragraphs: [
      'We tend to think of inheritance as material whether a name, a piece of land, a set of features passed down. The inheritance that actually shaped me was none of these. My grandfather died when I was still young enough that most of what I hold of him are fragments: a handful of memories I am not entirely sure are mine and not borrowed from the people who loved him. What survived intact was the outline of a man who kept a ranch called La Purificación, and who understood, without needing to argue for it, that a family stays a family only if someone insists on it. He planted a tree after every grandchild was born with people speaking of that place the way people speak of something that mattered.',
      'What I know now, having heard enough of the story secondhand, is that he is one of the only people I have ever been told about who loved the things I love — being surrounded by nature, near animals, writing for no reason except the writing itself. I never got to ask him why any of it mattered to him. I feel the same unexplainable pull toward horses that he apparently felt, and I have stopped treating it as a mystery that requires solving. Some things do not need to be questioned. They only need to be felt, and then lived.',
      'Someday I want a ranch of my own, full of horses, and I will name it after his. To continue what he was doing in Mexico, which I suspect was never really about the animals or the land at all. It was about making a place worth returning to.',
    ],
  },
  {
    heading: 'What I Am Building Toward',
    paragraphs: [
      'I am one year from graduating. I am building an institutional venture summit at UC San Diego because I believe this city has an innovation ecosystem that nobody has bothered to make fully visible yet, and visibility changes what people believe is possible. I am writing because clarity of thought is inseparable from clarity of expression and I am not yet as clear as I want to be.',
      'You are at a university, I wrote to myself not long ago, the historical incubator of some of the largest cultural shifts in Western history. The Reformation. Tolkien and Lewis. The student movements of the 1960s. Environmentalism. All of it gestated in exactly the kind of institution I am inside right now. What are you willing to build and what are you willing to sacrifice to build it?',
      'Everything I am doing right now is my attempt at this question honestly.',
    ],
  },
]
