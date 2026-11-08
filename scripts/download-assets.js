import fs from 'fs';
import https from 'https';
import path from 'path';

const ASSETS_MAP = [
  { id: 'burger-hero-plate', ext: 'png', url: 'https://framerusercontent.com/images/5DEhx8qXRUbEXqRwbwUuzYm1GpU.png?width=1200&height=1200' },
  { id: 'cat-smash-burgers', ext: 'jpg', url: 'https://framerusercontent.com/images/ZXT4aya7lleaWWeXlptiyxJGn5U.jpg?width=1200&height=1798' },
  { id: 'cat-loaded-fries', ext: 'jpg', url: 'https://framerusercontent.com/images/elcyYjMqIQMaWwPJuUKwWmGblqU.jpg?width=1200&height=1799' },
  { id: 'cat-thick-shakes', ext: 'jpg', url: 'https://framerusercontent.com/images/o8pp0mTAR7OJrtG8GFhIgmudWE.jpg?width=1200&height=1800' },
  { id: 'cat-sandwiches', ext: 'jpg', url: 'https://framerusercontent.com/images/LaDUn0vIHw1pGxd8MZcxXIvJA.jpg?width=1200&height=1798' },
  { id: 'cat-pasta', ext: 'jpg', url: 'https://framerusercontent.com/images/mgsV6paOFv5lve1fb2YXQyxJEHY.jpg?width=1200&height=1800' },
  { id: 'offer-zestivo-combo', ext: 'jpg', url: 'https://framerusercontent.com/images/oEHJzbQiDCACgTWdwN5wsLoB5c4.jpg?width=1200&height=800' },
  { id: 'offer-pizza-party', ext: 'jpg', url: 'https://framerusercontent.com/images/lIRYM6TFxYkRmo11piik832zrkQ.jpg?width=1200&height=960' },
  { id: 'offer-crispy-chicken', ext: 'jpg', url: 'https://framerusercontent.com/images/ZkyJGMVxN00PSmRTtPxyhBKSSE.jpg?width=1200&height=800' },
  { id: 'menu-cheeseburger', ext: 'jpg', url: 'https://framerusercontent.com/images/GYc3BaU8pb2fvzx4owj0VTt7848.jpg?width=1200&height=1800' },
  { id: 'menu-bacon-stack', ext: 'jpg', url: 'https://framerusercontent.com/images/Nvjd6R13s17aGtGNP5lY9ApRE.jpg?width=1200&height=1800' },
  { id: 'menu-jalapeno-smash', ext: 'jpg', url: 'https://framerusercontent.com/images/cekrgkUE9GmPX1yjVD1Hujc8s.jpg?width=1200&height=800' },
  { id: 'menu-truffle-mushroom', ext: 'jpg', url: 'https://framerusercontent.com/images/jLoCS8kGFP7nYlrFlzTErmGU.jpg?width=1200&height=1600' },
  { id: 'menu-bbq-chicken', ext: 'jpg', url: 'https://framerusercontent.com/images/Ob5Dj4d9mP9IFP2uOdNFtDbaL3s.jpg?width=1200&height=800' },
  { id: 'menu-garlic-fries', ext: 'jpg', url: 'https://framerusercontent.com/images/TRJhOWnmoVYycDE0bqQ4lHsMNW8.jpg?width=1200&height=1800' },
  { id: 'about-grill-chef', ext: 'jpg', url: 'https://framerusercontent.com/images/rHx2lXUoYm6Ek2jPOQbyuBmMuhw.jpg?width=1200&height=1598' },
  { id: 'about-dining-table', ext: 'jpg', url: 'https://framerusercontent.com/images/jmidsn1yWfFeFR2iOaZ7AjUgMA.jpg?width=1200&height=900' },
  { id: 'catering-food-truck', ext: 'jpg', url: 'https://framerusercontent.com/images/b1Dxm7xGotpBuKftgqZyYrqHkBc.jpg?width=1200&height=1800' },
  { id: 'catering-party-spread', ext: 'jpg', url: 'https://framerusercontent.com/images/GBcruTCRxYkpMY6DbDoEZDc1Sk.jpg?width=1200&height=800' },
  { id: 'catering-corporate', ext: 'jpg', url: 'https://framerusercontent.com/images/V1hWoqi7B3VOlmA13zOjiUvEsNY.jpg?width=1200&height=1800' },
  { id: 'testimonial-avatar-1', ext: 'jpg', url: 'https://framerusercontent.com/images/Bln2KQhwtDy47O4b26DNjJB45Cw.jpg?width=1200&height=1200' },
  { id: 'testimonial-avatar-2', ext: 'jpg', url: 'https://framerusercontent.com/images/Mhxd71E1pCzIOxnnnJYobuizE.jpg?width=1200&height=1200' },
  { id: 'testimonial-avatar-3', ext: 'jpg', url: 'https://framerusercontent.com/images/fdOy53817Ot16MDWc1VImo4sLZA.jpg?width=1200&height=1200' },
  { id: 'gallery-01', ext: 'jpg', url: 'https://framerusercontent.com/images/OPfX5fblGwfINI5WJokRdO7II0.jpg?width=736&height=736' },
  { id: 'gallery-02', ext: 'jpg', url: 'https://framerusercontent.com/images/3Zcm8e2m44XhZjKWnePboheLUU.jpg?width=1200&height=960' },
  { id: 'gallery-03', ext: 'jpg', url: 'https://framerusercontent.com/images/1fb6K28CpW6uez6fCENuwgfTXMU.jpg?width=1200&height=1800' },
  { id: 'gallery-04', ext: 'jpg', url: 'https://framerusercontent.com/images/9T6JUKl3gN9fyVIiDvMRjNOxNc.jpg?width=1200&height=1800' },
  { id: 'gallery-05', ext: 'jpg', url: 'https://framerusercontent.com/images/XpWjlhSqXLSJkpD3vMzEARQ0.jpg?width=1200&height=1800' },
  { id: 'gallery-06', ext: 'jpg', url: 'https://framerusercontent.com/images/Qbm5NAhAqqLcjdcyqLnvJ1lxLT0.jpg?width=1200&height=1800' },
  { id: 'gallery-07', ext: 'jpg', url: 'https://framerusercontent.com/images/N8hFJY8e6GUlrDm5nWNvEHVPzY.jpg?width=1200&height=800' },
  { id: 'gallery-08', ext: 'jpg', url: 'https://framerusercontent.com/images/Dp04uZ9H7ul1ojyrXuDuoIaSAN4.jpg?width=1200&height=1800' },
  { id: 'gallery-09', ext: 'jpg', url: 'https://framerusercontent.com/images/Rgv0DmpPIzUzh5DKDMfRjtGdVHo.jpg?width=1200&height=1799' },
  { id: 'gallery-10', ext: 'jpg', url: 'https://framerusercontent.com/images/V1HLWBuEnVYI3msfarDb3Gezc.jpg?width=1200&height=800' },
  { id: 'blog-feature', ext: 'jpg', url: 'https://framerusercontent.com/images/8mOxTRfyQlnrFuTB6BYkxdQaj4.jpg?width=1200&height=900' }
];

async function downloadFile(item) {
  const dest = path.join('public/assets/images', `${item.id}.${item.ext}`);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 2000) {
    console.log(`[Cached] ${item.id}`);
    return;
  }
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const req = https.get(item.url, response => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        https.get(response.headers.location, redirectRes => {
          redirectRes.pipe(file);
          file.on('finish', () => { file.close(); console.log(`[Downloaded] ${item.id}`); resolve(); });
        }).on('error', err => { fs.unlink(dest, () => {}); reject(err); });
      } else {
        response.pipe(file);
        file.on('finish', () => { file.close(); console.log(`[Downloaded] ${item.id}`); resolve(); });
      }
    });
    req.on('error', err => { fs.unlink(dest, () => {}); reject(err); });
  });
}

async function run() {
  for (const item of ASSETS_MAP) {
    let success = false;
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        await downloadFile(item);
        success = true;
        break;
      } catch (err) {
        console.warn(`Retry ${attempt + 1} for ${item.id}...`);
        await new Promise(r => setTimeout(r, 800));
      }
    }
    if (!success) console.error(`Failed to download ${item.id}`);
    await new Promise(r => setTimeout(r, 200));
  }
  console.log('All image assets processed.');
}

run().catch(console.error);
