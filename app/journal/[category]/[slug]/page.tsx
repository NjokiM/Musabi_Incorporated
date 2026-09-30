import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEntity, journalCategories } from "@/lib/site";
import { articles } from "@/content/articles";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";

export function generateStaticParams() {
  return articles.flatMap((article) =>
    article.category ? [{ category: article.category, slug: article.slug }] : [],
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const article = articles.find(
    (a) => a.slug === slug && a.category === category,
  );
  if (!article) return {};
  return {
    title: article.title,
    description: article.seo?.description ?? article.subtitle,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const categoryData = journalCategories.find((c) => c.slug === category);
  const article = articles.find(
    (a) => a.slug === slug && a.category === category,
  );
  if (!categoryData || !article) notFound();

  const entity = article.entity ? getEntity(article.entity) : undefined;
  const paragraphs = (article.body ?? "").split(/\n\n+/).filter(Boolean);

  return (
    <PageShell
      kicker={`${categoryData.title} · Journal`}
      title={article.title}
      lede={article.subtitle}
      accent={entity?.hex}
    >
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Journal", href: "/journal" },
          { label: categoryData.title, href: `/journal/${categoryData.slug}` },
          { label: article.title },
        ]}
      />

      <div className="mt-10 max-w-3xl">
        <p className="text-sm text-charcoal/55">
          {[article.author, article.date, article.readingTime]
            .filter(Boolean)
            .join(" · ")}
        </p>

        <div className="mt-8 space-y-5">
          {paragraphs.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-charcoal/80">
              {paragraph}
            </p>
          ))}
        </div>

        {article.references && article.references.length > 0 && (
          <section className="mt-12">
            <h2 className="text-sm font-medium uppercase tracking-widest text-charcoal/50">
              References
            </h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-charcoal/70">
              {article.references.map((reference, i) => (
                <li key={i}>{reference}</li>
              ))}
            </ol>
          </section>
        )}

        {article.tags && article.tags.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="border border-charcoal/20 px-3 py-1 text-xs tracking-wide text-charcoal/60"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </PageShell>
  );
}
