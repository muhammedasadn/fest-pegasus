import puppeteer from 'puppeteer-core';
import fs from 'fs';

async function inspectSections() {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,1080']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1080, deviceScaleFactor: 2 });
  await page.goto('https://real-project-691891.framer.app/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 4000));

  const sectionsData = await page.evaluate(() => {
    // In Framer, the top level container has children representing sections
    // Let's find the main responsive container
    const desktopContainer = document.querySelector('[data-framer-name="Desktop"]');
    if (!desktopContainer) {
      return { error: 'No Desktop container found' };
    }

    const children = Array.from(desktopContainer.children);
    return children.map((el, i) => {
      const rect = el.getBoundingClientRect();
      const framerName = el.getAttribute('data-framer-name') || el.className;
      const componentType = el.getAttribute('data-framer-component-type');
      
      // Get all headings or primary texts inside
      const headings = Array.from(el.querySelectorAll('h1, h2, h3, h4, p')).map(h => h.textContent.trim()).filter(Boolean).slice(0, 5);
      
      return {
        index: i,
        tagName: el.tagName,
        framerName,
        componentType,
        id: el.id,
        rect: {
          top: rect.top + window.scrollY,
          left: rect.left,
          width: rect.width,
          height: rect.height
        },
        headings
      };
    });
  });

  console.log('Sections detected:', JSON.stringify(sectionsData, null, 2));
  fs.writeFileSync('scripts/sections-detected.json', JSON.stringify(sectionsData, null, 2));

  await browser.close();
}

inspectSections().catch(console.error);
