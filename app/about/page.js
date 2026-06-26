import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { AboutContent } from "@/components/sections/about-content";
import { Edge } from "@/components/sections/edge";
import { CTA } from "@/components/sections/cta";

export const metadata = {
  title: "About — ANAFCO Technologies",
  description:
    "ANAFCO Technologies is a software studio for ambitious businesses — craft, outcomes and momentum across SaaS, POS, billing, AI and cloud.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          breadcrumb="About"
          eyebrow="About us"
          title="A software studio for ambitious businesses"
          sub="Senior engineers and designers, shipping real software every week — measured the way you measure success."
        />
        <AboutContent />
        <Edge />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
