'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'bg-charcoal text-cream',
        isScrolled ? 'backdrop-blur-md bg-opacity-95' : 'bg-opacity-0'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-bold">
          Ember
        </a>

        <div className="flex items-center gap-8">
          <a href="#story" className="text-sm hover:text-terracotta transition">
            Our Story
          </a>
          <a href="#menu" className="text-sm hover:text-terracotta transition">
            Menu
          </a>
          <a href="#gallery" className="text-sm hover:text-terracotta transition">
            Gallery
          </a>
          <a href="#reserve" className="btn-primary">
            Reserve
          </a>
        </div>
      </div>
    </nav>
  )
}
