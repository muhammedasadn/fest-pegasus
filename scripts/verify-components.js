import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

async function verify() {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,1080']
  });

  const viewports = [
    { name: 'desktop', width: 1440, height: 900 },
    { name: 'tablet', width: 820, height: 1180 },
    { name: 'mobile', width: 390, height: 844 }
  ];

  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 2 });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 1500));

    const outDir = path.join('verification', vp.name);
    fs.mkdirSync(outDir, { recursive: true });

    // Full page screenshot
    await page.screenshot({ path: path.join(outDir, 'build-full-page.png'), fullPage: true });

    // Navbar screenshot
    const nav = await page.$('nav');
    if (nav) {
      await nav.screenshot({ path: path.join(outDir, 'navbar.png') });
    }

    // Hero screenshot
    const hero = await page.$('section');
    if (hero) {
      await hero.screenshot({ path: path.join(outDir, '01-hero.png') });
    }

    // Marquee screenshot
    const marquee = await page.$('div[aria-hidden="true"]');
    if (marquee) {
      await marquee.screenshot({ path: path.join(outDir, '02-marquee.png') });
    }

    // Categories screenshot
    const categories = await page.$('#categories');
    if (categories) {
      await categories.screenshot({ path: path.join(outDir, '03-popular-categories.png') });
    }

    // Offers screenshot
    const offers = await page.$('#offers');
    if (offers) {
      await offers.screenshot({ path: path.join(outDir, '04-special-offers.png') });
    }

    // If mobile, test menu click
    if (vp.name === 'mobile') {
      const menuBtn = await page.$('nav button');
      if (menuBtn) {
        await menuBtn.click();
        await new Promise(r => setTimeout(r, 500));
        await page.screenshot({ path: path.join(outDir, 'menu-open.png') });
      }
    }

    await page.close();
  }

  await browser.close();
  console.log('Verification screenshots captured across desktop, tablet, and mobile.');
}

verify().catch(console.error);
