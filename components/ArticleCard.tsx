import Link from "next/link";
import type { Article } from "@/lib/content-model";
import { getEntity } from "@/lib/site";

export default function ArticleCard({
  article,
  categorySlug,
}: {
  article: Article;
  categorySlug?: string;
}) {
  const entity = article.entity ? getEntity(article.entity) : undefined;
  const href =
    article.category || categorySlug
      ? `/journal/${article.category ?? categorySlug}/${article.slug}`
      : "/journal";

  return (
    <Link href={href} className="group block border-t border-charcoal/15 pt-4">
      <p className="text-xs font-medium uppercase tracking-widest text-charcoal/50">
        {article.date} {article.readingTime ? `· ${article.readingTime}` : ""}
      </p>
      <h3 className="mt-2 text-lg font-semibold leading-snug">{article.title}</h3>
      {article.subtitle && (
        <p className="mt-1 font-editorial text-lg italic text-charcoal/65">
          {article.subtitle}
        </p>
      )}
      {entity && (
        <p className="mt-2 text-sm" style={{ color: entity.hex }}>
          {entity.name}
        </p>
      )}
      <p className="mt-3 text-sm text-charcoal/50 transition-transform group-hover:translate-x-1">
        Read →
      </p>
    </Link>
  );
}
