import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import * as icons from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/faq-accordion";
import { services } from "@/data/services";
import { serviceIcons } from "@/lib/icon-map";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${slug}` },
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  const Icon = serviceIcons[service.icon as keyof typeof serviceIcons] ?? icons.Sparkles;
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <div>
      <PageHero eyebrow="Individual Service" title={service.title} description={service.longDescription}>
        <Button href="/contact">Contact Button</Button>
        <Button href="/services" variant="secondary">
          Related Services
        </Button>
      </PageHero>

      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,18,36,0.2),rgba(14,14,30,0.82))]" />
        <div className="absolute inset-0 grid-pattern opacity-[0.12]" />
        <div className="container-page relative grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[30px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(18,18,36,0.88),rgba(14,14,30,0.96))] p-7 shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-2xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-sage-400/20 bg-sage-400/12 text-sage-300">
              <Icon className="h-7 w-7" />
            </div>
            <SectionHeading eyebrow="Overview" title={service.title} className="mt-6" />
            <p className="mt-5 text-base leading-8 text-[#B8B8C5]">{service.longDescription}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="rounded-2xl border border-white/[0.06] bg-white/[0.04] px-4 py-4 text-sm text-white">
                  {benefit}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[30px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(18,18,36,0.88),rgba(14,14,30,0.96))] p-7 shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-2xl">
            <SectionHeading eyebrow="Process" title="How the engagement works" />
            <ol className="mt-6 grid gap-4">
              {[
                "Discovery and audit of current systems",
                "Strategy roadmap and opportunity mapping",
                "Implementation with measurement and refinement",
                "Ongoing optimization and consultation",
              ].map((step, index) => (
                <li key={step} className="flex gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.04] p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-400 text-sm text-[#0E0E1E]">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-6 text-[#B8B8C5]">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,18,36,0.2),rgba(14,14,30,0.82))]" />
        <div className="absolute inset-0 grid-pattern opacity-[0.12]" />
        <div className="container-page relative grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading eyebrow="Features" title="What is included" />
            <div className="mt-6 grid gap-3">
              {service.features.map((feature) => (
                <div key={feature} className="rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-4 text-sm text-[#B8B8C5] shadow-[0_20px_80px_rgba(0,0,0,.18)] backdrop-blur-2xl">
                  {feature}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Frequently Asked Questions" title="A few practical answers" />
            <div className="mt-6">
              <FaqAccordion items={service.faqs} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="rounded-[34px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(18,18,36,0.92),rgba(14,14,30,0.98))] px-6 py-10 text-white shadow-[0_35px_100px_rgba(0,0,0,.55)] sm:px-10">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.34em] text-sage-400">CTA</p>
                <h2 className="mt-3 font-heading text-balance text-3xl font-bold sm:text-4xl">
                  Ready to discuss {service.title.toLowerCase()}?
                </h2>
                <p className="mt-3 text-[#B8B8C5]">
                  Let's map the right next steps for your brand and build a cleaner route to measurable growth.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button href="/contact" className="bg-white text-[#0E0E1E] hover:bg-white/90">
                  Book Consultation
                </Button>
                <Button href="/contact" variant="secondary" className="border-white/20 bg-white/10 text-white hover:bg-white/15">
                  Contact Button
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,18,36,0.2),rgba(14,14,30,0.82))]" />
        <div className="absolute inset-0 grid-pattern opacity-[0.12]" />
        <div className="container-page relative">
          <SectionHeading eyebrow="Related Services" title="Additional ways to support growth" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {related.map((item) => {
              const RelatedIcon = serviceIcons[item.icon as keyof typeof serviceIcons] ?? icons.Sparkles;
              return (
                <div
                  key={item.slug}
                  className="rounded-[28px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(18,18,36,0.88),rgba(14,14,30,0.96))] p-6 shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-2xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-sage-400/20 bg-sage-400/12 text-sage-300">
                    <RelatedIcon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#B8B8C5]">{item.description}</p>
                  <Link href={`/services/${item.slug}`} className="mt-5 inline-flex text-sm font-medium text-sage-300">
                    Learn More
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
