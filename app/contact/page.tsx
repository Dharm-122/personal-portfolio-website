import type { Metadata } from "next";
import { MapPin, Mail, Phone, Clock3 } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Dharm - The Digital Room to book a premium AI digital marketing consultation.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Start your consultation"
        description="Share your goals, and I'll help you map a clear path for growth."
      />

      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,18,36,0.2),rgba(14,14,30,0.82))]" />
        <div className="absolute inset-0 grid-pattern opacity-[0.12]" />
        <div className="container-page relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-6">
            <div className="rounded-[30px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(18,18,36,0.88),rgba(14,14,30,0.96))] p-6 shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-2xl">
              <SectionHeading eyebrow="Contact Information" title="Let's connect" />
              <div className="mt-6 grid gap-4 text-sm text-[#B8B8C5]">
                <p className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-sage-400" /> {siteConfig.phone}
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-sage-400" /> {siteConfig.email}
                </p>
                <p className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-sage-400" /> {siteConfig.location}
                </p>
                <p className="flex items-center gap-3">
                  <Clock3 className="h-4 w-4 text-sage-400" /> Available for consultations by appointment
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-[30px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(18,18,36,0.88),rgba(14,14,30,0.96))] shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-2xl">
              <iframe
                title="Google Map Kathmandu Nepal"
                src="https://www.google.com/maps?q=Kathmandu,Nepal&output=embed"
                className="h-[360px] w-full"
                loading="lazy"
              />
            </div>
          </div>
          <div className="rounded-[30px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(18,18,36,0.88),rgba(14,14,30,0.96))] p-4 shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-2xl">
            <div className="rounded-[26px] border border-white/[0.08] bg-[#0E0E1E]/70 p-2 shadow-[0_20px_80px_rgba(0,0,0,.2)]">
              <SectionHeading eyebrow="Consultation Booking" title="Tell me about your project" className="px-4 pt-4" />
              <div className="px-4 pb-4 pt-2">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
