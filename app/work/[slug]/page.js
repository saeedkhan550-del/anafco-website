import { redirect } from "next/navigation";
import { work } from "@/lib/content";

// Case-study details now live under /case-studies/[slug].
// Keep old /work/[slug] links working by redirecting.
export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export default function WorkSlugRedirect({ params }) {
  redirect(`/case-studies/${params.slug}`);
}
