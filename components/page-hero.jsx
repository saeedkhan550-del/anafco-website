"use client";

import { motion } from "framer-motion";
import { Icon } from "./icons";

export function PageHero({ eyebrow, title, sub, breadcrumb }) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 md:pt-44 md:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[700px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]"
        aria-hidden
      />
      <div className="container-x relative">
        {breadcrumb && (
          <nav className="mb-6 flex items-center gap-2 text-sm text-faint">
            <a href="/" className="transition-colors hover:text-ink">Home</a>
            <Icon.Arrow width={13} height={13} />
            <span className="text-muted">{breadcrumb}</span>
          </nav>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {eyebrow && <span className="eyebrow eyebrow-dot inline-flex">{eyebrow}</span>}
          <h1 className="mt-4 font-display text-h1 font-semibold text-ink text-balance">{title}</h1>
          {sub && <p className="mt-5 max-w-2xl text-lead text-muted text-pretty">{sub}</p>}
        </motion.div>
      </div>
    </section>
  );
}
