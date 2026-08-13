"use client";

import Link from "next/link";
import { useState } from "react";
import { CLUB, IMAGES, NAV_LINKS } from "@/lib/site-config";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-container">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <img src={IMAGES.logo} alt={`${CLUB.shortName} logo`} className="brand-mark" />

          <span className="brand-text">
            <strong>{CLUB.shortName}</strong>
            <small>UC VEX U ROBOTICS</small>
          </span>
        </Link>

        <nav className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="mobile-menu-button"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="mobile-nav">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}