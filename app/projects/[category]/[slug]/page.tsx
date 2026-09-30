import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEntity, projectCategories } from "@/lib/site";
import { projects } from "@/content/projects";
import type { ProjectNarrative } from "@/lib/content-model";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";

export function generateStaticParams() {
  return projects.flatMap((project) => {
    const category = projectCategories.find((c) => c.entity === project.entity);
    return category ? [{ category: category.slug, slug: project.slug }] : [];
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category: categorySlug, slug } = await params;
  const category = projectCategories.find((c) => c.slug === categorySlug);
  const project = projects.find(
    (p) => p.slug === slug && p.entity === category?.entity,
  );
  if (!project) return {};
  return {
    title: project.name,
    description: project.narrative?.overview ?? project.seo?.description,
  };
}

const narrativeLabels: { key: keyof ProjectNarrative; label: string }[] = [
  { key: "context", label: "Context" },
  { key: "challenge", label: "Challenge" },
  { key: "approach", label: "Approach" },
  { key: "concept", label: "Concept" },
  { key: "design", label: "Design" },
  { key: "outcome", label: "Outcome" },
  { key: "impact", label: "Impact" },
];

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category: categorySlug, slug } = await params;
  const category = projectCategories.find((c) => c.slug === categorySlug);
  if (!category) notFound();
  const project = projects.find(
    (p) => p.slug === slug && p.entity === category.entity,
  );
  if (!project) notFound();

  const entity = getEntity(project.entity ?? "");
  const meta = [
    project.client,
    project.location,
    project.country,
    project.year,
    project.status,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <PageShell
      kicker={project.sector ?? "Case study"}
      title={project.name}
      lede={project.narrative?.overview}
      accent={entity?.hex}
    >
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: category.title, href: `/projects/${category.slug}` },
          { label: project.name },
        ]}
      />

      <div className="mt-10 max-w-3xl space-y-12">
        {meta && <p className="text-sm text-charcoal/60">{meta}</p>}

        {narrativeLabels.map(({ key, label }) => {
          const text = project.narrative?.[key];
          if (!text) return null;
          return (
            <section key={key}>
              <h2 className="text-xl font-semibold tracking-tight">{label}</h2>
              <p className="mt-3 leading-relaxed text-charcoal/75">{text}</p>
            </section>
          );
        })}

        {project.technical && (
          <section>
            <h2 className="text-xl font-semibold tracking-tight">Technical</h2>
            <dl className="mt-4 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {Object.entries(project.technical)
                .filter(([, value]) => Boolean(value))
                .map(([key, value]) => (
                  <div key={key} className="border-t border-charcoal/10 pt-3">
                    <dt className="text-xs font-medium uppercase tracking-widest text-charcoal/45">
                      {key}
                    </dt>
                    <dd className="mt-1 text-sm text-charcoal/75">{value}</dd>
                  </div>
                ))}
            </dl>
          </section>
        )}
      </div>
    </PageShell>
  );
}
