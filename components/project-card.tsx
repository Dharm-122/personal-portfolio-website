import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";

export function ProjectCard({ title, category, description, image }: Project) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className="overflow-hidden rounded-[30px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(18,18,36,0.9),rgba(14,14,30,0.96))] shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-2xl"
    >
      <div className="relative aspect-[4/3] bg-[#121224]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage-400">{category}</p>
        <h3 className="mt-3 font-heading text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-[#B8B8C5]">{description}</p>
        <Button href="/contact" variant="secondary" className="mt-6">
          View Details <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </motion.article>
  );
}
