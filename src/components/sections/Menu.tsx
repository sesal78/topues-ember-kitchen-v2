'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

type MenuCategory = 'starters' | 'mains' | 'desserts'

interface MenuItem {
  name: string
  description: string
  price: number
}

const menuData: Record<MenuCategory, MenuItem[]> = {
  starters: [
    {
      name: 'Fire-Roasted Beet Hummus',
      description: 'Charred beets with tahini, pomegranate molasses, and crispy flatbread',
      price: 12,
    },
    {
      name: 'Charred Octopus with Citrus',
      description: 'Tender octopus with wood-fired char, citrus emulsion, and Castelvetrano olives',
      price: 14,
    },
    {
      name: 'Ember Mushroom Risotto',
      description: 'Creamy arborio risotto with flame-roasted forest mushrooms and aged parmesan',
      price: 13,
    },
  ],
  mains: [
    {
      name: 'Prime Rib with Smoke Salt Crust',
      description: 'Premium ribeye with house-made smoke salt, charred root vegetables, and bone marrow butter',
      price: 32,
    },
    {
      name: 'Pan-Seared Halibut with Ember Vegetables',
      description: 'Wild-caught halibut, fire-roasted seasonal vegetables, and beurre blanc',
      price: 28,
    },
    {
      name: 'Heritage Chicken, Wood-Fired',
      description: 'Whole spiced chicken, brick-pressed over flames, with fire-roasted root vegetables and jus',
      price: 26,
    },
  ],
  desserts: [
    {
      name: 'Burnt Sugar Crème Brûlée',
      description: 'Classic custard with caramelized sugar crust and vanilla bean from Madagascar',
      price: 8,
    },
    {
      name: 'Charcoal Chocolate Cake',
      description: 'Dark chocolate cake with activated charcoal, edible ash, and cocoa soil',
      price: 9,
    },
    {
      name: 'Spiced Pear Tart with Ember Caramel',
      description: 'Roasted pear tart with warm spices, ember caramel, and crème fraîche',
      price: 8,
    },
  ],
}

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('starters')

  const categories: MenuCategory[] = ['starters', 'mains', 'desserts']
  const items = menuData[activeCategory]

  return (
    <section id="menu" className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 z-10 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-headline mb-4 text-cream">Our Menu</h2>
          <p className="text-cream/80 text-lg">
            Crafted with fire, passion, and the finest ingredients
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-8 mb-16 border-b border-outline-muted pb-8 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                'text-label px-4 py-2 transition-all duration-300 uppercase tracking-wider',
                activeCategory === category
                  ? 'text-terracotta border-b-2 border-terracotta pb-6'
                  : 'text-outline-muted hover:text-cream'
              )}
            >
              {category === 'starters' && 'Ember Appetizers'}
              {category === 'mains' && 'Heart of the Kitchen'}
              {category === 'desserts' && 'Sweet Finale'}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="space-y-8 max-w-2xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="border-b border-outline-muted/50 pb-8 last:border-b-0"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl text-cream font-semibold">{item.name}</h3>
                <span className="text-terracotta font-semibold ml-4 whitespace-nowrap">
                  ${item.price}
                </span>
              </div>
              <p className="text-cream/75 text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
