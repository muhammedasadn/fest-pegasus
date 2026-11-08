import puppeteer from 'puppeteer-core';

async function verifyNavbar() {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log("1. Testing Desktop Navbar Links...");
  await page.goto("http://localhost:3000", { waitUntil: "networkidle2" });

  const links = await page.$$eval("nav a", (elements) =>
    elements.map((el) => ({
      text: el.innerText.trim(),
      href: el.getAttribute("href"),
    }))
  );
  console.log("Found nav links:", links);

  const expectedHrefs = ["/", "/menu", "/offers", "/events", "/about", "/blog", "/contact"];
  for (const expected of expectedHrefs) {
    const found = links.some((l) => l.href === expected);
    if (!found) {
      console.error(`Missing expected nav link for href: ${expected}`);
      process.exit(1);
    }
  }
  console.log("✓ All 7 page links are present in Desktop Navbar!");

  // Test clicking Menu
  console.log("2. Clicking 'Menu' link in desktop navbar...");
  const menuLink = await page.$("nav div a[href='/menu']");
  if (menuLink) {
    await menuLink.click();
    await new Promise((r) => setTimeout(r, 1200));
    const currentUrl = page.url();
    console.log("Current URL after click:", currentUrl);
    if (!currentUrl.includes("/menu")) {
      console.error("Navigation to /menu failed!");
      process.exit(1);
    }
    console.log("✓ Successfully navigated to /menu!");
  }

  // Test Mobile Drawer
  console.log("3. Testing Mobile Navbar Drawer...");
  await page.setViewport({ width: 390, height: 844 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle2" });

  // Click hamburger
  const hamburger = await page.$("button[aria-label='Open menu']");
  if (!hamburger) {
    console.error("Hamburger button not found!");
    process.exit(1);
  }
  await hamburger.click();
  await new Promise((r) => setTimeout(r, 600));

  const mobileLinks = await page.$$eval("header a", (elements) =>
    elements.map((el) => ({
      text: el.innerText.trim(),
      href: el.getAttribute("href"),
    }))
  );
  console.log("Found mobile links inside drawer:", mobileLinks);

  // Click Offers from mobile drawer
  const mobileOffersLink = await page.$("header .lg\\:hidden a[href='/offers']");
  if (mobileOffersLink) {
    await mobileOffersLink.click();
    await new Promise((r) => setTimeout(r, 1200));
    const currentUrl = page.url();
    console.log("Current URL after mobile click:", currentUrl);
    if (!currentUrl.includes("/offers")) {
      console.error("Navigation to /offers from mobile drawer failed!");
      process.exit(1);
    }
    console.log("✓ Successfully navigated to /offers from mobile drawer!");
  }

  console.log("\nALL NAVBAR NAVIGATION CHECKS PASSED PERFECTLY!");
  await browser.close();
}

verifyNavbar().catch((err) => {
  console.error("Error verifying navbar:", err);
  process.exit(1);
});
