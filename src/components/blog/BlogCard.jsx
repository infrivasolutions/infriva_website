import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";

const FALLBACK_IMAGE = "/images/blogs/blog-placeholder.webp";

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

export default function BlogCard({ blog, dark = false }) {
  if (!blog) {
    return null;
  }

  const blogUrl = `/blog/${blog.slug}`;

  const imageSrc =
    typeof blog.image === "string" && blog.image.trim()
      ? blog.image.trim()
      : FALLBACK_IMAGE;

  const imageAlt =
    blog.imageAlt || blog.title || "Infriva Solutions blog article";

  const formattedDate = formatDate(blog.publishedAt);

  const articleClasses = dark
    ? "border-white/10 bg-white/10 shadow-2xl shadow-black/20 hover:border-violet-400/40 hover:bg-white/[0.13]"
    : "border-border bg-surface shadow-sm hover:border-primary/20 hover:shadow-xl";

  const titleClasses = dark
    ? "text-white group-hover:text-violet-200"
    : "text-foreground group-hover:text-primary";

  const descriptionClasses = dark ? "text-slate-300" : "text-muted";

  const metaClasses = dark ? "text-slate-400" : "text-muted";

  const readClasses = dark
    ? "text-violet-300 group-hover:text-fuchsia-200"
    : "text-primary group-hover:text-primary-dark";

  return (
    <article
      className={`group h-full overflow-hidden rounded-4xl border backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 ${articleClasses}`}
    >
      <Link
        href={blogUrl}
        aria-label={`Read ${blog.title}`}
        className="flex h-full flex-col"
      >
        <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="z-0 object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 z-10 bg-linear-to-t from-slate-950/80 via-slate-950/5 to-transparent"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 z-10 bg-violet-600/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />

          {blog.category && (
            <span className="absolute left-4 top-4 z-20 rounded-full border border-white/15 bg-slate-950/75 px-3 py-1.5 text-xs font-bold text-violet-200 shadow-lg backdrop-blur-md">
              {blog.category}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div
            className={`mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm ${metaClasses}`}
          >
            {formattedDate && (
              <time
                dateTime={blog.publishedAt}
                className="inline-flex items-center gap-1.5"
              >
                <CalendarDays
                  size={15}
                  className={dark ? "text-violet-300" : "text-primary"}
                  aria-hidden="true"
                />

                {formattedDate}
              </time>
            )}

            {blog.readTime && (
              <span className="inline-flex items-center gap-1.5">
                <Clock3
                  size={15}
                  className={dark ? "text-violet-300" : "text-primary"}
                  aria-hidden="true"
                />

                {blog.readTime}
              </span>
            )}
          </div>

          <h3
            className={`text-xl font-extrabold leading-snug transition-colors duration-300 sm:text-2xl ${titleClasses}`}
          >
            {blog.title}
          </h3>

          {blog.excerpt && (
            <p
              className={`mt-3 line-clamp-3 text-base leading-7 ${descriptionClasses}`}
            >
              {blog.excerpt}
            </p>
          )}

          <div className="mt-auto pt-6">
            <span
              className={`inline-flex items-center gap-2 font-bold transition-colors duration-300 ${readClasses}`}
            >
              Read article
              <ArrowUpRight
                size={18}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
