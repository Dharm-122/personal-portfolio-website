import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "@/components/hero-visual";
import { AboutPreview } from "@/components/about-preview";
import { HomeServicesPreview } from "@/components/home-services-preview";
import { StatsStrip } from "@/components/stats-strip";
import { HomePortfolioPreview } from "@/components/home-portfolio-preview";
import { HomeBlogPreview } from "@/components/home-blog-preview";
import { HomeTestimonials } from "@/components/home-testimonials";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Premium AI Digital Marketing Portfolio",
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#0E0E1E_0%,#121224_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(163,177,138,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(37,33,63,0.42),transparent_30%)]" />
        <div className="absolute inset-0 grid-pattern opacity-[0.16]" />
        <div className="container-page relative grid gap-12 py-[120px] lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sage-300">
              {siteConfig.name}
            </p>
            <h1 className="font-heading text-5xl font-semibold tracking-tight text-white text-balance sm:text-6xl lg:text-7xl">
              Transform Your Business with AI-Powered Digital Marketing
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#B8B8C5] sm:text-lg">
              Premium consulting for brands that want refined strategy, smarter automation, and measurable growth.
              I help ambitious businesses turn marketing into a calm, high-performing system.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">
                Book a Consultation <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/services" variant="secondary">
                View Services
              </Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["AI", "Strategy-first planning"],
                ["SEO", "Organic visibility"],
                ["Automation", "Effortless follow-up"],
              ].map(([title, text]) => (
                <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                  <p className="font-heading text-xl font-semibold text-white">{title}</p>
                  <p className="mt-1 text-sm text-[#B8B8C5]">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>
      <AboutPreview />

      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,18,36,0.2),rgba(14,14,30,0.82))]" />
        <div className="absolute inset-0 grid-pattern opacity-[0.12]" />
        <div className="container-page relative">
          <SectionHeading
            eyebrow="Services Preview"
            title="High-end services built for modern growth"
            description="From AI consulting to paid media and SEO, every service is designed to create measurable momentum."
            tone="dark"
          />
          <div className="mt-10">
            <HomeServicesPreview />
          </div>
        </div>
      </section>

      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(163,177,138,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(37,33,63,0.35),transparent_28%)]" />
        <div className="absolute inset-0 grid-pattern opacity-[0.16]" />
        <div className="container-page relative">
          <SectionHeading
            eyebrow="Why Choose Me"
            title="The numbers reflect a calm, ROI-focused approach"
            description="The work is built around clarity, systems, and refined execution."
            tone="dark"
          />
          <div className="mt-10">
            <StatsStrip />
          </div>
        </div>
      </section>

      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,18,36,0.2),rgba(14,14,30,0.82))]" />
        <div className="absolute inset-0 grid-pattern opacity-[0.12]" />
        <div className="container-page relative">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected work that balances brand polish with performance"
            description="A concise selection of campaigns and growth systems crafted for premium businesses."
            tone="dark"
          />
          <div className="mt-10">
            <HomePortfolioPreview />
          </div>
        </div>
      </section>

      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(163,177,138,0.08),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(37,33,63,0.32),transparent_26%)]" />
        <div className="absolute inset-0 grid-pattern opacity-[0.14]" />
        <div className="container-page relative">
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by founders and teams who want higher standards"
            description="The experience is designed to feel collaborative, strategic, and confidently premium."
            tone="dark"
          />
          <div className="mt-10">
            <HomeTestimonials />
          </div>
        </div>
      </section>

      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,18,36,0.2),rgba(14,14,30,0.82))]" />
        <div className="absolute inset-0 grid-pattern opacity-[0.12]" />
        <div className="container-page relative">
          <SectionHeading
            eyebrow="Latest Blog"
            title="Thoughtful insights on AI, SEO, and digital growth"
            description="A small library of practical ideas for modern marketing teams."
            tone="dark"
          />
          <div className="mt-10">
            <HomeBlogPreview />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="overflow-hidden rounded-[36px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(18,18,36,0.92),rgba(14,14,30,0.98))] px-6 py-10 text-white shadow-[0_35px_100px_rgba(0,0,0,.55)] sm:px-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.34em] text-sage-400">Call to Action</p>
                <h2 className="mt-3 font-heading text-balance text-4xl font-bold sm:text-5xl">
                  Let&apos;s Grow Your Business with AI.
                </h2>
                <p className="mt-4 max-w-2xl text-[#B8B8C5]">
                  Book a consultation to explore a premium digital marketing roadmap built around your goals.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button href="/contact" className="bg-white text-[#0E0E1E] hover:bg-white/90">
                  Book Consultation
                </Button>
                <Button href="/services" variant="secondary" className="border-white/20 bg-white/10 text-white hover:bg-white/15">
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
