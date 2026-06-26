"use client";

import { edge } from "@/lib/content";
import { Icon } from "../icons";
import { Reveal, SectionHeader, Stagger, StaggerItem } from "../ui";
import { TiltCard, Layer } from "../three-d";

export function Edge() {
  return (
    <section className="border-t border-border bg-surface/40 py-section">
      <div className="container-x">
        <Reveal>
          <SectionHeader
            eyebrow="Our edge"
            title="Why teams choose ANAFCO"
            sub="The difference between software that ships and software that wins is rarely the code alone."
          />
        </Reveal>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {edge.map((e, i) => {
            const Glyph = Icon[e.icon];
            return (
              <StaggerItem key={e.title} className="group perspective-1400">
                <TiltCard
                  max={11}
                  scale={1.03}
                  className="relative isolate flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-xl2 border border-border p-6"
                >
                  {/* Portrait image — replace e.image in lib/content.js with your own */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={e.image}
                    alt={e.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[800ms] group-hover:scale-105"
                  />
                  {/* Dark gradient for legibility */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20"
                    aria-hidden
                  />
                  {/* Index */}
                  <Layer depth={30} className="absolute right-5 top-5 font-display text-sm font-medium text-white/70">
                    0{i + 1}
                  </Layer>
                  {/* Icon */}
                  <Layer depth={60} className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white backdrop-blur transition-colors group-hover:bg-accent group-hover:text-accent-ink">
                    <Glyph width={20} height={20} />
                  </Layer>

                  <Layer depth={45} className="relative">
                    <h3 className="font-display text-h3 font-semibold text-white">{e.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/70">{e.desc}</p>
                  </Layer>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
