import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, Share2, UserRound, MessageSquareText } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blog";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <div>
      <PageHero eyebrow="Blog Details" title={post.title} description={post.excerpt}>
        <Button href="/contact">Book Consultation</Button>
      </PageHero>

      <section className="section-pad relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,18,36,0.2),rgba(14,14,30,0.82))]" />
        <div className="absolute inset-0 grid-pattern opacity-[0.12]" />
        <div className="container-page relative grid gap-10 lg:grid-cols-[1fr_300px]">
          <article className="rounded-[30px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(18,18,36,0.9),rgba(14,14,30,0.96))] p-7 shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-2xl">
            <div className="flex flex-wrap items-center gap-5 text-sm text-[#B8B8C5]">
              <span className="inline-flex items-center gap-1.5">
                <UserRound className="h-4 w-4" />
                {post.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readingTime}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                {post.publishedAt}
              </span>
            </div>
            <div className="mt-8 grid gap-5 text-base leading-8 text-[#B8B8C5]">
              {post.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-white/[0.08] pt-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-sm text-white">
                <Share2 className="h-4 w-4" />
                Share
              </span>
              <Button href="https://www.linkedin.com" variant="secondary" target="_blank" rel="noreferrer">
                LinkedIn
              </Button>
              <Button href="https://x.com" variant="secondary" target="_blank" rel="noreferrer">
                X
              </Button>
            </div>
          </article>

          <aside className="grid gap-6">
            <div className="rounded-[30px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(18,18,36,0.88),rgba(14,14,30,0.96))] p-6 shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-2xl">
              <h3 className="font-heading text-2xl font-semibold text-white">Related Articles</h3>
              <div className="mt-4 grid gap-4">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.04] px-4 py-3 text-sm text-white"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-[30px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(18,18,36,0.88),rgba(14,14,30,0.96))] p-6 shadow-[0_20px_80px_rgba(0,0,0,.35)] backdrop-blur-2xl">
              <h3 className="font-heading text-2xl font-semibold text-white">Comments</h3>
              <p className="mt-3 text-sm leading-7 text-[#B8B8C5]">
                Reader comments can be integrated later with a CMS or database-backed module.
              </p>
              <div className="mt-4 rounded-2xl border border-dashed border-white/[0.12] p-4 text-sm text-[#B8B8C5]">
                <MessageSquareText className="mb-2 h-5 w-5 text-sage-400" />
                Comment section placeholder
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-page">
          <div className="rounded-[34px] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(18,18,36,0.92),rgba(14,14,30,0.98))] px-6 py-10 text-white shadow-[0_35px_100px_rgba(0,0,0,.55)] sm:px-10">
            <SectionHeading
              eyebrow="CTA Banner"
              title="Want a premium growth plan for your brand?"
              description="Book a consultation and we will outline the right mix of AI, SEO, content, and automation."
            />
            <div className="mt-8">
              <Button href="/contact" className="bg-white text-[#0E0E1E] hover:bg-white/90">
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
