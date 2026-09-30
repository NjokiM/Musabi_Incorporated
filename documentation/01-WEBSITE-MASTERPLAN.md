# Musabi Website Masterplan

The strategic and technical blueprint for the Musabi digital institution. Companion documents: `02-SITEMAP-CONTENT-ARCHITECTURE.md`, `03-INFRASTRUCTURE-COST-PLAN.md`, `DESIGN-SYSTEM.md`.

Status: v1.0 — 2026-09-30. Built from the Website Master Checklist, the Brand Bible v1.0 and the Founding Charter v1.0.

## A. Brand

- Controlling reference: Brand Bible v1.0 (Foundation Edition). The website is a brand application, not a brand source.
- Brand architecture: one master brand, six business units. Business unit ≠ legal subsidiary; legal, tax and professional requirements take precedence (Bible §3.3).
- Visual system: translated digitally in `documentation/DESIGN-SYSTEM.md` — Barlow + Cormorant Garamond, entity colour tokens, motif system, restrained editorial layouts.
- Open item: replace placeholder geometric motifs with the approved vector masters when identity artwork is finalised (Bible §6.5). Never rearrange the parent composition.

## B. Strategy

- Website purpose: Musabi's headquarters — explain the institution, demonstrate work, publish knowledge, generate qualified enquiries. Every page answers one question: "Why should I trust Musabi?"
- Target audiences: private and institutional clients; governments, universities and development partners; investors and landowners; prospective team members; press and speaking organisers; the urban policy community.
- Business objectives: qualified enquiries per entity; credibility for the founder's policy and speaking profile; a publishing platform that builds authority in African urbanism.
- Positioning: one institution, six capabilities — "the parts make the whole."

## C. Information architecture

Full detail in `02-SITEMAP-CONTENT-ARCHITECTURE.md`. Summary:

- Seven primary sections: About, Entities, Projects, Journal, Moses Musabi, Careers, Contact (+ Home).
- Entities are first-class: each of the six has an overview and dedicated subpages per the approved sitemap.
- Group-level Projects index feeds all entity archives; the Journal is the single publication engine across categories.
- The founder's page is deliberately prominent (not buried in About), per the Digital Vision.

## D. Content

- Source of truth: `lib/site.ts` (structure and page copy), `content/projects.ts` and `content/articles.ts` (databases).
- Copy is drafted from the Charter and Brand Bible and requires founder review before launch, especially: entity status wording for Development, Foundation and Ventures (future entities — Bible §3.4), and all professional-regulation wording for Architecture Studio (Bible: Next Stage — Professional).
- Legal pages required before launch: Terms & Conditions, Privacy Policy, disclaimer, IP notice (blueprint §1).
- Photography and media library: not started. Follow the media structure in the Master Checklist (§9); nothing ships without consent/release records.

## E. UX

- Implemented: responsive layout, sticky navigation with mobile menu, breadcrumbs, entity sub-navigation, consistent page shell (kicker / title / editorial lede / thin rule).
- Pending: wireframes for the two richest templates (project case study, article) once real content exists; device and slow-network testing per blueprint §17 (Kenyan mobile context); accessibility audit per §25.

## F. UI

- Design system v1 documented in `DESIGN-SYSTEM.md`; component library in `components/`.
- Component additions anticipated: ImageGallery, Video embed, Download button, Newsletter signup, Statistics, Timeline — build them when content demands them, not before.

## G. Technology

- Frontend: Next.js 15 (App Router, static generation) + TypeScript.
- Styling: Tailwind CSS v4 with brand tokens in `@theme`.
- Content: file-based content model (blueprint §7/§8 schemas) — routes generate from data. CMS deliberately deferred: introduce a headless CMS (Sanity, Payload or Strapi — see cost plan) when non-developers must publish regularly.
- Hosting: Vercel (see cost plan for tier reasoning). Domain: musabi.com via Cloudflare Registrar, DNS on Cloudflare.
- Forms: client-side now; wire to an inbox/CRM endpoint before launch (blueprint §21) with spam protection.
- Analytics: Google Analytics 4 + Search Console from launch.

## H. Development

- Git: every meaningful change committed with conventional messages (`feat:`, `fix:`). Rollback is the safety net for agent-driven development.
- Environments: DEV (local) → STAGING (Vercel preview deployments — automatic per branch) → PRODUCTION (main branch, musabi.com). Never let an AI agent experiment directly on production.
- Verification: `npm run build` must pass before merge. All 68 pages are statically generated; type errors fail the build.

## I. Security

From blueprint §19, in launch order: HTTPS (Vercel/Cloudflare, automatic), 2FA on registrar/hosting/email/GitHub, password manager, domain lock + auto-renew, least-privilege access, `.env` secrets never committed, dependency updates quarterly, form spam protection, backups (§27: Git + CMS export + cloud storage, 3-2-1, restore tested).

## J. Operations

- Monthly: uptime, forms, email, broken links, analytics review, spam, domain status.
- Quarterly: dependency updates, security review, performance audit (Lighthouse), SEO audit, content audit, backup restore test.
- Annually: domain renewal, hosting/email review, trademark and legal document review, redesign assessment.
- Ownership: one named owner per asset in the Digital Asset Register (cost plan §6).

## K. Growth

- SEO foundation shipped: XML sitemap, metadata templates, semantic HTML. Next: Search Console, Organization + Person + Article schema, alt text discipline, internal linking between entities ↔ journal ↔ projects, location metadata for Kenya/Nakuru terms (blueprint §18).
- Journal cadence: publish useful thinking, not constant advertising. Categories already mapped.
- Newsletter: add when there is an audience worth keeping (post-launch, with content rhythm).
- CRM: start with Website → Email; move to Website → CRM → Pipeline when enquiry volume justifies it. Do not pay for a heavy CRM on day one.

## Current status scoreboard

| Area | Item | Status |
| --- | --- | --- |
| Foundation | Brand architecture, guidelines, philosophy | 🟢 Ready |
| Foundation | Legal entity, trademark | 🟡 In progress |
| Content | Core narrative + entity concepts | 🟢 Drafted (founder review pending) |
| Content | Project database | 🟡 Schema built, awaiting entries |
| Content | Journal system | 🟡 Schema built, awaiting articles |
| Content | Photography/media library | 🔴 Not started |
| Technology | Repository + sitemap implementation | 🟢 Built (68 static pages, build verified) |
| Technology | Design system v1 | 🟢 Translated from Brand Bible |
| Technology | Domain, hosting, email, analytics | 🔴 Not yet secured |
| Experience | Responsive + performance | 🟢 Static build, ~106 kB first load |
| Experience | Accessibility | 🟡 Semantic base; audit pending |
| Experience | Real-device testing | 🔴 Pending |
