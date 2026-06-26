import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { Process } from "@/components/sections/process";
import { Engagement } from "@/components/sections/engagement";
import { Edge } from "@/components/sections/edge";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export const metadata = {
  title: "Process — ANAFCO Technologies",
  description:
    "How we work: discover, design, build and scale — with weekly releases and full transparency.",
};

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          breadcrumb="Process"
          eyebrow="How we work"
          title="A process built on momentum"
          sub="No black boxes. You see working software every week and steer the roadmap the whole way through."
        />
        <Process />
        <Engagement />
        <Edge />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
