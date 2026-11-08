import puppeteer from 'puppeteer-core';
import fs from 'fs';

async function inspectHeroAndVisuals() {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,1080']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1080, deviceScaleFactor: 2 });
  await page.goto('https://real-project-691891.framer.app/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 4000));

  const result = await page.evaluate(() => {
    // Check Burger Plate
    const burgerPlate = document.querySelector('[data-framer-name="Burger Plate"]');
    const heroVisual = document.querySelector('[data-framer-name="Hero Visual"]');
    
    // Check all elements with 3D or visual names
    const floatingIcons = Array.from(document.querySelectorAll('[data-framer-name="Floating Icon"]'));
    
    // Check all canvases, WebGL contexts, videos, svgs, pictures, images
    const allImages = Array.from(document.querySelectorAll('img')).map(img => ({
      name: img.getAttribute('data-framer-name') || img.parentElement?.getAttribute('data-framer-name'),
      src: img.src,
      currentSrc: img.currentSrc,
      alt: img.alt,
      width: img.width,
      height: img.height,
      rect: img.getBoundingClientRect()
    }));

    // Check style backgrounds
    const elementsWithBgImage = Array.from(document.querySelectorAll('*')).filter(el => {
      const bg = window.getComputedStyle(el).backgroundImage;
      return bg && bg !== 'none';
    }).map(el => ({
      tagName: el.tagName,
      name: el.getAttribute('data-framer-name'),
      className: el.className,
      bg: window.getComputedStyle(el).backgroundImage
    }));

    return {
      burgerPlateHTML: burgerPlate?.outerHTML.slice(0, 1000),
      heroVisualHTML: heroVisual?.outerHTML.slice(0, 1000),
      floatingIcons: floatingIcons.map(f => f.outerHTML.slice(0, 500)),
      allImagesCount: allImages.length,
      allImages: allImages.slice(0, 20),
      elementsWithBgImage: elementsWithBgImage.slice(0, 20)
    };
  });

  console.log('Result:', JSON.stringify(result, null, 2));
  fs.writeFileSync('scripts/hero-visuals-inspection.json', JSON.stringify(result, null, 2));

  await browser.close();
}

inspectHeroAndVisuals().catch(console.error);
