import Link from "next/link";
import { ArrowRight, Sparkles, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  className?: string;
};

export function ServiceCard({ title, description, icon: Icon, href, className }: Props) {
  const SafeIcon = Icon ?? Sparkles;
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={cn("glass group rounded-[28px] p-6 soft-ring", className)}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-50 text-forest-800">
        <SafeIcon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 font-heading text-xl font-semibold text-forest-900">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-ink/70">{description}</p>
      <Link href={href} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-forest-800">
        Learn More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}
