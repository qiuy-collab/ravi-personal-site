import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
const routes = ["", "/about", "/services", "/projects", "/contact"];

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}/`.replace(/(?<!:)\/{2,}/g, "/"),
    lastModified: new Date("2026-03-24")
  }));
}
