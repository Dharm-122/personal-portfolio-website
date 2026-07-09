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
        scrolled ? "border-white/[0.08] bg-[#0E0E1E]/85 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,.25)]" : "border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.08] bg-white text-zinc-950 shadow-[0_20px_80px_rgba(0,0,0,.2)]">
            D
          </div>
          <div>
            <p className="font-heading text-sm font-semibold tracking-[0.2em] text-sage-400">DHARM</p>
            <p className="text-xs text-[#B8B8C5]">The Digital Room</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-[#B8B8C5] transition hover:bg-white/5 hover:text-white"
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-[#0E0E1E]/95 px-4 py-4 backdrop-blur-2xl lg:hidden">
          <div className="container-page grid gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-white hover:bg-white/5"
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
