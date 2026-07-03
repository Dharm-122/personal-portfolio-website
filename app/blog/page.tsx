import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { BlogBrowser } from "@/components/blog-browser";

export const metadata: Metadata = {
  title: "Blog",
  description: "Premium blog posts about AI digital marketing, SEO, automation, and growth strategy.",
};

export default function BlogPage() {
  return (
    <div>
      <PageHero
        eyebrow="Blog"
        title="Insights for ambitious brands"
        description="Professional articles, practical frameworks, and strategic thinking for modern marketing teams."
      />
      <section className="section-pad">
        <div className="container-page">
          <BlogBrowser />
        </div>
      </section>
    </div>
  );
}
