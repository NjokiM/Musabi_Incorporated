# Musabi_Incorporated

The website of Musabi Incorporated — a multidisciplinary African design, research, development and innovation institution. One institution, six capabilities: Architecture Studio, Creative, Urban Lab, Development, Foundation and Ventures.

> Building a Resilient Future — *the parts make the whole.*

musabi-incorporated/
│
├── README.md                          # Project documentation (this file)
├── index.html / /home                 # HOME
│
├── /about                             # ABOUT
│   ├── /our-story                     # Our Story
│   ├── /our-belief                    # Our Belief
│   ├── /our-vision                    # Our Vision
│   ├── /our-mission                   # Our Mission
│   ├── /our-values                    # Our Values
│   ├── /how-we-work                   # How We Work
│   └── /our-people                    # Our People
│
├── /entities                          # ENTITIES (Core Sub-Brands)
│   │
│   ├── /architecture-studio           # Architecture Studio
│   │   ├── /overview                  # Overview
│   │   ├── /services                  # Services
│   │   ├── /projects                  # Projects
│   │   ├── /research                  # Research
│   │   └── /contact                   # Contact
│   │
│   ├── /creative                      # Creative
│   │   ├── /overview                  # Overview
│   │   ├── /services                  # Services
│   │   ├── /work                      # Work
│   │   └── /contact                   # Contact
│   │
│   ├── /urban-lab                     # Urban Lab
│   │   ├── /overview                  # Overview
│   │   ├── /research                  # Research
│   │   ├── /urban-projects            # Urban Projects
│   │   ├── /publications              # Publications
│   │   └── /insights                  # Insights
│   │
│   ├── /development                   # Development
│   │   ├── /overview                  # Overview
│   │   ├── /projects                  # Projects
│   │   ├── /opportunities             # Opportunities
│   │   └── /partnerships              # Partnerships
│   │
│   ├── /foundation                    # Foundation
│   │   ├── /overview                  # Overview
│   │   ├── /programmes                # Programmes
│   │   ├── /community                 # Community
│   │   ├── /impact                    # Impact
│   │   └── /get-involved              # Get Involved
│   │
│   └── /ventures                      # Ventures
│       ├── /overview                  # Overview
│       ├── /portfolio                 # Portfolio
│       ├── /opportunities             # Opportunities
│       └── /partnerships              # Partnerships
│
├── /projects                          # PROJECTS (Master Portfolio)
│   ├── /architecture                  # Architecture Portfolio
│   ├── /creative                      # Creative Portfolio
│   ├── /urban                         # Urban Projects
│   ├── /development                   # Development Projects
│   ├── /foundation                    # Foundation Initiatives
│   └── /ventures                      # Venture Portfolio
│
├── /journal                           # JOURNAL (Editorial & Insights)
│   ├── /ideas                         # Ideas
│   ├── /research                      # Research
│   ├── /projects                      # Projects
│   ├── /cities                        # Cities
│   ├── /design                        # Design
│   ├── /sustainability                # Sustainability
│   └── /community                     # Community
│
├── /moses-musabi                      # MOSES MUSABI (Personal Brand/Thought Leadership)
│   ├── /profile                       # Profile
│   ├── /architecture                  # Architecture Focus
│   ├── /urban-policy                  # Urban Policy
│   ├── /research                      # Research
│   ├── /writing                       # Writing
│   ├── /projects                      # Projects
│   ├── /speaking                      # Speaking Engagements
│   └── /cv                            # Curriculum Vitae
│
├── /careers                           # CAREERS
│
└── /contact                           # CONTACT


## Technology

- **Next.js 15** (App Router, fully static) + **TypeScript**
- **Tailwind CSS v4** with brand tokens (Brand Bible v1.0 colour system)
- Barlow + Cormorant Garamond, self-hosted via `next/font`
- No CMS yet: content lives in `lib/site.ts` (pages) and `content/` (projects, articles) — routes generate from data

## Getting started

```bash
npm install --include=dev
npm run dev      # local development
npm run build    # production build (must pass before merge)
npm start        # serve the production build
```

## Repository structure

```
app/           # routes (App Router) + sitemap.ts, layout, styles
components/    # shared component library (Navbar, Motif, PageShell, cards…)
content/       # project and article databases (content model in lib/content-model.ts)
lib/           # site structure + page copy (lib/site.ts), content schemas
documentation/ # masterplan, sitemap + content architecture, cost plan, design system
public/        # static assets
```

## Documentation

- `documentation/01-WEBSITE-MASTERPLAN.md` — strategy, technology, security, operations, growth
- `documentation/02-SITEMAP-CONTENT-ARCHITECTURE.md` — URL map, content model, user journeys
- `documentation/03-INFRASTRUCTURE-COST-PLAN.md` — domains, hosting, email, recurring costs
- `documentation/DESIGN-SYSTEM.md` — the digital translation of the Brand Bible

## Publishing workflow

Adding a project: append a `Project` entry to `content/projects.ts` (schema per blueprint §7). Adding an article: append an `Article` entry to `content/articles.ts`. Archive and detail pages generate automatically. Page copy edits go through `lib/site.ts`.

Environments: feature branches get Vercel preview deployments (staging); `main` deploys to production. Never experiment directly on production.

---

© Musabi Incorporated. All rights reserved. Brand identity, motif system and site content are the property of Musabi Incorporated.
