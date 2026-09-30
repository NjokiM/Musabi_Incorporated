import type { Metadata } from "next";
import Link from "next/link";
import { journalCategories } from "@/lib/site";
import { articles } from "@/content/articles";
import PageShell from "@/components/PageShell";
import ArticleCard from "@/components/ArticleCard";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "The Musabi Journal publishes research, ideas, case studies and commentary across the institution — useful thinking, not constant advertising.",
};

export default function JournalPage() {
  const latest = [...articles]
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""))
    .slice(0, 3);

  return (
    <PageShell
      kicker="Journal"
      title="Useful thinking, published."
      lede="We do not speak to impress. We speak to create understanding — through research, ideas, case studies and commentary from across the institution."
    >
      {latest.length > 0 && (
        <section className="mb-14">
          <h2 className="text-sm font-medium uppercase tracking-widest text-charcoal/50">
            Latest
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="text-sm font-medium uppercase tracking-widest text-charcoal/50">
          Categories
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {journalCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/journal/${category.slug}`}
              className="group border-t border-charcoal/15 pt-4"
            >
              <h3 className="font-semibold">{category.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                {category.description}
              </p>
              <p className="mt-3 text-sm text-charcoal/50 transition-transform group-hover:translate-x-1">
                Read →
              </p>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
