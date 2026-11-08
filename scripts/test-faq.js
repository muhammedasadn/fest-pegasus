import puppeteer from 'puppeteer-core';

async function testFAQClick() {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,1080']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1080, deviceScaleFactor: 2 });
  await page.goto('https://real-project-691891.framer.app/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2000));

  // Find FAQ question
  const clicked = await page.evaluate(async () => {
    const faqItem = document.querySelector('[data-framer-name="Closed"]');
    if (!faqItem) return 'No closed FAQ item';
    faqItem.scrollIntoView();
    faqItem.click();
    return {
      beforeClickName: faqItem.getAttribute('data-framer-name')
    };
  });
  console.log('Clicked FAQ:', clicked);
  await new Promise(r => setTimeout(r, 600));

  // Take screenshot of open FAQ item
  const faqSection = await page.$('section[data-framer-name="FAQ"]');
  if (faqSection) {
    await faqSection.screenshot({ path: 'reference/desktop/faq-open.png' });
    console.log('Saved reference/desktop/faq-open.png');
  }

  // Get outerHTML of the opened FAQ item
  const openInfo = await page.evaluate(() => {
    const openItem = document.querySelector('[data-framer-name="Open"]');
    return {
      foundOpen: !!openItem,
      html: openItem?.outerHTML.slice(0, 1000)
    };
  });
  console.log('Open info:', openInfo);

  await browser.close();
}

testFAQClick().catch(console.error);
