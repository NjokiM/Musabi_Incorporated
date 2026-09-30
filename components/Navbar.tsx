"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { brand, navigation } from "@/lib/site";
import Motif from "@/components/Motif";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/10 bg-ivory/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Motif className="h-9 w-auto" />
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-wide">Musabi</span>
            <span className="block text-sm font-light tracking-wide">Incorporated</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm tracking-wide transition-colors hover:text-charcoal ${
                isActive(item.href) ? "font-semibold text-charcoal" : "font-normal text-charcoal/60"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className={`h-px w-6 bg-charcoal transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-charcoal transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-charcoal/10 px-6 py-4 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-charcoal/5 py-3 text-base ${
                    isActive(item.href) ? "font-semibold" : "text-charcoal/70"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="pt-4 font-editorial text-lg italic text-charcoal/60">
            {brand.tagline}
          </p>
        </nav>
      )}
    </header>
  );
}
