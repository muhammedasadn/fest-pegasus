import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

async function verify() {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,1080']
  });

  const viewports = [
    { name: 'desktop', width: 1440, height: 900 },
    { name: 'tablet', width: 820, height: 1180 },
    { name: 'mobile', width: 390, height: 844 }
  ];

  for (const vp of viewports) {
    const page = await browser.newPage();
    await page.setViewport({ width: vp.width, height: vp.height, deviceScaleFactor: 2 });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 1500));

    const outDir = path.join('verification', vp.name);
    fs.mkdirSync(outDir, { recursive: true });

    // Full page screenshot
    await page.screenshot({ path: path.join(outDir, 'build-full-page.png'), fullPage: true });

    // Navbar screenshot
    const nav = await page.$('nav');
    if (nav) {
      await nav.screenshot({ path: path.join(outDir, 'navbar.png') });
    }

    // Hero screenshot
    const hero = await page.$('section');
    if (hero) {
      await hero.screenshot({ path: path.join(outDir, '01-hero.png') });
    }

    // Marquee screenshot
    const marquee = await page.$('div[aria-hidden="true"]');
    if (marquee) {
      await marquee.screenshot({ path: path.join(outDir, '02-marquee.png') });
    }

    // Categories screenshot
    const categories = await page.$('#categories');
    if (categories) {
      await categories.screenshot({ path: path.join(outDir, '03-popular-categories.png') });
    }

    // Offers screenshot
    const offers = await page.$('#offers');
    if (offers) {
      await offers.screenshot({ path: path.join(outDir, '04-special-offers.png') });
    }

    // Menu screenshot
    const menu = await page.$('#menu');
    if (menu) {
      await menu.screenshot({ path: path.join(outDir, '05-featured-menu.png') });
    }

    // About screenshot
    const about = await page.$('#about');
    if (about) {
      await about.screenshot({ path: path.join(outDir, '06-about.png') });
    }

    // Opening Hours screenshot
    const hours = await page.$('#hours');
    if (hours) {
      await hours.screenshot({ path: path.join(outDir, '07-opening-hours.png') });
    }

    // Why Choose Us screenshot
    const whyUs = await page.$('#why-us');
    if (whyUs) {
      await whyUs.screenshot({ path: path.join(outDir, '08-why-choose-us.png') });
    }

    // Catering screenshot
    const catering = await page.$('#catering');
    if (catering) {
      await catering.screenshot({ path: path.join(outDir, '09-catering-events.png') });
    }

    // Testimonials screenshot
    const testimonials = await page.$('#testimonials');
    if (testimonials) {
      await testimonials.screenshot({ path: path.join(outDir, '10-testimonials.png') });
    }

    // FAQ screenshot
    const faq = await page.$('#faq');
    if (faq) {
      await faq.scrollIntoView();
      await new Promise(r => setTimeout(r, 600));
      await faq.screenshot({ path: path.join(outDir, '11-faq.png') });
      // Test opening the first accordion item
      const toggle = await page.$('#faq button');
      if (toggle) {
        await toggle.click();
        await new Promise(r => setTimeout(r, 600));
        await faq.screenshot({ path: path.join(outDir, '11-faq-open.png') });
      }
    }

    // Gallery screenshot
    const gallery = await page.$('#gallery');
    if (gallery) {
      await gallery.scrollIntoView();
      await new Promise(r => setTimeout(r, 600));
      await gallery.screenshot({ path: path.join(outDir, '12-gallery.png') });
    }

    // Blog screenshot
    const blog = await page.$('#blog');
    if (blog) {
      await blog.scrollIntoView();
      await new Promise(r => setTimeout(r, 600));
      await blog.screenshot({ path: path.join(outDir, '13-blog-preview.png') });
    }

    // Final CTA screenshot
    const finalCta = await page.$('#final-cta');
    if (finalCta) {
      await finalCta.screenshot({ path: path.join(outDir, '14-final-cta.png') });
    }

    // Footer screenshot
    const footer = await page.$('footer');
    if (footer) {
      await footer.screenshot({ path: path.join(outDir, '15-footer.png') });
    }

    // If mobile, test menu click
    if (vp.name === 'mobile') {
      const menuBtn = await page.$('nav button');
      if (menuBtn) {
        await menuBtn.click();
        await new Promise(r => setTimeout(r, 500));
        await page.screenshot({ path: path.join(outDir, 'menu-open.png') });
      }
    }

    await page.close();
  }

  await browser.close();
  console.log('Verification screenshots captured across desktop, tablet, and mobile.');
}

verify().catch(console.error);
