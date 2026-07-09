"use client";

import Image from "next/image";
import { ArrowRight, BrainCircuit, Sparkles, Target } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const capabilityCards = [
  {
    icon: Target,
    title: "Strategy-led",
    text: "Clear positioning, sharper funnels, and campaign planning built around outcomes.",
  },
  {
    icon: BrainCircuit,
    title: "AI-powered",
    text: "Automation and intelligent workflows that save time while raising execution quality.",
  },
  {
    icon: Sparkles,
    title: "Premium delivery",
    text: "Clean systems, polished brand touchpoints, and a refined consulting experience.",
  },
];

export function AboutPreview() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(163,177,138,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_20%),linear-gradient(180deg,#0c0c10_0%,#12121a_100%)]" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container-page relative">
        <div className="grid gap-10 rounded-[40px] border border-white/10 bg-[linear-gradient(180deg,rgba(14,14,22,0.96),rgba(8,8,12,0.98))] px-6 py-10 shadow-[0_35px_100px_rgba(0,0,0,0.45)] lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage-300">
              About Preview
            </p>
            <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
              A premium consultant who blends strategy, design thinking, and automation
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
              I work at the intersection of AI, digital marketing, and conversion psychology to help businesses grow
              with clarity and control.
            </p>
            <p className="mt-5 max-w-xl text-base leading-8 text-zinc-400">
              With a polished, outcome-focused approach, I help brands design growth systems that feel premium,
              perform efficiently, and scale without unnecessary complexity.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href="/about"
                className="group border border-white/10 bg-white/5 text-white hover:border-sage-300/40 hover:bg-sage-300/10"
              >
                Read More
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {capabilityCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 hover:border-sage-300/30 hover:bg-white/[0.07]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sage-300">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <p className="mt-4 font-heading text-lg font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{item.text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[42px] bg-sage-400/10 blur-3xl" />
            <div className="absolute right-10 top-6 h-20 w-20 rounded-full border border-white/10 bg-white/5 blur-[1px]" />

            <div className="relative mx-auto max-w-2xl">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[34px] border border-white/5 bg-white/5" />
              <div className="absolute inset-0 translate-x-8 translate-y-8 rounded-[34px] border border-sage-300/15 bg-sage-300/5" />

              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 24 }}
                className="glass relative overflow-hidden rounded-[34px] p-5 shadow-[0_35px_110px_rgba(0,0,0,0.5)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(163,177,138,0.16),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_24%)] opacity-80" />

                <div className="relative grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="overflow-hidden rounded-[28px] border border-white/10 bg-zinc-950/80">
                    <div className="relative aspect-[4/5]">
                      <Image
                        src="/images/about-placeholder.svg"
                        alt="Professional portrait placeholder"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="rounded-[26px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-sage-300">
                        Consulting Snapshot
                      </p>
                      <p className="mt-3 font-heading text-2xl font-semibold text-white">Growth systems with precision</p>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">
                        Every engagement is structured around clarity, high trust, and measurable momentum.
                      </p>
                    </div>

                    <div className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.26em] text-zinc-300">
                        Advisory Focus
                      </p>
                      <div className="mt-4 space-y-3">
                        {[
                          "AI-powered marketing planning",
                          "Conversion-focused funnel optimization",
                          "Premium brand and growth systems",
                        ].map((item) => (
                          <div key={item} className="flex items-center gap-3 text-sm text-zinc-200">
                            <span className="h-2 w-2 rounded-full bg-sage-300 shadow-[0_0_12px_rgba(163,177,138,0.45)]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative mt-4 grid gap-4 sm:grid-cols-3">
                  {[
                    ["100+", "Projects delivered"],
                    ["5+", "Years experience"],
                    ["ROI", "Focused systems"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-[24px] border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl">
                      <p className="font-heading text-2xl font-semibold text-white">{value}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-400">{label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
