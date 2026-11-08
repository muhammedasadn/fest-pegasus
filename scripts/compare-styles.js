import puppeteer from 'puppeteer-core';

async function compare() {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,1080']
  });

  const pageRef = await browser.newPage();
  await pageRef.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await pageRef.goto('https://real-project-691891.framer.app/', { waitUntil: 'networkidle2' });

  const pageBuild = await browser.newPage();
  await pageBuild.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await pageBuild.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

  const getMetrics = async (page, isBuild) => {
    return page.evaluate((isBuild) => {
      const nav = document.querySelector('nav');
      const h1 = document.querySelector('h1');
      const btn = document.querySelector('a[href*="menu"], a[href*="order"]');
      const navCs = nav ? window.getComputedStyle(nav) : {};
      const h1Cs = h1 ? window.getComputedStyle(h1) : {};
      const btnCs = btn ? window.getComputedStyle(btn) : {};

      return {
        nav: {
          width: nav?.getBoundingClientRect().width,
          height: nav?.getBoundingClientRect().height,
          border: navCs.border,
          boxShadow: navCs.boxShadow,
          borderRadius: navCs.borderRadius,
          bg: navCs.backgroundColor
        },
        h1: {
          fontSize: h1Cs.fontSize,
          fontWeight: h1Cs.fontWeight,
          lineHeight: h1Cs.lineHeight,
          letterSpacing: h1Cs.letterSpacing,
          fontFamily: h1Cs.fontFamily
        },
        btn: {
          height: btn?.getBoundingClientRect().height,
          bg: btnCs.backgroundColor,
          border: btnCs.border,
          boxShadow: btnCs.boxShadow,
          borderRadius: btnCs.borderRadius
        }
      };
    }, isBuild);
  };

  const refMetrics = await getMetrics(pageRef, false);
  const buildMetrics = await getMetrics(pageBuild, true);

  console.log('--- REFERENCE METRICS ---');
  console.log(JSON.stringify(refMetrics, null, 2));
  console.log('\n--- BUILD METRICS ---');
  console.log(JSON.stringify(buildMetrics, null, 2));

  await browser.close();
}

compare().catch(console.error);
