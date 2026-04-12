'use client'

interface GalleryImage {
  src: string
  alt: string
  colSpan: string
  rowSpan: string
}

export function Gallery() {
  const images: GalleryImage[] = [
    {
      src: '/images/gallery-fire-roasted-vegetables.jpg',
      alt: 'Fire-roasted vegetables with charring marks',
      colSpan: 'md:col-span-1',
      rowSpan: 'md:row-span-1',
    },
    {
      src: '/images/gallery-ember-steak.jpg',
      alt: 'Luxurious plated steak with ember accompaniments',
      colSpan: 'md:col-span-1',
      rowSpan: 'md:row-span-1',
    },
    {
      src: '/images/gallery-coastal-seafood.jpg',
      alt: 'Elegantly plated seafood dish',
      colSpan: 'md:col-span-1',
      rowSpan: 'md:row-span-1',
    },
    {
      src: '/images/gallery-ember-dessert.jpg',
      alt: 'Artistic dessert with ember and fire theme',
      colSpan: 'md:col-span-1',
      rowSpan: 'md:row-span-1',
    },
  ]

  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 z-10 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-headline mb-4 text-cream">Gallery</h2>
          <p className="text-cream/80 text-lg">
            A visual journey through fire-crafted cuisine
          </p>
        </div>

        {/* Asymmetric Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg group cursor-pointer ${image.colSpan} ${image.rowSpan}`}
              style={{
                aspectRatio: index % 2 === 0 ? '5/6' : '6/5',
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/60 transition-colors duration-300" />

              {/* Hover Content */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="text-center text-cream">
                  <p className="text-sm uppercase tracking-widest font-display opacity-90">Ember Kitchen</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-ember/5 rounded-full blur-3xl -ml-36 -mb-36 pointer-events-none" />
    </section>
  )
}
