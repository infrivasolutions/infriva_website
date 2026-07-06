"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { servicesData } from "@/data/services";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  DatabaseZap,
  Megaphone,
  Palette,
  Search,
  Target,
  Video,
  MessageCircle,
  Sparkles,
  Zap,
  PhoneCall,
  Workflow,
} from "lucide-react";

const iconMap = {
  "Web & App Development": Code2,
  "CRM Development": DatabaseZap,
  "SEO Services": Search,
  "Paid Advertising": Megaphone,
  "Lead Generation": Target,
  "WhatsApp API & Automation": MessageCircle,
  "UI/UX Design": Palette,
  "Graphic Design": Palette,
  "Video Editing": Video,
  Automation: Workflow,
};

const fallbackFeatures = [
  "Business-focused strategy",
  "Modern responsive design",
  "SEO-ready structure",
  "Lead generation focused",
];

const fadeUp = {
  hidden: { opacity: 0, y: 45 },
  show: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -45 },
  show: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 45 },
  show: { opacity: 1, x: 0 },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ServicesClient() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-slate-950">
        {/* Hero */}
        <section className="relative min-h-[78vh] overflow-hidden bg-slate-950 pb-20 pt-36 text-white md:pt-44">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.45),transparent_35%),radial-gradient(circle_at_top_right,rgba(217,70,239,0.28),transparent_35%),linear-gradient(180deg,#020617_0%,#111827_55%,#1e1b4b_100%)]" />

          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:70px_70px]" />

          <motion.div
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-10 top-32 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl"
          />

          <motion.div
            animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-fuchsia-500/25 blur-3xl"
          />

          <Container>
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger}
              className="relative z-10 mx-auto max-w-5xl text-center"
            >
              <motion.span
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-bold text-violet-100 backdrop-blur"
              >
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles className="h-4 w-4 text-violet-300" />
                </motion.span>
                IT Solutions Suite
              </motion.span>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mt-8 text-4xl font-black leading-tight tracking-tight md:text-7xl"
              >
                Digital Services Built To
                <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-white bg-clip-text text-transparent">
                  Grow Your Business
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg"
              >
                From websites and CRMs to SEO, paid ads and automation, we help
                businesses build strong digital systems that generate, track and
                manage leads properly.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
              >
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 font-extrabold text-slate-950 shadow-2xl shadow-violet-500/20 transition hover:-translate-y-1 hover:bg-violet-50"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                <Link
                  href="/#projects"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-7 py-4 font-extrabold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
                >
                  View Our Work
                </Link>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* Services Grid */}
        <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.26),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.2),transparent_36%),linear-gradient(180deg,#111827_0%,#0f172a_48%,#020617_100%)]" />

          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:70px_70px]" />

          <motion.div
            animate={{ x: [0, 35, 0], y: [0, -25, 0], scale: [1, 1.12, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-violet-500/25 blur-3xl"
          />

          <motion.div
            animate={{ x: [0, -35, 0], y: [0, 25, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl"
          />

          <Container>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="relative z-10"
            >
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mx-auto max-w-4xl text-center"
              >
                <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-bold text-violet-100 shadow-xl backdrop-blur">
                  What We Offer
                </span>

                <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">
                  Everything You Need To Build, Launch And Scale
                </h2>

                <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                  Choose the right service for your business. Every solution is
                  built with strategy, design, development and lead conversion
                  in mind.
                </p>
              </motion.div>

              <motion.div
                variants={stagger}
                className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
              >
                {servicesData.map((service, index) => {
                  const Icon = iconMap[service.title] || Code2;

                  const features =
                    Array.isArray(service.features) &&
                    service.features.length > 0
                      ? service.features
                      : fallbackFeatures;

                  return (
                    <motion.div
                      key={service.slug}
                      variants={fadeUp}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.04,
                        ease: "easeOut",
                      }}
                      whileHover={{ y: -12, scale: 1.02 }}
                      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-7 shadow-2xl shadow-black/10 backdrop-blur-xl transition hover:border-violet-300/40 hover:bg-white/15"
                    >
                      <div className="absolute right-0 top-0 h-36 w-36 rounded-bl-full bg-violet-500/10 transition group-hover:bg-violet-500/20" />

                      <motion.div
                        animate={{
                          opacity: [0.25, 0.55, 0.25],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/20 blur-2xl"
                      />

                      <div className="relative z-10">
                        <div className="flex items-center justify-between">
                          <motion.div
                            whileHover={{ rotate: 8 }}
                            className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 text-violet-200 transition group-hover:bg-violet-600 group-hover:text-white"
                          >
                            <Icon className="h-8 w-8" />
                          </motion.div>

                          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-black text-slate-300">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        {service.category && (
                          <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
                            {service.category}
                          </p>
                        )}

                        <h3 className="mt-3 text-2xl font-black text-white">
                          {service.title}
                        </h3>

                        <p className="mt-4 min-h-[72px] text-sm leading-7 text-slate-300">
                          {service.short}
                        </p>

                        <ul className="mt-7 space-y-3">
                          {features.slice(0, 4).map((feature) => (
                            <motion.li
                              key={feature}
                              whileHover={{ x: 6 }}
                              className="flex gap-3 text-sm font-medium text-slate-300"
                            >
                              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-300" />
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>

                        <div className="mt-8 flex flex-wrap gap-3">
                          <Link
                            href={`/services/${service.slug}`}
                            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:border-violet-300/40 hover:bg-violet-600"
                          >
                            Learn More
                            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                          </Link>

                          <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 rounded-2xl bg-violet-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-violet-700"
                          >
                            Get Quote
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.26),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.2),transparent_36%)]" />

          <motion.div
            animate={{ x: [0, 40, 0], y: [0, -25, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl"
          />

          <motion.div
            animate={{ x: [0, -40, 0], y: [0, 25, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl"
          />

          <Container>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger}
              className="relative z-10 grid gap-8 rounded-[2.2rem] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10 lg:grid-cols-[1fr_0.7fr] lg:items-center"
            >
              <motion.div variants={fadeLeft} transition={{ duration: 0.7 }}>
                <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-violet-300">
                  <motion.span
                    animate={{ scale: [1, 1.25, 1] }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Zap className="h-4 w-4" />
                  </motion.span>
                  Need Custom Solution?
                </p>

                <h2 className="mt-4 text-3xl font-black md:text-5xl">
                  Tell us your business problem. We will suggest the right
                  digital solution.
                </h2>

                <p className="mt-5 max-w-2xl text-slate-300">
                  Website, CRM, automation, lead funnel, dashboard or complete
                  business system — we can build it as per your workflow.
                </p>
              </motion.div>

              <motion.div
                variants={fadeRight}
                transition={{ duration: 0.7 }}
                className="flex flex-col gap-4 sm:flex-row lg:justify-end"
              >
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-violet-600 px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-violet-700"
                >
                  Discuss Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                <a
                  href="tel:+918287628307"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white/15"
                >
                  <PhoneCall className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </motion.div>
            </motion.div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
