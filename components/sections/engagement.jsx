"use client";

import { motion } from "framer-motion";
import { engagement } from "@/lib/content";
import { Icon } from "../icons";

export function Engagement() {
  const [a, b] = engagement;

  return (
    <section className="relative overflow-hidden border-t border-border py-section">
      <div className="container-x">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="eyebrow eyebrow-dot inline-flex justify-center">Engagement models</span>
          <h2 className="mt-6 font-display font-semibold uppercase leading-[0.86] tracking-[-0.03em] text-ink text-[clamp(2.5rem,6vw,5rem)]">
            Two ways to work
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lead text-muted text-pretty">
            Whether you need a product built end-to-end or senior talent embedded in your team,
            there&apos;s a clear path in.
          </p>
        </motion.div>

        {/* Overlapping panels */}
        <div className="relative mt-16 lg:mt-24">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-0">
            {/* Panel 01 — light */}
            <motion.article
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative z-10 overflow-hidden rounded-xl3 border border-border bg-surface p-9 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.6)] transition-transform duration-500 hover:-translate-y-2 md:p-12 lg:mr-[-3rem] lg:py-16"
            >
              <PanelInner item={a} index={0} tone="light" />
            </motion.article>

            {/* Center connector */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 180 }}
                className="grid h-20 w-20 place-items-center rounded-full border border-border bg-canvas shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-accent text-accent-ink">
                  <Icon.Plus width={22} height={22} />
                </span>
              </motion.div>
            </div>

            {/* Panel 02 — ANAFCO green */}
            <motion.article
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative z-20 overflow-hidden rounded-xl3 bg-accent p-9 text-accent-ink shadow-[0_40px_120px_-40px_rgba(132,204,22,0.5)] transition-transform duration-500 hover:-translate-y-2 md:p-12 lg:ml-[-3rem] lg:py-20"
            >
              {/* subtle texture */}
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-black/5 blur-2xl"
                aria-hidden
              />
              <PanelInner item={b} index={1} tone="dark" />
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}

function PanelInner({ item, index, tone }) {
  const muted = tone === "dark" ? "text-accent-ink/70" : "text-muted";
  const numberCls =
    tone === "dark"
      ? "text-accent-ink/30"
      : "text-elevated [-webkit-text-stroke:1px_rgb(var(--border))]";
  const checkBg = tone === "dark" ? "bg-accent-ink/15 text-accent-ink" : "bg-accent/15 text-accent";

  return (
    <div className="relative">
      <span className={`font-display text-7xl font-semibold leading-none md:text-8xl ${numberCls}`}>
        {item.no}
      </span>
      <h3 className="mt-6 font-display text-h1 font-semibold uppercase leading-[0.9] tracking-[-0.02em]">
        {item.title}
      </h3>
      <p className={`mt-5 max-w-md text-lead ${muted}`}>{item.desc}</p>
      <ul className="mt-8 space-y-3.5">
        {item.points.map((p) => (
          <li key={p} className="flex items-center gap-3 text-base font-medium">
            <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full ${checkBg}`}>
              <Icon.Check width={15} height={15} />
            </span>
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}
