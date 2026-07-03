"use client";

import { blogPosts } from "@/data/blog";
import { BlogCard } from "@/components/blog-card";

export function HomeBlogPreview() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {blogPosts.slice(0, 3).map((post) => (
        <BlogCard key={post.slug} {...post} />
      ))}
    </div>
  );
}
