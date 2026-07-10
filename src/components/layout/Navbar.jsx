"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, PhoneCall } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Container from "../ui/Container";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
      >
        <Container>
          <div
            className={`relative overflow-hidden rounded-3xl border px-4 transition-all duration-300 md:px-6 ${
              scrolled
                ? "border-white/10 bg-slate-950/80 shadow-2xl shadow-black/25 backdrop-blur-2xl"
                : "border-white/10 bg-white/10 shadow-xl shadow-black/10 backdrop-blur-xl"
            }`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.18),transparent_35%),radial-gradient(circle_at_top_right,rgba(217,70,239,0.12),transparent_35%)]" />

            <div className="relative z-10 flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/infriva-logo.png"
                  alt="Infriva Solutions"
                  width={210}
                  height={70}
                  priority
                  className={`h-auto w-[145px] object-contain transition-all duration-300 md:w-[185px] ${
                    scrolled ? "py-2" : "py-3"
                  }`}
                />
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden items-center gap-2 lg:flex">
                {navLinks.map((link) => {
                  const active = isActive(link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`group relative rounded-full px-4 py-2 text-sm font-bold transition ${
                        active
                          ? "bg-white/15 text-white"
                          : "text-white/75 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {link.name}

                      {active && (
                        <span className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-violet-300" />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Desktop CTA */}
              <div className="hidden items-center gap-3 lg:flex">
                <a
                  href="tel:+918287628307"
                  aria-label="Call Infriva Solutions"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  <PhoneCall className="h-5 w-5" />
                </a>

                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-primary/25 transition hover:-translate-y-0.5 hover:bg-primary-dark"
                >
                  Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Mobile Button */}
              <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/15 lg:hidden"
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                {open ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="mt-3 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl shadow-black/30 backdrop-blur-2xl lg:hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.12),transparent_35%)]" />

                <div className="relative z-10 flex flex-col gap-2">
                  {navLinks.map((link) => {
                    const active = isActive(link.href);

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`rounded-2xl px-4 py-3 text-sm font-bold transition ${
                          active
                            ? "bg-white/15 text-white"
                            : "text-white/80 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}

                  <div className="mt-3 grid gap-3">
                    <a
                      href="tel:+918287628307"
                      className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-white/15"
                    >
                      Call: +91 82876 28307
                    </a>

                    <Link
                      href="/contact"
                      onClick={() => setOpen(false)}
                      className="rounded-2xl bg-primary px-4 py-3 text-center text-sm font-extrabold text-white transition hover:bg-primary-dark"
                    >
                      Free Consultation
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </motion.div>
    </header>
  );
}
