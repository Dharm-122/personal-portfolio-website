"use client";

import { Sparkles } from "lucide-react";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/data";
import { serviceIcons } from "@/lib/icon-map";

export function HomeServicesPreview() {
  const featuredServices = services.slice(0, 4);

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {featuredServices.map((service) => {
        const Icon = serviceIcons[service.icon as keyof typeof serviceIcons] ?? Sparkles;
        return (
          <ServiceCard
            key={service.slug}
            title={service.title}
            description={service.description}
            icon={Icon}
            href={`/services/${service.slug}`}
          />
        );
      })}
    </div>
  );
}
