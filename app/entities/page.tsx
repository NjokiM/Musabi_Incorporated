import type { Metadata } from "next";
import { entities } from "@/lib/site";
import PageShell from "@/components/PageShell";
import EntityCard from "@/components/EntityCard";

export const metadata: Metadata = {
  title: "Entities",
  description:
    "Musabi Incorporated works through six business units — Architecture Studio, Creative, Urban Lab, Development, Foundation and Ventures. One institution, one coherent system.",
};

export default function EntitiesPage() {
  return (
    <PageShell
      kicker="Entities"
      title="One institution. Six capabilities."
      lede="Each entity has its own role, character and expertise — and each remains visibly connected to Musabi. The parent gives coherence to the parts; the parts give substance to the parent."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {entities.map((entity) => (
          <EntityCard key={entity.slug} entity={entity} />
        ))}
      </div>
      <p className="mt-10 max-w-3xl text-sm leading-relaxed text-charcoal/55">
        Development, Foundation and Ventures are future entities, being
        established as strategic opportunities arise. A business unit is not
        automatically a legal company; legal, tax and professional
        requirements take precedence over visual rules.
      </p>
    </PageShell>
  );
}
