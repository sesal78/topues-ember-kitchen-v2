'use client'

interface GalleryImage {
  src: string
  alt: string
  span: string
}

export function Gallery() {
  const images: GalleryImage[] = [
    {
      src: '/images/gallery-fire-roasted-vegetables.jpg',
      alt: 'Open kitchen and dining room at Ember Kitchen',
      span: 'md:col-span-7',
    },
    {
      src: '/images/gallery-ember-steak.jpg',
      alt: 'Candlelit table set with plates, linen napkins and wine glasses',
      span: 'md:col-span-5',
    },
    {
      src: '/images/gallery-coastal-seafood.jpg',
      alt: 'Old fashioned cocktail on a dark marble bar',
      span: 'md:col-span-5',
    },
    {
      src: '/images/gallery-ember-dessert.jpg',
      alt: 'Two diners laughing at a warm-lit table',
      span: 'md:col-span-7',
    },
  ]

  return (
    <section id="gallery" className="relative py-20 md:py-28 bg-charcoal overflow-hidden">
      <div className="frame">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="rise heading-headline mb-4 text-cream">Gallery</h2>
          <p className="rise d1 text-cream text-lg">
            A visual journey through fire-crafted cuisine
          </p>
        </div>

        {/* Two rows of large photographs, one row height */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 md:auto-rows-[clamp(18rem,36vw,34rem)]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`rise relative overflow-hidden rounded-lg group aspect-[4/3] md:aspect-auto ${image.span}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
