import assert from 'node:assert/strict';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { resolve, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { runInNewContext } from 'node:vm';

assert(process.argv.length <= 3, 'Usage: node verify-requirements.mjs [export-directory]');
const root = dirname(fileURLToPath(import.meta.url));
const current = resolve(process.argv[2] || join(root, 'out'));
const origin = 'https://hireclassbuddy.com';
const socials = {
  Facebook: 'https://www.facebook.com/people/Hire-Class-Buddy/61571676454739/',
  Instagram: 'https://www.instagram.com/hireclassbuddy',
  WhatsApp: 'https://wa.me/12292028857',
};
const tokens = ['IJzs_8f0SD_8hTd2qf_FLg2rhPvgN8VL9FmEpq1m308', 'NjsN1R8i6zRwFRZ1nji4enhGyduvbPwOAWKLT7UZ6xk'];
const read = file => {
  assert(existsSync(file), `${file}: missing file; run npm run build before this check and verify the source/postbuild configuration.`);
  return readFileSync(file, 'utf8');
};
const decode = text => text.replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
  .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
  .replace(/&(amp|lt|gt|quot|apos|nbsp);/g, (_, name) => ({ amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' })[name]);
const attributes = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s=<>`]+))/g)]
  .map(([, key, double, single, bare]) => [key.toLowerCase(), decode(double ?? single ?? bare)]));
const walk = (directory, prefix = '') => readdirSync(join(directory, prefix), { withFileTypes: true })
  .flatMap(entry => entry.isDirectory() ? walk(directory, `${prefix}${entry.name}/`) : [`${prefix}${entry.name}`]);
const sitemap = file => {
  const xml = read(file).replace(/^\uFEFF/, '').replace(/<\?xml\b[^?]*\?>/g, '').replace(/<!--[\s\S]*?-->/g, '').trim();
  const wrapper = xml.match(/^<urlset\b([^>]*)>([\s\S]*)<\/urlset>$/);
  assert(wrapper, `${file}: expected a sitemap urlset, not a sitemap index.`);
  assert.equal(attributes(wrapper[1]).xmlns, 'http://www.sitemaps.org/schemas/sitemap/0.9', `${file}: invalid sitemap namespace.`);
  const records = [];
  const remainder = wrapper[2].replace(/<url\s*>([\s\S]*?)<\/url>/g, (_, body) => {
    const fields = {};
    const extra = body.replace(/<(loc|lastmod|changefreq|priority)\s*>([^<]*)<\/\1>/g, (_, key, value) => {
      assert(!Object.hasOwn(fields, key), `${file}: duplicate ${key} in a sitemap URL.`);
      fields[key] = decode(value).trim();
      if (key === 'priority') {
        assert(fields[key] !== '' && Number.isFinite(Number(fields[key])), `${file}: invalid sitemap priority.`);
        fields[key] = Number(fields[key]);
      }
      return '';
    });
    assert.equal(extra.trim(), '', `${file}: unexpected or malformed sitemap URL fields.`);
    assert(fields.loc, `${file}: sitemap URL is missing loc.`);
    records.push(Object.fromEntries(Object.entries(fields).sort(([a], [b]) => a.localeCompare(b))));
    return '';
  });
  assert.equal(remainder.trim(), '', `${file}: unexpected content outside sitemap URL entries.`);
  assert.equal(records.length, 28, `${file}: expected exactly 28 sitemap URLs.`);
  assert.equal(new Set(records.map(record => record.loc)).size, 28, `${file}: duplicate sitemap URLs.`);
  return records.sort((a, b) => a.loc.localeCompare(b.loc));
};
const expected = sitemap(join(root, 'public', 'sitemap.xml'));
assert(!existsSync(join(root, 'sitemap.xml')), 'Keep only public/sitemap.xml as the source sitemap; remove the duplicate root sitemap.');
assert.deepEqual(sitemap(join(current, 'sitemap.xml')), expected, 'Exported sitemap must match public/sitemap.xml URLs and metadata, including lastmod; formatting and entry order are ignored.');
for (const directory of [join(root, 'public'), current]) {
  const robotsFile = join(directory, 'robots.txt');
  const advertised = [...read(robotsFile).matchAll(/^\s*Sitemap\s*:\s*(\S+)\s*(?:#.*)?$/gim)].map(([, url]) => url);
  assert(advertised.includes(`${origin}/sitemap.xml`), `${robotsFile}: must advertise Sitemap: ${origin}/sitemap.xml.`);
}
assert(existsSync(current), `${current}: export missing; run npm run build first.`);
const files = new Set(walk(current));
const organizations = value => {
  if (!value || typeof value !== 'object') return [];
  if (Array.isArray(value)) return value.flatMap(organizations);
  const types = Array.isArray(value['@type']) ? value['@type'] : [value['@type']];
  return [...(types.includes('Organization') ? [value] : []), ...Object.values(value).flatMap(organizations)];
};
const anchors = html => [...html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)]
  .map(([tag, attrs, body]) => ({ tag, attrs: attributes(attrs), body }));
let checked = 0;
const failures = [];
for (const { loc } of expected) {
  let file = loc;
  try {
    const url = new URL(loc);
    assert.equal(url.origin, origin, `${loc}: sitemap URL must use ${origin}.`);
    assert(!url.search && !url.hash && !url.username && !url.password, `${loc}: sitemap URL must not contain credentials, query, or fragment.`);
    assert(url.pathname.endsWith('/'), `${loc}: expected a trailing-slash page URL.`);
    const pathname = decodeURIComponent(url.pathname);
    assert(!pathname.includes('\\') && !pathname.split('/').some(part => part === '.' || part === '..'), `${loc}: unsafe export path.`);
    file = `${pathname.slice(1)}index.html`;
    assert(files.has(file), `${file}: missing exact case-sensitive export for ${loc}; correct the source route casing and rebuild.`);
    const html = read(join(current, file));
    const clean = html.replace(/<!--[\s\S]*?-->/g, '').replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, '');
    const metas = [...clean.matchAll(/<meta\b[^>]*>/gi)].map(([tag]) => attributes(tag));
    for (const token of tokens) {
      assert(metas.some(meta => meta.name === 'google-site-verification' && meta.content === token), `${file}: missing Google verification meta ${token}; preserve both tokens in app/layout.tsx.`);
    }
    const scripts = [...html.replace(/<!--[\s\S]*?-->/g, '').matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
    const orgs = scripts.filter(([, attrs]) => attributes(attrs).type === 'application/ld+json').flatMap(([, , body]) => {
      let value;
      try {
        value = JSON.parse(body);
      } catch (error) {
        assert.fail(`${file}: invalid application/ld+json: ${error.message}`);
      }
      return organizations(value);
    });
    assert.equal(orgs.length, 1, `${file}: expected exactly one Organization JSON-LD entity, found ${orgs.length}.`);
    for (const [key, value] of Object.entries({ '@context': 'https://schema.org', name: 'Hire Class Buddy', alternateName: 'Hire Class Buddy', url: origin + '/', logo: `${origin}/logo1.png` })) {
      assert.equal(orgs[0][key], value, `${file}: Organization.${key} must be ${value}.`);
    }
    assert.deepEqual(orgs[0].contactPoint, {
      '@type': 'ContactPoint',
      telephone: '+1 229 202 8857',
      contactType: 'customer service',
      areaServed: 'US',
      availableLanguage: 'en',
    }, `${file}: Organization.contactPoint must match the supplied contact details.`);
    assert(files.has('logo1.png'), `${file}: Organization logo is missing from the export.`);
    assert(Array.isArray(orgs[0].sameAs), `${file}: Organization.sameAs must be an array.`);
    for (const label of ['Facebook', 'Instagram']) {
      assert(orgs[0].sameAs.includes(socials[label]), `${file}: Organization.sameAs must include ${socials[label]}.`);
    }
    const footers = [...clean.matchAll(/<footer\b[^>]*>([\s\S]*?)<\/footer>/gi)]
      .filter(([tag]) => /footerWrapper/.test(attributes(tag.slice(0, tag.indexOf('>'))).class || ''));
    assert.equal(footers.length, 1, `${file}: expected exactly one shared site footer.`);
    const footer = footers[0][1];
    const boxes = [];
    const divs = [];
    for (const match of footer.matchAll(/<\/?div\b[^>]*>/gi)) {
      if (/^<div\b/i.test(match[0])) {
        divs.push({ start: match.index + match[0].length, social: /socialBox/.test(attributes(match[0]).class || '') });
      } else {
        const opening = divs.pop();
        if (opening?.social) boxes.push(footer.slice(opening.start, match.index));
      }
    }
    const socialAnchors = anchors(footer).filter(({ attrs, body }) => Object.hasOwn(socials, attrs['aria-label'] || '')
      || /(?:facebook\.com|instagram\.com|wa\.me|whatsapp\.com|twitter\.com|(?:\/\/)x\.com)/i.test(attrs.href || '')
      || /(?:Facebook|Instagram|WhatsApp|Twitter|X)Icon/.test(body));
    assert.equal(socialAnchors.length, 3, `${file}: footer must contain exactly three social anchors (Facebook, Instagram, WhatsApp).`);
    for (const body of boxes) {
      assert.equal(anchors(body).length, 3, `${file}: footer socialBox must contain exactly three anchors.`);
    }
    for (const [label, href] of Object.entries(socials)) {
      const matches = socialAnchors.filter(({ attrs }) => attrs['aria-label'] === label);
      assert.equal(matches.length, 1, `${file}: footer needs exactly one social anchor with aria-label="${label}".`);
      assert.equal(matches[0].attrs.href, href, `${file}: footer ${label} href must be ${href}.`);
      assert.equal(matches[0].attrs.target, '_blank', `${file}: footer ${label} target must be _blank.`);
      assert.deepEqual([...new Set((matches[0].attrs.rel || '').split(/\s+/).filter(Boolean))].sort(), ['nofollow', 'noopener', 'noreferrer'], `${file}: footer ${label} rel must contain nofollow noopener noreferrer.`);
    }
    assert(!/(?:TwitterIcon|XIcon|fa-(?:x-twitter|twitter)|(?:aria-label|title)\s*=\s*["'](?:X|Twitter)["']|(?:https?:\/\/)(?:www\.)?(?:twitter|x)\.com\b)/i.test(footer), `${file}: remove the X/Twitter footer social icon/link.`);
    const outsideFooter = clean.replace(/<footer\b[^>]*>[\s\S]*?<\/footer>/gi, '');
    const floating = anchors(outsideFooter).filter(({ attrs }) => attrs['aria-label'] === 'Chat on WhatsApp');
    assert.equal(floating.length, 1, `${file}: floating WhatsApp anchor must have aria-label="Chat on WhatsApp".`);
    assert.equal(floating[0].attrs.href, socials.WhatsApp, `${file}: floating WhatsApp href must be ${socials.WhatsApp}.`);
    const scriptText = scripts.map(([tag]) => tag).join('\n').replace(/\\u([\da-f]{4})|\\x([\da-f]{2})/gi, (_, unicode, hex) => String.fromCharCode(parseInt(unicode || hex, 16)));
    for (const id of ['G-MPEBH39Z0T', 'yrc8p2vntu']) {
      assert(scriptText.includes(id), `${file}: missing tracking ID ${id} in script HTML, including Next Script serialized payloads.`);
    }
    checked++;
  } catch (error) {
    failures.push(`${file}: ${error.message}`);
  }
}
console.log(`Requirements: public sitemap matches export, robots files valid; ${checked}/28 pages passed (verification, Organization, social links, WhatsApp, tracking).`);
assert.equal(failures.length, 0, `Export requirements failed:\n${failures.join('\n')}\nFix source files and run npm run build before retrying.`);
const layout = read(join(root, 'app', 'layout.tsx'));
const inserted = [];
const context = {
  document: {
    createElement: () => ({ setAttribute() {} }),
    getElementsByTagName: () => [{ parentNode: { insertBefore: element => inserted.push(element) } }],
  },
};
context.window = context;
for (const id of ['google-analytics', 'microsoft-clarity', 'tawk-to']) {
  const script = layout.match(new RegExp('<Script id="' + id + '"[^>]*>\\s*\\{`([\\s\\S]*?)`\\}\\s*</Script>'));
  assert(script, `${id}: inline initialization script is missing.`);
  runInNewContext(script[1], context, { timeout: 1000 });
}
assert.equal(context.dataLayer.length, 2, 'GA4 must queue initialization and one config call.');
assert.equal(context.dataLayer[0][0], 'js', 'GA4 initialization must precede config.');
assert.equal(context.dataLayer[1][0], 'config', 'GA4 must queue a config call.');
assert.equal(context.dataLayer[1][1], 'G-MPEBH39Z0T', 'GA4 config must use the supplied measurement ID.');
assert.equal(typeof context.clarity, 'function', 'Clarity must initialize its command queue.');
assert(inserted.some(script => script.async && script.src === 'https://www.clarity.ms/tag/yrc8p2vntu'), 'Clarity must asynchronously load the supplied project.');
assert(inserted.some(script => script.async && script.src === 'https://embed.tawk.to/69dd78add113861c2e2d76dc/1jm4hupmi'), 'Tawk must preserve the existing widget.');
for (const device of ['desktop', 'mobile']) {
  const position = context.Tawk_API.customStyle.visibility[device];
  assert.equal(position.position, 'br', `Tawk ${device} must stay at bottom right.`);
  assert.equal(position.xOffset, 20, `Tawk ${device} must align with WhatsApp.`);
  assert(position.yOffset >= 110, `Tawk ${device} must be above the WhatsApp button.`);
}
assert(layout.includes("bottom: 'calc(20px + env(safe-area-inset-bottom, 0px))'"), 'WhatsApp must be near the bottom with safe-area spacing.');
console.log('Static export and script bootstrap checks passed; browser rendering and third-party delivery are not tested.');
