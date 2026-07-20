import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs, getBlogBySlug } from "@/data/blogs";

const SITE_URL = "https://www.infrivasolutions.com";

const formatDate = (date) => {
  if (!date) return "";

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
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
  const imageUrl = `${SITE_URL}${blog.image}`;

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
  const imageUrl = `${SITE_URL}${blog.image}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    headline: blog.title,
    description: blog.metaDescription || blog.excerpt,
    image: [imageUrl],

    datePublished: blog.publishedAt,
    dateModified: blog.updatedAt || blog.publishedAt,

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
    <main>
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
        <header className="border-b border-border bg-surface-alt">
          <div className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24">
            <nav
              aria-label="Breadcrumb"
              className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted"
            >
              <Link href="/" className="transition hover:text-primary">
                Home
              </Link>

              <span aria-hidden="true">/</span>

              <Link href="/blog" className="transition hover:text-primary">
                Blog
              </Link>

              <span aria-hidden="true">/</span>

              <span className="text-foreground">{blog.category}</span>
            </nav>

            <span className="inline-flex rounded-full bg-primary-light px-4 py-2 text-sm font-semibold text-primary-dark">
              {blog.category}
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
              {blog.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted md:text-xl">
              {blog.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
              <span>By {blog.author || "Infriva Solutions"}</span>

              <span aria-hidden="true">•</span>

              <time dateTime={blog.publishedAt}>
                {formatDate(blog.publishedAt)}
              </time>

              {blog.readTime && (
                <>
                  <span aria-hidden="true">•</span>
                  <span>{blog.readTime}</span>
                </>
              )}
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
          <div className="relative aspect-video overflow-hidden rounded-3xl bg-surface-alt">
            <Image
              src={blog.image}
              alt={blog.imageAlt || blog.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 960px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-5 pb-20 md:px-8 md:pb-28">
          <div className="space-y-10">
            {blog.content?.map((section, index) => (
              <section key={`${section.heading || "section"}-${index}`}>
                {section.heading && (
                  <h2 className="mb-5 text-3xl font-bold tracking-tight text-foreground">
                    {section.heading}
                  </h2>
                )}

                {section.paragraphs?.map((paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className="mb-5 text-lg leading-8 text-muted"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.bullets?.length > 0 && (
                  <ul className="my-6 list-disc space-y-3 pl-6 text-lg leading-8 text-muted marker:text-primary">
                    {section.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <aside className="mt-16 rounded-3xl bg-primary p-8 text-white md:p-10">
            <h2 className="text-3xl font-bold">
              Need a custom CRM for your business?
            </h2>

            <p className="mt-4 leading-7 text-white/85">
              Infriva Solutions develops custom CRM systems, web applications,
              business websites, automation systems, and digital marketing
              solutions.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 font-semibold text-primary transition hover:bg-primary-light"
            >
              Discuss your project
            </Link>
          </aside>

          <div className="mt-12 border-t border-border pt-8">
            <Link
              href="/blog"
              className="font-semibold text-primary transition hover:text-primary-dark"
            >
              ← View all blogs
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
