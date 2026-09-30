import Link from "next/link";
import { brand, entities, processSteps, journalCategories } from "@/lib/site";
import Motif from "@/components/Motif";
import EntityCard from "@/components/EntityCard";
import CtaBand from "@/components/CtaBand";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-charcoal/10">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-charcoal/50">
              Design · Research · Development · Innovation
            </p>
            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              {brand.coreThought}
            </h1>
            <p className="mt-6 max-w-xl font-editorial text-2xl leading-relaxed text-charcoal/75">
              {brand.promise}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/entities"
                className="bg-charcoal px-7 py-3 text-sm tracking-wide text-ivory transition-opacity hover:opacity-85"
              >
                Explore the entities
              </Link>
              <Link
                href="/contact"
                className="border border-charcoal/40 px-7 py-3 text-sm tracking-wide transition-colors hover:border-charcoal hover:bg-white/50"
              >
                Start a conversation
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center border border-charcoal/10 bg-white/40 p-12 lg:p-16">
            <Motif className="h-auto w-28 md:w-32" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-charcoal/50">
              The entities
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              One institution. Six capabilities.
            </h2>
          </div>
          <Link
            href="/entities"
            className="text-sm font-medium tracking-wide text-charcoal/60 transition-colors hover:text-charcoal"
          >
            All entities →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {entities.map((entity) => (
            <EntityCard key={entity.slug} entity={entity} />
          ))}
        </div>
      </section>

      <section className="border-y border-charcoal/10 bg-white/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-xs font-medium uppercase tracking-widest text-charcoal/50">
            How we work
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            A disciplined process, from listening to learning.
          </h2>
          <ol className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <li key={step.number} className="flex gap-4 border-t border-charcoal/10 pt-4">
                <span className="text-sm font-medium text-charcoal/40">{step.number}</span>
                <div>
                  <p className="font-semibold">{step.name}</p>
                  <p className="font-editorial text-lg italic text-charcoal/60">{step.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-charcoal/50">
              The Journal
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Useful thinking, published.
            </h2>
          </div>
          <Link
            href="/journal"
            className="text-sm font-medium tracking-wide text-charcoal/60 transition-colors hover:text-charcoal"
          >
            All categories →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {journalCategories.slice(0, 4).map((category) => (
            <Link
              key={category.slug}
              href={`/journal/${category.slug}`}
              className="group border-t border-charcoal/15 pt-4"
            >
              <h3 className="font-semibold">{category.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                {category.description}
              </p>
              <p className="mt-3 text-sm text-charcoal/50 transition-transform group-hover:translate-x-1">
                Read →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand
        title="Let's build what endures."
        body="Tell us about the problem, the place or the idea. We will listen first."
      />
    </>
  );
}
