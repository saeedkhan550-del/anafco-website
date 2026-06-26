"use client";

import Link from "next/link";
import { showcase } from "@/lib/content";
import { Icon } from "../icons";
import { Reveal, SectionHeader, Stagger, StaggerItem } from "../ui";
import { FlipCard } from "../three-d";

export function Work({ heading = true }) {
  return (
    <section id="work" className="py-section">
      <div className="container-x">
        {heading && (
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <SectionHeader
                eyebrow="Selected work"
                title="Eight categories we build in"
                sub="Hover any card to flip it. High-end products across the SaaS categories ambitious businesses run on."
              />
              <Link href="/work" className="btn-ghost shrink-0">
                See all work <Icon.ArrowUpRight width={16} height={16} />
              </Link>
            </div>
          </Reveal>
        )}

        <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {showcase.map((item) => (
            <StaggerItem key={item.category}>
              <ShowcaseFlipCard item={item} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function ShowcaseFlipCard({ item }) {
  return (
    <FlipCard
      className="aspect-[3/2] w-full"
      front={<ShowcaseFront item={item} />}
      back={<ShowcaseBack item={item} />}
    />
  );
}

/* Front face — category render, glowing border, category label + flip hint */
function ShowcaseFront({ item }) {
  return (
    <div className="card relative h-full w-full overflow-hidden ring-1 ring-white/5 transition-shadow duration-500 group-hover:shadow-[0_30px_90px_-30px_rgba(198,242,78,0.35)]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.image}
        alt={item.category}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

      <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[11px] font-medium text-white/90 backdrop-blur">
        <Icon.Plus width={13} height={13} /> Flip
      </span>

      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="flex items-center gap-2 text-accent">
          <span className="h-px w-6 bg-accent" />
          <span className="font-display text-xs font-medium tabular-nums">{item.no}</span>
        </div>
        <h3 className="mt-2 font-display text-h3 font-semibold leading-tight text-white">
          {item.category}
        </h3>
      </div>
    </div>
  );
}

/* Back face — category, design description, tags, CTA into the work page */
function ShowcaseBack({ item }) {
  return (
    <Link
      href="/work"
      className="card relative flex h-full w-full flex-col justify-between border-accent/30 bg-surface p-5"
    >
      {/* faint render wash for continuity */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
        aria-hidden
      />
      <div className="relative">
        <span className="eyebrow eyebrow-dot inline-flex">{item.category}</span>
        <p className="mt-3 text-sm leading-relaxed text-muted">{item.desc}</p>
      </div>

      <div className="relative">
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-elevated px-2.5 py-1 text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent">
          Explore work <Icon.Arrow width={15} height={15} />
        </span>
      </div>
    </Link>
  );
}
