import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const pages = ['menu', 'offers', 'events', 'about', 'blog', 'contact'];

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 820, height: 1180 },
  { name: 'mobile', width: 390, height: 844 }
];

async function verifyAll() {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--window-size=1440,1080']
  });

  for (const pageName of pages) {
    console.log(`\n========================================`);
    console.log(`Verifying: /${pageName}`);
    console.log(`========================================`);

    for (const vp of viewports) {
      console.log(`[${pageName}] Viewport: ${vp.name} (${vp.width}x${vp.height})...`);
      const page = await browser.newPage();
      await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });
      await page.goto(`http://localhost:3000/${pageName}`, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(r => setTimeout(r, 1200));

      // Quick scroll to trigger framer-motion inView animations
      await page.evaluate(async () => {
        const total = document.body.scrollHeight || 4000;
        const step = Math.max(400, Math.floor(window.innerHeight * 0.8));
        for (let y = 0; y < total; y += step) {
          window.scrollTo(0, y);
          await new Promise(r => setTimeout(r, 50));
        }
        window.scrollTo(0, 0);
        await new Promise(r => setTimeout(r, 300));
      });

      const dir = path.join(process.cwd(), 'verification', vp.name, 'pages');
      fs.mkdirSync(dir, { recursive: true });
      const outPath = path.join(dir, `${pageName}.png`);
      await page.screenshot({ path: outPath, fullPage: true });
      console.log(`[${pageName}] Saved screenshot: ${outPath}`);
      await page.close();
    }
  }

  await browser.close();
  console.log('\n========================================');
  console.log('All 6 pages verified across desktop, tablet, and mobile!');
  console.log('========================================');
}

verifyAll().catch(console.error);
