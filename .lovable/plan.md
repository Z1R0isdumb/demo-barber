## Barber Shop Website — Build Plan

### Overview
A premium barbershop website with a noir-and-gold editorial aesthetic. Urbanist for bold display headings, Epilogue for clean body copy. Magazine-style asymmetric layouts with dramatic imagery and refined typography.

### Pages & Routes
- `/` — Home (hero, featured services preview, shop atmosphere, CTA)
- `/services` — Services & Pricing (full list with descriptions and prices)
- `/barbers` — Barbers / Team (photos, bios, specialties)
- `/gallery` — Gallery (haircut and interior photography grid)
- `/booking` — Booking / Contact (form + shop info + hours)

### Design Direction
- **Palette**: Noir & Gold — deep blacks (`#0d0d0d`, `#1a1a1a`) with luxurious gold accents (`#c9a84c`, `#f0d78c`).
- **Typography**: Urbanist for headings (bold, geometric, modern), Epilogue for body copy (clean, readable).
- **Layout**: Magazine-style — asymmetric grids, featured content blocks, editorial whitespace, bold imagery with text overlays.
- **Feel**: Premium, classic barbershop, masculine but refined. Dark mode by default with gold highlights.

### Implementation Steps

1. **Setup & Fonts**
   - Install `@fontsource/urbanist` and `@fontsource/epilogue`.
   - Update `src/styles.css` with Noir & Gold color tokens and font family mappings.
   - Update `src/routes/__root.tsx` head metadata for the barber shop brand.

2. **Shared Components**
   - Create a shared `Header` component with navigation links (Home, Services, Barbers, Gallery, Booking) and a gold-accented logo.
   - Create a shared `Footer` with shop hours, contact info, and social links.

3. **Home Page (`/`)**
   - Hero: Full-width dramatic barbershop imagery with gold-accented headline and CTA to book.
   - Featured services preview: 3-card asymmetric grid with gold borders.
   - Shop atmosphere section: editorial split layout with image and quote.
   - CTA band: dark background with gold accent, prompting to book.

4. **Services Page (`/services`)**
   - Editorial header with page title.
   - Service categories in a magazine-style grid: Haircuts, Beard & Shave, Treatments.
   - Each service card: name, description, price, duration.

5. **Barbers Page (`/barbers`)**
   - Team grid with portrait photos, names, titles, and short bios.
   - Gold accent lines separating cards.
   - Optional: specialties tags per barber.

6. **Gallery Page (`/gallery`)**
   - Masonry or asymmetric photo grid of haircuts and shop interior.
   - Hover effects revealing style name or category.

7. **Booking Page (`/booking`)**
   - Contact form (name, phone, email, preferred date/time, service, message).
   - Shop info sidebar: address, phone, email, hours.
   - Gold accent on form focus states and submit button.

8. **SEO & Metadata**
   - Unique `head()` metadata (title, description, og tags) on every route.

### Technical Notes
- All pages are separate TanStack routes for SEO and SSR.
- No backend needed — booking form is a static contact form (can integrate email later if needed).
- Imagery: generate barbershop-themed images for hero, services, barbers, and gallery.
- Responsive design: magazine layouts gracefully collapse to single-column on mobile.