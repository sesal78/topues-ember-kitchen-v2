'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    // No backdrop-filter here: it would make this bar the container of the fixed full-screen mobile menu.
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal text-cream">
      <div className="frame py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-bold z-50">
          Ember
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#story" className="text-base text-cream hover:text-ember transition-colors">
            Our Story
          </a>
          <a href="#menu" className="text-base text-cream hover:text-ember transition-colors">
            Menu
          </a>
          <a href="#gallery" className="text-base text-cream hover:text-ember transition-colors">
            Gallery
          </a>
          <a href="#reserve" className="btn-primary">
            Reserve
          </a>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className={cn(
              'block w-6 h-0.5 bg-cream transition duration-300',
              isMobileMenuOpen && 'rotate-45 translate-y-2'
            )}
          />
          <span
            className={cn(
              'block w-6 h-0.5 bg-cream transition duration-300',
              isMobileMenuOpen && 'opacity-0'
            )}
          />
          <span
            className={cn(
              'block w-6 h-0.5 bg-cream transition duration-300',
              isMobileMenuOpen && '-rotate-45 -translate-y-2'
            )}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-charcoal/98 z-40 flex flex-col items-center justify-center gap-8 transition-opacity duration-300 md:hidden',
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <a
          href="#story"
          onClick={handleNavClick}
          className="text-2xl font-display text-cream hover:text-terracotta transition"
        >
          Our Story
        </a>
        <a
          href="#menu"
          onClick={handleNavClick}
          className="text-2xl font-display text-cream hover:text-terracotta transition"
        >
          Menu
        </a>
        <a
          href="#gallery"
          onClick={handleNavClick}
          className="text-2xl font-display text-cream hover:text-terracotta transition"
        >
          Gallery
        </a>
        <a
          href="#reserve"
          onClick={handleNavClick}
          className="btn-primary text-lg mt-4"
        >
          Reserve a Table
        </a>
      </div>
    </nav>
  )
}
