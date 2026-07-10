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

      <main className="overflow-hidden bg-[#030914]">
        <section className="relative min-h-screen overflow-hidden pb-16 pt-28 text-white md:pb-20 md:pt-36">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(124,58,237,0.25),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(245,158,11,0.09),transparent_28%),linear-gradient(135deg,#020617_0%,#030914_55%,#090f1e_100%)]" />

          <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:60px_60px]" />

          <Container>
            <div className="relative z-10 grid items-start gap-12 lg:grid-cols-[1.05fr_0.78fr] lg:gap-16">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="pt-4 lg:pt-10"
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-bold text-slate-200 backdrop-blur">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  Digital Solutions for Growing Businesses
                </div>

                <h1 className="mt-7 max-w-3xl text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-[62px]">
                  We Build Digital Systems That Bring You{" "}
                  <span className="text-amber-400">More Leads & Sales</span>
                </h1>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                  Get a high-converting website, custom CRM, WhatsApp automation
                  or digital marketing system designed around your business
                  goals.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {trustPoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 text-sm font-semibold text-slate-200"
                    >
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-400" />
                      {point}
                    </div>
                  ))}
                </div>

                <div className="mt-10 grid grid-cols-2 gap-5 border-t border-white/10 pt-8 sm:grid-cols-4">
                  <div>
                    <p className="text-2xl font-black text-amber-400">100+</p>
                    <p className="mt-1 text-xs text-slate-400">Happy Clients</p>
                  </div>

                  <div>
                    <p className="text-2xl font-black text-amber-400">250+</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Projects Delivered
                    </p>
                  </div>

                  <div>
                    <p className="text-2xl font-black text-amber-400">5+</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Years Experience
                    </p>
                  </div>

                  <div>
                    <p className="text-2xl font-black text-amber-400">4.9/5</p>
                    <p className="mt-1 text-xs text-slate-400">Client Rating</p>

                    <div className="mt-1 flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <Star
                          key={item}
                          className="h-3 w-3 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;

                    const content = (
                      <div className="group flex h-full items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur transition hover:border-violet-400/40 hover:bg-white/[0.08]">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                            {item.title}
                          </p>
                          <p className="mt-1 text-sm font-bold text-white">
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

              {/* Contact Form */}
              <motion.div
                id="contact"
                initial={{ opacity: 0, x: 35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="rounded-[28px] border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-7"
              >
                <div className="mb-6">
                  <h2 className="text-2xl font-black text-white md:text-3xl">
                    Get Your Free Consultation
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Tell us about your requirement and our team will contact you
                    shortly.
                  </p>
                </div>

                <ContactForm />

                <div className="mt-5 flex items-center justify-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="h-4 w-4" />
                  Your information is private and secure.
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        <a
          href="https://wa.me/918287628307?text=Hello%20Infriva%20Solutions%2C%20I%20want%20a%20free%20consultation."
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110 hover:bg-green-600"
        >
          <MessageCircle className="h-7 w-7" />
        </a>
      </main>

      <Footer />
    </>
  );
}
