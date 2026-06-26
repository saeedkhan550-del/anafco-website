// Central site config. The base URL drives metadata, canonical URLs,
// the sitemap and robots.txt — set it once via the NEXT_PUBLIC_SITE_URL
// env var (e.g. on Vercel) and everything follows.
//
// Order of precedence:
//   1. NEXT_PUBLIC_SITE_URL  — you set this in Vercel after first deploy
//   2. VERCEL_PROJECT_PRODUCTION_URL — Vercel injects this automatically
//   3. localhost fallback for dev
const fromEnv =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "");

export const SITE_URL = (fromEnv || "http://localhost:3000").replace(/\/$/, "");

export const SITE_NAME = "ANAFCO Technologies";
