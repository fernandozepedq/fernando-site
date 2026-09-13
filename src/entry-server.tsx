import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import App from './App'
import ArticlePage from './components/ArticlePage'
import { pieces } from './content/pieces'
import type { Piece } from './content/pieces'

/* Build-time rendering entry. Two different renderers on purpose:

   renderToString for the home page, because the client hydrates it and
   needs React's markers to match up.

   renderToStaticMarkup for the article pages, because nothing hydrates
   them — they ship as plain HTML with no JavaScript at all, so the
   markers would be dead weight. */

export function renderHome(): string {
  return renderToString(<App />)
}

export function renderPiece(piece: Piece): string {
  return renderToStaticMarkup(<ArticlePage piece={piece} />)
}

export { pieces }
