import Link from "next/link";

export default function PageLinks({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  if (links.length === 0) return null;
  return (
    <div className="flex flex-wrap gap-4">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="border border-charcoal/30 px-5 py-2.5 text-sm tracking-wide transition-colors hover:border-charcoal hover:bg-white/50"
        >
          {link.label} →
        </Link>
      ))}
    </div>
  );
}
