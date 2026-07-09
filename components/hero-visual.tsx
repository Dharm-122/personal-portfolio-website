"use client";

import { BarChart3, CircleDollarSign, Gauge, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import type { ComponentType } from "react";

export function HeroVisual() {
  return (
    <div className="relative">
      <div className="absolute -left-8 -top-8 h-28 w-28 rounded-full bg-sage-400/20 blur-3xl" />
      <div className="absolute -bottom-10 -right-8 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
      <div className="glass relative overflow-hidden rounded-[36px] p-4 soft-ring">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(163,177,138,0.16),_transparent_30%),linear-gradient(180deg,rgba(10,10,10,0.95),rgba(18,18,18,0.88))]" />
        <div className="relative rounded-[30px] border border-white/10 bg-white/5 p-6 text-white shadow-premium">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sage-400">AI Growth Command Center</p>
              <h3 className="mt-2 font-heading text-2xl font-semibold text-white">A refined performance system</h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-300">
                A premium snapshot of paid media, SEO, automation, and conversion signals working together.
              </p>
            </div>
            <div className="rounded-full border border-sage-400/20 bg-sage-400/10 px-3 py-2 text-xs font-medium text-sage-300">
              Live
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[28px] border border-white/10 bg-black/40 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Momentum</p>
                  <p className="mt-1 font-heading text-2xl font-semibold text-white">+38% growth</p>
                </div>
                <div className="rounded-2xl bg-sage-400/10 p-3 text-sage-300">
                  <TrendingUp className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-5 h-44 rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-4">
                <svg viewBox="0 0 420 160" className="h-full w-full" aria-hidden="true">
                  <defs>
                    <linearGradient id="lineGlow" x1="0" x2="1">
                      <stop offset="0%" stopColor="#A3B18A" />
                      <stop offset="100%" stopColor="#ffffff" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M20 122 C58 116, 72 94, 108 102 S166 128, 198 92 S258 38, 298 62 S360 108, 400 34"
                    fill="none"
                    stroke="url(#lineGlow)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  {[
                    [20, 122],
                    [108, 102],
                    [198, 92],
                    [298, 62],
                    [400, 34],
                  ].map(([x, y]) => (
                    <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="#A3B18A" />
                  ))}
                </svg>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[24px] border border-white/10 bg-black/35 p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-white/5 p-3 text-sage-300">
                    <Gauge className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Efficiency</p>
                    <p className="font-heading text-lg font-semibold text-white">Automation readiness</p>
                  </div>
                </div>
                <div className="mt-4 h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-sage-400 to-white/80" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <MetricCard icon={BarChart3} label="Lead quality" value="92%" />
                <MetricCard icon={CircleDollarSign} label="ROI" value="4.8x" />
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-sage-400/10 p-3 text-sage-300">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Trust Layer</p>
                    <p className="font-heading text-lg font-semibold text-white">Secure, measurable, calm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-300">SEO Engine</div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-300">Paid Media</div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-300">Automation</div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-zinc-300">AI Consulting</div>
            <div className="ml-auto flex items-center gap-2 rounded-full border border-sage-400/20 bg-sage-400/10 px-4 py-2 text-xs font-medium text-sage-200">
              <Sparkles className="h-3.5 w-3.5" />
              Premium intelligence
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
}: {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-black/35 p-4">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">{label}</p>
        <Icon className="h-4 w-4 text-sage-300" />
      </div>
      <p className="mt-4 font-heading text-3xl font-semibold text-white">{value}</p>
    </div>
  );
}
