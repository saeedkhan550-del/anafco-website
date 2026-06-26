"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/lib/content";
import { Icon } from "../icons";
import { TiltCard, Layer } from "../three-d";

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="relative overflow-hidden border-t border-border py-section">
      <div
        className="pointer-events-none absolute -right-40 top-1/4 h-[460px] w-[460px] rounded-full bg-violet/10 blur-[150px]"
        aria-hidden
      />
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — editorial heading + active image preview */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow eyebrow-dot inline-flex">What we do</span>
              <h2 className="mt-6 font-display font-semibold uppercase leading-[0.84] tracking-[-0.03em] text-ink text-[clamp(3rem,7vw,6rem)]">
                <span className="block">Our</span>
                <span className="block">Services</span>
              </h2>
              <p className="mt-8 max-w-sm text-lead text-muted text-pretty">
                From first prototype to production at scale, we cover the full software lifecycle —
                so you never have to stitch together five vendors.
              </p>

              {/* Floating 3D image preview of the active service */}
              <div className="group mt-10 hidden perspective-1400 lg:block">
                <TiltCard
                  max={11}
                  scale={1.02}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl3 border border-border shadow-[0_40px_100px_-50px_rgba(0,0,0,0.8)]"
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={services[active].no}
                      src={services[active].image}
                      alt={services[active].title}
                      initial={{ opacity: 0, scale: 1.06 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" aria-hidden />
                  <Layer depth={50} className="absolute bottom-0 left-0 p-6">
                    <span className="font-display text-sm font-medium text-accent">
                      {services[active].no}
                    </span>
                    <div className="mt-1 font-display text-h3 font-semibold text-white">
                      {services[active].title}
                    </div>
                  </Layer>
                </TiltCard>
              </div>
            </div>
          </div>

          {/* Right — stacked accordion service panels */}
          <div className="lg:col-span-7">
            <div className="flex flex-col">
              {services.map((s, i) => {
                const Glyph = Icon[s.icon];
                const isActive = active === i;
                return (
                  <motion.div
                    key={s.no}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`group relative cursor-pointer border-t border-border transition-colors last:border-b ${
                      isActive ? "border-accent/40" : ""
                    }`}
                  >
                    {/* sliding accent fill */}
                    <span
                      className={`pointer-events-none absolute left-0 top-0 h-full w-1 origin-top bg-accent transition-transform duration-500 ${
                        isActive ? "scale-y-100" : "scale-y-0"
                      }`}
                      aria-hidden
                    />
                    <div className="flex items-center gap-5 py-6 md:py-7">
                      <span
                        className={`font-display text-2xl font-semibold tabular-nums transition-colors duration-300 md:text-3xl ${
                          isActive ? "text-accent" : "text-faint"
                        }`}
                      >
                        {s.no}
                      </span>
                      <span
                        className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl border transition-all duration-300 ${
                          isActive
                            ? "border-accent/40 bg-accent text-accent-ink"
                            : "border-border bg-surface text-muted"
                        }`}
                      >
                        <Glyph width={20} height={20} />
                      </span>
                      <h3
                        className={`flex-1 font-display text-h3 font-semibold transition-all duration-300 ${
                          isActive ? "text-ink lg:translate-x-1" : "text-muted"
                        }`}
                      >
                        {s.title}
                      </h3>
                      <span
                        className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                          isActive
                            ? "rotate-90 border-accent/40 text-accent"
                            : "border-border text-faint"
                        }`}
                      >
                        <Icon.Arrow width={16} height={16} />
                      </span>
                    </div>

                    {/* Expanding body */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="flex flex-col gap-5 pb-7 pl-[4.5rem] md:flex-row md:items-start">
                            <p className="flex-1 text-sm leading-relaxed text-muted">{s.desc}</p>
                            <ul className="flex shrink-0 flex-col gap-2 md:w-56">
                              {s.points.map((p) => (
                                <li key={p} className="flex items-center gap-2.5 text-sm text-muted">
                                  <Icon.Check width={15} height={15} className="text-accent" />
                                  {p}
                                </li>
                              ))}
                            </ul>
                          </div>
                          {/* mobile image */}
                          <div className="mb-7 ml-[4.5rem] overflow-hidden rounded-xl2 border border-border lg:hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={s.image}
                              alt={s.title}
                              loading="lazy"
                              className="aspect-[16/9] w-full object-cover"
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
