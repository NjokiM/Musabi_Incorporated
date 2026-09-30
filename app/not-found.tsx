import Link from "next/link";
import PageShell from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell kicker="404" title="Page not found" lede="The page you are looking for does not exist or has moved.">
      <Link
        href="/"
        className="inline-block border border-charcoal px-6 py-3 text-sm tracking-wide transition-colors hover:bg-charcoal hover:text-ivory"
      >
        Return home
      </Link>
    </PageShell>
  );
}
