import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CaseStudy } from "@/components/case-study";
import { CTA } from "@/components/sections/cta";
import { work } from "@/lib/content";

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export function generateMetadata({ params }) {
  const item = work.find((w) => w.slug === params.slug);
  if (!item) return {};
  return {
    title: `${item.client} — Case Study | ANAFCO Technologies`,
    description: item.desc,
  };
}

export default function CaseStudyPage({ params }) {
  const item = work.find((w) => w.slug === params.slug);
  if (!item) notFound();

  return (
    <>
      <Navbar />
      <main>
        <CaseStudy item={item} />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
