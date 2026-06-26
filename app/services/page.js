import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { Services } from "@/components/sections/services";
import { Process } from "@/components/sections/process";
import { TechStack } from "@/components/sections/tech-stack";
import { Engagement } from "@/components/sections/engagement";
import { CTA } from "@/components/sections/cta";

export const metadata = {
  title: "Services — ANAFCO Technologies",
  description:
    "SaaS product development, custom software, POS systems, ISP billing, AI automation and cloud solutions.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          breadcrumb="Services"
          eyebrow="Services"
          title="Everything you need to ship and scale software"
          sub="From first prototype to production at scale, we cover the full lifecycle so you don't have to stitch together five vendors."
        />
        <Services />
        <TechStack />
        <Process />
        <Engagement />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
