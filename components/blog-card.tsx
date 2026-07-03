import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock, UserRound } from "lucide-react";
import { motion } from "framer-motion";
import type { BlogPost } from "@/types";

export function BlogCard(post: BlogPost) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="overflow-hidden rounded-[28px] border border-forest-100 bg-white shadow-premium"
    >
      <div className="relative aspect-[16/10] bg-forest-100">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage-500">{post.category}</p>
        <h3 className="mt-3 font-heading text-2xl font-semibold text-forest-900">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="mt-3 text-sm leading-6 text-ink/70">{post.excerpt}</p>
        <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-ink/55">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" />
            {post.publishedAt}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readingTime}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <UserRound className="h-3.5 w-3.5" />
            {post.author}
          </span>
        </div>
      </div>
    </motion.article>
  );
}
