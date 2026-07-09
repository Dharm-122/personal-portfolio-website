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
      className={cn(
        "group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(18,18,36,0.9),rgba(14,14,30,0.96))] p-6 shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-2xl",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(163,177,138,0.14),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(37,33,63,0.24),transparent_30%)] opacity-70" />
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-sage-400/20 bg-sage-400/12 text-sage-300 shadow-[0_0_24px_rgba(163,177,138,0.18)]">
        <SafeIcon className="h-6 w-6" />
      </div>
      <h3 className="relative mt-5 font-heading text-xl font-semibold text-white">{title}</h3>
      <p className="relative mt-3 text-sm leading-6 text-[#B8B8C5]">{description}</p>
      <Link href={href} className="relative mt-6 inline-flex items-center gap-2 text-sm font-medium text-sage-300 transition-colors hover:text-sage-200">
        Learn More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}
