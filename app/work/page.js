import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { ShowcaseGrid } from "@/components/sections/showcase-grid";
import { Awards } from "@/components/sections/awards";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";
import { experiencedIn } from "@/lib/content";

export const metadata = {
  title: "Work — ANAFCO Technologies",
  description:
    "Selected work across company websites, mobile apps, web apps, premium storefronts and web3 apps.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          breadcrumb="Work"
          eyebrow="Selected work"
          title="Global work. Engineered."
          sub="We design and build world-class digital products for ambitious businesses — from storefronts and mobile apps to billing platforms and on-chain tools."
        />

        {/* Experienced in */}
        <div className="container-x -mt-2 pb-12">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-faint">
              Experienced in
            </span>
            {experiencedIn.map((x, i) => (
              <span key={x} className="text-muted">
                {x}
                {i < experiencedIn.length - 1 && <span className="ml-3 text-border">/</span>}
              </span>
            ))}
          </div>
        </div>

        <ShowcaseGrid />
        <Awards />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
