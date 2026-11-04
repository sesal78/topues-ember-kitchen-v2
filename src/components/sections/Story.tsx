'use client'

export function Story() {
  return (
    <section id="story" className="relative py-20 md:py-28 bg-charcoal overflow-hidden">
      <div className="frame">
        <div className="grid lg:grid-cols-12 lg:grid-rows-2 gap-x-8 gap-y-8">
          {/* Heading first, so it leads on narrow screens; on wide screens it sits above the midline beside the photo */}
          <h2 className="rise heading-headline text-cream lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:self-end">
            Crafted by Fire, Defined by Passion
          </h2>

          {/* Image */}
          <div className="rise relative lg:col-span-6 lg:col-start-1 lg:row-start-1 lg:row-span-2 aspect-[4/3] lg:aspect-[4/5] rounded-lg overflow-hidden">
            <img
              src="/images/story-kitchen-craft.jpg"
              alt="Ember Kitchen craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-2 lg:self-start">
            <div className="space-y-6 text-lg text-cream leading-relaxed">
              <p className="rise d1">
                Ember Kitchen exists at the intersection of fire and finesse. Founded on the principle that the finest ingredients deserve transformative heat, our chef&apos;s philosophy celebrates the Maillard reaction as a form of culinary art.
              </p>
              <p className="rise d2">
                With two decades of cooking expertise, we&apos;ve perfected the balance between precision and creativity. Every flame is controlled. Every ingredient is sourced with intention. Every plate tells a story of Melbourne&apos;s vibrant food culture and our commitment to bold, memorable dining.
              </p>
              <p className="rise d3">
                We believe dining here isn&apos;t just a meal — it&apos;s an experience of warmth, craftsmanship, and unbridled hospitality. Welcome to our kitchen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
