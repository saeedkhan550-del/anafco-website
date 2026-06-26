"use client";

import { industries } from "@/lib/content";
import { Icon } from "../icons";
import { Reveal, SectionHeader, Stagger, StaggerItem } from "../ui";
import { TiltCard } from "../three-d";

export function Industries() {
  return (
    <section id="industries" className="py-section">
      <div className="container-x">
        <Reveal>
          <SectionHeader
            eyebrow="Industries served"
            title="Built for the businesses we know best"
            sub="We go deep in a handful of verticals — so we arrive understanding your workflows, not learning them on your dime."
          />
        </Reveal>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => {
            const Glyph = Icon[ind.icon];
            return (
              <StaggerItem key={ind.title} className="group perspective-1400">
                <TiltCard max={7} scale={1.02} glare={false} className="card card-hover flex h-full flex-col p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent transition-transform group-hover:scale-110">
                    <Glyph width={22} height={22} />
                  </span>
                  <h3 className="mt-5 font-display text-h3 font-semibold text-ink">{ind.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{ind.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more <Icon.Arrow width={14} height={14} />
                  </span>
                </TiltCard>
              </StaggerItem>
            );
          })}
          {/* CTA tile */}
          <StaggerItem className="relative flex flex-col justify-between overflow-hidden rounded-xl2 border border-accent/30 bg-gradient-to-br from-accent/15 to-violet/10 p-7">
            <div>
              <h3 className="font-display text-h3 font-semibold text-ink">Don&apos;t see your industry?</h3>
              <p className="mt-2 text-sm text-muted">
                We adapt fast. Tell us how your business works and we&apos;ll map a solution.
              </p>
            </div>
            <a href="#contact" className="btn-primary mt-6 w-fit">
              Talk to us <Icon.Arrow width={16} height={16} />
            </a>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
