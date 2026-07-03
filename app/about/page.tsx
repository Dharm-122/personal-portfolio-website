import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/animated-counter";

export const metadata: Metadata = {
  title: "About Me",
  description: "Professional story, vision, experience, skills, and values behind Dharm – The Digital Room.",
};

export default function AboutPage() {
  const timeline = [
    { year: "2019", title: "Started in Performance Marketing", text: "Built the foundation in paid media, funnel thinking, and conversion strategy." },
    { year: "2021", title: "Expanded into SEO and Content", text: "Developed search-led growth systems and premium content architecture." },
    { year: "2023", title: "Integrated AI Workflows", text: "Introduced automation and AI-assisted systems to improve speed and quality." },
    { year: "2026", title: "Consulting for Modern Brands", text: "Helping companies build calm, scalable, and measurable marketing engines." },
  ];

  return (
    <div>
      <PageHero
        eyebrow="About Me"
        title="Strategy, elegance, and measurable growth"
        description="I help ambitious businesses grow with premium digital marketing systems that feel polished, modern, and dependable."
      >
        <Button href="/contact">Book Consultation</Button>
        <Button href="/services" variant="secondary">
          View Services
        </Button>
      </PageHero>

      <section className="section-pad">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="glass overflow-hidden rounded-[34px] p-4 soft-ring">
            <Image
              src="/images/about-placeholder.svg"
              alt="Professional image placeholder"
              width={1200}
              height={1400}
              className="h-auto w-full rounded-[28px]"
            />
          </div>
          <div className="grid gap-8">
            <SectionHeading
              eyebrow="Professional Story"
              title="Built for brands that value clarity and premium execution"
              description="My work combines marketing strategy, AI adoption, and conversion-focused design thinking to create consistent growth."
            />
            <p className="text-base leading-8 text-ink/75">
              The digital landscape rewards systems that are thoughtful, fast, and easy to manage. I partner with
              clients to simplify the moving parts of marketing and build a stronger path to revenue.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-forest-100 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-forest-900">Mission</h3>
                <p className="mt-2 text-sm leading-6 text-ink/70">
                  Help businesses use AI and digital marketing to move with confidence and clarity.
                </p>
              </div>
              <div className="rounded-3xl border border-forest-100 bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-forest-900">Vision</h3>
                <p className="mt-2 text-sm leading-6 text-ink/70">
                  Build elegant, trustworthy growth systems that feel premium and perform consistently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/55">
        <div className="container-page">
          <SectionHeading
            eyebrow="Career Journey"
            title="A focused progression from execution to strategic advisory"
            centered
          />
          <div className="mt-10 grid gap-4">
            {timeline.map((item) => (
              <div key={item.year} className="grid gap-4 rounded-[28px] border border-forest-100 bg-white p-6 shadow-sm lg:grid-cols-[120px_1fr] lg:items-start">
                <p className="font-heading text-3xl font-semibold text-sage-500">{item.year}</p>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-forest-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-ink/70">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page grid gap-8 lg:grid-cols-4">
          <AnimatedCounter end={5} suffix="+" label="Years Experience" />
          <AnimatedCounter end={100} suffix="+" label="Projects" />
          <AnimatedCounter end={12} suffix="+" label="Certifications & Skills" />
          <AnimatedCounter end={30} suffix="+" label="Processes Refined" />
        </div>
      </section>

      <section className="section-pad bg-white/55">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div className="rounded-[30px] border border-forest-100 bg-white p-7 shadow-sm">
            <SectionHeading eyebrow="Skills" title="Tools and capabilities" />
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-ink/70">
              {["SEO Strategy", "Google Ads", "AI Workflows", "Content Planning", "Analytics", "CRO", "Email Marketing", "Brand Messaging"].map((skill) => (
                <div key={skill} className="rounded-2xl bg-forest-50 px-4 py-3">{skill}</div>
              ))}
            </div>
          </div>
          <div className="rounded-[30px] border border-forest-100 bg-white p-7 shadow-sm">
            <SectionHeading eyebrow="Values" title="Why clients trust me" />
            <div className="mt-6 grid gap-4 text-sm leading-7 text-ink/70">
              <p>• Clear communication and practical recommendations</p>
              <p>• A premium, detail-conscious approach</p>
              <p>• Respect for brand voice, trust, and accessibility</p>
              <p>• Measurable outcomes and accountability</p>
            </div>
            <div className="mt-8">
              <Button href="/contact">Start a Conversation</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
