#!/usr/bin/env node
// Build client-grade PDF from a Markdown source file.
// Usage: node scripts/build-pdf-references.mjs <input.md> <output.pdf> [--title "..."] [--subtitle "..."]
// Uses playwright-chromium (already in node_modules) + marked.
// PDF rules: printBackground=true, preferCSSPageSize=true, headers/footers embedded in HTML.

import { readFile, mkdir } from 'node:fs/promises';
import { dirname, resolve, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-chromium';
import { marked } from 'marked';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '..');

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: node build-pdf-references.mjs <input.md> <output.pdf> [--title "..."] [--subtitle "..."]');
  process.exit(1);
}

const [inputArg, outputArg, ...rest] = args;
const inputPath = resolve(repoRoot, inputArg);
const outputPath = resolve(repoRoot, outputArg);

function flag(name, fallback) {
  const i = rest.indexOf(`--${name}`);
  return i >= 0 ? rest[i + 1] : fallback;
}

const title = flag('title', 'Formation Cursor');
const subtitle = flag('subtitle', 'Coder avec l\'IA et Cursor');
const today = new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });

const markdown = await readFile(inputPath, 'utf8');
const bodyHtml = marked.parse(markdown, { gfm: true, breaks: false });

const css = `
  @page {
    size: A4;
    margin: 22mm 20mm 20mm 20mm;
    @bottom-left {
      content: "TechTown · Formation Cursor";
      font-family: 'Poppins', sans-serif;
      font-size: 8pt;
      color: #1c63ed;
      font-weight: 600;
      padding-top: 4mm;
      border-top: 1px solid #e5e7eb;
      vertical-align: top;
    }
    @bottom-right {
      content: counter(page) " / " counter(pages);
      font-family: 'Poppins', sans-serif;
      font-size: 8pt;
      color: #6b7280;
      padding-top: 4mm;
      border-top: 1px solid #e5e7eb;
      vertical-align: top;
    }
  }
  @page :first {
    margin: 0;
    @bottom-left { content: none; }
    @bottom-right { content: none; }
  }
  * { -webkit-print-color-adjust: exact; print-color-adjust: exact; box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-size: 10.5pt;
    line-height: 1.55;
    color: #1f2937;
  }
  .cover {
    page-break-after: always;
    height: 297mm;
    width: 210mm;
    display: flex; flex-direction: column; justify-content: space-between;
    background: linear-gradient(135deg, #1c63ed 0%, #1557d6 50%, #3b7eff 100%);
    color: #ffffff !important;
    padding: 30mm 20mm;
  }
  .cover .brand { font-size: 11pt; letter-spacing: 2px; text-transform: uppercase; opacity: 0.9; color: #ffffff; }
  .cover h1 {
    color: #ffffff !important;
    font-size: 42pt;
    margin: 0 0 8mm 0;
    font-weight: 700;
    line-height: 1.1;
    border-bottom: none;
    padding-bottom: 0;
  }
  .cover .subtitle { font-size: 18pt; opacity: 0.95; margin-bottom: 14mm; color: #ffffff; font-weight: 500; }
  .cover .meta { font-size: 11pt; opacity: 0.9; color: #ffffff; }
  .cover .meta strong { color: #ffffff; }

  h1 {
    color: #1c63ed;
    font-size: 22pt;
    font-weight: 700;
    margin: 0 0 6mm 0;
    padding-bottom: 3mm;
    border-bottom: 2px solid #1c63ed;
  }
  h2 {
    color: #1f2937;
    font-size: 14pt;
    font-weight: 600;
    margin: 8mm 0 3mm 0;
    padding-left: 3mm;
    border-left: 3px solid #1c63ed;
  }
  h3 {
    color: #1f2937;
    font-size: 11.5pt;
    font-weight: 600;
    margin: 5mm 0 2mm 0;
  }
  p { margin: 0 0 3mm 0; }
  ul, ol { padding-left: 6mm; margin: 0 0 4mm 0; }
  li { margin: 0 0 1.5mm 0; }
  li::marker { color: #1c63ed; }
  a { color: #1c63ed; text-decoration: none; border-bottom: 1px dotted #1c63ed; }
  strong { color: #1c63ed; font-weight: 600; }
  code {
    background: #f3f4f6;
    border: 1px solid #e5e7eb;
    border-radius: 3px;
    padding: 0.5mm 1.5mm;
    font-family: 'SF Mono', Menlo, Consolas, monospace;
    font-size: 9.5pt;
    color: #111827;
  }
  pre {
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-left: 3px solid #1c63ed;
    border-radius: 4px;
    padding: 3mm 4mm;
    overflow-x: auto;
    font-size: 9pt;
  }
  pre code { background: transparent; border: 0; padding: 0; color: #1f2937; }

`;

const html = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8" />
<title>${title} — ${subtitle}</title>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>${css}</style>
</head>
<body>
  <section class="cover">
    <div class="brand">TechTown · Formation professionnelle</div>
    <div>
      <h1>${title}</h1>
      <div class="subtitle">${subtitle}</div>
      <div class="meta">
        Document de référence — <strong>${basename(inputPath)}</strong><br/>
        Édité le ${today} · Formateurs : Nicolas Bouron &amp; Benjamin Bourgeois
      </div>
    </div>
    <div class="meta">techtown.fr</div>
  </section>
  <main>
    ${bodyHtml}
  </main>
</body>
</html>`;

await mkdir(dirname(outputPath), { recursive: true });

const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.emulateMedia({ media: 'print' });
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: true,
  });
  console.log(`✓ PDF generated: ${outputPath}`);
} finally {
  await browser.close();
}
