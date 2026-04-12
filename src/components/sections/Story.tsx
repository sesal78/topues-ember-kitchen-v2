'use client'

export function Story() {
  return (
    <section id="story" className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96 rounded-lg overflow-hidden shadow-xl">
            <img
              src="/images/story-kitchen-craft.jpg"
              alt="Ember Kitchen craftsmanship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 to-transparent" />
          </div>

          {/* Text */}
          <div className="z-10">
            <h2 className="heading-headline mb-8 text-cream">
              Crafted by Fire, Defined by Passion
            </h2>
            <div className="space-y-6 text-lg text-cream/90 leading-relaxed">
              <p>
                Ember Kitchen exists at the intersection of fire and finesse. Founded on the principle that the finest ingredients deserve transformative heat, our chef&apos;s philosophy celebrates the Maillard reaction as a form of culinary art.
              </p>
              <p>
                With two decades of cooking expertise, we&apos;ve perfected the balance between precision and creativity. Every flame is controlled. Every ingredient is sourced with intention. Every plate tells a story of Melbourne&apos;s vibrant food culture and our commitment to bold, memorable dining.
              </p>
              <p>
                We believe dining here isn&apos;t just a meal — it&apos;s an experience of warmth, craftsmanship, and unbridled hospitality. Welcome to our kitchen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
