"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { projects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  FolderKanban,
  Sparkles,
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

export default function ProjectsClient() {
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
            className="absolute left-10 top-32 h-72 w-72 rounded-full bg-primary/30 blur-3xl"
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
                Our Work
              </motion.span>

              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mt-8 text-4xl font-black leading-tight tracking-tight md:text-7xl"
              >
                Projects That Build Trust And
                <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-white bg-clip-text text-transparent">
                  Generate Business
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg"
              >
                Real digital projects designed to improve brand presence,
                customer experience, lead capture and business growth.
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
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-7 py-4 font-extrabold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
                >
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>
          </Container>
        </section>

        {/* Projects */}
        <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.26),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.2),transparent_36%),linear-gradient(180deg,#111827_0%,#0f172a_48%,#020617_100%)]" />

          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:70px_70px]" />

          <motion.div
            animate={{ x: [0, 35, 0], y: [0, -25, 0], scale: [1, 1.12, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-primary/25 blur-3xl"
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
                  Featured Projects
                </span>

                <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">
                  Recent Work Built For
                  <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-white bg-clip-text text-transparent">
                    Real Business Use Cases
                  </span>
                </h2>

                <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                  A look at some digital products and websites we have built for
                  different industries.
                </p>
              </motion.div>

              <motion.div
                variants={stagger}
                className="mt-14 grid gap-8 lg:grid-cols-2"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.slug}
                    variants={fadeUp}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.08,
                      ease: "easeOut",
                    }}
                    whileHover={{ y: -12, scale: 1.01 }}
                    className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-2xl shadow-black/10 backdrop-blur-xl transition hover:border-violet-300/40 hover:bg-white/15"
                  >
                    <div className="relative h-72 overflow-hidden bg-white/10 md:h-80">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />

                      <motion.div
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl"
                      />

                      <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3">
                        <span className="rounded-full border border-white/10 bg-white/15 px-4 py-2 text-sm font-bold text-white shadow-lg backdrop-blur">
                          {project.category}
                        </span>

                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur">
                          Case Study
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>

                    <div className="p-7 md:p-8">
                      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-violet-200 transition group-hover:bg-primary group-hover:text-white">
                        <FolderKanban className="h-7 w-7" />
                      </div>

                      <h3 className="text-3xl font-black tracking-tight text-white">
                        {project.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-slate-300">
                        {project.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {(project.tags || []).map((tag) => (
                          <motion.span
                            key={tag}
                            whileHover={{ y: -4, scale: 1.05 }}
                            className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold text-slate-200"
                          >
                            {tag}
                          </motion.span>
                        ))}
                      </div>

                      <div className="mt-8 flex flex-wrap items-center gap-3">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-bold text-white transition hover:bg-primary-dark"
                        >
                          View Case Study
                          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                        </Link>

                        {project.website && (
                          <a
                            href={project.website}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:border-violet-300/40 hover:bg-white/15"
                          >
                            Live Website
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
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
                  Have An Idea?
                </p>

                <h2 className="mt-4 text-3xl font-black md:text-5xl">
                  We can build a project like this for your business too.
                </h2>

                <p className="mt-5 max-w-2xl text-slate-300">
                  Share your requirement and we will suggest the right website,
                  CRM, dashboard or automation solution.
                </p>
              </motion.div>

              <motion.div
                variants={fadeRight}
                transition={{ duration: 0.7 }}
                className="flex lg:justify-end"
              >
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-primary-dark"
                >
                  Discuss Project
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
