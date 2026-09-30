import type { PageSection } from "@/lib/site";

export default function SectionList({ sections }: { sections: PageSection[] }) {
  if (sections.length === 0) return null;
  return (
    <div className="space-y-10">
      {sections.map((section) => (
        <section key={section.heading}>
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            {section.heading}
          </h2>
          {section.body.map((paragraph, i) => (
            <p
              key={i}
              className="mt-3 max-w-3xl leading-relaxed text-charcoal/75"
            >
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}
