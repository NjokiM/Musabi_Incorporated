import Link from "next/link";
import type { Entity } from "@/lib/site";
import Motif from "@/components/Motif";

export default function EntityCard({ entity }: { entity: Entity }) {
  return (
    <Link
      href={`/entities/${entity.slug}`}
      className="group block border-t-2 bg-white/40 p-6 transition-shadow hover:shadow-md"
      style={{ borderTopColor: entity.hex }}
    >
      <Motif entity={entity.slug as never} className="h-6 w-6" />
      <p className="mt-5 text-xs font-medium uppercase tracking-widest text-charcoal/50">
        {entity.status === "future" ? "Future entity" : "Business unit"}
      </p>
      <h3 className="mt-1 text-lg font-semibold leading-snug">{entity.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{entity.role}</p>
      <p
        className="mt-4 text-sm font-medium tracking-wide transition-transform group-hover:translate-x-1"
        style={{ color: entity.hex }}
      >
        Explore →
      </p>
    </Link>
  );
}
