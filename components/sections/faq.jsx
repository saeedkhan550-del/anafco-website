"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/lib/content";
import { Icon } from "../icons";
import { Reveal, SectionHeader } from "../ui";

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="border-t border-border bg-surface/40 py-section">
      <div className="container-x grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeader
              eyebrow="FAQ"
              title="Answers before you ask"
              sub="Still curious? We're happy to get into the details on a quick call."
            />
            <a href="#contact" className="btn-primary mt-7">
              Ask us anything <Icon.Arrow width={16} height={16} />
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="divide-y divide-border overflow-hidden rounded-xl2 border border-border bg-surface">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-elevated"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-medium text-ink">{f.q}</span>
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border transition-all duration-300 ${
                        isOpen ? "rotate-45 border-accent/40 bg-accent text-accent-ink" : "text-muted"
                      }`}
                    >
                      <Icon.Plus width={16} height={16} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-muted">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
