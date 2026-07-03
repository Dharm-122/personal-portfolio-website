"use client";

import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-sage-200/60 blur-3xl" />
      <div className="absolute -bottom-10 -right-8 h-32 w-32 rounded-full bg-forest-200/50 blur-3xl" />
      <div className="glass relative overflow-hidden rounded-[34px] p-4 soft-ring">
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-sage-50/60" />
        <div className="relative rounded-[28px] border border-white/70 bg-white/60 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage-500">AI Growth Dashboard</p>
              <h3 className="mt-2 font-heading text-2xl font-semibold text-forest-900">Precision meets elegance</h3>
            </div>
            <div className="rounded-2xl bg-forest-800 px-3 py-2 text-xs font-medium text-white">Live</div>
          </div>
          <div className="mt-6 overflow-hidden rounded-[26px] border border-forest-100 bg-forest-50">
            <Image
              src="/images/hero-ai-marketing.svg"
              alt="AI digital marketing illustration"
              width={900}
              height={720}
              className="h-auto w-full"
              priority
            />
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              ["+38%", "Organic Growth"],
              ["+52%", "Lead Quality"],
              ["24/7", "Automation"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-forest-50 p-4">
                <p className="font-heading text-2xl font-semibold text-forest-900">{value}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-ink/55">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
