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
      className="overflow-hidden rounded-[30px] border border-forest-100 bg-white shadow-premium"
    >
      <div className="relative aspect-[4/3] bg-forest-100">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage-500">{category}</p>
        <h3 className="mt-3 font-heading text-2xl font-semibold text-forest-900">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-ink/70">{description}</p>
        <Button href="/contact" variant="secondary" className="mt-6">
          View Details <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </motion.article>
  );
}
