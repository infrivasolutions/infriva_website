export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark",

    secondary: "border border-border bg-surface hover:bg-zinc-50",
  };

  return (
    <button
      className={`rounded-full px-6 py-3 font-medium transition-all duration-300 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
