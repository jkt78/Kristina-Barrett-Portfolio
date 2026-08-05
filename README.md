# Kristina Barrett — Professional Portfolio

A static, single-page professional portfolio for Kristina Barrett, designed for deployment on GitHub Pages at [kristinabarrett.com](https://kristinabarrett.com/).

## Structure

- `index.html` — semantic page content and SEO metadata
- `css/styles.css` — responsive aviation-dataplate visual system
- `js/main.js` — accessible navigation and lightweight conversion events
- `js/contact-config.js` — one-line future Google Form URL configuration
- `assets/Kristina-Barrett-Resume.pdf` — downloadable current résumé
- `CNAME` — GitHub Pages custom domain

There is no build step and no package dependency. Serve the repository root with any static HTTP server to preview it locally.

## Portfolio placeholders

The portfolio cards are explicitly labeled placeholders. Replace them only with verified project photography, CAD views, technical drawings, process documentation, or other non-confidential artifacts. Update each accessible SVG title/description, figure caption, project summary, and tags at the same time.

## Contact

The confirmed contact address is `kristinabarrett@kristinabarrett.com`. Until the Google-owned contact form is ready, the labeled contact workflow validates the fields and opens a prefilled draft in the visitor's email app. The website does not submit or store form data, and the visible email link remains available as a fallback.

### Future Google Form handoff

After the Easy-Mode Job Desk creates the public Google Form responder URL, open `js/contact-config.js` and paste that URL into `googleFormUrl`. Acceptable URLs use `https://docs.google.com/forms/...` or `https://forms.gle/...`. Once configured, the site automatically hides the email-draft fields and displays an **Open contact form** button. No other file needs to change.

## Conversion and quality checklist

- [x] Clear mechanical design / aviation positioning above the fold
- [x] Separate paths for recruiters and technical clients
- [x] Immediate CTAs for role-fit review, résumé request, and project inquiry
- [x] Specific, credential-backed hard skills and cautious systems/software wording
- [x] Case-study placeholders structured for problem, constraints, decisions, artifact, and outcome
- [x] Direct custom-domain email plus a clearly labeled email-draft workflow
- [x] No unverified testimonials, client logos, employers, metrics, or outcomes
- [x] Semantic landmarks, heading hierarchy, keyboard navigation, visible focus, reduced-motion support, form labels, and accessible SVG descriptions
- [x] Responsive layout, minimal deferred JavaScript, no tracking scripts, and no build dependency
- [x] Descriptive metadata, canonical URL, Open Graph, robots directive, and accurate Person JSON-LD
- [x] Privacy-respecting `portfolio:conversion` browser events that a future analytics tool can subscribe to without changing the UI
- [x] Publish the current downloadable résumé with the confirmed custom email
- [ ] Add verified case studies, project media, role details, dates, and outcomes
- [ ] Add factual professional profile links, testimonials, or client references only when approved
- [ ] Add privacy-respecting analytics only after the owner chooses a provider and disclosure approach

## GitHub Pages deployment

In the GitHub repository, open **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/(root)**, then save. Confirm the custom domain is `kristinabarrett.com` and enable **Enforce HTTPS** after GitHub reports the certificate is ready. DNS changes are managed separately at the domain registrar.
