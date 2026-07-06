"use client";
import Container from "../ui/Container";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  Headphones,
  Layers3,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Zap,
} from "lucide-react";
const reasons = [
  {
    icon: Target,
    title: "Growth-Focused Strategy",
    description:
      "Every website, CRM and campaign is planned with one clear goal — better leads, better tracking and better conversions.",
  },
  {
    icon: Code2,
    title: "Modern Tech Stack",
    description:
      "We use React, Next.js, Node.js, MongoDB and scalable backend systems to build reliable digital products.",
  },
  {
    icon: Workflow,
    title: "CRM-Connected Lead Flow",
    description:
      "Your website enquiries can directly enter your CRM so your team can assign, track and follow up properly.",
  },
  {
    icon: BarChart3,
    title: "SEO & Marketing Ready",
    description:
      "Your website is built with SEO structure, tracking setup, campaign readiness and conversion flow from day one.",
  },
  {
    icon: Layers3,
    title: "Custom Business Solutions",
    description:
      "No fixed templates. We build websites, CRMs, dashboards and automation systems as per your workflow.",
  },
  {
    icon: Headphones,
    title: "Long-Term Support",
    description:
      "After launch, we help with improvements, maintenance, technical support and growth-focused updates.",
  },
];
const comparison = [
  "Website designed for trust and conversion",
  "Lead form connected with CRM",
  "Mobile responsive and fast loading",
  "SEO-ready structure",
  "Clear service presentation",
  "Support after launch",
];
const fadeUp = { hidden: { opacity: 0, y: 45 }, show: { opacity: 1, y: 0 } };
const fadeLeft = { hidden: { opacity: 0, x: -45 }, show: { opacity: 1, x: 0 } };
const fadeRight = { hidden: { opacity: 0, x: 45 }, show: { opacity: 1, x: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-slate-950 py-24 text-white"
    >
      {" "}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.26),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.2),transparent_36%),linear-gradient(180deg,#020617_0%,#0f172a_48%,#111827_100%)]" />{" "}
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:70px_70px]" />{" "}
      <motion.div
        animate={{ x: [0, 35, 0], y: [0, -25, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-primary/25 blur-3xl"
      />{" "}
      <motion.div
        animate={{ x: [0, -35, 0], y: [0, 25, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl"
      />{" "}
      <Container>
        {" "}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="relative z-10"
        >
          {" "}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >
            {" "}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-bold text-violet-100 shadow-xl backdrop-blur">
              {" "}
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {" "}
                <Sparkles className="h-4 w-4 text-violet-300" />{" "}
              </motion.span>{" "}
              Why Infriva{" "}
            </div>{" "}
            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">
              {" "}
              A Digital Partner Focused On{" "}
              <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-white bg-clip-text text-transparent">
                {" "}
                Leads, Growth And Systems{" "}
              </span>{" "}
            </h2>{" "}
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              {" "}
              We do not just build good-looking websites. We build complete
              digital systems that help businesses capture leads, manage
              enquiries and grow online.{" "}
            </p>{" "}
          </motion.div>{" "}
          <motion.div
            variants={stagger}
            className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {" "}
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  variants={fadeUp}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.04,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -12, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-7 shadow-2xl shadow-black/10 backdrop-blur-xl transition hover:border-violet-300/40 hover:bg-white/15"
                >
                  {" "}
                  <div className="absolute right-0 top-0 h-36 w-36 rounded-bl-full bg-violet-500/10 transition group-hover:bg-violet-500/20" />{" "}
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
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/25 blur-2xl"
                  />{" "}
                  <div className="relative z-10">
                    {" "}
                    <motion.div
                      whileHover={{ rotate: 8 }}
                      className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 text-violet-200 transition group-hover:bg-primary group-hover:text-white"
                    >
                      {" "}
                      <Icon className="h-8 w-8" />{" "}
                    </motion.div>{" "}
                    <h3 className="mt-7 text-2xl font-black tracking-tight text-white">
                      {" "}
                      {reason.title}{" "}
                    </h3>{" "}
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {" "}
                      {reason.description}{" "}
                    </p>{" "}
                  </div>{" "}
                </motion.div>
              );
            })}{" "}
          </motion.div>{" "}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.01 }}
            className="mt-16 overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/10 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10"
          >
            {" "}
            <div className="relative">
              {" "}
              <motion.div
                animate={{ x: ["-20%", "120%"] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 h-px w-44 bg-gradient-to-r from-transparent via-violet-300 to-transparent"
              />{" "}
              <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                {" "}
                <motion.div variants={fadeLeft} transition={{ duration: 0.7 }}>
                  {" "}
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-violet-100">
                    {" "}
                    <motion.span
                      animate={{ scale: [1, 1.25, 1] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {" "}
                      <Zap className="h-4 w-4 text-violet-300" />{" "}
                    </motion.span>{" "}
                    Infriva Advantage{" "}
                  </div>{" "}
                  <h3 className="mt-6 text-3xl font-black leading-tight text-white md:text-5xl">
                    {" "}
                    We connect your website with your business growth
                    system.{" "}
                  </h3>{" "}
                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                    {" "}
                    A normal website only shows information. A growth-focused
                    website captures leads, builds trust, tracks enquiries and
                    helps your team convert prospects into clients.{" "}
                  </p>{" "}
                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center rounded-2xl bg-white px-7 py-4 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-violet-50"
                  >
                    {" "}
                    Start Your Growth System{" "}
                    <ArrowRight className="ml-2 h-5 w-5" />{" "}
                  </a>{" "}
                </motion.div>{" "}
                <motion.div
                  variants={fadeRight}
                  transition={{ duration: 0.7 }}
                  className="rounded-[1.7rem] border border-white/10 bg-slate-950/60 p-5 backdrop-blur md:p-6"
                >
                  {" "}
                  <div className="mb-5 flex items-center justify-between">
                    {" "}
                    <div>
                      {" "}
                      <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-300">
                        {" "}
                        What You Get{" "}
                      </p>{" "}
                      <h4 className="mt-2 text-2xl font-black text-white">
                        {" "}
                        Website + CRM + Growth{" "}
                      </h4>{" "}
                    </div>{" "}
                    <motion.div
                      animate={{ rotate: [0, 8, -8, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {" "}
                      <ShieldCheck className="h-10 w-10 text-green-300" />{" "}
                    </motion.div>{" "}
                  </div>{" "}
                  <motion.div variants={stagger} className="grid gap-3">
                    {" "}
                    {comparison.map((item) => (
                      <motion.div
                        key={item}
                        variants={fadeUp}
                        whileHover={{ x: 8 }}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4"
                      >
                        {" "}
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-green-300" />{" "}
                        <span className="text-sm font-semibold text-white/90">
                          {" "}
                          {item}{" "}
                        </span>{" "}
                      </motion.div>
                    ))}{" "}
                  </motion.div>{" "}
                </motion.div>{" "}
              </div>{" "}
            </div>{" "}
          </motion.div>{" "}
        </motion.div>{" "}
      </Container>{" "}
    </section>
  );
}
