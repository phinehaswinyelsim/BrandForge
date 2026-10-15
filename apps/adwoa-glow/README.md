# Adwoa Glow concept

Independent Next.js concept site for a premium Ghanaian skincare brand. This is a fictional Brand Forge project, not a real business. Products, ingredient lists, prices, and use guidance are illustrative only; no products have been formulated or safety tested.

## Run locally

From the repository root, run `npm install`, then `npm run dev --workspace @brand-forge/adwoa-glow`.

## Edit content

- Contact details, address, social link, and site URL: `src/config/site.ts` and `.env.example`
- Home page story, FAQs, ingredients, and newsletter note: `src/content/home.ts`
- Product names, sizes, illustrative GH₵ prices, ingredients, and rituals: `src/content/products.ts`
- Brand voice, palette, typography, and usage: `src/content/brand.ts`
- Logo SVGs and exported icons: `public/brand/`

## Export social graphics

From the repository root, run `npm run graphics:export -- adwoa-glow`. The command starts the artwork route and exports three React templates in square and story formats, plus the Open Graph image and favicon PNGs. Install Playwright Chromium once with `npx playwright install chromium`, or set `PLAYWRIGHT_CHROMIUM_EXECUTABLE` to an installed Chrome-compatible browser.

## Check and test

Run `npm run lint --workspace @brand-forge/adwoa-glow` and `npm run typecheck --workspace @brand-forge/adwoa-glow`. For the production smoke test, start the app on port 3212 with `npm run start --workspace @brand-forge/adwoa-glow -- --port 3212`, then run `npm run smoke --workspace @brand-forge/adwoa-glow`.

## Deploy to Vercel

Create a Vercel project with Root Directory `apps/adwoa-glow`, keep access to the root workspace files enabled, and use the root lockfile. Set the environment variables in `.env.example` in Project Settings → Environment Variables. Replace contact and domain placeholders and have qualified professionals review all product details before any real launch.
