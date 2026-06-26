import { SITE_URL } from "@/lib/site";
import { work } from "@/lib/content";

// Dynamic sitemap — Next.js serves this at /sitemap.xml.
// Covers every static page plus each case-study detail route.
export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    "", // home
    "/work",
    "/services",
    "/solutions",
    "/industries",
    "/about",
    "/process",
    "/case-studies",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const caseStudyRoutes = work.map((w) => ({
    url: `${SITE_URL}/case-studies/${w.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}
