"use client";
import Container from "../ui/Container";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  DatabaseZap,
  Globe2,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Zap,
} from "lucide-react";
const stats = [
  {
    icon: Globe2,
    label: "Digital Presence",
    title: "Modern Websites",
    subtitle: "Premium, responsive and conversion-focused websites.",
  },
  {
    icon: DatabaseZap,
    label: "Lead Management",
    title: "CRM Systems",
    subtitle: "Capture, assign and manage enquiries from one dashboard.",
  },
  {
    icon: Target,
    label: "Growth Engine",
    title: "SEO + Ads",
    subtitle: "Lead generation funnels built for business growth.",
  },
  {
    icon: Workflow,
    label: "Smart Operations",
    title: "Automation",
    subtitle: "Automated workflows for faster follow-ups and updates.",
  },
];
const trustItems = [
  "Website Development",
  "CRM Development",
  "Web Applications",
  "SEO Services",
  "Meta Ads",
  "WhatsApp API",
  "Automation",
  "Custom Dashboards",
];
const proofCards = [
  {
    icon: Code2,
    title: "Modern Tech Stack",
    text: "React, Next.js, Node.js, MongoDB and scalable backend systems.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business First",
    text: "Every solution is planned around your business workflow and goals.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Systems",
    text: "Clean architecture, secure flows and production-ready deployment.",
  },
];
const fadeUp = { hidden: { opacity: 0, y: 45 }, show: { opacity: 1, y: 0 } };
const fadeLeft = { hidden: { opacity: 0, x: -45 }, show: { opacity: 1, x: 0 } };
const fadeRight = { hidden: { opacity: 0, x: 45 }, show: { opacity: 1, x: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
export default function TrustedSection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
      {" "}
      {/* Smooth connection from dark Hero */}{" "}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-950 to-transparent" />{" "}
      {/* Animated Background */}{" "}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.26),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.2),transparent_34%),linear-gradient(180deg,#020617_0%,#0f172a_48%,#111827_100%)]" />{" "}
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:70px_70px]" />{" "}
      <motion.div
        animate={{ x: [0, 35, 0], y: [0, -25, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 top-16 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl"
      />{" "}
      <motion.div
        animate={{ x: [0, -35, 0], y: [0, 25, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl"
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
          {/* Main Glass Wrapper */}{" "}
          <div className="rounded-[2.5rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10">
            {" "}
            {/* Top Content */}{" "}
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              {" "}
              <motion.div
                variants={fadeLeft}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                {" "}
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-violet-100 shadow-xl backdrop-blur"
                >
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
                  Trusted IT Growth Partner{" "}
                </motion.div>{" "}
                <motion.h2
                  variants={fadeUp}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  className="mt-6 max-w-3xl text-3xl font-black leading-tight tracking-tight md:text-5xl"
                >
                  {" "}
                  We do not just build websites.{" "}
                  <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-white bg-clip-text text-transparent">
                    {" "}
                    We build business systems.{" "}
                  </span>{" "}
                </motion.h2>{" "}
              </motion.div>{" "}
              <motion.p
                variants={fadeRight}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg"
              >
                {" "}
                Infriva Solutions helps businesses create a strong online
                presence, capture quality leads, manage enquiries inside CRM and
                improve conversions with modern technology, automation and
                digital growth strategy.{" "}
              </motion.p>{" "}
            </div>{" "}
            {/* Stats Cards */}{" "}
            <motion.div
              variants={stagger}
              className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
            >
              {" "}
              {stats.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.05,
                      ease: "easeOut",
                    }}
                    whileHover={{ y: -10, scale: 1.03 }}
                    className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/10 backdrop-blur-xl transition hover:border-violet-300/40 hover:bg-white/15"
                  >
                    {" "}
                    <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-violet-500/10 transition group-hover:bg-violet-500/20" />{" "}
                    <div className="relative z-10">
                      {" "}
                      <motion.div
                        whileHover={{ rotate: 8 }}
                        className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-violet-200 transition group-hover:bg-violet-600 group-hover:text-white"
                      >
                        {" "}
                        <Icon className="h-7 w-7" />{" "}
                      </motion.div>{" "}
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-300">
                        {" "}
                        {item.label}{" "}
                      </p>{" "}
                      <h3 className="mt-3 text-2xl font-black text-white">
                        {" "}
                        {item.title}{" "}
                      </h3>{" "}
                      <p className="mt-3 text-sm leading-6 text-slate-300">
                        {" "}
                        {item.subtitle}{" "}
                      </p>{" "}
                    </div>{" "}
                  </motion.div>
                );
              })}{" "}
            </motion.div>{" "}
            {/* Proof + Expertise */}{" "}
            <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              {" "}
              {/* Expertise Box */}{" "}
              <motion.div
                variants={fadeLeft}
                transition={{ duration: 0.7 }}
                className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl"
              >
                {" "}
                <div className="relative">
                  {" "}
                  <motion.div
                    animate={{ x: ["-20%", "120%"] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute top-0 h-px w-40 bg-gradient-to-r from-transparent via-violet-300 to-transparent"
                  />{" "}
                  <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-violet-300">
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
                      <Zap className="h-4 w-4" />{" "}
                    </motion.span>{" "}
                    Core Expertise{" "}
                  </p>{" "}
                  <h3 className="mt-3 text-2xl font-black text-white md:text-3xl">
                    {" "}
                    Complete IT solutions for business growth{" "}
                  </h3>{" "}
                  <motion.div
                    variants={stagger}
                    className="mt-6 flex flex-wrap gap-3"
                  >
                    {" "}
                    {trustItems.map((item) => (
                      <motion.span
                        key={item}
                        variants={fadeUp}
                        whileHover={{ y: -4, scale: 1.05 }}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white/85"
                      >
                        {" "}
                        <CheckCircle2 className="h-4 w-4 text-green-300" />{" "}
                        {item}{" "}
                      </motion.span>
                    ))}{" "}
                  </motion.div>{" "}
                </div>{" "}
              </motion.div>{" "}
              {/* Proof Cards */}{" "}
              <motion.div
                variants={stagger}
                className="grid gap-4 md:grid-cols-3 lg:grid-cols-1"
              >
                {" "}
                {proofCards.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      variants={fadeRight}
                      transition={{ duration: 0.6 }}
                      whileHover={{ x: 8 }}
                      className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur-xl transition hover:bg-white/15"
                    >
                      {" "}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-600 text-white">
                        {" "}
                        <Icon className="h-6 w-6" />{" "}
                      </div>{" "}
                      <div>
                        {" "}
                        <h4 className="font-black text-white">
                          {item.title}
                        </h4>{" "}
                        <p className="mt-1 text-sm leading-6 text-slate-300">
                          {" "}
                          {item.text}{" "}
                        </p>{" "}
                      </div>{" "}
                    </motion.div>
                  );
                })}{" "}
              </motion.div>{" "}
            </div>{" "}
            {/* Bottom CTA Strip */}{" "}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.01 }}
              className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 p-6 shadow-2xl shadow-violet-950/30 md:p-7"
            >
              {" "}
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                {" "}
                <div>
                  {" "}
                  <p className="text-sm font-bold text-white/75">
                    {" "}
                    Website + CRM + SEO + Ads + Automation{" "}
                  </p>{" "}
                  <h3 className="mt-2 text-2xl font-black text-white">
                    {" "}
                    Need a digital system that actually brings enquiries?{" "}
                  </h3>{" "}
                </div>{" "}
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-sm font-black text-slate-950 transition hover:-translate-y-1 hover:bg-violet-50"
                >
                  {" "}
                  Discuss Your Project{" "}
                  <ArrowRight className="ml-2 h-5 w-5" />{" "}
                </a>{" "}
              </div>{" "}
            </motion.div>{" "}
          </div>{" "}
        </motion.div>{" "}
      </Container>{" "}
    </section>
  );
}
