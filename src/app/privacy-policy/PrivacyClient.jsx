"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  DatabaseZap,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
  UserCheck,
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

const policySections = [
  {
    icon: UserCheck,
    title: "Information We Collect",
    description:
      "We may collect your name, phone number, email address, company name, service requirement, budget and project details when you submit an enquiry form on our website.",
  },
  {
    icon: DatabaseZap,
    title: "How We Use Your Information",
    description:
      "Your information is used to contact you, understand your requirement, provide consultation, prepare proposals and manage your enquiry through our CRM or lead management system.",
  },
  {
    icon: ShieldCheck,
    title: "Data Protection",
    description:
      "We do not sell or misuse your personal information. Your data is used only for business communication, service discussion and project-related follow-ups.",
  },
  {
    icon: Mail,
    title: "Contact",
    description:
      "For privacy-related questions, you can contact us at info@infrivasolutions.com.",
  },
];

const quickPoints = [
  "We collect enquiry details only when you submit them.",
  "Your information is used for business communication.",
  "We do not sell your data to third parties.",
  "You can contact us for privacy-related questions anytime.",
];

export default function PrivacyClient() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-slate-950">
        {/* Hero */}
        <section className="relative min-h-[65vh] overflow-hidden bg-slate-950 pb-20 pt-36 text-white md:pt-44">
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
                Privacy Policy
              </motion.span>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mt-8 text-4xl font-black leading-tight tracking-tight md:text-7xl"
              >
                Your Privacy Matters At
                <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-white bg-clip-text text-transparent">
                  Infriva Solutions
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg"
              >
                We respect your privacy and protect the information you share
                with us through our website, enquiry forms and project
                consultation process.
              </motion.p>
            </motion.div>
          </Container>
        </section>

        {/* Policy Content */}
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

          <motion.div
            animate={{ x: [0, -35, 0], y: [0, 25, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl"
          />

          <Container>
            <div className="relative z-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <motion.div variants={fadeLeft} transition={{ duration: 0.7 }}>
                <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-bold text-violet-100 backdrop-blur">
                  Policy Overview
                </span>

                <h2 className="mt-6 text-3xl font-black tracking-tight text-white md:text-5xl">
                  How we collect, use and protect your information.
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-300">
                  This policy explains how Infriva Solutions handles information
                  shared through our website. By submitting an enquiry, you
                  agree that we may contact you regarding your requirement.
                </p>

                <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/10 backdrop-blur-xl">
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{ rotate: [0, 8, -8, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary"
                    >
                      <LockKeyhole className="h-7 w-7" />
                    </motion.div>

                    <div>
                      <p className="text-sm text-violet-300">
                        Secure Communication
                      </p>
                      <h3 className="text-2xl font-black">
                        Business Enquiry Data
                      </h3>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-300">
                    Your enquiry details help us understand your business needs
                    and provide suitable digital solutions.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={stagger} className="grid gap-5">
                {policySections.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.title}
                      variants={fadeUp}
                      transition={{ duration: 0.6 }}
                      whileHover={{ y: -8, scale: 1.01 }}
                      className="group rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/10 backdrop-blur-xl transition hover:border-violet-300/40 hover:bg-white/15"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-violet-200 transition group-hover:bg-primary group-hover:text-white">
                          <Icon className="h-6 w-6" />
                        </div>

                        <div>
                          <h3 className="text-xl font-black text-white">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-sm leading-7 text-slate-300">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="relative z-10 mt-12 rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/10 backdrop-blur-xl md:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
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
                    Quick Summary
                  </p>

                  <h3 className="mt-4 text-3xl font-black text-white md:text-4xl">
                    Simple and transparent privacy practices.
                  </h3>
                </motion.div>

                <motion.div variants={stagger} className="grid gap-3">
                  {quickPoints.map((point) => (
                    <motion.div
                      key={point}
                      variants={fadeUp}
                      whileHover={{ x: 8 }}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-green-300" />
                      <span className="text-sm font-semibold text-white/90">
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </Container>
        </motion.section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.26),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.2),transparent_36%)]" />

          <Container>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger}
              className="relative z-10 mx-auto max-w-4xl text-center"
            >
              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="text-4xl font-black md:text-6xl"
              >
                Have a privacy-related question?
              </motion.h2>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mx-auto mt-6 max-w-2xl text-slate-300"
              >
                Contact our team and we will help you with information about
                your enquiry data or privacy concerns.
              </motion.p>

              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
              >
                <a
                  href="mailto:info@infrivasolutions.com"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-primary-dark"
                >
                  Email Us
                  <Mail className="ml-2 h-5 w-5" />
                </a>

                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white/15"
                >
                  Contact Page
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </motion.div>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
