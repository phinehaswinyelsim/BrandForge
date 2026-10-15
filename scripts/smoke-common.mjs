import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { chromium } from "playwright";

const systemBrowser = process.platform === "win32"
  ? ["C:/Program Files/Google/Chrome/Application/chrome.exe", "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"].find(existsSync)
  : undefined;

const scenarios = {
  "savanna-grill": {
    port: 3211,
    title: /Savanna Grill/,
    heading: /Bring your people/i,
    cta: 'a[href="#menu"]',
    hash: "#menu",
    routes: ["/brand", "/graphics"],
    async interaction(page) {
      const add = page.getByRole("button", { name: /Add .+ to order/ }).first();
      await add.click();
      await page.locator(".basket-card h3").waitFor();
      assert.match(await page.locator(".basket-card h3").innerText(), /\(1\)/, "adding a menu item updates the basket count");
    },
  },
  "adwoa-glow": {
    port: 3212,
    title: /Adwoa Glow/,
    heading: /Come back to your own/i,
    cta: 'a[href="#collection"]',
    hash: "#collection",
    routes: ["/brand", "/graphics", "/products/shea-body-balm"],
  },
  "nkwa-logistics": {
    port: 3213,
    title: /Nkwa Logistics/,
    heading: /Move what matters/i,
    cta: 'a[href="#quote"]',
    hash: "#quote",
    routes: ["/brand", "/graphics", "/tracking"],
    async interaction(page, baseUrl) {
      await page.goto(`${baseUrl}/tracking`, { waitUntil: "networkidle" });
      await page.getByLabel("Tracking ID").fill("NK-0000");
      await page.getByRole("button", { name: /Track parcel/ }).click();
      await page.getByRole("status").waitFor();
      assert.match(await page.getByRole("status").innerText(), /No sample record found/i, "unknown tracking IDs receive a clear response");
      await page.getByLabel("Tracking ID").fill("NK-1042");
      await page.getByRole("button", { name: /Track parcel/ }).click();
      await page.getByRole("heading", { name: /in transit to Accra/i }).waitFor();
    },
  },
  studio: {
    port: 3214,
    title: /Brand Forge/,
    heading: /Make your next\s+move matter/i,
    cta: 'a[href="#work"]',
    hash: "#work",
    routes: ["/work/savanna-grill", "/work/adwoa-glow", "/work/nkwa-logistics"],
    async interaction(page, baseUrl) {
      await page.goto(baseUrl, { waitUntil: "networkidle" });
      await page.locator('a[href="/work/savanna-grill"]').click();
      await page.waitForURL("**/work/savanna-grill");
      await page.locator(".case-disclaimer").waitFor();
      await page.locator(".deliverable-grid img").first().waitFor();
      assert.match(await page.locator(".case-disclaimer").innerText(), /fictional work/i, "case study includes its concept disclosure");
    },
  },
};

function assertPageBasics(page, titlePattern, headingPattern, url) {
  return page.evaluate(({ expectedTitle, expectedHeading, currentUrl }) => {
    const title = document.title;
    const heading = document.querySelector("main h1")?.textContent ?? "";
    const description = document.querySelector('meta[name="description"]')?.content ?? "";
    const canonical = document.querySelector('link[rel="canonical"]')?.href ?? "";
    const imagesWithoutAlt = [...document.images].filter((image) => !image.hasAttribute("alt")).length;
    const duplicateIds = [...document.querySelectorAll("[id]")].map((element) => element.id).filter((id, index, all) => all.indexOf(id) !== index);
    const unnamedControls = [...document.querySelectorAll("a,button")].filter((element) => {
      const label = element.getAttribute("aria-label") || element.getAttribute("title") || element.textContent || [...element.querySelectorAll("img")].map((image) => image.alt).join(" ");
      return !label.trim();
    }).length;
    const unlabelledFields = [...document.querySelectorAll("input:not([type=hidden]),textarea,select")].filter((field) => {
      const id = field.id;
      return !field.closest("label") && !field.getAttribute("aria-label") && !(id && document.querySelector(`label[for="${CSS.escape(id)}"]`));
    }).length;
    const nav = performance.getEntriesByType("navigation")[0];
    const resources = performance.getEntriesByType("resource");
    return {
      title, heading, description, canonical,
      imagesWithoutAlt,
      duplicateIds: [...new Set(duplicateIds)],
      unlabelledFields,
      unnamedControls,
      h1Count: document.querySelectorAll("main h1").length,
      loadMs: Math.round(nav?.loadEventEnd ?? 0),
      documentTransferBytes: Math.round(nav?.transferSize ?? 0),
      resourceCount: resources.length,
      totalTransferBytes: Math.round(resources.reduce((sum, resource) => sum + (resource.transferSize || 0), 0) + (nav?.transferSize ?? 0)),
      cumulativeLayoutShift: Number((window.__bfCumulativeLayoutShift ?? 0).toFixed(4)),
      pageWidth: document.documentElement.scrollWidth,
      viewportWidth: window.innerWidth,
      titleOkay: new RegExp(expectedTitle, "i").test(title),
      headingOkay: new RegExp(expectedHeading, "i").test(heading),
      canonicalOkay: new URL(canonical).pathname === new URL(currentUrl).pathname,
    };
  }, { expectedTitle: titlePattern.source, expectedHeading: headingPattern.source, currentUrl: url });
}

export async function runSmoke(name) {
  const scenario = scenarios[name];
  assert.ok(scenario, `Unknown smoke-test app: ${name}`);
  const baseUrl = `http://127.0.0.1:${scenario.port}`;
  const browser = await chromium.launch({ headless: true, ...(systemBrowser ? { executablePath: systemBrowser } : {}) });
  const errors = [];
  try {
    const page = await browser.newPage({ viewport: { width: 1365, height: 900 }, deviceScaleFactor: 1 });
    await page.addInitScript(() => {
      window.__bfCumulativeLayoutShift = 0;
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) window.__bfCumulativeLayoutShift += entry.value;
        }
      }).observe({ type: "layout-shift", buffered: true });
    });
    page.on("pageerror", (error) => errors.push(`pageerror: ${error.message}`));
    page.on("console", (message) => { if (message.type() === "error") errors.push(`console: ${message.text()} (${message.location().url || "unknown URL"})`); });
    page.on("response", (result) => { if (result.status() >= 400) errors.push(`http ${result.status()}: ${result.url()}`); });
    const response = await page.goto(baseUrl, { waitUntil: "networkidle", timeout: 45000 });
    assert.equal(response?.status(), 200, `${name} homepage responds successfully`);
    await page.locator("main h1").waitFor();
    await page.evaluate(() => document.fonts.ready);
    assert.match(await page.title(), scenario.title, `${name} title is present`);
    assert.match(await page.locator("main h1").first().innerText(), scenario.heading, `${name} main heading is present`);

    const baseline = await assertPageBasics(page, scenario.title, scenario.heading, baseUrl);
    assert.ok(baseline.description.length > 30, "homepage has a useful meta description");
    assert.ok(baseline.canonicalOkay, "homepage has a self-referencing canonical URL");
    assert.equal(baseline.imagesWithoutAlt, 0, "all images have alt attributes, including decorative images");
    assert.deepEqual(baseline.duplicateIds, [], "document IDs are unique");
    assert.equal(baseline.unlabelledFields, 0, "all form fields have accessible labels");
    assert.equal(baseline.unnamedControls, 0, "all links and buttons have accessible names");
    assert.equal(baseline.h1Count, 1, "homepage has one main page heading");
    assert.ok(baseline.cumulativeLayoutShift <= 0.1, "measured layout shift stays within the ‘good’ Core Web Vital range");
    assert.equal(baseline.pageWidth, baseline.viewportWidth, "desktop page has no horizontal overflow");

    await page.locator(scenario.cta).first().click();
    await page.waitForFunction((expectedHash) => window.location.hash === expectedHash, scenario.hash);
    if (scenario.interaction) await scenario.interaction(page, baseUrl);

    for (const route of scenario.routes) {
      const routeResponse = await page.goto(`${baseUrl}${route}`, { waitUntil: "networkidle", timeout: 45000 });
      assert.equal(routeResponse?.status(), 200, `${route} responds successfully`);
      await page.locator("main h1").first().waitFor();
      assert.ok((await page.title()).length > 8, `${route} has a page title`);
    }

    for (const route of ["/robots.txt", "/sitemap.xml"]) {
      const response = await page.goto(`${baseUrl}${route}`, { waitUntil: "domcontentloaded" });
      assert.equal(response?.status(), 200, `${route} responds successfully`);
      assert.ok((await response.text()).length > 20, `${route} contains output`);
    }

    await page.goto(baseUrl, { waitUntil: "networkidle" });
    await page.setViewportSize({ width: 390, height: 844 });
    const mobileWidth = await page.evaluate(() => ({ document: document.documentElement.scrollWidth, viewport: window.innerWidth }));
    assert.equal(mobileWidth.document, mobileWidth.viewport, "mobile page has no horizontal overflow");
    await page.keyboard.press("Tab");
    const focusIsVisible = await page.evaluate(() => {
      const active = document.activeElement;
      if (!active) return false;
      const style = getComputedStyle(active);
      return style.outlineStyle !== "none" && style.outlineWidth !== "0px";
    });
    assert.ok(focusIsVisible, "keyboard focus has a visible outline");
    await page.emulateMedia({ reducedMotion: "reduce" });
    assert.equal(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior), "auto", "reduced-motion preference disables smooth scrolling");

    assert.deepEqual(errors, [], "no browser console or uncaught page errors");
    console.log(`${name}: PASS`, JSON.stringify({
      desktop: `${baseline.pageWidth}×900`, mobile: `${mobileWidth.document}×844`,
      documentLoadMs: baseline.loadMs, documentTransferBytes: baseline.documentTransferBytes,
      resourceCount: baseline.resourceCount, totalTransferBytes: baseline.totalTransferBytes,
      cumulativeLayoutShift: baseline.cumulativeLayoutShift,
      pages: ["/", ...scenario.routes, "/robots.txt", "/sitemap.xml"],
      errors: errors.length,
    }));
  } catch (error) {
    if (errors.length) console.error(`${name} browser errors:`, errors);
    throw error;
  } finally {
    await browser.close();
  }
}
