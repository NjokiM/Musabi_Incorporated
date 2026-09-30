import type { ReactNode } from "react";

export default function PageShell({
  kicker,
  title,
  lede,
  accent,
  children,
}: {
  kicker: string;
  title: string;
  lede?: string;
  accent?: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-14 md:pt-20">
      <header className="max-w-3xl">
        <p
          className="text-xs font-medium uppercase tracking-widest"
          style={accent ? { color: accent } : undefined}
        >
          {kicker}
        </p>
        <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
          {title}
        </h1>
        {lede && (
          <p className="mt-6 font-editorial text-2xl leading-relaxed text-charcoal/75">
            {lede}
          </p>
        )}
      </header>
      <div className="mt-12 border-t border-charcoal/10 pt-10">{children}</div>
    </div>
  );
}
