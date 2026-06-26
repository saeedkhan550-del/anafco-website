"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { nav } from "@/lib/content";
import { Icon } from "./icons";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import { Magnetic } from "./ui";
import { useContact } from "./contact-drawer";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const contact = useContact();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* scroll progress */}
      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 z-50 h-0.5 origin-left bg-accent"
      />
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-canvas/70 backdrop-blur-nav"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav className="container-x flex h-16 items-center justify-between md:h-[72px]">
          {/* Logo */}
          <Link href="/" className="group" aria-label="ANAFCO Technologies home">
            <Logo size={32} />
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:bg-elevated hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2.5">
            <ThemeToggle className="hidden sm:grid" />
            <Magnetic className="hidden sm:block">
              <button type="button" onClick={contact.open} className="btn-primary btn-sm">
                Let&apos;s talk
                <Icon.Arrow width={15} height={15} />
              </button>
            </Magnetic>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-ink lg:hidden"
            >
              {open ? <Icon.Close width={18} height={18} /> : <Icon.Menu width={18} height={18} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-b border-border bg-canvas/95 backdrop-blur-nav lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base text-muted transition-colors hover:bg-elevated hover:text-ink"
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 flex items-center gap-3 px-1">
                <ThemeToggle />
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    contact.open();
                  }}
                  className="btn-primary flex-1"
                >
                  Let&apos;s talk
                  <Icon.Arrow width={16} height={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
