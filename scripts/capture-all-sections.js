import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const SECTIONS = [
  { id: 'navbar', selector: 'nav', name: 'Navbar' },
  { id: '01-hero', selector: 'section[data-framer-name="Hero"]', name: 'Hero' },
  { id: '02-marquee', selector: 'div[data-framer-name="Marquee Band"]', name: 'Marquee Band' },
  { id: '03-popular-categories', selector: 'section[data-framer-name="Popular Categories"]', name: 'Popular Categories' },
  { id: '04-special-offers', selector: 'section[data-framer-name="Special Offers"]', name: 'Special Offers' },
  { id: '05-featured-menu', selector: 'section[data-framer-name="Featured Menu"]', name: 'Featured Menu' },
  { id: '06-about', selector: 'section[data-framer-name="About"]', name: 'About' },
  { id: '07-opening-hours', selector: 'section[data-framer-name="Opening Hours"]', name: 'Opening Hours' },
  { id: '08-why-choose-us', selector: 'section[data-framer-name="Why Choose Us"]', name: 'Why Choose Us' },
  { id: '09-catering-events', selector: 'section[data-framer-name="Catering & Events"]', name: 'Catering & Events' },
  { id: '10-testimonials', selector: 'section[data-framer-name="Testimonials"]', name: 'Testimonials' },
  { id: '11-faq', selector: 'section[data-framer-name="FAQ"]', name: 'FAQ' },
  { id: '12-gallery', selector: 'section[data-framer-name="Gallery"]', name: 'Gallery' },
  { id: '13-blog-preview', selector: 'section[data-framer-name="Blog Preview"]', name: 'Blog Preview' },
  { id: '14-final-cta', selector: 'section[data-framer-name="Final CTA"]', name: 'Final CTA' },
  { id: '15-footer', selector: 'footer[data-framer-name="Footer"]', name: 'Footer' }
];

async function captureAndMeasure() {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--window-size=1440,1080']
  });

  const viewports = [
    { name: 'desktop', width: 1440, height: 900 },
    { name: 'tablet', width: 820, height: 1180 },
    { name: 'mobile', width: 390, height: 844 }
  ];

  const fullData = {};

  for (const vp of viewports) {
    console.log(`\n=== Processing Viewport: ${vp.name} (${vp.width}px) ===`);
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 2 });
    
    // Listen for any late network requests
    const lateRequests = [];
    page.on('response', res => {
      const u = res.url();
      if (u.includes('spline') || u.includes('three') || u.includes('webgl') || u.includes('.glb') || u.includes('lottie') || u.includes('.mp4')) {
        lateRequests.push(u);
      }
    });

    await page.goto('https://real-project-691891.framer.app/', { waitUntil: 'networkidle2', timeout: 60000 });
    await new Promise(r => setTimeout(r, 2000));

    // Smooth scroll down the page to trigger all inView animations
    const totalHeight = await page.evaluate(() => document.body.scrollHeight);
    console.log(`Page total height at ${vp.width}px: ${totalHeight}px`);

    let currentY = 0;
    while (currentY < totalHeight) {
      currentY += 400;
      await page.evaluate(y => window.scrollTo(0, y), currentY);
      await new Promise(r => setTimeout(r, 100));
    }
    // Scroll back to top
    await page.evaluate(() => window.scrollTo(0, 0));
    await new Promise(r => setTimeout(r, 1500));

    if (lateRequests.length > 0) {
      console.log('Late 3D/Media requests caught:', lateRequests);
    }

    const dir = path.join('reference', vp.name);
    fs.mkdirSync(dir, { recursive: true });

    // Capture each section
    for (const sec of SECTIONS) {
      console.log(`Capturing ${sec.name} (${vp.name})...`);
      try {
        const el = await page.$(sec.selector);
        if (el) {
          // Scroll element into view smoothly so it is visible
          await el.scrollIntoView();
          await new Promise(r => setTimeout(r, 300));

          await el.screenshot({
            path: path.join(dir, `${sec.id}.png`),
            captureBeyondViewport: true
          });
        } else {
          console.warn(`Element not found: ${sec.selector}`);
        }
      } catch (err) {
        console.error(`Error capturing ${sec.name}:`, err.message);
      }
    }

    // Detailed measurements only once (on desktop, but also capture responsive adaptations)
    const measurements = await page.evaluate((sections) => {
      const getStyles = (el) => {
        if (!el) return null;
        const cs = window.getComputedStyle(el);
        return {
          fontFamily: cs.fontFamily,
          fontSize: cs.fontSize,
          fontWeight: cs.fontWeight,
          lineHeight: cs.lineHeight,
          letterSpacing: cs.letterSpacing,
          color: cs.color,
          backgroundColor: cs.backgroundColor,
          backgroundImage: cs.backgroundImage,
          border: cs.border,
          borderWidth: cs.borderWidth,
          borderStyle: cs.borderStyle,
          borderColor: cs.borderColor,
          borderRadius: cs.borderRadius,
          boxShadow: cs.boxShadow,
          padding: cs.padding,
          margin: cs.margin,
          gap: cs.gap,
          display: cs.display,
          flexDirection: cs.flexDirection,
          justifyContent: cs.justifyContent,
          alignItems: cs.alignItems,
          maxWidth: cs.maxWidth,
          width: cs.width,
          height: cs.height,
          transform: cs.transform
        };
      };

      return sections.map(sec => {
        const el = document.querySelector(sec.selector);
        if (!el) return { id: sec.id, name: sec.name, found: false };
        const rect = el.getBoundingClientRect();
        
        // Extract child components
        const cards = Array.from(el.querySelectorAll('[data-border="true"], [data-framer-name*="Card"], [data-framer-name*="Item"]')).map(c => ({
          name: c.getAttribute('data-framer-name'),
          rect: c.getBoundingClientRect(),
          styles: getStyles(c)
        }));

        const buttons = Array.from(el.querySelectorAll('a, button')).map(b => ({
          name: b.getAttribute('data-framer-name'),
          text: b.textContent?.trim(),
          href: b.getAttribute('href'),
          styles: getStyles(b)
        }));

        const headings = Array.from(el.querySelectorAll('h1, h2, h3, h4, h5, p')).map(h => ({
          tag: h.tagName,
          text: h.textContent?.trim(),
          styles: getStyles(h)
        })).filter(h => h.text && h.text.length > 0 && h.text.length < 150);

        return {
          id: sec.id,
          name: sec.name,
          found: true,
          rect: {
            top: rect.top + window.scrollY,
            left: rect.left,
            width: rect.width,
            height: rect.height
          },
          styles: getStyles(el),
          cards: cards.slice(0, 10),
          buttons,
          headings: headings.slice(0, 15)
        };
      });
    }, SECTIONS);

    fullData[vp.name] = measurements;
    await page.close();
  }

  fs.writeFileSync('scripts/sections-measured.json', JSON.stringify(fullData, null, 2));
  console.log('All sections captured and measured. Data written to scripts/sections-measured.json');

  await browser.close();
}

captureAndMeasure().catch(console.error);
