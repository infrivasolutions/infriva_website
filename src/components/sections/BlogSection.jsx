import Link from "next/link";
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
    <section className="border-t border-border bg-surface-alt">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-primary-light px-4 py-2 text-sm font-semibold text-primary-dark">
              Latest Insights
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Insights to grow your business
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-muted md:text-lg">
              Explore practical guides about web development, CRM software, SEO,
              Meta Ads, lead generation and business automation.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex w-fit items-center justify-center rounded-xl border border-primary px-5 py-3 font-semibold text-primary transition hover:bg-primary hover:text-white"
          >
            View all blogs
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestBlogs.map((blog) => (
            <BlogCard key={blog.id || blog.slug} blog={blog} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-dark"
          >
            Explore all blogs
          </Link>
        </div>
      </div>
    </section>
  );
}
