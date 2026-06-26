import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { WorkGrid } from "@/components/sections/work-grid";
import { Awards } from "@/components/sections/awards";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export const metadata = {
  title: "Case Studies — ANAFCO Technologies",
  description:
    "In-depth case studies across storefronts, web apps, mobile apps, company websites and web3 — with real outcomes.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          breadcrumb="Case studies"
          eyebrow="Case studies"
          title="The work, in depth"
          sub="The challenge, the craft and the measurable outcome behind every project we ship."
        />
        <WorkGrid base="/case-studies" />
        <Awards />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
