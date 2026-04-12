'use client'

import { Navigation } from '@/components/sections/Navigation'
import { Hero } from '@/components/sections/Hero'
import { Story } from '@/components/sections/Story'
import { Menu } from '@/components/sections/Menu'
import { Gallery } from '@/components/sections/Gallery'
import { Reservations } from '@/components/sections/Reservations'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-charcoal text-cream">
      <Navigation />
      <main className="flex-1 pt-20">
        <Hero />
        <Story />
        <Menu />
        <Gallery />
        <Reservations />
        <Footer />
      </main>
    </div>
  )
}
