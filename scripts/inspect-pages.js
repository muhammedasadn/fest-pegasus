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
  { name: 'desktop', width: 1440, height: 900, dpr: 1 },
  { name: 'tablet', width: 820, height: 1180, dpr: 1 },
  { name: 'mobile', width: 390, height: 844, dpr: 1 }
];

async function run() {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--window-size=1440,1080']
  });

  const fullReport = {};

  for (const p of pages) {
    console.log(`\n========================================`);
    console.log(`Starting page: ${p.name} (${p.url})`);
    console.log(`========================================`);
    fullReport[p.name] = { url: p.url };

    for (const vp of viewports) {
      console.log(`[${p.name}] Viewport: ${vp.name} (${vp.width}x${vp.height})...`);
      const page = await browser.newPage();
      await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: vp.dpr });

      try {
        await page.goto(p.url, { waitUntil: 'load', timeout: 30000 });
        await new Promise(r => setTimeout(r, 1500));

        // Quick incremental scroll to trigger inView animations
        await page.evaluate(async () => {
          const total = document.body.scrollHeight || 4000;
          const step = Math.max(400, Math.floor(window.innerHeight * 0.8));
          for (let y = 0; y < total; y += step) {
            window.scrollTo(0, y);
            await new Promise(r => setTimeout(r, 80));
          }
          window.scrollTo(0, 0);
          await new Promise(r => setTimeout(r, 300));
        });

        // Screenshot
        const dir = path.join(process.cwd(), 'reference', vp.name, 'pages');
        fs.mkdirSync(dir, { recursive: true });
        const filePath = path.join(dir, `${p.name}.png`);
        await page.screenshot({ path: filePath, fullPage: true });
        console.log(`[${p.name}] Screenshot saved: ${filePath}`);

        if (vp.name === 'desktop') {
          // Extract DOM details
          const pageDetails = await page.evaluate(() => {
            const getComputed = (el) => {
              const cs = window.getComputedStyle(el);
              return {
                fontFamily: cs.fontFamily,
                fontSize: cs.fontSize,
                fontWeight: cs.fontWeight,
                lineHeight: cs.lineHeight,
                color: cs.color,
                bg: cs.backgroundColor,
                padding: cs.padding,
                margin: cs.margin,
                gap: cs.gap,
                borderRadius: cs.borderRadius
              };
            };

            const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => ({
              tag: h.tagName,
              text: h.innerText.replace(/\s+/g, ' ').trim(),
              styles: getComputed(h)
            }));

            const buttons = Array.from(document.querySelectorAll('button, a[href]')).map(b => ({
              tag: b.tagName,
              text: b.innerText.replace(/\s+/g, ' ').trim(),
              href: b.href || '',
              styles: getComputed(b)
            })).filter(b => b.text.length > 0 && b.text.length < 50);

            const images = Array.from(document.querySelectorAll('img')).map(img => ({
              src: img.src,
              alt: img.alt,
              w: img.naturalWidth,
              h: img.naturalHeight
            }));

            // Extract main sections
            const sections = [];
            document.querySelectorAll('[data-framer-name]').forEach(el => {
              const name = el.getAttribute('data-framer-name');
              const rect = el.getBoundingClientRect();
              if (rect.width > 600 && rect.height > 120 && !['Desktop', 'Tablet', 'Mobile', 'Navigation', 'Navbar', 'Footer'].includes(name)) {
                sections.push({
                  name,
                  textSnippet: (el.innerText || '').slice(0, 200).replace(/\s+/g, ' ')
                });
              }
            });

            // Extract forms if any
            const forms = Array.from(document.querySelectorAll('form, input, textarea, select')).map(el => ({
              tag: el.tagName,
              type: el.type || '',
              name: el.name || '',
              placeholder: el.placeholder || '',
              required: el.required
            }));

            return { headings, buttons, images, sections, forms };
          });

          fullReport[p.name].details = pageDetails;
        }

      } catch (err) {
        console.error(`Error on ${p.name} (${vp.name}):`, err.message);
      } finally {
        await page.close();
      }
    }
  }

  fs.writeFileSync('scripts/pages-inspection-report.json', JSON.stringify(fullReport, null, 2));
  console.log('\n========================================');
  console.log('Inspection complete! Wrote scripts/pages-inspection-report.json');
  console.log('========================================');

  await browser.close();
}

run().catch(console.error);
