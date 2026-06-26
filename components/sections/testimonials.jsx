"use client";

import { testimonials } from "@/lib/content";
import { Icon } from "../icons";
import { Reveal, SectionHeader, Stagger, StaggerItem } from "../ui";

export function Testimonials() {
  return (
    <section className="py-section">
      <div className="container-x">
        <Reveal>
          <SectionHeader
            align="center"
            eyebrow="Testimonials"
            title="The teams we build for"
            sub="A 5.0 average rating isn't an accident — it's what happens when software actually delivers."
          />
        </Reveal>

        <Stagger className="mt-14 columns-1 gap-6 md:columns-2 lg:columns-2 [&>*]:mb-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name} className="break-inside-avoid">
              <figure className="card p-7">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Icon.Star key={k} width={16} height={16} />
                  ))}
                </div>
                <blockquote className="mt-5 text-lead leading-relaxed text-ink text-pretty">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-accent to-violet font-display text-sm font-semibold text-accent-ink">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                  <div>
                    <div className="text-sm font-medium text-ink">{t.name}</div>
                    <div className="text-sm text-muted">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
