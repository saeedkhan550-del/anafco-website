"use client";

import { process } from "@/lib/content";
import { Icon } from "../icons";
import { Reveal, SectionHeader, Stagger, StaggerItem } from "../ui";

export function Process() {
  return (
    <section id="process" className="border-t border-border bg-surface/40 py-section">
      <div className="container-x">
        <Reveal>
          <SectionHeader
            eyebrow="How we work"
            title="A process built on momentum"
            sub="No black boxes. You see working software every week and steer the roadmap the whole way through."
          />
        </Reveal>

        <Stagger className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step, idx) => {
            const Glyph = Icon[step.icon];
            return (
              <StaggerItem key={step.no} className="relative">
                {/* connector */}
                {idx < process.length - 1 && (
                  <div className="absolute left-[60px] top-7 hidden h-px w-[calc(100%-40px)] bg-gradient-to-r from-border to-transparent lg:block" />
                )}
                <div className="card card-hover h-full p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-canvas text-accent">
                      <Glyph width={22} height={22} />
                    </span>
                    <span className="font-display text-3xl font-semibold text-elevated [-webkit-text-stroke:1px_rgb(var(--border))]">
                      {step.no}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-h3 font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
