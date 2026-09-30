# Musabi Digital Infrastructure & Cost Plan

Domains, hosting, email, CMS, storage, security and recurring costs for musabi.com. v1.0 — 2026-09-30. Pricing verified against vendor sources on this date; re-verify at purchase.

## 1. Stack decisions

| Layer | Choice | Rationale |
| --- | --- | --- |
| Primary domain | **musabi.com** | Strongest long-term brand address; descriptive names (musabiincorporatedlimited.co.ke) are legally fine but poor brand addresses |
| Defensive domains | musabi.africa, musabi.co.ke (redirect to primary) | Protect the name regionally; acquire only if reasonably priced |
| Registrar | **Cloudflare Registrar** | At-cost pricing, no markup: .com ≈ **$10.44/yr** (Verisign wholesale). Domain must be registered in a company-controlled account with 2FA — never a designer's personal account |
| DNS / CDN / SSL | **Cloudflare Free** | Free DNS, CDN, SSL, DNSSEC; security tiers available later |
| Hosting | **Vercel Pro, $20/mo** | Hobby tier is free but licensed for personal/non-commercial use; Pro is the correct commercial tier and includes usage credits. Alternative: Cloudflare Pages for static workloads |
| Email | **Google Workspace Business Starter, $6/user/mo (annual)** | One paid user + aliases first: hello@, info@, studio@, creative@, urbanlab@, development@, foundation@, ventures@, moses@, careers@musabi.com. Never a gmail.com address for the company |
| CMS | **Deferred — file-based content model now** | `content/` + TypeScript schemas serve launch. Add a headless CMS when non-developers publish regularly: Sanity (generous free tier), Payload (free self-hosted), Strapi (Cloud from ~$29/mo). Contentful's free→$300/mo jump makes it a poor fit at this scale |
| Fonts | **$0** | Barlow and Cormorant Garamond are SIL Open Font License, self-hosted via next/font |
| Analytics | **$0** | Google Analytics 4 + Search Console + Bing Webmaster Tools |
| Forms | **$0 at launch** | Next.js form + spam protection wired to email; CRM deferred (Website → Email first) |

## 2. Recurring cost scenarios

### Launch essentials (steady state)

| Item | Monthly | Annual |
| --- | --- | --- |
| musabi.com (Cloudflare) | — | ~$10.44 |
| Defensive domains (2, optional) | — | TBD at purchase |
| Vercel Pro | $20.00 | $240.00 |
| Google Workspace (1 user + aliases) | $6.00 | $72.00 |
| DNS/CDN/SSL, analytics, fonts, CMS, repository | $0 | $0 |
| **Total** | **~$26/mo** | **~$322/yr** |

### Add-ons when justified

| Item | When | Indicative cost |
| --- | --- | --- |
| Headless CMS | Non-developer publishing | $0 (Payload self-host) → ~$29+/mo (Strapi Cloud) |
| Backup storage beyond Workspace pooling | Media library grows | ~$2–10/mo |
| Email marketing (newsletter) | Audience exists post-launch | Free tiers available |
| CRM | Enquiry volume justifies pipeline | Start free tiers (HubSpot/Zoho/Airtable) |
| Monitoring/uptime | Launch | Free tiers available |

Content and human buckets (photography, video, drone, editing; developer/designer/SEO/copywriter time) are project-based, not subscription — budget per initiative per the Master Checklist §30.

## 3. Digital Asset Register (starter)

| Asset | Owner | Location | Renewal | Status |
| --- | --- | --- | --- | --- |
| musabi.com | Musabi Incorporated | Cloudflare Registrar | Annual | Pending |
| musabi.africa / musabi.co.ke | Musabi Incorporated | Registrar TBD | Annual | Pending |
| DNS + SSL | Musabi Incorporated | Cloudflare | — | Pending |
| Hosting | Musabi Incorporated | Vercel | Monthly | Pending |
| Email | Musabi Incorporated | Google Workspace | Monthly | Pending |
| Repository | Musabi Incorporated | GitHub (NjokiM/Musabi_Incorporated) | — | Active |
| CMS | — | Deferred | — | Not needed yet |
| Analytics | Musabi Incorporated | Google | Free | Pending |
| Fonts | Open licence | SIL OFL, self-hosted | — | Active |
| Trademark (word + device) | Musabi Incorporated | KIPI | Per schedule | In progress |
| Brand asset library | Musabi Incorporated | Per Bible §19.2 structure | — | Partial (motif masters pending) |
| Backups | Musabi Incorporated | Git + CMS export + cloud storage | — | Git only (expand before launch) |

Every row needs: named owner, 2FA, recovery email/codes in the company credentials system, and renewal dates. A backup you have never restored is only a theory — test restores quarterly.

## 4. Pre-launch security checklist

HTTPS (automatic on Vercel/Cloudflare) · DNSSEC · 2FA everywhere · password manager · domain lock + auto-renew · least-privilege access · secrets in `.env`, never committed · form spam protection · dependency updates quarterly · backup + restore test.
