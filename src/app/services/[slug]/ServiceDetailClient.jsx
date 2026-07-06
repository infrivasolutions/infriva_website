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
  Megaphone,
  MessageCircle,
  Palette,
  PhoneCall,
  Search,
  Sparkles,
  Target,
  Video,
  Workflow,
  Zap,
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

export default function ServiceDetailClient({ service, otherServices = [] }) {
  const Icon = iconMap[service.title] || Code2;

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
            className="absolute left-10 top-32 h-72 w-72 rounded-full bg-primary/30 blur-3xl"
          />

          <motion.div
            animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-fuchsia-500/25 blur-3xl"
          />

          <Container>
            <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_0.78fr] lg:items-center">
              <motion.div initial="hidden" animate="show" variants={stagger}>
                <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-bold text-violet-100 backdrop-blur transition hover:bg-white/15"
                  >
                    ← Back To Services
                  </Link>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.7 }}
                  className="mt-8 flex h-20 w-20 items-center justify-center rounded-[1.7rem] bg-primary text-white shadow-2xl shadow-primary/30"
                >
                  <Icon className="h-10 w-10" />
                </motion.div>

                {service.category && (
                  <motion.p
                    variants={fadeUp}
                    transition={{ duration: 0.7 }}
                    className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-violet-300"
                  >
                    {service.category}
                  </motion.p>
                )}

                <motion.h1
                  variants={fadeUp}
                  transition={{ duration: 0.7 }}
                  className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-7xl"
                >
                  {service.title}
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  transition={{ duration: 0.7 }}
                  className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg"
                >
                  {service.overview || service.short}
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  transition={{ duration: 0.7 }}
                  className="mt-10 flex flex-col gap-4 sm:flex-row"
                >
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 font-extrabold text-slate-950 shadow-2xl shadow-primary/20 transition hover:-translate-y-1 hover:bg-primary-light"
                  >
                    Get Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>

                  <a
                    href="tel:+918287628307"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-7 py-4 font-extrabold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
                  >
                    <PhoneCall className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-primary/30 to-fuchsia-500/30 blur-2xl" />

                <div className="relative overflow-hidden rounded-[2.2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-8">
                  <div className="rounded-[1.5rem] bg-slate-950/80 p-6 text-white">
                    <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-violet-300">
                      <Sparkles className="h-4 w-4" />
                      Service Focus
                    </p>

                    <h3 className="mt-4 text-3xl font-black">
                      Built for business results, not just appearance.
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      Every solution is planned with performance, user
                      experience, trust, lead conversion and long-term
                      scalability in mind.
                    </p>
                  </div>

                  <div className="mt-6 grid gap-4">
                    {(service.features || [])
                      .slice(0, 4)
                      .map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: 0.55 + index * 0.1,
                            duration: 0.5,
                          }}
                          whileHover={{ x: 8 }}
                          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4"
                        >
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-green-300" />
                          <span className="font-semibold text-white/90">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* What You Get */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
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
            <div className="relative z-10 grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
              <motion.div variants={fadeLeft} transition={{ duration: 0.7 }}>
                <span className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-bold text-violet-100 backdrop-blur">
                  What You Get
                </span>

                <h2 className="mt-6 text-3xl font-black tracking-tight text-white md:text-5xl">
                  A complete solution built with strategy and execution.
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-300">
                  We understand your business requirement, plan the right
                  structure, design the experience and build a solution that is
                  practical, scalable and growth-focused.
                </p>
              </motion.div>

              <motion.div
                variants={stagger}
                className="grid gap-5 md:grid-cols-2"
              >
                {(service.features || []).map((feature) => (
                  <motion.div
                    key={feature}
                    variants={fadeUp}
                    transition={{ duration: 0.55 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl shadow-black/10 backdrop-blur-xl transition hover:border-violet-300/40 hover:bg-white/15"
                  >
                    <CheckCircle2 className="h-6 w-6 text-green-300" />
                    <h3 className="mt-4 font-bold text-white">{feature}</h3>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </Container>
        </motion.section>

        {/* Deliverables + Best For */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="relative overflow-hidden bg-slate-950 py-24 text-white"
        >
          <motion.div
            animate={{ x: [0, -35, 0], y: [0, 25, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl"
          />

          <Container>
            <div className="relative z-10 grid gap-8 lg:grid-cols-2">
              <motion.div
                variants={fadeLeft}
                transition={{ duration: 0.7 }}
                className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-black/10 backdrop-blur-xl md:p-10"
              >
                <h2 className="text-3xl font-black text-white">Deliverables</h2>

                <p className="mt-4 text-slate-300">
                  Clear output you can expect from this service.
                </p>

                <div className="mt-8 grid gap-4">
                  {(service.deliverables || []).map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ x: 8 }}
                      className="flex gap-3 rounded-2xl border border-white/10 bg-white/10 p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-300" />
                      <span className="font-medium text-white/90">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeRight}
                transition={{ duration: 0.7 }}
                className="rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-black/10 backdrop-blur-xl md:p-10"
              >
                <h2 className="text-3xl font-black text-white">Best For</h2>

                <p className="mt-4 text-slate-300">
                  This service is suitable for these business types.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {(service.bestFor || []).map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ y: -4, scale: 1.05 }}
                      className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-bold text-white"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/70 p-6 text-white">
                  <p className="text-sm font-bold text-violet-300">
                    Need guidance?
                  </p>

                  <h3 className="mt-3 text-2xl font-black">
                    Not sure this is right for your business?
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Share your requirement and we will suggest the right digital
                    solution with proper roadmap.
                  </p>

                  <Link
                    href="/#contact"
                    className="mt-6 inline-flex rounded-2xl bg-primary px-6 py-3 font-bold text-white transition hover:bg-primary-dark"
                  >
                    Ask For Suggestion
                  </Link>
                </div>
              </motion.div>
            </div>
          </Container>
        </motion.section>

        {/* Other Services */}
        {otherServices.length > 0 && (
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="relative overflow-hidden bg-slate-950 py-24 text-white"
          >
            <Container>
              <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <motion.div variants={fadeLeft} transition={{ duration: 0.7 }}>
                  <span className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-bold text-violet-100 backdrop-blur">
                    Explore More
                  </span>

                  <h2 className="mt-5 text-3xl font-black text-white md:text-5xl">
                    Other Services
                  </h2>
                </motion.div>

                <motion.div variants={fadeRight} transition={{ duration: 0.7 }}>
                  <Link
                    href="/services"
                    className="font-bold text-violet-300 hover:text-white"
                  >
                    View All Services →
                  </Link>
                </motion.div>
              </div>

              <motion.div
                variants={stagger}
                className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
              >
                {otherServices.map((item) => {
                  const OtherIcon = iconMap[item.title] || Code2;

                  return (
                    <motion.div
                      key={item.slug}
                      variants={fadeUp}
                      transition={{ duration: 0.55 }}
                      whileHover={{ y: -10, scale: 1.02 }}
                    >
                      <Link
                        href={`/services/${item.slug}`}
                        className="block h-full rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/10 backdrop-blur-xl transition hover:border-violet-300/40 hover:bg-white/15"
                      >
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-violet-200">
                          <OtherIcon className="h-7 w-7" />
                        </div>

                        <h3 className="mt-5 text-xl font-black text-white">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-300">
                          {item.short}
                        </p>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>
            </Container>
          </motion.section>
        )}

        {/* Final CTA */}
        <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.26),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.2),transparent_36%)]" />

          <motion.div
            animate={{ x: [0, 40, 0], y: [0, -25, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-primary/25 blur-3xl"
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
              className="relative z-10 mx-auto max-w-4xl text-center"
            >
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-violet-300"
              >
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
                Start Your Project
              </motion.p>

              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mt-5 text-4xl font-black md:text-6xl"
              >
                Need {service.title} for your business?
              </motion.h2>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mx-auto mt-6 max-w-2xl text-slate-300"
              >
                Let’s discuss your requirement and build a clear roadmap for
                your website, CRM, marketing or automation system.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
              >
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-primary-dark"
                >
                  Get Free Consultation
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
              </motion.div>
            </motion.div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
