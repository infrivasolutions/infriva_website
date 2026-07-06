import "./globals.css";

export const metadata = {
  title: "Infriva Solutions | Web Development, SEO & Lead Generation",
  description:
    "Infriva Solutions helps businesses grow through web development, SEO, paid advertising, lead generation, UI/UX design and digital marketing.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
