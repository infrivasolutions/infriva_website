"use client";
import Container from "../ui/Container";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Headphones,
  Lightbulb,
  PenTool,
  Rocket,
  SearchCheck,
  Sparkles,
  Zap,
} from "lucide-react";
const steps = [
  {
    number: "01",
    icon: SearchCheck,
    title: "Consultation",
    description:
      "We understand your business, goals, target audience, problems and project requirements.",
    points: ["Business discussion", "Requirement clarity", "Goal mapping"],
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Planning",
    description:
      "We create a clear roadmap with features, pages, technology, timeline and growth strategy.",
    points: ["Feature planning", "User journey", "Project roadmap"],
  },
  {
    number: "03",
    icon: PenTool,
    title: "Design",
    description:
      "We design a modern, premium and conversion-focused interface for your website or system.",
    points: ["UI/UX design", "Mobile responsive", "Conversion focused"],
  },
  {
    number: "04",
    icon: Code2,
    title: "Development",
    description:
      "Our team builds the website, CRM, dashboard or automation using reliable modern technology.",
    points: ["Frontend development", "Backend/API setup", "CRM integration"],
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch",
    description:
      "We test performance, responsiveness, forms, tracking and deploy your project live.",
    points: ["Testing", "Deployment", "Go live"],
  },
  {
    number: "06",
    icon: Headphones,
    title: "Support",
    description:
      "After launch, we help with updates, improvements, technical support and growth optimization.",
    points: ["Maintenance", "Improvements", "Growth support"],
  },
];
const fadeUp = { hidden: { opacity: 0, y: 45 }, show: { opacity: 1, y: 0 } };
const fadeLeft = { hidden: { opacity: 0, x: -45 }, show: { opacity: 1, x: 0 } };
const fadeRight = { hidden: { opacity: 0, x: 45 }, show: { opacity: 1, x: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
export default function Process() {
  return (
    <section
      id="process"
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
              Our Process{" "}
            </div>{" "}
            <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">
              {" "}
              A Clear Process To Build, Launch And{" "}
              <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-white bg-clip-text text-transparent">
                {" "}
                Grow Your Digital System{" "}
              </span>{" "}
            </h2>{" "}
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              {" "}
              Every project follows a structured workflow so your website, CRM
              or automation system is planned properly, built professionally and
              launched smoothly.{" "}
            </p>{" "}
          </motion.div>{" "}
          <div className="relative mt-16">
            {" "}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 lg:block" />{" "}
            <motion.div variants={stagger} className="grid gap-8">
              {" "}
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isRight = index % 2 !== 0;
                return (
                  <motion.div
                    key={step.number}
                    variants={fadeUp}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.04,
                      ease: "easeOut",
                    }}
                    className={`relative grid gap-6 lg:grid-cols-2 lg:items-center ${isRight ? "lg:[&>div:first-child]:col-start-2" : ""}`}
                  >
                    {" "}
                    <motion.div
                      whileHover={{ y: -10, scale: 1.02 }}
                      className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-7 shadow-2xl shadow-black/10 backdrop-blur-xl transition hover:border-violet-300/40 hover:bg-white/15 md:p-8 ${isRight ? "lg:ml-10" : "lg:mr-10"}`}
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
                        <div className="absolute -top-12 left-0 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-black text-violet-100 shadow-xl backdrop-blur">
                          {" "}
                          Step {step.number}{" "}
                        </div>{" "}
                        <div className="mt-3 flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10 text-violet-200 transition group-hover:bg-primary group-hover:text-white">
                          {" "}
                          <Icon className="h-8 w-8" />{" "}
                        </div>{" "}
                        <h3 className="mt-7 text-2xl font-black tracking-tight text-white md:text-3xl">
                          {" "}
                          {step.title}{" "}
                        </h3>{" "}
                        <p className="mt-4 text-sm leading-7 text-slate-300">
                          {" "}
                          {step.description}{" "}
                        </p>{" "}
                        <div className="mt-6 grid gap-3">
                          {" "}
                          {step.points.map((point) => (
                            <motion.div
                              key={point}
                              whileHover={{ x: 8 }}
                              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3"
                            >
                              {" "}
                              <CheckCircle2 className="h-5 w-5 shrink-0 text-green-300" />{" "}
                              <span className="text-sm font-semibold text-white/90">
                                {" "}
                                {point}{" "}
                              </span>{" "}
                            </motion.div>
                          ))}{" "}
                        </div>{" "}
                      </div>{" "}
                    </motion.div>{" "}
                    <motion.div
                      animate={{ scale: [1, 1.25, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute left-1/2 top-1/2 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-slate-950 bg-primary shadow-lg shadow-primary/40 lg:block"
                    />{" "}
                  </motion.div>
                );
              })}{" "}
            </motion.div>{" "}
          </div>{" "}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.01 }}
            className="mt-16 overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/10 p-8 text-white shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10"
          >
            {" "}
            <div className="relative">
              {" "}
              <motion.div
                animate={{ x: ["-20%", "120%"] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 h-px w-44 bg-gradient-to-r from-transparent via-violet-300 to-transparent"
              />{" "}
              <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-center">
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
                    Project Execution{" "}
                  </p>{" "}
                  <h3 className="mt-4 text-3xl font-black md:text-4xl">
                    {" "}
                    From idea to launch, everything stays clear and
                    organized.{" "}
                  </h3>{" "}
                  <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                    {" "}
                    We follow a proper workflow so you know what is being built,
                    what stage your project is in and how it will help your
                    business after launch.{" "}
                  </p>{" "}
                </motion.div>{" "}
                <motion.div
                  variants={fadeRight}
                  transition={{ duration: 0.7 }}
                  className="flex lg:justify-end"
                >
                  {" "}
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-2xl bg-primary px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-primary-dark"
                  >
                    {" "}
                    Start Your Project{" "}
                    <ArrowRight className="ml-2 h-5 w-5" />{" "}
                  </a>{" "}
                </motion.div>{" "}
              </div>{" "}
            </div>{" "}
          </motion.div>{" "}
        </motion.div>{" "}
      </Container>{" "}
    </section>
  );
}
