import React, { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // This demo just simulates submit
    await new Promise(r => setTimeout(r, 800))
    setStatus('Thanks! I will reach out shortly.')
  }

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-white">
      <h2 className="text-3xl font-semibold sm:text-4xl">Contact</h2>
      <p className="mt-2 text-blue-100/80">Have a project in mind? Let’s talk.</p>
      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <div>
          <label className="mb-1 block text-sm text-blue-100/80">Name</label>
          <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-blue-200/50 focus:border-cyan-400/40" placeholder="Your name" required />
        </div>
        <div>
          <label className="mb-1 block text-sm text-blue-100/80">Email</label>
          <input type="email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-blue-200/50 focus:border-cyan-400/40" placeholder="you@example.com" required />
        </div>
        <div>
          <label className="mb-1 block text-sm text-blue-100/80">Message</label>
          <textarea rows="5" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-blue-200/50 focus:border-cyan-400/40" placeholder="Tell me about your project" required />
        </div>
        <div className="flex items-center gap-4">
          <button className="rounded-xl border border-cyan-400/40 bg-cyan-500/20 px-5 py-3 text-cyan-100 backdrop-blur transition hover:bg-cyan-500/30" type="submit">Send message</button>
          <span className="text-sm text-blue-200/70">{status}</span>
        </div>
      </form>
    </section>
  )
}
