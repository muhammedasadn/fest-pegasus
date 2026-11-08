import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const pages = [
  { name: 'menu', url: 'https://real-project-691891.framer.app/menu' },
  { name: 'offers', url: 'https://real-project-691891.framer.app/offers' },
  { name: 'events', url: 'https://real-project-691891.framer.app/events' },
  { name: 'about', url: 'https://real-project-691891.framer.app/about' },
  { name: 'blog', url: 'https://real-project-691891.framer.app/blog' },
  { name: 'contact', url: 'https://real-project-691891.framer.app/contact' },
  { name: 'blog-detail-1', url: 'https://real-project-691891.framer.app/blog/the-secret-to-a-better-burger-at-home' }
];

const viewports = [
  { name: 'desktop', width: 1440, height: 1080, dpr: 1 },
  { name: 'tablet', width: 820, height: 1180, dpr: 1 },
  { name: 'mobile', width: 390, height: 844, dpr: 2 }
];

async function run() {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
  });

  const page = await browser.newPage();
  
  // Track all network assets
  const assets = new Set();
  page.on('response', res => {
    const u = res.url();
    const type = res.request().resourceType();
    if (['image', 'media', 'font'].includes(type) && !u.startsWith('data:')) {
      assets.add({ url: u, type });
    }
  });

  const results = {};

  for (const p of pages) {
    console.log(`\n=== Inspecting: ${p.name} (${p.url}) ===`);
    results[p.name] = { url: p.url, sections: [], links: [], forms: [] };

    for (const vp of viewports) {
      console.log(`Setting viewport: ${vp.name} (${vp.width}x${vp.height})`);
      await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: vp.dpr });
      
      try {
        await page.goto(p.url, { waitUntil: 'networkidle2', timeout: 45000 });
        // wait for Framer transitions to settle
        await new Promise(r => setTimeout(r, 2000));
      } catch (err) {
        console.error(`Error loading ${p.url} at ${vp.name}:`, err.message);
      }

      const dir = path.join(process.cwd(), 'reference', vp.name);
      fs.mkdirSync(dir, { recursive: true });
      const screenshotPath = path.join(dir, `${p.name}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`Saved screenshot: ${screenshotPath}`);

      if (vp.name === 'desktop') {
        // Detailed extraction
        const data = await page.evaluate(() => {
          function getCleanStyles(el) {
            const cs = window.getComputedStyle(el);
            return {
              fontFamily: cs.fontFamily,
              fontSize: cs.fontSize,
              fontWeight: cs.fontWeight,
              lineHeight: cs.lineHeight,
              letterSpacing: cs.letterSpacing,
              color: cs.color,
              backgroundColor: cs.backgroundColor,
              padding: cs.padding,
              margin: cs.margin,
              borderRadius: cs.borderRadius,
              border: cs.border,
              display: cs.display,
              flexDirection: cs.flexDirection,
              gap: cs.gap,
              width: cs.width,
              maxWidth: cs.maxWidth
            };
          }

          const links = Array.from(document.querySelectorAll('a')).map(a => ({
            href: a.href,
            text: a.innerText.replace(/\s+/g, ' ').trim()
          }));

          const forms = Array.from(document.querySelectorAll('form, [data-framer-name*="Form"], input, textarea, select')).map(el => ({
            tagName: el.tagName,
            type: el.type || '',
            name: el.name || '',
            placeholder: el.placeholder || '',
            text: el.innerText ? el.innerText.slice(0, 100) : ''
          }));

          // Inspect visible top-level sections
          const sections = [];
          const main = document.querySelector('main') || document.body;
          
          // Get all direct children or high level blocks
          const walk = (node, depth = 0) => {
            if (!node || depth > 4) return;
            const tag = node.tagName ? node.tagName.toLowerCase() : '';
            const text = node.innerText ? node.innerText.trim() : '';
            const rect = node.getBoundingClientRect();
            
            // If it looks like a major section (height > 100 and near full width)
            if (rect.height > 120 && rect.width > 600 && depth <= 3) {
              const headings = Array.from(node.querySelectorAll('h1, h2, h3, h4')).map(h => ({
                tag: h.tagName,
                text: h.innerText.replace(/\s+/g, ' ').trim(),
                styles: getCleanStyles(h)
              }));
              
              const buttons = Array.from(node.querySelectorAll('button, a[href*="menu"], a[href*="contact"], a[href*="offers"]')).map(b => ({
                text: b.innerText.replace(/\s+/g, ' ').trim(),
                href: b.href || '',
                styles: getCleanStyles(b)
              }));

              const images = Array.from(node.querySelectorAll('img')).map(img => ({
                src: img.src,
                alt: img.alt,
                naturalWidth: img.naturalWidth,
                naturalHeight: img.naturalHeight
              }));

              sections.push({
                depth,
                tag,
                rect: { width: Math.round(rect.width), height: Math.round(rect.height), top: Math.round(rect.top) },
                headings,
                buttonsCount: buttons.length,
                imagesCount: images.length,
                textSnippet: text.slice(0, 200).replace(/\s+/g, ' ')
              });
            }

            for (const child of node.children) {
              walk(child, depth + 1);
            }
          };

          walk(main, 0);

          return { links, forms, sections };
        });

        results[p.name].data = data;
      }
    }
  }

  results.assets = Array.from(assets);
  fs.writeFileSync('scripts/inner-pages-data.json', JSON.stringify(results, null, 2));
  console.log('\nWrote data to scripts/inner-pages-data.json');
  console.log(`Captured ${results.assets.length} assets`);

  await browser.close();
}

run().catch(console.error);
