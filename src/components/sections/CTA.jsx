"use client";
import Container from "../ui/Container";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageCircle,
  PhoneCall,
  Sparkles,
  Zap,
} from "lucide-react";
const points = [
  "Free project consultation",
  "Website + CRM lead capture planning",
  "SEO, Ads & automation roadmap",
  "Clear budget and timeline discussion",
];
const fadeUp = { hidden: { opacity: 0, y: 45 }, show: { opacity: 1, y: 0 } };
const fadeLeft = { hidden: { opacity: 0, x: -45 }, show: { opacity: 1, x: 0 } };
const fadeRight = { hidden: { opacity: 0, x: 45 }, show: { opacity: 1, x: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 text-white">
      {" "}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.26),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(217,70,239,0.2),transparent_36%),linear-gradient(180deg,#020617_0%,#0f172a_48%,#111827_100%)]" />{" "}
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:70px_70px]" />{" "}
      <motion.div
        animate={{ x: [0, 35, 0], y: [0, -25, 0], scale: [1, 1.12, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-primary/25 blur-3xl"
      />{" "}
      <motion.div
        animate={{ x: [0, -35, 0], y: [0, 25, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl"
      />{" "}
      <Container>
        {" "}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="relative z-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 p-8 text-white shadow-2xl shadow-black/20 backdrop-blur-xl md:p-12 lg:p-14"
        >
          {" "}
          <motion.div
            animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.12, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 top-0 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
          />{" "}
          <motion.div
            animate={{ opacity: [0.2, 0.45, 0.2], scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-fuchsia-400/20 blur-3xl"
          />{" "}
          <motion.div
            animate={{ x: ["-20%", "120%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 h-px w-56 bg-gradient-to-r from-transparent via-violet-300 to-transparent"
          />{" "}
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {" "}
            <motion.div variants={fadeLeft} transition={{ duration: 0.7 }}>
              {" "}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-violet-100 backdrop-blur">
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
                Ready To Grow?{" "}
              </div>{" "}
              <h2 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">
                {" "}
                Let’s build a digital system that brings{" "}
                <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-white bg-clip-text text-transparent">
                  {" "}
                  leads to your business.{" "}
                </span>{" "}
              </h2>{" "}
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                {" "}
                Whether you need a modern website, CRM, SEO, Meta Ads, WhatsApp
                API or automation, Infriva Solutions can help you plan and build
                the right system for growth.{" "}
              </p>{" "}
              <motion.div
                variants={stagger}
                className="mt-8 grid gap-3 sm:grid-cols-2"
              >
                {" "}
                {points.map((point) => (
                  <motion.div
                    key={point}
                    variants={fadeUp}
                    whileHover={{ x: 8, scale: 1.02 }}
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
              </motion.div>{" "}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                {" "}
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-7 py-4 font-bold text-slate-950 shadow-2xl shadow-primary/20 transition hover:-translate-y-1 hover:bg-primary-light"
                >
                  {" "}
                  Get Free Consultation{" "}
                  <ArrowRight className="ml-2 h-5 w-5" />{" "}
                </a>{" "}
                <a
                  href="https://wa.me/918287628307"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/10 px-7 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white/15"
                >
                  {" "}
                  <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp Us{" "}
                </a>{" "}
              </motion.div>{" "}
            </motion.div>{" "}
            <motion.div
              variants={fadeRight}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-8"
            >
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
                Quick Contact{" "}
              </p>{" "}
              <h3 className="mt-4 text-3xl font-black">
                {" "}
                Discuss your project with us.{" "}
              </h3>{" "}
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {" "}
                Share your requirement and we will guide you with the right
                website, CRM, marketing or automation solution.{" "}
              </p>{" "}
              <div className="mt-8 space-y-4">
                {" "}
                <a
                  href="tel:+918287628307"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 transition hover:bg-white/15"
                >
                  {" "}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-violet-200 transition group-hover:bg-primary group-hover:text-white">
                    {" "}
                    <PhoneCall className="h-5 w-5" />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <p className="text-sm text-slate-300">Call Us</p>{" "}
                    <p className="font-bold text-white">+91 82876 28307</p>{" "}
                  </div>{" "}
                </a>{" "}
                <a
                  href="mailto:info@infrivasolutions.com"
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 transition hover:bg-white/15"
                >
                  {" "}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-violet-200 transition group-hover:bg-primary group-hover:text-white">
                    {" "}
                    <Mail className="h-5 w-5" />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <p className="text-sm text-slate-300">Email Us</p>{" "}
                    <p className="break-all font-bold text-white">
                      {" "}
                      info@infrivasolutions.com{" "}
                    </p>{" "}
                  </div>{" "}
                </a>{" "}
              </div>{" "}
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/10 p-5">
                {" "}
                <p className="text-sm font-semibold leading-7 text-slate-300">
                  {" "}
                  Your enquiry will be captured in our CRM so our team can
                  follow up quickly.{" "}
                </p>{" "}
              </div>{" "}
            </motion.div>{" "}
          </div>{" "}
        </motion.div>{" "}
      </Container>{" "}
    </section>
  );
}
