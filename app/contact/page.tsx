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

      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-6">
            <div className="rounded-[30px] border border-forest-100 bg-white p-6 shadow-sm">
              <SectionHeading eyebrow="Contact Information" title="Let's connect" />
              <div className="mt-6 grid gap-4 text-sm text-ink/70">
                <p className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-sage-500" /> {siteConfig.phone}
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-sage-500" /> {siteConfig.email}
                </p>
                <p className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-sage-500" /> {siteConfig.location}
                </p>
                <p className="flex items-center gap-3">
                  <Clock3 className="h-4 w-4 text-sage-500" /> Available for consultations by appointment
                </p>
              </div>
            </div>
            <div className="overflow-hidden rounded-[30px] border border-forest-100 bg-white shadow-sm">
              <iframe
                title="Google Map Kathmandu Nepal"
                src="https://www.google.com/maps?q=Kathmandu,Nepal&output=embed"
                className="h-[360px] w-full"
                loading="lazy"
              />
            </div>
          </div>
          <div className="rounded-[30px] bg-sage-50 p-4 shadow-premium">
            <div className="rounded-[26px] border border-white/70 bg-white/70 p-2 shadow-sm">
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
