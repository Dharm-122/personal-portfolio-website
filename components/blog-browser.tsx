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
          <label className="flex items-center gap-3 rounded-2xl border border-forest-100 bg-white px-4 py-3 shadow-sm">
            <Search className="h-4 w-4 text-ink/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles"
              className="w-full bg-transparent text-sm outline-none"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  category === item ? "bg-forest-800 text-white" : "bg-white text-forest-800 hover:bg-forest-50"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[34px] border border-forest-100 bg-white p-6 shadow-premium">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sage-500">Featured Article</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-forest-900">{featured.title}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-ink/70">{featured.excerpt}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>

        <div className="flex items-center justify-between rounded-[28px] border border-forest-100 bg-white px-5 py-4 text-sm text-ink/70">
          <span>Showing {filtered.length} articles</span>
          <div className="flex gap-2">
            <button className="rounded-full bg-forest-800 px-4 py-2 text-white">1</button>
            <button className="rounded-full px-4 py-2 hover:bg-forest-50">2</button>
            <button className="rounded-full px-4 py-2 hover:bg-forest-50">3</button>
          </div>
        </div>
      </div>

      <aside className="grid gap-6">
        <div className="rounded-[30px] border border-forest-100 bg-white p-6 shadow-sm">
          <h3 className="font-heading text-2xl font-semibold text-forest-900">Newsletter Subscription</h3>
          <p className="mt-3 text-sm leading-7 text-ink/70">
            Get thoughtful updates on AI marketing, SEO, and conversion systems.
          </p>
          <div className="mt-5">
            <NewsletterForm compact />
          </div>
        </div>
        <div className="rounded-[30px] border border-forest-100 bg-white p-6 shadow-sm">
          <h3 className="font-heading text-2xl font-semibold text-forest-900">Sidebar</h3>
          <div className="mt-4 grid gap-3 text-sm text-ink/70">
            <p>• Latest insights</p>
            <p>• Service links</p>
            <p>• Consultation shortcut</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
