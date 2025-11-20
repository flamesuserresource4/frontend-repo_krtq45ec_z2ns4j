import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Iridescent gradient veil (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.18),transparent_40%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.18),transparent_40%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200 backdrop-blur-sm"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          Available for freelance projects
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl"
        >
          Hi, I'm <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">Your Name</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mb-8 max-w-2xl text-lg text-blue-100/90"
        >
          Designer and full‑stack developer crafting delightful, high‑performance products with a focus on modern, vibrant, and futuristic aesthetics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-xl border border-blue-400/40 bg-blue-500/20 px-5 py-3 text-blue-100 backdrop-blur transition hover:bg-blue-500/30">
            View Projects
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-white/90 backdrop-blur transition hover:bg-white/15">
            Contact
          </a>
          <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/20 px-5 py-3 text-cyan-100 backdrop-blur transition hover:bg-cyan-500/30">
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
