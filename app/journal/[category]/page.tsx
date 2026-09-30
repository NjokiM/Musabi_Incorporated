import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { journalCategories } from "@/lib/site";
import { articles } from "@/content/articles";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ArticleCard from "@/components/ArticleCard";

export function generateStaticParams() {
  return journalCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = journalCategories.find((c) => c.slug === slug);
  if (!category) return {};
  return { title: category.title, description: category.description };
}

export default async function JournalCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = journalCategories.find((c) => c.slug === slug);
  if (!category) notFound();

  const list = articles.filter((a) => a.category === category.slug);

  return (
    <PageShell
      kicker="Journal"
      title={category.title}
      lede={category.description}
    >
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Journal", href: "/journal" },
          { label: category.title },
        ]}
      />

      <div className="mt-10">
        {list.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((article) => (
              <ArticleCard key={article.slug} article={article} categorySlug={category.slug} />
            ))}
          </div>
        ) : (
          <div className="border border-charcoal/15 bg-white/50 p-8">
            <h2 className="text-lg font-semibold">Nothing published yet</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-charcoal/70">
              The Journal publishes as the work generates something worth
              sharing. Articles in this category will appear here.
            </p>
          </div>
        )}
      </div>
    </PageShell>
  );
}
