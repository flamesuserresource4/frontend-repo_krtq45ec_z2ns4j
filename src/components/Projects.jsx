import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Holographic Wallet',
    desc: 'A fintech dashboard with real-time analytics and a shimmering neon aesthetic.',
    tags: ['React', 'FastAPI', 'Tailwind'],
    link: '#'
  },
  {
    title: 'Identity Vault',
    desc: 'Secure digital identity manager featuring passkeys and verifiable credentials.',
    tags: ['Next.js', 'MongoDB', 'Auth'],
    link: '#'
  },
  {
    title: 'Motion UI Kit',
    desc: 'Framer Motion component library with polished micro-interactions.',
    tags: ['Framer Motion', 'Design'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-white">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold sm:text-4xl">Selected Projects</h2>
        <p className="mt-2 text-blue-100/80">A few things I've been building recently.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            whileHover={{ y: -4 }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition-colors hover:bg-white/10"
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-xl font-medium">{p.title}</h3>
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-0.5 text-xs text-cyan-200">{String(i+1).padStart(2,'0')}</span>
            </div>
            <p className="mb-4 text-blue-100/90">{p.desc}</p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map(t => (
                <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-blue-100/80">{t}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
