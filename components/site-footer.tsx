import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { quickLinks } from "@/data/navigation";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.08] bg-[linear-gradient(180deg,rgba(14,14,30,0.95),rgba(9,9,18,1))]">
      <div className="container-page section-pad grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-heading text-2xl font-semibold text-white">{siteConfig.name}</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-[#B8B8C5]">{siteConfig.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/contact">Book Consultation</Button>
            <Button href="/services" variant="secondary">
              Explore Services
            </Button>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-sage-400">Quick Links</h3>
          <div className="mt-4 grid gap-3">
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-[#B8B8C5] hover:text-white">
                {link.label}
              </Link>
            ))}
            <Link href="/blog" className="text-sm text-[#B8B8C5] hover:text-white">
              Blog
            </Link>
            <Link href="/about" className="text-sm text-[#B8B8C5] hover:text-white">
              About
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-sage-400">Contact</h3>
          <div className="mt-4 grid gap-4 text-sm text-[#B8B8C5]">
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-sage-400" />
              {siteConfig.phone}
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-sage-400" />
              {siteConfig.email}
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-sage-400" />
              {siteConfig.location}
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-5 text-xs text-[#B8B8C5] sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Premium AI digital marketing consultancy.</p>
        </div>
      </div>
    </footer>
  );
}
