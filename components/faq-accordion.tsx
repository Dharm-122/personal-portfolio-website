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
          <div key={item.question} className="rounded-3xl border border-forest-100 bg-white shadow-sm">
            <button
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpen(active ? -1 : index)}
              aria-expanded={active}
            >
              <span className="font-medium text-forest-900">{item.question}</span>
              <ChevronDown className={`h-5 w-5 transition ${active ? "rotate-180" : ""}`} />
            </button>
            {active ? <div className="px-5 pb-5 text-sm leading-7 text-ink/70">{item.answer}</div> : null}
          </div>
        );
      })}
    </div>
  );
}
