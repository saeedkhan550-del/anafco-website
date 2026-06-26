import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { Work } from "@/components/sections/work";
import { WhatWeBuild } from "@/components/sections/what-we-build";
import { Services } from "@/components/sections/services";
import { Engagement } from "@/components/sections/engagement";
import { Edge } from "@/components/sections/edge";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Work />
        <WhatWeBuild />
        <Services />
        <Engagement />
        <Edge />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
