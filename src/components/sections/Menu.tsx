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
    <section id="menu" className="relative py-20 md:py-28 bg-surface-container overflow-hidden">
      <div className="frame">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Header and category tabs */}
          <div className="lg:col-span-5">
            <h2 className="rise heading-headline mb-4 text-cream">Our Menu</h2>
            <p className="rise d1 text-cream text-lg mb-12">
              Crafted with fire, passion, and the finest ingredients
            </p>

            <div className="rise d2 flex flex-wrap lg:flex-col items-start gap-x-8 gap-y-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                  className={cn(
                    'font-headline text-2xl md:text-4xl text-left py-1 transition-colors duration-300',
                    activeCategory === category
                      ? 'text-terracotta-text'
                      : 'text-outline-muted hover:text-cream'
                  )}
                >
                  {category === 'starters' && 'Ember Appetizers'}
                  {category === 'mains' && 'Heart of the Kitchen'}
                  {category === 'desserts' && 'Sweet Finale'}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <div className="rise d1 lg:col-span-6 lg:col-start-7 space-y-10 lg:pt-4">
            {items.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-start gap-6 mb-2">
                  <h3 className="text-2xl md:text-3xl text-cream font-semibold">{item.name}</h3>
                  <span className="text-terracotta-text text-xl md:text-2xl font-semibold whitespace-nowrap">
                    ${item.price}
                  </span>
                </div>
                <p className="text-cream text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
