import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

async function deepInspect() {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--window-size=1440,1080']
  });

  const page = await browser.newPage();

  // Capture all network assets
  const allAssets = {
    images: new Set(),
    fonts: new Set(),
    scripts: new Set(),
    stylesheets: new Set(),
    media: new Set(),
    other: new Set()
  };

  page.on('response', res => {
    const url = res.url();
    const type = res.request().resourceType();
    if (type === 'image') allAssets.images.add(url);
    else if (type === 'font') allAssets.fonts.add(url);
    else if (type === 'script') allAssets.scripts.add(url);
    else if (type === 'stylesheet') allAssets.stylesheets.add(url);
    else if (type === 'media') allAssets.media.add(url);
    else allAssets.other.add(`${type}: ${url}`);
  });

  // 1. DESKTOP (1440px)
  console.log('--- Inspecting Desktop (1440px) ---');
  await page.setViewport({ width: 1440, height: 1080, deviceScaleFactor: 2 });
  await page.goto('https://real-project-691891.framer.app/', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(r => setTimeout(r, 4000));

  // Screenshot full desktop page
  fs.mkdirSync('reference/desktop', { recursive: true });
  fs.mkdirSync('reference/tablet', { recursive: true });
  fs.mkdirSync('reference/mobile', { recursive: true });

  await page.screenshot({ path: 'reference/desktop/full-page-1440.png', fullPage: true });

  // Analyze page structure and sections
  const structure = await page.evaluate(() => {
    // Helper to get computed styles
    const getStyles = (el) => {
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
        border: cs.border,
        opacity: cs.opacity,
        transform: cs.transform
      };
    };

    // Find main container and direct children (sections)
    const bodyChildren = Array.from(document.body.children).filter(el => {
      const tag = el.tagName.toLowerCase();
      return tag !== 'script' && tag !== 'style' && tag !== 'iframe' && !el.id.includes('overlay');
    });

    // In Framer, usually there's a root div with data-framer-name or id="main"
    const root = document.querySelector('#main') || document.querySelector('[data-framer-root]') || document.body.firstElementChild;

    // Traverse root children or sections
    const getSectionInfo = (el, idx) => {
      const rect = el.getBoundingClientRect();
      const framerName = el.getAttribute('data-framer-name') || el.getAttribute('name') || el.className || `section-${idx}`;
      return {
        index: idx,
        tagName: el.tagName,
        framerName,
        id: el.id,
        className: el.className,
        rect: {
          x: rect.x,
          y: rect.y + window.scrollY,
          width: rect.width,
          height: rect.height
        },
        styles: getStyles(el)
      };
    };

    // Let's inspect all top-level sections in the page flow
    // In Framer, sections are direct children of the page stack container
    let sections = [];
    const container = document.querySelector('[data-framer-name="Desktop"]') || 
                      document.querySelector('[data-framer-component-type="NavigationContainer"]') ||
                      document.querySelector('main') || root;

    // If container has children, find frames that span full width or act as vertical sections
    const candidates = Array.from((container || document.body).querySelectorAll('*')).filter(el => {
      const rect = el.getBoundingClientRect();
      const name = el.getAttribute('data-framer-name');
      // If element has a data-framer-name and is substantial height (> 50px)
      return name && rect.width > 300 && rect.height > 50;
    });

    // Extract all text elements with their styles
    const texts = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, span, button')).map(el => {
      const text = el.textContent?.trim();
      if (!text || text.length > 200 || el.children.length > 2) return null;
      return {
        tag: el.tagName,
        text: text.slice(0, 100),
        framerName: el.getAttribute('data-framer-name'),
        styles: getStyles(el)
      };
    }).filter(Boolean);

    // Extract all images
    const images = Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src,
      currentSrc: img.currentSrc,
      alt: img.alt,
      width: img.naturalWidth || img.width,
      height: img.naturalHeight || img.height,
      rect: img.getBoundingClientRect(),
      framerName: img.getAttribute('data-framer-name') || img.parentElement?.getAttribute('data-framer-name')
    }));

    // Extract all SVG icons
    const svgs = Array.from(document.querySelectorAll('svg')).map(svg => ({
      viewBox: svg.getAttribute('viewBox'),
      width: svg.getAttribute('width') || svg.getBoundingClientRect().width,
      height: svg.getAttribute('height') || svg.getBoundingClientRect().height,
      parentName: svg.parentElement?.getAttribute('data-framer-name') || svg.parentElement?.className,
      innerHTML: svg.innerHTML.slice(0, 300)
    }));

    // Extract all links & buttons
    const interactives = Array.from(document.querySelectorAll('a, button, input')).map(el => ({
      tag: el.tagName,
      text: el.textContent?.trim(),
      href: el.getAttribute('href'),
      type: el.getAttribute('type'),
      framerName: el.getAttribute('data-framer-name'),
      rect: el.getBoundingClientRect(),
      styles: getStyles(el)
    }));

    return {
      title: document.title,
      rootName: root?.getAttribute('data-framer-name'),
      texts,
      images,
      svgs,
      interactives
    };
  });

  fs.writeFileSync('scripts/inspection-structure.json', JSON.stringify(structure, null, 2));

  // 2. TABLET (820px)
  console.log('--- Inspecting Tablet (820px) ---');
  await page.setViewport({ width: 820, height: 1180, deviceScaleFactor: 2 });
  await page.goto('https://real-project-691891.framer.app/', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(r => setTimeout(r, 3000));
  await page.screenshot({ path: 'reference/tablet/full-page-820.png', fullPage: true });

  // 3. MOBILE (390px)
  console.log('--- Inspecting Mobile (390px) ---');
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await page.goto('https://real-project-691891.framer.app/', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(r => setTimeout(r, 3000));
  await page.screenshot({ path: 'reference/mobile/full-page-390.png', fullPage: true });

  // Format assets
  const assetReport = {
    images: Array.from(allAssets.images),
    fonts: Array.from(allAssets.fonts),
    scripts: Array.from(allAssets.scripts),
    stylesheets: Array.from(allAssets.stylesheets),
    media: Array.from(allAssets.media),
    other: Array.from(allAssets.other)
  };
  fs.writeFileSync('scripts/inspection-assets.json', JSON.stringify(assetReport, null, 2));

  console.log('Full-page screenshots taken:');
  console.log('- reference/desktop/full-page-1440.png');
  console.log('- reference/tablet/full-page-820.png');
  console.log('- reference/mobile/full-page-390.png');

  await browser.close();
}

deepInspect().catch(console.error);
