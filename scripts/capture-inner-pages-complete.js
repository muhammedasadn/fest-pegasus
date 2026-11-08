import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const pages = [
  { name: 'menu', url: 'https://real-project-691891.framer.app/menu' },
  { name: 'offers', url: 'https://real-project-691891.framer.app/offers' },
  { name: 'events', url: 'https://real-project-691891.framer.app/events' },
  { name: 'about', url: 'https://real-project-691891.framer.app/about' },
  { name: 'blog', url: 'https://real-project-691891.framer.app/blog' },
  { name: 'contact', url: 'https://real-project-691891.framer.app/contact' }
];

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 820, height: 1180 },
  { name: 'mobile', width: 390, height: 844 }
];

async function main() {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--window-size=1440,1080']
  });

  const fullAnalysis = {};

  for (const p of pages) {
    console.log(`\n========================================`);
    console.log(`Analyzing Page: ${p.name.toUpperCase()} -> ${p.url}`);
    console.log(`========================================`);
    fullAnalysis[p.name] = { url: p.url, viewports: {} };

    for (const vp of viewports) {
      console.log(`[${p.name}] Viewport: ${vp.name} (${vp.width}x${vp.height})...`);
      const page = await browser.newPage();
      await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 1 });

      try {
        await page.goto(p.url, { waitUntil: 'networkidle2', timeout: 40000 });
        await new Promise(r => setTimeout(r, 2000));

        // Smooth scroll through page to trigger animations
        await page.evaluate(async () => {
          const distance = 400;
          const total = document.body.scrollHeight || 4000;
          for (let y = 0; y < total; y += distance) {
            window.scrollTo(0, y);
            await new Promise(r => setTimeout(r, 60));
          }
          window.scrollTo(0, 0);
          await new Promise(r => setTimeout(r, 300));
        });

        const dir = path.join(process.cwd(), 'reference', vp.name, 'pages');
        fs.mkdirSync(dir, { recursive: true });
        const filePath = path.join(dir, `${p.name}.png`);
        await page.screenshot({ path: filePath, fullPage: true });
        console.log(`[${p.name}] Screenshot saved: ${filePath}`);

        if (vp.name === 'desktop') {
          // Extract full structured DOM data
          const data = await page.evaluate(() => {
            const getCS = el => {
              const cs = window.getComputedStyle(el);
              return {
                fontSize: cs.fontSize,
                fontWeight: cs.fontWeight,
                fontFamily: cs.fontFamily,
                lineHeight: cs.lineHeight,
                color: cs.color,
                bg: cs.backgroundColor,
                padding: cs.padding,
                margin: cs.margin,
                gap: cs.gap,
                borderRadius: cs.borderRadius,
                maxWidth: cs.maxWidth
              };
            };

            // Sections with data-framer-name
            const framerSections = [];
            const seen = new Set();
            document.querySelectorAll('[data-framer-name]').forEach(el => {
              const name = el.getAttribute('data-framer-name');
              const rect = el.getBoundingClientRect();
              if (rect.width > 500 && rect.height > 100 && !seen.has(name)) {
                seen.add(name);
                framerSections.push({
                  name,
                  tag: el.tagName,
                  rect: { w: Math.round(rect.width), h: Math.round(rect.height) },
                  textPreview: (el.innerText || '').slice(0, 180).replace(/\s+/g, ' ')
                });
              }
            });

            // Headings
            const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4')).map(h => ({
              tag: h.tagName,
              text: h.innerText.replace(/\s+/g, ' ').trim(),
              styles: getCS(h)
            })).filter(h => h.text.length > 0);

            // Images
            const images = Array.from(document.querySelectorAll('img')).map(img => ({
              src: img.src,
              alt: img.alt,
              w: img.naturalWidth,
              h: img.naturalHeight
            }));

            // Buttons / CTA links
            const buttons = Array.from(document.querySelectorAll('button, a')).map(b => ({
              tag: b.tagName,
              text: b.innerText.replace(/\s+/g, ' ').trim(),
              href: b.href || '',
              styles: getCS(b)
            })).filter(b => b.text.length > 0 && b.text.length < 50);

            // Forms & Inputs
            const forms = Array.from(document.querySelectorAll('form, input, textarea, select')).map(el => ({
              tag: el.tagName,
              type: el.type || '',
              name: el.name || '',
              placeholder: el.placeholder || '',
              required: el.required
            }));

            return { framerSections, headings, images, buttons, forms };
          });

          fullAnalysis[p.name].data = data;
        }

      } catch (err) {
        console.error(`Error processing ${p.name} at ${vp.name}:`, err.message);
      } finally {
        await page.close();
      }
    }
  }

  fs.writeFileSync('scripts/inner-pages-full-analysis.json', JSON.stringify(fullAnalysis, null, 2));
  console.log('\n========================================');
  console.log('Saved scripts/inner-pages-full-analysis.json');
  console.log('========================================');

  await browser.close();
}

main().catch(console.error);
