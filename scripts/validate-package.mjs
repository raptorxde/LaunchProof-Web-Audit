import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const required = [
  'package.json',
  'bin/launchproof-web-audit.mjs',
  'SKILL.md',
  'AGENTS.md',
  'CLAUDE.md',
  'agents/openai.yaml',
  '.cursor/rules/launchproof-web-audit.mdc',
  'references/audit-catalog.md',
  'README.md',
  'LICENSE'
];

const missing = required.filter((file) => !fs.existsSync(path.join(root, file)));
if (missing.length) {
  throw new Error(`Missing required files: ${missing.join(', ')}`);
}

const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
if (pkg.name !== 'launchproof-web-audit') {
  throw new Error('package.json name must be launchproof-web-audit');
}
if (!pkg.bin || pkg.bin['launchproof-web-audit'] !== './bin/launchproof-web-audit.mjs') {
  throw new Error('package.json bin entry is invalid');
}

const skill = fs.readFileSync(path.join(root, 'SKILL.md'), 'utf8');
if (!skill.startsWith('---\nname: launchproof-web-audit\n')) {
  throw new Error('SKILL.md frontmatter is missing or invalid');
}
for (const phrase of ['robots.txt', 'sitemap.xml', 'Google Analytics', 'Privacy Policy']) {
  if (!skill.includes(phrase)) {
    throw new Error(`SKILL.md missing checklist phrase: ${phrase}`);
  }
}

console.log('LaunchProof Web Audit package validation passed.');