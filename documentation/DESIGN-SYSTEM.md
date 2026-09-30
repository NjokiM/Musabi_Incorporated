# Musabi Digital Design System

The digital translation of the Musabi Brand Guidelines (v1.0, Foundation Edition). One institution, one coherent system — only the entity identity layer changes.

## Colour

| Token | HEX | Role |
| --- | --- | --- |
| `charcoal` | `#222222` | Primary text, authority |
| `ivory` | `#F8F5F0` | Editorial background |
| `stone` | `#7A7A7A` | Muted metadata |
| `arch-green` | `#2E9B52` | Architecture Studio identity |
| `creative-teal` | `#079A9A` | Creative identity |
| `urban-yellow` | `#F4C20D` | Urban Lab identity |
| `development-red` | `#D83B45` | Development identity |
| `foundation-blue` | `#1769AA` | Foundation identity |
| `ventures-orange` | `#F47A22` | Ventures identity |

Discipline: neutral backgrounds, charcoal typography, controlled entity-colour accents. Entity colour appears only as kicker text, rules/borders, motif fills and links — never as saturated page backgrounds. Working HEX values; lock after vector-master calibration (Brand Bible §7).

## Typography

| Level | Treatment |
| --- | --- |
| Display / H1 | Barlow Bold, tight tracking |
| H2 | Barlow SemiBold |
| H3 | Barlow Medium/SemiBold |
| Body | Barlow Regular |
| Metadata / kickers | Barlow Medium, uppercase, wide tracking |
| Ledes, pull-quotes, manifesto | Cormorant Garamond (`font-editorial`), italic where suitable |

Both faces are self-hosted through `next/font` (no render-blocking requests).

## Motif

`components/Motif.tsx` renders placeholder geometric units — one per entity, combined into the parent composition. **These are stand-ins**: swap in the approved vector masters when the identity artwork is finalised (Brand Bible §6.5). Never rearrange the parent composition.

## Components

- `Navbar` — sticky, parent lockup, primary navigation, mobile menu
- `Footer` — parent lockup, entity index, institution links, contact CTA
- `PageShell` — kicker / title / editorial lede / thin rule, optional entity accent
- `Motif` — parent and entity motif placeholders
- `EntityCard` — motif, status, role, entity accent
- `ProjectCard`, `ArticleCard` — driven by the content model
- `SectionList`, `PageLinks`, `Breadcrumb`, `Quote`, `CtaBand`
- `ContactForm` — entity-routed enquiry form (delivery wiring at launch)

## Content model

- `lib/content-model.ts` — `Project` (blueprint §7: basic, narrative, technical, media, classification, SEO) and `Article` (blueprint §8)
- `content/projects.ts`, `content/articles.ts` — the databases; routes generate from them
- `lib/site.ts` — sitemap structure, entities, page copy

Routes are generated from this data: `/entities/[entity]/[slug]`, `/projects/[category]/[slug]`, `/journal/[category]/[slug]`, `/about/[slug]`, `/moses-musabi/[slug]`. Adding a project or article is a data entry, not a page.

## Graphic language

Architectural grids, generous whitespace, thin rules (`charcoal/10–15`), controlled asymmetry, uppercase used sparingly (Brand Bible §9).
