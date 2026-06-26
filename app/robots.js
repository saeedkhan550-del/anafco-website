import { SITE_URL } from "@/lib/site";

// Served at /robots.txt — allows all crawlers and points to the sitemap.
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
