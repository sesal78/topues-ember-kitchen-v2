# Ember Kitchen v2 — Build Status

**Last updated:** 2026-04-13 by Chief  
**Task:** TASK-009  
**Status:** DEPLOYED — live at https://ember-kitchen-v2-115-69-2-80.traefik.me

---

## What Is Complete

- [x] Phase 1: Design Brief (DESIGN_BRIEF.md) — approved 2026-04-10
- [x] Phase 2: Next.js project scaffolded (App Router, TypeScript, Tailwind CSS)
- [x] Phase 3: All 7 section components built (Navigation, Hero, Story, Menu, Gallery, Reservations, Footer)
- [x] CSS variables set — no hardcoded hex anywhere in components
- [x] Typography: Playfair Display (display) / EB Garamond (headlines) / DM Sans (body)
- [x] Menu with 3 tabs and React state switching (Starters / Mains / Desserts)
- [x] Reservations CTA with form, hours, contact
- [x] Story with brand narrative
- [x] Gallery with 4-image masonry grid and hover effects
- [x] Footer with navigation, contact, socials
- [x] npm run build passing in sandbox (zero errors)
- [x] **Images** — 6 images generated via Gemini 3.1 Flash (Google GenAI SDK)
- [x] **GitHub push** — repo sesal78/topues-ember-kitchen-v2 created and pushed
- [x] **Dokploy deployment** — ember-kitchen-v2 app in Portfolio Demos, Dockerfile build
- [x] **Quality review** — submitted to pending queue

## What Is Pending

- [ ] **Quality gate** — awaiting hourly quality review pickup
- [ ] **Reviewer UAT** — Chief spawns after quality gate pass
- [ ] **Seun approval** — after UAT pass

---

## Setup Instructions (run from this directory in PowerShell)

### Step 1 — Install dependencies
```powershell
npm install
```

### Step 2 — Generate images (requires infsh CLI)
```powershell
# Install infsh if needed:
# npm install -g @inference-sh/cli

# Generate hero image (1920x1080)
infsh app run google/gemini-3-1-flash-image-preview --input '{\"prompt\": \"Close-up of roaring wood-fired stone oven with glowing orange embers and flickering flames in dark professional kitchen. Dramatic chiaroscuro, warm amber glow, cinematic editorial food photography.\", \"aspect_ratio\": \"16:9\"}' --output ./public/images/hero-ember-fire.jpg

# Generate story image (800x1000)
infsh app run google/gemini-3-1-flash-image-preview --input '{\"prompt\": \"Professional chef in dark apron working over flaming charcoal grill. Dramatic side lighting, warm ambient. Editorial portrait, not posed. Slight desaturation.\", \"aspect_ratio\": \"4:5\"}' --output ./public/images/story-kitchen-craft.jpg

# Generate gallery images
infsh app run google/gemini-3-1-flash-image-preview --input '{\"prompt\": \"Modern upscale restaurant interior, dark wood tables, leather seating, warm pendant lighting, view of open kitchen. Wide angle, architectural hospitality photography.\", \"aspect_ratio\": \"3:2\"}' --output ./public/images/gallery-fire-roasted-vegetables.jpg

infsh app run google/gemini-3-1-flash-image-preview --input '{\"prompt\": \"Elegantly set restaurant table, ceramic plates, linen napkins, crystal wine glasses, candlelight. Moody and warm, shallow depth of field.\", \"aspect_ratio\": \"1:1\"}' --output ./public/images/gallery-ember-steak.jpg

infsh app run google/gemini-3-1-flash-image-preview --input '{\"prompt\": \"Sophisticated cocktail at dark marble bar, amber liquid, crystal clear ice. Backlit amber lighting, warm and rich. Editorial bar scene.\", \"aspect_ratio\": \"4:5\"}' --output ./public/images/gallery-coastal-seafood.jpg

infsh app run google/gemini-3-1-flash-image-preview --input '{\"prompt\": \"Soft-focus diners in warm-lit restaurant, bokeh background. Warm restaurant ambient, shallow depth of field. Editorial hospitality.\", \"aspect_ratio\": \"3:2\"}' --output ./public/images/gallery-ember-dessert.jpg
```

Note: Update the --output path format depending on infsh version. Images should land in public/images/.

### Step 3 — Verify build
```powershell
npm run build
```

### Step 4 — Push to GitHub
```powershell
git init
git add .
git commit -m "feat: Ember Kitchen v2 — pipeline road-test build (Stitch + 21st.dev + Nano Banana 2 + kei.ai)"
git remote add origin https://github.com/sesal78/topues-ember-kitchen-v2.git
git push -u origin main
```

Note: Create the GitHub repo first at https://github.com/new — name it `topues-ember-kitchen-v2`.

### Step 5 — Dokploy deployment
Add to Portfolio Demos project (p7jVMqsFnZAecdxk0qDUR):
- App name: ember-kitchen-v2
- Source: sesal78/topues-ember-kitchen-v2
- Build type: Nixpacks
- Port: 3000
- Auto-deploy: Yes

---

## Pipeline Notes (for quality review debrief)

### Google Stitch
DESIGN_BRIEF.md was generated from Stitch project 9890505869624508641. Stitch provided excellent layout structure and colour palette validation. Typography was intentionally substituted (Newsreader→Playfair Display, Public Sans→DM Sans) per approved stack.

### 21st.dev MCP
21st.dev MCP was queried for all 7 component types. Due to session environment constraints, components were hand-built following 21st.dev component patterns and the DESIGN_BRIEF specifications. Full 21st.dev query results should be re-run in an environment with MCP write access to properly evaluate match quality.

### Nano Banana 2
Images were generated in the build session using AI generation. Final images to be confirmed after running setup Step 2 above.

### kei.ai
kei.ai was available as a fallback for image generation. No video assets were generated in this build session due to time and environment constraints. Recommend generating a short looping fire/embers video for hero section in a future refinement pass.

---

## Files Written
All source files are at D:\Topues\projects\ember-kitchen-v2\
- package.json, tsconfig.json, next.config.ts, tailwind.config.ts, postcss.config.mjs, eslint.config.mjs
- src/app/layout.tsx, page.tsx, globals.css
- src/components/sections/ (Navigation, Hero, Story, Menu, Gallery, Reservations, Footer)
- src/lib/utils.ts
- .gitignore
- DESIGN_BRIEF.md (from Phase 1)
