'use client'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero-ember-fire.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-charcoal/60 z-0" />

      {/* Hero content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="heading-display mb-6 text-cream drop-shadow-lg">
          Ember Kitchen
        </h1>
        <p className="text-xl md:text-2xl text-cream mb-8 font-light drop-shadow-md">
          Where fire meets finesse
        </p>
        <p className="text-lg text-cream/90 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
          Experience transformative cuisine born from carefully sourced ingredients and precision flame control. Every dish is a testament to culinary craft and unbridled hospitality.
        </p>
        <button className="btn-primary shadow-lg">Reserve Your Table</button>
      </div>

      {/* Gradient overlay bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal to-transparent pointer-events-none z-5" />
    </section>
  )
}
