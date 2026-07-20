import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock3,
  Sparkles,
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
    <main className="overflow-hidden bg-slate-950 text-white">
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
        <header className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.45),transparent_35%),radial-gradient(circle_at_top_right,rgba(217,70,239,0.25),transparent_35%),linear-gradient(180deg,#020617_0%,#111827_55%,#1e1b4b_100%)]" />

          <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:70px_70px]" />

          <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-fuchsia-500/15 blur-3xl" />

          <div className="container-custom relative z-10 py-16 md:py-24 lg:py-28">
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-400"
            >
              <Link
                href="/"
                className="transition-colors hover:text-violet-300"
              >
                Home
              </Link>

              <span aria-hidden="true">/</span>

              <Link
                href="/blog"
                className="transition-colors hover:text-violet-300"
              >
                Blog
              </Link>

              <span aria-hidden="true">/</span>

              <span className="max-w-xs truncate text-slate-200">
                {blog.category}
              </span>
            </nav>

            <div className="max-w-5xl">
              {blog.category && (
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-violet-200 shadow-xl backdrop-blur">
                  <Sparkles
                    size={15}
                    className="text-violet-300"
                    aria-hidden="true"
                  />

                  {blog.category}
                </span>
              )}

              <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {blog.title}
              </h1>

              {blog.excerpt && (
                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg md:text-xl">
                  {blog.excerpt}
                </p>
              )}

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
                  <UserRound
                    size={16}
                    className="text-violet-300"
                    aria-hidden="true"
                  />
                  By {blog.author || "Infriva Solutions"}
                </span>

                {blog.publishedAt && (
                  <time
                    dateTime={blog.publishedAt}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur"
                  >
                    <CalendarDays
                      size={16}
                      className="text-violet-300"
                      aria-hidden="true"
                    />

                    {formatDate(blog.publishedAt)}
                  </time>
                )}

                {blog.readTime && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 backdrop-blur">
                    <Clock3
                      size={16}
                      className="text-violet-300"
                      aria-hidden="true"
                    />

                    {blog.readTime}
                  </span>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Featured image */}
        <section className="relative bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.12),transparent_45%)]" />

          <div className="container-custom relative z-10 py-10 md:py-14">
            <div className="relative aspect-video overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl shadow-black/40">
              <Image
                src={blog.image}
                alt={blog.imageAlt || blog.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1280px"
                className="object-cover"
              />

              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
          </div>
        </section>

        {/* Article content */}
        <section className="relative overflow-hidden bg-slate-950">
          <div className="absolute inset-0 opacity-[0.025] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:70px_70px]" />

          <div className="pointer-events-none absolute -left-48 top-40 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />

          <div className="mx-auto max-w-3xl px-6 pb-20 pt-4 md:pb-28">
            <div className="relative z-10 space-y-12">
              {blog.content?.map((section, index) => (
                <section key={`${section.heading || "section"}-${index}`}>
                  {section.heading && (
                    <h2 className="mb-5 text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl">
                      {section.heading}
                    </h2>
                  )}

                  <div className="space-y-5">
                    {section.paragraphs?.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-base leading-8 text-slate-300 sm:text-lg"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {section.bullets?.length > 0 && (
                    <ul className="mt-6 space-y-4">
                      {section.bullets.map((bullet, bulletIndex) => (
                        <li
                          key={bulletIndex}
                          className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-base leading-7 text-slate-300 backdrop-blur sm:text-lg"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-2.5 h-2.5 w-2.5 shrink-0 rounded-full bg-violet-400 shadow-lg shadow-violet-400/50"
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
            <aside className="relative z-10 mt-16 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 p-8 text-white shadow-2xl shadow-violet-950/40 md:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-white/10"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-white/10"
              />

              <div className="relative">
                <span className="text-sm font-bold uppercase tracking-wider text-white/75">
                  Grow with Infriva
                </span>

                <h2 className="mt-3 text-3xl font-black leading-tight">
                  Need a custom CRM, website or digital growth solution?
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-white/85">
                  Infriva Solutions develops custom CRM systems, web
                  applications, high-performance websites, automation solutions,
                  SEO strategies and digital marketing campaigns.
                </p>

                <Link
                  href="/contact"
                  className="group mt-7 inline-flex items-center rounded-2xl bg-white px-6 py-3.5 font-extrabold text-slate-950 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-violet-50"
                >
                  Discuss your project
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </aside>

            <div className="relative z-10 mt-12 border-t border-white/10 pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 font-bold text-violet-300 transition-colors hover:text-fuchsia-200"
              >
                <ArrowLeft size={18} aria-hidden="true" />
                View all blogs
              </Link>
            </div>
          </div>
        </section>
      </article>

      {/* Related blogs */}
      {displayedRelatedBlogs.length > 0 && (
        <section className="relative overflow-hidden border-t border-white/10 bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.2),transparent_32%),radial-gradient(circle_at_top_right,rgba(217,70,239,0.12),transparent_30%)]" />

          <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:70px_70px]" />

          <div className="container-custom section-padding relative z-10">
            <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 text-sm font-bold text-violet-300">
                  <Sparkles size={16} aria-hidden="true" />
                  Continue reading
                </span>

                <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Related insights
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                  Explore more practical guides about websites, CRM, SEO,
                  digital marketing and business automation.
                </p>
              </div>

              <Link
                href="/blog"
                className="group inline-flex w-fit items-center rounded-2xl border border-white/15 bg-white/10 px-5 py-3 font-bold text-white backdrop-blur transition-all hover:bg-white hover:text-slate-950"
              >
                All articles
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {displayedRelatedBlogs.map((relatedBlog) => (
                <BlogCard
                  key={relatedBlog.id || relatedBlog.slug}
                  blog={relatedBlog}
                  dark
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
