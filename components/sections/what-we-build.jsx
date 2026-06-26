"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { whatWeBuild } from "@/lib/content";
import { Icon } from "../icons";
import { TiltCard, Layer } from "../three-d";

// Asymmetric layout recipe per panel — varying width, height, alignment, overlap.
const LAYOUT = [
  { w: "lg:w-[92%]", h: "h-[360px] md:h-[440px]", align: "lg:self-end", pull: "" },
  { w: "lg:w-[80%]", h: "h-[300px] md:h-[340px]", align: "lg:self-start", pull: "lg:-mt-12" },
  { w: "lg:w-[96%]", h: "h-[380px] md:h-[460px]", align: "lg:self-end", pull: "lg:-mt-8" },
  { w: "lg:w-[74%]", h: "h-[280px] md:h-[320px]", align: "lg:self-start", pull: "lg:-mt-14" },
];

export function WhatWeBuild() {
  return (
    <section className="relative overflow-hidden border-t border-border py-section">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[140px]"
        aria-hidden
      />
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Left — oversized editorial headline (sticky) */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="eyebrow eyebrow-dot inline-flex"
              >
                What we build
              </motion.span>

              <h2 className="mt-6 font-display font-semibold uppercase leading-[0.84] tracking-[-0.03em] text-ink text-[clamp(3.25rem,8.5vw,7.5rem)]">
                {["What", "We", "Build"].map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="block"
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 max-w-sm text-lead text-muted text-pretty"
              >
                We focus on the intersection of high-end design and technical depth — where our
                work creates the most value for ambitious businesses.
              </motion.p>

              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                href="#services"
                className="btn-ghost mt-9"
              >
                Explore services <Icon.Arrow width={16} height={16} />
              </motion.a>
            </div>
          </div>

          {/* Right — floating, overlapping image panels */}
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-7 lg:gap-0">
              {whatWeBuild.map((item, i) => (
                <BuildPanel key={item.no} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BuildPanel({ item, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // subtle parallax, alternating direction
  const dir = index % 2 === 0 ? 1 : -1;
  const y = useTransform(scrollYProgress, [0, 1], [22 * dir, -22 * dir]);
  const L = LAYOUT[index % LAYOUT.length];

  return (
    <div ref={ref} className={`${L.w} ${L.align} ${L.pull} perspective-1400`}>
      <motion.article
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="group relative"
      >
        <motion.div style={{ y }} className="will-change-transform">
          <TiltCard
            max={10}
            scale={1.02}
            className={`relative ${L.h} overflow-hidden rounded-xl3 border border-border shadow-[0_30px_80px_-45px_rgba(0,0,0,0.7)] transition-shadow duration-500 group-hover:shadow-[0_55px_130px_-45px_rgba(0,0,0,0.85)]`}
          >
            {/* Portfolio image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10"
              aria-hidden
            />

            {/* Giant outline number */}
            <span className="absolute right-6 top-4 font-display text-7xl font-semibold leading-none text-white/10 [-webkit-text-stroke:1px_rgba(255,255,255,0.25)] transition-colors duration-500 group-hover:text-accent/20">
              {item.no}
            </span>

            {/* Content — lifted forward in 3D for parallax depth */}
            <Layer depth={45} className="absolute inset-x-0 bottom-0 p-7 md:p-9">
              <div className="flex items-center gap-2 text-accent">
                <span className="h-px w-8 bg-accent" />
                <span className="text-xs font-medium uppercase tracking-[0.18em]">
                  {`0${index + 1}`}
                </span>
              </div>
              <h3 className="mt-3 font-display text-h2 font-semibold leading-tight text-white">
                {item.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70 transition-all duration-500 lg:max-h-0 lg:translate-y-2 lg:overflow-hidden lg:opacity-0 lg:group-hover:max-h-32 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                {item.desc}
              </p>
            </Layer>
          </TiltCard>
        </motion.div>
      </motion.article>
    </div>
  );
}
