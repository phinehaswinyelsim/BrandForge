# Savanna Grill concept

Independent Next.js concept app for a casual grill in Tarkwa. This is a fictional Brand Forge project, not a real restaurant.

## Run locally

From the repository root, run `npm install`, then `npm run dev --workspace @brand-forge/savanna-grill`.

## Edit content

- Business details and contact placeholders: `src/config/site.ts`
- Home page text: `src/content/home.ts`
- Menu items and illustrative GH₵ prices: `src/content/menu.ts`
- Logo, palette, and usage notes: `src/content/brand.ts`
- Brand tokens: `tailwind.config.js`

## Export social graphics

From the repository root, run `npm run graphics:export -- savanna-grill`. The command starts the artwork route and exports the three React templates in both requested sizes, favicon PNGs, and the Open Graph image into `public/`. It uses installed Chrome or Edge on Windows; on other systems install Playwright Chromium once with `npx playwright install chromium` or configure `PLAYWRIGHT_CHROMIUM_EXECUTABLE`.

## Check and test

Run `npm run lint --workspace @brand-forge/savanna-grill` and `npm run typecheck --workspace @brand-forge/savanna-grill`. For the production smoke test, start the app on port 3211 with `npm run start --workspace @brand-forge/savanna-grill -- --port 3211`, then run `npm run smoke --workspace @brand-forge/savanna-grill`.

## Deploy to Vercel

Create a Vercel project with Root Directory `apps/savanna-grill`, keep access to the root workspace files enabled, and use the root lockfile. Set the environment variables in `.env.example` in Project Settings → Environment Variables. Confirm the business contact details, hours, map query and illustrative menu before launch.
