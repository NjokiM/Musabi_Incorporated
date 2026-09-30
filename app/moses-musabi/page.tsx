import type { Metadata } from "next";
import { mosesPages } from "@/lib/site";
import PageShell from "@/components/PageShell";
import Quote from "@/components/Quote";

export const metadata: Metadata = {
  title: "Moses Musabi",
  description:
    "Moses Musabi — architect, urban policy researcher and founder of Musabi Incorporated.",
};

export default function MosesMusabiPage() {
  return (
    <PageShell
      kicker="Moses Musabi"
      title="Founder · Architect · Urban Policy Researcher"
      lede="Moses Musabi founded Musabi Incorporated on the belief that thoughtful design improves lives — and that meaningful change is rarely the work of one discipline."
    >
      <Quote>Thoughtful design has the power to improve lives.</Quote>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {mosesPages.map((page) => (
          <a
            key={page.slug}
            href={`/moses-musabi/${page.slug}`}
            className="group border-t border-charcoal/15 pt-4"
          >
            <h2 className="text-lg font-semibold">{page.title}</h2>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-charcoal/65">
              {page.intro}
            </p>
            <p className="mt-3 text-sm text-charcoal/50 transition-transform group-hover:translate-x-1">
              Read →
            </p>
          </a>
        ))}
      </div>
    </PageShell>
  );
}
