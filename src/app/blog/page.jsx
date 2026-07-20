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

export default function BlogPage() {
  const sortedBlogs = [...blogs].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative border-b border-border bg-surface-alt">
        {/* Decorative backgrounds */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-light/80 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-primary-light/50 blur-3xl"
        />

        <div className="container-custom relative py-20 text-center md:py-28 lg:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary-light px-4 py-2 text-sm font-semibold text-primary-dark">
            <BookOpen size={16} aria-hidden="true" />
            Infriva Insights
          </div>

          <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Web, CRM, SEO and{" "}
            <span className="text-primary">digital growth insights</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg lg:text-xl">
            Actionable guides to help businesses generate more leads, automate
            operations, improve online visibility and grow using modern
            technology.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {[
              "Web Development",
              "CRM Software",
              "SEO",
              "Meta Ads",
              "Automation",
            ].map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground shadow-sm"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="relative bg-background">
        <div className="container-custom section-padding">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:mb-14">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                <Sparkles size={16} aria-hidden="true" />
                Latest articles
              </div>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Explore our latest insights
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-muted">
                Learn practical strategies for improving your website,
                marketing, lead management and business operations.
              </p>
            </div>

            {sortedBlogs.length > 0 && (
              <p className="text-sm font-medium text-muted">
                {sortedBlogs.length}{" "}
                {sortedBlogs.length === 1 ? "article" : "articles"}
              </p>
            )}
          </div>

          {sortedBlogs.length > 0 ? (
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {sortedBlogs.map((blog) => (
                <BlogCard key={blog.id || blog.slug} blog={blog} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-border bg-surface px-6 py-16 text-center shadow-sm">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light text-primary">
                <BookOpen size={26} aria-hidden="true" />
              </div>

              <h2 className="mt-6 text-2xl font-semibold text-foreground">
                No articles published yet
              </h2>

              <p className="mx-auto mt-3 max-w-md leading-7 text-muted">
                New articles about web development, CRM, SEO and digital growth
                will be published soon.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
