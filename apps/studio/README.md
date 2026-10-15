# Brand Forge Studio

Independent Next.js portfolio workspace for the Brand Forge creative studio in Ghana. The three featured client brands are fictional concept projects.

## Run locally

From the repository root, run `npm install`, then `npm run dev --workspace @brand-forge/studio`. The root `npm run dev` command also starts this app.

## Edit content and assets

- Contact, domain, WhatsApp, socials and form endpoint: `src/config/site.ts` and `.env.example`
- Homepage copy, services, process, FAQs and real-work slots: `src/content/home.ts`
- Case study copy, screenshot paths, campaign images and deployed demo links: `src/content/work.ts`
- Studio brand SVGs, icons, and Open Graph image: `public/brand/` and `public/og-image.png`
- Real production screenshots and concept campaign art used in case studies: `public/work/`

When adding a real client project, replace a placeholder entry in `src/content/home.ts` with approved project information. Set `NEXT_PUBLIC_SAVANNA_DEMO_URL`, `NEXT_PUBLIC_ADWOA_DEMO_URL`, and `NEXT_PUBLIC_NKWA_DEMO_URL` after the concept apps are deployed. Set `NEXT_PUBLIC_CONTACT_ENDPOINT` only when a service is ready to receive the contact form’s name, email, and brief; without it, submission opens a prefilled email draft.

## Check and test

Run `npm run lint --workspace @brand-forge/studio` and `npm run typecheck --workspace @brand-forge/studio`. For the Playwright smoke test, start the production build on port 3214 with `npm run start --workspace @brand-forge/studio -- --port 3214`, then run `npm run smoke --workspace @brand-forge/studio`.

## Deploy to Vercel

Create a Vercel project for the repository with Root Directory `apps/studio`. Keep access to the root workspace files enabled and use the root lockfile. Set the variables from `.env.example` for Production and Preview environments as appropriate. Set `NEXT_PUBLIC_SITE_URL` to the production domain and configure contact and demo links before advertising them. Vercel’s [monorepo guide](https://vercel.com/docs/monorepos) explains per-directory projects.
