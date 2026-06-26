"use client";

import { company } from "@/lib/content";
import { Icon } from "../icons";
import { Magnetic, Reveal } from "../ui";
import { useContact } from "../contact-drawer";

export function CTA() {
  const contact = useContact();
  return (
    <section id="contact" className="py-section">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl3 border border-border bg-canvas px-6 py-16 text-center md:px-16 md:py-24">
            {/* glow + grid */}
            <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]"
              aria-hidden
            />
            <div className="relative mx-auto max-w-2xl">
              <span className="eyebrow eyebrow-dot inline-flex justify-center">Let&apos;s build</span>
              <h2 className="mt-5 font-display text-h1 font-semibold text-ink text-balance">
                Ready to ship the software your business runs on?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lead text-muted">
                Tell us what you&apos;re building. We&apos;ll come back within one business day with
                a clear next step — no pushy sales, just engineers who get it.
              </p>

              {/* email capture — opens the full contact drawer */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  contact.open();
                }}
                className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <div className="relative flex-1">
                  <Icon.Mail
                    width={18}
                    height={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-faint"
                  />
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="h-12 w-full rounded-full border border-border bg-surface pl-11 pr-4 text-sm text-ink placeholder:text-faint focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/30"
                  />
                </div>
                <Magnetic>
                  <button type="submit" className="btn-primary h-12 w-full sm:w-auto">
                    Start a project <Icon.Arrow width={16} height={16} />
                  </button>
                </Magnetic>
              </form>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-muted">
                <span className="inline-flex items-center gap-2">
                  <Icon.Check width={16} height={16} className="text-accent" /> Reply in 1 business day
                </span>
                <span className="inline-flex items-center gap-2">
                  <Icon.Shield width={16} height={16} className="text-accent" /> You own the IP
                </span>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-2 text-ink transition-colors hover:text-accent"
                >
                  <Icon.Mail width={16} height={16} /> {company.email}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
