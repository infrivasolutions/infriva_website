"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Code2,
  DatabaseZap,
  Globe2,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Workflow,
  Zap,
} from "lucide-react";

const services = [
  "Website Development",
  "CRM Development",
  "Web Apps",
  "SEO",
  "Meta Ads",
  "WhatsApp API",
  "Automation",
];

const heroStats = [
  {
    icon: Globe2,
    value: "Web",
    label: "Modern Websites",
  },
  {
    icon: DatabaseZap,
    value: "CRM",
    label: "Lead Management",
  },
  {
    icon: Workflow,
    value: "Auto",
    label: "Business Automation",
  },
];

const dashboardCards = [
  {
    title: "New Website Lead",
    value: "Rahul Sharma",
    tag: "Website",
  },
  {
    title: "Service Required",
    value: "CRM Development",
    tag: "Hot Lead",
  },
  {
    title: "Follow-up Status",
    value: "Assigned to Sales",
    tag: "Active",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 pb-20 pt-28 text-white md:pt-36"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.45),transparent_35%),radial-gradient(circle_at_top_right,rgba(217,70,239,0.28),transparent_35%),linear-gradient(180deg,#020617_0%,#111827_55%,#1e1b4b_100%)]" />

      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:70px_70px]" />

      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-10 top-32 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-fuchsia-500/25 blur-3xl"
      />

      <Container>
        <div className="relative z-10 grid min-h-[calc(100vh-120px)] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 shadow-xl backdrop-blur"
            >
              <span className="flex h-2 w-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50" />
              <span className="text-sm font-bold text-violet-100">
                Full-Stack IT Solutions Company
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mt-7 max-w-5xl text-4xl font-black leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
            >
              We Build Digital Systems That Help Businesses
              <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-white bg-clip-text text-transparent">
                Generate, Track & Convert Leads
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg"
            >
              Infriva Solutions builds modern websites, custom CRMs, web
              applications, SEO systems, Meta Ads funnels, WhatsApp API
              integrations and automation workflows that connect directly with
              your lead management process.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 text-base font-extrabold text-slate-950 shadow-2xl shadow-violet-500/25 transition hover:-translate-y-1 hover:bg-violet-50"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
              </a>

              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-7 py-4 text-base font-extrabold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
              >
                View Our Work
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {services.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-slate-200 backdrop-blur"
                >
                  <CheckCircle2 className="h-4 w-4 text-green-300" />
                  {item}
                </span>
              ))}
            </motion.div>

            <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
              {heroStats.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
                  >
                    <Icon className="h-7 w-7 text-violet-300" />
                    <h3 className="mt-4 text-2xl font-black">{item.value}</h3>
                    <p className="mt-1 text-sm text-slate-300">{item.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.3rem] border border-white/15 bg-white/10 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 bg-white/10 px-6 py-5">
                <div>
                  <p className="flex items-center gap-2 text-sm font-bold text-white">
                    <Zap className="h-4 w-4 text-yellow-300" />
                    Infriva Business OS
                  </p>
                  <p className="mt-1 text-xs text-slate-300">
                    Website + CRM + Marketing + Automation
                  </p>
                </div>

                <span className="rounded-full bg-green-400/15 px-3 py-1 text-xs font-bold text-green-300">
                  Live System
                </span>
              </div>

              <div className="p-5 md:p-6">
                <div className="rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 p-6 shadow-2xl shadow-violet-900/20">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white/75">
                        Growth Dashboard
                      </p>
                      <h3 className="mt-3 text-4xl font-black">247 Leads</h3>
                      <p className="mt-2 text-sm text-white/75">
                        Captured from website, ads and WhatsApp
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/15 p-3">
                      <BarChart3 className="h-8 w-8" />
                    </div>
                  </div>

                  <div className="mt-7 h-3 overflow-hidden rounded-full bg-white/20">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "78%" }}
                      transition={{ delay: 0.8, duration: 1 }}
                      className="h-full rounded-full bg-white"
                    />
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <div className="rounded-2xl bg-white/15 p-3">
                      <p className="text-xs text-white/70">New</p>
                      <p className="mt-1 text-xl font-black">38</p>
                    </div>

                    <div className="rounded-2xl bg-white/15 p-3">
                      <p className="text-xs text-white/70">Hot</p>
                      <p className="mt-1 text-xl font-black">14</p>
                    </div>

                    <div className="rounded-2xl bg-white/15 p-3">
                      <p className="text-xs text-white/70">Won</p>
                      <p className="mt-1 text-xl font-black">09</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-4">
                  {dashboardCards.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.12, duration: 0.5 }}
                      className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/10 p-4"
                    >
                      <div>
                        <p className="text-sm text-slate-300">{item.title}</p>
                        <h4 className="mt-1 font-extrabold text-white">
                          {item.value}
                        </h4>
                      </div>

                      <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-violet-700">
                        {item.tag}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-5 rounded-3xl border border-white/10 bg-slate-950/50 p-5">
                  <p className="mb-4 font-extrabold text-white">Lead Flow</p>

                  <div className="grid gap-3">
                    {[
                      "Landing Page",
                      "Enquiry Form",
                      "CRM Capture",
                      "Sales Follow-up",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-2xl bg-white/10 px-4 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-500 text-xs font-bold">
                            {index + 1}
                          </span>
                          <span className="text-sm font-semibold text-slate-200">
                            {item}
                          </span>
                        </div>

                        {index === 3 ? (
                          <CheckCircle2 className="h-5 w-5 text-green-300" />
                        ) : (
                          <ArrowRight className="h-4 w-4 text-slate-400" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-5 top-14 hidden rounded-2xl border border-white/10 bg-white px-5 py-4 shadow-2xl md:block"
            >
              <p className="flex items-center gap-2 text-sm font-black text-slate-900">
                <ShieldCheck className="h-4 w-4 text-violet-600" />
                Secure Systems
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
              className="absolute -right-5 top-52 hidden rounded-2xl border border-white/10 bg-white px-5 py-4 shadow-2xl md:block"
            >
              <p className="flex items-center gap-2 text-sm font-black text-slate-900">
                <MessageCircle className="h-4 w-4 text-violet-600" />
                WhatsApp API
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-10 left-8 hidden rounded-2xl border border-white/10 bg-white px-5 py-4 shadow-2xl md:block"
            >
              <p className="flex items-center gap-2 text-sm font-black text-slate-900">
                <Rocket className="h-4 w-4 text-violet-600" />
                Growth Ready
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
