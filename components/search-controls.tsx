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
        <label className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-white shadow-[0_20px_80px_rgba(0,0,0,.18)] backdrop-blur-2xl">
          <Search className="h-4 w-4 text-sage-300" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services"
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-[#B8B8C5]"
          />
        </label>
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                category === item
                  ? "bg-sage-400 text-[#0E0E1E] shadow-[0_0_24px_rgba(163,177,138,0.18)]"
                  : "border border-white/[0.08] bg-white/[0.04] text-white/88 hover:border-white/[0.14] hover:bg-white/[0.07]"
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
