---
name: launchproof-web-audit
description: Audit an entire website or web app project for launch readiness, SEO completeness, compliance pages, analytics, robots/sitemap setup, responsive behavior, content gaps, competitor-informed positioning, and production polish. Use when asked to review, improve, QA, prepare, or checklist a site before launch or publication, especially when checking files such as HTML, React/Next/Vite apps, PHP sites, static sites, CMS exports, robots.txt, sitemap.xml, metadata, error pages, and policy pages.
---

# LaunchProof Web Audit

## Core Workflow

Audit the project as a launch-readiness reviewer. Inspect the file tree first, then read the routing, layout, metadata, config, public/static assets, and deployment files relevant to the stack.

If a live URL, preview URL, or competitor URL is provided, use it as context. If no competitor URL is provided, infer 2-3 likely competitors from the product category only when browsing is available; otherwise state that competitor comparison was not verified.

Read `references/audit-catalog.md` when a full criteria list is needed or when producing a detailed report.

## What To Check

Always cover these baseline items:

- Logo and favicon are present, referenced correctly, and match the visible brand.
- Mobile responsiveness works across small, tablet, and desktop layouts.
- SEO metadata exists: title, description, canonical URL, headings, Open Graph/Twitter cards, meaningful alt text, internal links, and indexability.
- Main product/tool page has enough useful explanatory content. If missing, recommend a prompt for a 600-word SEO section about the tool, audience, use cases, benefits, and limitations.
- FAQ section exists and answers real buyer/user/search questions.
- Required trust pages exist and are linked: Privacy Policy, About Us, Terms and Conditions, Contact Us.
- Custom 404 and 500 error pages exist where the stack supports them.
- `robots.txt` exists, does not accidentally block important pages, and references the sitemap.
- `sitemap.xml` exists, contains canonical public URLs, and is reachable from `robots.txt`.
- Google Analytics or equivalent analytics is installed only once, loaded correctly, and respects consent/privacy requirements where applicable.

Also check for missing production basics:

- Accessibility: keyboard paths, labels, contrast, focus states, semantic landmarks, reduced motion.
- Performance: image sizing, lazy loading, script weight, render-blocking assets, caching, font loading.
- Security: exposed secrets, unsafe form handling, missing HTTPS assumptions, insecure dependencies, overly broad CORS, admin routes.
- Forms: validation, spam protection, success/error states, deliverability, and no client-only fake submissions unless intentional.
- Content quality: broken links, placeholder text, inconsistent brand naming, thin pages, outdated claims.
- Deployment hygiene: environment examples, build scripts, redirects, trailing-slash/canonical consistency, no debug logs.

## Output Format

Produce a practical report, not a generic checklist:

1. Overall readiness score from 0-100.
2. Critical blockers that should be fixed before launch.
3. High-impact improvements ordered by business value.
4. Checklist table with columns: Area, Status, Evidence, Suggested Fix.
5. Suggested prompts for missing content, including competitor-informed website creation and the 600-word SEO content prompt when relevant.
6. Files or routes to edit, using exact paths when available.
7. Final launch verdict: `Ready`, `Almost ready`, or `Not ready`.

Use statuses: `Pass`, `Partial`, `Missing`, `Risk`, `Not applicable`, or `Not verified`.

## Suggested Prompts

When the user wants generation guidance, provide short reusable prompts:

- Competitor-informed website prompt: "Create a website for [product/tool] using [competitor URL] as positioning inspiration, but produce original structure, copy, design, and brand expression. Include homepage, features, FAQ, trust pages, responsive layout, SEO metadata, favicon/logo placement, robots.txt, sitemap.xml, analytics placeholder, and custom error pages."
- SEO content prompt: "Write a 600-word SEO section for [tool/product] explaining what it does, who it is for, key benefits, use cases, differentiators, limitations, and common questions. Use clear headings, natural keywords, and non-hype language."

## Rules

Do not mark anything as present unless verified in code, config, static assets, or the live page. If verification requires network access, a browser, build output, or secrets that are unavailable, mark it `Not verified` and explain the exact missing input.

Prefer stack-native fixes: Next.js metadata routes for Next projects, public files for static/Vite apps, framework error routes when available, and existing design/components for UI changes.
