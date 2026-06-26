"use client";

import { solutions } from "@/lib/content";
import { Icon } from "../icons";
import { Reveal, SectionHeader } from "../ui";

export function Solutions() {
  return (
    <section id="solutions" className="border-t border-border bg-surface/40 py-section">
      <div className="container-x">
        <Reveal>
          <SectionHeader
            eyebrow="Featured solutions"
            title="Products we've productized"
            sub="Two flagship platforms born from real client work — now battle-tested and ready to adapt to your business."
          />
        </Reveal>

        <div className="mt-14 flex flex-col gap-6">
          {solutions.map((sol, idx) => (
            <Reveal key={sol.title} delay={idx * 0.05}>
              <div
                className={`card grid items-center gap-8 overflow-hidden p-6 md:p-10 lg:grid-cols-2 ${
                  idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Copy */}
                <div>
                  <span className="eyebrow eyebrow-dot inline-flex">{sol.tag}</span>
                  <h3 className="mt-4 font-display text-h2 font-semibold text-ink">{sol.title}</h3>
                  <p className="mt-3 max-w-md text-muted">{sol.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {sol.features.map((f) => (
                      <span key={f} className="chip">{f}</span>
                    ))}
                  </div>
                  <a href="#contact" className="btn-ghost mt-7">
                    Explore {sol.title} <Icon.ArrowUpRight width={16} height={16} />
                  </a>
                </div>

                {/* Visual */}
                <div className="relative">
                  <div className="absolute inset-0 -z-10 rounded-xl3 bg-gradient-to-tr from-accent/10 to-violet/10 blur-2xl" />
                  <div className="rounded-xl3 border border-border bg-canvas p-8">
                    <div className="flex items-end justify-between">
                      <div>
                        <div className="font-display text-5xl font-semibold text-accent">
                          {sol.metric.value}
                        </div>
                        <div className="mt-1 text-sm text-muted">{sol.metric.label}</div>
                      </div>
                      <span className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-surface text-violet">
                        <Icon.Bolt width={22} height={22} />
                      </span>
                    </div>
                    <div className="mt-8 space-y-3">
                      {sol.features.map((f, k) => (
                        <div key={f} className="flex items-center gap-3">
                          <div className="h-2 flex-1 overflow-hidden rounded-full bg-elevated">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-accent to-violet"
                              style={{ width: `${70 + k * 7}%` }}
                            />
                          </div>
                          <span className="w-28 shrink-0 text-xs text-faint">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
