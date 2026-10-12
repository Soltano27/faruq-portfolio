"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";
import { LinkedIn, Mail } from "./Icons";

const items = nav.map((n) => (n.href === "/contact" ? { ...n, label: "Let's Work", cta: true } : { ...n, cta: false }));

/** Fixed bar at the bottom of the screen: logo, pill nav, social icons. */
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const links = items.map((item) => {
    const active = isActive(item.href);
    return (
      <Link
        key={item.href}
        href={item.href}
        className={item.cta && !active ? "nav-cta" : undefined}
        aria-current={active ? "page" : undefined}
      >
        {item.label}
      </Link>
    );
  });

  return (
    <header className="site-header">
      <nav id="mobile-nav" className="nav-mobile" data-open={open} aria-label="Main">{links}</nav>
      <div className="bar">
        <Link href="/" className="logo" aria-label={`${site.name}, home`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={site.logo} alt={site.name} />
        </Link>
        <nav className="nav-desktop" aria-label="Main">{links}</nav>
        <div className="header-icons">
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedIn /></a>
          <a href={`mailto:${site.email}`} aria-label="Email"><Mail /></a>
        </div>
        <button className="menu-btn" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen((o) => !o)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}
