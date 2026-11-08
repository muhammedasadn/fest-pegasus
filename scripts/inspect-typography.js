import puppeteer from 'puppeteer-core';
import fs from 'fs';

async function inspectFontsAndTypography() {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,1080']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1080, deviceScaleFactor: 2 });
  await page.goto('https://real-project-691891.framer.app/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 3000));

  const typography = await page.evaluate(() => {
    const all = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, p, span, a, button'));
    const stylesMap = new Map();

    all.forEach(el => {
      const text = el.textContent?.trim();
      if (!text || text.length > 80) return;
      const cs = window.getComputedStyle(el);
      const key = `${cs.fontFamily} | ${cs.fontWeight} | ${cs.fontSize} | ${cs.lineHeight} | ${cs.letterSpacing} | ${cs.color}`;
      if (!stylesMap.has(key)) {
        stylesMap.set(key, {
          sample: text,
          tag: el.tagName,
          fontFamily: cs.fontFamily,
          fontWeight: cs.fontWeight,
          fontSize: cs.fontSize,
          lineHeight: cs.lineHeight,
          letterSpacing: cs.letterSpacing,
          color: cs.color,
          textTransform: cs.textTransform
        });
      }
    });

    return Array.from(stylesMap.values());
  });

  fs.writeFileSync('scripts/typography-measured.json', JSON.stringify(typography, null, 2));
  console.log('Typography measured:', typography.length, 'unique styles');
  console.log(JSON.stringify(typography.slice(0, 15), null, 2));

  await browser.close();
}

inspectFontsAndTypography().catch(console.error);
