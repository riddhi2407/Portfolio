import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import LazySection from './components/LazySection.jsx'

// Below-the-fold sections are split into separate JS chunks
const About = lazy(() => import('./components/About.jsx'))
const Projects = lazy(() => import('./components/Projects.jsx'))
const Skills = lazy(() => import('./components/Skills.jsx'))
const Resume = lazy(() => import('./components/Resume.jsx'))
const Contact = lazy(() => import('./components/Contact.jsx'))

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        {[About, Projects, Skills, Resume, Contact].map((Section, i) => (
          <LazySection key={i}>
            <Suspense fallback={<div className="section-loading">Loading…</div>}>
              <Section />
            </Suspense>
          </LazySection>
        ))}
      </main>
      <footer className="footer">© {new Date().getFullYear()} Riddhi Dhanawade</footer>
    </>
  )
}
