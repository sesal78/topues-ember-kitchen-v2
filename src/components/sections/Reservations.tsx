'use client'

export function Reservations() {
  return (
    <section id="reserve" className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-headline mb-4 text-cream">Reserve Your Table</h2>
          <p className="text-cream/80 text-lg">
            Join us for an unforgettable evening of fire, passion, and culinary craft
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Reservation Form */}
          <div>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-surface-container text-cream border border-outline-muted rounded placeholder-outline-muted focus:outline-none focus:border-terracotta transition-colors"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-surface-container text-cream border border-outline-muted rounded placeholder-outline-muted focus:outline-none focus:border-terracotta transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 bg-surface-container text-cream border border-outline-muted rounded placeholder-outline-muted focus:outline-none focus:border-terracotta transition-colors"
              />
              <input
                type="datetime-local"
                placeholder="Preferred Date & Time"
                className="w-full px-4 py-3 bg-surface-container text-cream border border-outline-muted rounded placeholder-outline-muted focus:outline-none focus:border-terracotta transition-colors"
              />
              <select className="w-full px-4 py-3 bg-surface-container text-cream border border-outline-muted rounded focus:outline-none focus:border-terracotta transition-colors">
                <option value="">Number of Guests</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6+">6+ Guests</option>
              </select>
              <button type="submit" className="w-full btn-primary mt-6">
                Book Now
              </button>
            </form>
          </div>

          {/* Operating Hours & Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-label text-terracotta mb-4 uppercase">Hours of Operation</h3>
              <div className="space-y-3 text-cream/90">
                <div className="flex justify-between">
                  <span>Lunch</span>
                  <span className="text-outline-muted">Wed–Fri 11:30am–2:30pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Dinner</span>
                  <span className="text-outline-muted">Tue–Sat 5:30pm–11:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday Brunch</span>
                  <span className="text-outline-muted">10:00am–3:00pm</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-label text-terracotta mb-4 uppercase">Location & Contact</h3>
              <div className="space-y-2 text-cream/90">
                <p>Melbourne, Victoria</p>
                <a href="tel:+61390000000" className="block text-terracotta hover:text-ember transition">
                  +61 3 9000 0000
                </a>
                <a href="mailto:reservations@emberkitchen.com" className="block text-terracotta hover:text-ember transition">
                  reservations@emberkitchen.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-label text-terracotta mb-4 uppercase">Private Events</h3>
              <p className="text-cream/90 text-sm leading-relaxed">
                Celebrate special occasions with our private dining options. Contact us for bespoke menu planning and catering.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-ember/5 rounded-full blur-3xl -ml-36 -mb-36 pointer-events-none" />
    </section>
  )
}
