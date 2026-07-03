"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { services, additionalServices } from "@/data/services";
import { ServiceCard } from "@/components/service-card";
import { serviceIcons } from "@/lib/icon-map";
import { Sparkles } from "lucide-react";

export function ServiceGrid() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const allServices = [...services, ...additionalServices];
  const categories = ["All", ...new Set(allServices.map((service) => service.category))];

  const filtered = useMemo(() => {
    return allServices.filter((service) => {
      const matchesQuery =
        service.title.toLowerCase().includes(query.toLowerCase()) ||
        service.description.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === "All" || service.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [allServices, category, query]);

  return (
    <div className="grid gap-6">
      <div className="grid gap-4 lg:grid-cols-[1.5fr_auto] lg:items-center">
        <label className="flex items-center gap-3 rounded-2xl border border-forest-100 bg-white px-4 py-3 shadow-sm">
          <Search className="h-4 w-4 text-ink/40" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services"
            className="w-full bg-transparent text-sm outline-none"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                category === item ? "bg-forest-800 text-white" : "bg-white text-forest-800 hover:bg-forest-50"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((service) => {
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
    </div>
  );
}
