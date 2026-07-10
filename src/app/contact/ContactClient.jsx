"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/sections/ContactForm";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 82876 28307",
    href: "tel:+918287628307",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with our team",
    href: "https://wa.me/918287628307?text=Hello%20Infriva%20Solutions%2C%20I%20want%20a%20free%20consultation.",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@infrivasolutions.com",
    href: "mailto:info@infrivasolutions.com",
  },
  {
    icon: Clock3,
    title: "Response Time",
    value: "Quick business response",
    href: null,
  },
];

const trustPoints = [
  "Free Consultation",
  "No Obligation",
  "CRM Connected Enquiry",
  "Quick Response",
];

export default function ContactClient() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-background">
        <section className="relative min-h-screen overflow-hidden pb-16 pt-28 text-foreground md:pb-20 md:pt-36">
          {/* Theme background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(124,58,237,0.18),transparent_30%),radial-gradient(circle_at_88%_16%,rgba(237,233,254,0.9),transparent_30%),linear-gradient(135deg,#f8f5f0_0%,#faf7f2_50%,#ffffff_100%)]" />

          <div className="absolute inset-0 opacity-[0.45] [background-image:linear-gradient(to_right,rgba(124,58,237,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(124,58,237,0.06)_1px,transparent_1px)] [background-size:60px_60px]" />

          <motion.div
            animate={{ y: [0, -25, 0], x: [0, 20, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-24 top-36 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
          />

          <motion.div
            animate={{ y: [0, 25, 0], x: [0, -20, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-primary-light blur-3xl"
          />

          <Container>
            <div className="relative z-10 grid items-start gap-12 lg:grid-cols-[1.03fr_0.82fr] lg:gap-16">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="pt-4 lg:pt-10"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/70 px-4 py-2 text-xs font-bold text-primary-dark shadow-sm backdrop-blur">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  Digital Solutions for Growing Businesses
                </div>

                <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[62px]">
                  We Build Digital Systems That Bring You{" "}
                  <span className="bg-gradient-to-r from-primary-dark via-primary to-violet-500 bg-clip-text text-transparent">
                    More Leads & Sales
                  </span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-muted md:text-lg">
                  Get a high-converting website, custom CRM, WhatsApp automation
                  or digital marketing system designed around your business
                  goals.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {trustPoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 text-sm font-semibold text-foreground"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-light">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                      </div>

                      {point}
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="mt-10 grid grid-cols-2 gap-4 border-t border-border pt-8 sm:grid-cols-4">
                  <div className="rounded-2xl border border-border bg-white/70 p-4 shadow-sm backdrop-blur">
                    <p className="text-2xl font-black text-primary">100+</p>
                    <p className="mt-1 text-xs text-muted">Happy Clients</p>
                  </div>

                  <div className="rounded-2xl border border-border bg-white/70 p-4 shadow-sm backdrop-blur">
                    <p className="text-2xl font-black text-primary">250+</p>
                    <p className="mt-1 text-xs text-muted">
                      Projects Delivered
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-white/70 p-4 shadow-sm backdrop-blur">
                    <p className="text-2xl font-black text-primary">5+</p>
                    <p className="mt-1 text-xs text-muted">Years Experience</p>
                  </div>

                  <div className="rounded-2xl border border-border bg-white/70 p-4 shadow-sm backdrop-blur">
                    <p className="text-2xl font-black text-primary">4.9/5</p>
                    <p className="mt-1 text-xs text-muted">Client Rating</p>

                    <div className="mt-1 flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <Star
                          key={item}
                          className="h-3 w-3 fill-primary text-primary"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Contact cards */}
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;

                    const content = (
                      <div className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-white/80 p-4 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-light text-primary transition group-hover:bg-primary group-hover:text-white">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                            {item.title}
                          </p>

                          <p className="mt-1 break-all text-sm font-bold text-foreground sm:break-normal">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );

                    if (item.href) {
                      return (
                        <a
                          key={item.title}
                          href={item.href}
                          target={
                            item.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            item.href.startsWith("http")
                              ? "noreferrer"
                              : undefined
                          }
                        >
                          {content}
                        </a>
                      );
                    }

                    return <div key={item.title}>{content}</div>;
                  })}
                </div>
              </motion.div>

              {/* Contact Form Card */}
              <motion.div
                id="contact"
                initial={{ opacity: 0, x: 35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="rounded-[28px] border border-primary/10 bg-white/90 p-5 shadow-2xl shadow-primary/10 backdrop-blur-xl sm:p-7"
              >
                <div className="mb-6">
                  <div className="inline-flex rounded-full bg-primary-light px-3 py-1 text-xs font-bold text-primary-dark">
                    Get Started
                  </div>

                  <h2 className="mt-4 text-2xl font-black text-foreground md:text-3xl">
                    Get Your Free Consultation
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    Tell us about your requirement and our team will contact you
                    shortly.
                  </p>
                </div>

                <ContactForm />

                <div className="mt-5 flex items-center justify-center gap-2 text-xs text-muted">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  Your information is private and secure.
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Floating WhatsApp */}
        <a
          href="https://wa.me/918287628307?text=Hello%20Infriva%20Solutions%2C%20I%20want%20a%20free%20consultation."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-2xl shadow-primary/30 transition hover:scale-110 hover:bg-primary-dark"
        >
          <MessageCircle className="h-7 w-7" />
        </a>
      </main>

      <Footer />
    </>
  );
}
