"use client";

import Link from "next/link";
import { nav, services, company } from "@/lib/content";
import { Icon } from "./icons";
import { Logo } from "./logo";
import { useContact } from "./contact-drawer";

export function Footer() {
  const contact = useContact();
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="group" aria-label="ANAFCO Technologies home">
              <Logo size={32} />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {company.tagline} We design and build software that ambitious businesses run on.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-accent"
              >
                <Icon.Mail width={16} height={16} />
                {company.email}
              </a>
              <a
                href={`tel:${company.phone.replace(/[^+\d]/g, "")}`}
                className="inline-flex items-center gap-2 text-sm text-ink transition-colors hover:text-accent"
              >
                <Icon.Telecom width={16} height={16} />
                {company.phone}
              </a>
              <p className="flex items-start gap-2 text-sm text-muted">
                <Icon.Business width={16} height={16} className="mt-0.5 shrink-0" />
                {company.address}
              </p>
            </div>
            <div>
              <button type="button" onClick={contact.open} className="btn-primary btn-sm mt-6">
                Let&apos;s talk <Icon.Arrow width={15} height={15} />
              </button>
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 md:col-span-8 md:grid-cols-3">
            <FooterCol
              title="Services"
              links={services.map((s) => ({ label: s.title, href: "/services" }))}
            />
            <FooterCol
              title="Company"
              links={[...nav, { label: "Case studies", href: "/case-studies" }, { label: "Process", href: "/process" }]}
            />
            <FooterCol
              title="Get started"
              links={[
                { label: "Start a project", onClick: contact.open },
                { label: "Book a call", onClick: contact.open },
                { label: "View work", href: "/work" },
                { label: "Industries", href: "/industries" },
              ]}
            />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 text-sm text-faint md:flex-row md:items-center md:justify-between">
          <p>© {2026} ANAFCO Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-ink">Privacy</a>
            <a href="#" className="transition-colors hover:text-ink">Terms</a>
            <a href="#" className="transition-colors hover:text-ink">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-faint">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((l, i) => (
          <li key={`${l.label}-${i}`}>
            {l.onClick ? (
              <button
                type="button"
                onClick={l.onClick}
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </button>
            ) : (
              <Link href={l.href} className="text-sm text-muted transition-colors hover:text-ink">
                {l.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
