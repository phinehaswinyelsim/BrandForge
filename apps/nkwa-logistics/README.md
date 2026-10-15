# Nkwa Logistics concept

Independent Next.js concept site for a Ghanaian delivery and transport company. This is a fictional Brand Forge project, not a real business. The quote calculator, route distances, sample tracking record, and rates are illustrative and are not connected to live operations.

## Run locally

From the repository root, run `npm install`, then `npm run dev --workspace @brand-forge/nkwa-logistics`.

## Edit content

- Contact details, address, hours, social links, and site URL: `src/config/site.ts` and `.env.example`
- Services, FAQ, and coverage towns: `src/content/home.ts`
- Sample route distances and quote tiers: `src/content/routes.ts`
- Sample tracking record: `src/content/tracking.ts`
- Logo SVGs and exported icons: `public/brand/`

## Export social graphics

From the repository root, run `npm run graphics:export -- nkwa-logistics`. The command starts the artwork route and exports three React campaign templates in square and story formats, plus the Open Graph image and favicon PNGs. Install Playwright Chromium once with `npx playwright install chromium`, or set `PLAYWRIGHT_CHROMIUM_EXECUTABLE` to an installed Chrome-compatible browser.

## Check and test

Run `npm run lint --workspace @brand-forge/nkwa-logistics` and `npm run typecheck --workspace @brand-forge/nkwa-logistics`. For the production smoke test, start the app on port 3213 with `npm run start --workspace @brand-forge/nkwa-logistics -- --port 3213`, then run `npm run smoke --workspace @brand-forge/nkwa-logistics`.

## Deploy to Vercel

Create a Vercel project with Root Directory `apps/nkwa-logistics`, keep access to the root workspace files enabled, and use the root lockfile. Set the environment variables in `.env.example` in Project Settings → Environment Variables. Replace contact details, then verify operational routes, prices, hours and service areas before launch.
