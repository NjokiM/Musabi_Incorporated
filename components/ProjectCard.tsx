import Link from "next/link";
import type { Project } from "@/lib/content-model";
import { getEntity, projectCategories } from "@/lib/site";

export default function ProjectCard({ project }: { project: Project }) {
  const entity = project.entity ? getEntity(project.entity) : undefined;
  const category = projectCategories.find((c) => c.entity === project.entity);
  const href = category
    ? `/projects/${category.slug}/${project.slug}`
    : "/projects";

  const meta = [project.location, project.country, project.year]
    .filter(Boolean)
    .join(" · ");

  return (
    <Link
      href={href}
      className="group block border-t-2 bg-white/40 p-6 transition-shadow hover:shadow-md"
      style={{ borderTopColor: entity?.hex ?? "#222222" }}
    >
      <p className="text-xs font-medium uppercase tracking-widest text-charcoal/50">
        {project.sector ?? project.projectType ?? "Project"}
      </p>
      <h3 className="mt-2 text-lg font-semibold leading-snug">{project.name}</h3>
      {meta && <p className="mt-2 text-sm text-charcoal/60">{meta}</p>}
      <p className="mt-4 text-sm text-charcoal/50 transition-transform group-hover:translate-x-1">
        View case study →
      </p>
    </Link>
  );
}
