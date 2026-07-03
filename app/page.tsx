import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { HeroVisual } from "@/components/hero-visual";
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
      <section className="relative overflow-hidden bg-sage-radial">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container-page relative grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-sage-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-sage-500">
              {siteConfig.name}
            </p>
            <h1 className="font-heading text-5xl font-semibold tracking-tight text-forest-900 text-balance sm:text-6xl lg:text-7xl">
              Transform Your Business with AI-Powered Digital Marketing
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-ink/75 sm:text-lg">
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
                <div key={title} className="rounded-3xl border border-white/60 bg-white/60 p-5 backdrop-blur-xl">
                  <p className="font-heading text-xl font-semibold text-forest-900">{title}</p>
                  <p className="mt-1 text-sm text-ink/65">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow="About Preview"
            title="A premium consultant who blends strategy, design thinking, and automation"
            description="I work at the intersection of AI, digital marketing, and conversion psychology to help businesses grow with clarity and control."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="glass overflow-hidden rounded-[34px] p-4 soft-ring">
              <div className="rounded-[28px] border border-white/70 bg-white/60 p-4">
                <Image
                  src="/images/about-placeholder.svg"
                  alt="Professional portrait placeholder"
                  width={1200}
                  height={1400}
                  className="h-auto w-full rounded-[24px]"
                />
              </div>
            </div>
            <div>
              <p className="text-lg leading-8 text-ink/75">
                With a polished, outcome-focused approach, I help brands design growth systems that feel premium,
                perform efficiently, and scale without unnecessary complexity.
              </p>
              <div className="mt-6">
                <Button href="/about" variant="secondary">
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/50">
        <div className="container-page">
          <SectionHeading
            eyebrow="Services Preview"
            title="High-end services built for modern growth"
            description="From AI consulting to paid media and SEO, every service is designed to create measurable momentum."
          />
          <div className="mt-10">
            <HomeServicesPreview />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Choose Me"
            title="The numbers reflect a calm, ROI-focused approach"
            description="The work is built around clarity, systems, and refined execution."
          />
          <div className="mt-10">
            <StatsStrip />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/55">
        <div className="container-page">
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected work that balances brand polish with performance"
            description="A concise selection of campaigns and growth systems crafted for premium businesses."
          />
          <div className="mt-10">
            <HomePortfolioPreview />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by founders and teams who want higher standards"
            description="The experience is designed to feel collaborative, strategic, and confidently premium."
          />
          <div className="mt-10">
            <HomeTestimonials />
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/55">
        <div className="container-page">
          <SectionHeading
            eyebrow="Latest Blog"
            title="Thoughtful insights on AI, SEO, and digital growth"
            description="A small library of practical ideas for modern marketing teams."
          />
          <div className="mt-10">
            <HomeBlogPreview />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="overflow-hidden rounded-[36px] bg-forest-900 px-6 py-10 text-white shadow-premium sm:px-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sage-200">Call to Action</p>
                <h2 className="mt-3 font-heading text-4xl font-semibold text-balance sm:text-5xl">
                  Let&apos;s Grow Your Business with AI.
                </h2>
                <p className="mt-4 max-w-2xl text-white/72">
                  Book a consultation to explore a premium digital marketing roadmap built around your goals.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button href="/contact" className="bg-white text-forest-900 hover:bg-white/90">
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
