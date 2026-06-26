"use client";

import { awards, clientGroups } from "@/lib/content";
import { Icon } from "../icons";
import { Reveal, SectionHeader, Stagger, StaggerItem } from "../ui";

export function Awards() {
  return (
    <section className="border-t border-border bg-surface/40 py-section">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        {/* Awards */}
        <div className="lg:col-span-7">
          <Reveal>
            <SectionHeader eyebrow="Recognition" title="Our awards" />
          </Reveal>
          <Stagger className="mt-10 divide-y divide-border border-t border-border">
            {awards.map((a, i) => (
              <StaggerItem
                key={`${a.name}-${i}`}
                className="flex items-center justify-between gap-4 py-5"
              >
                <div className="flex items-center gap-5">
                  <span className="font-display text-sm font-medium text-faint">{a.year}</span>
                  <span className="font-display text-h3 font-semibold text-ink">{a.name}</span>
                </div>
                <span className="flex items-center gap-2 text-sm text-muted">
                  <Icon.Star width={14} height={14} className="text-accent" />
                  {a.result}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Clients */}
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeader eyebrow="Partners" title="Clients we build for" />
          </Reveal>
          <div className="mt-10 space-y-6">
            {clientGroups.map((g) => (
              <Reveal key={g.group}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-faint">
                  {g.group}
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.names.map((n) => (
                    <span key={n} className="chip">{n}</span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
