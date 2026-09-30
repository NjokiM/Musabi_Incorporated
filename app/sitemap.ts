import type { MetadataRoute } from "next";
import {
  aboutPages,
  entities,
  journalCategories,
  mosesPages,
  projectCategories,
} from "@/lib/site";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://musabi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const path = (p: string) => `${BASE_URL}${p}`;

  const routes: string[] = [
    "",
    "/about",
    ...aboutPages.map((p) => `/about/${p.slug}`),
    "/entities",
    ...entities.flatMap((entity) => [
      `/entities/${entity.slug}`,
      ...entity.pages.map((p) => `/entities/${entity.slug}/${p.slug}`),
    ]),
    "/projects",
    ...projectCategories.map((c) => `/projects/${c.slug}`),
    "/journal",
    ...journalCategories.map((c) => `/journal/${c.slug}`),
    "/moses-musabi",
    ...mosesPages.map((p) => `/moses-musabi/${p.slug}`),
    "/careers",
    "/contact",
  ];

  return routes.map((route) => ({
    url: path(route),
    lastModified: new Date(),
  }));
}
