// Renders the React app to static HTML and writes it into dist/index.html, so
// visitors see the full page before any JavaScript has downloaded or run.
import { readFile, rm, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const dist = path.resolve("dist");
const ssrEntry = path.resolve("dist-ssr/entry-server.js");

const { render } = await import(pathToFileURL(ssrEntry).href);
const template = await readFile(path.join(dist, "index.html"), "utf8");
if (!template.includes("<!--app-html-->")) throw new Error("index.html is missing <!--app-html-->");

let html = template.replace("<!--app-html-->", render());

// Put the (small) stylesheet inside the page: one less download before the
// first paint on a slow phone connection.
for (const m of [...html.matchAll(/<link rel="stylesheet" crossorigin href="\.\/(assets\/[^"]+\.css)">/g)]) {
  const css = await readFile(path.join(dist, m[1]), "utf8");
  html = html.replace(m[0], () => `<style>${css}</style>`);
}
await writeFile(path.join(dist, "index.html"), html);
await rm(path.resolve("dist-ssr"), { recursive: true, force: true });
console.log(`prerendered dist/index.html (${Math.round(html.length / 1024)} KB)`);
