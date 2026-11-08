import puppeteer from 'puppeteer-core';
import fs from 'fs';

async function inspectInteractions() {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,1080']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1080, deviceScaleFactor: 2 });
  await page.goto('https://real-project-691891.framer.app/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 3000));

  const interactions = await page.evaluate(() => {
    // 1. Navbar links
    const navLinks = Array.from(document.querySelectorAll('nav a, header a')).map(a => ({
      text: a.textContent.trim(),
      href: a.getAttribute('href'),
      ariaLabel: a.getAttribute('aria-label')
    }));

    // 2. All buttons and interactive anchors
    const allButtons = Array.from(document.querySelectorAll('a, button')).map(b => ({
      tagName: b.tagName,
      text: b.textContent.trim().replace(/\s+/g, ' '),
      href: b.getAttribute('href'),
      target: b.getAttribute('target'),
      framerName: b.getAttribute('data-framer-name') || b.parentElement?.getAttribute('data-framer-name')
    })).filter(b => b.text && b.text.length < 50);

    // 3. Forms and inputs
    const forms = Array.from(document.querySelectorAll('form, input, textarea, select')).map(f => ({
      tag: f.tagName,
      type: f.getAttribute('type'),
      placeholder: f.getAttribute('placeholder'),
      name: f.getAttribute('name'),
      id: f.id,
      action: f.getAttribute('action')
    }));

    // 4. FAQ items structure
    const faqSection = document.querySelector('section[data-framer-name="FAQ"]');
    const faqItems = faqSection ? Array.from(faqSection.querySelectorAll('[data-framer-name*="Item"], [data-framer-name*="Question"], [data-border="true"]')).map(item => ({
      name: item.getAttribute('data-framer-name'),
      text: item.textContent.trim().replace(/\s+/g, ' ')
    })) : [];

    return {
      navLinks,
      allButtonsCount: allButtons.length,
      allButtons,
      forms,
      faqItems: faqItems.slice(0, 10)
    };
  });

  console.log('Interactions:', JSON.stringify(interactions, null, 2));
  fs.writeFileSync('scripts/interactions-measured.json', JSON.stringify(interactions, null, 2));

  // Test FAQ item click on live page
  const faqClicked = await page.evaluate(async () => {
    const faqSection = document.querySelector('section[data-framer-name="FAQ"]');
    if (!faqSection) return 'No FAQ section';
    const clickables = Array.from(faqSection.querySelectorAll('div, button')).filter(el => {
      const text = el.textContent || '';
      return text.includes('What are your opening hours?') || text.includes('Do you offer vegetarian') || text.includes('Can I make a reservation?');
    });
    return clickables.map(c => ({ tag: c.tagName, className: c.className, framerName: c.getAttribute('data-framer-name') }));
  });
  console.log('FAQ clickables:', faqClicked);

  // Now test mobile menu at 390px
  console.log('--- Testing Mobile Menu at 390px ---');
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
  await page.goto('https://real-project-691891.framer.app/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2000));

  const mobileMenuInfo = await page.evaluate(() => {
    const menuBtn = document.querySelector('[data-framer-name="Menu Button"], [data-framer-name*="Hamburger"], [aria-label*="Menu"], nav button');
    return {
      menuBtnFound: !!menuBtn,
      btnHTML: menuBtn?.outerHTML,
      navHTML: document.querySelector('nav')?.outerHTML.slice(0, 1000)
    };
  });
  console.log('Mobile menu info:', mobileMenuInfo);

  // If mobile button exists, click it and take a screenshot of open menu!
  const menuBtn = await page.$('[data-framer-name="Menu Button"], [aria-label*="menu" i], nav button, nav div[role="button"]');
  if (menuBtn) {
    console.log('Clicking mobile menu button...');
    await menuBtn.click();
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: 'reference/mobile/menu-open.png' });
    console.log('Saved reference/mobile/menu-open.png');
  }

  await browser.close();
}

inspectInteractions().catch(console.error);
