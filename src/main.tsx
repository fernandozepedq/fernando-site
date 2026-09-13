import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import '@fontsource-variable/instrument-sans/index.css'
import '@fontsource-variable/cormorant/index.css'
import '@fontsource/marcellus/index.css'
import '@fontsource/pinyon-script/index.css'
import '@fontsource/special-elite/index.css'
import '@fontsource/prata/index.css'
import '@fontsource/gravitas-one/index.css'
import './index.css'
import App from './App.tsx'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

/* The build prerenders the page into #root, so the normal path is to
   hydrate what is already there rather than throw it away and rebuild
   it. createRoot stays as the fallback for `vite dev`, where the root
   is empty. */
if (root.firstChild) hydrateRoot(root, app)
else createRoot(root).render(app)
