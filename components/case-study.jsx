"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { work } from "@/lib/content";
import { Mockups } from "./mockups";
import { Icon } from "./icons";
import { Reveal } from "./ui";

export function CaseStudy({ item }) {
  const d = item.detail;
  const Mock = Mockups[item.mockup];
  const others = work.filter((w) => w.slug !== item.slug);

  return (
    <article>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden pt-32 md:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[700px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]"
          aria-hidden
        />
        <div className="container-x relative">
          <nav className="flex items-center gap-2 text-sm text-faint">
            <Link href="/" className="transition-colors hover:text-ink">Home</Link>
            <Icon.Arrow width={13} height={13} />
            <Link href="/case-studies" className="transition-colors hover:text-ink">Case studies</Link>
            <Icon.Arrow width={13} height={13} />
            <span className="text-muted">{item.client}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8"
          >
            <h1 className="font-display text-display font-semibold text-ink">{item.client}</h1>
            <div className="mt-5 flex flex-wrap gap-2">
              {d.services.map((s) => (
                <span key={s} className="chip">{s}</span>
              ))}
            </div>
          </motion.div>

          {/* Cover image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 overflow-hidden rounded-xl3 border border-border"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.cover} alt={item.title} className="aspect-[16/9] w-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* ---------- Context ---------- */}
      <section className="py-section">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow eyebrow-dot inline-flex">Context</span>
              <h2 className="mt-5 font-display text-h2 font-semibold text-ink text-balance">
                {d.contextHeading}
              </h2>
              <p className="mt-5 text-lead text-muted text-pretty">{d.contextIntro}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <dl className="divide-y divide-border rounded-xl2 border border-border bg-surface">
                {d.meta.map((m) => (
                  <div key={m.k} className="flex items-center justify-between px-6 py-4">
                    <dt className="text-sm text-faint">{m.k}</dt>
                    <dd className="text-sm font-medium text-ink">{m.v}</dd>
                  </div>
                ))}
              </dl>
              <a href="#contact" className="btn-ghost mt-5 w-full">
                Start a similar project <Icon.ArrowUpRight width={16} height={16} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Creative concept + mockup ---------- */}
      <section className="border-t border-border bg-surface/40 py-section">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow eyebrow-dot inline-flex">Creation process</span>
            <h2 className="mt-5 max-w-2xl font-display text-h2 font-semibold text-ink">
              {d.conceptHeading}
            </h2>
            <p className="mt-5 max-w-2xl text-lead text-muted">{d.conceptText}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative mt-12">
              <div className="absolute inset-0 -z-10 rounded-xl3 bg-gradient-to-tr from-accent/10 to-violet/10 blur-3xl" />
              {d.shots?.length ? (
                <div className="mx-auto flex max-w-4xl flex-col gap-6">
                  {d.shots.map((src, i) => (
                    <div
                      key={src}
                      className="overflow-hidden rounded-xl3 border border-border shadow-[0_40px_120px_-40px_rgba(0,0,0,0.6)]"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={`${item.client} product shot ${i + 1}`}
                        loading="lazy"
                        className="w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mx-auto max-w-3xl overflow-hidden rounded-xl3 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.6)]">
                  <Mock />
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Marquee word ---------- */}
      <section className="overflow-hidden border-y border-border py-10">
        <div className="flex w-max animate-marquee items-center gap-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-display text-5xl font-semibold uppercase tracking-tight text-elevated [-webkit-text-stroke:1px_rgb(var(--border))] md:text-7xl"
            >
              {d.marquee}
            </span>
          ))}
        </div>
      </section>

      {/* ---------- Metrics ---------- */}
      <section className="py-section">
        <div className="container-x">
          <div className="grid gap-px overflow-hidden rounded-xl2 border border-border bg-border sm:grid-cols-3">
            {d.metrics.map((m) => (
              <Reveal key={m.label} className="bg-surface px-6 py-10 text-center">
                <div className="font-display text-4xl font-semibold text-accent md:text-5xl">
                  {m.value}
                </div>
                <div className="mt-2 text-sm text-muted">{m.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Gallery ---------- */}
      <section className="pb-section">
        <div className="container-x">
          <div className="grid gap-4 md:grid-cols-3">
            {d.gallery.map((src, i) => (
              <Reveal key={src} delay={i * 0.08} className={i === 0 ? "md:col-span-2" : ""}>
                <div className="overflow-hidden rounded-xl2 border border-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`${item.client} gallery ${i + 1}`}
                    loading="lazy"
                    className={`w-full object-cover ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Quote ---------- */}
      <section className="border-t border-border bg-surface/40 py-section">
        <div className="container-x">
          <Reveal>
            <figure className="mx-auto max-w-3xl text-center">
              <div className="flex justify-center gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Icon.Star key={k} width={18} height={18} />
                ))}
              </div>
              <blockquote className="mt-6 font-display text-h2 font-medium leading-snug text-ink text-balance">
                &ldquo;{d.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted">{d.quoteBy}</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ---------- Tools ---------- */}
      <section className="py-section">
        <div className="container-x grid gap-10 md:grid-cols-2">
          <Reveal>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-faint">
              Dev tools
            </h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {d.devTools.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-faint">
              Design tools
            </h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {d.designTools.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Next case studies ---------- */}
      <section className="border-t border-border py-section">
        <div className="container-x">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-display text-h2 font-semibold text-ink">Next case studies</h2>
              <Link href="/case-studies" className="btn-ghost shrink-0">
                All case studies <Icon.ArrowUpRight width={16} height={16} />
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/case-studies/${o.slug}`}
                className="group w-[300px] shrink-0 snap-start"
              >
                <div className="overflow-hidden rounded-xl2 border border-border">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={o.cover}
                    alt={o.client}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-faint">
                  {o.category}
                </div>
                <div className="mt-1 font-display text-h3 font-semibold text-ink transition-colors group-hover:text-accent">
                  {o.client}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
