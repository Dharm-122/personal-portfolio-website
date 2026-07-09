"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BrainCircuit, Sparkles, Target } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

const advisoryFocus = [
  "AI-powered marketing planning",
  "Conversion-focused funnel optimization",
  "Premium brand and growth systems",
];

const metrics = [
  ["100+", "Projects delivered"],
  ["5+", "Years experience"],
  ["ROI", "Focused systems"],
];

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-[#0E0E1E] px-[8%] py-[120px]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0E0E1E_0%,#121224_100%)]" />
      <div
        aria-hidden="true"
        className="absolute -bottom-28 -right-24 h-[42rem] w-[42rem] rounded-full bg-[#25213F]/70 blur-[140px] animate-[pulse_10s_ease-in-out_infinite]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-24 top-10 h-[28rem] w-[28rem] rounded-full bg-white/[0.03] blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-2xl text-center lg:text-left"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-sage-400">
              ABOUT PREVIEW
            </p>
            <h2 className="mt-5 text-balance font-heading text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[60px]">
              A premium consultant who blends strategy, design thinking, and automation
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#B8B8C5] lg:mx-0">
              I work at the intersection of AI, digital marketing, and conversion psychology to help businesses grow
              with clarity and control.
            </p>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#B8B8C5] lg:mx-0">
              With a polished, outcome-focused approach, I help brands design growth systems that feel premium,
              perform efficiently, and scale without unnecessary complexity.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {capabilityCards.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="rounded-[24px] border border-white/[0.08] bg-white/[0.03] p-5 text-left shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur-2xl"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] text-sage-400">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <p className="mt-4 font-heading text-lg font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#B8B8C5]">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
            className="relative order-first lg:order-none"
          >
            <div aria-hidden="true" className="absolute -inset-8 rounded-[44px] bg-[#25213F]/20 blur-3xl" />
            <div
              aria-hidden="true"
              className="absolute left-8 top-8 h-24 w-24 rounded-full bg-sage-400/10 blur-2xl animate-[pulse_8s_ease-in-out_infinite]"
            />
            <div className="relative mx-auto w-full max-w-[680px]">
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-4 translate-y-4 rounded-[28px] border border-white/[0.06] bg-white/[0.03]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-8 translate-y-8 rounded-[28px] border border-white/[0.04] bg-[#121224]/60"
              />

              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                className={cn(
                  "relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(18,18,36,0.92),rgba(14,14,30,0.96))]",
                  "p-5 shadow-[0_20px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl will-change-transform",
                )}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(163,177,138,0.18),transparent_28%),radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(37,33,63,0.28),transparent_35%)]"
                />
                <div className="relative grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
                  <div className="relative overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#0E0E1E] px-4 py-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_25px_80px_rgba(0,0,0,0.4)]">
                    <div
                      aria-hidden="true"
                      className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage-400/10 blur-3xl"
                    />
                    <div className="absolute inset-x-6 top-4 flex items-center justify-between">
                      <span className="inline-flex rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-sage-400">
                        Consulting Snapshot
                      </span>
                      <span className="inline-flex rounded-full border border-sage-400/20 bg-sage-400/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-sage-300">
                        Premium Portrait
                      </span>
                    </div>

                    <div className="relative mx-auto mt-10 aspect-[4/5] w-full max-w-[360px]">
                      <div
                        aria-hidden="true"
                        className="absolute inset-[10%] rounded-full bg-sage-400/16 blur-3xl animate-[pulse_7s_ease-in-out_infinite]"
                      />
                      <div className="absolute inset-0 rounded-[30px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_18px_70px_rgba(0,0,0,0.45)]" />
                      <div className="absolute inset-4 rounded-[24px] border border-white/[0.06] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_30%),linear-gradient(180deg,rgba(18,18,36,0.24),rgba(18,18,36,0.65))]" />
                      <Image
                        src="/images/about-placeholder.svg"
                        alt="Professional portrait placeholder"
                        fill
                        priority
                        className="relative z-10 object-contain p-5 drop-shadow-[0_24px_40px_rgba(0,0,0,0.45)]"
                        sizes="(max-width: 1024px) 100vw, 44vw"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-between gap-4">
                    <div className="rounded-[22px] border border-white/[0.08] bg-white/[0.04] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.24)] backdrop-blur-2xl">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage-400">
                        Consulting Snapshot
                      </p>
                      <p className="mt-4 font-heading text-2xl font-semibold text-white">
                        Growth systems with precision
                      </p>
                      <p className="mt-3 text-sm leading-7 text-[#B8B8C5]">
                        Every engagement is structured around clarity, high trust, and measurable momentum.
                      </p>

                      <div className="mt-5 space-y-3">
                        {advisoryFocus.map((item) => (
                          <div
                            key={item}
                            className="flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-[#121224]/70 px-4 py-3 text-sm text-white/88"
                          >
                            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sage-400 shadow-[0_0_12px_rgba(163,177,138,0.45)]" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[22px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#B8B8C5]">
                        Advisory Focus
                      </p>
                      <div className="mt-5 grid gap-3">
                        {metrics.map(([value, label]) => (
                          <div
                            key={label}
                            className="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-[#0E0E1E]/70 px-4 py-3"
                          >
                            <p className="font-heading text-xl font-semibold text-white">{value}</p>
                            <p className="text-right text-xs uppercase tracking-[0.2em] text-[#B8B8C5]">{label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative mt-5 flex flex-col gap-4 rounded-[24px] border border-white/[0.08] bg-[#121224]/80 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl sm:flex-row sm:items-center sm:justify-between">
                  <div className="max-w-xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage-400">
                      Premium Delivery
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#B8B8C5]">
                      Clean systems, polished brand touchpoints, and a refined consulting experience designed to feel
                      confident and calm.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <div className="group inline-flex">
                      <Button
                        href="/about"
                        variant="secondary"
                        className="border border-white/[0.12] bg-transparent px-[34px] py-4 text-sm font-medium text-white shadow-none hover:-translate-y-0.5 hover:border-sage-400 hover:bg-sage-400 hover:text-[#0E0E1E] hover:shadow-[0_0_30px_rgba(163,177,138,0.35)]"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </Button>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full border border-white/[0.08] px-[34px] py-4 text-sm font-medium text-[#B8B8C5] transition-all duration-300 hover:border-white/[0.14] hover:text-white"
                    >
                      Book a Call
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
