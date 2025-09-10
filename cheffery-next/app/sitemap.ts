import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const routes = ["/", "/new-home", "/enter", "/services", "/gallery", "/forum", "/contact", "/legal/privacy", "/legal/terms"];
  return routes.map((r) => ({ url: `${base}${r}`, changeFrequency: "monthly", priority: r === "/" ? 1 : 0.8 }));
}


