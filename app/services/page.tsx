import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ServiceGrid } from "@/components/search-controls";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore AI digital marketing, SEO, Google Ads, automation, analytics, and conversion optimization services.",
};

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Services"
        title="Modern services for premium growth"
        description="A scalable menu of strategic, technical, and creative services for businesses that want better results."
      />
      <section className="section-pad">
        <div className="container-page">
          <ServiceGrid />
        </div>
      </section>
    </div>
  );
}
