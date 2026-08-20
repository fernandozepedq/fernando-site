import Nav from './components/Nav'
import Hero from './sections/Hero'
import About from './sections/About'
import Writing from './sections/Writing'
import Projects from './sections/Projects'
import Travel from './sections/Travel'
import Quotes from './sections/Quotes'
import Books from './sections/Books'
import Contact from './sections/Contact'

function App() {
  return (
    <div className="grain">
      <Nav />
      <main>
        <Hero />
        <About />
        <Writing />
        <Projects />
        <Travel />
        <Quotes />
        <Books />
        <Contact />
      </main>
    </div>
  )
}

export default App
