import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background accent grid */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.12),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(99,102,241,0.12),transparent_40%)]" />

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-slate-950/80 py-10 text-center text-blue-100/70">
        <p>
          © {new Date().getFullYear()} Your Name. Built with love, motion, and pixels.
        </p>
      </footer>
    </div>
  )
}

export default App
