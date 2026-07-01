import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "privacy", "support", "terms"];
  return pages.map((page) => ({
    url: `${SITE_URL}/${page ? `${page}/` : ""}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "monthly" : "yearly",
    priority: page === "" ? 1 : 0.7,
  }));
}
