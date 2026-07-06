"use client";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  FolderKanban,
  Layers3,
  MessageCircle,
  Sparkles,
  Timer,
  UserRound,
  Zap,
} from "lucide-react";
const fadeUp = { hidden: { opacity: 0, y: 45 }, show: { opacity: 1, y: 0 } };
const fadeLeft = { hidden: { opacity: 0, x: -45 }, show: { opacity: 1, x: 0 } };
const fadeRight = { hidden: { opacity: 0, x: 45 }, show: { opacity: 1, x: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
export default function ProjectDetailClient({ project, otherProjects = [] }) {
  return (
    <>
      {" "}
      <Navbar />{" "}
      <main className="overflow-hidden bg-slate-950">
        {" "}
        {/* Hero */}{" "}
        <section className="relative min-h-[82vh] overflow-hidden bg-slate-950 pb-20 pt-36 text-white md:pt-44">
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
              initial="hidden"
              animate="show"
              variants={stagger}
              className="relative z-10 mx-auto max-w-5xl text-center"
            >
              {" "}
              <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
                {" "}
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-bold text-violet-100 backdrop-blur transition hover:bg-white/15"
                >
                  {" "}
                  ← Back To Projects{" "}
                </Link>{" "}
              </motion.div>{" "}
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-violet-300"
              >
                {" "}
                {project.category}{" "}
              </motion.p>{" "}
              <motion.h1
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-7xl"
              >
                {" "}
                {project.title}{" "}
              </motion.h1>{" "}
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg"
              >
                {" "}
                {project.description}{" "}
              </motion.p>{" "}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
              >
                {" "}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 font-extrabold text-slate-950 shadow-2xl shadow-primary/20 transition hover:-translate-y-1 hover:bg-primary-light"
                  >
                    {" "}
                    Visit Website <ExternalLink className="ml-2 h-5 w-5" />{" "}
                  </a>
                )}{" "}
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-7 py-4 font-extrabold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
                >
                  {" "}
                  Build Similar Project{" "}
                </Link>{" "}
              </motion.div>{" "}
            </motion.div>{" "}
          </Container>{" "}
        </section>{" "}
        {/* Project Image */}{" "}
        <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
          {" "}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.24),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.18),transparent_36%)]" />{" "}
          <Container>
            {" "}
            <motion.div
              initial={{ opacity: 0, y: 45, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              {" "}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/30 to-fuchsia-500/30 blur-2xl" />{" "}
              <div className="relative h-[320px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-2xl shadow-black/30 backdrop-blur-xl md:h-[520px]">
                {" "}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />{" "}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />{" "}
              </div>{" "}
            </motion.div>{" "}
          </Container>{" "}
        </section>{" "}
        {/* Overview */}{" "}
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
          <Container>
            {" "}
            <div className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
              {" "}
              <motion.div variants={fadeLeft} transition={{ duration: 0.7 }}>
                {" "}
                <span className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-bold text-violet-100 backdrop-blur">
                  {" "}
                  Project Overview{" "}
                </span>{" "}
                <h2 className="mt-6 text-3xl font-black tracking-tight text-white md:text-5xl">
                  {" "}
                  About The Project{" "}
                </h2>{" "}
                <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
                  {" "}
                  {project.longDescription || project.description}{" "}
                </p>{" "}
                {project.features && (
                  <motion.div
                    variants={stagger}
                    className="mt-10 grid gap-4 md:grid-cols-2"
                  >
                    {" "}
                    {project.features.map((feature) => (
                      <motion.div
                        key={feature}
                        variants={fadeUp}
                        transition={{ duration: 0.55 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl shadow-black/10 backdrop-blur-xl transition hover:border-violet-300/40 hover:bg-white/15"
                      >
                        {" "}
                        <CheckCircle2 className="h-6 w-6 text-green-300" />{" "}
                        <p className="mt-4 font-bold text-white">
                          {feature}
                        </p>{" "}
                      </motion.div>
                    ))}{" "}
                  </motion.div>
                )}{" "}
              </motion.div>{" "}
              <motion.div
                variants={fadeRight}
                transition={{ duration: 0.7 }}
                className="rounded-[2rem] border border-white/10 bg-white/10 p-7 shadow-2xl shadow-black/10 backdrop-blur-xl md:p-8"
              >
                {" "}
                <h3 className="text-2xl font-black text-white">
                  {" "}
                  Project Details{" "}
                </h3>{" "}
                <div className="mt-7 space-y-5">
                  {" "}
                  <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/10 p-4">
                    {" "}
                    <UserRound className="h-6 w-6 text-violet-300" />{" "}
                    <div>
                      {" "}
                      <p className="text-sm text-slate-400">Client Type</p>{" "}
                      <p className="font-bold text-white">
                        {" "}
                        {project.client || "Business"}{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/10 p-4">
                    {" "}
                    <Layers3 className="h-6 w-6 text-violet-300" />{" "}
                    <div>
                      {" "}
                      <p className="text-sm text-slate-400">Category</p>{" "}
                      <p className="font-bold text-white">
                        {" "}
                        {project.category}{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                  <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/10 p-4">
                    {" "}
                    <Timer className="h-6 w-6 text-violet-300" />{" "}
                    <div>
                      {" "}
                      <p className="text-sm text-slate-400">Timeline</p>{" "}
                      <p className="font-bold text-white">
                        {" "}
                        {project.timeline || "Project Based"}{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="mt-8">
                  {" "}
                  <p className="font-bold text-white">Services</p>{" "}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {" "}
                    {(project.services || project.tags || []).map((item) => (
                      <motion.span
                        key={item}
                        whileHover={{ y: -4, scale: 1.05 }}
                        className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-bold text-slate-200"
                      >
                        {" "}
                        {item}{" "}
                      </motion.span>
                    ))}{" "}
                  </div>{" "}
                </div>{" "}
              </motion.div>{" "}
            </div>{" "}
          </Container>{" "}
        </motion.section>{" "}
        {/* Results */}{" "}
        {project.results && (
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="relative overflow-hidden bg-slate-950 py-24 text-white"
          >
            {" "}
            <motion.div
              animate={{ x: [0, -35, 0], y: [0, 25, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl"
            />{" "}
            <Container>
              {" "}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="relative z-10 mx-auto max-w-3xl text-center"
              >
                {" "}
                <span className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-bold text-violet-100 backdrop-blur">
                  {" "}
                  Results{" "}
                </span>{" "}
                <h2 className="mt-6 text-3xl font-black tracking-tight text-white md:text-5xl">
                  {" "}
                  What We Delivered{" "}
                </h2>{" "}
              </motion.div>{" "}
              <motion.div
                variants={stagger}
                className="relative z-10 mt-14 grid gap-6 md:grid-cols-2"
              >
                {" "}
                {project.results.map((result) => (
                  <motion.div
                    key={result}
                    variants={fadeUp}
                    transition={{ duration: 0.55 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="rounded-[2rem] border border-white/10 bg-white/10 p-7 shadow-2xl shadow-black/10 backdrop-blur-xl transition hover:border-violet-300/40 hover:bg-white/15"
                  >
                    {" "}
                    <CheckCircle2 className="h-7 w-7 text-green-300" />{" "}
                    <p className="mt-4 font-bold leading-7 text-white">
                      {" "}
                      {result}{" "}
                    </p>{" "}
                  </motion.div>
                ))}{" "}
              </motion.div>{" "}
            </Container>{" "}
          </motion.section>
        )}{" "}
        {/* Other Projects */}{" "}
        {otherProjects.length > 0 && (
          <motion.section
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="relative overflow-hidden bg-slate-950 py-24 text-white"
          >
            {" "}
            <Container>
              {" "}
              <div className="relative z-10 mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                {" "}
                <motion.div variants={fadeLeft} transition={{ duration: 0.7 }}>
                  {" "}
                  <span className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-bold text-violet-100 backdrop-blur">
                    {" "}
                    More Work{" "}
                  </span>{" "}
                  <h2 className="mt-5 text-3xl font-black text-white md:text-5xl">
                    {" "}
                    Other Projects{" "}
                  </h2>{" "}
                </motion.div>{" "}
                <motion.div variants={fadeRight} transition={{ duration: 0.7 }}>
                  {" "}
                  <Link
                    href="/projects"
                    className="font-bold text-violet-300 hover:text-white"
                  >
                    {" "}
                    View All Projects →{" "}
                  </Link>{" "}
                </motion.div>{" "}
              </div>{" "}
              <motion.div
                variants={stagger}
                className="relative z-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {" "}
                {otherProjects.map((item) => (
                  <motion.div
                    key={item.slug}
                    variants={fadeUp}
                    transition={{ duration: 0.55 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    {" "}
                    <Link
                      href={`/projects/${item.slug}`}
                      className="group block h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-2xl shadow-black/10 backdrop-blur-xl transition hover:border-violet-300/40 hover:bg-white/15"
                    >
                      {" "}
                      <div className="relative h-52 bg-white/10">
                        {" "}
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition group-hover:scale-105"
                        />{" "}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />{" "}
                      </div>{" "}
                      <div className="p-6">
                        {" "}
                        <p className="text-sm font-bold text-violet-300">
                          {" "}
                          {item.category}{" "}
                        </p>{" "}
                        <h3 className="mt-3 text-2xl font-black text-white">
                          {" "}
                          {item.title}{" "}
                        </h3>{" "}
                        <p className="mt-3 text-sm leading-6 text-slate-300">
                          {" "}
                          {item.description}{" "}
                        </p>{" "}
                      </div>{" "}
                    </Link>{" "}
                  </motion.div>
                ))}{" "}
              </motion.div>{" "}
            </Container>{" "}
          </motion.section>
        )}{" "}
        {/* Final CTA */}{" "}
        <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
          {" "}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.26),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.2),transparent_36%)]" />{" "}
          <motion.div
            animate={{ x: [0, 40, 0], y: [0, -25, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-primary/25 blur-3xl"
          />{" "}
          <motion.div
            animate={{ x: [0, -40, 0], y: [0, 25, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl"
          />{" "}
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
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-violet-300"
              >
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
                Start Your Project{" "}
              </motion.p>{" "}
              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mt-5 text-4xl font-black md:text-6xl"
              >
                {" "}
                Want a project like this?{" "}
              </motion.h2>{" "}
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mx-auto mt-6 max-w-2xl text-slate-300"
              >
                {" "}
                Let’s discuss your business goals and build a website, CRM or
                digital system that helps you grow.{" "}
              </motion.p>{" "}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
              >
                {" "}
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-primary-dark"
                >
                  {" "}
                  Get Free Consultation{" "}
                  <ArrowRight className="ml-2 h-5 w-5" />{" "}
                </Link>{" "}
                <a
                  href="https://wa.me/918287628307"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white/15"
                >
                  {" "}
                  <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Us{" "}
                </a>{" "}
              </motion.div>{" "}
            </motion.div>{" "}
          </Container>{" "}
        </section>{" "}
      </main>{" "}
      <Footer />{" "}
    </>
  );
}
