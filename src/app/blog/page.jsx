import BlogCard from "@/components/blog/BlogCard";
import { blogs } from "@/data/blogs";
import { BookOpen, Sparkles } from "lucide-react";

export const metadata = {
  title: "Digital Marketing, CRM & Web Development Blog",

  description:
    "Read practical guides about web development, CRM software, SEO, Meta Ads, lead generation, automation, UI/UX design and business growth.",

  alternates: {
    canonical: "/blog",
  },

  openGraph: {
    title: "Digital Marketing, CRM & Web Development Blog",
    description:
      "Practical insights about websites, CRM software, SEO, Meta Ads, automation and digital business growth.",
    url: "/blog",
    siteName: "Infriva Solutions",
    type: "website",
    locale: "en_IN",

    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Infriva Solutions digital marketing, CRM and web development blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing, CRM & Web Development Blog",
    description:
      "Web development, CRM, SEO, lead generation and business automation insights.",
    images: ["/images/og-image.webp"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const topics = [
  "Web Development",
  "CRM Software",
  "SEO",
  "Meta Ads",
  "Automation",
];

export default function BlogPage() {
  const sortedBlogs = [...blogs].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <main className="overflow-hidden bg-slate-950 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.45),transparent_35%),radial-gradient(circle_at_top_right,rgba(217,70,239,0.25),transparent_35%),linear-gradient(180deg,#020617_0%,#111827_55%,#1e1b4b_100%)]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:70px_70px]" />

        {/* Glows */}
        <div className="pointer-events-none absolute -left-36 top-28 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-fuchsia-500/15 blur-3xl" />

        <div className="container-custom relative z-10 py-20 text-center md:py-28 lg:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 shadow-xl backdrop-blur">
            <BookOpen
              size={16}
              className="text-violet-300"
              aria-hidden="true"
            />

            <span className="text-sm font-bold text-violet-100">
              Infriva Insights
            </span>
          </div>

          <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Web, CRM, SEO and
            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-white bg-clip-text text-transparent">
              digital growth insights
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg lg:text-xl">
            Actionable guides to help businesses generate more leads, automate
            operations, improve online visibility and grow using modern
            technology.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {topics.map((topic) => (
              <span
                key={topic}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200 shadow-lg backdrop-blur transition hover:bg-white/15"
              >
                <Sparkles
                  size={14}
                  className="text-violet-300"
                  aria-hidden="true"
                />

                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="relative overflow-hidden border-b border-white/10 bg-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.2),transparent_32%),radial-gradient(circle_at_top_right,rgba(217,70,239,0.12),transparent_30%)]" />

        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:70px_70px]" />

        <div className="container-custom section-padding relative z-10">
          <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between lg:mb-14">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-sm font-bold text-violet-300">
                <Sparkles size={16} aria-hidden="true" />
                Latest articles
              </div>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Explore our latest insights
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                Learn practical strategies for improving your website,
                marketing, lead management, automation and business operations.
              </p>
            </div>

            {sortedBlogs.length > 0 && (
              <div className="w-fit rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-300 backdrop-blur">
                {sortedBlogs.length}{" "}
                {sortedBlogs.length === 1 ? "article" : "articles"}
              </div>
            )}
          </div>

          {sortedBlogs.length > 0 ? (
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {sortedBlogs.map((blog) => (
                <BlogCard key={blog.id || blog.slug} blog={blog} dark />
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-white/10 bg-white/10 px-6 py-16 text-center shadow-2xl backdrop-blur-xl">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/15 text-violet-300">
                <BookOpen size={28} aria-hidden="true" />
              </div>

              <h2 className="mt-6 text-2xl font-black text-white">
                No articles published yet
              </h2>

              <p className="mx-auto mt-3 max-w-md leading-7 text-slate-300">
                New articles about web development, CRM, SEO, Meta Ads and
                digital growth will be published soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
