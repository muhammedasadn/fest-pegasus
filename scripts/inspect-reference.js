import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

async function run() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--window-size=1440,900']
  });

  const page = await browser.newPage();
  
  // Track all network requests
  const networkRequests = [];
  page.on('request', req => {
    networkRequests.push({
      url: req.url(),
      resourceType: req.resourceType(),
      method: req.method()
    });
  });

  page.on('response', async res => {
    const url = res.url();
    const contentType = res.headers()['content-type'] || '';
    if (url.includes('.spline') || url.includes('.glb') || url.includes('.gltf') || url.includes('.mp4') || url.includes('.webm') || url.includes('.json') || contentType.includes('font') || contentType.includes('video') || contentType.includes('model')) {
      console.log(`[Asset] ${res.status()} ${contentType} ${url}`);
    }
  });

  console.log('Navigating to https://real-project-691891.framer.app/ ...');
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('https://real-project-691891.framer.app/', { waitUntil: 'networkidle2', timeout: 60000 });

  console.log('Page loaded. Waiting for animations/models to settle...');
  await new Promise(r => setTimeout(r, 4000));

  // Get basic document info
  const pageInfo = await page.evaluate(() => {
    return {
      title: document.title,
      htmlLang: document.documentElement.lang,
      metaTags: Array.from(document.querySelectorAll('meta')).map(m => ({
        name: m.getAttribute('name'),
        property: m.getAttribute('property'),
        content: m.getAttribute('content')
      })),
      canvases: Array.from(document.querySelectorAll('canvas')).map(c => ({
        id: c.id,
        className: c.className,
        width: c.width,
        height: c.height,
        parentTag: c.parentElement?.tagName,
        parentClass: c.parentElement?.className
      })),
      videos: Array.from(document.querySelectorAll('video')).map(v => ({
        src: v.src || Array.from(v.querySelectorAll('source')).map(s => s.src).join(','),
        autoplay: v.autoplay,
        loop: v.loop,
        muted: v.muted,
        className: v.className
      })),
      iframes: Array.from(document.querySelectorAll('iframe')).map(i => ({
        src: i.src,
        className: i.className
      }))
    };
  });

  console.log('Page info:', JSON.stringify(pageInfo, null, 2));

  // Save network requests to a file
  fs.writeFileSync('scripts/network-requests.json', JSON.stringify(networkRequests, null, 2));

  await browser.close();
  console.log('Inspection phase 1 check done.');
}

run().catch(console.error);
