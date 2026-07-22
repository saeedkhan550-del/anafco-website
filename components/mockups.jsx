"use client";

import { motion } from "framer-motion";
import { Icon } from "./icons";

/* ============================================================
   Animated, theme-aware product mockups (pure CSS/SVG).
   Used across the Work showcase and feature sections.
   Each renders inside a parent that controls sizing.
   ============================================================ */

/* Shared window chrome */
function Chrome({ label, children, className = "" }) {
  return (
    <div className={`overflow-hidden rounded-xl2 border border-border bg-surface ${className}`}>
      <div className="flex items-center gap-2 border-b border-border bg-elevated/60 px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-faint/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-faint/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-faint/40" />
        {label && (
          <div className="ml-2 flex h-5 flex-1 items-center rounded-md bg-canvas px-2 text-[10px] text-faint">
            {label}
          </div>
        )}
      </div>
      {children}
    </div>
  );
}

/* 1) Company Website — hero landing layout */
export function WebsiteMockup() {
  return (
    <Chrome label="anafcotech.com">
      <div className="relative p-5">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-32 w-56 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
          aria-hidden
        />
        <div className="relative flex items-center justify-between">
          <div className="h-3 w-16 rounded bg-ink/80" />
          <div className="flex gap-2">
            {[0, 1, 2].map((k) => (
              <div key={k} className="h-2 w-8 rounded bg-elevated" />
            ))}
            <div className="h-2 w-10 rounded bg-accent" />
          </div>
        </div>
        <div className="relative mt-8 flex flex-col items-center gap-2.5 text-center">
          <div className="h-4 w-3/5 rounded bg-ink/80" />
          <div className="h-4 w-2/5 rounded bg-accent/70" />
          <div className="mt-1 h-2 w-2/3 rounded bg-elevated" />
          <div className="h-2 w-1/2 rounded bg-elevated" />
          <div className="mt-2 flex gap-2">
            <div className="h-6 w-20 rounded-full bg-accent" />
            <div className="h-6 w-20 rounded-full border border-border" />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2.5">
          {[0, 1, 2].map((k) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + k * 0.1 }}
              className="rounded-lg border border-border bg-canvas p-2.5"
            >
              <div className="h-5 w-5 rounded bg-accent/20" />
              <div className="mt-2 h-1.5 w-full rounded bg-elevated" />
              <div className="mt-1 h-1.5 w-2/3 rounded bg-elevated" />
            </motion.div>
          ))}
        </div>
      </div>
    </Chrome>
  );
}

/* 2) Mobile App — phone frame with chart + nav */
export function MobileMockup() {
  return (
    <div className="flex justify-center">
      <div className="relative w-[180px] rounded-[2rem] border-[6px] border-elevated bg-surface p-2 shadow-2xl">
        <div className="absolute left-1/2 top-2 h-1.5 w-12 -translate-x-1/2 rounded-full bg-elevated" />
        <div className="overflow-hidden rounded-[1.4rem] bg-canvas">
          <div className="flex items-center justify-between px-4 pt-6 pb-2">
            <div className="h-2.5 w-14 rounded bg-ink/80" />
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-accent to-violet" />
          </div>
          <div className="px-4">
            <div className="rounded-xl bg-gradient-to-br from-accent to-violet p-3 text-accent-ink">
              <div className="text-[9px] opacity-80">Balance</div>
              <div className="font-display text-lg font-bold">$48,250</div>
            </div>
            <div className="mt-3 flex items-end gap-1.5 h-16">
              {[40, 65, 50, 80, 60, 95, 72].map((h, k) => (
                <motion.div
                  key={k}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + k * 0.07, duration: 0.5 }}
                  className={`flex-1 rounded-sm ${k === 5 ? "bg-accent" : "bg-elevated"}`}
                />
              ))}
            </div>
            <div className="mt-3 space-y-2 pb-4">
              {[0, 1].map((k) => (
                <div key={k} className="flex items-center gap-2 rounded-lg border border-border p-2">
                  <div className="h-6 w-6 rounded-full bg-accent/15" />
                  <div className="flex-1">
                    <div className="h-1.5 w-2/3 rounded bg-elevated" />
                    <div className="mt-1 h-1.5 w-1/3 rounded bg-elevated" />
                  </div>
                  <div className="h-2 w-6 rounded bg-accent/40" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-around border-t border-border py-2.5">
            {[0, 1, 2, 3].map((k) => (
              <div key={k} className={`h-2 w-2 rounded-full ${k === 0 ? "bg-accent" : "bg-elevated"}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* 3) Web App — full dashboard (also used as hero visual) */
export function DashboardMockup({ animated = true }) {
  return (
    <Chrome label="app.anafcotech.com/dashboard">
      <div className="grid grid-cols-12 gap-3 p-4">
        <div className="col-span-3 hidden flex-col gap-2 sm:flex">
          <div className="h-6 w-full rounded-md bg-accent/15" />
          {Array.from({ length: 5 }).map((_, k) => (
            <div key={k} className="h-5 w-full rounded-md bg-elevated" />
          ))}
        </div>
        <div className="col-span-12 flex flex-col gap-3 sm:col-span-9">
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { l: "Revenue", v: "$48.2k", c: "text-accent" },
              { l: "Active", v: "1,284", c: "text-ink" },
              { l: "Uptime", v: "99.9%", c: "text-violet" },
            ].map((m) => (
              <div key={m.l} className="rounded-lg border border-border bg-canvas p-2.5">
                <div className="text-[10px] text-faint">{m.l}</div>
                <div className={`mt-0.5 font-display text-sm font-semibold ${m.c}`}>{m.v}</div>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-border bg-canvas p-3">
            <div className="flex items-end gap-1.5 h-24">
              {[40, 62, 48, 75, 58, 88, 70, 96, 80, 92].map((h, k) => {
                const Bar = animated ? motion.div : "div";
                const props = animated
                  ? {
                      initial: { height: 0 },
                      whileInView: { height: `${h}%` },
                      viewport: { once: true },
                      transition: { duration: 0.6, delay: k * 0.04 },
                    }
                  : { style: { height: `${h}%` } };
                return (
                  <Bar
                    key={k}
                    {...props}
                    className={`flex-1 rounded-t-sm ${k % 3 === 0 ? "bg-accent" : "bg-elevated"}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Chrome>
  );
}

/* 4) Premium Storefront — product grid + cart */
export function StorefrontMockup() {
  return (
    <Chrome label="shop.anafcotech.com">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="h-3 w-16 rounded bg-ink/80" />
          <div className="flex items-center gap-2">
            <div className="h-5 w-24 rounded-full bg-elevated" />
            <div className="relative grid h-6 w-6 place-items-center rounded-full bg-accent/15">
              <Icon.Retail width={13} height={13} className="text-accent" />
              <span className="absolute -right-1 -top-1 grid h-3.5 w-3.5 place-items-center rounded-full bg-accent text-[8px] font-bold text-accent-ink">
                3
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2.5">
          {[0, 1, 2, 3, 4, 5].map((k) => (
            <motion.div
              key={k}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: k * 0.06 }}
              className="overflow-hidden rounded-lg border border-border bg-canvas"
            >
              <div
                className={`h-12 ${
                  k % 3 === 0
                    ? "bg-gradient-to-br from-accent/30 to-accent/5"
                    : k % 3 === 1
                    ? "bg-gradient-to-br from-violet/30 to-violet/5"
                    : "bg-elevated"
                }`}
              />
              <div className="p-1.5">
                <div className="h-1.5 w-3/4 rounded bg-elevated" />
                <div className="mt-1 flex items-center justify-between">
                  <div className="h-2 w-8 rounded bg-accent/50" />
                  <div className="h-3 w-3 rounded bg-accent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Chrome>
  );
}

/* 5) Web3 App — wallet / on-chain dashboard */
export function Web3Mockup() {
  return (
    <Chrome label="app.anafcotech.com/vault">
      <div className="relative p-4">
        <div
          className="pointer-events-none absolute right-0 top-0 h-24 w-32 rounded-full bg-violet/30 blur-3xl"
          aria-hidden
        />
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-violet to-accent" />
            <div>
              <div className="h-2 w-16 rounded bg-ink/70" />
              <div className="mt-1 h-1.5 w-10 rounded bg-elevated" />
            </div>
          </div>
          <div className="rounded-full border border-violet/40 bg-violet/10 px-2.5 py-1 text-[9px] font-medium text-violet">
            0x7a…4f2c
          </div>
        </div>
        <div className="relative mt-4 rounded-xl border border-border bg-canvas p-3">
          <div className="text-[10px] text-faint">Total value locked</div>
          <div className="font-display text-2xl font-bold text-ink">142.8 ETH</div>
          <div className="mt-1 flex items-center gap-1 text-[10px] text-accent">
            <Icon.Scale width={11} height={11} /> +12.4% this week
          </div>
        </div>
        <div className="relative mt-3 space-y-2">
          {[
            { n: "Staking", p: 68, c: "from-accent to-accent" },
            { n: "Liquidity", p: 44, c: "from-violet to-violet" },
            { n: "Rewards", p: 86, c: "from-accent to-violet" },
          ].map((r, k) => (
            <div key={r.n} className="flex items-center gap-2">
              <span className="w-14 shrink-0 text-[10px] text-muted">{r.n}</span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-elevated">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${r.p}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + k * 0.1, duration: 0.6 }}
                  className={`h-full rounded-full bg-gradient-to-r ${r.c}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Chrome>
  );
}

/* Registry for data-driven rendering */
export const Mockups = {
  website: WebsiteMockup,
  mobile: MobileMockup,
  webapp: DashboardMockup,
  storefront: StorefrontMockup,
  web3: Web3Mockup,
};
