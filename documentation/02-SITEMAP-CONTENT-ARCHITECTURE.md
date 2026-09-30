# Musabi Sitemap + Content Architecture

The complete page inventory, URL map, content model and user journeys for musabi.com. v1.0 — 2026-09-30.

## 1. Approved sitemap

The approved tree lives in the repository `README.md` and is treated as the source of truth. Any change to it is a change to `lib/site.ts` plus this document.

## 2. URL map

All routes are statically generated from data (68 pages at v1.0, verified by production build).

| URL | Page | Driven by |
| --- | --- | --- |
| `/` | Home | composed from `lib/site.ts` |
| `/about` | About index | `aboutPages` |
| `/about/our-story` … `/about/our-people` (7) | Our Story, Our Belief, Our Vision, Our Mission, Our Values, How We Work, Our People | `aboutPages` |
| `/entities` | Entities hub | `entities` |
| `/entities/{architecture-studio, creative, urban-lab, development, foundation, ventures}` (6) | Entity overview | `entities` |
| `/entities/{entity}/{services, projects, work, research, urban-projects, publications, insights, opportunities, partnerships, programmes, community, impact, get-involved, contact, portfolio}` (21) | Entity subpages, exactly per sitemap | `entities[].pages` |
| `/projects` | Group project index | `projectCategories` + `content/projects.ts` |
| `/projects/{architecture, creative, urban, development, foundation, ventures}` (6) | Category archives | same |
| `/projects/{category}/{slug}` | Project case study | `Project` records |
| `/journal` | Journal index | `journalCategories` + `content/articles.ts` |
| `/journal/{ideas, research, projects, cities, design, sustainability, community}` (7) | Category archives | same |
| `/journal/{category}/{slug}` | Article | `Article` records |
| `/moses-musabi` | Founder index | `mosesPages` |
| `/moses-musabi/{profile, architecture, urban-policy, research, writing, projects, speaking, cv}` (8) | Founder subpages | `mosesPages` |
| `/careers` | Careers | static copy |
| `/contact` | Contact + enquiry form | static + `ContactForm` |
| `/sitemap.xml` | XML sitemap | `app/sitemap.ts` |

Rules: adding a project or article is a data entry — never a hardcoded page. Entity `contact` pages render the shared form pre-routed to that entity. Unknown slugs return 404.

## 3. Navigation model

- **Primary navbar**: About · Entities · Projects · Journal · Moses Musabi · Careers · Contact (Home = lockup). Sticky, current-section highlighted, mobile drawer.
- **Footer**: parent lockup + manifesto line, six entity links, institution links, contact CTA, legal line.
- **Breadcrumbs** on every page below section level.
- **Entity sub-navigation**: sibling-page switcher on all entity subpages; "A Musabi Incorporated entity" endorsement line on overviews (Bible §5.3).
- **Cross-links**: entity archives point into Journal categories and vice versa — one publication engine, no content islands (Bible §14.2).

## 4. Content types

### Project (blueprint §7 schema, `lib/content-model.ts`)
- Basic: slug, name, client, location, country, year, status (concept / in-progress / completed / on-hold), sector, entity, service, projectType, team, collaborators.
- Narrative: overview, context, challenge, approach, concept, design, outcome, impact.
- Technical: site area, floor area, programme, budget (where publishable), role, stage, completion date.
- Media: hero, gallery, drawings, plans, sections, diagrams, renderings, videos, drone, before/after, PDFs.
- Classification enables automatic archives: Architecture → Hospitality → Kenya → Completed.

### Article (blueprint §8 schema)
- Title, subtitle, author, date, category (7 Journal categories), entity, reading time, hero, body, references, related projects/articles, PDF, SEO fields, tags.

### Page copy
- `lib/site.ts` carries every page's kicker, title, lede and sections. Entities additionally carry: name, colour token + hex, role, motif association, status (operational / future), status note, subpages.

## 5. User journeys

1. **Private or institutional client** — Home → Entities → Architecture Studio (or Creative) → Services → entity Contact → enquiry. Trust evidence: Projects case studies, How We Work.
2. **Government / university / development partner** — Home → Urban Lab → Research → Journal (Research, Cities) → Contact. The Lab must read as rigorous and institutional, not promotional (Bible §13.4).
3. **Reader / thought-leadership** — search → Journal article → author/entity links → related Projects. SEO terms per blueprint §18.
4. **Landowner / investor / founder** — Home → Development or Ventures → Opportunities → Contact. Future entities must read as deliberate, not empty (status notes do this).
5. **Jobseeker** — Careers → values and growth → speculative application via Contact (Careers entity).
6. **Press / speaking** — Moses Musabi → Speaking → CV → Contact.

Every path must be completable in three clicks from Home.

## 6. Editorial rules

- Voice per Bible §11: lead with the problem, opportunity or insight; specific claims over inflated adjectives; no "world-class" unless demonstrable; the work establishes authority.
- Case study format: context → challenge → approach → outcome → impact ("what changed because of the work").
- The Journal is the only publication engine; entity Publications/Insights pages are filtered views, never parallel blogs.
- Future entities (Development, Foundation, Ventures) carry honest status notes; no invented portfolios, no fake traction.

## 7. Content status

- 🟢 Drafted: all institutional, entity, founder and section copy (founder review pending).
- 🟡 Empty by design: projects and articles — schema and archive routes live; entries await real work and writing.
- 🔴 Not started: legal pages, photography, CV download, OG/social images, entity email addresses on Contact.
