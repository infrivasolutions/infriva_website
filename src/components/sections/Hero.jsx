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
  "Website",
  "CRM",
  "SEO",
  "Meta Ads",
  "WhatsApp API",
  "Automation",
];

const highlights = [
  {
    icon: Globe2,
    title: "Websites",
    text: "Fast, modern & SEO-ready",
  },
  {
    icon: DatabaseZap,
    title: "CRM Systems",
    text: "Track every lead clearly",
  },
  {
    icon: Workflow,
    title: "Automation",
    text: "Save time on follow-ups",
  },
];

const systemFlow = [
  {
    icon: Code2,
    title: "Build",
    text: "Website, landing page or web app",
  },
  {
    icon: BarChart3,
    title: "Capture",
    text: "Leads from ads, forms & WhatsApp",
  },
  {
    icon: MessageCircle,
    title: "Convert",
    text: "CRM follow-up and sales tracking",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f8f5f0] pb-20 pt-28 text-slate-950 md:pt-36"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_34%)]" />

      <div className="absolute left-0 top-0 h-full w-full opacity-[0.45] [background-image:linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />

      <motion.div
        animate={{ y: [0, -24, 0], x: [0, 18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-20 top-36 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 24, 0], x: [0, -18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-24 bottom-10 h-96 w-96 rounded-full bg-blue-300/25 blur-3xl"
      />

      <Container>
        <div className="relative z-10 grid min-h-[calc(100vh-120px)] items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-violet-600" />
              <span className="text-sm font-black text-violet-700">
                Full-Stack IT Solutions Company
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.65 }}
              className="mt-7 max-w-5xl text-4xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-6xl lg:text-7xl"
            >
              Build a Website That Works Like a
              <span className="block bg-gradient-to-r from-violet-700 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Complete Business System
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.65 }}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg"
            >
              We design websites, CRMs, ads funnels and automation systems that
              help your business generate leads, manage follow-ups and convert
              more customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.65 }}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center rounded-full bg-violet-700 px-7 py-4 text-base font-black text-white shadow-2xl shadow-violet-200 transition hover:-translate-y-1 hover:bg-violet-800"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-4 text-base font-black text-slate-950 shadow-sm transition hover:-translate-y-1 hover:border-violet-200 hover:text-violet-700"
              >
                Explore Services
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.65 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {services.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm"
                >
                  <CheckCircle2 className="h-4 w-4 text-violet-600" />
                  {item}
                </span>
              ))}
            </motion.div>

            <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      duration: 0.55,
                    }}
                    className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-4 text-lg font-black text-slate-950">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.75 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2.7rem] bg-gradient-to-br from-violet-300/45 via-blue-200/30 to-white blur-2xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white p-4 shadow-2xl shadow-slate-200/80">
              <div className="rounded-[2rem] bg-slate-950 p-5 text-white md:p-6">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                  <div>
                    <p className="inline-flex items-center gap-2 text-sm font-black text-violet-200">
                      <Zap className="h-4 w-4 text-yellow-300" />
                      Infriva Growth Stack
                    </p>

                    <h3 className="mt-2 text-2xl font-black">
                      Website + CRM + Marketing
                    </h3>
                  </div>

                  <span className="rounded-full bg-green-400/15 px-3 py-1 text-xs font-black text-green-300">
                    Live
                  </span>
                </div>

                <div className="mt-6 rounded-3xl bg-gradient-to-br from-violet-600 to-blue-600 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-white/75">
                        Monthly Lead Pipeline
                      </p>

                      <h4 className="mt-3 text-5xl font-black">247</h4>

                      <p className="mt-2 text-sm text-white/75">
                        Leads captured from website, ads and WhatsApp
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
                </div>

                <div className="mt-5 grid gap-3">
                  {systemFlow.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.65 + index * 0.12,
                          duration: 0.45,
                        }}
                        className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/10 p-4"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-violet-700">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <h4 className="font-black text-white">
                            {item.title}
                          </h4>

                          <p className="mt-1 text-sm text-slate-300">
                            {item.text}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -left-3 top-12 hidden rounded-2xl bg-white px-5 py-4 shadow-2xl md:block"
            >
              <p className="flex items-center gap-2 text-sm font-black text-slate-900">
                <ShieldCheck className="h-4 w-4 text-violet-600" />
                Secure Systems
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
              className="absolute -right-3 bottom-16 hidden rounded-2xl bg-white px-5 py-4 shadow-2xl md:block"
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