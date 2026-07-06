export default function SectionHeading({ badge, title, description }) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      {badge && (
        <span className="rounded-full bg-primary-light px-4 py-2 text-sm font-medium text-primary">
          {badge}
        </span>
      )}

      <h2 className="mt-6 text-4xl font-bold md:text-5xl">{title}</h2>

      {description && <p className="mt-5 text-lg text-muted">{description}</p>}
    </div>
  );
}
