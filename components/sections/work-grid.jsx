"use client";

import Link from "next/link";
import { work } from "@/lib/content";
import { Icon } from "../icons";
import { Stagger, StaggerItem } from "../ui";
import { TiltCard, Layer } from "../three-d";

// Image-card portfolio grid (mirrors wondermakers /work listing)
export function WorkGrid({ base = "/case-studies" }) {
  return (
    <section className="pb-section">
      <div className="container-x">
        <Stagger className="grid gap-6 md:grid-cols-2">
          {work.map((item, i) => (
            <StaggerItem key={item.slug} className={i % 3 === 0 ? "md:col-span-2" : ""}>
              <Link href={`${base}/${item.slug}`} className="group block perspective-1400">
                <TiltCard
                  max={9}
                  scale={1.02}
                  className={`relative overflow-hidden rounded-xl2 border border-border bg-surface ${i % 3 === 0 ? "aspect-[2/1]" : "aspect-[4/3]"}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.cover}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <Layer depth={40} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
                    <Icon.ArrowUpRight width={18} height={18} />
                  </Layer>
                  <Layer depth={55} className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                    <div>
                      <div className="text-xs font-medium uppercase tracking-[0.16em] text-white/70">
                        {item.category}
                      </div>
                      <h3 className="mt-1.5 font-display text-h3 font-semibold text-white">
                        {item.client}
                      </h3>
                    </div>
                    <span className="font-display text-lg font-semibold text-accent">
                      {item.result}
                    </span>
                  </Layer>
                </TiltCard>
                <p className="mt-3 text-sm text-muted transition-colors group-hover:text-ink">
                  {item.title}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
