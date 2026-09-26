import { useState } from 'react'
import Loader from './components/Loader.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import HowIThink from './components/HowIThink.jsx'
import Resume from './components/Resume.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />
      {loaded && (
        <>
          <div className="noise-overlay" />
          <CustomCursor />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <HowIThink />
            <Resume />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}
