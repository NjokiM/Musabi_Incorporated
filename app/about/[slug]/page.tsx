import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { aboutPages, processSteps, values } from "@/lib/site";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import SectionList from "@/components/SectionList";
import PageLinks from "@/components/PageLinks";

export function generateStaticParams() {
  return aboutPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = aboutPages.find((p) => p.slug === slug);
  if (!page) return {};
  return { title: page.title, description: page.intro };
}

export default async function AboutSubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = aboutPages.find((p) => p.slug === slug);
  if (!page) notFound();

  return (
    <PageShell kicker="About" title={page.title} lede={page.intro}>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: page.title },
        ]}
      />

      <div className="mt-10 space-y-12">
        {slug === "our-values" && (
          <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name} className="border-t border-charcoal/15 pt-4">
                <dt className="font-semibold">{value.name}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-charcoal/70">
                  {value.meaning}
                </dd>
              </div>
            ))}
          </dl>
        )}

        {slug === "how-we-work" && (
          <ol className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <li key={step.number} className="flex gap-4 border-t border-charcoal/10 pt-4">
                <span className="text-sm font-medium text-charcoal/40">{step.number}</span>
                <div>
                  <p className="font-semibold">{step.name}</p>
                  <p className="font-editorial text-lg italic text-charcoal/60">
                    {step.note}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        )}

        <SectionList sections={page.sections} />
        <PageLinks links={page.links ?? []} />
      </div>
    </PageShell>
  );
}
