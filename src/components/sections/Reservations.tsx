'use client'

export function Reservations() {
  return (
    <section id="reserve" className="relative py-20 md:py-28 bg-charcoal overflow-hidden">
      <div className="frame">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="rise heading-headline mb-4 text-cream">Reserve Your Table</h2>
          <p className="rise d1 text-cream text-lg">
            Join us for an unforgettable evening of fire, passion, and culinary craft
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Reservation Form */}
          <div className="rise lg:col-span-5">
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
          <div className="rise d1 lg:col-span-6 lg:col-start-7 space-y-10">
            <div>
              <h3 className="text-label text-terracotta-text mb-4">Hours of Operation</h3>
              <div className="space-y-3 text-cream text-lg">
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
              <h3 className="text-label text-terracotta-text mb-4">Location & Contact</h3>
              <div className="space-y-2 text-cream text-lg">
                <p>Melbourne, Victoria</p>
                <a href="tel:+61390000000" className="block text-terracotta-text hover:text-ember transition-colors">
                  +61 3 9000 0000
                </a>
                <a href="mailto:reservations@emberkitchen.com" className="block text-terracotta-text hover:text-ember transition-colors">
                  reservations@emberkitchen.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-label text-terracotta-text mb-4">Private Events</h3>
              <p className="text-cream text-lg leading-relaxed">
                Celebrate special occasions with our private dining options. Contact us for bespoke menu planning and catering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
