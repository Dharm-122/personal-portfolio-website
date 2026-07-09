"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";

export function TestimonialsCarousel() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (!visible) return;
        const children = Array.from(el.children);
        setIndex(Math.max(children.indexOf(visible.target as Element), 0));
      },
      { threshold: 0.7 },
    );
    Array.from(el.children).forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  const scroll = (direction: -1 | 1) => {
    const el = ref.current;
    if (!el) return;
    const next = Math.max(0, Math.min(testimonials.length - 1, index + direction));
    el.children[next]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <div className="relative">
      <div className="mb-6 flex items-center justify-end gap-3">
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-white backdrop-blur-2xl"
          onClick={() => scroll(-1)}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-white backdrop-blur-2xl"
          onClick={() => scroll(1)}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <div ref={ref} className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
        {testimonials.map((testimonial) => (
          <motion.article
            key={testimonial.name}
            className="min-w-[min(100%,22rem)] snap-center rounded-[28px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(18,18,36,0.9),rgba(14,14,30,0.96))] p-6 shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-2xl"
            initial={{ opacity: 0.6, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-1 text-sage-400">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <p className="mt-5 text-sm leading-7 text-[#B8B8C5]">"{testimonial.quote}"</p>
            <div className="mt-6">
              <p className="font-semibold text-white">{testimonial.name}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
