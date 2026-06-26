import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { Solutions } from "@/components/sections/solutions";
import { CaseStudies } from "@/components/sections/case-studies";
import { Testimonials } from "@/components/sections/testimonials";
import { CTA } from "@/components/sections/cta";

export const metadata = {
  title: "Solutions — ANAFCO Technologies",
  description:
    "Productized platforms: ANAFCO POS for retail & restaurants and ANAFCO Billing Cloud for ISPs and telecom.",
};

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          breadcrumb="Solutions"
          eyebrow="Featured solutions"
          title="Flagship platforms, ready to adapt to your business"
          sub="Battle-tested products born from real client work — deployable fast and tailored to how you operate."
        />
        <Solutions />
        <CaseStudies />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
