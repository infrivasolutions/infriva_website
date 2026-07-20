import BlogCard from "@/components/blog/BlogCard";
import { blogs } from "@/data/blogs";

export const metadata = {
  title: "Digital Marketing, CRM & Web Development Blog",
  description:
    "Read practical guides about web development, CRM software, SEO, Meta Ads, lead generation, automation, UI/UX design and business growth.",

  alternates: {
    canonical: "/blog",
  },

  openGraph: {
    title: "Infriva Solutions Blog",
    description:
      "Practical insights about websites, CRM software, SEO, Meta Ads, automation and digital growth.",
    url: "/blog",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Infriva Solutions Blog",
    description:
      "Web development, CRM, SEO, lead generation and business automation insights.",
  },
};

export default function BlogPage() {
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt),
  );

  return (
    <main>
      <section className="border-b border-border bg-surface-alt">
        <div className="mx-auto max-w-7xl px-5 py-20 text-center md:px-8 md:py-28">
          <span className="inline-flex rounded-full bg-primary-light px-4 py-2 text-sm font-semibold text-primary-dark">
            Infriva Insights
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            Web, CRM, SEO and Digital Growth Insights
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
            Actionable guides to help businesses generate leads, automate
            operations, improve online visibility and grow using technology.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        {sortedBlogs.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sortedBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-border bg-surface p-12 text-center">
            <h2 className="text-2xl font-semibold text-foreground">
              No articles published yet
            </h2>

            <p className="mt-3 text-muted">
              New articles will be available soon.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
