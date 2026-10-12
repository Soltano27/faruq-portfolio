import type { MetadataRoute } from "next";
import { site, themes } from "@/lib/content";
import { postBodies } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/experience", "/portfolio", "/about", "/blog", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  const posts = themes
    .flatMap((t) => t.posts)
    .filter((p) => p.slug in postBodies)
    .map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: p.date || undefined, changeFrequency: "yearly" as const, priority: 0.6 }));
  return [...pages, ...posts];
}
