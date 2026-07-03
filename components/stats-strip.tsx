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
          className="glass rounded-3xl p-6 text-center"
        >
          <p className="font-heading text-4xl font-semibold text-forest-900">{stat.value}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-ink/60">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
