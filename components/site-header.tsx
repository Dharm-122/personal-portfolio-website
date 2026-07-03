"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled ? "border-forest-100/70 bg-white/85 backdrop-blur-xl shadow-sm" : "border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-forest-800 text-white shadow-premium">
            D
          </div>
          <div>
            <p className="font-heading text-sm font-semibold tracking-[0.2em] text-sage-500">DHARM</p>
            <p className="text-xs text-ink/60">The Digital Room</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink/75 transition hover:bg-forest-50 hover:text-forest-900"
            >
              <span>{link.label}</span>
              {link.label === "Services" ? <ChevronDown className="h-4 w-4 opacity-60" /> : null}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/contact" variant="secondary">
            View Services
          </Button>
          <Button href="/contact">Book Consultation</Button>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-forest-200 bg-white/80 text-forest-800 lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-forest-100 bg-white/95 px-4 py-4 backdrop-blur-xl lg:hidden">
          <div className="container-page grid gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-forest-900 hover:bg-forest-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Book Consultation
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
