"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/sections/ContactForm";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 82876 28307",
    href: "tel:+918287628307",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with our team",
    href: "https://wa.me/918287628307?text=Hello%20Infriva%20Solutions%2C%20I%20want%20a%20free%20consultation.",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@infrivasolutions.com",
    href: "mailto:info@infrivasolutions.com",
  },
  {
    icon: Clock3,
    title: "Response Time",
    value: "Quick business response",
    href: null,
  },
];

const trustPoints = [
  "Free Consultation",
  "No Obligation",
  "CRM Connected Enquiry",
  "Quick Response",
];

const stats = [
  {
    value: "100+",
    label: "Happy Clients",
  },
  {
    value: "250+",
    label: "Projects Delivered",
  },
  {
    value: "5+",
    label: "Years Experience",
  },
  {
    value: "4.9/5",
    label: "Client Rating",
    rating: true,
  },
];

export default function ContactClient() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[#080a18]">
        <section className="relative min-h-screen overflow-hidden pb-16 pt-28 text-white md:pb-20 md:pt-36">
          {/* Dark purple background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_15%,rgba(124,58,237,0.55),transparent_31%),radial-gradient(circle_at_92%_15%,rgba(217,70,239,0.32),transparent_30%),radial-gradient(circle_at_70%_85%,rgba(91,33,182,0.24),transparent_35%),linear-gradient(135deg,#171036_0%,#080d1c_48%,#25103b_100%)]" />

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:82px_82px]" />

          {/* Top glow */}
          <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-violet-600/20 to-transparent" />

          <motion.div
            animate={{
              x: [0, 24, 0],
              y: [0, -24, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-32 top-32 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl"
          />

          <motion.div
            animate={{
              x: [0, -24, 0],
              y: [0, 24, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl"
          />

          <Container>
            <div className="relative z-10 grid items-start gap-12 lg:grid-cols-[1.03fr_0.85fr] lg:gap-16">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="pt-4 lg:pt-10"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-violet-100 shadow-lg backdrop-blur-xl">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                  Full-Stack IT Solutions
                </div>

                <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[62px]">
                  We Build Digital Systems That{" "}
                  <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
                    Generate & Convert Leads
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                  Modern websites, custom CRMs, SEO, Meta Ads, WhatsApp API and
                  automation systems for growing businesses.
                </p>

                {/* Trust points */}
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {trustPoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 text-sm font-semibold text-slate-200"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10">
                        <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                      </div>

                      {point}
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:grid-cols-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 shadow-lg backdrop-blur-xl"
                    >
                      <p className="text-2xl font-black text-violet-300">
                        {stat.value}
                      </p>

                      <p className="mt-1 text-xs text-slate-400">
                        {stat.label}
                      </p>

                      {stat.rating && (
                        <div className="mt-1 flex gap-0.5">
                          {[1, 2, 3, 4, 5].map((item) => (
                            <Star
                              key={item}
                              className="h-3 w-3 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Contact cards */}
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;

                    const content = (
                      <div className="group flex h-full items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.07] p-4 shadow-lg backdrop-blur-xl transition hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/[0.11]">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300 transition group-hover:bg-violet-600 group-hover:text-white">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                            {item.title}
                          </p>

                          <p className="mt-1 break-words text-sm font-bold text-white">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );

                    if (item.href) {
                      return (
                        <a
                          key={item.title}
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noreferrer"
                              : undefined
                          }
                        >
                          {content}
                        </a>
                      );
                    }

                    return <div key={item.title}>{content}</div>;
                  })}
                </div>
              </motion.div>

              {/* Contact form card */}
              <motion.div
                id="contact"
                initial={{ opacity: 0, x: 35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="rounded-[30px] border border-white/15 bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-violet-500/[0.12] p-5 shadow-2xl shadow-black/50 backdrop-blur-2xl sm:p-7"
              >
                <div className="mb-6">
                  <div className="inline-flex rounded-full border border-violet-300/20 bg-violet-500/15 px-3 py-1 text-xs font-bold text-violet-200">
                    Get Started
                  </div>

                  <h2 className="mt-4 text-2xl font-black text-white md:text-3xl">
                    Get Your Free Consultation
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Tell us about your requirement and our team will contact you
                    shortly.
                  </p>
                </div>

                <ContactForm />

                <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="h-4 w-4 text-violet-300" />
                  Your information is private and secure.
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Floating WhatsApp */}
        <a
          href="https://wa.me/918287628307?text=Hello%20Infriva%20Solutions%2C%20I%20want%20a%20free%20consultation."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with Infriva Solutions on WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-2xl shadow-violet-950/50 transition hover:scale-110 hover:from-violet-500 hover:to-fuchsia-500"
        >
          <MessageCircle className="h-7 w-7" />
        </a>
      </main>

      <Footer />
    </>
  );
}
