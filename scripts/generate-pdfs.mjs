#!/usr/bin/env node
// Orchestrateur PDF formation TechTown — slides / exercices / references → dist/pdfs/

import { spawnSync } from 'node:child_process';
import { mkdirSync, statSync, readdirSync, copyFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '..');
const outDir = resolve(repoRoot, 'dist/pdfs');

const VALID_TARGETS = ['all', 'slides', 'exercices', 'references'];

function usage() {
  console.log(`Usage: node scripts/generate-pdfs.mjs <target>
Targets: ${VALID_TARGETS.join(' | ')} (default: all)
Output:  dist/pdfs/ (gitignored)`);
}

function run(cmd, args, opts = {}) {
  console.log(`\n→ ${cmd} ${args.join(' ')}`);
  const result = spawnSync(cmd, args, { cwd: repoRoot, stdio: 'inherit', ...opts });
  if (result.status !== 0) {
    throw new Error(`Command failed (exit ${result.status}): ${cmd} ${args.join(' ')}`);
  }
}

function ensureOutDir() {
  mkdirSync(outDir, { recursive: true });
}

function buildSlides() {
  ensureOutDir();
  run('npx', ['slidev', 'export', '--output', 'dist/pdfs/slides.pdf']);
}

function buildExercices() {
  ensureOutDir();
  const shellScript = resolve(repoRoot, 'exercices/export-pdf.sh');
  run('bash', [shellScript]);

  const srcDir = resolve(repoRoot, 'exercices/pdf');
  const dstDir = resolve(outDir, 'exercices');
  mkdirSync(dstDir, { recursive: true });
  const files = readdirSync(srcDir).filter((f) => f.endsWith('.pdf'));
  for (const f of files) copyFileSync(join(srcDir, f), join(dstDir, f));
  console.log(`  ↳ ${files.length} PDF copiés vers dist/pdfs/exercices/`);
}

function buildReferences() {
  ensureOutDir();
  run('node', [
    'scripts/build-pdf-references.mjs',
    'REFERENCES.md',
    'dist/pdfs/REFERENCES.pdf',
    '--title', 'Formation Cursor',
    '--subtitle', 'Références',
  ]);
}

function listOutputs() {
  console.log('\n📦 PDFs produits:');
  const walk = (dir, indent = '  ') => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) {
        console.log(`${indent}${entry.name}/`);
        walk(full, indent + '  ');
      } else if (entry.name.endsWith('.pdf')) {
        const sizeKB = Math.round(statSync(full).size / 1024);
        console.log(`${indent}${entry.name}  (${sizeKB} KB)`);
      }
    }
  };
  walk(outDir);
}

const target = (process.argv[2] || 'all').toLowerCase();

if (target === '--help' || target === '-h') {
  usage();
  process.exit(0);
}

if (!VALID_TARGETS.includes(target)) {
  console.error(`Unknown target: ${target}`);
  usage();
  process.exit(1);
}

try {
  if (target === 'all' || target === 'slides') buildSlides();
  if (target === 'all' || target === 'exercices') buildExercices();
  if (target === 'all' || target === 'references') buildReferences();
  listOutputs();
  console.log('\n✓ Done.');
} catch (err) {
  console.error(`\n✗ ${err.message}`);
  process.exit(1);
}
