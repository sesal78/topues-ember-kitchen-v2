'use client'

import { useEffect, useState } from 'react'
import { ovenStatus } from '@/lib/hours'

export function Hero() {
  // Set after mount so the server and browser agree; the hours below stay as the plain fallback.
  const [status, setStatus] = useState('')

  useEffect(() => {
    const update = () => setStatus(ovenStatus(new Date()))
    update()
    const timer = setInterval(update, 60_000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100svh-5rem)] flex items-end overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero-ember-fire.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Flat scrim for text legibility */}
      <div className="absolute inset-0 bg-charcoal/45 z-0" />

      {/* Hero content */}
      <div className="frame relative z-10 pt-24 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <h1 className="heading-display hero-in mb-6 text-cream">Ember Kitchen</h1>
          <p className="hero-in d1 text-xl md:text-3xl text-cream mb-6 font-light">
            Where fire meets finesse
          </p>
          <p className="hero-in d2 text-lg text-cream mb-10 max-w-xl leading-relaxed">
            Experience transformative cuisine born from carefully sourced ingredients and precision flame control. Every dish is a testament to culinary craft and unbridled hospitality.
          </p>
          <div className="hero-in d3 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a href="#reserve" className="btn-primary">
              Reserve Your Table
            </a>
            {status && <p className="text-cream text-base">{status}</p>}
          </div>
        </div>
      </div>
    </section>
  )
}
