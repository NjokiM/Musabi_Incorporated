import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { entities } from "@/lib/site";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import SectionList from "@/components/SectionList";
import PageLinks from "@/components/PageLinks";
import ContactForm from "@/components/ContactForm";

export function generateStaticParams() {
  return entities.flatMap((entity) =>
    entity.pages.map((page) => ({ entity: entity.slug, slug: page.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ entity: string; slug: string }>;
}): Promise<Metadata> {
  const { entity: entitySlug, slug } = await params;
  const entity = entities.find((e) => e.slug === entitySlug);
  const page = entity?.pages.find((p) => p.slug === slug);
  if (!entity || !page) return {};
  return { title: `${page.title} — ${entity.name}`, description: page.intro };
}

export default async function EntitySubPage({
  params,
}: {
  params: Promise<{ entity: string; slug: string }>;
}) {
  const { entity: entitySlug, slug } = await params;
  const entity = entities.find((e) => e.slug === entitySlug);
  const page = entity?.pages.find((p) => p.slug === slug);
  if (!entity || !page) notFound();

  return (
    <PageShell
      kicker={entity.short}
      title={page.title}
      lede={page.intro}
      accent={entity.hex}
    >
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Entities", href: "/entities" },
          { label: entity.short, href: `/entities/${entity.slug}` },
          { label: page.title },
        ]}
      />

      <div className="mt-10 space-y-12">
        {slug === "contact" ? (
          <ContactForm defaultEntity={entity.slug} />
        ) : (
          <>
            <SectionList sections={page.sections} />
            <PageLinks links={page.links ?? []} />
          </>
        )}

        <section>
          <h2 className="text-sm font-medium uppercase tracking-widest text-charcoal/50">
            More in {entity.short}
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href={`/entities/${entity.slug}`}
              className="border border-charcoal/25 px-4 py-2 text-sm transition-colors hover:border-charcoal hover:bg-white/50"
            >
              Overview
            </Link>
            {entity.pages
              .filter((p) => p.slug !== page.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/entities/${entity.slug}/${p.slug}`}
                  className="border border-charcoal/25 px-4 py-2 text-sm transition-colors hover:border-charcoal hover:bg-white/50"
                >
                  {p.title}
                </Link>
              ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
