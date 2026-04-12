# Ember Kitchen v2 -- Design Brief

> Single source of truth for all design, component, and image decisions.
> Generated from Google Stitch output on 2026-04-10.
> Stitch Project ID: 9890505869624508641
> Stitch Screen ID: 25870e1243f541b1ae5679808ec12224

---

## Visual Direction

### Palette

All colours referenced via CSS custom properties. No hardcoded hex in components.

| Token             | Hex       | Usage                                      |
|-------------------|-----------|--------------------------------------------|
| --color-charcoal  | #1a1a18   | Primary background, footer, nav, CTA bg    |
| --color-terracotta| #c4623a   | Primary accent, buttons, active states      |
| --color-cream     | #f5efe4   | Text on dark, light section background      |
| --color-ember     | #e8864a   | Secondary accent, hover states              |
| --color-olive     | #6b7c5c   | Tertiary accent, subtle decorative elements |

Supporting tones (derived from Stitch FIDELITY variant):
- Surface container: #20201e (cards on dark backgrounds)
- Outline/muted text: #a48c83 (metadata, captions)
- Light text on cream: #1a1a18 at 80% opacity

### Typography

| Role     | Font                     | Fallback   | Weight Range | Notes                            |
|----------|--------------------------|------------|--------------|----------------------------------|
| Display  | Playfair Display Variable| serif      | 400-800      | Hero, section headings           |
| Headline | EB Garamond              | serif      | 400-700      | Sub-headings, menu item names    |
| Body     | DM Sans                  | sans-serif | 400-600      | Paragraphs, descriptions, labels |
| Label    | DM Sans                  | sans-serif | 500-700      | Nav links, buttons, meta text    |

Note: Stitch used Newsreader/Public Sans. For the Next.js build we substitute
Playfair Display (display) and DM Sans (body) per the approved stack, as these
better match the editorial warmth needed. EB Garamond serves as headline serif.

### Layout Feel

- Full-viewport hero with dark overlay
- Generous vertical padding between sections (py-32 / 8rem minimum)
- Max content width: 1280px (max-w-7xl), centred
- Alternating dark/light section backgrounds for rhythm
- Asymmetric grid layouts for editorial feel (Our Story: 2-col with offset image)

### Animation Style

- Scroll-triggered fade-in (opacity 0 to 1, translateY 20px to 0)
- Duration: 600-800ms, ease-out
- Gallery images: subtle scale on hover (1.0 to 1.05, 700ms)
- No bounce, no spring physics, no parallax
- Nav: backdrop blur on scroll, smooth background opacity transition
- CTA button: colour transition on hover (300ms)

---

## Section List (in scroll order)

1. **Navigation** -- Fixed transparent navbar with logo, section links, and Book Now CTA. Gains backdrop blur on scroll.
2. **Hero** -- Full-viewport, full-bleed fire/food imagery with 60% dark overlay. "EMBER KITCHEN" in oversized display serif. Tagline: "Wood-fired hearth, modern Australian soul." Scroll-down indicator.
3. **Our Story** -- Light cream background. Two-column: copy left, portrait-orientation chef/interior image right. Terracotta accent block overlapping image. Section label "The Craft" in terracotta small caps.
4. **Menu Preview** -- Dark charcoal background. Three category tabs (Starters, Mains, Desserts). 2-column grid of menu items with name, price in terracotta, and short description. "View Full Menu" ghost button.
5. **Atmosphere Gallery** -- Dark background. Asymmetric grid: large image (8-col) left, two stacked images (4-col) right. Hover: subtle scale transform. Shows interior, table setting, and bar/cocktails.
6. **Reservations CTA** -- Deepest charcoal (#1a1a18) background with subtle glow accents. Large display heading "Reserve Your Table". Body text encouraging bookings. Primary CTA (Book Online) + secondary (Private Dining). Below: Location, Contact, Hours in 3-column grid.
7. **Footer** -- Charcoal background, minimal. Logo + tagline, legal links, copyright.

---

## Image Requirements

### IMG-01: Hero Background
- **Location:** Hero section, full-bleed behind dark overlay
- **Subject:** Close-up of a roaring wood-fired stone oven with glowing orange embers and flickering flames in a dark professional kitchen
- **Mood/Lighting:** Dramatic chiaroscuro, warm amber glow from one side, deep shadows. Intimate, primal, sensuous.
- **Style:** Editorial food/kitchen photography, cinematic depth of field. NOT stock photo.
- **Colour grounding:** Warm terracotta and deep charcoal dominate. Ember orange highlights.
- **Dimensions:** 1920x1080

### IMG-02: Our Story -- Chef Portrait
- **Location:** Our Story section, right column
- **Subject:** Professional chef in dark apron working over a flaming charcoal grill. Editorial portrait, not posed.
- **Mood/Lighting:** Dramatic side lighting, warm ambient. Intensity and craft visible.
- **Style:** Architectural/hospitality photography. Slight desaturation (grayscale 20%).
- **Colour grounding:** Dark background, warm skin tones, terracotta flame highlights.
- **Dimensions:** 800x1000 (portrait orientation)

### IMG-03: Gallery -- Restaurant Interior (Large)
- **Location:** Gallery section, large left panel (8-col)
- **Subject:** Modern upscale restaurant interior with dark wood tables, leather seating, dim warm ambient lighting, view of open kitchen
- **Mood/Lighting:** Warm pendant lighting, golden hour interior feel. Inviting, lived-in premium.
- **Style:** Architectural/hospitality editorial. Wide angle but intimate framing.
- **Colour grounding:** Cream, warm wood tones, soft ember light accents.
- **Dimensions:** 1200x800

### IMG-04: Gallery -- Table Setting (Top Right)
- **Location:** Gallery section, top right panel
- **Subject:** Elegantly set restaurant table -- ceramic plates, linen napkins, crystal wine glasses under soft spotlighting
- **Mood/Lighting:** Candlelight, moody and warm. Shallow depth of field.
- **Style:** Lifestyle/hospitality, intimate close-up.
- **Colour grounding:** Cream ceramics, warm wood, terracotta napkin accent.
- **Dimensions:** 800x800

### IMG-05: Gallery -- Bar/Cocktail (Bottom Right)
- **Location:** Gallery section, bottom right panel
- **Subject:** Sophisticated cocktail being prepared at a dark marble bar with amber liquid and crystal clear ice
- **Mood/Lighting:** Backlit amber, warm and rich. Motion blur on pour optional.
- **Style:** Lifestyle photography, editorial bar scene.
- **Colour grounding:** Dark charcoal bar surface, amber liquid, terracotta warmth.
- **Dimensions:** 800x1000

### IMG-06: Gallery -- Ambiance/Diners (Optional 4th)
- **Location:** Additional gallery image or background accent
- **Subject:** Soft-focus diners in warm-lit background, bokeh
- **Mood/Lighting:** Warm restaurant ambient, shallow depth of field
- **Style:** Editorial hospitality, NOT candid paparazzi
- **Colour grounding:** Warm tones throughout, muted olive in any plant elements
- **Dimensions:** 1200x800

---

## Component Requirements

### Navigation
- **Type:** Fixed top navbar, transparent initially, gains bg-charcoal/90 + backdrop-blur on scroll
- **Behaviour:** Logo left, nav links centre-right, Book Now button far right. Mobile: hamburger menu.
- **21st.dev query:** "navigation transparent scroll dark"

### Hero
- **Type:** Full-viewport section with background image, dark overlay, centred text
- **Behaviour:** Parallax NOT used. Static image with overlay. Scroll-down bouncing arrow indicator.
- **21st.dev query:** "hero full-bleed overlay text centered"

### Our Story
- **Type:** Two-column split section, text left, image right
- **Behaviour:** Image slightly offset with terracotta accent block overlapping bottom-left. Fade-in on scroll.
- **21st.dev query:** "split section image text editorial"

### Menu Preview
- **Type:** Tabbed content section with menu item grid
- **Behaviour:** Three tabs (Starters, Mains, Desserts). Active tab: terracotta underline. Content swaps without page reload. 2-column grid. Each item: name (serif), price (terracotta), description (sans-serif muted).
- **21st.dev query:** "menu grid card category tabs"

### Reservations CTA
- **Type:** Full-width CTA section with form or booking link
- **Behaviour:** Large heading, body text, two buttons (primary filled terracotta, secondary ghost). Below: 3-column info grid (location, contact, hours). Subtle radial glow decorations.
- **21st.dev query:** "CTA section dark background form"

### Atmosphere Gallery
- **Type:** Asymmetric image grid (masonry-style)
- **Behaviour:** 12-column grid: 8-col large image left, 4-col with two stacked images right. Hover: scale 1.05 over 700ms. Overflow hidden on containers.
- **21st.dev query:** "masonry grid image hover reveal"

### Footer
- **Type:** Minimal dark footer
- **Behaviour:** Logo + tagline left, legal links centre, copyright right. Single row on desktop, stacked on mobile.
- **21st.dev query:** "footer dark minimal contact"

---

## What Must Not Appear

### Visual Anti-Patterns
- Bright white (#ffffff) backgrounds anywhere -- use aged cream (#f5efe4) for light sections
- Red-and-white checked tablecloth or generic Italian restaurant imagery
- Neon or saturated colours that break the warm, muted palette
- Stock photo aesthetic (overly lit, plastic-looking food, forced smiles)
- Gradients that feel digital/tech rather than warm/organic
- Rounded pill buttons or bubbly UI elements (keep corners sharp: 4px max)
- Carousel/slider for gallery (use static grid)

### Content Anti-Patterns
- "World-class", "second to none", "passionate about food", "hidden gem"
- Corporate About Us tone ("Founded in 2024, Ember Kitchen is...")
- Generic fine dining language ("exquisite", "culinary journey", "gastronomic")
- Exclamation marks in any heading or body copy
- Lorem ipsum or placeholder text of any kind
- Menu items without prices
- Stock photography watermarks or attribution text visible

### Behaviour Anti-Patterns
- Auto-playing video or audio
- Pop-up modals on page load
- Parallax scrolling effects
- Bounce or spring animations
- Horizontal scrolling sections
- Infinite scroll
- Loading spinners visible on initial page load

---

## Stitch Pipeline Notes

**What Stitch provided:**
- Full single-page layout with all 7 sections in correct order
- Colour palette applied consistently via Tailwind config
- Editorial serif/sans-serif typography pairing
- Asymmetric gallery grid layout
- Menu section with tabbed categories
- Reservations CTA with info grid
- Generated imagery (Google-hosted) that demonstrates correct mood and composition

**What needs adjustment for Next.js build:**
- Stitch used Newsreader + Public Sans; we substitute Playfair Display + DM Sans
- Stitch used CDN Tailwind; we use local Tailwind with CSS variables
- Stitch images are Google-hosted; we regenerate all with Nano Banana 2
- Menu tabs are static HTML; need React state for tab switching
- No scroll animations in Stitch output; add Framer Motion fade-ins
- Nav scroll behaviour needs JavaScript; implement with useEffect + scroll listener
- Mobile responsive layout needs verification and adjustment
- Footer needs social media icon links added

**Stitch design system asset ID:** 4180840669462423650
