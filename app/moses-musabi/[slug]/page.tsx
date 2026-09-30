import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { mosesPages } from "@/lib/site";
import PageShell from "@/components/PageShell";
import Breadcrumb from "@/components/Breadcrumb";
import SectionList from "@/components/SectionList";
import PageLinks from "@/components/PageLinks";

export function generateStaticParams() {
  return mosesPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = mosesPages.find((p) => p.slug === slug);
  if (!page) return {};
  return { title: page.title, description: page.intro };
}

export default async function MosesMusabiSubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = mosesPages.find((p) => p.slug === slug);
  if (!page) notFound();

  return (
    <PageShell kicker="Moses Musabi" title={page.title} lede={page.intro}>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Moses Musabi", href: "/moses-musabi" },
          { label: page.title },
        ]}
      />

      <div className="mt-10 space-y-12">
        <SectionList sections={page.sections} />
        <PageLinks links={page.links ?? []} />
      </div>
    </PageShell>
  );
}
