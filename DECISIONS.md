# Brand Forge project decisions

This file records the implementation choices for the four-site portfolio. Update it when a later phase changes the plan.

## Phase 1 — foundation

- Keep the four sites in one npm-workspaces repository, with a complete `package.json` and Next.js app inside each `apps/*` directory. Each app can be selected as its own Vercel Root Directory.
- Keep app dependencies declared in each app package so workspace installs remain reproducible while each app owns its build, lint, and type-check scripts.
- Use the Next.js App Router, TypeScript strict mode, Tailwind CSS, and per-app `tailwind.config.js` files. Tokens belong to the site they describe; there is no shared theme that could make the concepts feel like reskins.
- Keep editable copy and business details in `src/content/` and `src/config/`. Components should render data rather than hide long-form copy in JSX.
- Start each app with a small, neutral foundation page. Brand art direction and customer-facing features are implemented only in their dedicated phases.
- Avoid a shared component package for now. Four small apps are easier for a junior developer to deploy and maintain independently, and their visual systems should remain distinct.
- Use static-first Next.js pages. The order basket, quote estimate, mock tracking, and contact interactions planned for later phases are client-side demonstrations; no backend or database is introduced.
- Use self-authored SVG/CSS visuals and local assets. Do not add remote image dependencies or hotlinked stock photography. Add real-photo replacement slots to `ASSETS.md` as each brand is built.
- Load any chosen font through `next/font` in the app that uses it. Keep system fallbacks in the tokens so the page remains readable if a font cannot load.
- Establish a shared baseline for semantic landmarks, keyboard focus, reduced motion, metadata, error handling, and accessible form labels before brand-specific sections are added.

## Phase 2 — Savanna Grill

- Use a self-authored ember-and-grill flame mark in SVG. Keep full-colour, one-ink, reversed, icon, and favicon artwork together under `apps/savanna-grill/public/brand/`.
- Treat the prices, hours, menu descriptions, contact details, and Tarkwa map search as concept placeholders. Label the menu prices illustrative and keep the not-a-real-business notice in the footer and brand guide.
- Keep the order basket in the browser. The WhatsApp link serializes the selected items and illustrative total into a pre-filled message; no order is submitted or stored.
- Derive the open indicator from the editable hours in `src/config/site.ts` and the `Africa/Accra` time zone. Do not hard-code the visitor's local time zone.
- Build campaign canvases as React/HTML at final pixel dimensions and export them with the root Playwright script. Keep the `/graphics` route out of search indexing.
- Use abstract CSS and SVG art for the hero and story sections. Mark three gallery positions for owner-supplied licensed photography instead of using stock-photo links.
- Use Anton for campaign display type and DM Sans for interface/body type, both loaded with `next/font`.

## Phase 3 — Adwoa Glow

- Build a distinct ivory, blush, cocoa, and gold skincare identity with Fraunces display type and Jost interface type. Use a self-authored botanical seed mark and illustrated packaging rather than stock photography.
- Keep the eight sample products, ingredient inspirations, sizes, illustrative GH₵ prices, and rituals in `apps/adwoa-glow/src/content/products.ts`; keep the home story, FAQ, and ingredient copy in data files.
- Treat the product range as fictional and not for sale. The newsletter is an interface-only preview that does not collect data. WhatsApp links use a recipient-free prefilled message while the number is still a placeholder.
- Do not make formula, sourcing, efficacy, safety, or regulatory claims. The asset checklist requires qualified product and labeling review before a real launch.
- Export square and story campaign art, Open Graph art, and PNG icons from the no-index `/graphics` route with the shared root Playwright script.

## Phase 4 — Nkwa Logistics

- Use a separate forest, signal-amber, off-white, and charcoal identity with Space Grotesk display type and Inter body type. Keep route art schematic and label it not to scale.
- Keep service copy and coverage towns in `src/content/home.ts`; keep sample route distances, quote tiers, and sample tracking reference in separate data files.
- Treat all route distances and quote amounts as editable examples. Tracking reference NK-1042 is a static mock record, and the quote calculator has no dispatch or payment connection.
- Use a recipient-free WhatsApp message while the destination number is a placeholder; use a call link only after an actual phone number is configured.
- Export campaign images and app icons with the root Playwright script. The print pack contains card front/back layouts and an A4 service flyer.

## Phase 5 — Brand Forge studio

- Create a separate deep-navy Studio identity with a custom BF monogram and spark, gradient purple-to-coral accents, Bricolage Grotesque display type, and Inter body type. No user-supplied logo was present in the workspace.
- Keep homepage sections and the real-work placeholders in `src/content/home.ts`; keep concept briefs, outcomes, screenshots, campaign art, and optional demo URLs in `src/content/work.ts`.
- Capture real desktop and mobile screenshots from each concept’s production build and use those local captures in the work cards and case studies. Use qualitative outcomes and label every featured brand as fictional portfolio work.
- Use environment-configured live demo URLs. Until a deployed concept URL is configured, the case study links to its preview and explains that the live URL will be added later.
- Keep the contact form dependency-free. It posts JSON only when `NEXT_PUBLIC_CONTACT_ENDPOINT` is configured; otherwise it prepares an email draft from the visitor’s browser.
- Leave two named real-work slots as editable placeholders, with no invented clients, testimonials, statistics, or awards.

## Phase 6 — quality review

- Add a small Playwright smoke test for each workspace, driven by shared browser checks and separate app scenarios. Each test runs against the corresponding production server on ports 3211–3214.
- Check primary navigation and key interactions, titles, descriptions and canonical links, sitemap and robots routes, image alt attributes, form labels, uniquely named controls and IDs, visible keyboard focus, reduced-motion behavior, desktop/mobile overflow, and browser console/network errors.
- The checks run in local Chrome/Edge on the captured production builds. Browser load timings and transferred-resource sizes are diagnostic samples; they are not Lighthouse scores or a guarantee of production-host performance. Keep any future Lighthouse review separate from the smoke-test result.
- Add a root setup guide, app-level editing/deploy notes, and a final checklist for real contact, domain, product, route, photo and case-study inputs.
- Final verification: root `npm run lint`, `npm run typecheck`, and `npm run build` passed for all four workspaces. Root `npm run smoke` passed all four production-browser suites at 1365×900 and 390×844 with no console/network errors, horizontal overflow, missing image alt, unlabeled fields, or duplicate IDs; CTA flows, route output, reduced motion, and keyboard focus also passed.
- In the local Chrome run, the navigation load event ranged from about 1.1 to 1.9 seconds, local resource transfer totals from about 240 to 357 KB, and measured CLS from 0 to 0.0001. These are local diagnostics; no deployed Lighthouse scores were claimed.

## Delivery phases and gates

| Phase | Scope | Exit gate |
| --- | --- | --- |
| 1 | Workspace scaffold, conventions, app token foundations, this plan | Lint, typecheck, and production build for all four apps |
| 2 | Savanna Grill site, brand assets, graphics, and print piece | Same three checks for all four apps |
| 3 | Adwoa Glow site, brand assets, graphics, and print piece | Same three checks for all four apps |
| 4 | Nkwa Logistics site, brand assets, graphics, and print piece | Same three checks for all four apps |
| 5 | Brand Forge studio site and concept case studies | Same three checks for all four apps |
| 6 | Accessibility/performance/SEO review, smoke tests, final asset checklist, deployment instructions | All four production smoke tests pass; accessibility checks and review findings are documented |

Do not begin a later phase until the current phase's three checks pass. If an external service or environment prevents a check, record the blocker and leave the source intact rather than claiming the gate passed.
