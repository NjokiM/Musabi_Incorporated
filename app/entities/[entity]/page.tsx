import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { entities } from "@/lib/site";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import SectionList from "@/components/SectionList";
import Motif from "@/components/Motif";

export function generateStaticParams() {
  return entities.map((entity) => ({ entity: entity.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ entity: string }>;
}): Promise<Metadata> {
  const { entity: slug } = await params;
  const entity = entities.find((e) => e.slug === slug);
  if (!entity) return {};
  return { title: entity.name, description: entity.role };
}

export default async function EntityOverviewPage({
  params,
}: {
  params: Promise<{ entity: string }>;
}) {
  const { entity: slug } = await params;
  const entity = entities.find((e) => e.slug === slug);
  if (!entity) notFound();

  return (
    <PageShell
      kicker={entity.association}
      title={entity.name}
      lede={entity.intro}
      accent={entity.hex}
    >
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Entities", href: "/entities" },
          { label: entity.short },
        ]}
      />

      <div className="mt-10 space-y-12">
        <div className="flex items-center gap-4">
          <Motif entity={entity.slug as never} className="h-7 w-7" />
          <p className="text-sm tracking-wide text-charcoal/55">
            A Musabi Incorporated entity
          </p>
        </div>

        {entity.statusNote && (
          <p
            className="max-w-3xl border-l-2 bg-white/50 p-5 text-sm leading-relaxed text-charcoal/70"
            style={{ borderLeftColor: entity.hex }}
          >
            {entity.statusNote}
          </p>
        )}

        <SectionList sections={entity.sections} />

        <section>
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Inside {entity.short}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {entity.pages.map((page) => (
              <Link
                key={page.slug}
                href={`/entities/${entity.slug}/${page.slug}`}
                className="group border-t border-charcoal/15 pt-4"
              >
                <h3 className="font-semibold">{page.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-charcoal/65">
                  {page.intro}
                </p>
                <p className="mt-3 text-sm text-charcoal/50 transition-transform group-hover:translate-x-1">
                  Read →
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
