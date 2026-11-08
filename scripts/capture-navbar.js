import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

async function captureNavbar() {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  const outDir = path.resolve('verification/navbar');
  fs.mkdirSync(outDir, { recursive: true });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 400 });

  // 1. Desktop on /menu (active Menu pill)
  await page.goto("http://localhost:3000/menu", { waitUntil: "networkidle2" });
  await page.screenshot({ path: path.join(outDir, "desktop-menu-active.png") });

  // 2. Mobile with Drawer Open
  await page.setViewport({ width: 390, height: 750 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle2" });
  const hamburger = await page.$("button[aria-label='Open menu']");
  if (hamburger) {
    await hamburger.click();
    await new Promise((r) => setTimeout(r, 600));
  }
  await page.screenshot({ path: path.join(outDir, "mobile-drawer-open.png") });

  console.log("Navbar screenshots captured successfully!");
  await browser.close();
}

captureNavbar().catch(console.error);
