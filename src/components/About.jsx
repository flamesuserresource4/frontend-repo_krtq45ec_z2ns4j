import React from 'react'

export default function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-white">
      <h2 className="text-3xl font-semibold sm:text-4xl">About</h2>
      <p className="mt-4 text-lg leading-relaxed text-blue-100/90">
        I'm a product-minded engineer who blends design, code, and strategy to ship premium digital experiences.
        I care about crisp details, performance, and meaningful motion. I thrive in fast-paced teams, from zero-to-one
        ventures to scale-ups modernizing their stack.
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        <li className="rounded-xl border border-white/10 bg-white/5 p-4 text-blue-100/90">• UI/UX Design and Prototyping</li>
        <li className="rounded-xl border border-white/10 bg-white/5 p-4 text-blue-100/90">• Full‑stack with React, Node, Python</li>
        <li className="rounded-xl border border-white/10 bg-white/5 p-4 text-blue-100/90">• Motion and micro‑interactions</li>
        <li className="rounded-xl border border-white/10 bg-white/5 p-4 text-blue-100/90">• Data viz and dashboards</li>
      </ul>
    </section>
  )
}
