"use client";

import { showcase, showcaseIntro } from "@/lib/content";
import { Icon } from "../icons";
import { Reveal, SectionHeader } from "../ui";
import { TiltCard, Layer } from "../three-d";

// /work page showcase — a DISTINCT design from the homepage flip-card grid.
// Large, full-bleed alternating editorial rows: image on one side, the
// category write-up on the other, sides alternating down the page.
export function ShowcaseGrid() {
  return (
    <section className="pb-section">
      <div className="container-x">
        <Reveal>
          <SectionHeader
            eyebrow="The grid"
            title="Eight categories. One visual language."
            sub={showcaseIntro}
          />
        </Reveal>

        <div className="mt-16 flex flex-col gap-20 md:gap-28">
          {showcase.map((item, i) => (
            <ShowcaseRow key={item.category} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowcaseRow({ item, index }) {
  const flip = index % 2 === 1; // alternate image side

  return (
    <article className="group grid items-center gap-8 md:grid-cols-12 md:gap-14">
      {/* Image — tilts in 3D, full image preserved (no crop) */}
      <div
        className={`perspective-1400 md:col-span-7 ${
          flip ? "md:order-2 md:col-start-6" : "md:order-1"
        }`}
      >
        <TiltCard
          max={9}
          scale={1.02}
          className="relative overflow-hidden rounded-xl3 border border-border ring-1 ring-white/5 shadow-[0_40px_110px_-50px_rgba(0,0,0,0.8)] transition-shadow duration-500 group-hover:shadow-[0_50px_130px_-45px_rgba(198,242,78,0.3)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image}
            alt={item.category}
            loading="lazy"
            className="block w-full transition-transform duration-[800ms] group-hover:scale-[1.04]"
          />
          {/* Giant outline index floats over the corner */}
          <Layer depth={45} className="absolute left-5 top-3 font-display text-7xl font-semibold leading-none text-white/15 [-webkit-text-stroke:1px_rgba(255,255,255,0.3)]">
            {item.no}
          </Layer>
        </TiltCard>
      </div>

      {/* Text */}
      <div
        className={`md:col-span-5 ${
          flip ? "md:order-1 md:col-start-1 md:row-start-1" : "md:order-2"
        }`}
      >
        <div className="flex items-center gap-2 text-accent">
          <span className="h-px w-10 bg-accent" />
          <span className="font-display text-sm font-medium uppercase tracking-[0.2em]">
            {item.no}
          </span>
        </div>
        <h3 className="mt-4 font-display text-h2 font-semibold leading-tight text-ink">
          {item.category}
        </h3>
        <p className="mt-4 max-w-md text-lead text-muted text-pretty">{item.desc}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-[13px] text-muted transition-colors group-hover:border-accent/40 group-hover:text-ink"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent"
        >
          Start a {item.category.toLowerCase()} project
          <Icon.Arrow width={15} height={15} />
        </a>
      </div>
    </article>
  );
}
