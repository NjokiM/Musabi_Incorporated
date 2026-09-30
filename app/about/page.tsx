import type { Metadata } from "next";
import Link from "next/link";
import { aboutPages, brand } from "@/lib/site";
import PageShell from "@/components/PageShell";
import Quote from "@/components/Quote";

export const metadata: Metadata = {
  title: "About",
  description:
    "Musabi Incorporated is a multidisciplinary institution whose capabilities extend across the built environment, creative communication, urban research, development, social impact and investment.",
};

export default function AboutPage() {
  return (
    <PageShell
      kicker="About"
      title="The institution"
      lede="Musabi is an ecosystem rather than a single service — the whole, and the distinct capabilities through which the whole acts."
    >
      <Quote>{brand.coreThought}</Quote>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {aboutPages.map((page) => (
          <Link
            key={page.slug}
            href={`/about/${page.slug}`}
            className="group border-t border-charcoal/15 pt-4"
          >
            <h2 className="text-lg font-semibold">{page.title}</h2>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-charcoal/65">
              {page.intro}
            </p>
            <p className="mt-3 text-sm text-charcoal/50 transition-transform group-hover:translate-x-1">
              Read →
            </p>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
