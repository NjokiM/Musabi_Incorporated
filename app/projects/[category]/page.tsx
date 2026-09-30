import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getEntity, projectCategories } from "@/lib/site";
import { projects } from "@/content/projects";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import ProjectCard from "@/components/ProjectCard";

export function generateStaticParams() {
  return projectCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: slug } = await params;
  const category = projectCategories.find((c) => c.slug === slug);
  if (!category) return {};
  return { title: `${category.title} Projects`, description: category.description };
}

export default async function ProjectCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: slug } = await params;
  const category = projectCategories.find((c) => c.slug === slug);
  if (!category) notFound();

  const entity = getEntity(category.entity);
  const list = projects.filter((p) => p.entity === category.entity);

  return (
    <PageShell
      kicker="Projects"
      title={category.title}
      lede={category.description}
      accent={entity?.hex}
    >
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
          { label: category.title },
        ]}
      />

      <div className="mt-10">
        {list.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="border border-charcoal/15 bg-white/50 p-8">
            <h2 className="text-lg font-semibold">In preparation</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-charcoal/70">
              First case studies in this category are in preparation. When
              published, each project is documented with its story — the
              context, the challenge, the approach, the outcome and the impact.
            </p>
            {entity && (
              <Link
                href={`/entities/${entity.slug}`}
                className="mt-4 inline-block text-sm font-medium"
                style={{ color: entity.hex }}
              >
                About {entity.name} →
              </Link>
            )}
          </div>
        )}
      </div>
    </PageShell>
  );
}
