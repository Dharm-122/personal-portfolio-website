"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { BlogCard } from "@/components/blog-card";
import { NewsletterForm } from "@/components/newsletter-form";

export function BlogBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(blogPosts.map((post) => post.category))];

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesQuery =
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === "All" || post.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [category, query]);

  const featured = blogPosts.find((post) => post.featured) ?? blogPosts[0];

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
      <div className="grid gap-8">
        <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <label className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-white shadow-[0_20px_80px_rgba(0,0,0,.18)] backdrop-blur-2xl">
            <Search className="h-4 w-4 text-sage-300" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles"
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-[#B8B8C5]"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  category === item
                    ? "bg-sage-400 text-[#0E0E1E] shadow-[0_0_24px_rgba(163,177,138,0.18)]"
                    : "border border-white/[0.08] bg-white/[0.04] text-white/88 hover:border-white/[0.14] hover:bg-white/[0.07]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[34px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(18,18,36,0.9),rgba(14,14,30,0.96))] p-6 shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sage-400">Featured Article</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-white">{featured.title}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#B8B8C5]">{featured.excerpt}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>

        <div className="flex items-center justify-between rounded-[28px] border border-white/[0.08] bg-white/[0.04] px-5 py-4 text-sm text-[#B8B8C5] backdrop-blur-2xl">
          <span>Showing {filtered.length} articles</span>
          <div className="flex gap-2">
            <button className="rounded-full bg-sage-400 px-4 py-2 text-[#0E0E1E]">1</button>
            <button className="rounded-full px-4 py-2 text-white hover:bg-white/[0.06]">2</button>
            <button className="rounded-full px-4 py-2 text-white hover:bg-white/[0.06]">3</button>
          </div>
        </div>
      </div>

      <aside className="grid gap-6">
        <div className="rounded-[30px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(18,18,36,0.88),rgba(14,14,30,0.96))] p-6 shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-2xl">
          <h3 className="font-heading text-2xl font-semibold text-white">Newsletter Subscription</h3>
          <p className="mt-3 text-sm leading-7 text-[#B8B8C5]">
            Get thoughtful updates on AI marketing, SEO, and conversion systems.
          </p>
          <div className="mt-5">
            <NewsletterForm compact />
          </div>
        </div>
        <div className="rounded-[30px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(18,18,36,0.88),rgba(14,14,30,0.96))] p-6 shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-2xl">
          <h3 className="font-heading text-2xl font-semibold text-white">Sidebar</h3>
          <div className="mt-4 grid gap-3 text-sm text-[#B8B8C5]">
            <p>• Latest insights</p>
            <p>• Service links</p>
            <p>• Consultation shortcut</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
