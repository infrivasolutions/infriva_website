import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";
import { blogs } from "@/data/blogs";

export default function BlogSection() {
  const latestBlogs = [...blogs]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, 3);

  if (!latestBlogs.length) {
    return null;
  }

  return (
    <section className="relative overflow-hidden border-y border-border bg-surface-alt">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary-light/70 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-primary-light/40 blur-3xl"
      />

      <div className="container-custom section-padding relative">
        {/* Section heading */}
        <div className="mb-12 flex flex-col gap-7 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary-light px-4 py-2 text-sm font-semibold text-primary-dark">
              <BookOpen size={16} aria-hidden="true" />
              Latest Insights
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Insights designed to help your{" "}
              <span className="text-primary">business grow</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-muted md:text-lg">
              Explore practical guides about web development, CRM software, SEO,
              Meta Ads, lead generation, automation, and digital business
              growth.
            </p>
          </div>

          <Link
            href="/blog"
            className="hidden w-fit items-center justify-center gap-2 rounded-xl border border-primary bg-transparent px-6 py-3 font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:shadow-lg lg:inline-flex"
          >
            View all blogs
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>

        {/* Blog cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {latestBlogs.map((blog) => (
            <BlogCard key={blog.id || blog.slug} blog={blog} />
          ))}
        </div>

        {/* Mobile and tablet button */}
        <div className="mt-10 flex justify-center lg:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-lg"
          >
            Explore all blogs
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
