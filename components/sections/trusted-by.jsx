"use client";

import { brands } from "../brand-logos";

// Split the roster into two rows that scroll in opposite directions
// (Wondermaker-style): top row right→left, bottom row left→right.
const half = Math.ceil(brands.length / 2);
const rowTop = brands.slice(0, half);
const rowBottom = brands.slice(half);

export function TrustedBy() {
  return (
    <section className="border-y border-border bg-surface/40 py-12">
      <div className="container-x">
        <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-faint">
          Trusted by teams across retail, hospitality, finance & telecom
        </p>
      </div>

      <div className="mt-9 flex flex-col gap-6">
        {/* Upper line — scrolls right → left */}
        <MarqueeRow items={rowTop} direction="left" />
        {/* Lower line — scrolls left → right */}
        <MarqueeRow items={rowBottom} direction="right" />
      </div>
    </section>
  );
}

function MarqueeRow({ items, direction }) {
  // Duplicate the row so the loop is seamless (animation translates -50%).
  const loop = [...items, ...items];
  const animClass =
    direction === "right" ? "animate-marquee-reverse" : "animate-marquee";

  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
      <div className={`flex w-max items-center ${animClass}`}>
        {loop.map(({ name, src }, i) => (
          <div key={`${name}-${i}`} className="flex items-center">
            <span className="flex h-9 items-center px-9">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={name}
                loading="lazy"
                className="h-7 w-auto max-w-[150px] object-contain opacity-70 brightness-0 grayscale transition-all duration-300 dark:invert hover:opacity-100 hover:brightness-100 hover:grayscale-0 hover:invert-0 dark:hover:invert-0"
              />
            </span>
            {/* divider between brands */}
            <span className="h-6 w-px bg-border" aria-hidden />
          </div>
        ))}
      </div>
    </div>
  );
}
