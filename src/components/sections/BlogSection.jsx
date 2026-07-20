import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
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
    <section className="relative overflow-hidden border-y border-white/10 bg-slate-950 text-white">
      {/* Hero-matching background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.22),transparent_35%),linear-gradient(180deg,#020617_0%,#111827_55%,#1e1b4b_100%)]" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:70px_70px]" />

      {/* Glows */}
      <div className="pointer-events-none absolute -left-28 top-24 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl" />

      <div className="container-custom section-padding relative z-10">
        <div className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 shadow-xl backdrop-blur">
              <BookOpen
                size={16}
                className="text-violet-300"
                aria-hidden="true"
              />

              <span className="text-sm font-bold text-violet-100">
                Latest Insights
              </span>
            </div>

            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Practical insights that help your
              <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-white bg-clip-text text-transparent">
                business grow digitally
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Explore actionable guides about web development, custom CRM
              software, SEO, Meta Ads, lead generation, WhatsApp automation and
              digital growth.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Web Development", "CRM", "SEO", "Meta Ads", "Automation"].map(
                (topic) => (
                  <span
                    key={topic}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-200 backdrop-blur"
                  >
                    <Sparkles
                      size={13}
                      className="text-violet-300"
                      aria-hidden="true"
                    />

                    {topic}
                  </span>
                ),
              )}
            </div>
          </div>

          <Link
            href="/blog"
            className="group hidden w-fit items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-6 py-3.5 font-extrabold text-white shadow-xl backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-slate-950 lg:inline-flex"
          >
            View all blogs
            <ArrowRight
              size={18}
              aria-hidden="true"
              className="ml-2 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {latestBlogs.map((blog) => (
            <BlogCard key={blog.id || blog.slug} blog={blog} dark />
          ))}
        </div>

        <div className="mt-10 flex justify-center lg:hidden">
          <Link
            href="/blog"
            className="group inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3.5 font-extrabold text-slate-950 shadow-2xl shadow-violet-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-50"
          >
            Explore all blogs
            <ArrowRight
              size={18}
              aria-hidden="true"
              className="ml-2 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
