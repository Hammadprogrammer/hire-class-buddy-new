import { readdirSync, readFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { createHash } from 'node:crypto';

const [referenceArg, currentArg = 'out'] = process.argv.slice(2);
if (!referenceArg) {
  console.error('Usage: node verify-export.mjs <reference-export> [current-export]');
  process.exit(1);
}
const reference = resolve(referenceArg);
const current = resolve(currentArg);
if (reference === current) throw new Error('Reference and current exports must be different directories.');
const walk = (root, prefix = '') => readdirSync(join(root, prefix), { withFileTypes: true })
  .flatMap(entry => entry.isDirectory() ? walk(root, `${prefix}${entry.name}/`) : [`${prefix}${entry.name}`]);
const referenceFiles = walk(reference);
const currentFiles = new Set(walk(current));
const read = (root, file) => readFileSync(join(root, file), 'utf8');
const hash = (root, file) => createHash('sha256').update(readFileSync(join(root, file))).digest('hex');
const decode = text => text.replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
  .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
  .replace(/&(amp|lt|gt|quot|apos|nbsp);/g, (_, name) => ({ amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' })[name]);
const normalizeText = text => decode(text).replace(/\s+/g, ' ').trim();
const withoutRuntime = html => html.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '').replace(/<!--[\s\S]*?-->/g, '');
const attributes = tag => Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [key, decode(value)]));
const sorted = values => [...new Set(values)].sort();
const inspect = html => {
  const clean = withoutRuntime(html);
  const tags = [...clean.matchAll(/<(?:a|img|input|textarea|button|form|meta|link)\b[^>]*>/gi)].map(([tag]) => ({ tag, attrs: attributes(tag) }));
  return {
    text: normalizeText(clean.replace(/<[^>]+>/g, ' ')),
    externalUrls: sorted([...html.matchAll(/https?:\/\/[^\s"'<>\\]+/g)].map(([url]) => decode(url))),
    metadata: sorted(tags.filter(({ tag, attrs }) => /^<meta\b/i.test(tag) || attrs.rel === 'canonical')
      .map(({ attrs }) => JSON.stringify(attrs))),
    links: sorted(tags.filter(({ tag }) => /^<a\b/i.test(tag)).map(({ attrs }) => attrs.href).filter(Boolean)),
    images: sorted(tags.filter(({ tag }) => /^<img\b/i.test(tag)).map(({ attrs }) => JSON.stringify({ src: attrs.src, alt: attrs.alt }))),
    forms: tags.filter(({ tag }) => /^<(input|textarea|button|form)\b/i.test(tag)).map(({ tag, attrs }) => JSON.stringify({
      tag: tag.match(/^<(\w+)/)[1], type: attrs.type, name: attrs.name, placeholder: attrs.placeholder, action: attrs.action, method: attrs.method,
    })),
  };
};
let failures = 0;
let pageCount = 0;
let assetCount = 0;
const fail = (file, category, details = '') => {
  failures++;
  console.error(`DIFF ${file}: ${category}${details ? `\n${details}` : ''}`);
};
for (const file of referenceFiles.filter(file => file.endsWith('.html'))) {
  pageCount++;
  if (!currentFiles.has(file)) {
    fail(file, 'missing page (case-sensitive path)');
    continue;
  }
  const before = inspect(read(reference, file));
  const after = inspect(read(current, file));
  for (const category of Object.keys(before)) {
    if (JSON.stringify(before[category]) === JSON.stringify(after[category])) continue;
    if (category === 'text') {
      let index = 0;
      while (before.text[index] === after.text[index] && index < before.text.length) index++;
      fail(file, category, `Reference: ${before.text.slice(Math.max(0, index - 60), index + 220)}\nCurrent:   ${after.text.slice(Math.max(0, index - 60), index + 220)}`);
    } else {
      const missing = before[category].filter(value => !after[category].includes(value));
      const added = after[category].filter(value => !before[category].includes(value));
      fail(file, category, JSON.stringify({ referenceOnly: missing, currentOnly: added }));
    }
  }
}
for (const file of referenceFiles.filter(file => !file.startsWith('_next/') && !file.endsWith('.html') && !/(^|\/)__next\./.test(file) && !/(^|\/)index\.txt$/.test(file))) {
  assetCount++;
  if (!currentFiles.has(file)) fail(file, 'missing asset/config');
  else if (/\.(txt|xml)$/.test(file) || file === '.htaccess') {
    const normalize = text => text.replace(/\r\n/g, '\n').replace(/<lastmod>[^<]*<\/lastmod>/g, '<lastmod/>').trim();
    if (normalize(read(reference, file)) !== normalize(read(current, file))) fail(file, 'asset/config content');
  } else if (hash(reference, file) !== hash(current, file)) fail(file, 'asset bytes');
}
for (const extension of ['css', 'js', 'woff2']) {
  const before = referenceFiles.filter(file => file.startsWith('_next/static/') && file.endsWith(`.${extension}`));
  const after = [...currentFiles].filter(file => file.startsWith('_next/static/') && file.endsWith(`.${extension}`));
  const hashes = new Set(after.map(file => hash(current, file)));
  const unmatched = before.filter(file => !hashes.has(hash(reference, file)));
  console.log(`Compiled ${extension}: ${before.length - unmatched.length}/${before.length} reference files byte-identical (informational; build hashes can change).`);
  if (extension === 'css') {
    const normalizeCss = text => text.replace(/@font-face\s*\{[^}]*\}/g, '').replace(/\/\*[^]*?\*\//g, '').trim();
    const currentCss = new Set(after.map(file => normalizeCss(read(current, file))));
    for (const file of unmatched) {
      const expected = normalizeCss(read(reference, file));
      if (currentCss.has(expected)) continue;
      const candidates = after.map(candidate => {
        const actual = normalizeCss(read(current, candidate));
        let index = 0;
        while (expected[index] === actual[index] && index < expected.length) index++;
        return { candidate, actual, index };
      }).sort((a, b) => b.index - a.index);
      const closest = candidates[0];
      fail(file, 'stylesheet rules differ beyond generated font faces', closest
        ? `Reference: ${expected.slice(Math.max(0, closest.index - 80), closest.index + 250)}\nCurrent (${closest.candidate}): ${closest.actual.slice(Math.max(0, closest.index - 80), closest.index + 250)}`
        : 'No current CSS files found.');
    }
  }
  if (extension === 'js') {
    for (const file of unmatched) {
      const expected = read(reference, file);
      const closest = after.map(candidate => {
        const actual = read(current, candidate);
        let index = 0;
        while (expected[index] === actual[index] && index < expected.length) index++;
        return { candidate, actual, index };
      }).sort((a, b) => b.index - a.index)[0];
      console.log(`Non-identical JS: ${file}`);
      if (closest) console.log(`Reference: ${expected.slice(Math.max(0, closest.index - 60), closest.index + 180)}\nCurrent (${closest.candidate}): ${closest.actual.slice(Math.max(0, closest.index - 60), closest.index + 180)}`);
    }
  }
}
console.log(`Compared ${pageCount} HTML files and ${assetCount} assets/config files: ${failures} differences.`);
process.exitCode = failures ? 1 : 0;
