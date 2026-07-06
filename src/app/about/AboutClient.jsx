"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  DatabaseZap,
  Globe2,
  Layers3,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

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

const stats = [
  { value: "360°", label: "IT Solutions" },
  { value: "CRM", label: "Lead Management" },
  { value: "SEO", label: "Growth Ready" },
  { value: "Custom", label: "Business Systems" },
];

const expertise = [
  {
    icon: Globe2,
    title: "Modern Websites",
    description:
      "Premium, responsive and conversion-focused websites for growing businesses.",
  },
  {
    icon: DatabaseZap,
    title: "Custom CRM Systems",
    description:
      "Lead, client, follow-up, project and team management systems.",
  },
  {
    icon: Code2,
    title: "Web Applications",
    description:
      "Scalable frontend and backend systems built with modern technologies.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "Automated workflows that save time and improve business operations.",
  },
];

const values = [
  "Business-first planning",
  "Premium UI/UX design",
  "Lead generation focused structure",
  "Modern and scalable development",
  "CRM-connected enquiry flow",
  "Long-term support and improvements",
];

const processFlow = [
  "Visitor comes through website, SEO or ads",
  "Enquiry form captures lead details",
  "Lead enters CRM for tracking",
  "Team follows up and converts faster",
];

export default function AboutClient() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-slate-950">
        {/* Hero */}
        <section className="relative min-h-[82vh] overflow-hidden bg-slate-950 pb-20 pt-36 text-white md:pt-44">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.45),transparent_35%),radial-gradient(circle_at_top_right,rgba(217,70,239,0.28),transparent_35%),linear-gradient(180deg,#020617_0%,#111827_55%,#1e1b4b_100%)]" />

          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:70px_70px]" />

          <motion.div
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-10 top-28 h-72 w-72 rounded-full bg-primary/30 blur-3xl"
          />

          <motion.div
            animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-fuchsia-500/25 blur-3xl"
          />

          <Container>
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
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
                About Infriva Solutions
              </motion.span>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mt-8 text-4xl font-black leading-tight tracking-tight md:text-7xl"
              >
                We Build Digital Systems For
                <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-white bg-clip-text text-transparent">
                  Business Growth
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg"
              >
                Infriva Solutions is an IT solutions company helping businesses
                build modern websites, CRM systems, web applications, SEO
                growth, Meta Ads funnels, WhatsApp API integrations and
                automation workflows.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
              >
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 font-extrabold text-slate-950 shadow-2xl shadow-primary/20 transition hover:-translate-y-1 hover:bg-primary-light"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-7 py-4 font-extrabold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
                >
                  View Our Work
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="relative z-10 mt-16 grid gap-4 md:grid-cols-4"
            >
              {stats.map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  className="rounded-3xl border border-white/10 bg-white/10 p-6 text-center shadow-2xl shadow-black/10 backdrop-blur-xl"
                >
                  <h3 className="text-3xl font-black text-white">
                    {item.value}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-slate-300">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </Container>
        </section>

        {/* Who We Are */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
          className="relative overflow-hidden bg-slate-950 py-24 text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.18),transparent_36%),linear-gradient(180deg,#111827_0%,#0f172a_48%,#020617_100%)]" />

          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:70px_70px]" />

          <motion.div
            animate={{ x: [0, 35, 0], y: [0, -25, 0], scale: [1, 1.12, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
          />

          <Container>
            <div className="relative z-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <motion.div variants={fadeLeft} transition={{ duration: 0.7 }}>
                <span className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-bold text-violet-100 backdrop-blur">
                  Who We Are
                </span>

                <h2 className="mt-6 text-3xl font-black tracking-tight text-white md:text-5xl">
                  Not just a website company. We are your digital growth
                  technology partner.
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-300">
                  Businesses do not need only an online presence. They need
                  digital systems that attract visitors, capture enquiries,
                  manage leads, track follow-ups and support long-term growth.
                </p>

                <p className="mt-4 text-base leading-8 text-slate-300">
                  That is why we combine website development, CRM systems,
                  UI/UX, SEO, paid ads, WhatsApp API and automation to create
                  practical solutions for real business needs.
                </p>

                <Link
                  href="/services"
                  className="mt-8 inline-flex items-center rounded-2xl bg-primary px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-primary-dark"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>

              <motion.div
                variants={fadeRight}
                transition={{ duration: 0.7 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/10 backdrop-blur-xl md:p-8"
              >
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6 text-white">
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{ rotate: [0, 6, -6, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary"
                    >
                      <Layers3 className="h-7 w-7" />
                    </motion.div>

                    <div>
                      <p className="text-sm text-violet-300">
                        Infriva Solution Stack
                      </p>
                      <h3 className="text-2xl font-black">
                        Website + CRM + Growth
                      </h3>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-300">
                    Our goal is to help businesses move from manual enquiries to
                    structured digital lead management.
                  </p>
                </div>

                <div className="mt-5 grid gap-4">
                  {processFlow.map((item, index) => (
                    <motion.div
                      key={item}
                      variants={fadeUp}
                      transition={{ duration: 0.5 }}
                      whileHover={{ x: 8 }}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-black text-white">
                        {index + 1}
                      </span>
                      <p className="font-semibold text-white/90">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </Container>
        </motion.section>

        {/* Expertise */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
          className="relative overflow-hidden bg-slate-950 py-24 text-white"
        >
          <motion.div
            animate={{ x: [0, -35, 0], y: [0, 25, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl"
          />

          <Container>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="relative z-10 mx-auto max-w-3xl text-center"
            >
              <span className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-bold text-violet-100 backdrop-blur">
                Our Expertise
              </span>

              <h2 className="mt-6 text-3xl font-black tracking-tight text-white md:text-5xl">
                Digital solutions that connect design, technology and growth.
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              className="relative z-10 mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
            >
              {expertise.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    transition={{ duration: 0.6 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group rounded-[2rem] border border-white/10 bg-white/10 p-7 shadow-2xl shadow-black/10 backdrop-blur-xl transition hover:border-violet-300/40 hover:bg-white/15"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 text-violet-200 transition group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-8 w-8" />
                    </div>

                    <h3 className="mt-7 text-xl font-black text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </Container>
        </motion.section>

        {/* Values */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
          className="relative overflow-hidden bg-slate-950 py-24 text-white"
        >
          <Container>
            <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <motion.div
                variants={fadeLeft}
                transition={{ duration: 0.7 }}
                className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-black/10 backdrop-blur-xl md:p-10"
              >
                <ShieldCheck className="h-12 w-12 text-green-300" />

                <h2 className="mt-6 text-3xl font-black md:text-5xl">
                  Why businesses choose Infriva Solutions
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-300">
                  We focus on building systems that are practical, scalable,
                  clean and growth-ready.
                </p>

                <Link
                  href="/#contact"
                  className="mt-8 inline-flex items-center justify-center rounded-2xl bg-primary px-7 py-4 font-bold text-white transition hover:bg-primary-dark"
                >
                  Start Your Project
                  <Rocket className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>

              <motion.div variants={stagger} className="grid gap-4">
                {values.map((item) => (
                  <motion.div
                    key={item}
                    variants={fadeUp}
                    transition={{ duration: 0.5 }}
                    whileHover={{ x: 8, scale: 1.02 }}
                    className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl shadow-black/10 backdrop-blur-xl"
                  >
                    <CheckCircle2 className="h-6 w-6 shrink-0 text-green-300" />
                    <span className="font-bold text-white/90">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </Container>
        </motion.section>

        {/* Mission */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
          className="relative overflow-hidden bg-slate-950 py-24 text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.26),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.2),transparent_36%)]" />

          <motion.div
            animate={{ y: [0, -25, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-primary/25 blur-3xl"
          />

          <motion.div
            animate={{ y: [0, 25, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl"
          />

          <Container>
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="relative z-10 mx-auto max-w-4xl text-center"
            >
              <p className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-violet-300">
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
                Our Mission
              </p>

              <h2 className="mt-5 text-4xl font-black md:text-6xl">
                Turning business ideas into scalable digital systems.
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-slate-300">
                Our mission is to help brands and businesses grow through
                strategy, premium design, powerful development, automation,
                performance marketing and reliable long-term support.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-primary-dark"
                >
                  Work With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                <a
                  href="https://wa.me/918287628307"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white/15"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </Container>
        </motion.section>
      </main>

      <Footer />
    </>
  );
}
