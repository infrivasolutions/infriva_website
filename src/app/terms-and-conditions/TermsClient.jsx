"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  CreditCard,
  FileText,
  Layers3,
  Mail,
  RefreshCw,
  ShieldAlert,
  Sparkles,
  UserCheck,
  Zap,
} from "lucide-react";
const fadeUp = { hidden: { opacity: 0, y: 45 }, show: { opacity: 1, y: 0 } };
const fadeLeft = { hidden: { opacity: 0, x: -45 }, show: { opacity: 1, x: 0 } };
const fadeRight = { hidden: { opacity: 0, x: 45 }, show: { opacity: 1, x: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const termsSections = [
  {
    icon: Layers3,
    title: "Services",
    description:
      "Infriva Solutions provides website development, app development, CRM development, UI/UX design, SEO, paid advertising, lead generation, graphic design, video editing, WhatsApp API integration and automation services.",
  },
  {
    icon: FileText,
    title: "Project Scope",
    description:
      "Project deliverables, timelines, pricing, features, revisions and responsibilities will be discussed and confirmed before starting the work.",
  },
  {
    icon: CreditCard,
    title: "Payments",
    description:
      "Payments must be made as agreed in the project proposal. Delays in payment may affect project delivery timelines, support or handover.",
  },
  {
    icon: UserCheck,
    title: "Client Responsibilities",
    description:
      "Clients must provide required content, approvals, access details, brand assets, feedback and project information on time to ensure smooth completion.",
  },
  {
    icon: RefreshCw,
    title: "Revisions",
    description:
      "Revisions are provided according to the agreed project scope. Additional changes, new features or work outside the confirmed scope may require extra charges.",
  },
  {
    icon: ShieldAlert,
    title: "Limitation of Liability",
    description:
      "Infriva Solutions is not responsible for losses caused by third-party platforms, hosting providers, ad platforms, payment gateways, domain providers, APIs or external service interruptions.",
  },
  {
    icon: Mail,
    title: "Contact",
    description:
      "For questions related to these terms, contact us at info@infrivasolutions.com.",
  },
];
const quickPoints = [
  "Scope and pricing are confirmed before project start.",
  "Client approvals and content are required on time.",
  "Extra changes outside scope may require extra charges.",
  "Third-party platform issues are outside our direct control.",
];
export default function TermsClient() {
  return (
    <>
      {" "}
      <Navbar />{" "}
      <main className="overflow-hidden bg-slate-950">
        {" "}
        {/* Hero */}{" "}
        <section className="relative min-h-[65vh] overflow-hidden bg-slate-950 pb-20 pt-36 text-white md:pt-44">
          {" "}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.45),transparent_35%),radial-gradient(circle_at_top_right,rgba(217,70,239,0.28),transparent_35%),linear-gradient(180deg,#020617_0%,#111827_55%,#1e1b4b_100%)]" />{" "}
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:70px_70px]" />{" "}
          <motion.div
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-10 top-32 h-72 w-72 rounded-full bg-primary/30 blur-3xl"
          />{" "}
          <motion.div
            animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-fuchsia-500/25 blur-3xl"
          />{" "}
          <Container>
            {" "}
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="relative z-10 mx-auto max-w-5xl text-center"
            >
              {" "}
              <motion.span
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-bold text-violet-100 backdrop-blur"
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
                Terms & Conditions{" "}
              </motion.span>{" "}
              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mt-8 text-4xl font-black leading-tight tracking-tight md:text-7xl"
              >
                {" "}
                Terms For Working With{" "}
                <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-white bg-clip-text text-transparent">
                  {" "}
                  Infriva Solutions{" "}
                </span>{" "}
              </motion.h1>{" "}
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg"
              >
                {" "}
                These terms govern the use of our website and services. By using
                our website or contacting us for services, you agree to these
                terms.{" "}
              </motion.p>{" "}
            </motion.div>{" "}
          </Container>{" "}
        </section>{" "}
        {/* Terms Content */}{" "}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="relative overflow-hidden bg-slate-950 py-24 text-white"
        >
          {" "}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.18),transparent_36%),linear-gradient(180deg,#111827_0%,#0f172a_48%,#020617_100%)]" />{" "}
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:70px_70px]" />{" "}
          <motion.div
            animate={{ x: [0, 35, 0], y: [0, -25, 0], scale: [1, 1.12, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
          />{" "}
          <motion.div
            animate={{ x: [0, -35, 0], y: [0, 25, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl"
          />{" "}
          <Container>
            {" "}
            <div className="relative z-10 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              {" "}
              <motion.div variants={fadeLeft} transition={{ duration: 0.7 }}>
                {" "}
                <span className="inline-flex rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-bold text-violet-100 backdrop-blur">
                  {" "}
                  Policy Overview{" "}
                </span>{" "}
                <h2 className="mt-6 text-3xl font-black tracking-tight text-white md:text-5xl">
                  {" "}
                  Clear terms for project scope, payments and delivery.{" "}
                </h2>{" "}
                <p className="mt-5 text-base leading-8 text-slate-300">
                  {" "}
                  We believe in transparent communication before starting any
                  project. Every project should have a clear scope, timeline,
                  responsibility and payment structure.{" "}
                </p>{" "}
                <motion.div
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="mt-8 rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/10 backdrop-blur-xl"
                >
                  {" "}
                  <div className="flex items-center gap-4">
                    {" "}
                    <motion.div
                      animate={{ rotate: [0, 8, -8, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary"
                    >
                      {" "}
                      <FileText className="h-7 w-7" />{" "}
                    </motion.div>{" "}
                    <div>
                      {" "}
                      <p className="text-sm text-violet-300">
                        {" "}
                        Project Agreement{" "}
                      </p>{" "}
                      <h3 className="text-2xl font-black">
                        {" "}
                        Scope Before Execution{" "}
                      </h3>{" "}
                    </div>{" "}
                  </div>{" "}
                  <p className="mt-5 text-sm leading-7 text-slate-300">
                    {" "}
                    Work starts after requirements, pricing and delivery scope
                    are confirmed between both parties.{" "}
                  </p>{" "}
                </motion.div>{" "}
              </motion.div>{" "}
              <motion.div variants={stagger} className="grid gap-5">
                {" "}
                {termsSections.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      variants={fadeUp}
                      transition={{ duration: 0.6 }}
                      whileHover={{ y: -8, scale: 1.01 }}
                      className="group rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/10 backdrop-blur-xl transition hover:border-violet-300/40 hover:bg-white/15"
                    >
                      {" "}
                      <div className="flex gap-4">
                        {" "}
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-violet-200 transition group-hover:bg-primary group-hover:text-white">
                          {" "}
                          <Icon className="h-6 w-6" />{" "}
                        </div>{" "}
                        <div>
                          {" "}
                          <h3 className="text-xl font-black text-white">
                            {" "}
                            {item.title}{" "}
                          </h3>{" "}
                          <p className="mt-2 text-sm leading-7 text-slate-300">
                            {" "}
                            {item.description}{" "}
                          </p>{" "}
                        </div>{" "}
                      </div>{" "}
                    </motion.div>
                  );
                })}{" "}
              </motion.div>{" "}
            </div>{" "}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7 }}
              className="relative z-10 mt-12 rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/10 backdrop-blur-xl md:p-8"
            >
              {" "}
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                {" "}
                <motion.div variants={fadeLeft} transition={{ duration: 0.7 }}>
                  {" "}
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
                    Quick Summary{" "}
                  </p>{" "}
                  <h3 className="mt-4 text-3xl font-black text-white md:text-4xl">
                    {" "}
                    Simple terms for smooth project delivery.{" "}
                  </h3>{" "}
                </motion.div>{" "}
                <motion.div variants={stagger} className="grid gap-3">
                  {" "}
                  {quickPoints.map((point) => (
                    <motion.div
                      key={point}
                      variants={fadeUp}
                      whileHover={{ x: 8 }}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4"
                    >
                      {" "}
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-green-300" />{" "}
                      <span className="text-sm font-semibold text-white/90">
                        {" "}
                        {point}{" "}
                      </span>{" "}
                    </motion.div>
                  ))}{" "}
                </motion.div>{" "}
              </div>{" "}
            </motion.div>{" "}
          </Container>{" "}
        </motion.section>{" "}
        {/* CTA */}{" "}
        <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
          {" "}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.26),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.2),transparent_36%)]" />{" "}
          <Container>
            {" "}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={stagger}
              className="relative z-10 mx-auto max-w-4xl text-center"
            >
              {" "}
              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="text-4xl font-black md:text-6xl"
              >
                {" "}
                Have a question about our terms?{" "}
              </motion.h2>{" "}
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mx-auto mt-6 max-w-2xl text-slate-300"
              >
                {" "}
                Contact our team for clarification about project scope, payment
                terms, revisions or service delivery.{" "}
              </motion.p>{" "}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
              >
                {" "}
                <a
                  href="mailto:info@infrivasolutions.com"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-primary-dark"
                >
                  {" "}
                  Email Us <Mail className="ml-2 h-5 w-5" />{" "}
                </a>{" "}
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white/15"
                >
                  {" "}
                  Contact Page <ArrowRight className="ml-2 h-5 w-5" />{" "}
                </Link>{" "}
              </motion.div>{" "}
            </motion.div>{" "}
          </Container>{" "}
        </section>{" "}
      </main>{" "}
      <Footer />{" "}
    </>
  );
}
