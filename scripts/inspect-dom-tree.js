import puppeteer from 'puppeteer-core';
import fs from 'fs';

async function inspectDOMTree() {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,1080']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1080, deviceScaleFactor: 2 });
  await page.goto('https://real-project-691891.framer.app/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 4000));

  const tree = await page.evaluate(() => {
    function summarize(el, depth = 0) {
      if (depth > 6) return null;
      const framerName = el.getAttribute('data-framer-name') || el.getAttribute('name');
      const componentType = el.getAttribute('data-framer-component-type');
      const className = el.className && typeof el.className === 'string' ? el.className.split(' ')[0] : '';
      const rect = el.getBoundingClientRect();
      
      const res = {
        tag: el.tagName,
        framerName,
        className,
        rect: {
          y: Math.round(rect.top + window.scrollY),
          height: Math.round(rect.height),
          width: Math.round(rect.width)
        }
      };

      // Only recurse if useful
      if (el.children && el.children.length > 0 && depth < 5) {
        res.children = Array.from(el.children)
          .map(c => summarize(c, depth + 1))
          .filter(Boolean);
      }
      return res;
    }

    const main = document.querySelector('#main') || document.body.firstElementChild;
    return summarize(main, 0);
  });

  fs.writeFileSync('scripts/dom-tree.json', JSON.stringify(tree, null, 2));
  console.log('Tree written to scripts/dom-tree.json');

  await browser.close();
}

inspectDOMTree().catch(console.error);
