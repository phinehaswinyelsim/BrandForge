# Asset checklist

This file tracks supplied concept assets and the production inputs Brand Forge must replace before launching any real client site.

## Savanna Grill concept

### Built in Phase 2

- Logo SVGs: primary, icon-only, one-colour, and reversed at `apps/savanna-grill/public/brand/`.
- Favicon set: SVG, 32px PNG, and 180px Apple touch icon.
- Open Graph image: `apps/savanna-grill/public/og-image.png`.
- Social graphics: three campaign templates in 1080x1080 and 1080x1350 under `apps/savanna-grill/public/brand/social/`.
- Print piece: A4 menu flyer at `output/pdf/savanna-grill-menu.pdf`.
- Reusable React templates and Playwright exporter: `apps/savanna-grill/src/app/graphics/page.tsx`, `apps/savanna-grill/src/components/SocialArtwork.tsx`, and `scripts/export-graphics.mjs`.

### Replace or approve before any real launch

- Replace the three marked gallery slots in the home page with licensed photos of the actual grill, shared dishes, and guests. Add descriptive alt text when replacing each slot.
- Replace the phone, WhatsApp number, email, social URLs, location/map query, and opening hours in `apps/savanna-grill/src/config/site.ts`.
- Review every menu item and GH₵ price in `apps/savanna-grill/src/content/menu.ts`; these are illustrative concept content.
- Replace `NEXT_PUBLIC_SITE_URL` in `apps/savanna-grill/.env.example` with the verified domain.
- Confirm the brand name, menu wording, food descriptions, and local business schema with the real owner.
- Replace `hello@example.com` and `+233 XX XXX XXXX` everywhere they are presented as contact details.

All four apps now include project-specific checks and deploy notes. The final production checklist follows.

## Adwoa Glow concept

### Built in Phase 3

- Logo SVGs: primary, one-colour, reversed, icon, and favicon at `apps/adwoa-glow/public/brand/`.
- Favicon set: SVG, 32px PNG, and 180px Apple touch icon.
- Open Graph image: `apps/adwoa-glow/public/og-image.png`.
- Social graphics: three campaign templates in 1080x1080 and 1080x1350 under `apps/adwoa-glow/public/brand/social/`.
- Print piece: product flyer at `output/pdf/adwoa-glow-product-flyer.pdf`.
- Reusable React templates and Playwright exporter: `apps/adwoa-glow/src/app/graphics/page.tsx`, `apps/adwoa-glow/src/components/SocialArtwork.tsx`, and `scripts/export-graphics.mjs`.

### Replace or approve before any real launch

- Replace the phone, WhatsApp number, email, address, hours, social URLs, and domain in `apps/adwoa-glow/src/config/site.ts` and `.env.example`.
- Replace or approve all product names, descriptions, ingredient lists, sizes, prices, and use instructions in `apps/adwoa-glow/src/content/products.ts`.
- Have a qualified formulator confirm INCI ingredient names, formula safety, testing, labeling, regulatory requirements, sourcing, and any skin or efficacy claims before selling products.
- Replace the self-authored packaging illustrations with approved, accurate product photography or final packaging artwork before a real shop launch.
- Confirm the brand name, origin story, and contact channels with the real owner.

## Nkwa Logistics concept

### Built in Phase 4

- Logo SVGs: primary, one-colour, reversed, icon, and favicon at `apps/nkwa-logistics/public/brand/`.
- Favicon set: SVG, 32px PNG, and 180px Apple touch icon.
- Open Graph image: `apps/nkwa-logistics/public/og-image.png`.
- Social graphics: three campaign templates in 1080x1080 and 1080x1350 under `apps/nkwa-logistics/public/brand/social/`.
- Print pack: business-card front and back plus A4 service flyer at `output/pdf/nkwa-logistics-print-pack.pdf`.
- Reusable React templates and Playwright exporter: `apps/nkwa-logistics/src/app/graphics/page.tsx`, `apps/nkwa-logistics/src/components/SocialArtwork.tsx`, and `scripts/export-graphics.mjs`.
- The site uses self-authored route artwork; it currently has no photo slots.

### Replace or approve before any real launch

- Replace the phone, WhatsApp number, email, address, hours, social links, and domain in `apps/nkwa-logistics/src/config/site.ts` and `.env.example`.
- Confirm service availability and operating areas for Tarkwa, Takoradi, Accra, and Kumasi.
- Replace the sample route distances and placeholder quote formula in `apps/nkwa-logistics/src/content/routes.ts` with dispatch-approved distances and prices.
- Replace mock tracking status NK-1042 in `apps/nkwa-logistics/src/content/tracking.ts` with a real tracking integration before representing shipments as live.
- If desired, replace the route schematic with licensed photos of the actual fleet, parcels, team, and delivery handoff.
- Confirm the brand name, service descriptions, operating schedule, and support contact with the real owner.

## Brand Forge Studio

### Built in Phase 5

- New BF monogram and wordmark SVGs: primary, icon, one-colour, reversed, and favicon in `apps/studio/public/brand/`.
- Favicon set: SVG, PNG, and ICO, plus a 180px Apple touch icon.
- Open Graph preview card: `apps/studio/public/og-image.png`.
- Six production browser captures and three copies of the concept campaign artworks in `apps/studio/public/work/`, used by the selected work cards and case studies.
- Case study pages at `/work/savanna-grill`, `/work/adwoa-glow`, and `/work/nkwa-logistics`.

### Replace or configure before the studio launch

- Confirm `NEXT_PUBLIC_SITE_URL`, contact email, phone, and WhatsApp number in `apps/studio/.env.example`.
- Configure the contact endpoint only after it is ready to receive a name, email address, and project brief. Without the endpoint, the form opens an email draft.
- Add verified URLs for deployed concept previews with `NEXT_PUBLIC_SAVANNA_DEMO_URL`, `NEXT_PUBLIC_ADWOA_DEMO_URL`, and `NEXT_PUBLIC_NKWA_DEMO_URL`.
- Replace the two clearly marked real-work slots in `apps/studio/src/content/home.ts` with approved client work as it becomes available.
- Add and verify social profile links in the Studio environment file.
- No user-supplied Studio logo was present, so the new SVG identity is in use. Replace the files in `apps/studio/public/brand/` if an approved logo is supplied later.

## Final cross-project launch checklist

- Configure the real domain, phone, WhatsApp number, business email, address, hours and social profiles in each app’s `.env.example` and Vercel project settings.
- Savanna Grill: add licensed restaurant, food and gathering photography to its three marked gallery slots. Confirm its menu and prices, hours, location and ordering details.
- Adwoa Glow: approve product names, ingredients, size, price, instructions and packaging. A qualified formulator must confirm ingredients, formula safety, testing, labeling and any claims before real products are offered.
- Nkwa Logistics: verify the service areas and operating hours; replace sample quote distances, rates and mock tracking data before describing any service as live.
- Studio: replace the real-work slots, add the live demo URLs after deployment, and configure a contact endpoint only if one is selected.
- Keep each concept-project disclosure in place until it is replaced with accurate, approved client work.

Print files are delivered under `output/pdf/`: the Savanna Grill menu, Adwoa Glow product flyer, and Nkwa Logistics card-and-flyer pack.
