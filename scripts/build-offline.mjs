// Builds dist/preview-offline.html: the page with its script, styles and photos
// packed into one file, so it can be opened or emailed anywhere. It is bigger
// and slower than the live site, so it is for previews only.
// Runs before prerender.mjs, while dist/index.html is still the empty template.
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const dist = path.resolve("dist");
const read = (rel) => readFile(path.join(dist, rel));
let html = (await read("index.html")).toString();

// Inline the stylesheet(s).
for (const m of [...html.matchAll(/<link rel="stylesheet" crossorigin href="\.\/(assets\/[^"]+\.css)">/g)]) {
  const css = (await read(m[1])).toString();
  html = html.replace(m[0], () => `<style>${css}</style>`);
}

// Inline the app script.
for (const m of [...html.matchAll(/<script type="module" crossorigin src="\.\/(assets\/[^"]+\.js)"><\/script>/g)]) {
  const js = (await read(m[1])).toString().replace(/<\/script/gi, "<\\/script");
  html = html.replace(m[0], () => `<script type="module">${js}</script>`);
}

// Image preloads would point at files that are not there.
html = html.replace(/\s*<link rel="preload" as="image"[^>]*>/g, "");

// Swap every photo reference for the embedded image.
const names = new Set([...html.matchAll(/images\/([a-z0-9-]+)\.webp/g)].map((m) => m[1]));
for (const name of names) {
  const uri = `data:image/webp;base64,${(await read(`images/${name}.webp`)).toString("base64")}`;
  html = html.split(`images/${name}.webp`).join(uri);
}

if (/assets\/|images\//.test(html)) throw new Error("preview-offline.html still references external files");

await writeFile(path.join(dist, "preview-offline.html"), html);
console.log(`built dist/preview-offline.html (${Math.round(html.length / 1024)} KB, ${names.size} photos embedded)`);
