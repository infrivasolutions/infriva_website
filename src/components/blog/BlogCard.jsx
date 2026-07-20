import Image from "next/image";
import Link from "next/link";

const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
};

export default function BlogCard({ blog }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-surface shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link
        href={`/blog/${blog.slug}`}
        aria-label={`Read ${blog.title}`}
        className="block"
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-surface-alt">
          <Image
            src={blog.image}
            alt={blog.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-primary-light px-3 py-1 font-medium text-primary-dark">
              {blog.category}
            </span>

            <time dateTime={blog.publishedAt} className="text-muted">
              {formatDate(blog.publishedAt)}
            </time>
          </div>

          <h2 className="text-2xl font-semibold leading-tight text-foreground transition group-hover:text-primary">
            {blog.title}
          </h2>

          <p className="mt-3 line-clamp-3 leading-7 text-muted">
            {blog.excerpt}
          </p>

          <div className="mt-6 flex items-center justify-between">
            <span className="font-semibold text-primary">Read article →</span>

            <span className="text-sm text-muted">{blog.readTime}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
