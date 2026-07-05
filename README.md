# LaunchProof Web Audit

LaunchProof Web Audit is a cross-agent skill and npm package for reviewing website projects before launch. It helps Codex, Claude Code, Cursor, and other coding agents inspect a full project and return a practical launch-readiness report.

It checks the essentials most websites miss before publishing: logo, favicon, mobile responsiveness, SEO, FAQ, legal pages, error pages, robots.txt, sitemap.xml, analytics, accessibility, performance, security, forms, content quality, and deployment hygiene.

## Install

Run without installing:

```bash
npx launchproof-web-audit prompt
```

Install globally:

```bash
npm install -g launchproof-web-audit
launchproof-web-audit help
```

Install the agent files into a website project:

```bash
npx launchproof-web-audit install ./my-website
```

Overwrite existing agent files when needed:

```bash
npx launchproof-web-audit install ./my-website --force
```

## CLI

```text
launchproof-web-audit help
launchproof-web-audit version
launchproof-web-audit path
launchproof-web-audit prompt
launchproof-web-audit install [target] [--force]
```

The CLI copies the cross-agent instruction files into a target project. It does not run an automated crawler or replace a coding agent; it gives the agent a reusable audit workflow.

## Works With

- Codex: use `SKILL.md` and `agents/openai.yaml`.
- Claude Code: use `CLAUDE.md`.
- Cursor: use `.cursor/rules/launchproof-web-audit.mdc`.
- Other agents: use `AGENTS.md`.

## Example Prompt

```text
Use LaunchProof Web Audit to analyze this website project and tell me what must be fixed before launch.
```

With competitor context:

```text
Use LaunchProof Web Audit to review this project. Competitor inspiration: https://example.com. Check SEO, trust pages, mobile responsiveness, robots.txt, sitemap.xml, analytics, and missing launch basics.
```

## Output

The agent should return:

1. Overall readiness score from 0-100.
2. Critical blockers before launch.
3. High-impact improvements ordered by business value.
4. Checklist table with evidence and suggested fixes.
5. Suggested prompts for missing content.
6. Exact files or routes to edit when available.
7. Final verdict: `Ready`, `Almost ready`, or `Not ready`.

## Files

- `SKILL.md`: canonical skill instructions.
- `references/audit-catalog.md`: detailed audit criteria.
- `agents/openai.yaml`: Codex/OpenAI metadata.
- `CLAUDE.md`: Claude Code compatibility entry.
- `AGENTS.md`: generic agent instructions.
- `.cursor/rules/launchproof-web-audit.mdc`: Cursor rule.
- `bin/launchproof-web-audit.mjs`: npm CLI.

## Development

```bash
npm run validate
npm run pack:check
```

## License

MIT