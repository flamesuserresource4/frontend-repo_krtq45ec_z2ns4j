import React, { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItem = (href, label) => (
    <a href={href} className="text-blue-100/90 hover:text-white transition px-3 py-2 rounded-lg hover:bg-white/10">
      {label}
    </a>
  )

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-2 backdrop-blur-lg">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg" />
            <span className="text-white font-semibold">Your Name</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navItem('#projects','Projects')}
            {navItem('#about','About')}
            {navItem('#contact','Contact')}
            <a href="mailto:you@example.com" className="ml-2 rounded-xl border border-cyan-400/40 bg-cyan-500/20 px-4 py-2 text-cyan-100 hover:bg-cyan-500/30">Hire me</a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden rounded-lg p-2 text-blue-100/90 hover:bg-white/10" aria-label="Toggle menu">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>

        {open && (
          <div className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-2 backdrop-blur md:hidden">
            <div className="flex flex-col">
              {navItem('#projects','Projects')}
              {navItem('#about','About')}
              {navItem('#contact','Contact')}
              <a href="mailto:you@example.com" className="mt-2 rounded-xl border border-cyan-400/40 bg-cyan-500/20 px-4 py-2 text-cyan-100 hover:bg-cyan-500/30">Hire me</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
