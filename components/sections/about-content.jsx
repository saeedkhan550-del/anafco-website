"use client";

import { about, stats } from "@/lib/content";
import { Icon } from "../icons";
import { Counter, Reveal, SectionHeader, Stagger, StaggerItem } from "../ui";

export function AboutContent() {
  return (
    <>
      {/* Story + stats */}
      <section className="py-section">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-lead text-ink text-pretty">{about.intro}</p>
            </Reveal>
            <div className="mt-8 space-y-5">
              {about.story.map((p, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <p className="text-muted leading-relaxed">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl2 border border-border bg-border">
                {stats.map((s) => (
                  <div key={s.label} className="bg-surface px-6 py-7 text-center">
                    <div className="font-display text-3xl font-semibold text-ink">
                      <Counter to={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
                    </div>
                    <div className="mt-1.5 text-sm text-muted">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border bg-surface/40 py-section">
        <div className="container-x">
          <Reveal>
            <SectionHeader eyebrow="What we value" title="How we work, distilled" />
          </Reveal>
          <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((v) => {
              const Glyph = Icon[v.icon];
              return (
                <StaggerItem key={v.title} className="card card-hover group flex flex-col p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent transition-transform group-hover:scale-110">
                    <Glyph width={22} height={22} />
                  </span>
                  <h3 className="mt-5 font-display text-h3 font-semibold text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{v.desc}</p>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Team */}
      <section className="py-section">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              eyebrow="The team"
              title="The people behind the work"
              sub="A senior, multidisciplinary team that treats your product like our own."
            />
          </Reveal>
          <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {about.team.map((m) => (
              <StaggerItem key={m.name} className="group">
                <div className="relative aspect-square overflow-hidden rounded-xl2 border border-border bg-elevated">
                  {/* Initials placeholder shown until the real photo loads */}
                  <span className="absolute inset-0 grid place-items-center font-display text-4xl font-semibold text-faint">
                    {m.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={m.photo}
                    alt={m.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                </div>
                <h3 className="mt-4 font-display text-h3 font-semibold text-ink">{m.name}</h3>
                <p className="text-sm text-muted">{m.role}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Milestones */}
      <section className="border-t border-border bg-surface/40 py-section">
        <div className="container-x">
          <Reveal>
            <SectionHeader eyebrow="Our journey" title="Milestones" />
          </Reveal>
          <Stagger className="mt-14 border-t border-border">
            {about.milestones.map((m) => (
              <StaggerItem
                key={m.year}
                className="flex flex-col gap-1 border-b border-border py-6 md:flex-row md:items-center md:gap-10"
              >
                <span className="font-display text-2xl font-semibold text-accent md:w-24">
                  {m.year}
                </span>
                <span className="text-muted md:text-lg">{m.text}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
