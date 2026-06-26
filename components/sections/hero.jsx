"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "../icons";
import { Counter, Magnetic } from "../ui";
import { stats } from "@/lib/content";

const ROTATING = ["your store.", "your billing.", "your restaurant.", "your operations.", "your cloud."];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ROTATING.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden">
      {/* Background grid + ambient glows */}
      <div className="pointer-events-none absolute inset-0 bg-grid" aria-hidden />
      <div
        className="pointer-events-none absolute -left-24 top-24 h-[460px] w-[620px] rounded-full bg-accent/20 blur-[130px] animate-glow-pulse"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 top-1/3 h-[440px] w-[440px] rounded-full bg-violet/20 blur-[120px]"
        aria-hidden
      />

      {/* Right full-bleed video (desktop) — edges masked so it melts into the background */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[60%] lg:block">
        <HeroVideo className="h-full w-full" />
        <FloatingChip
          className="left-[16%] top-[24%]"
          icon="Bolt"
          tone="accent"
          title="Deployed"
          sub="in 9 weeks"
          delay={1}
        />
        <FloatingChip
          className="right-[12%] bottom-[18%]"
          icon="Shield"
          tone="violet"
          title="99.98% uptime"
          sub="production-grade"
          delay={1.15}
        />
      </div>

      <div className="container-x relative z-10">
        <div className="grid items-center gap-12 pb-20 pt-32 md:pt-40 lg:min-h-[90vh] lg:grid-cols-2 lg:gap-8 lg:py-0">
          {/* Left — heading + copy */}
          <div className="max-w-xl">
            <motion.a
              href="#work"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex w-fit items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-[13px] text-muted backdrop-blur transition-colors hover:border-accent/40 hover:text-ink"
            >
              <span className="inline-flex items-center gap-1.5 font-medium text-accent">
                <Icon.Star width={13} height={13} /> 5.0
              </span>
              <span className="h-3 w-px bg-border" />
              Trusted by 120+ businesses worldwide
              <Icon.Arrow width={14} height={14} />
            </motion.a>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 font-display text-display font-semibold leading-[0.98] text-ink"
            >
              Software that runs
              <br />
              <span className="relative inline-flex min-w-[6ch]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={ROTATING[i]}
                    initial={{ opacity: 0, y: "0.4em", rotateX: -40 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: "-0.4em", rotateX: 40 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="bg-gradient-to-r from-accent to-violet bg-clip-text text-transparent"
                  >
                    {ROTATING[i]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 max-w-lg text-lead text-muted text-pretty"
            >
              We design and build SaaS products, POS systems, ISP billing platforms,
              AI automation and cloud — beautifully engineered software that ambitious
              businesses run on, shipped in weeks, not quarters.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
            >
              <Magnetic>
                <a href="#contact" className="btn-primary">
                  Start a project <Icon.Arrow width={16} height={16} />
                </a>
              </Magnetic>
              <a href="#work" className="btn-ghost">
                See our work <Icon.ArrowUpRight width={16} height={16} />
              </a>
            </motion.div>

            {/* Inline stats — borderless so nothing reads as a separate box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-12 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-semibold text-ink md:text-3xl">
                    <Counter to={s.value} suffix={s.suffix} decimals={s.decimals || 0} />
                  </div>
                  <div className="mt-1 text-xs text-muted">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — inline video for mobile/tablet (desktop uses the full-bleed one) */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden"
          >
            <HeroVideo className="aspect-video w-full" rounded />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* Hero video — edges fade into the page so there's no visible border.
   Desktop (rounded=false): masked left edge + canvas-color top/bottom fades,
   right edge bleeds off-screen. Mobile (rounded=true): soft rounded panel. */
function HeroVideo({ className = "", rounded = false }) {
  return (
    <div className={`relative overflow-hidden ${rounded ? "rounded-xl3" : ""} ${className}`}>
      <video
        className="h-full w-full object-cover"
        src="/work/hero.mp4"
        poster="/work/hero.png"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        style={
          rounded
            ? undefined
            : {
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 28%)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, rgba(0,0,0,1) 28%)",
              }
        }
      />

      {rounded ? (
        // Mobile: subtle bottom fade into the page, no hard border
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-canvas/80 to-transparent"
          aria-hidden
        />
      ) : (
        <>
          {/* Top & bottom dissolve into the canvas background */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-canvas to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-canvas to-transparent"
            aria-hidden
          />
          {/* Left edge blends behind the text for extra seamlessness */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-canvas to-transparent"
            aria-hidden
          />
          {/* Faint brand tint to tie the video to the palette */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-accent/10 to-violet/10 mix-blend-overlay"
            aria-hidden
          />
        </>
      )}
    </div>
  );
}

const CHIP_TONE = {
  accent: "bg-accent/15 text-accent",
  violet: "bg-violet/15 text-violet",
};

/* Floating depth chip — gentle infinite float keeps the hero feeling 3D/alive */
function FloatingChip({ className = "", icon, tone = "accent", title, sub, delay = 1 }) {
  const Glyph = Icon[icon];
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { delay, duration: 0.5 },
        scale: { delay, duration: 0.5 },
        y: { delay: delay + 0.5, duration: 5, repeat: Infinity, ease: "easeInOut" },
      }}
      className={`absolute z-10 rounded-xl border border-border bg-surface/80 p-3 shadow-xl backdrop-blur ${className}`}
    >
      <div className="flex items-center gap-2">
        <span className={`grid h-8 w-8 place-items-center rounded-lg ${CHIP_TONE[tone]}`}>
          <Glyph width={16} height={16} />
        </span>
        <div>
          <div className="text-xs font-medium text-ink">{title}</div>
          <div className="text-[11px] text-faint">{sub}</div>
        </div>
      </div>
    </motion.div>
  );
}
