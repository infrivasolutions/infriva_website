import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";

const formatDate = (date) => {
  if (!date) return "";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(parsedDate);
};

export default function BlogCard({ blog }) {
  if (!blog) {
    return null;
  }

  const blogUrl = `/blog/${blog.slug}`;
  const imageAlt = blog.imageAlt || blog.title || "Infriva Solutions blog";
  const formattedDate = formatDate(blog.publishedAt);

  return (
    <article className="group h-full overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl">
      <Link
        href={blogUrl}
        aria-label={`Read ${blog.title}`}
        className="flex h-full flex-col"
      >
        <div className="relative aspect-video overflow-hidden bg-surface-alt">
          <Image
            src={blog.image}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />

          {blog.category && (
            <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/90 px-3 py-1.5 text-xs font-semibold text-primary-dark shadow-sm backdrop-blur-sm">
              {blog.category}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
            {formattedDate && (
              <time dateTime={blog.publishedAt}>{formattedDate}</time>
            )}

            {blog.readTime && (
              <span className="inline-flex items-center gap-1.5">
                <Clock3 size={15} aria-hidden="true" />
                {blog.readTime}
              </span>
            )}
          </div>

          <h3 className="text-xl font-semibold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary sm:text-2xl">
            {blog.title}
          </h3>

          {blog.excerpt && (
            <p className="mt-3 line-clamp-3 text-base leading-7 text-muted">
              {blog.excerpt}
            </p>
          )}

          <div className="mt-auto pt-6">
            <span className="inline-flex items-center gap-2 font-semibold text-primary transition-colors duration-300 group-hover:text-primary-dark">
              Read article
              <ArrowUpRight
                size={18}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
