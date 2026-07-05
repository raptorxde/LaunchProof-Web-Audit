#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));

const filesToInstall = [
  'SKILL.md',
  'AGENTS.md',
  'CLAUDE.md',
  'agents/openai.yaml',
  '.cursor/rules/launchproof-web-audit.mdc',
  'references/audit-catalog.md'
];

function usage() {
  console.log(`LaunchProof Web Audit v${pkg.version}

Usage:
  launchproof-web-audit help
  launchproof-web-audit version
  launchproof-web-audit path
  launchproof-web-audit prompt
  launchproof-web-audit install [target] [--force]

Commands:
  help       Show this help message.
  version    Print the package version.
  path       Print the installed package path.
  prompt     Print a starter prompt for agents.
  install    Copy agent instruction files into a target project. Defaults to current directory.

Examples:
  npx launchproof-web-audit prompt
  npx launchproof-web-audit install .
  launchproof-web-audit install ./my-site --force
`);
}

function copyFileRelative(relativePath, targetRoot, force) {
  const source = path.join(root, relativePath);
  const target = path.join(targetRoot, relativePath);
  if (!fs.existsSync(source)) {
    throw new Error(`Package file missing: ${relativePath}`);
  }
  if (fs.existsSync(target) && !force) {
    return { relativePath, status: 'skipped' };
  }
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
  return { relativePath, status: fs.existsSync(target) ? 'written' : 'failed' };
}

function install(args) {
  const force = args.includes('--force');
  const targetArg = args.find((arg) => arg !== '--force') || '.';
  const targetRoot = path.resolve(process.cwd(), targetArg);
  fs.mkdirSync(targetRoot, { recursive: true });

  const results = filesToInstall.map((file) => copyFileRelative(file, targetRoot, force));
  console.log(`Installed LaunchProof Web Audit agent files into ${targetRoot}`);
  for (const result of results) {
    console.log(`- ${result.status}: ${result.relativePath}`);
  }
  if (results.some((result) => result.status === 'skipped')) {
    console.log('\nSome files already existed and were skipped. Re-run with --force to overwrite them.');
  }
}

function prompt() {
  console.log('Use LaunchProof Web Audit to analyze this website project and produce a prioritized launch-readiness checklist. Check logo, favicon, mobile responsiveness, SEO, FAQ, privacy policy, about page, terms, contact page, 404/500 pages, robots.txt, sitemap.xml, analytics, accessibility, performance, security, forms, content quality, and deployment hygiene.');
}

const [command = 'help', ...args] = process.argv.slice(2);

try {
  switch (command) {
    case 'help':
    case '--help':
    case '-h':
      usage();
      break;
    case 'version':
    case '--version':
    case '-v':
      console.log(pkg.version);
      break;
    case 'path':
      console.log(root);
      break;
    case 'prompt':
      prompt();
      break;
    case 'install':
      install(args);
      break;
    default:
      console.error(`Unknown command: ${command}\n`);
      usage();
      process.exitCode = 1;
  }
} catch (error) {
  console.error(`launchproof-web-audit: ${error.message}`);
  process.exitCode = 1;
}