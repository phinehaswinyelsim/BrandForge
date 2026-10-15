import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { setTimeout as delay } from "node:timers/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const repositoryRoot = fileURLToPath(new URL("../", import.meta.url));
const systemBrowser = process.platform === "win32"
  ? [
      "C:/Program Files/Google/Chrome/Application/chrome.exe",
      "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    ].find((candidate) => existsSync(candidate))
  : undefined;
const browserExecutable = process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE || systemBrowser;
const apps = {
  "savanna-grill": {
    port: 3311,
    exports: [
      ...["fire", "table", "after-hours"].flatMap((template) => [
        { id: `savanna-grill-${template}-square`, file: `brand/social/${template}-1080x1080.png` },
        { id: `savanna-grill-${template}-story`, file: `brand/social/${template}-1080x1350.png` },
      ]),
      { id: "savanna-grill-open-graph", file: "og-image.png" },
      { id: "savanna-grill-favicon-32", file: "brand/favicon-32.png" },
      { id: "savanna-grill-apple-icon", file: "brand/apple-touch-icon.png" },
    ],
  },
  "adwoa-glow": {
    port: 3312,
    exports: [
      ...["ritual", "ingredients", "daily-glow"].flatMap((template) => [
        { id: `adwoa-glow-${template}-square`, file: `brand/social/${template}-1080x1080.png` },
        { id: `adwoa-glow-${template}-story`, file: `brand/social/${template}-1080x1350.png` },
      ]),
      { id: "adwoa-glow-open-graph", file: "og-image.png" },
      { id: "adwoa-glow-favicon-32", file: "brand/favicon-32.png" },
      { id: "adwoa-glow-apple-icon", file: "brand/apple-touch-icon.png" },
    ],
  },
  "nkwa-logistics": {
    port: 3313,
    exports: [
      ...["on-the-move", "across-ghana", "there-on-time"].flatMap((template) => [
        { id: `nkwa-logistics-${template}-square`, file: `brand/social/${template}-1080x1080.png` },
        { id: `nkwa-logistics-${template}-story`, file: `brand/social/${template}-1080x1350.png` },
      ]),
      { id: "nkwa-logistics-open-graph", file: "og-image.png" },
      { id: "nkwa-logistics-favicon-32", file: "brand/favicon-32.png" },
      { id: "nkwa-logistics-apple-icon", file: "brand/apple-touch-icon.png" },
    ],
  },
};

const requested = process.argv[2]?.replace(/^--brand=/, "");
const brands = requested ? [requested] : Object.keys(apps);
const unknown = brands.filter((brand) => !apps[brand]);
if (unknown.length) {
  throw new Error(`Unknown brand ${unknown.join(", ")}. Choose: ${Object.keys(apps).join(", ")}`);
}

async function waitForServer(url, server, logs) {
  const deadline = Date.now() + 120_000;
  while (Date.now() < deadline) {
    if (server.exitCode !== null) {
      throw new Error(`Next.js exited before it was ready.\n${logs()}`);
    }
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(2_000) });
      if (response.ok) return;
    } catch {
      // Keep waiting while the development server compiles.
    }
    await delay(500);
  }
  throw new Error(`Timed out waiting for ${url}.\n${logs()}`);
}

async function exportBrand(brand) {
  const app = apps[brand];
  const appRoot = path.join(repositoryRoot, "apps", brand);
  const outputRoot = path.join(appRoot, "public");
  const cli = path.join(repositoryRoot, "node_modules", "next", "dist", "bin", "next");
  const server = spawn(process.execPath, [cli, "dev", "--port", String(app.port)], {
    cwd: appRoot,
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
    stdio: ["ignore", "pipe", "pipe"],
    windowsHide: true,
  });

  let serverOutput = "";
  const collect = (chunk) => { serverOutput = `${serverOutput}${chunk}`.slice(-8_000); };
  server.stdout.on("data", collect);
  server.stderr.on("data", collect);
  const serverUrl = `http://127.0.0.1:${app.port}/graphics`;
  let browser;

  try {
    await waitForServer(serverUrl, server, () => serverOutput);
    browser = await chromium.launch({
      headless: true,
      ...(browserExecutable ? { executablePath: browserExecutable } : {}),
    });
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
    const pageErrors = [];
    page.on("pageerror", (error) => pageErrors.push(error.message));
    await page.goto(serverUrl, { waitUntil: "networkidle", timeout: 90_000 });
    await page.evaluate(() => document.fonts.ready);

    for (const item of app.exports) {
      const artwork = page.locator(`[data-art="${item.id}"]`);
      await artwork.waitFor({ state: "visible" });
      const output = path.join(outputRoot, item.file);
      await mkdir(path.dirname(output), { recursive: true });
      await artwork.screenshot({ path: output, animations: "disabled", caret: "hide" });
      process.stdout.write(`Exported ${path.relative(repositoryRoot, output)}\n`);
    }

    if (pageErrors.length) {
      throw new Error(`${brand} artwork page errors:\n${pageErrors.join("\n")}`);
    }
  } finally {
    await browser?.close();
    if (server.exitCode === null) {
      server.kill("SIGTERM");
      await Promise.race([new Promise((resolve) => server.once("exit", resolve)), delay(5_000)]);
      if (server.exitCode === null) server.kill("SIGKILL");
    }
  }
}

for (const brand of brands) {
  process.stdout.write(`\nRendering ${brand} artwork…\n`);
  await exportBrand(brand);
}
