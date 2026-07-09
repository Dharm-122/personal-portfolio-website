"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Item = { question: string; answer: string };

export function FaqAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="grid gap-3">
      {items.map((item, index) => {
        const active = open === index;
        return (
          <div key={item.question} className="rounded-3xl border border-white/[0.08] bg-[linear-gradient(180deg,rgba(18,18,36,0.88),rgba(14,14,30,0.96))] shadow-[0_20px_80px_rgba(0,0,0,.3)]">
            <button
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpen(active ? -1 : index)}
              aria-expanded={active}
            >
              <span className="font-medium text-white">{item.question}</span>
              <ChevronDown className={`h-5 w-5 text-sage-400 transition ${active ? "rotate-180" : ""}`} />
            </button>
            {active ? <div className="px-5 pb-5 text-sm leading-7 text-[#B8B8C5]">{item.answer}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
