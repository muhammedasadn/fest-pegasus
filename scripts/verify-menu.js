import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 820, height: 1180 },
  { name: 'mobile', width: 390, height: 844 }
];

async function verify() {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--window-size=1440,1080']
  });

  for (const vp of viewports) {
    console.log(`Verifying /menu at ${vp.name} (${vp.width}x${vp.height})...`);
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });
    await page.goto('http://localhost:3000/menu', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 1500));

    // Scroll through page to trigger animations
    await page.evaluate(async () => {
      const distance = 400;
      const total = document.body.scrollHeight || 4000;
      for (let y = 0; y < total; y += distance) {
        window.scrollTo(0, y);
        await new Promise(r => setTimeout(r, 60));
      }
      window.scrollTo(0, 0);
      await new Promise(r => setTimeout(r, 400));
    });

    const dir = path.join(process.cwd(), 'verification', vp.name, 'pages');
    fs.mkdirSync(dir, { recursive: true });
    const outPath = path.join(dir, 'menu.png');
    await page.screenshot({ path: outPath, fullPage: true });
    console.log(`Saved screenshot: ${outPath}`);
    await page.close();
  }

  await browser.close();
  console.log('Menu verification complete!');
}

verify().catch(console.error);
