import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { Industries } from "@/components/sections/industries";
import { CaseStudies } from "@/components/sections/case-studies";
import { Edge } from "@/components/sections/edge";
import { CTA } from "@/components/sections/cta";

export const metadata = {
  title: "Industries — ANAFCO Technologies",
  description:
    "Software for small businesses, retail stores, restaurants, accounting firms and telecom & ISP companies.",
};

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          breadcrumb="Industries"
          eyebrow="Industries served"
          title="Built for the businesses we know best"
          sub="We go deep in a handful of verticals — so we arrive understanding your workflows, not learning them on your dime."
        />
        <Industries />
        <CaseStudies />
        <Edge />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
