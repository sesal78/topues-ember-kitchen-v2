'use client'

export function Footer() {
  return (
    <footer className="bg-surface-container py-16">
      <div className="frame">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold text-cream mb-4">Ember Kitchen</h3>
            <p className="text-outline-muted text-sm leading-relaxed">
              Fine dining born from fire and finesse. Where transformative heat meets carefully sourced ingredients, crafted with two decades of culinary expertise and unbridled hospitality.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-label text-cream mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#story" className="text-outline-muted hover:text-terracotta transition text-sm">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#menu" className="text-outline-muted hover:text-terracotta transition text-sm">
                  Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-outline-muted hover:text-terracotta transition text-sm">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#reserve" className="text-outline-muted hover:text-terracotta transition text-sm">
                  Reservations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-label text-cream mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-outline-muted">Melbourne, Victoria</li>
              <li>
                <a href="tel:+61390000000" className="text-outline-muted hover:text-terracotta transition">
                  +61 3 9000 0000
                </a>
              </li>
              <li>
                <a href="mailto:reservations@emberkitchen.com" className="text-outline-muted hover:text-terracotta transition">
                  reservations@emberkitchen.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-outline-muted">
          <p>&copy; 2026 Ember Kitchen. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="https://www.instagram.com/emberkitchen" className="hover:text-terracotta transition">
              Instagram
            </a>
            <a href="https://www.facebook.com/emberkitchen" className="hover:text-terracotta transition">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
