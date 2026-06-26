"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "./icons";
import { company } from "@/lib/content";

const ContactCtx = createContext({ open: () => {}, close: () => {} });

export function useContact() {
  return useContext(ContactCtx);
}

export function ContactProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  // Lock body scroll + close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  return (
    <ContactCtx.Provider value={{ open, close }}>
      {children}
      <ContactDrawer isOpen={isOpen} close={close} />
    </ContactCtx.Provider>
  );
}

function ContactDrawer({ isOpen, close }) {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 32 }}
            className="absolute right-0 top-0 flex h-full w-full max-w-lg flex-col overflow-y-auto border-l border-border bg-canvas"
            role="dialog"
            aria-modal="true"
            aria-label="Contact form"
          >
            {/* glow */}
            <div
              className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-accent/15 blur-[100px]"
              aria-hidden
            />

            {/* Header */}
            <div className="relative flex items-center justify-between border-b border-border px-7 py-5">
              <span className="eyebrow eyebrow-dot inline-flex">Let&apos;s talk</span>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-ink transition-colors hover:border-accent/40 hover:bg-elevated"
              >
                <Icon.Close width={18} height={18} />
              </button>
            </div>

            <div className="relative flex-1 px-7 py-8">
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-accent/15 text-accent">
                    <Icon.Check width={32} height={32} />
                  </span>
                  <h3 className="mt-6 font-display text-h2 font-semibold text-ink">
                    Request sent
                  </h3>
                  <p className="mt-3 max-w-sm text-muted">
                    Thanks — we&apos;ll get back to you within one business day. Talk soon.
                  </p>
                  <button type="button" onClick={close} className="btn-ghost mt-8">
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-h2 font-semibold text-ink text-balance">
                    Tell us what you&apos;re building
                  </h2>
                  <p className="mt-3 text-muted">
                    No pushy sales — just engineers who get it. We reply within one business day.
                  </p>

                  <form onSubmit={onSubmit} className="mt-8 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Field label="First name" name="firstName" placeholder="Jane" required />
                      <Field label="Last name" name="lastName" placeholder="Doe" required />
                    </div>
                    <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
                    <Field label="Phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-ink">
                        What do you need?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {["SaaS product", "POS", "ISP billing", "AI automation", "Cloud", "Other"].map(
                          (s) => (
                            <label key={s} className="chip cursor-pointer has-[:checked]:border-accent has-[:checked]:text-ink">
                              <input type="checkbox" name="needs" value={s} className="sr-only" />
                              {s}
                            </label>
                          )
                        )}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="A few lines about your project, timeline and goals…"
                        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-ink placeholder:text-faint focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/30"
                      />
                    </div>
                    <label className="flex items-start gap-2.5 text-sm text-muted">
                      <input
                        type="checkbox"
                        required
                        className="mt-0.5 h-4 w-4 rounded border-border accent-[rgb(var(--accent))]"
                      />
                      I agree to the privacy policy and to being contacted about my request.
                    </label>
                    <button type="submit" className="btn-primary w-full">
                      Send request <Icon.Arrow width={16} height={16} />
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Footer contact info */}
            <div className="relative border-t border-border px-7 py-5">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
                <a href={`mailto:${company.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-accent">
                  <Icon.Mail width={15} height={15} /> {company.email}
                </a>
                <a href={`tel:${company.phone.replace(/[^+\d]/g, "")}`} className="inline-flex items-center gap-2 transition-colors hover:text-accent">
                  <Icon.Telecom width={15} height={15} /> {company.phone}
                </a>
              </div>
              <p className="mt-2 flex items-start gap-2 text-sm text-muted">
                <Icon.Business width={15} height={15} className="mt-0.5 shrink-0" /> {company.address}
              </p>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}

function Field({ label, name, type = "text", placeholder, required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-border bg-surface px-4 text-sm text-ink placeholder:text-faint focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/30"
      />
    </div>
  );
}
