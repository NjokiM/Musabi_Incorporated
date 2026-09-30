import type { Metadata } from "next";
import Link from "next/link";
import { projectCategories } from "@/lib/site";
import { projects } from "@/content/projects";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Built work, brand work, urban research, programmes and ventures — documented as case studies: the problem, the approach, what changed.",
};

export default function ProjectsPage() {
  return (
    <PageShell
      kicker="Projects"
      title="The work, and what changed because of it."
      lede="Every project is documented as a case study: the context, the challenge, the approach, the outcome. No inflation — the work establishes authority."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projectCategories.map((category) => {
          const count = projects.filter(
            (p) => p.entity === category.entity,
          ).length;
          return (
            <Link
              key={category.slug}
              href={`/projects/${category.slug}`}
              className="group border-t border-charcoal/15 pt-4"
            >
              <div className="flex items-baseline justify-between">
                <h2 className="text-lg font-semibold">{category.title}</h2>
                <span className="text-sm text-charcoal/40">{count}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                {category.description}
              </p>
              <p className="mt-3 text-sm text-charcoal/50 transition-transform group-hover:translate-x-1">
                Browse →
              </p>
            </Link>
          );
        })}
      </div>
      <p className="mt-10 max-w-3xl text-sm leading-relaxed text-charcoal/55">
        The project archive is being populated. First case studies are in
        preparation and will be published as their documentation is completed.
      </p>
    </PageShell>
  );
}
