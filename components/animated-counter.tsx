"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  end: number;
  label: string;
  suffix?: string;
};

export function AnimatedCounter({ end, label, suffix = "" }: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let raf = 0;
    const duration = 1200;
    const startTime = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - startTime) / duration, 1);
      setCount(Math.round(end * progress));
      if (progress < 1) raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [end]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-white/[0.08] bg-[linear-gradient(180deg,rgba(18,18,36,0.88),rgba(14,14,30,0.96))] p-6 text-center shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-2xl"
    >
      <p className="font-heading text-4xl font-semibold text-white">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#B8B8C5]">{label}</p>
    </motion.div>
  );
}
