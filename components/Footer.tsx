import Link from "next/link";
import { brand, entities } from "@/lib/site";
import Motif from "@/components/Motif";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-ivory">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Motif className="h-10 w-auto" />
            <p className="text-sm font-semibold leading-tight">
              Musabi
              <br />
              Incorporated
            </p>
          </div>
          <p className="mt-4 font-editorial text-xl italic text-charcoal/70">
            {brand.coreThought}
          </p>
          <p className="mt-2 text-sm text-charcoal/60">{brand.tagline}</p>
        </div>

        <nav aria-label="Entities">
          <p className="text-xs font-medium uppercase tracking-widest text-charcoal/50">
            Entities
          </p>
          <ul className="mt-4 space-y-2">
            {entities.map((entity) => (
              <li key={entity.slug}>
                <Link
                  href={`/entities/${entity.slug}`}
                  className="text-sm text-charcoal/70 transition-colors hover:text-charcoal"
                >
                  {entity.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Institution">
          <p className="text-xs font-medium uppercase tracking-widest text-charcoal/50">
            Institution
          </p>
          <ul className="mt-4 space-y-2">
            {[
              { href: "/about", label: "About" },
              { href: "/projects", label: "Projects" },
              { href: "/journal", label: "Journal" },
              { href: "/moses-musabi", label: "Moses Musabi" },
              { href: "/careers", label: "Careers" },
              { href: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-charcoal/70 transition-colors hover:text-charcoal"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-charcoal/50">
            Contact
          </p>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/70">
            Enquiries across the institution and its six entities are welcome
            through the contact page.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block border border-charcoal px-5 py-2.5 text-sm tracking-wide transition-colors hover:bg-charcoal hover:text-ivory"
          >
            Start a conversation
          </Link>
        </div>
      </div>

      <div className="border-t border-charcoal/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-xs text-charcoal/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Musabi Incorporated. All rights reserved.</p>
          <p>{brand.tagline}.</p>
        </div>
      </div>
    </footer>
  );
}
