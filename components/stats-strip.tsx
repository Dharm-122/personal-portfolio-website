"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "100+", label: "Projects" },
  { value: "5+", label: "Years Experience" },
  { value: "AI", label: "Powered Strategies" },
  { value: "ROI", label: "Focused Growth" },
];

export function StatsStrip() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08, duration: 0.5 }}
          className="rounded-3xl border border-white/[0.08] bg-[linear-gradient(180deg,rgba(18,18,36,0.88),rgba(14,14,30,0.96))] p-6 text-center shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-2xl"
        >
          <p className="font-heading text-4xl font-semibold text-white">{stat.value}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#B8B8C5]">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
