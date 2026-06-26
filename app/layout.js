import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { ContactProvider } from "@/components/contact-drawer";
import { SITE_URL } from "@/lib/site";
import { company } from "@/lib/content";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ANAFCO Technologies — Software that runs your business",
    template: "%s — ANAFCO Technologies",
  },
  description:
    "ANAFCO Technologies builds SaaS products, custom software, POS systems, ISP billing platforms, AI automation and cloud solutions for ambitious businesses.",
  applicationName: "ANAFCO Technologies",
  keywords: [
    "SaaS development",
    "custom software",
    "POS systems",
    "ISP billing software",
    "AI automation",
    "cloud solutions",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ANAFCO Technologies",
    description:
      "Premium software studio for SaaS, POS, ISP billing, AI automation and cloud.",
    url: SITE_URL,
    siteName: "ANAFCO Technologies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANAFCO Technologies — Software that runs your business",
    description:
      "Premium software studio for SaaS, POS, ISP billing, AI automation and cloud.",
  },
  robots: {
    index: true,
    follow: true,
  },
  // Google Search Console verification — paste your token into
  // NEXT_PUBLIC_GOOGLE_VERIFICATION (Vercel env var) to verify via meta tag.
  verification: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION }
    : undefined,
};

export const viewport = {
  themeColor: "#0A0A0B",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ANAFCO Technologies",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  email: company.email,
  telephone: company.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "2815 Coyle St Unit 176",
    addressLocality: "Brooklyn",
    addressRegion: "NY",
    postalCode: "11235",
    addressCountry: "US",
  },
  description:
    "ANAFCO Technologies builds SaaS products, custom software, POS systems, ISP billing platforms, AI automation and cloud solutions for ambitious businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <ThemeProvider>
          <ContactProvider>{children}</ContactProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
