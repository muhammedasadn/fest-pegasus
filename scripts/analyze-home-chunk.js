import fs from 'fs';

const code = fs.readFileSync('scripts/chunks/9smMHI1LFaujObhJVZEp2s1KHL9ULJr9KF-lv99HlnQ.ydsXtLVF.mjs', 'utf8');

// 1. Breakpoints
const breakpoints = code.match(/@media[^{]+{/g);
console.log('--- Breakpoints ---');
console.log(Array.from(new Set(breakpoints)));

// 2. CSS Variables / Colors
const colors = code.match(/rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)|rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d\.]+\s*\)|#[0-9a-fA-F]{3,8}/g);
const uniqueColors = Array.from(new Set(colors));
console.log('\n--- Colors Count:', uniqueColors.length);
console.log(uniqueColors.slice(0, 30));

// 3. Fonts
const fonts = code.match(/--framer-font-family:[^;]+|fontFamily:[^;,]+|font-family:[^;]+/g);
console.log('\n--- Fonts ---');
console.log(Array.from(new Set(fonts)));

// 4. Transitions / Springs / Animations
const transitions = code.match(/(transition|variants|animate|initial|whileHover|whileTap|whileInView):\{[^}]+\}/g);
console.log('\n--- Transitions count:', transitions ? transitions.length : 0);
if (transitions) {
  console.log(transitions.slice(0, 10));
}

// 5. Scroll Sections
const scrollSections = code.match(/framerScrollSections:([^\}]+})/);
if (scrollSections) {
  console.log('\n--- Scroll Sections ---', scrollSections[0]);
}

// 6. Look for Burger Plate transform / animations
const burgerIdx = code.indexOf('Burger Plate');
if (burgerIdx !== -1) {
  console.log('\n--- Burger Plate context ---');
  console.log(code.slice(burgerIdx - 200, burgerIdx + 400));
}
