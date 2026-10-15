# Brand Forge

Brand Forge is an independent creative studio in Ghana. This npm-workspaces repository contains its portfolio and three fictional concept brands. The concept sites are portfolio demonstrations and do not represent real client work or businesses.

| App | Workspace | Vercel Root Directory |
| --- | --- | --- |
| Brand Forge studio | `@brand-forge/studio` | `apps/studio` |
| Savanna Grill concept | `@brand-forge/savanna-grill` | `apps/savanna-grill` |
| Adwoa Glow concept | `@brand-forge/adwoa-glow` | `apps/adwoa-glow` |
| Nkwa Logistics concept | `@brand-forge/nkwa-logistics` | `apps/nkwa-logistics` |

## Requirements and local setup

- Node.js 20.9 or newer
- npm 10 or newer

From the repository root:

```bash
npm install
npm run dev
```

The root `dev` script starts the Studio app. Run a different app by its workspace name:

```bash
npm run dev --workspace @brand-forge/savanna-grill
npm run dev --workspace @brand-forge/adwoa-glow
npm run dev --workspace @brand-forge/nkwa-logistics
```

Each app uses port 3000 by default. Run them one at a time, or set a separate `PORT` for each terminal when developing side by side. Copy an app’s `.env.example` to `.env.local` and replace its values when configuring a real domain or contact channel. Do not commit `.env.local`.

## Edit the sites

- `apps/studio/src/content/home.ts` — Studio homepage copy, service list, process, FAQs, and real-work placeholder cards.
- `apps/studio/src/content/work.ts` — concept case study copy, services, screenshots, campaign artwork, and optional deployed demo URLs.
- `apps/<app>/src/content/` — each concept’s product, menu, route, tracking, and page copy.
- `apps/<app>/src/config/site.ts` and `.env.example` — contact details, domain, hours, social links, and other launch settings.
- `apps/<app>/tailwind.config.js` — design tokens kept independent for each brand.
- `apps/<app>/public/` — logos, icons, screenshots and campaign assets.
- `DECISIONS.md` — implementation choices and phase history.
- `ASSETS.md` — assets delivered and the remaining real-world inputs to replace.

Studio’s real-work cards are empty editorial slots. Replace them with actual approved projects as they become available. The three featured concept projects are explicitly labeled as fictional throughout the Studio and case studies.

## Quality checks

Run code checks across all four apps from the root:

```bash
npm run lint
npm run typecheck
npm run build
```

The Playwright smoke tests exercise the production builds. Start the four built sites in separate terminals:

```bash
npm run start --workspace @brand-forge/savanna-grill -- --port 3211
npm run start --workspace @brand-forge/adwoa-glow -- --port 3212
npm run start --workspace @brand-forge/nkwa-logistics -- --port 3213
npm run start --workspace @brand-forge/studio -- --port 3214
```

Then, from another terminal, run all four tests or just one app:

```bash
npm run smoke
npm run smoke --workspace @brand-forge/studio
```

The smoke suite checks primary routes and calls to action, selected interactions, metadata, sitemap and robots output, accessible labels and image alts, keyboard focus, reduced-motion behavior, desktop and phone widths, layout shift, and browser errors. Its timing and transfer-size figures are local production-build diagnostics, not a Lighthouse score or a prediction of hosted performance. It uses installed Chrome or Edge on Windows; elsewhere install Playwright Chromium once with `npx playwright install chromium`.

## Graphics and print files

Export social graphics, Open Graph cards, and PNG icon sets from the repository root:

```bash
npm run graphics:export -- savanna-grill
npm run graphics:export -- adwoa-glow
npm run graphics:export -- nkwa-logistics
```

The artwork templates are editable React components on each app’s `/graphics` route. Finished print PDFs are in `output/pdf/`:

- `savanna-grill-menu.pdf` — A4 restaurant menu flyer.
- `adwoa-glow-product-flyer.pdf` — A4 product flyer.
- `nkwa-logistics-print-pack.pdf` — business-card front/back and A4 services flyer.

## Deploy each app to Vercel

Create four Vercel projects and import the same Git repository once for each app. Set each project’s Root Directory to the matching `apps/...` path in the table above. Keep access to files outside the app directory enabled so the root workspace manifest and lockfile are available. Let Vercel detect Next.js and its build settings; the app build command is `npm run build`.

For each Vercel project:

1. Add the environment variables from that app’s `.env.example` in Project Settings → Environment Variables.
2. Set `NEXT_PUBLIC_SITE_URL` to the real production URL. Set the app’s contact details, social URLs, and verified business information. For Studio, also set any deployed concept URLs and `NEXT_PUBLIC_CONTACT_ENDPOINT` if using a form service.
3. Add the production domain in the Vercel project’s Domains settings, then redeploy so canonical, social and sitemap URLs use that domain.
4. Check the production homepage, one secondary route, `robots.txt`, `sitemap.xml`, and at least one mobile-sized page before sharing the URL.

Vercel’s [monorepo guide](https://vercel.com/docs/monorepos) documents creating a separate project for each app directory and configuring its Root Directory.
