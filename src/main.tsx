import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/instrument-sans/index.css'
import '@fontsource-variable/cormorant/index.css'
import '@fontsource/marcellus/index.css'
import '@fontsource/pinyon-script/index.css'
import '@fontsource/special-elite/index.css'
import '@fontsource/prata/index.css'
import '@fontsource/gravitas-one/index.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
