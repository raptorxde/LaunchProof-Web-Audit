# Usage

Copy or install this repository where your agent can read project instructions.

## npm

Run the starter prompt:

```bash
npx launchproof-web-audit prompt
```

Copy agent instruction files into a project:

```bash
npx launchproof-web-audit install ./my-website
```

Use `--force` to overwrite existing files.

## Codex

Use the folder as a skill. The canonical entry is `SKILL.md`, with UI metadata in `agents/openai.yaml`.

## Claude Code

Keep `CLAUDE.md` in the repository root. Ask Claude Code to use LaunchProof Web Audit when reviewing a website project.

## Cursor

Keep `.cursor/rules/launchproof-web-audit.mdc` in the repository. Trigger the rule when asking Cursor to audit a website before launch.

## Generic Agents

Use `AGENTS.md` as the compatibility entry. It points agents to the canonical workflow and detailed audit catalog.