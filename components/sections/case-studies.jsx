"use client";

import { caseStudies } from "@/lib/content";
import { Icon } from "../icons";
import { Reveal, SectionHeader, Stagger, StaggerItem } from "../ui";
import { TiltCard, Layer } from "../three-d";

export function CaseStudies() {
  return (
    <section id="work" className="border-t border-border bg-surface/40 py-section">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Portfolio · Case studies"
              title="Outcomes, not just deliverables"
              sub="We measure success the way you do — in revenue, hours saved and errors eliminated."
            />
            <a href="#contact" className="btn-ghost shrink-0">
              View all work <Icon.ArrowUpRight width={16} height={16} />
            </a>
          </div>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((cs) => (
            <StaggerItem key={cs.client} className="group perspective-1400">
              <TiltCard
                max={9}
                scale={1.02}
                className="card card-hover flex h-full flex-col overflow-hidden"
              >
                {/* visual header */}
                <div
                  className={`relative h-44 overflow-hidden border-b border-border ${
                    cs.accent === "violet"
                      ? "bg-gradient-to-br from-violet/20 to-violet/5"
                      : "bg-gradient-to-br from-accent/20 to-accent/5"
                  }`}
                >
                  <div className="bg-grid absolute inset-0 opacity-40" />
                  <Layer depth={45} className="absolute inset-0 flex flex-col justify-between p-6">
                    <span className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                      {cs.industry}
                    </span>
                    <div>
                      <div
                        className={`font-display text-4xl font-semibold ${
                          cs.accent === "violet" ? "text-violet" : "text-accent"
                        }`}
                      >
                        {cs.result}
                      </div>
                      <div className="mt-1 text-sm text-muted">{cs.secondary}</div>
                    </div>
                  </Layer>
                </div>
                {/* body */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="text-sm font-medium text-faint">{cs.client}</div>
                  <h3 className="mt-2 font-display text-h3 font-semibold leading-snug text-ink">
                    {cs.title}
                  </h3>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-ink transition-colors group-hover:text-accent">
                    Read case study <Icon.Arrow width={15} height={15} />
                  </span>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
