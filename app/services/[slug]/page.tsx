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
      <PageHero
        eyebrow="Individual Service"
        title={service.title}
        description={service.longDescription}
      >
        <Button href="/contact">Contact Button</Button>
        <Button href="/services" variant="secondary">
          Related Services
        </Button>
      </PageHero>

      <section className="section-pad">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[30px] border border-forest-100 bg-white p-7 shadow-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-forest-50 text-forest-800">
              <Icon className="h-7 w-7" />
            </div>
            <SectionHeading eyebrow="Overview" title={service.title} className="mt-6" />
            <p className="mt-5 text-base leading-8 text-ink/75">{service.longDescription}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.benefits.map((benefit) => (
                <div key={benefit} className="rounded-2xl bg-forest-50 px-4 py-4 text-sm text-forest-900">
                  {benefit}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[30px] border border-forest-100 bg-white p-7 shadow-sm">
            <SectionHeading eyebrow="Process" title="How the engagement works" />
            <ol className="mt-6 grid gap-4">
              {[
                "Discovery and audit of current systems",
                "Strategy roadmap and opportunity mapping",
                "Implementation with measurement and refinement",
                "Ongoing optimization and consultation",
              ].map((step, index) => (
                <li key={step} className="flex gap-4 rounded-2xl bg-forest-50 p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest-800 text-sm text-white">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-6 text-ink/75">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white/55">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionHeading eyebrow="Features" title="What is included" />
            <div className="mt-6 grid gap-3">
              {service.features.map((feature) => (
                <div key={feature} className="rounded-2xl border border-forest-100 bg-white px-4 py-4 text-sm text-ink/70 shadow-sm">
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
          <div className="rounded-[34px] bg-forest-900 px-6 py-10 text-white shadow-premium sm:px-10">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sage-200">CTA</p>
                <h2 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">Ready to discuss {service.title.toLowerCase()}?</h2>
                <p className="mt-3 text-white/70">
                  Let&apos;s map the right next steps for your brand and build a cleaner route to measurable growth.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <Button href="/contact" className="bg-white text-forest-900 hover:bg-white/90">
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

      <section className="section-pad bg-white/55">
        <div className="container-page">
          <SectionHeading eyebrow="Related Services" title="Additional ways to support growth" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {related.map((item) => {
              const RelatedIcon = serviceIcons[item.icon as keyof typeof serviceIcons] ?? icons.Sparkles;
              return (
                <div key={item.slug} className="rounded-[28px] border border-forest-100 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-50 text-forest-800">
                    <RelatedIcon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-xl font-semibold text-forest-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-ink/70">{item.description}</p>
                  <Link href={`/services/${item.slug}`} className="mt-5 inline-flex text-sm font-medium text-forest-800">
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
