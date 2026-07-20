import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  UserRound,
} from "lucide-react";

import BlogCard from "@/components/blog/BlogCard";
import { blogs, getBlogBySlug } from "@/data/blogs";

const SITE_URL = "https://www.infrivasolutions.com";

const getAbsoluteUrl = (path = "") => {
  if (!path) {
    return `${SITE_URL}/images/og-image.webp`;
  }

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

const formatDate = (date) => {
  if (!date) return "";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsedDate);
};

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog article could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `${SITE_URL}/blog/${blog.slug}`;
  const imageUrl = getAbsoluteUrl(blog.image);

  return {
    title: blog.seoTitle || blog.title,
    description: blog.metaDescription || blog.excerpt,
    keywords: blog.keywords || [],

    authors: [
      {
        name: blog.author || "Infriva Solutions",
        url: SITE_URL,
      },
    ],

    creator: blog.author || "Infriva Solutions",
    publisher: "Infriva Solutions",

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: blog.seoTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      url: canonicalUrl,
      siteName: "Infriva Solutions",
      type: "article",
      locale: "en_IN",
      publishedTime: blog.publishedAt,
      modifiedTime: blog.updatedAt || blog.publishedAt,
      authors: [blog.author || "Infriva Solutions"],

      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blog.imageAlt || blog.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.seoTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      images: [imageUrl],
    },

    robots: {
      index: true,
      follow: true,

      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const canonicalUrl = `${SITE_URL}/blog/${blog.slug}`;
  const imageUrl = getAbsoluteUrl(blog.image);

  const relatedBlogs = blogs
    .filter(
      (item) =>
        item.slug !== blog.slug &&
        (item.category === blog.category || !blog.category),
    )
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, 3);

  const fallbackRelatedBlogs = blogs
    .filter((item) => item.slug !== blog.slug)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, 3);

  const displayedRelatedBlogs =
    relatedBlogs.length > 0 ? relatedBlogs : fallbackRelatedBlogs;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.metaDescription || blog.excerpt,
    image: [imageUrl],
    datePublished: blog.publishedAt,
    dateModified: blog.updatedAt || blog.publishedAt,
    inLanguage: "en-IN",
    isAccessibleForFree: true,

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },

    author: {
      "@type": "Organization",
      name: blog.author || "Infriva Solutions",
      url: SITE_URL,
    },

    publisher: {
      "@type": "Organization",
      name: "Infriva Solutions",
      url: SITE_URL,

      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`,
      },
    },

    articleSection: blog.category,

    keywords: Array.isArray(blog.keywords)
      ? blog.keywords.join(", ")
      : blog.keywords || "",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <main className="overflow-hidden bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      <article>
        {/* Hero */}
        <header className="relative overflow-hidden border-b border-border bg-surface-alt">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-light/80 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-primary-light/50 blur-3xl"
          />

          <div className="container-custom relative py-16 md:py-24">
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted"
            >
              <Link href="/" className="transition-colors hover:text-primary">
                Home
              </Link>

              <span aria-hidden="true">/</span>

              <Link
                href="/blog"
                className="transition-colors hover:text-primary"
              >
                Blog
              </Link>

              <span aria-hidden="true">/</span>

              <span className="max-w-xs truncate text-foreground">
                {blog.category}
              </span>
            </nav>

            <div className="max-w-5xl">
              {blog.category && (
                <span className="inline-flex rounded-full border border-primary/15 bg-primary-light px-4 py-2 text-sm font-semibold text-primary-dark">
                  {blog.category}
                </span>
              )}

              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {blog.title}
              </h1>

              {blog.excerpt && (
                <p className="mt-6 max-w-3xl text-lg leading-8 text-muted md:text-xl">
                  {blog.excerpt}
                </p>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted">
                <span className="inline-flex items-center gap-2">
                  <UserRound size={16} aria-hidden="true" />
                  By {blog.author || "Infriva Solutions"}
                </span>

                {blog.publishedAt && (
                  <time
                    dateTime={blog.publishedAt}
                    className="inline-flex items-center gap-2"
                  >
                    <CalendarDays size={16} aria-hidden="true" />
                    {formatDate(blog.publishedAt)}
                  </time>
                )}

                {blog.readTime && (
                  <span className="inline-flex items-center gap-2">
                    <Clock3 size={16} aria-hidden="true" />
                    {blog.readTime}
                  </span>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Featured image */}
        <div className="container-custom py-10 md:py-14">
          <div className="relative aspect-video overflow-hidden rounded-3xl border border-border bg-surface-alt shadow-sm">
            <Image
              src={blog.image}
              alt={blog.imageAlt || blog.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1280px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Article content */}
        <div className="mx-auto max-w-3xl px-6 pb-20 md:pb-28">
          <div className="space-y-12">
            {blog.content?.map((section, index) => (
              <section key={`${section.heading || "section"}-${index}`}>
                {section.heading && (
                  <h2 className="mb-5 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-3xl">
                    {section.heading}
                  </h2>
                )}

                <div className="space-y-5">
                  {section.paragraphs?.map((paragraph, paragraphIndex) => (
                    <p
                      key={paragraphIndex}
                      className="text-base leading-8 text-muted sm:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.bullets?.length > 0 && (
                  <ul className="mt-6 space-y-3">
                    {section.bullets.map((bullet, bulletIndex) => (
                      <li
                        key={bulletIndex}
                        className="flex items-start gap-3 text-base leading-8 text-muted sm:text-lg"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-3 h-2 w-2 shrink-0 rounded-full bg-primary"
                        />

                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* CTA */}
          <aside className="relative mt-16 overflow-hidden rounded-3xl bg-primary p-8 text-white shadow-lg md:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-white/10"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-white/10"
            />

            <div className="relative">
              <span className="text-sm font-semibold uppercase tracking-wider text-white/75">
                Grow with Infriva
              </span>

              <h2 className="mt-3 text-3xl font-bold leading-tight">
                Need a custom CRM, website or digital growth solution?
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-white/85">
                Infriva Solutions develops custom CRM systems, web applications,
                high-performance websites, automation solutions, SEO strategies
                and digital marketing campaigns.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-light"
              >
                Discuss your project
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </aside>

          <div className="mt-12 border-t border-border pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary-dark"
            >
              <ArrowLeft size={18} aria-hidden="true" />
              View all blogs
            </Link>
          </div>
        </div>
      </article>

      {/* Related blogs */}
      {displayedRelatedBlogs.length > 0 && (
        <section className="border-t border-border bg-surface-alt">
          <div className="container-custom section-padding">
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-sm font-semibold text-primary">
                  Continue reading
                </span>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Related insights
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-muted">
                  Explore more practical guides about websites, CRM, SEO,
                  digital marketing and business automation.
                </p>
              </div>

              <Link
                href="/blog"
                className="inline-flex w-fit items-center gap-2 font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                All articles
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>

            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {displayedRelatedBlogs.map((relatedBlog) => (
                <BlogCard
                  key={relatedBlog.id || relatedBlog.slug}
                  blog={relatedBlog}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
