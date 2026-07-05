# LaunchProof Audit Catalog

Use this catalog when producing a detailed website launch-readiness audit.

## Discovery

- Identify the stack, router, build tool, package manager, static asset directory, deployment target, and public URL assumptions.
- Locate homepage, shared layout, metadata configuration, route definitions, public assets, environment files, analytics code, robots.txt, sitemap.xml, and error pages.
- If the project has multiple apps or packages, audit the public-facing app first and call out anything not inspected.

## Brand And Visual Basics

- Logo exists in usable formats and is used in header, footer, social metadata, and structured places where relevant.
- Favicon files exist in appropriate sizes and are linked in the document head or framework metadata.
- Primary navigation exposes key pages without relying only on footer links.
- Design is responsive and readable at common mobile widths.
- No text overlaps, clipped buttons, broken cards, placeholder images, or layout jumps.

## SEO And Content

- Every indexable page has a unique title and meta description.
- The homepage has one clear H1 and logical H2/H3 hierarchy.
- Canonical URLs match the intended production domain.
- Open Graph and Twitter metadata include title, description, image, and URL.
- Images use meaningful alt text unless decorative.
- Internal links connect important pages.
- Content is specific enough for search engines and users. Thin tool pages should receive a 600-word explanatory section.
- FAQ content answers actual questions and can be implemented with FAQ schema when appropriate.
- Structured data is present where useful: Organization, WebSite, SoftwareApplication, Product, FAQPage, BreadcrumbList, or Article.

## Legal, Trust, And Support Pages

- Privacy Policy explains data collection, analytics, cookies, contact forms, retention, and third-party processors.
- Terms and Conditions define acceptable use, liability, intellectual property, payments/subscriptions if relevant, and governing assumptions.
- About Us explains the operator, product purpose, and credibility.
- Contact Us includes a working contact method and realistic response expectations.
- Footer links expose legal and contact pages site-wide.

## Crawling And Indexing

- `robots.txt` exists at the site root.
- `robots.txt` references the sitemap with an absolute `Sitemap:` URL.
- `robots.txt` does not block public pages or critical assets accidentally.
- `sitemap.xml` exists at the site root or framework metadata route.
- Sitemap URLs are canonical, absolute, production URLs and exclude private, duplicate, error, or admin pages.
- Important pages are not marked `noindex` by mistake.

## Analytics And Consent

- Google Analytics, GTM, Plausible, PostHog, or equivalent tracking is installed only once.
- Measurement ID is not a placeholder in production.
- Analytics loads after consent where legally required.
- Page view tracking works across client-side route changes if the app is an SPA.
- Privacy Policy mentions analytics and cookies if used.

## Error And Edge Pages

- Custom 404 page exists and helps users recover.
- Custom 500/error boundary exists where the framework supports it.
- Error pages preserve navigation or provide clear recovery links.
- Error pages do not get included in sitemap.

## Accessibility

- Keyboard navigation reaches menus, buttons, forms, dialogs, and primary actions.
- Focus states are visible.
- Form fields have labels and error messages.
- Color contrast is sufficient.
- Landmarks and semantic HTML are used for header, nav, main, footer, forms, and buttons.
- Motion is reduced when users request reduced motion.

## Performance

- Images are compressed, dimensioned, and lazy-loaded when below the fold.
- Largest hero media is optimized for mobile and desktop.
- Fonts use efficient loading and limited families/weights.
- Scripts are deferred or loaded only where needed.
- Heavy third-party scripts are justified.
- Build output has no obvious bundle or asset bloat.

## Security And Reliability

- No secrets, API keys, tokens, private endpoints, or credentials are committed.
- Contact forms validate on the server or trusted backend, not only in the browser.
- Admin or preview routes are protected.
- Dependencies do not show known critical vulnerabilities when audit tooling is available.
- External links using new tabs include safe rel attributes.
- The app assumes HTTPS in production.

## Report Severity

- Critical: blocks launch, breaks indexing, leaks secrets, prevents users from completing core tasks, or creates legal/compliance risk.
- High: likely hurts conversion, SEO, accessibility, analytics, or reliability.
- Medium: quality issue that should be fixed soon after launch.
- Low: polish or optional enhancement.

## Minimum Launch Bar

A site can be called `Ready` only when no Critical items remain, core pages are responsive, legal/trust pages exist, robots and sitemap are connected, analytics status is known, and at least basic SEO metadata is present.
