import Link from "next/link";

export default function CtaBand({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <section className="bg-charcoal text-ivory">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
          <p className="mt-3 text-ivory/70">{body}</p>
        </div>
        <Link
          href="/contact"
          className="shrink-0 border border-ivory/40 px-6 py-3 text-sm tracking-wide transition-colors hover:bg-ivory hover:text-charcoal"
        >
          Start a conversation
        </Link>
      </div>
    </section>
  );
}
