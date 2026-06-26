"use client";

import { techStack } from "@/lib/content";
import { Reveal, SectionHeader, Stagger, StaggerItem } from "../ui";

export function TechStack() {
  return (
    <section className="py-section">
      <div className="container-x">
        <Reveal>
          <SectionHeader
            eyebrow="Technology stack"
            title="Modern tools, chosen on purpose"
            sub="We pick proven, well-supported technology — never resume-driven fads — so your product stays maintainable for years."
          />
        </Reveal>

        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((cat) => (
            <StaggerItem key={cat.group} className="card p-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-faint">
                {cat.group}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.items.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </StaggerItem>
          ))}
          <StaggerItem className="flex items-center rounded-xl2 border border-dashed border-border p-6">
            <p className="text-sm text-muted">
              <span className="font-medium text-ink">+ more.</span> Stack-agnostic by principle — we
              meet your existing systems where they are.
            </p>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
