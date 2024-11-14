import Nav from './components/Nav/nav'
import Presentation from './components/Presentation/presentation'
import Projets from './components/Projets/projets'
import Footer from './components/Footer/footer'
import './App.scss'
import Skills from './components/Skills/skills'
import Contact from './components/Contact/contact'

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Presentation />
        <Projets />
        <Skills />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
